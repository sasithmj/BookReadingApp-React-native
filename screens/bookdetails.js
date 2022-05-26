import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
// import { FlatList } from 'react-native-web';
import bookdata from '../data/bookdata.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function BookDetails({ route, navigation }) {
    const data = route.params;

    const pressHandler = (id) => {
        console.log(id);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image source={require("../assets/hp.jpg")} style={styles.imgstyle} />
            </View>
            <View style={styles.detail}>
            <Text style={styles.texttitle}>{data['Book_ID'].title}</Text>
                <Text style={styles.textauthor}>{data['Book_ID'].author}</Text>
                <Text style={{
                    fontStyle: 'italic', fontSize: 12,
                    color: 'grey'
                }}>{data['Book_ID'].year_written}</Text>
                <Text style={{
                    fontStyle: 'italic', fontSize: 12,
                    color: 'grey'
                }}>Edition:{data['Book_ID'].edition}</Text>
                <Text style={styles.textprice}>${data['Book_ID'].price}</Text>
            </View>
            <View>
            <Text style={styles.textauthor}>{data['Book_ID'].desctiption}</Text>
            </View>





        </SafeAreaView>
    );
}
const sizeW = Dimensions.get('window').width / 2.5;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',

    },
    detail:{
        backgroundColor:'#F2F2F2',
        width:'100%',
        padding:24,
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 3,
        // padding: 12,
        // marginBottom: 24,
        width: '100%',
        // shadowColor:'black',
        overflow: 'hidden',
        elevation: 5

    },
    texttitle: {
        fontSize: 30,
        fontWeight: '600',



    },
    textprice: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
        backgroundColor:'red',
        borderRadius:12,
        textAlign:'center',
        padding:8,
        marginTop:24
        
    },
    textauthor: {
        fontSize: 18,
        color: 'grey'
    },
    imgstyle: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',

    }
});
