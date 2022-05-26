import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Dimensions, Image, TouchableOpacity, Button } from 'react-native';
// import { FlatList } from 'react-native-web';
import bookdata from '../data/bookdata.json';
import BookDetails from './bookdetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({ navigation }) {

    const pressHandler = (id) => {
        navigation.navigate('BookDetails',{Book_ID:id})
        // navigation.navigate('Search')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchhead}>
                <Text style={{ color: 'white', fontSize: 20 }}>Available Books</Text>
                <View style={{display:'flex',flexDirection:'row'}}>
                <Button
                    onPress={()=>{navigation.navigate('Search')}}
                    title="Search"
                    color="#A91079"
                    accessibilityLabel="Learn more about this purple button"
                />
                 <Button
                    onPress={()=>{navigation.navigate('Filter')}}
                    title="Filter"
                    color="#A91079"
                    accessibilityLabel="Learn more about this purple button"
                />

                </View>
               
            </View>
            <FlatList
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                data={bookdata}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { pressHandler(item) }}>
                        <View key={item.key} style={styles.card}>

                            <Image source={require("../assets/hp.jpg")} style={styles.imgstyle} />
                            <Text style={styles.texttitle}>{item.title}</Text>
                            <Text style={styles.textauthor}>{item.author}</Text>
                            <Text style={{
                                fontStyle: 'italic', fontSize: 12,
                                color: 'grey'
                            }}>{item.year_written}</Text>

                            <Text style={styles.textprice}>${item.price}</Text>

                        </View>
                    </TouchableOpacity>
                )
                }




            />
            {/* <Button onPress={()=>{
                navigation.navigate('search')

            }}>click</Button> */}
            {/* {bookdata.map(items => (
                <View key={items.key}>
                    <Text style={styles.card}>{items.title}</Text>
                </View>

            ))} */}
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
