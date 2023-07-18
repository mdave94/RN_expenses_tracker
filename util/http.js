import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-rn-a78e6-default-rtdb.europe-west1.firebasedatabase.ap";
const EXPENSES_JSON = "/expenses.json";

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + EXPENSES_JSON, expenseData);
  // name is the uniqe id from firebase
  return response.data.name;
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + EXPENSES_JSON);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, updatedData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, updatedData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
