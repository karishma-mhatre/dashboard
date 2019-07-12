import React from 'react';
import './video-player.scss';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingInfo: true,
            videoInfo: {}
        }
    }
    componentDidMount = () => {
        fetch(this.props.info)
        .then((response) => response.json())
        .then((data) => {
            this.setState({videoInfo: data,
                            isLoadingInfo: false});
        })
    }

    render() {
        return (
        <div className="video-player">
            <button className="video-player-close" type="button" onClick={this.props.closeModal}>close</button>
            <div className="video-player-video">
                <video controls>
                    <source src={this.props.src}></source>
                </video>
            </div>
            <div className="video-player-video-info">
                {
                    this.state.isLoadingInfo &&
                    <div>Video Info loading...</div>
                }
                {
                    !this.state.isLoadingInfo && 
                    <>
                    <div>Video Info</div>
                    <div>Name: {this.state.videoInfo.Name}</div>
                    <div>Casualities: {this.state.videoInfo.Casualities}</div>
                    <div>Feed Status: {this.state.videoInfo["Feed status"]}</div>
                    <div>Last Active Time: {this.state.videoInfo["Last active time"]}</div>
                    <div>Link: {this.state.videoInfo["Link"]}</div>
                    <div>Location:</div>
                    <div>Block: {this.state.videoInfo["Location"]["Block"]}</div>
                    <div>Unit: {this.state.videoInfo["Location"]["Unit"]}</div>
                    </>
                }
            </div>
        </div>)
    }
}

export default VideoPlayer;