import { Layout, Menu, Icon ,Breadcrumb} from 'antd';
import React, { Component } from 'react'
import { Route,Link,Switch} from 'react-router-dom'
import Button from '../button/button'
import Toexamine from '../Toexamine/index'
import Eachar from '../echart/index'
// import Breadcrumbs from '../../common/Breadcrumb/Breadcrumb'
import Headers from '../../view/headers/headers'
import './Layout.less'
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const Main = () => {
    return (
      <Switch>
        <Route exact path='/admin/Toexamine' component={Toexamine}></Route>
        <Route exact path='/admin/Echart' component={Eachar}></Route>
      </Switch>
    )
}



class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div id='components-layout-demo-custom-trigger'>
                 <Layout>
            <Headers></Headers>
    <Content >   
      <Layout >
        <Sider width={200} style={{ background: '#fff' }} trigger={null} collapsible collapsed={this.state.collapsed}>
        <Header style={{  padding: 0 }}>
            <Icon
              className="trigger"
              style={{color:'#fff'}}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Menu
            mode="inline"
            theme="dark"
            className='menu'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{  }}
          >
            <SubMenu
              key="Toexamine"
              title={
                <span>
                  <Icon type="user" />

                  <span>案件管理</span>
                </span>
              }
            >
              <Menu.Item key="3">
              <Link to='/admin/Toexamine'>审核管辖权</Link>
              </Menu.Item>
              <Menu.Item key="4">
              <Link to='/admin/Echart'>审核管辖权</Link>
              </Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>立案管理</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="user" />
                  <span>立案管理</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="user" />
                  <span>立案管理</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Content style={{  minHeight: 280, background: '#F0F2F5'}}>
           <Main></Main>      
        </Content>
      </Layout>
    </Content>
  
  </Layout>
            </div>
        );
    }
}

export default SiderDemo