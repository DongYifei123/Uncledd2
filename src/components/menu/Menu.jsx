import { Component } from 'react';
import { Menu } from 'antd';
import { MenuOutlined, PictureOutlined, PlaySquareOutlined,  } from '@ant-design/icons';

import './style.scss'

const { Item } = Menu;

class TopMenu extends Component {
    render() {
        return (
            <div className='Menu'>
            <Menu mode="horizontal">
                <Item key='index' icon={<MenuOutlined />}>首页</Item>
                <Item key='photo' icon={<PictureOutlined />}>照片</Item>
                <Item key='video' icon={<PlaySquareOutlined />}>视频</Item>
            </Menu>
            <h2 className='title'>Uncledd2</h2>
        </div>
        );
    }
}

export default TopMenu;