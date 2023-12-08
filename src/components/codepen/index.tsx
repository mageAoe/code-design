import { useRef, useEffect, useState, useLayoutEffect } from 'react'
// import * as monaco from 'monaco-editor'
import type { editor } from 'monaco-editor'
import './index.scss'
import MonacoEditor from 'react-monaco-editor'
import type { ChangeHandler } from 'react-monaco-editor'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { DragOutlined } from '@ant-design/icons'

interface PorpsType {
  htmlCode: string
  cssCode: string
  javascriptCode: string
}

function CodePen(props: PorpsType) {
  const iframeDomRef = useRef<HTMLIFrameElement>(null)
  // const containerHtmlRef = useRef<HTMLDivElement>(null)
  // const containerCssRef = useRef<HTMLDivElement>(null)
  // const containerJsRef = useRef<HTMLDivElement>(null)
  // const editor = useRef<any>(null)

  const [htmlCode, setHtmlCode] = useState(props.htmlCode)

  const [cssCode, setCssCode] = useState(props.cssCode)

  const [javascriptCode, setJavascriptCode] = useState(props.javascriptCode)

  const optionsHtml: editor.IStandaloneEditorConstructionOptions = {
    language: 'html',
    tabSize: 2,
    autoIndent: 'none',
    theme: 'vs-dark',
    automaticLayout: true,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 120,
    lineHeight: 24,
    fontSize: 14,
    minimap: {
      autohide: false,
      enabled: false,
      size: 'fill'
    },
    accessibilityPageSize: 0,
    value: htmlCode
  }

  const optionsCSS: editor.IStandaloneEditorConstructionOptions = {
    language: 'css',
    tabSize: 2,
    autoIndent: 'none',
    theme: 'vs-dark',
    automaticLayout: true,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 120,
    lineHeight: 24,
    fontSize: 14,
    minimap: {
      autohide: false,
      enabled: false,
      size: 'fill'
    },
    accessibilityPageSize: 0,
    value: cssCode
  }

  const optionsJavascript: editor.IStandaloneEditorConstructionOptions = {
    language: 'javascript',
    tabSize: 2,
    autoIndent: 'none',
    theme: 'vs-dark',
    automaticLayout: true,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 120,
    lineHeight: 24,
    fontSize: 14,
    minimap: {
      autohide: false,
      enabled: false,
      size: 'fill'
    },
    accessibilityPageSize: 0,
    value: javascriptCode
  }

  useLayoutEffect(() => {
    initIframeDoc()
    // try {
    //   initEditor()
    // } catch (error) {
    //   //
    // }
  }, [htmlCode, cssCode, javascriptCode])

  const debounce = (func: ChangeHandler, delay: number) => {
    let timeoutId: any

    return function (newValue: string, event?: any) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(newValue, event)
      }, delay)
    }
  }

  // 劫持iframe身上的方法
  // const hijack =

  const initIframeDoc = () => {
    const iframeDoc = iframeDomRef.current!.contentDocument

    // 设置 src 为空字符串，避免初始加载
    iframeDomRef.current!.src = 'about:blank'

    const newConsole = {
      log: function (...args: any) {
        // eslint-disable-next-line no-console
        console.log(...args)
      }
      // 如果需要，你还可以重写其他 console 方法
      // error, warn, info, etc.
    }

    ;(iframeDomRef.current!.contentWindow as any)!.console = newConsole

    // 监听 iframe 加载完成的事件
    // requestAnimationFrame(() => {
    // 	iframeDoc!.open() // 需要先调用 `open()`，打开“写”的开关
    // 	const eleTree = `<body>
    // 		<style>${cssCode}</style>
    // 		${htmlCode}
    // 		<script>${javascriptCode}</script>
    // 	</body>`;

    // 	iframeDoc!.open();
    // 	iframeDoc!.write(eleTree);
    // 	iframeDoc!.close();

    // 	// 手动触发 onload 事件
    // 	iframeDomRef.current!.contentWindow!.dispatchEvent(new Event('load', { bubbles: true }));
    // });
    iframeDoc!.open() // 需要先调用 `open()`，打开“写”的开关
    const eleTree = `<body>
			<style>${cssCode}</style>
			${htmlCode}
			<script>${javascriptCode}</script>
		</body>`

    iframeDoc!.open()
    iframeDoc!.write(eleTree)
    iframeDoc!.close()
  }

  /**
   * 使用原始的 monaco-editor
   */
  // const initEditor = () => {
  //   editor.current = monaco.editor.create(containerHtmlRef.current!, { ...optionsHtml })
  //   monaco.editor.create(containerCssRef.current!, { ...optionsCSS })
  //   monaco.editor.create(containerJsRef.current!, { ...optionsJavascript })
  //   // editor.current!.getModel().updateOptions({ tabSize: 8 })
  // }

  const onHtmlChange: ChangeHandler = debounce((newValue) => {
    setHtmlCode(newValue)
  }, 3000)

  const onCssChange: ChangeHandler = debounce((newValue) => {
    setCssCode(newValue)
  }, 2000)

  const onJavascriptChange: ChangeHandler = debounce((newValue) => {
    setJavascriptCode(newValue)
  }, 2000)

  return (
    <div className='flex flex-col h-full overflow-hidden position-relative'>
      <div className='monaco'>
        <PanelGroup direction='vertical'>
          <Panel>
            <PanelGroup direction='horizontal'>
              <Panel className='right-panel' defaultSizePercentage={30} minSizePercentage={20}>
                <span style={{ color: 'wheat', fontWeight: '700' }}>HTML</span>
                {/* <div className='editor' ref={containerHtmlRef}></div> */}
                <MonacoEditor
                  className='editor'
                  language='html'
                  theme='vs-dark'
                  value={htmlCode}
                  options={optionsHtml}
                  onChange={onHtmlChange}
                />
              </Panel>
              <PanelResizeHandle className='resize-handle'>
                <DragOutlined />
              </PanelResizeHandle>
              <Panel className='right-panel' minSizePercentage={30}>
                <span style={{ color: 'wheat', fontWeight: '700' }}>CSS</span>
                {/* <div className='editor' ref={containerCssRef}></div> */}
                <MonacoEditor
                  className='editor'
                  language='css'
                  theme='vs-dark'
                  value={cssCode}
                  options={optionsCSS}
                  onChange={onCssChange}
                />
              </Panel>
              <PanelResizeHandle className='resize-handle'>
                <DragOutlined />
              </PanelResizeHandle>
              <Panel className='right-panel' defaultSizePercentage={30} minSizePercentage={20}>
                <span style={{ color: 'wheat', fontWeight: '700' }}>JAVASCRIPT</span>
                {/* <div className='editor' ref={containerJsRef}></div> */}
                <MonacoEditor
                  className='editor'
                  language='javascript'
                  theme='vs-dark'
                  value={javascriptCode}
                  options={optionsJavascript}
                  onChange={onJavascriptChange}
                />
              </Panel>
            </PanelGroup>
          </Panel>
          <PanelResizeHandle className='resize-handle justify-center'>
            <DragOutlined />
          </PanelResizeHandle>
          <Panel className='right-panel'>
            <iframe
              ref={iframeDomRef}
              width='100%'
              height='100%'
              scrolling='auto'
              title='Example Iframe'
              className='b-none flex-1 z-1 bg-white'></iframe>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  )
}

export default CodePen
