import { Text } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Paragraph({ children }: Props) {
  return <Text>{children}</Text>;
}
