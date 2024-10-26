// src/styles/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFAB00', // FNB Yellow
  },
  button: {
    width: '80%', // Responsive width
    padding: 10,
    backgroundColor: '#C20F20', // FNB Red
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text for button
    fontSize: 16,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#C20F20', // FNB Red
    borderRadius: 5,
  },
  text: {
    color: '#000000', // Black text for better readability
  },
});

export default styles;
