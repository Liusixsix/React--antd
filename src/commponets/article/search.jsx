import React from 'react'
import { Form, Input, Row, Col, Button } from 'antd';
import './index.scss'


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: false
        }
    }

 

    render() {
        const { form: { getFieldDecorator } } = this.props
        return (
            <React.Fragment>
                <div className='Article'>
                    <div className="title"><img src={require('../../assets/img/mukuai2.png')} alt="" /><span>发布文章</span></div>
                    <Form className={this.props.icon ? 'Form none' : 'Form'} layout='inline'>
                        <Row gutter={8}>
                            <Col span={6}>
                                <Form.Item label="收货人姓名"   {...formItemLayout}>
                                    {getFieldDecorator('name', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="收货人电话"  {...formItemLayout}>
                                    {getFieldDecorator('desc')(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="京东淘宝ID"  {...formItemLayout}>
                                    {getFieldDecorator('url', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="平台订单编号"  {...formItemLayout}>
                                    {getFieldDecorator('url1', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={6}>
                                <Form.Item label="支付金额"  {...formItemLayout}>
                                    {getFieldDecorator('jin', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="店铺名称"  {...formItemLayout}>
                                    {getFieldDecorator('ming')(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="商品名称"  {...formItemLayout}>
                                    {getFieldDecorator('shop', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="商品代码"  {...formItemLayout}>
                                    {getFieldDecorator('code', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={6}>
                                <Form.Item label="收货地址"  {...formItemLayout} >
                                    {getFieldDecorator('jin1', {
                                    })(
                                        <Input />
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item  {...formItemLayout}>
                                    <Button type="primary" onClick={this.props.handleSubmit}>
                                        搜索
                                 </Button>
                                </Form.Item>
                            </Col>

                        </Row>
                    </Form>

                </div>
                <div className="left eokPlO" onClick={this.props.changeIcon}>
                    <span className={this.state.icon ? 'iconfont icon-xiangxia' : 'iconfont icon-xiangshang'}></span>
                </div>
            </React.Fragment>
        )
    }

}




export default Form.create({ name: 'register' })(Search);