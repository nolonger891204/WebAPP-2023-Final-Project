import { Link } from "react-router-dom";
import { Layout, Menu, Button, Dropdown } from 'antd';
import styled from 'styled-components';
import { BsPersonFill } from "react-icons/bs";

const { Header } = Layout;

const CustomizedHeader = styled(Header)`
  position: absolute;
  top: 20px;
  height: 30px;
  width: 100%;
  padding-inline: 50px;
  line-height: 64px;
  background: transparent !important;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: 99;
  & .ant-menu{
    backgroundColor: #ffffff70;
    backdropFilter: blur(5px);
    height: 100%;
    font-size: small;
    font-weight: 700;
  }
  & .ant-menu-item, .ant-menu-submenu-title{
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
const navTitleStyle = {
  width: "max-content",
  minWidth: "170px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "large",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
}
const navItemsStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "medium",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "50%",
}
const buttonStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  color: "#161616",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const menuStyle = {
  height: "30px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#ffffff70",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
  paddingInline: "10px",
}

const navLabelItems = {
  "": "主畫面",
  "educate": "教育",
  "record": "紀錄",
  "contact": "關於我們",
  "foundation": "贊助我們",
}

const navItems = ['', 'educate', 'record', 'contact', 'foundation'].map((key) => ({
  key,
  label: <Link to={"/"+key}>{navLabelItems[key]}</Link>,
}));

const loginItems = [
  {
    label: (
      <div>
        登入
      </div>
    ),
    key: '0',
  },
  {
    label: (
      <div>
        註冊
      </div>
    ),
    key: '1',
  }
];
  

const Navbar = () => {
  return (
    <CustomizedHeader theme="light">
      <div style={navTitleStyle}>
        FroGather
      </div>
      <div style={{display: "flex", width: "40%"}}>
        <Menu 
          theme="light" 
          mode="horizontal" 
          defaultSelectedKeys={['']} 
          items={navItems} 
          style={menuStyle}
        />      
        <Dropdown
          menu={{
            items: loginItems
          }}
        >
          <Button shape="circle" style={navItemsStyle}>
            <BsPersonFill /> 
          </Button>
        </Dropdown>
      </div>
    </CustomizedHeader>
  )
};

export { Navbar }