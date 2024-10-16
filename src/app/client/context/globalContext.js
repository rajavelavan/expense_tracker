import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();
const apiUrl = 'http://localhost:5000/api/';

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`${apiUrl}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
      console.log(`Added Income: ${response}`);
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(`${apiUrl}get-incomes`);
    setIncomes(response.data);
    console.log(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${apiUrl}delete-income/${id}`);
    console.log(`Deleted Income: ${res}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //calculate incomes
  const addExpense = async (expense) => {
    const response = await axios
      .post(`${apiUrl}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
      console.log(`Included expense: ${response}`);
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${apiUrl}get-expenses`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${apiUrl}delete-expense/${id}`);
    console.log(`Deleted Expense: ${res}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });

    return totalExpense;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
