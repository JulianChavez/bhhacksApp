import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, FlatList } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

//import axios from 'axios';
import SwipeableCard from '../components/SwipeableCard';

function GptScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params?.data;
    const [trueSymp, setTrueSymp] = useState([]);
    const sym = ['Pregnant', 'Planning for baby', 'Cold Sweats', 'Vaginal Bleeding', 'Cramps', 'A Fever', 'Heaches', 'Sudden Mood Swings'];
    const peopleData = [
        { id: '1', name: "Jill Krapf", location: "3 Washington Circle Northwest, Suite 205, Washington, DC 20037", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(202) 331-9293", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/im1.png"), spcl: [1, 0, 0, 1, 0, 0, 0, 0] },
        { id: '2', name: "Celeste Jilich", location: "2150 Pennsylvania Avenue Northwest, Washington, DC 20037", insurance_providers: ["UnitedHealthcare ", "Medicare ", "Humana"], phone_number: "(202) 741-2500", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img2.png"), spcl: [0, 1, 0, 0, 1, 0, 0, 0] },
        { id: '3', name: "Arielle Effron", location: "2150 Pennsylvania Avenue Northwest, Washington, DC 20037", insurance_providers: ["Kaiser Permanente ", "Medicaid ", "Anthem"], phone_number: "(202) 741-2500", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img3.png"), spcl: [0, 0, 1, 0, 0, 0, 0, 0] },
        { id: '4', name: "George Samman", location: "2021 K Street Northwest, Suite 204, Washington, DC 20006", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(202) 555-1234", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img4.png"), spcl: [0, 1, 0, 1, 0, 0, 0, 0] },
        { id: '5', name: "Brandi Jones", location: "2041 Georgia Avenue NW Suite 1700 Washington, DC 20060", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(202) 865-7877", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img5.png"), spcl: [0, 0, 0, 0, 1, 0, 0, 0] },
        { id: '6', name: "Kristin Atkins", location: "2041 Georgia Avenue NW Suite 1700 Washington, DC 20060", insurance_providers: ["Blue Cross Blue Shield ", "Kaiser Permanente ", "Medicaid"], phone_number: "(202) 865-2120", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img6.png"), spcl: [0, 0, 1, 0, 1, 0, 0, 1] },
        { id: '7', name: "Lauren Branche-James", location: "9715 Medical Center Dr, Suite 315 Rockville, MD 20850", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(301) 768-4535", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img7.png"), spcl: [1, 0, 0, 0, 0, 0, 1, 0] },
        { id: '8', name: "Kathyrn Marko", location: "2150 Pennsylvania Avenue Northwest, Washington, DC 20037", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(202) 741-2500", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img8.png"), spcl: [0, 1, 0, 0, 0, 0, 1, 0] },
        { id: '9', name: "Joseph Bahng", location: "2150 Pennsylvania Avenue Northwest, Washington, DC 20037", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(202) 741-2500", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img9.png"), spcl: [0, 0, 0, 0, 1, 1, 0, 1] },
        { id: '10', name: "Ariana Munger", location: "2150 Pennsylvania Avenue Northwest, Washington, DC 20037", insurance_providers: ["Blue Cross Blue Shield ", "Aetna ", "Cigna"], phone_number: "(202) 741-2500", imgSrc: require("C:/Users/julia/Desktop/PROJECTS_JULIAN/bHack/bhackApp/assets/img10.png"), spcl: [1, 0, 1, 0, 0, 0, 0, 0] },
    ]

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     axios.get('http://127.0.0.1:8000/data')
    //         .then(function (response) {
    //             // handle success
    //             console.log("H");
    //             setData(response.data.message);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         });
    // }, []);
    //const route = useRoute();
    useEffect(() => {
        data.forEach((item, i) => {
            if (item == '1') {
                console.log()
                setTrueSymp(currectSymp => [...currectSymp, sym[i]])
            }
        })
        console.log(trueSymp)
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.gptContainer}>
                <Text>{data}</Text>
                <Text style={styles.chatGPTText}> I am not a healthcare professional, but based on the symptoms you have provided, it is important to consolt with a healthcare provider as soon as possible. Some of the symptoms you mentioned, such as less frequent urination, sudden weight gain and dark urine, could potentially be indicative of serious health issues during pregnancy. It is important to address these symptoms promptly, to ensure the health and well being of both you and your baby. I recommend seeking advice from a healthcare provider who can provide you with professional expertise and guidance tailored to your specific situation.</Text>
                {/* <FlatList
                    data={trueSymp}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={item => item.id}
                /> */}
            </View>
            <View style={styles.buttonContainer}>

                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={peopleData}
                        renderItem={({ item }) => <SwipeableCard name={item.name} location={item.location} insurance_providers={item.insurance_providers} phone_number={item.phone_number} imgSrc={item.imgSrc} special={item.spcl} userData={data} />}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>


                <View style={styles.backButtonContainer}>
                </View>
            </View>
            <View style={styles.returnHome}>
                <Button color='white' title='Back-To-Home' onPress={() => navigation.navigate("Home")} />
            </View>
        </View>

    );
};

export default GptScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9E9E9E"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    gptContainer: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
        backgroundColor: '#9E9E9E',
    },
    backButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    returnHome: {
        padding: 20
    },
    chatGPTText: {
        backgroundColor: '#737373',
        color: 'white',
        fontSize: 15,
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowRadius: 40,
    }
})