import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#0E0F11",
    position: "absolute",
    top: 0,
    zIndex: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#202224",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  containerQuantity: {
    position: "absolute",
    width: 16,
    height: 16,
    backgroundColor: "#16181A",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#202224",
    right: -6,
    top: -4,
    zIndex: 1,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  textQuantity: {
    fontSize: 10,
    fontWeight: "500",
    color: "#fff",
  }
});
