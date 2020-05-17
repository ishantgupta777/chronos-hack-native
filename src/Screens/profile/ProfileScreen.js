import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, Header, Image, ToastAndroid, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../../../values/styles'
import Colors from "../../../values/colors"

const user = {
    image: "https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png",
    name: "John Doe",
    email: "youremail@example.com",
    phone: "+91 9988988332",
    city: "Example City",
    college: "Example College",
    branch: "ECE",
    year: 2,
    role: "Front-End Developer",
    rank: "Trainee",
    skills: "HTML, CSS, Javascript"
}

import FormButton from '../../Components/FormButton';


function ProfileActivity(){
    const navigation = useNavigation()
    return(
        <ScrollView style={globalStyles.container}>
            <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Image style={{margin: 10}} source={require('../../../assets/back_arrow.png')} />
                </TouchableWithoutFeedback>
                <View style={{flex: 1}}/>
            </View>
            <Text style={globalStyles.title}>prof</Text>
            <Text style={globalStyles.title}>ile</Text>
            
            <Image style={styles.image} source={{uri: user.image, width: 240, height: 240}}/>

            {/*personal details*/}
            <View style={{marginTop: 50}}>
                <Text style={styles.header_text}>Personal</Text>
                <Text style={styles.header_text}>details</Text>
            </View>

            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Name</Text>
                <Text style={styles.bold_text}>{user.name}</Text>
            </View> 
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Email</Text>
                <Text style={styles.bold_text}>{user.email}</Text>
            </View> 
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Phone</Text>
                <Text style={styles.bold_text}>{user.phone}</Text>
            </View> 

            {/*campus details*/}
            <View style={{marginTop: 50}}>
                <Text style={styles.header_text}>Campus</Text>
                <Text style={styles.header_text}>details</Text>
            </View>

            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>City</Text>
                <Text style={styles.bold_text}>{user.city}</Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>College</Text>
                <Text style={styles.bold_text}>{user.college}</Text>
            </View> 
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Branch</Text>
                <Text style={styles.bold_text}>{user.branch}</Text>
            </View> 
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Year of Study</Text>
                <Text style={styles.bold_text}>{user.year}</Text>
            </View>
            
            {/*club info*/}
            <View style={{marginTop: 50}}>
                <Text style={styles.header_text}>Club</Text>
                <Text style={styles.header_text}>details</Text>
            </View>

            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Rank</Text>
                <Text style={styles.bold_text}>{user.rank}</Text>
            </View> 
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Role</Text>
                <Text style={styles.bold_text}>{user.role}</Text>
            </View> 
            <View style={{marginTop: 10}}>
                <Text style={styles.reg_text}>Skills</Text>
                <Text style={styles.bold_text}>{user.skills}</Text>
            </View> 

            <View style={{flex: 1, flexGrow: 1, marginBottom: 40}}>
				<FormButton onPress={()=>{}}>edit</FormButton>
				<View style={{width: "100%", flexDirection: 'row'}}>
					<View style={{flex: 1}}/>
					<Text style={styles.bold_text}>Change</Text>
                    <Text style={globalStyles.reg_text}> password</Text>
				</View>
			</View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bold_text:{
        fontSize: 18,
        textAlign: 'left',
        marginStart: 20,
        fontFamily: "ruda_black",
        color:Colors.dark_blue,
    },
    reg_text:{
        fontSize: 18,
        textAlign: 'left',
        marginStart: 20,
        fontFamily: "ruda_reg",
        color:Colors.dark_blue,
    },
    listContainer: {
        flex: 1,
        paddingBottom: 50
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 90,
        alignSelf: 'center',
        marginTop: 50
    },
    header_text: {
        flex: 1,
        fontSize: 36,
        textAlign: 'right',
        marginEnd: 20,
        fontFamily: "ruda_black",
        color:Colors.dark_blue,
    }
})
export default ProfileActivity