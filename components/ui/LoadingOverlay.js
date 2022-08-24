import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function LoadingOverlay({ message }) {
  console.log("====================================");
  console.log(message);
  console.log("====================================");
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    color: "green",
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
