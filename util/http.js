import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-rn-a78e6-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
