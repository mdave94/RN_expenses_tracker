import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contect";
import { useContext } from "react";

function AllExpenses() {
  const expeseContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expeseContext.expenses}
      expensesPeriod={"Total"}
    />
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {},
});
