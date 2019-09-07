import React, { Component } from "react";
import { Form, Input, Row, Col, Button } from "antd";
import "./top.scss";
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

  
class top extends Component {

    constructor(props){
        super(props)
        this.state = {
            icon:true,       
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            this.props.handleSubmit(values)
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    handClickIcon = ()=>{
        let flag = this.state.icon;
        this.setState({
            icon : !flag
        })
    }

    topDragEagle = e=>{
         let boxH = e.target.parentElement.offsetHeight;
            let that = this;
            let ev = e ;
            let mouseDownY = ev.clientY;
            /*当鼠标在拖动div按下时绑定鼠标移动事件*/
            document.onmousemove = function (e) {
                e.preventDefault();
                let mouseMoveY = e.clientY;
                let topHei = mouseMoveY - mouseDownY + boxH;      
               that.props.chageToph(topHei)
            };
            document.onmouseup = function (e) {
                //还原事件
                document.onmousemove = null;
                document.onmouseup = null;
            };
        
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="top" style={{height:this.props.topHei}}>
                <span>筛选条件</span>
                <Form layout="inline" onSubmit={this.handleSubmit} style={{height:this.props.topHei - 42}}  className={this.state.icon?'from':'dn from'} >
                    <Row>
                        <Col span={6}>
                            <Form.Item label="进项税率" {...formItemLayout}>
                                {getFieldDecorator("username")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="调整商品编码" {...formItemLayout}>
                                {getFieldDecorator("password")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="输入金额" {...formItemLayout}>
                                {getFieldDecorator("password1")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="输入金额" {...formItemLayout}>
                                {getFieldDecorator("password2")(<Input />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Form.Item label="进项税率" {...formItemLayout}>
                                {getFieldDecorator("usernam3e")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="调整商品编码" {...formItemLayout}>
                                {getFieldDecorator("password41")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="输入金额" {...formItemLayout}>
                                {getFieldDecorator("password")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="输入金额" {...formItemLayout}>
                                {getFieldDecorator("password")(<Input />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Form.Item label="进项税率" {...formItemLayout}>
                                {getFieldDecorator("username")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="调整商品" {...formItemLayout}>
                                {getFieldDecorator("password")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="输入金额" {...formItemLayout}>
                                {getFieldDecorator("password")(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                Clear
                              </Button>
                        </Col>
                    </Row>
                </Form>
                <div className="Drag" onMouseDown={this.topDragEagle}>
                    <div className="eokPlO" onClick={this.handClickIcon}>
                        <span className={this.state.icon?'iconfont icon-xiangshang':'iconfont icon-xiangxia'}></span>
                    </div>
                </div>

            </div >
        );
    }
}

    const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
        top
    );
    export default WrappedHorizontalLoginForm;

