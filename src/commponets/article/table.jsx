import React from 'react'
import { Table, Button, Pagination } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
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

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
}
const Tables = (props) => {
    return (
        <div className='tables'>
            <Table size='middle' 
                rowSelection={rowSelection} 
                bordered columns={columns} 
                dataSource={props.data}            
             />
             
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
            />
        </div>
    )
}

export default Tables;