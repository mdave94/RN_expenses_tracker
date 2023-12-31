import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-contect";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const expenses = await getExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Something went wrong ");
      }

      setIsLoading(false);
    }

    fetchExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

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
