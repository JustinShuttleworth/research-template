import { createContext, useContext } from 'react'

interface AppValue {
  test?: string
}
const initialState: AppValue = {}
const AppContext = createContext<AppValue>(initialState)

const AppProvider = ({ ...props }) => {
  return <AppContext.Provider {...props} value={{
    test: 'test'
  }} />
}

const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within a AppProvider')
  }
  return context
}

export { AppProvider, useApp}