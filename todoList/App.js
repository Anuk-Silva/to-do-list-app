import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* This is Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Current Tasks</Text>

        <View style={styles.items}>
          { /* This will be where all the current tasks (yet to be completed) will go!}*/}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>   
          <Task text={'Task 3'}/> 
          <Task text={'Task 4'}/> 
          <Task text={'Task 5'}/> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',

  },
  tasksWrapper: {
    paddingTop: 75,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 50,
  },
});
