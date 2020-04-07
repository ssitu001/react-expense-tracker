import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from '../actions/actions'

import {
  State,
  TransactionActionTypes,
} from '../types'

const AppReducer = (state: State, action: TransactionActionTypes): State => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return state

    case DELETE_TRANSACTION:
      return state

    default:
      return state
  }
}

export default AppReducer