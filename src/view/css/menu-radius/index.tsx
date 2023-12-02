import { Link } from 'react-router-dom'
import { Button } from 'antd'
import CodeBlock from '@/components/highlight/CodeBlock'
import ViewCode from '@/components/viewCode/index'

function MenuRadius() {
  const code = `
import java from 'highlight.js/lib/languages/java'
import csharp from 'highlight.js/lib/languages/csharp'
import php from 'highlight.js/lib/languages/php'
import python from 'highlight.js/lib/languages/python'
import objectivec from 'highlight.js/lib/languages/objectivec'
import bash from 'highlight.js/lib/languages/bash'
import typeScript from 'highlight.js/lib/languages/typeScript'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import scss from 'highlight.js/lib/languages/scss'
`

  const tabs = [
    {
      language: 'HTML',
      code: "<Button type='primary'>返回</Button>"
    },
    {
      language: 'CSS',
      code: "borderRadius: '10px 10px 0 0'"
    },
    {
      language: 'JAVASCRIPT',
      code: 'const [visible, setVisible] = useState(true)'
    }
  ]

  return (
    <div style={{ minHeight: 360, background: '#fff' }}>
      <Link to='/css'>
        <Button type='primary'>返回</Button>
      </Link>
      <CodeBlock language='typescript' code={code} />
      <ViewCode language='typescript' code={code} tabs={tabs} />
    </div>
  )
}

export default MenuRadius
