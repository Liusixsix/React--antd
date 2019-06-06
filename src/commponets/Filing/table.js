
import React, { Component } from 'react'
import {  Table } from 'antd';


  export default class tables extends Component{
        
    constructor(props){
        super(props)
    }   

    render(){
        const {columns,data,rowSelection}=this.props;
        return(
            <Table style={{marginTop:25}} bordered rowSelection={rowSelection} columns={columns} dataSource={data} />
        )
    }
}