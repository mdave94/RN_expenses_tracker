import { View, Text } from "react-native";
function ExpensesSummary({ expenses, periodName }) {
  const expensesSumm = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSumm.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
