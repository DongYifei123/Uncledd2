import { Component } from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

import { host } from '../../utils/url.js';


class VideoPlayer extends Component {

    shouldComponentUpdate( newProps,newState ){
        const { chosenVideo } = this.props;
        if( newProps.chosenVideo.video_id !== chosenVideo.video_id) {
            // 视频换源后要重新加载
            this.player.load();
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { chosenVideo } = this.props;
        const posterUrl =  host + chosenVideo.video_pic_url;
        const videoUrl = host + chosenVideo.video_url;
        return (
            <div className='videoplayer'>
                <Player
                    fluid={false}
                    width={700}
                    poster={ posterUrl }
                    ref={player => {
                        this.player = player;
                    }}
                >
                    <source src={videoUrl} />
                    <ControlBar disableDefaultControls={false}>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} order={7.1} />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
            </div>
          );
    }
}

export default VideoPlayer;