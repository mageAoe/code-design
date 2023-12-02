// 用来查看代码的组件
import React, { useRef, useState, useEffect } from 'react'
import { CodepenCircleOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import CodeBlock from '@/components/highlight/CodeBlock'

const blockStyle = {
  maxHeight: '40rem',
  opacity: 1,
  overflow: 'hidden',
  transition: 'max-height 1s ease-in-out, opacity 0.5s ease-in-out' // 添加过渡效果
}

const hiddenStyle = {
  maxHeight: '0',
  opacity: 0,
  overflow: 'hidden',
  transition: 'max-height 1s ease-in-out, opacity 0.5s ease-in-out' // 添加过渡效果
}

interface PorpsType {
  language: string
  // code: string
  tabs: Array<tabItem>
}

type tabItem = {
  language: string
  code: string
}

const viewCode: React.FC<PorpsType> = ({ language, tabs }) => {
  const [visible, setVisible] = useState(false)
  const [tab, setTab] = useState(0)

  const tabSliderStyle: React.CSSProperties = {
    width: '88px',
    height: '3px',
    background: 'red',
    position: 'absolute',
    bottom: '-2px',
    left: 20 + 128 * tab + 'px',
    transition: 'left 0.5s ease-in-out'
  }

  return (
    <div>
      <div className='p-4 flex justify-center'>
        <Tooltip title='查看代码'>
          <Button
            type='primary'
            shape='circle'
            icon={<CodepenCircleOutlined />}
            onClick={() => setVisible(!visible)}
          />
        </Tooltip>
      </div>
      <div className='flex justify-center flex-col' style={visible ? blockStyle : hiddenStyle}>
        <div
          className='flex justify-center w-full b-1 border-solid border-purple'
          style={{ borderRadius: '10px 10px 0 0' }}
        >
          <div className='flex justify-center relative'>
            <p style={tabSliderStyle}></p>
            {tabs.map((item, index) => (
              <Tab
                key={item.language}
                item={item.language}
                index={index}
                changeTab={index => setTab(index)}
              />
            ))}
          </div>
        </div>
        <div
          className='b-1 border-solid border-purple flex'
          style={{ borderRadius: '0 0 10px 10px', maxHeight: 'calc(40rem - 59px)' }}
        >
          {tabs.map((item, index) => (
            <div
              key={item.language}
              className='flex-1'
              style={{ display: tab === index ? 'block' : 'none' }}
            >
              <CodeBlock language={item.language} code={item.code} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default viewCode

interface TabProps {
  item: string
  index: number
  changeTab: (index: number) => void
}

const Tab: React.FC<TabProps> = ({ item, index, changeTab }) => (
  <div
    onClick={() => changeTab(index)}
    className='pt-7 pl-5 pr-5 pb-2 w-32 text-center font-bold cursor-pointer'
  >
    <div>{item}</div>
  </div>
)
