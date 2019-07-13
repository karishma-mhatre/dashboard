import React from 'react';
import './logger.scss';

const maxRetries = 10;
class Logger extends React.Component {
    constructor(props) {
        super(props);
        this.ws = new WebSocket("ws://35.154.106.116:8003/");
        this.state = {
            logs: [],
            error: ""
        }

        this.currentRetry = 0
    }

    componentDidMount = () =>{
        this.ws.onopen = (event) => {
            console.log("established connection");
        }

        this.ws.onerror = (event) => {
            if(this.currentRetry < maxRetries) {
                this.currentRetry++;
                this.ws = new WebSocket("ws://35.154.106.116:8003/");
            }else {
                this.setState({error: "Couldnt establish connection"});
            }
        }

        this.ws.onmessage = (event) => {
            var reader = new FileReader();
            reader.addEventListener("loadend", () => {
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
                        <div className="logger-message" key={index}>{msg}</div>
                    ))
                }
                {
                    this.state.error && 
                    <div className="error-message">{this.state.error}</div>
                }
            </div>
        )
    }
}

export default Logger;