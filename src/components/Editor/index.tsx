// React
import { useContext } from "react"

// Components
import SyntaxHighlighter from "react-syntax-highlighter"

// Context
import { RequestContext } from "../../contexts/request-context"

// Theme editor
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

export const Editor = () => {
  const { requestParams } = useContext(RequestContext)

  return (
    <SyntaxHighlighter language="typescript" style={vs2015} showLineNumbers className="h-full">
{`const response = fetch('${requestParams.protocol}${requestParams.url}${requestParams.port}', {
  method: ${requestParams.method}
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
