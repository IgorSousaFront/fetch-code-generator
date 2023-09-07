// React
import { useState, useContext } from "react";

// Components
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Splitter, SplitterPanel } from 'primereact/splitter'
import { InputMask } from "primereact/inputmask"

// Types
import { IDropdownOptionsProps, IRequestParams, IDropdownOptionsWithColors } from '../../types'
import { Editor } from "../Editor";

// Context
import { RequestContext } from '../../contexts/request-context'


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

const Wrapper = () => {
  const { requestParams, updateRequestParams } = useContext(RequestContext)

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
          <h1>{requestParams.method}</h1>
          <div className="p-inputgroup">
            <Dropdown
              options={methodList}
              optionLabel="name"
              value={requestParams.method}
              onChange={e => updateRequestParams('method', e.value)}
              valueTemplate={selectedCountryTemplate}
              placeholder="Escolha o verbo https" 
              itemTemplate={countryOptionTemplate}
            />
            <Dropdown
              options={httpTypeList}
              optionLabel="name"
              value={requestParams.protocol}
              onChange={e => updateRequestParams('protocol', e.value)}
              placeholder="Escolha o protocólo" 
            />
            <InputText
              value={requestParams.url}
              onChange={e => updateRequestParams('url', e.target.value)}
              placeholder="URL para a requisição"
            />

            <InputMask
              value={requestParams.port}
              onChange={e => updateRequestParams('port', e.target.value as string)}
              mask=":9999"
              placeholder=":3000"
            />
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <Editor />
        </SplitterPanel>
      </Splitter>
    </div>
  )
}

export default Wrapper
