import React from 'react'
import { Space, Spin } from 'antd'

const gridStyle: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  color: '#fff'
}

function Loading() {
  // 如何获取数组类型的元素类型
  type ListType = { a: number; b: string }[]
  const list = [{}] as ListType

  // 法一
  type ArrayItem<T> = T extends Array<infer R> ? R : never

  type Item = ArrayItem<ListType>

  // 法二
  // TaskList['task'][number];

  // type Item = ListType[number];

  return (
    <div style={gridStyle} className='w-full flex justify-center flex-col items-center'>
      <span className='mb-5'>Loading...</span>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  )
}

export default Loading
