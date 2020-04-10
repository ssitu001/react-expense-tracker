import React, { createContext, useReducer } from 'react'
import AppReducer from '../reducers/AppReducer'

import {
  IdType,
  ContextProps,
  Transaction,
} from '../types'

import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from '../actions/actions'

const initialState = {
  transactions: [],
}

export const GlobalContext = createContext<Partial<ContextProps>>(initialState)

export const GlobalProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // actions
  const deleteTransaction = (id: IdType): void => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    })
  }

  const addTransaction = (transaction: Transaction): void => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    })
  }
  
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}