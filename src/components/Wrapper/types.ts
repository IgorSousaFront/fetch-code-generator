export interface IDropdownOptionsProps {
  name: string
  value: string
}

export interface IDropdownOptionsWithColors extends IDropdownOptionsProps {
  color: string
}

export interface IRequestParams {
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'
  protocol: 'HTTP' | 'HTTPS'
  url: string
  port: string 
}
