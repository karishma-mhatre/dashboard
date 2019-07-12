import React from 'react';
import { ChartTemplate } from '../ChartTemplate'; 
import { Line } from "react-chartjs-2";
import './graph.scss';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.ws = new WebSocket("ws://35.154.106.116:8001/");
        this.state = {
            numbers: [],
            numberCount: 0
        }
    }

    config = new ChartTemplate("line", {
        title: {
            display: true,
            text: "Line Chart"
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        },
        animation: {
            duration: 0
        },
        maintainAspectRatio: false,
        responseive: true
    });


    createGraphConfig  = (numArray) => {
        this.config.data.datasets[0].data = numArray
        
        if(this.state.numberCount > 0) {
            if(this.state.numberCount > 10) {
                this.config.data.labels.shift();
            }
            this.config.data.labels.push(this.state.numberCount);
        }
        console.log(numArray);
        console.log(this.config.data.labels);
        console.log(this.config.data.datasets[0].data);
    }

    componentDidMount = () => {
        this.ws.onopen = (event) => {
            console.log(event);
        }

        this.ws.onmessage = (event) => {;
            var reader = new FileReader();
            reader.addEventListener("loadend", () => {
                // reader.result contains the contents of blob as a typed array
                let nums = this.state.numbers;
                nums.push(+reader.result[0]);
                let numCount = this.state.numberCount;
                numCount++;
                console.log("result", nums.length);

                if(nums.length > 10) {
                    nums.shift();
                }
                
                this.setState({numberCount: numCount,
                numbers: nums});
            });
            reader.readAsText(event.data);
        }
    }

    render() {
        console.log("render");
        this.createGraphConfig(this.state.numbers);
        return (
            <div className="widget graph">
                <Line data={this.config.data} width="100%" height="200" options={this.config.options}
                    redraw></Line>
            </div>
        )
    }
}

export default Graph;