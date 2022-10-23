import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontsize: 16,
    color: "#FFF",

    marginLeft: 16,
    marginRight: 16,
  },
  taskTextDone: {
    flex: 1,
    fontsize: 16,
    color: "#808080",
    textDecorationLine: 'line-through',

    marginLeft: 16,
    marginRight: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  listEmpty: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#333333",
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    textAlign: "center",
    marginTop: 16,
  },
  listEmptyText2: {
    color: "#808080",
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    textAlign: "center",
  },
});
