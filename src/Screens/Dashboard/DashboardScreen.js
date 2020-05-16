import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, Header, StatusBar, ToastAndroid } from 'react-native';

import styles from '../../../values/styles'
import Colors from "../../../values/colors"

import { list } from "../../../values/sampledata"

import DashboardRow from '../../Components/DashboardRow';


function DashboardActivity({ navigation }){
    return(
        
        <ScrollView style={styles.container}>
            <Text style={ styles.title }>dash</Text>
            <Text style={ styles.title }>board</Text>
            <Text style={ styles.secondary_text }>Click on any student to know more</Text>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 20,
            }}>
                <Text style={localStyles.bold_text}>Name</Text>
                <Text style={localStyles.bold_text}>Role</Text>
                <Text style={localStyles.bold_text}>Rank</Text>
            </View>
            <View style={localStyles.listContainer}>
                {list.map((person, i) => 
                    <DashboardRow key={i} content={person} clickFunction={() => ToastAndroid.show("Todo", ToastAndroid.SHORT)}/>
                    )
                }      
            </View>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    bold_text:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 0,
        fontFamily: "ruda_black",
        color:Colors.dark_blue,
      },
    listContainer: {
        flex: 1,
        paddingBottom: 50
    }
})
export default DashboardActivity