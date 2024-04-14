import React, {useState} from 'react';
import SchoolApi from "../../api/SchoolApi";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";

const AddNewAuditorys = () => {

    const api = new SchoolApi();

    let [yearOfStudy, setYearOfStudy] = useState('');
    let [auditoryName, setAuditoryName] = useState('');
    let [teachers, setTeachers] = useState('');
    let [subjects, setSubjects] = useState('');
    let [students, setStudents] = useState('');

    const [loading, setLoading] = useState(false);

    const addNewAuditory = () => {
        let auditorysItem = {
            yearOfStudy,
            auditoryName,
            teachers,
            subjects,
            students
        };

        console.log(auditorysItem)
        api.addNewAuditorys(auditorysItem)
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
        addNewAuditory();
    };
    const onChangeTeachers = (value) => {
        setTeachers(value);
    };
    const onChangeSubjects = (value) => {
        setSubjects(value);
    };
    const onChangeStudents = (value) => {
        setStudents(value);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Добавить класс
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
                    label="Год обучения"
                    name="yearOfStudy"
                    onChange={event => {
                        setYearOfStudy(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <InputNumber placeholder="год"/>
                </Form.Item>
                <Form.Item
                    label="Название класса"
                    name="lastName"
                    onChange={event => {
                        setAuditoryName(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: ' input your auditoryName!',
                        },
                    ]}
                >
                    <Input placeholder="Название класса"/>
                </Form.Item>
                <Form.Item
                    name={['teachers']}
                    label="Выбор учителя"
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
                            placeholder="Выбор учителя"
                            optionFilterProp="children"
                            onChange={onChangeTeachers}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Ольга Павлова',
                                },
                                {
                                    value: '2',
                                    label: 'Петр Семенов',
                                }
                            ]}
                    />
                </Form.Item>
                <Form.Item
                    name={['subjects']}
                    label="Выбор урока"
                    rules={[
                        {
                            required: true,
                            message: "Выбрать урок"
                        },
                    ]}
                >
                    <Select className={"selectValue"}
                            allowClear="true"
                            showSearch
                            placeholder="Выбор урока"
                            optionFilterProp="children"
                            onChange={onChangeSubjects}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: '1',
                                    label: 'Математика',
                                },
                                {
                                    value: '2',
                                    label: 'Русский язык',
                                },
                                {
                                    value: '3',
                                    label: 'Литература',
                                },
                            ]}
                    />
                </Form.Item>
                <Form.Item
                    name={['students']}
                    label="Ученики"
                    rules={[
                        {
                            required: true,
                            message: "Выбрать ученика"
                        },
                    ]}
                >
                    <Select className={"selectValue"}
                            allowClear="true"
                            showSearch
                            placeholder="Выбор ученика"
                            optionFilterProp="children"
                            onChange={onChangeStudents}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: '2',
                                    label: 'Леха Алексеев',
                                },
                                {
                                    value: '3',
                                    label: 'Валера Валерьев',
                                },
                                {
                                    value: '4',
                                    label: 'Катя Катиру',
                                },
                                {
                                    value: '9',
                                    label: 'Юля Жабина',
                                },
                                {
                                    value: '11',
                                    label: 'Даша Петрова',
                                },


                            ]}
                    />
                </Form.Item>
            </Modal>
        </>
    );
};

export default AddNewAuditorys;