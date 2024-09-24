import { createContext, useContext, ReactNode, PropsWithChildren } from "react"

interface DetailValue {
  inspectionId: number
}

const initialState: DetailValue = {
  inspectionId: 0
}

const DetailContext = createContext<DetailValue | undefined>(undefined)

interface DetailProviderProps {
  inspectionId: number
}

const DetailProvider = ({
  inspectionId,
  children
}: PropsWithChildren<DetailProviderProps>) => {
  return (
    <DetailContext.Provider value={{ inspectionId }}>
      {children}
    </DetailContext.Provider>
  )
}

const useDetail = () => {
  const context = useContext(DetailContext)
  if (context === undefined) {
    throw new Error("useDetail must be used within a DetailProvider")
  }
  return context
}

export { DetailProvider, useDetail }
