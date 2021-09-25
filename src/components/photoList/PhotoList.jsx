import { Component, Fragment } from 'react';
import { Image } from 'antd';
import PhotoItem from './photoItem.jsx';

import './style.scss';
import {  Show20Photos } from '../../utils/url.js';
import { get } from '../../utils/request.js';

class PhotoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastPhotoId: -2,
            photoList: [],
        }
    }

    async componentDidMount() {
        const { lastPhotoId } = this.state;
        const list = await get(Show20Photos, { photoId: lastPhotoId });
        this.setState({
            photoList: list,
        });
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
        const { photoList } = this.state;
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
            </Fragment>
        );
    }
}

export default PhotoList;