import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction as TransactionType } from '../../types'


const Transaction = ({
  id = '',
  text = '',
  amount = 0,
}: TransactionType) => {
  const {
    deleteTransaction = () => {},
  } = useContext(GlobalContext)

  return (
    <>
      <li className="minus">
        {text} <span>{amount}</span>

        <button
          className="delete-btn"
          onClick={() => deleteTransaction(id)}
        >
          x
        </button>
      </li>
    </>
  )
}

export default Transaction
