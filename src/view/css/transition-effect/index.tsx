import React from 'react'
import CodePen from '@/components/codepen'

const TransitionEffect: React.FC = () => {
  const htmlCode = `<h1>Hover Me Hello</h1>`

  const cssCode = `
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
	`

  const javascriptCode = ``

  return <CodePen htmlCode={htmlCode} cssCode={cssCode} javascriptCode={javascriptCode} />
}

export default TransitionEffect
