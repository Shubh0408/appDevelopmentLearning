import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const ContactUs = () => {
    const [agree, setAgree] = useState(false);
    return (
        <View style={styles.Mainpage}>
            <Text style={styles.MainHeading}>Login Form</Text>
            <Text style={styles.Description}>Your welcome on my application</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your name
                </Text>
                <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your Password
                </Text>
                <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} />
            </View>
            <View style={styles.wrapper}>
                <Checkbox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#4630EB" : undefined}
                />
                <Text style={styles.text}>
                    I have read and agreed with the T&C
                </Text>
            </View>
            <TouchableOpacity disabled={!agree} style={[styles.buttonStyle ,{ backgroundColor: agree ? "#4630EB": "grey"}]}>
                <Text style={styles.ButtonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({
    Mainpage: {
        height: '100%',
        paddingTop: 30,
        paddingHorizontal: 30
    },
    MainHeading: {
        fontSize: 30,
        color: "#7d7d7d",
        paddingVertical: 10
    },
    Description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 18,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        paddingVertical: 15,
    },
    text: {
        lineHeight: 30,
        marginLeft: 10,
    },
    buttonStyle:{
        paddingVertical:10,
        borderRadius: 5
    },
    ButtonText:{
        textAlign: "center",
        color: "white"
    }
})