
import React, { Component } from 'react'
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'
import From from './form'
import Button from './button'
import Table from './table'
const btnarr=['线上邮件','线下邮递','确认送达']
const columns = [
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
 
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

export default class Filing extends Component{
    constructor(){  
        super()
        this.state={
            btnindex:2
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.Btnclick=this.Btnclick.bind(this)
    }

    render(){
        return(
            <div style={{ height: '99%' }}>
                <Breadcrumb title1={'审核管理'} title2={'审核管辖权'}></Breadcrumb>
                <div className='content-wrap'> 
                     <From handleSearch={this.handleSearch}></From>   
                     <Button Btnclick={this.Btnclick} btnindex={this.state.btnindex} btnarr={btnarr}></Button>              
                    <Table columns={columns} rowSelection={rowSelection} data={data}></Table>
                </div>
            </div>
        )
    }

    handleSearch(value){
        console.log(value)
    }    

    Btnclick(index){
        this.setState({
            btnindex:index
        })
        console.log(index)
    }
}