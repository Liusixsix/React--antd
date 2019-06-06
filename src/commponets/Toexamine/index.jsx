import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon  } from 'antd';
import './index.scss'
import Children from './childen'
import Buttons  from './button'
import Table from './table'
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'
const dataSource = [
    {
        key: '1',
        name: '(2019)北国仲（沪）缴字第255号',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '(2019)北国仲（沪）缴字第255号',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '3',
        name: '(2019)北国仲（沪）缴字第255号',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '4',
        name: '(2019)北国仲（沪）缴字第255号',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '5',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '6',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '7',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },
    {
        key: '8',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        address1: '西湖区湖底公园1号',
        address2: '西湖区湖底公园1号',
        address3: '西湖区湖底公园1号',
        address4: '西湖区湖底公园1号',
        address5: '西湖区湖底公园1号',
    },


];

const columns = [
    {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        align: 'center'
    },
    {
        title: '案件编号',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: '案由',
        dataIndex: 'age',
        key: 'age',
        align: 'center'
    },
    {
        title: '申请人',
        dataIndex: 'address',
        key: 'address',
        align: 'center'
    },
    {
        title: '被申请人',
        dataIndex: 'address1',
        key: 'address1',
        align: 'center'
    },
    {
        title: '产品类型',
        dataIndex: 'address2',
        key: 'address2',
        align: 'center'
    },
    {
        title: '标额(元)',
        dataIndex: 'address3',
        key: 'address3',
        align: 'center'
    },
    {
        title: '申请时间',
        dataIndex: 'address4',
        key: 'address4',
        align: 'center'
    },
    {
        title: '案件状态',
        dataIndex: 'address5',
        key: 'address5',
        align: 'center'
    },
];

const btnArr = [
    { value: '全部' },
    { value: '申请' },
    { value: '立案' },
    { value: '答辩' },
    { value: '组庭' },
    { value: '审理' },
    { value: '裁决' },
    { value: '结案' },
]



export default class Examine extends Component {
    constructor() {
        super()
        this.state = {
            expand:false,
            btnindex: 0
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.bntClick=this.bntClick.bind(this)
    }



    render() {
        return (
            <div style={{ height: '99%' }}>
                <Breadcrumb title1={'审核管理'} title2={'审核管辖权'}></Breadcrumb>
                <div className='content-wrap' style={{ }}>

                    {/* <div style={{ background: '#fff', height: '100%', padding: '24px 24px', boxSizing: 'border-box' }}> */}
                
                    <Children handleSearch={this.handleSearch}></Children>
                    <Buttons btnArr={btnArr} bntClick={this.bntClick} btnindex={this.state.btnindex}></Buttons>
                    <Table dataSource={dataSource} bordered columns={columns} />
                    {/* </div> */}
                </div>
            </div>
        )
    }

    // 点击按钮切换
    bntClick(index) {            
        this.setState({
            btnindex: index
        })
    }
    
   
    // 搜索按钮
    handleSearch(val){
        console.log(val)
    }
    

}