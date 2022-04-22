import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const manageTheAddedTask = () =>{
    Keyboard.dismiss();
    if(task){
    setTaskItems([...taskItems, task]) // Put outs everything in the tasksItems as a new array and appends the new task to it
    setTask('');
    console.log(task); // Logs the task in line 13
    }
  }

  const completeTheTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); // Remove that one item from the array and store the result back into itemsCopy
    setTaskItems(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps = 'handled'
      >
      {/* This is Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Current Tasks</Text>
        <View style={styles.items}>
          { /* This will be where all the current tasks (yet to be completed) will go!}*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress ={() =>completeTheTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      </ScrollView>

      {/* Write your own task */}
      {/* This will push everything up instead of covering it */}
      <KeyboardAvoidingView
        behaviour = {Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Please Add a Task!'} value ={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => manageTheAddedTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  input: {
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#55BCF6',
    fontSize: 35,
    alignItems: 'center',
    paddingBottom: 1,
  },
});