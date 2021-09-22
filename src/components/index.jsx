import { Component } from 'react';
import { Carousel } from 'antd';

import img1 from '../image/index/1.webp';
import img2 from '../image/index/2.webp';
import img3 from '../image/index/3.webp';
import img4 from '../image/index/4.webp';
import img5 from '../image/index/5.webp';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class Index extends Component{
    
    render() {
        return(
            <div>
                <Carousel autoplay>
                    <img src={img1} alt='' />
                    <img src={img2} alt='' />
                    <img src={img3} alt='' />
                    <img src={img4} alt='' />
                    <img src={img5} alt='' />
                </Carousel>
            </div>
        );
    }
}

export default Index