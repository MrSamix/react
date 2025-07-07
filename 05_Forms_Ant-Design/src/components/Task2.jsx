import { Table, Tag, Input } from "antd"
import './Task2.css'
import React, { useState } from "react";
const { Search } = Input;



const dataSource = [
    {
        key: '1',
        status: 'Active',
        username: 'alice_smith',
        email: 'alice.smith@example.com'
    },
    {
        key: '2',
        status: 'Inactive',
        username: 'bob_jones',
        email: 'bob.jones@example.com'
    },
    {
        key: '3',
        status: 'Active',
        username: 'charlie_brown',
        email: 'charlie.brown@example.com'
    },
    {
        key: '4',
        status: 'Inactive',
        username: 'diana_prince',
        email: 'diana.prince@example.com'
    },
    {
        key: '5',
        status: 'Active',
        username: 'eva_green',
        email: 'eva.green@example.com'
    },
    {
        key: '6',
        status: 'Inactive',
        username: 'frank_white',
        email: 'frank.white@example.com'
    },
    {
        key: '7',
        status: 'Active',
        username: 'george_hill',
        email: 'george.hill@example.com'
    },
    {
        key: '8',
        status: 'Inactive',
        username: 'hannah_lee',
        email: 'hannah.lee@example.com'
    },
    {
        key: '9',
        status: 'Active',
        username: 'ian_clark',
        email: 'ian.clark@example.com'
    },
    {
        key: '10',
        status: 'Inactive',
        username: 'julia_morris',
        email: 'julia.morris@example.com'
    }
];

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const Task2 = () => {
    const [filteredData, setFilteredData] = useState(dataSource);

    const onSearch = (value, _e, info) => {
        if (!value) {
            setFilteredData(dataSource);
            return;
        }
        const searchValue = value.toLowerCase();
        setFilteredData(
            dataSource.filter(
                item =>
                    item.username.toLowerCase().includes(searchValue) ||
                    item.email.toLowerCase().includes(searchValue)
            )
        );
    };

    const columnsWithStatus = columns.map(col => {
        if (col.dataIndex === 'status') {
            return {
                ...col,
                render: (text) => (
                    <Tag color={text === 'Active' ? 'green' : 'default'}>
                        {text}
                    </Tag>
                )
            };
        }
        return col;
    });

    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <Table dataSource={filteredData} columns={columnsWithStatus} />
        </div>
    );
};

export default Task2