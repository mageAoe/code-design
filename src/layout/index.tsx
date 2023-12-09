import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Layout, theme } from 'antd'
import LogoPage from './logo/index'
import MenuPageWidget from './menu/index'
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group'
import './index.scss'
import 'animate.css'

const { Header, Content, Footer, Sider } = Layout

const Home: React.FC = () => {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <LogoPage />
        <MenuPageWidget />
      </Sider>
      <Layout style={{ maxHeight: '100vh' }}>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content className='m-4 overflow-y-auto overflow-x-hidden flex-1'>
          <SwitchTransition mode='out-in'>
            <CSSTransition key={location.key} timeout={300} classNames='fade' nodeRef={null}>
              <Outlet />
            </CSSTransition>
          </SwitchTransition>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>CODE-DESIGN ©2023</Footer> */}
      </Layout>
    </Layout>
  )
}

export default Home
