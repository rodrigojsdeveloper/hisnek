import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#0E0F11',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#202224',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
