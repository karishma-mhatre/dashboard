import React from 'react';
import Modal from '../../Modal';
import VideoPlayer from '../../VideoPlayer';
import './video.scss';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlayer: false
        }
    }

    toggleShowPlayer = () => {
        this.setState({showPlayer: !this.state.showPlayer});
    }

    render() {
        return (<div className="widget video">
            <button type="button" onClick={this.toggleShowPlayer}>Play Video</button>
            {
                this.state.showPlayer && 
                <Modal>
                    <VideoPlayer src="https://vodafone-socialcore.s3.ap-south-1.amazonaws.com/test-video.mp4"
                                info="http://35.154.106.116:5000/videoinfo"
                                closeModal={this.toggleShowPlayer}></VideoPlayer>
                </Modal>
            }
        </div>)
    }
}

export default Video;