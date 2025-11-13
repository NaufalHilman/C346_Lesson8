import React, { useState } from 'react';
import { View, Text, Image, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');

    const correctAnswers = {
        q1: 'RapperA',
        q2: 'RapperB',
        q3: 'RapperC',
        q4: 'RapperD',
        q5: 'RapperE',
    };

    const handleSubmit = () => {
        let score = 0;
        if (q1 === correctAnswers.q1) score++;
        if (q2 === correctAnswers.q2) score++;
        if (q3 === correctAnswers.q3) score++;
        if (q4 === correctAnswers.q4) score++;
        if (q5 === correctAnswers.q5) score++;

        let message = '';
        if (score === 5) {
            message = "Perfect score! You have impeccable taste.";
        } else if (score >= 3) {
            message = "You're almost there, keep it up!";
        } else if (score >= 1) {
            message = "You can do better next time! Keep listening!";
        } else {
            message = "You need to start listening to some real music...";
        }

        Alert.alert(`You got ${score} correct answer${score !== 1 ? 's' : ''}.`, message);
    };


    return (
        <ScrollView style={styles.container}>
            {/* Banner line */}
            <View style={styles.banner}></View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Guess The Rapper From The Album</Text>
            </View>

            {/* Question 1 */}
            <View style={styles.questionCard}>
                <Image source={require('./assets/astroworld.jpg')} style={styles.image} />
                <Text style={styles.questionText}>Album name: Astroworld</Text>
                <Picker selectedValue={q1} onValueChange={(value) => setQ1(value)} style={styles.picker} dropdownIconColor="white">
                    <Picker.Item label="Choose the correct rapper" value="" />
                    <Picker.Item label="Kendrick Lamar" value="RapperC" />
                    <Picker.Item label="Future" value="RapperB" />
                    <Picker.Item label="Travis Scott" value="RapperA" />
                </Picker>
            </View>

            {/* Question 2 */}
            <View style={styles.questionCard}>
                <Image source={require('./assets/taboo.jpg')} style={styles.image} />
                <Text style={styles.questionText}>Album name: TA13OO</Text>
                <Picker selectedValue={q2} onValueChange={(value) => setQ2(value)} style={styles.picker} dropdownIconColor="white">
                    <Picker.Item label="Choose the correct rapper" value="" />
                    <Picker.Item label="Denzel Curry" value="RapperB" />
                    <Picker.Item label="Kanye West" value="RapperA" />
                    <Picker.Item label="Don Toliver" value="RapperC" />
                </Picker>
            </View>

            {/* Question 3 */}
            <View style={styles.questionCard}>
                <Image source={require('./assets/offseason.jpg')} style={styles.image} />
                <Text style={styles.questionText}>Album name: The Off-Season</Text>
                <Picker selectedValue={q3} onValueChange={(value) => setQ3(value)} style={styles.picker} dropdownIconColor="white">
                    <Picker.Item label="Choose the correct rapper" value="" />
                    <Picker.Item label="Sheck Wes" value="RapperA" />
                    <Picker.Item label="J. Cole" value="RapperC" />
                    <Picker.Item label="21 Savage" value="RapperB" />
                </Picker>
            </View>

            {/* Question 4 */}
            <View style={styles.questionCard}>
                <Image source={require('./assets/foreverstory.jpg')} style={styles.image} />
                <Text style={styles.questionText}>Album name: The Forever Story</Text>
                <Picker selectedValue={q4} onValueChange={(value) => setQ4(value)} style={styles.picker} dropdownIconColor="white">
                    <Picker.Item label="Choose the correct rapper" value="" />
                    <Picker.Item label="JID" value="RapperD" />
                    <Picker.Item label="Young Thug" value="RapperE" />
                    <Picker.Item label="Offset" value="RapperF" />
                </Picker>
            </View>

            {/* Question 5 */}
            <View style={styles.questionCard}>
                <Image source={require('./assets/gbgr.jpg')} style={styles.image} />
                <Text style={styles.questionText}>Album name: Goodbye & Good Riddance</Text>
                <Picker selectedValue={q5} onValueChange={(value) => setQ5(value)} style={styles.picker} dropdownIconColor="white">
                    <Picker.Item label="Choose the correct rapper" value="" />
                    <Picker.Item label="Polo G" value="RapperG" />
                    <Picker.Item label="Juice WRLD" value="RapperE" />
                    <Picker.Item label="Kodak Black" value="RapperI" />
                </Picker>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitBtnText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
            <View style={styles.footer}></View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111",
        padding: 15,
    },

    banner: {
        width: "100%",
        height: 28,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 10,
    },

    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "white",
        letterSpacing: 1,
    },

    questionCard: {
        backgroundColor: "#1A1A1A",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#333",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 3,
    },

    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },

    questionText: {
        color: "white",
        textAlign: "center",
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "600",
    },

    picker: {
        backgroundColor: "#222",
        color: "white",
        borderRadius: 8,
        marginBottom: 10,
        height: 50,
    },

    submitBtn: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 12,
    },

    submitBtnText: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },

    footer: {
        width: "100%",
        height: 20,
        backgroundColor: "white",
        borderRadius: 8,
        marginTop: 20,
    },

    headerContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "#1A1A1A",
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "white",
    },

});

export default App;
