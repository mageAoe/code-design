import hljs from 'highlight.js/lib/core'
// 导入需要的语言高亮
import bash from 'highlight.js/lib/languages/bash'
import typeScript from 'highlight.js/lib/languages/typeScript'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import scss from 'highlight.js/lib/languages/scss'

import 'highlight.js/styles/github.css'
import 'highlight.js/styles/default.css'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('typeScript', typeScript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('javascript', javascript)

export default hljs
