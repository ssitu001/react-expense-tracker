import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from './actions/actions'

export interface Transaction {
  id: number,
  text: string,
  amount: number,
}

export interface State {
  transactions: Transaction[]
}

export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION,
  payload: Transaction,
}

export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION,
  payload: Transaction,
}

export type TransactionActionTypes = AddTransactionAction | DeleteTransactionAction