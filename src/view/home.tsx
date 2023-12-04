import { useRef, useEffect } from 'react'
import * as monaco from 'monaco-editor'
import type { editor } from 'monaco-editor'
import './index.scss'

function Home() {
  const iframeDomRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const editor = useRef<any>(null)

  const defaultOptions = {
    language: 'javascript',
    tabSize: 2,
    autoIndent: true,
    theme: 'github',
    automaticLayout: true,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 120,
    lineHeight: 28,
    fontSize: 16,
    minimap: {
      size: 'fill'
    }
  }

  const initContent = `// Input javascript code here
	for (let i = 1; i <= 5; i++) {
	if (i % 2 === 0) {
		console.warn(i)
	} else {
		console.log(i)
	}
	}
	console.error('Works fine, no error!')
`

  const options: editor.IStandaloneEditorConstructionOptions = {
    language: 'javascript',
    tabSize: 2,
    autoIndent: 'none',
    theme: 'github',
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
    value: initContent
  }

  useEffect(() => {
    const iframeDoc = iframeDomRef.current!.contentDocument
    iframeDoc!.open() // 需要先调用 `open()`，打开“写”的开关
    iframeDoc!.write(`
		<body>
			<style>button { color: red }</style>
			<style>
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
      }
			</style>
			<button>Click</button>
			<h1>Hover Me Hello</h1>
			<script>
				document.querySelector('button').addEventListener('click', () => {
					console.log('on-click!')
				})
			</script>
		</body>
		`)
    iframeDoc!.close() // 最后调用 `close()`，关闭“写”的开关

    try {
      initEditor()
    } catch (error) {
      //
    }
  })

  const initEditor = () => {
    editor.current = monaco.editor.create(containerRef.current!, { ...options })
    editor.current!.getModel().updateOptions({ tabSize: 8 })
  }

  return (
    <div style={{ minHeight: 360, background: '#fff' }}>
      <div className='monaco'>
        <div className='container' ref={containerRef}></div>
      </div>
      <iframe
        ref={iframeDomRef}
        width='100%'
        height='400'
        title='Example Iframe'
        className='b-none'
        src='http://127.0.0.1:5500/public/preview.html'
      ></iframe>
    </div>
  )
}

export default Home
