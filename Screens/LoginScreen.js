import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import HomeScreen from "./Home";


function LoginScreen() {
    const navigation = useNavigation();
    const [text, setChangeText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/logo.png')} />

            </View>
            <View style={styles.userNameContainer} >
                <TextInput
                    style={styles.userNameInput}
                    onChangeText={setChangeText}
                    value={text}
                    placeholder={"John Doe"}
                    maxLength={10}
                />
                <View style={styles.buttonContainer}>
                    <Button color='black' title='LOGIN' onPress={() => navigation.navigate("Home", { userData: text })} />
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    imgContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fcfcfc'
    },
    userNameContainer: {
        flex: 2,
        padding: 30,
        widht: 10,
        backgroundColor: '#fcfcfc'
    },
    userNameInput: {
        height: 40,
        borderWidth: 1,

    },
    img: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 10
    }


})