import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import globalStyles from '../../values/styles'
import Colors from '../../values/colors'

const DrawerView = (props) => {
    return(
        <View style={styles.background}>
            <View style={{flex: 4}}>
                <View style={{position: 'absolute', bottom: 60, right: 10}}>
                    <Text style={styles.title}>chr</Text>
                    <Text style={styles.title}>onos</Text>
                </View>
            </View>
            <View style={{flex: 6}}>
                <View style={{position: 'absolute', top: 30}}>
                    <TouchableOpacity onPress={() => {{props.navigator.navigate('Home')}}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
                            <Image source={require('../../assets/dashboard_icon.png')}/>
                            <Text style={styles.bold_text}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {{props.navigator.navigate('Students')}}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
                            <Image source={require('../../assets/students_icon.png')}/>
                            <Text style={styles.bold_text}>Students</Text>
                        </View>
                    </TouchableOpacity><TouchableOpacity onPress={() => {{props.navigator.navigate('Home')}}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
                            <Image source={require('../../assets/documents_icon.png')}/>
                            <Text style={styles.bold_text}>Documents</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: Colors.dark_blue,
        flex: 1,
    },
    title:{
        fontSize: 80,
        textAlign: 'right',
        marginTop: 20,
        marginBottom: -60,
        marginRight: 10,
        fontFamily: "rubik",
        color:Colors.white
    },
    bold_text:{
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 0,
      marginLeft: 20,
      fontFamily: "ruda_black",
      color:Colors.white,
    },
})

export default DrawerView;