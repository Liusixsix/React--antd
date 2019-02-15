import React,{Component} from 'react'
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
// import {HashRouter,Router,Switch} from 'react-router-dom'
class App extends Component{

    render(){
       return <div>
            {this.props.children}
        </div>
    }
}

export default App;