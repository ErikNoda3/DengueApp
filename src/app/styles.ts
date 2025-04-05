import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
  },
});
