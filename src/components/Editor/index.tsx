// React
import { useEffect } from "react"

// Components
import SyntaxHighlighter from "react-syntax-highlighter"

// Types
import { IEditorProps } from './types'

// Theme editor
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

export const Editor = (props: IEditorProps) => {

  return (
    <SyntaxHighlighter language="typescript" style={vs2015} showLineNumbers className="h-screen">
{`const response = fetch('${props.requestAttr.protocol}${props.requestAttr.url}${props.requestAttr.port}', {
  method: ${props.requestAttr.method}
}).then(res) {
  if(res) {
    console.log('Funcionou')
  }
}.catch(err) {
  throw new Error('ERRROR', err)
}`}
    </SyntaxHighlighter>
  )
}