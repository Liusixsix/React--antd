import React, { Component } from "react";
import { Input, Button, Card, List, Typography } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            data: []
        }
    }

    inputChange = (e) => {
        this.setState({
            value: e.target.value
        })

    }

    handleClick = () => {
        let arr = this.state.data;
        arr.push(this.state.value)
        this.setState({
            data: arr,
            value: ''
        })
    }

    handledel (i) {
        console.log(i)
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Input placeholder='请输入内容' value={this.state.value} onChange={this.inputChange} style={{ width: 300 }}></Input>
                    <Button type="primary" onClick={this.handleClick}>添加</Button>
                </div>
                <Card title="Default size card" style={{ width: 400 }}>
                    <List
                        bordered
                        dataSource={this.state.data}
                        renderItem={(item,index) => (
                            <List.Item onClick={(index)=>this.handledel(index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </Card>
            </React.Fragment>
        )
    }

}

export default TodoList