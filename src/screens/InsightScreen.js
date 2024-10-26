import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import firebase from '../firebaseConfig';
import styles from '../styles/styles'; // Import styles

const InsightsScreen = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('sales').onSnapshot(snapshot => {
      const salesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSales(salesData);
    });

    return () => unsubscribe();
  }, []);

  const totalSales = sales.reduce((total, sale) => total + sale.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Business Insights</Text>
      <Text style={styles.text}>Total Sales: ${totalSales.toFixed(2)}</Text>
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

export default InsightsScreen;
