import {StyleSheet, Text, View} from "react-native";

export default function StaticOne() {

  return (
    <View style={styles.container}>
      <Text>Static tab - One screen</Text>
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
