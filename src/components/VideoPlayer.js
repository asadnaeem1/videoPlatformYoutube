import React, { Component } from 'react'

export default class VideoPlayer extends Component {
    render() {
        console.log(this.props.video);
        return (
            <div><br/>
                <iframe title={this.props.video.id.videoId} src={`https://www.youtube.com/embed/${this.props.video.id.videoId}?autoplay=1`} frameBorder="0" width="100%" height="500px" allow="autoplay;" allowFullScreen></iframe><br/>
                <h1 className='display-4'>{this.props.video.snippet.title}</h1>
                <p>{this.props.video.snippet.description}</p>
            </div>
        )
    }
}
