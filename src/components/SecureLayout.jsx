import {
    AliwangwangOutlined, DiscordOutlined,
    MenuFoldOutlined, MenuUnfoldOutlined, RadiusBottomrightOutlined,
} from '@ant-design/icons';
import {Avatar, Button, Layout, Menu, theme} from 'antd';
import {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import Header from "./Header";
import AddNewStudents from "./addedItems/AddNewStudents";
import AddNewAuditorys from "./addedItems/AddNewAuditorys";
import AddNewTeachers from "./addedItems/AddNewTeachers";
import AddNewSubjects from "./addedItems/AddNewSubjects";
import DeleteStudent from "./deletedItems/DeleteStudent";
import DeleteAuditory from "./deletedItems/DeleteAuditory";
import DeleteTeacher from "./deletedItems/DeleteTeacher";


const {header, Sider, Content} = Layout;
const SecureLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (

        <Layout style={{height: "100vh"}}>

            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <RadiusBottomrightOutlined/>,
                            label: <Link
                                to='/all-students'>
                                Студенты
                            </Link>,
                        },
                        {
                               key: '2',
                               icon: <AliwangwangOutlined />,
                               label: <Link
                                   to='/all-teachers'>
                                   Учителя
                               </Link>,
                           },
                        {
                            key: '3',
                            icon: <DiscordOutlined />,
                            label: <Link
                                to='/all-auditorys'>
                                Классы
                            </Link>,
                        },
                    ]}
                />

            </Sider>
            <Layout>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet/>
                    <AddNewStudents/>
                    {" "}
                    <AddNewAuditorys/>
                    {" "}
                    <AddNewTeachers/>
                    {" "}
                    <AddNewSubjects/>
                    {" "}
                    <DeleteStudent/>
                    {" "}
                    <DeleteAuditory/>
                    {" "}
                    <DeleteTeacher/>

                </Content>
            </Layout>
        </Layout>


    );
};

export default SecureLayout;