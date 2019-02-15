import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios/index'
export default class Header extends React.Component{

    constructor(){
        super()
        this.state={

        }
    }

    componentWillMount(){
        this.setState({
            username:'河岸一家'
        })

        setInterval(()=>{
           let sysTime = Util.formateDate(new Date().getTime())
           this.setState({
            sysTime
           })
        },1000)
        // this.gettianqi()
    }


    gettianqi(){
        console.log(111)
        console.log(axios)
        let city='北京';
        // axios.jsonp({
        //     url:'https://www.baidu.com/'
        // }).then((res)=>{
        //     console.log(1111111)
        // })
    }
    

    render(){
        return(
            <div className='header'>
           <Row className='header-top'>
               <Col span={24}>
                <span>欢迎{this.state.username}</span>
                <a href='#'>退出</a>
               </Col>
           </Row>
           <Row className='breadr'>
               <Col span={4} className='breadr-title'>
               首页
               </Col>
               <Col span={20} className='weache'>
               <span className='data'>
                   {this.state.sysTime}
               </span>
               <span className='weather-detail'>小雪</span>
               </Col>
           </Row>
           </div>
        );
    }
}