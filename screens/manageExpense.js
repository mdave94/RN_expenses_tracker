import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
function ManageExpense({ route, navigation }) {
  // ? is optional operator. If params is undefined expenseId wont used and the expression'll return undefined
  const editedExpenseId = route.params?.expenseId;
  //js version to convert data to boolian
  // true for editing false to not
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <Text>ManageExpense Page</Text>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {},
});
