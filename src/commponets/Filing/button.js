
import React, { Component } from 'react'
import {  Row, Button } from 'antd';



export default class Buttons extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {btnarr,Btnclick,btnindex} = this.props;
        return(
            <Row>
                {
                    btnarr.map((item,index)=>{
                        return <Button  style={{marginRight:15}} 
                         key={item}
                         onClick={()=>Btnclick(index)}
                         type={btnindex==index?'primary':''}
                        >
                        {item}
                        </Button>
                    })
                }
            </Row>
         )
    }

}