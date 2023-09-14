import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Login from './App/Login';
import Landing from './App/Landing';
import {NavigationContainer} from '@react-navigation/native';
import CreateInvoice from "./App/CreateInvoice"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UploadInvoice from './App/UploadInvoice';
import Profile from "./App/Profile"
import List from "./App/List"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Starter from './App/Starter';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <GestureHandlerRootView style={{flex:1}}>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
        <Stack.Screen
          name="Starter"
          component={Starter}
          options={{headerShown:false}}
         />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
         />
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        <Stack.Screen name="CreateInvoice" component={CreateInvoice} options={{headerShown:false}} />
        <Stack.Screen name="upload" component={UploadInvoice}  options={{headerShown:false}} />
        <Stack.Screen name="list" component={List} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        </Stack.Navigator>
      
      </SafeAreaView>
      </GestureHandlerRootView>
      </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
