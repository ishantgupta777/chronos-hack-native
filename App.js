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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import SignUp from './src/Screens/SignUp/SignUp';
import Login from './src/Screens/Login/Login';
import MakeProfile1 from './src/Screens/profile/MakeProfile1';
import MakeProfile2 from './src/Screens/profile/MakeProfile2';
import CheckMail from './src/Screens/profile/CheckMail';
import ForgotPassword from './src/Screens/password/ForgotPassword';
import NewPassword from './src/Screens/password/NewPassword';
import PasswordChanged from './src/Screens/password/PasswordChanged';
import DashboardActivity from './src/Screens/Dashboard/DashboardScreen'
import StudentActivity from './src/Screens/Students/StudentsScreen';
import ProfileActivity from './src/Screens/profile/ProfileScreen';

import DrawerView from './src/Components/DrawerView'
import Colors from './values/colors';

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

const DashboardScreen = ({navigation}) => {
  navigator = useNavigation()
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <DashboardActivity/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const StudentScreen = ({navigation}) => {
  navigator = useNavigation()
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <StudentActivity/>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
const ProfileScreen = ({navigation}) => {
  navigator = useNavigation()
  return (
    <ScrollView style={styles.scrollView}>
      <View >
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ProfileActivity/>
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
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const StudentStack = createStackNavigator();

const createSignUpStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MakeProfile1" component={MakeProfile1Screen} />
      <Stack.Screen name="MakeProfile2" component={MakeProfile2Screen} />
      <Stack.Screen name="CheckMail" component={CheckMailScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
)

const createDashboardStack = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Dashboard" component={DashboardScreen} />
    <HomeStack.Screen name="Profile" component={ProfileScreen} />
  </HomeStack.Navigator>
)

const createStudentsStack = () => (
  <StudentStack.Navigator initialRouteName="Students" screenOptions={{headerShown: false}}>
    <StudentStack.Screen name="Students" component={StudentScreen} />
    <StudentStack.Screen name="Profile" component={ProfileScreen} />
  </StudentStack.Navigator>
)

function App() {
  return (  
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <DrawerView navigator={navigator}/>}>
        <Drawer.Screen name="Home" component={createDashboardStack}/>
        <Drawer.Screen name="Students" component={createStudentsStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
