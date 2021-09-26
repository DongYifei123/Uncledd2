import { Component, Fragment } from "react";
import { Card } from 'antd';
import VideoPlayer from './VideoPlayer.jsx';
import { host, VideoShowList } from '../../utils/url.js';

import './style.scss'
import { get } from '../../utils/request.js';

const { Meta } = Card;

class VideoList extends Component{

    state = {
        chosenVideo: {
            video_id: -2,
            video_url: '',
            video_pic_url: '',
        },
        videolist: [],
    }

    async componentDidMount() {
        const list = await get(VideoShowList);
        this.setState({
            videolist: list,
            chosenVideo: {
                video_id:  list[0].video_id,
                video_url: list[0].video_url,
                video_pic_url: list[0].video_pic_url,
            },
        })
    }

    cardOnClick = (video) => {
        this.setState({
            chosenVideo: video,
        })
    };

    render() {
        const { chosenVideo, videolist } = this.state;
        return (
            <Fragment>
                <VideoPlayer chosenVideo={chosenVideo} />
                <div className='videolist'>
                    {
                        videolist.map( video => {
                            return(
                                <Card
                                    hoverable
                                    onClick={() => this.cardOnClick(video)}
                                    key={ video.video_id }
                                    className='videoCard'
                                    style={{ width: 240 }}
                                    cover={
                                        <img src={ host + video.video_pic_url } alt=''/>
                                    } 
                                >
                                    <Meta title={ video.video_name } description={ video.video_intro } />
                                </Card>
                            );
                        })
                    }
                </div>
            </Fragment>
        );
    }
}

export default VideoList;