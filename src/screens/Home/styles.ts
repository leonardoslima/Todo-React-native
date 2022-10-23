import { Inter_400Regular } from './../../../node_modules/@expo-google-fonts/inter/index.d';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cont1: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
  },
  logo: {
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -52,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#F2F2F2",
    padding: 16,
    fontSize: 16,
    marginRight: 7,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0D0D0D",
  },
  buttonText: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: 56,
    height: 56,
    padding: 18,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  numbsCont: {
    width: "100%",
    height: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  numbs: {
    flexDirection: "row",
    alignItems: "center",
  },
  numbs1: {
    color: "#4EA8DE",
    textAlign: "center",
    marginRight: 8,
    fontSize: 14,
  },
  numbs2: {
    color: "#8284FA",
    textAlign: "center",
    marginRight: 8,
    fontSize: 14,
  },
  numbers: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 12,
  }
});
