import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from './actions/actions'

export type IdType = string

export interface Transaction {
  id: IdType;
  text: string;
  amount: number;
}

export type Transactions = Transaction[]

export interface State {
  transactions: Transactions
}

export interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: Transaction;
}

export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: IdType;
}

export type TransactionActionTypes = AddTransactionAction | DeleteTransactionAction


export interface ContextProps {
  transactions: Transaction[];
  deleteTransaction: (id: IdType) => void;
  addTransaction: (transaction: Transaction) => void;
}