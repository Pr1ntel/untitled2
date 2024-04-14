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

    const api = new SchoolApi(); // Создаем экземпляр SchoolApi один раз

    const getAll = () => {
        api.getAllAuditorys() // Используем уже существующий экземпляр для запросов
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
    const columns = [
        {
            title: 'Ученик',
            dataIndex: 'students',
            key: '5',
            width: '25%',
        },
        {
            title: 'Год обучения',
            dataIndex: 'yearOfStudy',
            key: '1',
            width: '5%',
            sorter: (a, b) => a.yearOfStudy - b.yearOfStudy,
        },
        {
            title: 'Наименование класса',
            dataIndex: 'auditoryName',
            key: '2',
            width: '10%',
        },
        {
            title: 'Учитель',
            dataIndex: 'teachers',
            key: '3',
            width: '15%',
        },
        {
            title: 'Предмет',
            dataIndex: 'subjects',
            key: '4',
        },

    ];

    return (
        <Table columns={columns} dataSource={data}/>
    )
};
export default Students;