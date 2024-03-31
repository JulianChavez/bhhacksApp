import { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import GPTScreen from './GptScreen.js';

function Home() {
    const navigation = useNavigation();
    const route = useRoute();
    const userData = route.params?.userData

    const [openSelection, setOpenSelection] = useState(false);
    const [valueSelection, setValueSelection] = useState(null);
    const [itemSelection, setItemSelection] = useState([
        { label: 'Pregnent', value: '1' },
        { label: 'Not Pregrent', value: '0' }
    ])

    const [openSelectionTwo, setOpenSelectionTwo] = useState(false);
    const [valueSelectionTwo, setValueSelectionTwo] = useState(null);
    const [itemSelectionTwo, setItemSelectionTwo] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])
    const [openSelectionThree, setOpenSelectionThree] = useState(false);
    const [valueSelectionThree, setValueSelectionThree] = useState(null);
    const [itemSelectionThree, setItemSelectionThree] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])
    const [openSelectionFour, setOpenSelectionFour] = useState(false);
    const [valueSelectionFour, setValueSelectionFour] = useState(null);
    const [itemSelectionFour, setItemSelectionFour] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])
    const [openSelectionFive, setOpenSelectionFive] = useState(false);
    const [valueSelectionFive, setValueSelectionFive] = useState(null);
    const [itemSelectionFive, setItemSelectionFive] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])
    const [openSelectionSix, setOpenSelectionSix] = useState(false);
    const [valueSelectionSix, setValueSelectionSix] = useState(null);
    const [itemSelectionSix, setItemSelectionSix] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])
    const [openSelectionSeven, setOpenSelectionSeven] = useState(false);
    const [valueSelectionSeven, setValueSelectionSeven] = useState(null);
    const [itemSelectionSeven, setItemSelectionSeven] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])
    const [openSelectionEight, setOpenSelectionEight] = useState(false);
    const [valueSelectionEight, setValueSelectionEight] = useState(null);
    const [itemSelectionEight, setItemSelectionEight] = useState([
        { label: "Yes", value: '1' },
        { label: "No", value: "0" }
    ])



    const [dropDownValue, setDropDownValue] = useState([]);





    function addValues() {
        setDropDownValue([valueSelection, valueSelectionTwo, valueSelectionThree, valueSelectionFour, valueSelectionFive, valueSelectionSix, valueSelectionSeven, valueSelectionEight])
        // console.log(dropDownValue.forEach((item, i) => {
        //     console.log(item)
        //     console.log(i)
        // }))
        console.log(dropDownValue)
    }
    function submit() {
        navigation.navigate({
            name: 'GptScreen',
            params: { updateList: dropDownValue },
            merge: true,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>WELCOME, {userData}!</Text>
            </View>
            <View style={styles.checkListContainer}>
                <SafeAreaView>
                    <View style={styles.selectionOne}>
                        <Text>Are You Pregnant?</Text>
                        <DropDownPicker
                            open={openSelection}
                            value={valueSelection}
                            items={itemSelection}
                            setOpen={setOpenSelection}
                            setValue={setValueSelection}
                            setItems={setItemSelection}
                        />
                    </View>


                    <View style={styles.selectionTwo}>
                        <Text> Are you planning for a baby? </Text>
                        <DropDownPicker
                            open={openSelectionTwo}
                            value={valueSelectionTwo}
                            items={itemSelectionTwo}
                            setOpen={setOpenSelectionTwo}
                            setValue={setValueSelectionTwo}
                            setItems={setItemSelectionTwo}
                        />
                    </View>

                    <View style={styles.selectionThree}>
                        <Text>Are You Experiencing Cold Sweats?</Text>
                        <DropDownPicker
                            open={openSelectionThree}
                            value={valueSelectionThree}
                            items={itemSelectionThree}
                            setOpen={setOpenSelectionThree}
                            setValue={setValueSelectionThree}
                            setItems={setItemSelectionThree}
                        />
                    </View>

                    <View style={styles.selectionFour}>
                        <Text> Are You Experiencing Vaginal Bleeding?</Text>
                        <DropDownPicker
                            open={openSelectionFour}
                            value={valueSelectionFour}
                            items={itemSelectionFour}
                            setOpen={setOpenSelectionFour}
                            setValue={setValueSelectionFour}
                            setItems={setItemSelectionFour}
                        />
                    </View>

                    <View style={styles.selectionFive}>
                        <Text> Are You Experiencing Cramps?</Text>
                        <DropDownPicker
                            open={openSelectionFive}
                            value={valueSelectionFive}
                            items={itemSelectionFive}
                            setOpen={setOpenSelectionFive}
                            setValue={setValueSelectionFive}
                            setItems={setItemSelectionFive}
                        />
                    </View>

                    <View style={styles.selectionSix}>
                        <Text>Are You Experiencing A Fever? </Text>
                        <DropDownPicker
                            open={openSelectionSix}
                            value={valueSelectionSix}
                            items={itemSelectionSix}
                            setOpen={setOpenSelectionSix}
                            setValue={setValueSelectionSix}
                            setItems={setItemSelectionSix}
                        />
                    </View>

                    <View style={styles.selectionSeven}>
                        <Text>Are You Experiencing Heaches?</Text>
                        <DropDownPicker
                            open={openSelectionSeven}
                            value={valueSelectionSeven}
                            items={itemSelectionSeven}
                            setOpen={setOpenSelectionSeven}
                            setValue={setValueSelectionSeven}
                            setItems={setItemSelectionSeven}
                        />
                    </View>

                    <View style={styles.selectionEight}>
                        <Text>Are You Experiencing Sudden Mood Swings?</Text>
                        <DropDownPicker
                            open={openSelectionEight}
                            value={valueSelectionEight}
                            items={itemSelectionEight}
                            setOpen={setOpenSelectionEight}
                            setValue={setValueSelectionEight}
                            setItems={setItemSelectionEight}
                        />
                    </View>




                    <View style={styles.nextPageButtonContainer}>
                        <Button color='white' title='Check Items' onPress={addValues} />
                        <Button color='white' title='ENTER' onPress={() => navigation.navigate("GptScreen", { data: dropDownValue })} />
                    </View>


                </SafeAreaView>
            </View>



        </View>

    );
};
export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9E9E9E',
        alignItems: 'center',
        justifyContent: 'start',
    },
    headerContainer: {
        flex: .1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 2,
        backgroundColor: '#9E9E9E',

    },
    headerText: {
        fontSize: 20,
        padding: 100,
    },
    checkListContainer: {
        flex: .9,
        width: '100%',
        backgroundColor: '#9E9E9E',
        paddingVertical: 10,
        opacity: 0.5
    },
    selectionOne: {
        zIndex: 10,
    },
    selectionTwo: {
        zIndex: 9,
    },
    selectionThree: {
        zIndex: 8
    },
    selectionFour: {
        zIndex: 7,
    },
    selectionFive: {
        zIndex: 6,
    },
    selectionSix: {
        zIndex: 5,
    },
    selectionSeven: {
        zIndex: 4
    },
    selectionEight: {
        zIndex: 3,
    },
    selectionNine: {
        zIndex: 2
    },
    selectionTen: {
        zIndex: 1,
    },
    nextPageButtonContainer: {
        height: 40,
        backgroundColor: '#b5651d',
        alignItems: 'center'
    },


});




