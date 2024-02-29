import {StyleSheet, Text, View} from "react-native";
import {useGlobalSearchParams, useLocalSearchParams} from "expo-router";

export default function HomeTab() {
  const localSearchParams = useLocalSearchParams();
  const globalSearchParams = useGlobalSearchParams();

  console.log("localSearchParams", localSearchParams);
  console.log("globalSearchParams", globalSearchParams);


  return (
    <View style={styles.container}>
      <Text>Dynamic tab</Text>
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
