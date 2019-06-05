import React, { Component } from 'react'
import { Button,Icon,Table} from 'antd';



const Tables = (props)=>{
  
    
        return (
            <Table dataSource={props.dataSource} bordered columns={props.columns} />              
        )
    
}
   

export default Tables