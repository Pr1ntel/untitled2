import React, {useState} from 'react';
import SchoolApi from "../../api/SchoolApi";
import {Button, Form, Input, InputNumber, Modal, Select} from "antd";

const DeleteAuditory = () => {

    const api = new SchoolApi();
    const [loading, setLoading] = useState(false);

    let [id, setId] = useState(null);

    const deleteAuditoryById = () => {
        api.deleteAuditorys(id)
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
        deleteAuditoryById();
    };

    return (
        <>
            <Button type="primary" danger onClick={showModal}>
                Удалить класс
            </Button>
            <Modal title="Удаление"
                   handleOk={handleOk}
                   onCancel={handleCancel}
                   open={isModalOpen} footer={[
                <Button key="back" onClick={handleCancel}>
                    Закрыть
                </Button>,
                <Button key="submit" type="primary" loading={loading} htmlType={"submit"} onClick={handleOk}>
                    Удалить
                </Button>,
            ]} >
                <Form.Item
                    label="id"
                    name="id"
                    onChange={event => {
                        setId(event.target.value)
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
            </Modal>
        </>
    );
};

export default DeleteAuditory;