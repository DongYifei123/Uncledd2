import {BrowserRouter as Router,Route  } from 'react-router-dom'
// 引入antd样式
import 'antd/dist/antd.min.css';
// 引入视频播放器样式
import "../node_modules/video-react/dist/video-react.css";
// import Test from './components/Test';
import TopMenu from './components/menu/Menu';
import Index from './components/index/Index.jsx';
import PhotoList from './components/photoList/PhotoList.jsx';
import VideoList from './components/videoList/VideoList';

function App() {
  return(
    <Router>
      <TopMenu />
      {/* <Route path="/" component={Test} /> */}
      {/* <Route path="/" component={Index} /> */}
      {/* <Route path="/" component={PhotoList} /> */}
      <Route path="/" component={VideoList} />
    </Router>
  );
}

export default App;
