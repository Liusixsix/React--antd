
  import React, { Component } from 'react'
  import { Form, Row, Col, Input, Button, Icon ,DatePicker } from 'antd';

  import { Table } from 'antd';
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const inplable= [
    '案件编号','案由','申请人','被申请人','产品类型','申请时间'
]

  class AdvancedSearchForm extends React.Component {
      constructor(props){
        super(props)
          this.state = {
            expand:true
          }
      }
      // 表格
      getFields() {
        const count = this.state.expand ? 7 : 4;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 4; i++) {
          children.push(
            <Col span={5} key={i} style={{ display: i < count ? 'block' : 'none' }}>
              <Form.Item label={`${inplable[i]}`}>
                {getFieldDecorator(`field-${i}`, {
                  
                })(<Input placeholder={`${inplable[i]}`} />)}
              </Form.Item>
            </Col>,
          );
        }
        children.push(
        <Col span={4}  key={5}>
          <Button type="primary"  htmlType="submit">
                 查询
           </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                 收起 <Icon type={this.state.expand ? 'down' : 'up'} />
            </a>
       </Col>
        )
        children.push(
          <Col span={5}  key={6} style={{ display: this.state.expand? 'block' : 'none' }}>
           <Form.Item label={`产品类型`}>
                {getFieldDecorator(`leixing`, {
                  
                })(<Input placeholder={`产品类型`} />)}
              </Form.Item>
             
          </Col>
          )
          children.push(
            <Col span={5}  key={7} style={{ display: this.state.expand? 'block' : 'none' }}>
                
                <Form.Item label={`时间`}>
                {getFieldDecorator(`time`, {
                  
                })(<RangePicker onChange={this.onChange} />)}
              </Form.Item>
             
            </Col>
            )
        return children;
      }
      
      handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          // console.log('Received values of form: ', values);
          this.props.handleSearch(values)
        });
       
      };
    
      handleReset = () => {
        this.props.form.resetFields();
      };
    
      toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
      }
      onChange(date, dateString) {
        console.log(date, dateString);
      }
      render() {
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
              <Row gutter={24}>{this.getFields()}</Row>
              <Row>
                <Col span={24} style={{ textAlign: 'right' }}>
                
                </Col>
              </Row>
            </Form>
          );
      }

    }

    const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

    export default WrappedAdvancedSearchForm