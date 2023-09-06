// React
import { useState } from "react";

// Components
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Splitter, SplitterPanel } from 'primereact/splitter'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IDropdownOptionsProps {
  name: string
  value: string
}

const methodList:IDropdownOptionsProps[] = [
  {
    name: 'GET',
    value: 'GET'
  },
  {
    name: 'POST',
    value: 'POST'
  },
  {
    name: 'PATCH',
    value: 'PATCH'
  },
  {
    name: 'PUT',
    value: 'PUT'
  },
  {
    name: 'DELETE',
    value: 'DELETE'
  },
]

const httpTypeList:IDropdownOptionsProps[] = [
  {
    name: 'HTTP',
    value: 'HTTP'
  },
  {
    name: 'HTTPS',
    value: 'HTTPS'
  },
]

const Wrapper = () => {
  const [method, setMethod] = useState<string>('')
  const [protocol, setProtocol] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  return (
    <div className="flex gap-4">
      <Splitter className="w-full h-screen">
        <SplitterPanel className="flex align-items-start">
          <Dropdown
            options={methodList}
            optionLabel="name"
            value={method}
            onChange={e => setMethod(e.value)}
            placeholder="Escolha o verbo https" 
          />
          <Dropdown
            options={httpTypeList}
            optionLabel="name"
            value={protocol}
            onChange={e => setProtocol(e.value)}
            placeholder="Escolha o protocólo" 
          />
          <InputText value={url} onChange={e => setUrl(e.target.value)}/>
          {/* <Card title="Escolha o tipo de requisição" className="w-full">
          </Card> */}
        </SplitterPanel>
        <SplitterPanel>
          {/* <code>
          </code> */}
          <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers className="h-screen">
{`const response = fetch(${protocol}://${url}, {
  method: ${method}
}).then() {
  console.log('Funcionou')
}.catch(err) {
  throw new Error('ERRROR', err)
}`}
          </SyntaxHighlighter>
        </SplitterPanel>
      </Splitter>
      {/* <Card title="Title 1" className="w-6">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </Card> */}
    </div>
  )
}

export default Wrapper