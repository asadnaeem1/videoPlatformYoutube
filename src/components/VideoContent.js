import React, { Component } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';

export default class VideoContent extends Component {
    state = {
        videos: []
    }
    term = '';
    componentDidUpdate(){
        if (this.props.term !== this.term)
        {
            this.term = this.props.term;
            axios.get('https://www.googleapis.com/youtube/v3/search',{
                params: {
                    key: 'AIzaSyAFNSiJ3k0pTqN1OdcY3h9aHEmSR7RvvuY',
                    part: 'snippet',
                    maxResults: 4,
                    q: this.props.term
                }
            }).then((res) => this.setState({ videos: res.data.items }));
        }
    }
    render() {
        if(this.state.videos.length===0){
            return <p>Nothing to Show!</p>
        }
        else{
            if(this.state.videos[0].id.kind !== 'youtube#channel'){
                return <VideoPlayer video={this.state.videos[0]}/>    
            }
            else {
                return <VideoPlayer video={this.state.videos[1]}/>
            }
        }
    }
}
