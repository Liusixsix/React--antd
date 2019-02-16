import React, { Fragment } from 'react'
import { Button, Input,List } from 'antd';

import './list.less';
import store from './../../store/index.js'



class Lists extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            value:'',
            arr:[]
        }
        this.enterLoading = this.enterLoading.bind(this)
        console.log(store.getState())
    }
    render() {
        return (
            <Fragment>
                <Input placeholder="Basic usage" value={this.state.value} onChange={this.Input.bind(this)} style={{ width: 300, marginRight: 10 }} />
                <Button type="primary" onClick={this.enterLoading}>Primary</Button>
                <List
                    style={{width: 300}}
                    // header={<div>这是List列表</div>}
                    // footer={<div>List结尾</div>}
                    bordered
                    dataSource={store.getState().list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </Fragment>

        )
    }
    Input(e){
        // console.log(e.target)
        this.setState({
            value:e.target.value
        })
    }
    enterLoading() {
       this.setState({
            arr:[...this.state.arr,this.state.value],
            value:''
       })
    }

}
export default Lists