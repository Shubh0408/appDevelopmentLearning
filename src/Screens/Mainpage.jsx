import React from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native"

const Mainpage = () => {
    const jsonData = [
        {
            "index": "1",
            "phone": "(585) 357-4648",
            "name": "Rae Alston",
            "country": "Ireland",
            "email": "augue.id@yahoo.net"
        },
        {
            "index": "2",
            "phone": "1-771-577-7710",
            "name": "Briar Miles",
            "country": "Turkey",
            "email": "aliquet.lobortis@outlook.net"
        },
        {
            "index": "3",
            "phone": "(689) 558-6441",
            "name": "Cailin Williams",
            "country": "Nigeria",
            "email": "nec@protonmail.couk"
        },
        {
            "index": "4",
            "phone": "(421) 765-1830",
            "name": "Cecilia Petty",
            "country": "Canada",
            "email": "a.mi@yahoo.com"
        },
        {
            "index": "5",
            "phone": "(342) 585-2570",
            "name": "Pamela Jackson",
            "country": "Italy",
            "email": "enim.condimentum@yahoo.com"
        }
    ]
    return (
        <FlatList data={jsonData}
            keyExtractor={(key)=>{
                return key.index;

            }}
            horizontal={true}
            showsHorizontalScrollIndicator= {false}
        renderItem={({ item }) => {
            return (
                <View style={styles.ViewStyle}>
                    <Text>{item.name}</Text>
                    <Text style={styles.listName}>{item.email}</Text>
                    <Text>{item.country}</Text>
                </View>
            )
        }} style={styles.mainViewStyle} />
    )
}

const styles = StyleSheet.create({
    listName: {
        color: "blue"
    },
    ViewStyle: {
        padding: 9,
        backgroundColor: "red",
        margin:3,
        borderColor: "blue",
        borderRadius: 10
    },
    mainViewStyle:{
        padding: 10
    }
})

export default Mainpage