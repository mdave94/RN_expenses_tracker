import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-contect";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses();
      expensesCtx.setExpenses(expenses);
    }

    fetchExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();

    const lastSevenDays = getDateMinusDays(today, 7);

    return expense.date >= lastSevenDays && expense.date <= today;
  });

  return (
    <ExpensesOutput
      fallbackText="There is no item left"
      expenses={recentExpenses}
      expensesPeriod={"Last 7 Days"}
    />
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {},
});
