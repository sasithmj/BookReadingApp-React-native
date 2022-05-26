import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Image, TouchableOpacity, Button, TextInput } from 'react-native';
// import { FlatList } from 'react-native-web';
import bookdata from '../data/bookdata.json';
import BookDetails from './bookdetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [psw, setPsw] = useState('');
    const pressHandler = () => {
        navigation.navigate('LogingScreen')
        // navigation.navigate('Search')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo2.jpg")} style={styles.imgstyle} />

            <TextInput

                style={{ padding: 12, borderRadius: 30, borderWidth: 1, borderColor: 'grey', margin: 12, width: '80%' }}
                onChangeText={(text) => { setUsername(text) }}

                placeholder="Email/Username"
                value={username}
            />
            <TextInput

                style={{ padding: 12, borderRadius: 30, borderWidth: 1, borderColor: 'grey', margin: 12, width: '80%' }}
                onChangeText={(text) => {setPsw(text) }}

                placeholder="Password"
                value={psw}
            />
            <View style={[{ width: "80%", margin: 10, backgroundColor: "#A91079"}]}>
                <Button
                    onPress={()=>{navigation.navigate('Home')}}
                    title="Register Now"
                    color="#A91079"
                />
            </View>
            <Text>Already have a account!</Text>
            <Button
                    onPress={()=>{navigation.navigate('LoginScreen')}}
                    title="LogIn"
                    color="#A91079"
                />
        </SafeAreaView>
    );
}
const sizeW = Dimensions.get('window').width / 2.5;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    searchhead: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#A91079'
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 12,
        margin: 12,
        width: sizeW,
        // shadowColor:'black',
        overflow: 'hidden',
        elevation: 5

    },
    texttitle: {
        fontSize: 15,
        fontWeight: '600',



    },
    textprice: {
        fontSize: 18,
        fontWeight: '600',
        color: 'red'
    },
    textauthor: {
        fontSize: 12,
        color: 'grey'
    },
    imgstyle: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',

    }
});
