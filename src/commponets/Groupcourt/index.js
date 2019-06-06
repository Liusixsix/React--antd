import React, { Component } from 'react'
import Inputs from './input'
import Tables from './table'
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'
const columns = [
    {
        title: '序号',
        dataIndex: 'key',
      },
    {
      title: '案件编号',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '申请人',
      dataIndex: 'age',
    },
    {
      title: '产品类型',
      dataIndex: 'address',
    },
    {
        title: '被申请人',
        dataIndex: 'beishen',
      },
      {
        title: '申请时间',
        dataIndex: 'time',
      },
      {
        title: '电子送达情况',
        dataIndex: 'qingkuang',
      },
      {
        title: '操作',
        dataIndex: 'caozuo',
        key: 'x',
        render: (index) => <a href="javascript:;">操作{index}</a>,
      },
  ];
  const data = [
    {
      key: '1',
      name: '(2019)北国种子低59号',
      age: '王老吉',
      address: '合同纠纷',
      beishen: '刘德烽',
      time: '2019-8-20',
      qingkuang: '未送达',
    },
    {
        key: '2',
        name: '(2019)北国种子低59号',
        age: '王老吉',
        address: '合同纠纷',
        beishen: '刘德烽',
        time: '2019-8-20',
        qingkuang: '未送达',
      },
      {
        key: '3',
        name: '(2019)北国种子低59号',
        age: '王老吉',
        address: '合同纠纷',
        beishen: '刘德烽',
        time: '2019-8-20',
        qingkuang: '未送达',
      },
      {
        key: '4',
        name: '(2019)北国种子低59号',
        age: '王老吉',
        address: '合同纠纷',
        beishen: '刘德烽',
        time: '2019-8-20',
        qingkuang: '未送达',
      },
      {
        key: '5',
        name: '(2019)北国种子低59号',
        age: '王老吉',
        address: '合同纠纷',
        beishen: '刘德烽',
        time: '2019-8-20',
        qingkuang: '未送达',
      },
  ];
 

export default class Gropu extends Component{
    constructor(){
        super()
        this.handleSearch=this.handleSearch.bind(this)
    }

    render(){
        return(
            <div style={{ height: '99%' }}>
                <Breadcrumb title1={'审核管理'} title2={'审核管辖权'}></Breadcrumb>
                <div className='content-wrap'> 
                <Inputs handleSearch={this.handleSearch}></Inputs> 
                <Tables columns={columns}  data={data}></Tables> 
            </div>
        </div>
        )
    }

    handleSearch(val){
        console.log(val)
    }
}