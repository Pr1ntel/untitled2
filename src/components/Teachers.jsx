import React, {useEffect, useRef, useState} from 'react';
import {Button, Input, Space, Table} from 'antd';
import {CheckOutlined, SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import SchoolApi from '../api/SchoolApi';

const Students = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const [data, setData] = useState([]);
    const api = new SchoolApi();

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getAll = () => {
        api.getAllTeachers()
            .then(response => {
                setData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log("getAll ERRRROR");
            });
    }
    useEffect(() => {
        getAll();
    }, []);

    const name = "Список";
    document.title = name;

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Имя',
            dataIndex: 'firstName',
            key: '1',
            width: '10%',
            ...getColumnSearchProps('firstName')

        },
        {
            title: 'Фамилия',
            dataIndex: 'lastName',
            key: '2',
            width: '10%',
            ...getColumnSearchProps('lastName')
        },
        {
            title: 'Отчество',
            dataIndex: 'patronymicName',
            key: '3',
            width: '10%',
            ...getColumnSearchProps('patronymicName')
        },
        {
            title: 'Год рождения',
            dataIndex: 'year',
            key: '4',
            width: '5%',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: 'Пол',
            dataIndex: 'gender',
            key: '5',
            width: '10%',
        },
        {
            title: 'Предмет',
            dataIndex: 'subject',
            key: '6',
            width: '15%',
        },
    ];

    return (
        <Table columns={columns} dataSource={data}/>
    )
};
export default Students;