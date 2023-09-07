// React
import { createContext, useState } from "react"

// Types
import { IRequestParams, IRequestContext } from "../types";

const initialValue:IRequestParams = {
  method: 'GET',
  protocol: 'HTTP',
  url: '',
  port: ''
}

export const RequestContext = createContext<IRequestContext>({
  requestParams: initialValue,
  updateRequestParams: () => {}
});

export const RequestProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [ requestParams, setRequestParams ] = useState<IRequestParams>(initialValue)

  const updateRequestParams = (param: keyof IRequestParams, value: string) => {
    setRequestParams((prevState) => ({
      ...prevState,
      [param]: value
    }))
  }

  return (
    <RequestContext.Provider value={{requestParams, updateRequestParams}}>
      {children}
    </RequestContext.Provider>
  )
}
