import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

const SwipeableCard = ({ name, location, insurance_providers, phone_number, imgSrc, special, userData }) => {
    const [text, setText] = useState('');
    useEffect(() => {
        userData.forEach((item, i) => {
            if (userData[i] == 1 && special[i] == 1) {
                setText("RECOMMEND!")
            }
        })
        console.log(text)
    }, []);
    return (
        <View style={styles.card}>
            <Text style={styles.recommendStyle}>{text}</Text>
            <Image style={styles.img} source={imgSrc} />
            <Text style={styles.name}>{name}</Text>

            <View style={styles.locationContainter}>
                <View style={styles.locationText}>
                    <Text>Location: </Text>
                </View>
                <View style={styles.locationUserText}>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
            <View style={styles.insuranceContainer}>
                <View style={styles.insuranceText}>
                    <Text>Insureance: </Text>
                </View>
                <View style={styles.insuranceUserContainer}>
                    <Text style={styles.insurance}>{insurance_providers}</Text>
                </View>
            </View>
            <Text style={styles.phone_number}>{phone_number}</Text>

        </View>
    )
}

export default SwipeableCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 500,
        padding: 20,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    recommendStyle: {
        fontSize: 30,
        backgroundColor: 'yellow'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    locationContainter: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        padding: 2,
    },
    locationText: {
        flex: .2,
        fontSize: 30,
    },
    locationUserText: {
        flex: .9
    },
    location: {
        fontSize: 15,
    },
    insurance: {
        fontSize: 15
    },
    insuranceContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        padding: 2,
        borderRadius: 10,
    },
    insuranceText: {
        flex: .2,
        fontSize: 30,
    },
    insuranceUserContainer: {
        flex: .8
    },
    phone_number: {
        fontSize: 18
    },
    img: {
        height: 60,
        width: 60
    }
});