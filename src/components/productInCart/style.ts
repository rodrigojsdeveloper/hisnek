import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFF',
  },
  value: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#7C7C8A',
  },
});