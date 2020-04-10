import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../../context/GlobalState'

const AddTransactionForm: React.FC = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {
    addTransaction = () => {},
  } = useContext(GlobalContext)

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    addTransaction({ id: uuidv4(), text, amount, })

    setText('')
    setAmount(0)
  }

  return (
    <div>
      <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
            <input
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
          <button type='submit' className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransactionForm
