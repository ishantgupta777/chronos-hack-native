/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './src/Screens/SignUp/SignUp';
import Login from './src/Screens/Login/Login';
import MakeProfile1 from './src/Screens/profile/MakeProfile1';
import MakeProfile2 from './src/Screens/profile/MakeProfile2';
import CheckMail from './src/Screens/profile/CheckMail';
import ForgotPassword from './src/Screens/password/ForgotPassword';
import NewPassword from './src/Screens/password/NewPassword';
import PasswordChanged from './src/Screens/password/PasswordChanged';


const SignUpScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <SignUp/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Login/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const MakeProfile1Screen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <MakeProfile1/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const MakeProfile2Screen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <MakeProfile2/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const CheckMailScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <CheckMail/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ForgotPassword/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const NewPasswordScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <NewPassword/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const PasswordChangedScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <PasswordChanged/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ECEDFF',
    flex: 1,
  },
});


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MakeProfile1" component={MakeProfile1Screen} />
        <Stack.Screen name="MakeProfile2" component={MakeProfile2Screen} />
        <Stack.Screen name="CheckMail" component={CheckMailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
