import React, { Component } from 'react'

import { Row, Col, } from 'antd';

import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'
import './index.scss'
import Header from 'antd/lib/calendar/Header';
const arr = [
    { num: 6, value: '今日立案' }
    , { num: 3, value: '今日结案' },
    { num: 12, value: '累计涉案金额（元）' },
    { num: 2, value: '案件数据' },
]

const city=[
    {city:'杭州',value:39},
    {city:'杭州',value:34},
    {city:'杭州',value:30},
]

export default class Echart extends Component {

    constructor() {
        super()
    }


    render() {
        return (
            <div style={{ height: '99%' }}>
                <Breadcrumb title1={'审核管理'} title2={'审核管辖权'}></Breadcrumb>
                <div className='echart-wrap' style={{ padding: '24px 24px' }}>
                    <div style={{ background: '#fff', height: '100%', padding: '24px 24px', boxSizing: 'border-box' }}>
                        <Row> {this.header(arr)} </Row>
                        <div className='City'>
                            <p>案件城市分布TOP10</p>
                            <div className="City-con">
                                <div className="City-left">
                                    <ul>
                                      
                                    </ul>
                                </div>
                                <div className="City-right">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    header(arr) {
        console.log(arr)
        return arr.map((item, index) => {
            return <Col className='col' span={6} key={item.num}>
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg" alt="" />
                <div>
                    <h3 style={{ fontSize: 20 }}>{item.num}</h3>
                    <h3>{item.value}</h3>
                </div>
            </Col>
        })
    }


}   