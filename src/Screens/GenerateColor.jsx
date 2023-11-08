import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const GenerateColor = () => {
    const [newcolor, setNewcolor] = useState([])

    function RandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`
    }
    return (
        <View>
            <Text>GenerateColor</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                setNewcolor([...newcolor, RandomColor()])
            }}>
                <Text>Generate</Text>
            </TouchableOpacity>
            <FlatList
            keyExtractor={(key)=>key}
                data={newcolor}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text style={{ backgroundColor: item , width: 250, height: 50, alignSelf: 'center', margin: 10 }}></Text>
                        </View>
                    )
                }}
            />

        </View>
    )
}

export default GenerateColor

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        marginTop: 20,
        width: 150,
        height: 30,
        borderRadius: 7,
        alignSelf: 'center'
    }
})