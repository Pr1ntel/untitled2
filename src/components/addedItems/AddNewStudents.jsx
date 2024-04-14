import React, {useState} from 'react';
import SchoolApi from "../../api/SchoolApi";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";

const AddNewStudents = () => {

    const api = new SchoolApi();

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [patronymicName, setPatronymicName] = useState('');
    let [year, setYear] = useState('');
    let [genderId, setGenderId] = useState('');
    const [loading, setLoading] = useState(false);

    const addNewStudent = () => {
        let studentsItem = {
            firstName,
            lastName,
            patronymicName,
            year,
            genderId
        };

        console.log(studentsItem)
        api.addNewStudent(studentsItem)
            .then(response => {
                console.log(200);
            })
            .catch(error => {
                console.log(500);
            });
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsModalOpen(false);
        }, 2000);
        addNewStudent()
    };
    const onChange = (value) => {
        setGenderId(value);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Добавить студента
            </Button>
            <Modal title="Добавление"
                   handleOk={handleOk}
                   onCancel={handleCancel}
                   open={isModalOpen} footer={[
                <Button key="back" onClick={handleCancel}>
                    Закрыть
                </Button>,
                <Button key="submit" type="primary" loading={loading} htmlType={"submit"} onClick={handleOk}>
                    Добавить
                </Button>,
            ]} >
                <Form.Item
                    label="Имя"
                    name="firstName"
                    onChange={event => {
                        setFirstName(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input placeholder="Имя"/>
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="lastName"
                    onChange={event => {
                        setLastName(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: ' input your lastName!',
                        },
                    ]}
                >
                    <Input placeholder="Фамилия"/>
                </Form.Item>
                <Form.Item
                    label="Отчество"
                    name="patronymic"
                    onChange={event => {
                        setPatronymicName(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: ' input your patronymicName!',
                        },
                    ]}
                >
                    <Input placeholder="Отчество"/>
                </Form.Item>
                <Form.Item
                    label="Год рождения"
                    name="year"
                    onChange={event => {
                        setYear(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: ' input your year!',
                        },
                    ]}
                >
                <InputNumber size="large" min={1990} max={2027} defaultValue={1990}/>
                    </Form.Item>
                <Form.Item
                    name={['genderId']}
                    label="Пол"
                    rules={[
                        {
                            required: true,
                            message: "Выбрать пол"
                        },
                    ]}
                >
                    <Select className={"selectValue"}
                            allowClear="true"
                            showSearch
                            placeholder="Выбор пола"
                            optionFilterProp="children"
                            onChange={onChange}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Мужчина',
                                },
                                {
                                    value: '2',
                                    label: 'Женщина',
                                },


                            ]}
                    />
                </Form.Item>
            </Modal>
        </>
    );
};

export default AddNewStudents;