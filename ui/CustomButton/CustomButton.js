import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const CustomButton = ({ title, onPress, stylesButton }) => {
    return (
        <TouchableOpacity style={{...styles.button, ...stylesButton}} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#925BFE",
        borderRadius: 25,
        paddingTop: 12,
        paddingBottom: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal"
    }
});

export default CustomButton;