import { StyleSheet } from "react-native";
import colors from "@/constants/colors";

export const styles = StyleSheet.create({
  // lit.tsx
  scrollContainer: {
    flexGrow: 1,
  },
  quarteiraoText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  //
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
  subtitle: {
    color: colors.text,
    fontSize: 20,
  },
  card: {
    backgroundColor: "gray",
  },

  //registrosSalvos
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },
  cell: {
    minWidth: 100,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#e0e0e0",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
