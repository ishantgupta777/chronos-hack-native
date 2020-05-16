import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../../values/styles'
import Colors from "../../values/colors"
 
const DashboardRow = (props) => {
  return (
    <TouchableOpacity onPress={props.clickFunction}>
        <View style={localStyles.rowContainer}>
            <Text style={localStyles.row_text}>{props.content.name}</Text>
            <Text style={localStyles.row_text}>{props.content.role}</Text>
            <Text style={localStyles.row_text}>{props.content.rank}</Text>
        </View>
    </TouchableOpacity>
  );
}
 
const localStyles = StyleSheet.create({
	rowContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: Colors.white,
    },
    row_text:{
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "ruda_reg",
        color:Colors.dark_blue,
      },
})
 
export default DashboardRow;