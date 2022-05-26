import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput,Dimensions,TouchableOpacity,Image,Button } from 'react-native';
import { SearchBar } from 'react-native-screens';

import bookdata from "../data/bookdata.json";

const Filter = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [category, setCategory] = useState("");

    const chdata=(cat)=>{

        setCategory(cat);
        searchFilterFunction(cat);

    }

    useEffect(() => {

        setFilteredDataSource(bookdata);
        setMasterDataSource(bookdata);


    }, []);
    const pressHandler = (id) => {
        navigation.navigate('BookDetails',{Book_ID:id})
        // navigation.navigate('Search')
    }

    const searchFilterFunction = (text) => {

        console.log(text);
        if (text) {

            const newData = masterDataSource.filter(function (item) {
                const itemData = item.category
                    ? item.category.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            console.log(filteredDataSource);
            setSearch(text);
        } else {

            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (

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

            //   <Text style={styles.itemStyle} onPress={() => getItem(item)}>
            //     {item.id}
            //     {'.'}
            //     {item.title.toUpperCase()}
            //   </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (

            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        navigation.navigate('BookDetails', { Book_ID: item })

    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* <TextInput

                    style={{ padding: 12, borderRadius: 30, borderWidth: 1, borderColor: 'grey', margin: 12 }}
                    onChangeText={(text) => searchFilterFunction(text)}

                    placeholder="Type Here..."
                    value={search}
                /> */}
                <View style={styles.btngroup}>
                    <Button title="Action and Adventure" color="#A91079" onPress={()=>{chdata("Action and Adventure")}} style={styles.btn}/>
                    <Button title="Classics"  color="#A91079" onPress={()=>{chdata("Classics")}} style={styles.btn}/>
                    <Button title="Horror"  color="#A91079" onPress={()=>{chdata("Horror")}} style={styles.btn}/>
                    <Button title="Detective and Mystery" color="#A91079" onPress={()=>{chdata("Detective and Mystery")}} style={styles.btn}/>
                    <Button title="Fantasy" color="#A91079" onPress={()=>{chdata("Fantasy")}} style={styles.btn}/>
                </View>

                <Text style={{fontSize:25,textAlign:'center',fontWeight:'800'}}>{category} Books</Text>
                <View style={{display:'flex',width:'100%',alignItems:'center'}}>
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
                </View>
            </View>
        </SafeAreaView>
    );
};
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
    btn:{
        margin:5
    },
    btngroup:{
        display:'flex',
        flexDirection:'row',
        marginTop:12,
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:24
        
    },
    itemStyle: {
        padding: 20,
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

export default Filter;
