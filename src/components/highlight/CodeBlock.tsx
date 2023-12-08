import React, { useRef, useState, useEffect } from 'react'
import hljs from './index'
import Clipboard from 'clipboard'

import './index.scss'

interface PorpsType {
  language: string
  code: string
}

const CodeBlock: React.FC<PorpsType> = ({ language, code }) => {
  const preRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (preRef.current) {
      hljs.highlightElement(preRef.current)

      // 创建 clipboard 实例并保存到变量中
      const clipboard = new Clipboard(`#${language}copy_btn`, {
        text: () => code
      })

      // 监听复制成功事件
      clipboard.on('success', () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })

      // 销毁 clipboard 实例
      return () => {
        clipboard.destroy()
      }
    }
  }, [code])

  return (
    <div className='code-block overflow-auto h-full' style={{ position: 'relative' }}>
      <pre>
        <code id={language} ref={preRef} className={language}>
          {code}
        </code>
      </pre>
      <button
        id={`${language}copy_btn`}
        style={{ position: 'absolute', top: 4, right: 4, lineHeight: '14px' }}
        className='code-block__button'
        data-clipboard-target={`#${language}`}
        disabled={!preRef.current}>
        {copied ? '已复制' : '复制'}
      </button>
    </div>
  )
}

export default CodeBlock
