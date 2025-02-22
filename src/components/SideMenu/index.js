import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu(){
  const location= useLocation()
  const [selectedKeys, setSelectedKeys]= useState('/')
  useEffect(()=>{
    const pathName = location.pathname
    setSelectedKeys(pathName)
  },
[location.pathname])
  const navigate = useNavigate()
    return( <div className="SideMenu">
      <Menu
      className="SideMenuVertical"
      mode="vertical"
      onClick={(item)=> {
        //item.key
        navigate(item.key)
      }}
      selectedKeys={[selectedKeys]}
      items={[{
        label: "Dashboard",
        icon: <AppstoreOutlined>

        </AppstoreOutlined>,
        key:'/',
      },
      {
        label: "Inventory",
        key:'/inventory',
        icon:<ShopOutlined></ShopOutlined>,
      },
      {
        label: "Orders",
        key:'/orders',
        icon: <ShoppingCartOutlined></ShoppingCartOutlined>,
      },
      {
        label: "Customers",
        key:'/customers',
        icon: <UserOutlined></UserOutlined>,
      },

      ]}>

      </Menu>

    </div>);
  }
  export default SideMenu;