import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

 const DropDown = (props) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const options = props.options || [];
  const placeholder = props.placeholder || 'Choose Option'
  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedValue}
          mode='dropdown'
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label={placeholder} value={null} />
          {options.map(option => <Picker.Item key={option} label={option} value={option} />)}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
		flexDirection: 'row'
  },
  picker: {
    width: '80%',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 6
  }
});

export default DropDown;