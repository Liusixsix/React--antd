import React, { Component } from 'react'
import './App.less'

import Headers from './view/headers/headers'
import { Input,Button,List ,Typography  } from 'antd';
import store from './store/index'
import axios from 'axios'


class App extends Component {
    constructor(props) {
        super()     
        this.state=store.getState()
        this.handlechangevalue=this.handlechangevalue.bind(this)
        this.handlestorechange=this.handlestorechange.bind(this)
        this.handleaddclick=this.handleaddclick.bind(this)
        store.subscribe(
            this.handlestorechange
        )
    }
   
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cb6c2cb39203c267008aabd/example/mock').then(res=>{

        })    
    }
    



    render() {
        return (
            <div>
                <Input placeholder="Basic usage" onChange={this.handlechangevalue} value={this.state.input_value} style={{width:'300px'}} />
                <Button type="primary" onClick={this.handleaddclick}>add</Button>
                <List
                    style={{width:300}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                 />
            </div>
        )
    }



    
    handlechangevalue(e){
        store.dispatch({
            type:'changevalue',
            value:e.target.value
        })
    }
    
    handlestorechange(){
        this.setState(store.getState())      
    }

    handleaddclick(){
        let value = this.state.input_value;
        store.dispatch({
            type:'add_list',
            value:value
        })
    }

}

export default App;