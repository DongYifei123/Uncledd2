import { Component, Fragment } from 'react';
import { Image, Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import './style.scss';
import { host, Show20Photos, DownloadPhoto } from '../../utils/url.js';
import { get } from '../../utils/request.js';

const { Meta } = Card;

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

    downloadPic = async (photoId) => {
        console.log(photoId);
        // 通过get请求下载图片
        // get(DownloadPhoto, { photoId }, { responseType: 'blob' }).then((res) => {
        // });
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
                            <Card
                                className='card'
                                key={ photo.pic_id }
                                hoverable
                                style={{ width: 300 }}
                                cover={
                                    <Image
                                        src={ host + photo.pic_compression_url}
                                    />
                                }
                                actions={[
                                    <DownloadOutlined onClick={() => { this.downloadPic(photo.pic_id) }}/>
                                ]}
                            >
                                <Meta description={photo.pic_name} />
                            </Card>
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