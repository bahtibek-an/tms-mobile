import React from 'react';
import {StyleSheet, Image, SafeAreaView, Button, Alert, Text, View, Pressable} from "react-native";
import CustomButton from "../../ui/CustomButton/CustomButton";

const GetStarted = ({ navigation }) => {

    const handleClick = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={styles.header}>Pick & Drop</Text>
            <Text style={styles.text}>Delivery made easy</Text>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title={"Get Started"}
                    onPress={handleClick}
                    stylesButton={{
                        width: "100%",
                        alignSelf: "center",
                        marginTop: "auto"
                    }}
                />
                <View style={{ marginTop: 72, paddingBottom: 8 }}>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Pressable>
                            <Text style={{color: "#925BFE", fontSize: 12}}>Terms of Service</Text>
                        </Pressable>
                        <Text style={{fontSize: 12}}> and </Text>
                        <Pressable>
                            <Text style={{color: "#925BFE", fontSize: 12}}>Privacy Policy</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 22,
        flex: 1,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "center",
        marginTop: 100
    },
    text: {
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        marginTop: 22,
        textAlign: "center"
    },
    button: {},
});


export default GetStarted;