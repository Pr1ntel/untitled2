import React, {useState} from 'react';
import SchoolApi from "../../api/SchoolApi";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";

const AddNewSubjects = () => {

    const api = new SchoolApi();

    let [subjectName, setSubjectName] = useState('');
    const [loading, setLoading] = useState(false);

    const addNewSubject = () => {
        let subjectItem = {
            subjectName
        };

        console.log(subjectItem)
        api.addNewSubjects(subjectItem)
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
        addNewSubject()
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Добавить предмет
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
                    label="Предмет"
                    name="subjectName"
                    onChange={event => {
                        setSubjectName(event.target.value)
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your subject!',
                        },
                    ]}
                >
                    <Input placeholder="Предмет"/>
                </Form.Item>

            </Modal>
        </>
    );
};

export default AddNewSubjects;