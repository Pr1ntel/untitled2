import React from 'react';
import {RedditOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <div  style={{backgroundColor:"whitesmoke"}}>
           <marquee>
               <h1>
                   <RedditOutlined />
                   Супер школа
                   <RedditOutlined />
               </h1>
           </marquee>
        </div>
    );
};

export default Header;