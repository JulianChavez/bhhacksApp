import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function GptScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params?.data
    //const route = useRoute();
    return (
        <View style={styles.container}>
            <View style={styles.gptContainer}>
                <Text> MAIN</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text>GPT SCREEN</Text>
                <Text>{data}</Text>
                <Button color='white' title='Back-To-Home' onPress={() => navigation.navigate("Home")} />
            </View>
        </View>

    );
};

export default GptScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    gptContainer: {
        flex: 3,
        padding: 40,
        alignItems: 'center',
        backgroundColor: 'red',
    },
})