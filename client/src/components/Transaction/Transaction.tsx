import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction as TransactionType } from '../../types'


const Transaction = ({
  id = '',
  text = '',
  amount = 0,
}: TransactionType) => {
  const transactionClass = amount >= 0 ? 'plus' : 'minus'
  const formattedAmount = amount >= 0 ? `+$${amount}` : `-$${amount * -1}`

  const {
    deleteTransaction = () => {},
  } = useContext(GlobalContext)

  return (
    <>
      <li className={transactionClass}>
        {text} <span>{formattedAmount}</span>

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
