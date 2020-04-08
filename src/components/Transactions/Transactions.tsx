import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction as TTransaction } from '../../types'
import Transaction from '../Transaction/Transaction'

const Transactions = () => {
  const {
    transactions = [],
  } = useContext(GlobalContext)

  return (
    <div>
      <h3>Transactions</h3>
      <ul className="list">
        {
          transactions.map((transaction: TTransaction) => {
            let { id } = transaction
            
            return (
              <Transaction key={id} {...transaction}/>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default Transactions
