import { Component } from 'react';
import { Menu, Affix } from 'antd';
import { MenuOutlined, PictureOutlined, PlaySquareOutlined,  } from '@ant-design/icons';

import './style.scss'

const { Item } = Menu;

class TopMenu extends Component {

    state = {
        current: 'index'
    }

    clickMenuItem = (e) => {
        const { setMenuKey } = this.props;
        const { key } = e;
        setMenuKey(key);
        this.setState({
            current: key,
        })
    }

    render() {
        const { current } = this.state;
        return (
            <Affix>
                <div className='Menu'>
                    <Menu
                        mode="horizontal"
                        onClick={this.clickMenuItem}
                        selectedKeys={[current]}
                    >
                        <Item key='index' icon={<MenuOutlined />}>首页</Item>
                        <Item key='photo' icon={<PictureOutlined />}>照片</Item>
                        <Item key='video' icon={<PlaySquareOutlined />}>视频</Item>
                    </Menu>
                    <h2 className='title'>Uncledd2</h2>
                </div>
            </Affix>
        );
    }
}

export default TopMenu;