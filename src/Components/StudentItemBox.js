import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, Image } from 'react-native';

import globalStyles from '../../values/styles'
import Colors from "../../values/colors"
import styles from '../../values/styles';


const StudentItemBox = (props) => {
    return (
      <TouchableWithoutFeedback onPress={props.clickFunction}>
          <View style={localStyles.container}>
              <Image style={styles.image} source={{uri: "https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png", width: 120, height: 120}}/>
              <View style={{flex: 1, alignItems: "flex-start", marginStart: 20}}>
                <Text style={globalStyles.bold_text }>{props.content.name}</Text>
                <Text style={localStyles.row_text}>{props.content.role}</Text>
                <Text style={localStyles.row_text}>{props.content.college}</Text>
                <Text style={localStyles.row_text}></Text>
                <Text style={localStyles.row_text}>{props.content.email}</Text>
                <Text style={localStyles.row_text}>{props.content.phone}</Text>
              </View>
          </View>
          
      </TouchableWithoutFeedback>
    );
  }

  const localStyles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    row_text: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: "ruda_reg",
        color:Colors.dark_blue,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    }
})
 
export default StudentItemBox;