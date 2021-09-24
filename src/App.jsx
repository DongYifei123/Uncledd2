import {BrowserRouter as Router,Route  } from 'react-router-dom'

// import Test from './components/Test';
import Index from './components/index/Index';
// 引入antd样式
import 'antd/dist/antd.min.css';

function App() {
  return(
    <Router>
      {/* <Route path="/" component={Test} /> */}
      <Route path="/" component={Index} />
    </Router>
  );
}

export default App;
