import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Body from "./src/components/typography/Body";
import Header from "./src/components/typography/Header";
import Paragraph from "./src/components/typography/Paragraph";

export default function App() {
  return (
    <View style={styles.container}>
      <Body>Body</Body>
      <Header>Header</Header>
      <Paragraph>Paragraph</Paragraph>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
