import React from 'react';

class VideoStreamer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            src: ""
        }
    }

    componentDidMount = () => {
      fetch("http://35.154.106.116:5000/video_feed")
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
      })
      .catch((error) => {console.log(error)})
  }

    render() {
        return (<div>
                </div>)
    }
}

export default VideoStreamer;