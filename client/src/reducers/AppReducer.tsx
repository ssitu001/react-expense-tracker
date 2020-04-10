import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from '../actions/actions'

import {
  State,
  TransactionActionTypes,
  Transaction,
} from '../types'

const AppReducer = (state: State, action: TransactionActionTypes): State => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction: Transaction): boolean => transaction.id !== action.payload)
      }

    default:
      return state
  }
}

export default AppReducer