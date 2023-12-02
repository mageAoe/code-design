import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

import {
  DesktopOutlined,
  PieChartOutlined,
  BlockOutlined,
  MacCommandOutlined
} from '@ant-design/icons'

function MenuPageWidget() {
  const navigate = useNavigate()

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

  const toRoute: MenuProps['onClick'] = ({ key, keyPath, domEvent }) => {
    navigate(key)
  }

  const items: MenuItem[] = [
    getItem('HOME', '/', <PieChartOutlined />),
    getItem('HTML', '/html', <DesktopOutlined />),
    getItem('CSS', '/css', <BlockOutlined />),
    getItem('JAVASCRIPT', '/js', <MacCommandOutlined />)
  ]

  return (
    <Menu theme='dark' defaultSelectedKeys={['/']} mode='inline' items={items} onClick={toRoute} />
  )
}

export default MenuPageWidget
