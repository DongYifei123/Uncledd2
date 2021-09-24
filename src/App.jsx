import {BrowserRouter as Router,Route  } from 'react-router-dom'
// 引入antd样式
import 'antd/dist/antd.min.css';

// import Test from './components/Test';
import TopMenu from './components/menu/Menu';
import Index from './components/index/Index.jsx';
import PhotoList from './components/photoList/PhotoList.jsx';

function App() {
  return(
    <Router>
      <TopMenu />
      {/* <Route path="/" component={Test} /> */}
      {/* <Route path="/" component={Index} /> */}
      <Route path="/" component={PhotoList} />

    </Router>
  );
}

export default App;
