import { get } from '../utils/request'
import react from 'react'

class Test extends react.Component {

    componentDidMount(){
      get('/Show20Photos',{ photoId: 0 }).then((res) => {
          console.log(res);
      }).catch((e) => {
          console.log(e);
      });
    }

    render(){
      return(
        <div>
        test
        </div>
      )
    }
      
  }
  
  export default Test;