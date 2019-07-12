import React from 'react';
import './logger.scss';

class Logger extends React.Component {
    constructor(props) {
        super(props);
        this.ws = new WebSocket("ws://35.154.106.116:8003/");
        this.state = {
            logs: []
        }
    }

    componentDidMount = () =>{
        this.ws.onopen = (event) => {
            console.log(event);
        }

        this.ws.onmessage = (event) => {
            var reader = new FileReader();
            reader.addEventListener("loadend", () => {
                // reader.result contains the contents of blob as a typed array
                let msg = reader.result;
                let logs = this.state.logs;
                logs.push(msg);
                this.setState({logs: logs});
            });
            reader.readAsBinaryString(event.data);
        }
    }

    render() {
        return (
            <div className="widget logger">
                {
                    this.state.logs.map((msg, index)=>(
                        <div key={index}>{msg}</div>
                    ))
                }
            </div>
        )
    }
}

export default Logger;