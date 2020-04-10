import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'

import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpense from './components/IncomeExpense/IncomeExpense'
import Transactions from './components/Transactions/Transactions'
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm'

const App: React.FC = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransactionForm />
      </GlobalProvider>
    </div>
  );
}

export default App;
