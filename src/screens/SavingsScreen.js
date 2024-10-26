import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import firebase from '../firebaseConfig';

const SavingsScreen = () => {
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);

  const createGroup = () => {
    if (!groupName) return;

    firebase.firestore().collection('stokvels').add({ name: groupName })
      .then(() => setGroupName(''))
      .catch(error => console.log("Error creating group: ", error));
  };

  return (
    <View>
      <Text>Community Savings Groups</Text>
      <TextInput
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <Button title="Create Group" onPress={createGroup} />
      <FlatList
        data={groups}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SavingsScreen;
