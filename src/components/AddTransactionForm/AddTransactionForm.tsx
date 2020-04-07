import React, { useState } from 'react'

const AddTransactionForm = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0) // -> TS error bc init is a number

  return (
    <div>
      <h3>Add new transaction</h3>
        <form>
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
          <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransactionForm
