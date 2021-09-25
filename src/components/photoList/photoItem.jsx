import { Component } from 'react';
import { Image, Card, Progress } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import './style.scss';
import { host, DownloadPhoto } from '../../utils/url.js';
import { get } from '../../utils/request.js';

const { Meta } = Card;

class PhotoItem extends Component {

    state={
        downLoading: false,
        downloadProcess: 0,
    }

    downloadPic = async (photo) => {
        this.setState({
            downLoading: true,
        })
        // 通过get请求下载图片
        await get(DownloadPhoto, { photoId: photo.pic_id }, { responseType: 'blob',
            onDownloadProgress:(ProgressEvent) => {
                //用来计算下载量
                // console.log(ProgressEvent);
                const { loaded, total } = ProgressEvent;
                this.setState({
                    downloadProcess: (loaded / total * 100).toFixed(0),
                });
            }
        }).then((res) => {
            // 将后端的二进制流转化为Blob对象
            let blob = new Blob([res]);

            // 生成对应的url
            let url = window.URL.createObjectURL(blob);

            let link = document.createElement('a');
            link.href = url
            link.download = `${ photo.pic_name || '下载文件' }.jpeg`;//下载后文件名
            document.body.appendChild(link);

            //点击下载
            link.click();

            //下载完成移除元素
            link.remove(); 
            window.URL.revokeObjectURL(link.href); 
        });
        this.setState({
            downLoading: false,
        })
    }

    render() {
        const { photo } = this.props;
        const { downLoading, downloadProcess } = this.state;
        return(
            <Card
                className='card'
                hoverable
                style={{ width: 300 }}
                cover={
                    <Image
                        src={ host + photo.pic_compression_url}
                    />
                }
                actions={[
                    // <DownloadOutlined onClick={() => { this.downloadPic(photo) }} />,
                    <div className='download'>
                        {
                            downLoading ? (
                                <Progress
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={downloadProcess}
                                />
                            ) : (<DownloadOutlined onClick={() => { this.downloadPic(photo) }} />)
                        }
                    </div>
                ]}
            >
                <Meta description={photo.pic_name} />
                {/* {
                    downLoading ? (
                        <Progress
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={downloadProcess}
                        />
                    ) : null
                } */}
            </Card>
        );
    }
}

export default PhotoItem;