import React from 'react'
import { Transaction as TransactionType } from '../../types'


const Transaction = ({
  id = 0,
  text = '',
  amount = 0,
}: TransactionType) => {
  return (
    <>
      <li className="minus">
        {text} <span>{amount}</span>

        <button
          className="delete-btn"
          onClick={() => console.log('delete', id)}
        >
          x
        </button>
      </li>
    </>
  )
}

export default Transaction
