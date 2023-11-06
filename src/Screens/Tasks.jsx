import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tasks = () => {
    const name = "Shubham ";
    return (
        <View>
            <Text style={styles.tasksTextStyle}>
                Welcome to App
            </Text>
            <Text style={styles.tasksTextTwoStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksTextStyle: {
        color: "red",
        fontSize: 20,
        marginLeft: "25%",
    },
    tasksTextTwoStyle:{
        marginLeft: "25%",
    }
})
export default Tasks