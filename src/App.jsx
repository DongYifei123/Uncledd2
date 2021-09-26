// import {BrowserRouter as Router,Route  } from 'react-router-dom'
import { Component, Fragment } from 'react';
// 引入antd样式
import 'antd/dist/antd.min.css';
// 引入视频播放器样式
import "../node_modules/video-react/dist/video-react.css";
// 引入全局样式
import './style.scss';

// import Test from './components/Test';
import TopMenu from './components/menu/Menu';
import CopyRight from './components/menu/CopyRight';
import Index from './components/index/Index.jsx';
import PhotoList from './components/photoList/PhotoList.jsx';
import VideoList from './components/videoList/VideoList';

class App extends Component {

  state={ 
    key: 'index',
  }

  obj = {
    index: <Index />,
    photo: <PhotoList />,
    video: <VideoList />
  }

  setMenuKey = (newKey) => {
    this.setState({
      key: newKey,
    })
  };

  render(){
    const { key } = this.state;    
    return(
      <Fragment>
        <TopMenu setMenuKey={ this.setMenuKey } />
          { this.obj[key] }
        <CopyRight />
      </Fragment>
    );
  }
  
}

export default App;
