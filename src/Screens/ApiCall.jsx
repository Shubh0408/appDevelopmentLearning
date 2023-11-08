import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiCall = () => {
    const [Data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(true)
    const GetData = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all")
            setData(response.data);
            setIsLoaded(false);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        GetData();
    }, [])

    return (
        <View>
            {isLoaded ?
                (<View style={{minHeight: "100%", justifyContent:"center",alignItems:'center'}}><ActivityIndicator size="large" /></View>) :
                (<View>
                    <Text style={{ textAlign: 'center' }}>Api Call</Text>
                    <Text style={{ textAlign: 'center', paddingVertical: 10 }}>Country details</Text>
                    <FlatList
                        data={Data}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                    <Text>{index < 10 ? `0${index}` : `${index}`}</Text>
                                    <View style={{ borderBlockColor: 'black', borderWidth: '1px', padding: 5, margin: 10 }}>
                                        <Image style={{ height: 100, width: 250 }} source={{ uri: item.flags.png }} />
                                        <Text>name: {item.name.official}</Text>
                                        <Text>capital: {item.capital}</Text>
                                        <Text>Car side: {item.car.side}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>)}

        </View>
    )
}

export default ApiCall

const styles = StyleSheet.create({})