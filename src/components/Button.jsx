import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ onPress, title, style, textStyle }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        width: '90%',
        marginTop:'5%'
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});