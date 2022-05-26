import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/home';
import BookDetails from './screens/bookdetails';
import Search from './screens/searchbooks';
import Filter from './screens/filter';
import LoginScreen from './screens/login';
import Register from './screens/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#A91079' },
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen' }} />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'All Books',

          }}
        />
        <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: 'Details' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Search' }} />
        <Stack.Screen name="Filter" component={Filter} options={{ title: 'Filter' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />



      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <Text style={styles.titletext}>BookApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    display: 'flex',
    backgroundColor: '#15133C',
    height: 50,
    width: '100%',
    marginBottom: 24,
    justifyContent: 'center',
    paddingLeft: 12
  },
  titletext: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600'
  }
});
registerRootComponent(App);