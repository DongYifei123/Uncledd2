import { Component, Fragment } from 'react';
import { Image, BackTop, Alert, Spin } from 'antd';
import PhotoItem from './photoItem.jsx';
import { LoadingOutlined } from '@ant-design/icons';

import './style.scss';
import {  Show20Photos } from '../../utils/url.js';
import { get } from '../../utils/request.js';

class PhotoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastPhotoId: -2,
            photoList: [],
            loadingMore: false,
        }
    }

    async componentDidMount() {
        const { lastPhotoId } = this.state;
        const list = await get(Show20Photos, { photoId: lastPhotoId });
        this.setState({
            photoList: list,
            lastPhotoId: list[list.length-1].pic_id - 1,
        });
        window.addEventListener('scroll', this.setCallback);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setCallback)
    }

    debounce = (func, time) => {
        let flag = null;
        return function() {
            if (flag) {
                clearTimeout(flag);
            }
            flag = setTimeout(func, time);
        }
    }

    setCallback = this.debounce( () => this.loadMorePic(), 500);

    loadMorePic = async () => {
        const { lastPhotoId, photoList } = this.state;

        // id为-1时即请求完所有图片
        if(lastPhotoId === -1) return;
        
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.body.clientHeight;
        const scrollHeight = document.body.scrollHeight;
        if ( scrollTop + clientHeight > scrollHeight - 100){
            this.setState({
                loadingMore: true,
            })
            const list = await get(Show20Photos, { photoId: lastPhotoId });
            this.setState({
                loadingMore: false,
                photoList: photoList.concat(list),
                lastPhotoId: list[list.length-1].pic_id - 1,
            })
        }
    }

    head = () => {
        return(
            <div className='photoHead'>
                <h2>从2020年开始，记录整个拍照的历程</h2>
                <p> 生活中充满了美好，每一处都有惊喜 </p>
            </div>
        );
    }

    render() {
        const { photoList, lastPhotoId, loadingMore } = this.state;
        return(
            <Fragment>
                {/* { this.head() } */}
                <div className='photoList'>
                    <Image.PreviewGroup>
                    { 
                        photoList.map(photo => {
                            return(
                                <PhotoItem 
                                    key={ photo.pic_id }
                                    photo={ photo }
                                />
                            );
                        })
                    }
                    </Image.PreviewGroup>
                </div>
                {   
                    loadingMore ? 
                        <div className='loadingPic'>
                            <Spin
                                indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />}
                            />
                        </div> 
                    : null
                }
                {
                    lastPhotoId === -1 ? 
                        <div className='bottomTip'>
                            <Alert
                                message="已经没有更多照片啦~"
                                type="info"
                                showIcon
                            />
                        </div>
                    : null
                }
                <BackTop
                    duration={ 800 }
                    visibilityHeight={ 400 }
                />
                </Fragment>
        );
    }
}

export default PhotoList;