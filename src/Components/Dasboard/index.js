import React from 'react';
import Graph  from './Graph';
import CameraFeed from './CameraFeed';
import Logger from './Logger';
import VideoStreamer from './VideoStreamer';
import Video from './Video';
import './dashboard.scss';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <Graph></Graph>
                <CameraFeed></CameraFeed>
                <Video></Video>
                <Logger></Logger>

                <VideoStreamer></VideoStreamer>
            </div>
        )
    }
}

export default Dashboard;