import { Space } from "antd";
import "./App.css";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import AppFooter from "./components/AppFooter";
import React from 'react';
function App(){
  return ( <div className="App">
<AppHeader></AppHeader>
<Space className="SideMenuPAgeContent">
  <SideMenu></SideMenu>
  <PageContent></PageContent>
</Space>
<AppFooter></AppFooter>
  </div>
  )

};

export default App;
