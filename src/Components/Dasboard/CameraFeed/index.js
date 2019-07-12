import React from 'react';
import './camera-feed.scss';

const maxRetries = 10;
class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.ws = new WebSocket("ws://35.154.106.116:8080/camera");
        this.state = {
            src: ""
        }

        this.currentRetry = 0;
    }

    componentDidMount = () =>{
        this.ws.onopen = (event) => {
            console.log(event);
        }

        this.ws.onerror = (event) => {
            if(this.currentRetry < maxRetries) {
                this.currentRetry++;
                this.ws = new WebSocket("ws://35.154.106.116:8080/camera");
            }
        }

        this.ws.onmessage = (event) => {
            var reader = new FileReader();
            reader.addEventListener("loadend", () => {
                // reader.result contains the contents of blob as a typed array
                let x = "data:image/jpeg;base64," + reader.result
                this.setState({src: x});
            });
            reader.readAsBinaryString(event.data);
        }
    }

    render() {
        return (
            <div className="widget camera">
                <img src={this.state.src}></img>
            </div>
        )
    }
}

export default Graph;