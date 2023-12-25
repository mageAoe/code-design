import { useRef, useEffect, useState } from 'react'
import * as monaco from 'monaco-editor'
import type { editor } from 'monaco-editor'
// import './index.scss'
import MonacoEditor from 'react-monaco-editor'
import type { ChangeHandler } from 'react-monaco-editor'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { DragOutlined } from '@ant-design/icons'
import CodePen from '@/components/codepen'

function Home() {
  const iframeDomRef = useRef<HTMLIFrameElement>(null)
  const containerHtmlRef = useRef<HTMLDivElement>(null)
  const containerCssRef = useRef<HTMLDivElement>(null)
  const containerJsRef = useRef<HTMLDivElement>(null)
  const editor = useRef<any>(null)

  const [htmlCode, setHtmlCode] = useState(`<button>Click</button>
	<h1>Hover Me Hello</h1>`)

  const [cssCode, setCssCode] = useState(`
	button { color: red }
	h1::before {
		transform: scaleX(0);
		transform-origin: bottom right;
	}

	h1:hover::before {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	h1::before {
		content: " ";
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		/* inset 其与 margin 简写属性具有相同的多值语法 */
		inset: 0 0 0 0;
		background: hsl(200 100% 80%);
		z-index: -1;
		transition: transform 0.3s ease;
	}

	h1 {
		position: relative;
		font-size: 5rem;
	}

	html {
		block-size: 100%;
		inline-size: 100%;
	}

	body {
		background: #272928;
		min-block-size: 100%;
		min-inline-size: 100%;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		place-content: center;
		font-family: system-ui, sans-serif;
	}

	@media (orientation: landscape) {
		body {
			grid-auto-flow: column;
		}
	}`)

  const [javascriptCode, setJavascriptCode] =
    useState(`document.querySelector('button').addEventListener('click', () => {
		console.log('on-click!')
	})`)

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
    value: `<button>Click</button>
<h1>Hover Me Hello</h1>`
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
    value: `h1::before {
			transform: scaleX(0);
			transform-origin: bottom right;
		}

		h1:hover::before {
			transform: scaleX(1);
			transform-origin: bottom left;
		}

		h1::before {
			content: " ";
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			/* inset 其与 margin 简写属性具有相同的多值语法 */
			inset: 0 0 0 0;
			background: hsl(200 100% 80%);
			z-index: -1;
			transition: transform 0.3s ease;
		}

		h1 {
			position: relative;
			font-size: 5rem;
		}

		html {
			block-size: 100%;
			inline-size: 100%;
		}

		body {
			background: #272928;
			min-block-size: 100%;
			min-inline-size: 100%;
			margin: 0;
			box-sizing: border-box;
			display: grid;
			place-content: center;
			font-family: system-ui, sans-serif;
		}

		@media (orientation: landscape) {
			body {
				grid-auto-flow: column;
			}
		}`
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
    value: `document.querySelector('button').addEventListener('click', () => {
			console.log('on-click!')
		})`
  }

  // useEffect(() => {
  //   initIframeDoc()
  //   try {
  //     initEditor()
  //   } catch (error) {
  //     //
  //   }
  // }, [htmlCode, cssCode, javascriptCode])

  const debounce = (func: ChangeHandler, delay: number) => {
    let timeoutId: any

    return function (newValue: string, event?: any) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        func(newValue, event)
      }, delay)
    }
  }

  const initIframeDoc = () => {
    const iframeDoc = iframeDomRef.current!.contentDocument
    iframeDoc!.open() // 需要先调用 `open()`，打开“写”的开关

    const eleTree = `<body>
		<style>${cssCode}</style>
		${htmlCode}
		<script>${javascriptCode}</script>
		</body>`
    iframeDoc!.write(eleTree)
    iframeDoc!.close() // 最后调用 `close()`，关闭“写”的开关
  }

  const initEditor = () => {
    editor.current = monaco.editor.create(containerHtmlRef.current!, { ...optionsHtml })
    monaco.editor.create(containerCssRef.current!, { ...optionsCSS })
    monaco.editor.create(containerJsRef.current!, { ...optionsJavascript })
    // editor.current!.getModel().updateOptions({ tabSize: 8 })
  }

  const onHtmlChange: ChangeHandler = debounce((newValue) => {
    setHtmlCode(newValue)
  }, 5000)

  const onCssChange: ChangeHandler = debounce((newValue) => {
    setCssCode(newValue)
  }, 2000)

  const onJavascriptChange: ChangeHandler = debounce((newValue) => {
    setJavascriptCode(newValue)
  }, 2000)

  // return <CodePen htmlCode={htmlCode} cssCode={cssCode} javascriptCode={javascriptCode} />
  return (
    <div className='color-white'>
      <div>123</div>
      <div>456</div>
    </div>
  )
}

export default Home
