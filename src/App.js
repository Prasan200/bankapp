import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [transaction, setTransaction] = useState("");
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState(0);

  function handleTransaction(e) {
    e.preventDefault();
    
    // Validate transaction type
    if (!transaction) {
      alert("Please select your transaction type");
      return;
    }

    // Validate amount
    const inputAmount = Number(value);
    if (!value || inputAmount <= 0) {
      alert("Please enter a valid positive amount");
      return;
    }

    if (transaction === "Deposit") {
      setAmount(prevAmount => prevAmount + inputAmount);
    } else {
      if (inputAmount > amount) {
        alert("Insufficient Balance. Your current balance is Rs." + amount);
      } else {
        setAmount(prevAmount => prevAmount - inputAmount);
      }
    }
    setValue("");
  }

  return (
    <div className="bank-container">
      <h1 className="bank-title">Bank Application</h1>
      
      <form onSubmit={handleTransaction} className="form-container">
        <div className="form-group">
          <label className="form-label">
            Choose Your Transaction:
          </label>
          <select 
            className="form-select"
            value={transaction} 
            onChange={(e) => setTransaction(e.target.value)}
          >
            <option value="">Select Transaction</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
          </select>
        </div>

        <h3 className="balance-display">
          Your Bank Balance is Rs.{amount.toLocaleString()}
        </h3>

        <div className="form-group">
          <label className="form-label">
            Enter The Amount:
          </label>
          <input 
            type="number" 
            className="form-input"
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            min="0"
          />
        </div>

        <button 
          className="submit-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;