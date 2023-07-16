import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-rn-a78e6-default-rtdb.europe-west1.firebasedatabase.app";
const EXPENSES_JSON = "/expenses.json";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + EXPENSES_JSON, expenseData);
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + EXPENSES_JSON);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}
