import {Text, View, StyleSheet, Button} from "react-native";
import {Link, useRouter} from "expo-router";

export default function HomeTab() {
  const { push } = useRouter()

  const onPressStatic = () => {
    push("/(nested-static-tab)/two")
  }

  const onPressDynamic = () => {
    push({pathname: "/(nested-dynamic-tab)/[id]", params: {id: "1"}})
  }

  return (
    <View style={styles.container}>
      <Text>Buttons to navigate to a specific tab from the nested tabs</Text>
      <Button title={"Go to nested static tab - TWO"} onPress={onPressStatic}></Button>
      <Button title={"Go to nested dynamic tab - [1]"} onPress={onPressDynamic}></Button>
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
