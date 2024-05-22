import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? 30 : 0,

    // paddingBottom: 200,
  },

  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
    width: 250,
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15,
  },
  search: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderTopEndRadius: 10,
  },
  row: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: "column",
    flex: 8,
  },
  faculty: {
    color: "grey",
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
  headerText: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
});
export default styles;
