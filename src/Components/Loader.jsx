import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <View style={styles.mainpage}>
            <View>
                <View style={styles.LogoDiv}><Image style={styles.Loader} source={require("../../assets/GEMlogo.png")} /></View>
                <Text style={styles.GEM} >Gem</Text>
                <Text style={styles.EXPERIENCE} >Experience</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainpage: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoDiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Loader: {
        width: 100,
        height: 100,   
    },
    GEM:{
        fontSize: 30,
        textAlign:'center'
    },
    EXPERIENCE:{
        fontSize: 30,
        textAlign:'center'
    }
})

export default Loader
