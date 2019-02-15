import React from 'react'
import { Row,Col } from 'antd';
import Header from './commponets/Header'
import Footer from './commponets/Footer'
import Navleft from './commponets/Navleft'
import Home from './pages/home/'
import './App.less'
export default class Admin extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            
             <Row className='container'>
                <Col span={4}  className='navleft'>
                <Navleft></Navleft>
                </Col>
                <Col span={20} className='main'>
                <Header/>
                    <Row className='content' > 
                        {/* <Home/> */}
                {this.props.children}
                    </Row>
               <Footer/>
                </Col>               
            </Row>               
           
            
        );
    }
}