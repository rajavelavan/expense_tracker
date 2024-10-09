const router = require('express').Router();
const {
  getExpense,
  addExpense,
  deleteExpense,
} = require('../controllers/expense.js');
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require('../controllers/income.js');

router
  .post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)
  .delete('/delete-income/:id', deleteIncome)
  .get('/get-expenses', getExpense)
  .post('/add-expense', addExpense)
  .delete('/delete-expense/:id', deleteExpense);

module.exports = router;
