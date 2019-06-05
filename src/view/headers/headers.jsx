import React,{Component} from 'react'
import './index.less'

import { Layout,Menu , Dropdown, Icon} from 'antd';

const { Header } = Layout;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

export default class Headers extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <Header className='header clearfix' style={{ background: '#fff', padding: 0 }} >
                <div className="header-left">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg" alt=""/>
                    <h3>广西玉林仲裁委</h3>
                </div>
                <div className="header-right">
                    <span>欢迎您</span>
                    <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                        Click me <Icon type="down" />
                    </a>
                </Dropdown>
                <span className='new'>
                  <Icon type="bell" style={{marginRight:'5px'}} theme="filled" />
                  我的消息
                </span>
                
                <span>退出</span>
                </div>
             </Header>
        )
    }
}