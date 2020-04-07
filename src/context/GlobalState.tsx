import React, { createContext, useReducer } from 'react'
import AppReducer from '../reducers/AppReducer'

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]

const initialState = {
  transactions: [...dummyTransactions],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  )
}