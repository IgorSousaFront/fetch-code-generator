// React
import { useState } from "react";

// Components
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Splitter, SplitterPanel } from 'primereact/splitter'
import { InputMask } from "primereact/inputmask"

// Types
import { IDropdownOptionsProps, IRequestParams, IDropdownOptionsWithColors } from './types'
import { Editor } from "../Editor";


const methodList:IDropdownOptionsWithColors[] = [
  {
    name: 'GET',
    value: 'GET',
    color: '#9b59b6'
  },
  {
    name: 'POST',
    value: 'POST',
    color: '#2ecc71'
  },
  {
    name: 'PATCH',
    value: 'PATCH',
    color: '#f1c40f'
  },
  {
    name: 'PUT',
    value: 'PUT',
    color: '#e67e22'
  },
  {
    name: 'DELETE',
    value: 'DELETE',
    color: '#e74c3c'
  },
]

const httpTypeList:IDropdownOptionsProps[] = [
  {
    name: 'HTTP',
    value: 'HTTP://'
  },
  {
    name: 'HTTPS',
    value: 'HTTPS://'
  },
]

const initialRequestParams:IRequestParams = {
  method: 'GET',
  protocol: 'HTTP',
  url: '',
  port: ''
}

const Wrapper = () => {
  const [requestConfig, setRequestConfig] = useState<IRequestParams>(initialRequestParams)

  const selectedCountryTemplate = (option: IDropdownOptionsWithColors, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center font-semibold" style={{ color: option.color }}>
          <div>{option.name}</div>
        </div>
      )
    }

    return <span>{props.placeholder}</span>
  };

  const countryOptionTemplate = (option: IDropdownOptionsWithColors) => {
    return (
      <div className="flex align-items-center font-semibold" style={{ color: option.color }}>
        <div>{option.name}</div>
      </div>
    )
  }

  return (
    <div className="flex gap-4">
      <Splitter className="w-full h-screen">
        <SplitterPanel className="flex align-items-start">
          <div className="p-inputgroup">
            <Dropdown
              options={methodList}
              optionLabel="name"
              value={requestConfig.method}
              onChange={e => setRequestConfig(prevState => ({...prevState, method: e.value}))}
              valueTemplate={selectedCountryTemplate}
              placeholder="Escolha o verbo https" 
              itemTemplate={countryOptionTemplate}
            />
            <Dropdown
              options={httpTypeList}
              optionLabel="name"
              value={requestConfig.protocol}
              onChange={e => setRequestConfig(prevState => ({...prevState, protocol: e.value}))}
              placeholder="Escolha o protocólo" 
            />
            <InputText
              value={requestConfig.url}
              onChange={e => setRequestConfig(prevState => ({...prevState, url: e.target.value}))}
              placeholder="URL para a requisição"
            />

            <InputMask
              value={requestConfig.port}
              onChange={e => setRequestConfig(prevState => ({...prevState, port: e.target.value as string}))}
              mask=":9999"
              placeholder=":3000"
            />
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <Editor
            requestAttr={{
              method: requestConfig.method,
              protocol: requestConfig.protocol,
              url: requestConfig.url,
              port: requestConfig.port
            }}
          />
        </SplitterPanel>
      </Splitter>
    </div>
  )
}

export default Wrapper