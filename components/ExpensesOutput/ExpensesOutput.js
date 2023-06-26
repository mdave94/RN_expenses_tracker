import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "something",
    amount: 11.82,
    date: new Date("2021-11-02"),
  },
  {
    id: "e2",
    description: "somehting else",
    amount: 311.82,
    date: new Date("2011-11-22"),
  },
  {
    id: "e3",
    description: "new thing",
    amount: 123.82,
    date: new Date("2022-01-2"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary
          expenses={DUMMY_EXPENSES}
          periodName={expensesPeriod}
        />
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </View>
    </>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
