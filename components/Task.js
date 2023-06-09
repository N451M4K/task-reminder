/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Task(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const time = new Date(props?.task?.time);
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.task} numberOfLines={3}>
        {props.task.task}
      </Text>
      <Text style={styles.time}>
        {time.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: '#9C1D9E',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  task: {
    flex: 1,
    fontWeight: 'bold',
    height: 40,
    textAlignVertical: 'center',
  },

  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9C1D9E',
  },
});

export default Task;
