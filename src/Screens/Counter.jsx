import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    function Add() {
        setValue(value + 10)
    }
    function Subtract() {
        if (value != 0) {
            setValue(value - 10)
        }else {
            alert ("Already reseted")
        }
    }
    function Reset() {
        setValue(0);
    }
    return (
        <View style={styles.parentdiv}>
            <Text style={styles.Title}>Counter</Text>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity style={[styles.commonStyle, styles.Add]} onPress={Add}>
                <Text style={styles.textStyle}>+10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.commonStyle, styles.RESET]} onPress={Reset}>
                <Text style={styles.textStyle}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.commonStyle, styles.SUBTRACT]} onPress={Subtract}>
                <Text style={styles.textStyle}>-10</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    parentdiv: {
        justifyContent: "center",
        alignItems: "center"
    },
    Title: {
        fontSize: 25
    },
    value: {
        fontSize: 50
    },
    commonStyle: {
        backgroundColor: 'black',
        width: 100, height: 50,
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        color: 'white',

    },
    ADD: {

    },
    RESET: {

    },
    SUBTRACT: {

    }
})

export default Counter
