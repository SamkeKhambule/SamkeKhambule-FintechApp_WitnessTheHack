import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import firebase from '../firebaseConfig';
import styles from '../styles/styles'; // Import styles

const InventoryScreen = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('inventory').onSnapshot(snapshot => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInventory(items);
    });

    return () => unsubscribe();
  }, []);

  const cleanInput = (input) => {
    return input.trim().replace(/[^a-zA-Z0-9\s]/g, '');
  };

  const addItem = () => {
    const cleanedItem = cleanInput(newItem);
    if (!cleanedItem) {
      Alert.alert("Please enter a valid item name.");
      return;
    }
    firebase.firestore().collection('inventory').add({
      name: cleanedItem,
      stock: Math.floor(Math.random() * 10) + 1, // Random stock for demo
    }).then(() => {
      setNewItem('');
      Alert.alert("Item added successfully!");
    }).catch(error => {
      Alert.alert("Error adding item: ", error.message);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inventory Management</Text>
      <TextInput
        style={styles.input}
        placeholder="New Item"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={inventory}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.name} - {item.stock}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default InventoryScreen;
