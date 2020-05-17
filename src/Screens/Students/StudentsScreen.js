import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, Header, Image, ToastAndroid, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../../../values/styles'
import Colors from "../../../values/colors"

import { list } from "../../../values/sampledata"
import StudentItemBox from '../../Components/StudentItemBox'


function StudentActivity(){
    const navigation = useNavigation()
    return(
        <ScrollView style={globalStyles.container}>
            <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                    <Image style={{margin: 10}} source={require('../../../assets/ic_menu.png')} />
                </TouchableWithoutFeedback>
                <View style={{flex: 1}}/>
                <TouchableWithoutFeedback onPress={() => {}}>
                    <Image style={{margin: 10}} source={require('../../../assets/ic_search.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {}}>
                    <Image style={{margin: 10}} source={require('../../../assets/ic_notif.png')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                    <Image style={{margin: 10}} source={require('../../../assets/ic_profile.png')} />
                </TouchableWithoutFeedback>
            </View>
            <Text style={ globalStyles.title }>stu</Text>
            <Text style={ globalStyles.title }>dents</Text>
            <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 70 }}>
                <Text style={styles.reg_text}>Showing</Text>
                <Text style={styles.bold_text}> {list.length} students</Text>
            </View>
            <View style={styles.listContainer}>
                {list.map((person, i) => 
                    <StudentItemBox key={i} content={person} clickFunction={() => {}}/>
                    )
                }      
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bold_text:{
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 0,
        fontFamily: "ruda_black",
        color:Colors.dark_blue,
    },
    reg_text:{
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 0,
        fontFamily: "ruda_reg",
        color:Colors.dark_blue,
    },
    listContainer: {
        flex: 1,
        paddingBottom: 50
    }
})
export default StudentActivity