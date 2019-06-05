import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link } from 'react-router-dom'
import './login.less'
class Login extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values); 
          this.props.history.push('/admin')    
        }

      });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div id='login-wrap'>
        <div id='components-form-demo-normal-login'>
        <Form onSubmit={this.handleSubmit} className="login-form" >
          <div className='tag'><h1>后台管理</h1></div>
          <Form.Item >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="请输入密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            
          {getFieldDecorator('code', {
              rules: [{ required: true, message: '请输入验证码!' }],
            })(
              <Input
              style={{width:'180px'}}
                prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="请输入验证码"
              />,
            )}
        
          </Form.Item>
          <Form.Item>
            
            <Button type="primary" htmlType="submit" className="login-form-button">
               登陆
            </Button>
      
          </Form.Item>
        </Form>
        </div>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
  export default WrappedNormalLoginForm;
  
