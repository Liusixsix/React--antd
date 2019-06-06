import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, DatePicker, Table } from 'antd';

export default class Tables extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {columns,data,rowSelection}=this.props;
        return(
            <Table style={{marginTop:25}} bordered  columns={columns} dataSource={data} />
        )
    }
}