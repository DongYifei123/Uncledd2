import { Component } from 'react';
import { Carousel, Menu, Timeline, Card } from 'antd';

import './style.scss';

import img1 from '../../image/index/1.webp';
import img2 from '../../image/index/2.webp';
import img3 from '../../image/index/3.webp';
import img4 from '../../image/index/4.webp';
import img5 from '../../image/index/5.webp';

import { MenuOutlined, PictureOutlined, PlaySquareOutlined,  } from '@ant-design/icons';

const { Item } = Menu;

class Index extends Component{
    
    render() {
        return(
            <div className='container'>
                <div className='Menu'>
                    <Menu mode="horizontal">
                        <Item key='index' icon={<MenuOutlined />}>首页</Item>
                        <Item key='photo' icon={<PictureOutlined />}>照片</Item>
                        <Item key='video' icon={<PlaySquareOutlined />}>视频</Item>
                    </Menu>
                    <h2 className='title'>Uncledd2</h2>
                </div>
                {/* <h3 className='title'>
                    <div>Uncledd2</div>
                    <span></span>
                </h3> */}
                <div className='center'>
                    
                    <div className='IndexBanner'>
                        <div className='banner'>
                        <Carousel autoplay >
                            <img src={img1} alt='' />
                            <img src={img2} alt='' />
                            <img src={img3} alt='' />
                            <img src={img4} alt='' />
                            <img src={img5} alt='' />
                        </Carousel>
                        </div>
                        <div className='intro'>
                            <h1>介绍</h1>
                            <p>Hi，我是董轶斐，从2020年开始接触摄影，照片并不一定是最好看的，只是记录生活中美好的事物。</p>
                            <p>如果你喜欢我的照片，多多关注就是对我最大的鼓励。感兴趣也欢迎随时找我交流，需要拍照也可以找我！</p>
                            <p>uncledd2.cn是我做的网站，用来集中展示一些摄影作品和视频作品并提供链接下载学习。</p>
                        </div>
                    </div>
                    <div className='timeLine'>
                        <Timeline mode='left' >
                            <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                            <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                            <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                            <Timeline.Item label='createTime'>网站成立</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index