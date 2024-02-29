import {StyleSheet, Text, View} from "react-native";

export default function StaticTwo() {

  return (
    <View style={styles.container}>
      <Text>Static tab - Two screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
