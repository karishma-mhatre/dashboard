import React from 'react';
import './video-streamer.scss';

class VideoStreamer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            src: "",
            error: ""
        }
    }

    componentDidMount = () => {
      fetch("http://35.154.106.116:5000/video_feed")
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
      })
      .catch((error) => {
          this.setState({error: "Couldnt load data!"})
      })
  }

    render() {
        return (
            <div className="widget video-streamer">
                {
                    this.state.error && 
                    <div className="error-message">{this.state.error}</div>
                }
                {
                    this.state.src &&
                    <img src={this.state.src}></img>
                }
            </div>
        )
    }
}

export default VideoStreamer;