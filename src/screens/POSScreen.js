import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';
import firebase from '../firebaseConfig';
import styles from '../styles/styles'; // Import styles

const POSScreen = () => {
  const [amount, setAmount] = useState('');
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('sales').onSnapshot(snapshot => {
      const salesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSales(salesData);
    });

    return () => unsubscribe();
  }, []);

  const recordSale = () => {
    if (!amount) {
      Alert.alert("Please enter a sale amount.");
      return;
    }

    firebase.firestore().collection('sales').add({
      amount: parseFloat(amount),
      date: new Date(),
    }).then(() => {
      setAmount('');
      Alert.alert("Sale recorded successfully!");
    }).catch(error => {
      Alert.alert("Error recording sale: ", error.message);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Point of Sale</Text>
      <TextInput
        style={styles.input}
        placeholder="Sale Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={recordSale}>
        <Text style={styles.buttonText}>Record Sale</Text>
      </TouchableOpacity>
      <FlatList
        data={sales}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>${item.amount} on {new Date(item.date.seconds * 1000).toLocaleDateString()}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default POSScreen;
