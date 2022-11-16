import { Text } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  return <Text>{children}</Text>;
}
