import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({ url, controls, w, h, light, pip, muted }) => {
	return <ReactPlayer url={url} controls={controls} width={w} height={h} light={light} pip={pip} muted={muted} />;
};

export default VideoPlayer;
