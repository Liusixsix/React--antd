
import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, DatePicker } from 'antd';

const inplable = [
    '案件编号', '案由', '申请人'
]
class Froms extends Component {
    constructor(props) {
        super(props)
    }

    getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 3; i++) {
            children.push(
                <Col span={5} key={i} >
                    <Form.Item label={`${inplable[i]}`}>
                        {getFieldDecorator(`field-${i}`, {

                        })(<Input placeholder={`${inplable[i]}`} />)}
                    </Form.Item>
                </Col>,
            );
        }
        children.push(
            <Col span={4} key={5}>
                <Form.Item >
                    {
                        <Button type="primary" htmlType="submit">
                            搜索
                         </Button>
                    }
                </Form.Item>

            </Col>
        )
        return children;
    }

    render() {
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <Row gutter={24}>{this.getFields()}</Row>

            </Form>
        )
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // console.log('Received values of form: ', values);
            this.props.handleSearch(values)
        });

    };
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(Froms);

export default WrappedAdvancedSearchForm