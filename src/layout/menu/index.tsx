import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

function MenuPageWidget() {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label
    } as MenuItem
  }

  type MenuItem = Required<MenuProps>['items'][number]

  const items: MenuItem[] = [
    getItem('HOME', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5')
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />)
  ]

  return <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
}

export default MenuPageWidget
