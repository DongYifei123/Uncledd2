import { Component } from 'react';
import { Carousel, Timeline } from 'antd';

import './style.scss';

import img1 from '../../image/index/1.webp';
import img2 from '../../image/index/2.webp';
import img3 from '../../image/index/3.webp';
import img4 from '../../image/index/4.webp';
import img5 from '../../image/index/5.webp';
import wechatPublic from '../../image/index/wechatPublic.png';

class Index extends Component{

    banner = () => {
        return(
            <div className='banner'>
                <Carousel autoplay >
                    <img src={img1} alt='' />
                    <img src={img2} alt='' />
                    <img src={img3} alt='' />
                    <img src={img4} alt='' />
                    <img src={img5} alt='' />
                </Carousel>
            </div>
        );
    }

    intro = () => {
        return(
            <div className='intro'>
                <h1>介绍</h1>
                <p>Hi，我是董轶斐，从2020年开始接触摄影，照片并不一定是最好看的，只是记录生活中美好的事物。</p>
                <p>如果你喜欢我的照片，多多关注就是对我最大的鼓励。感兴趣也欢迎随时找我交流，需要拍照也可以找我！</p>
                <p>uncledd2.cn是我做的网站，用来集中展示一些摄影作品和视频作品并提供链接下载学习。</p>
            </div>
        );
    }

    wechatPublic = () => {
        return(
            <div className='wechatPublic'>
                <h2>公众号</h2>
                <img src={wechatPublic} alt='' />
            </div>
        );
    }

    timeline = () => {
        return(
            <div className='timeLine'>
                <Timeline mode='left' >
                    <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                    <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                    <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                    <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                </Timeline>
            </div>
        );
    }

    render() {
        return(
            <div className='container'>
                <div className='center'>
                    <div className='IndexBanner'>
                        { this.banner() }
                        { this.intro() }
                    </div>
                    { this.wechatPublic() }
                    {/* { this.timeline() } */}
                </div>
                

            </div>
        );
    }
}

export default Index