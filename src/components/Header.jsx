import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { View } from "react-native";
import theme from "../Theme/GlobalTheme";
import { IMAGES } from "../assets/Data";

const { height, width } = Dimensions.get('window');

export default function Header(props) {

    return (
        <View style={styles.main}>
            {props.onBack && <TouchableOpacity onPress={props.onBack} style={styles.left}>
                <Image source={IMAGES.left} style={styles.icon} />
            </TouchableOpacity>}
            <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">{props.heading}</Text>
            <TouchableOpacity onPress={props.onRightClick} style={styles.rightIcon}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'visible' }}>
                    {props.rightIcon}
                    {props.number ? (
                        <View style={styles.numberContainer}>
                            <Text style={styles.number}>{props.number}</Text>
                        </View>
                    ) : ''}
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.90,
        height: height * 0.08, // Adjust height based on screen size
        padding: width * 0.02, // Dynamic padding
        justifyContent: 'space-between',
    },
    left: {
        width: width * 0.1, // Adjust width dynamically
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: height * 0.02, // Adjust icon size dynamically
        width: height * 0.02,
    },
    right: {
        width: width * 0.1,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        flexDirection: 'row',
        marginLeft: width * 0.05, // Dynamic margin
        alignItems: 'center',
        width: width * 0.7, // Adjust width dynamically
        fontSize: width * 0.045, // Dynamic font size
        fontWeight: '600',
        color: theme.colors.black,
    },
    numberContainer: {
        height: height * 0.025,
        width: height * 0.025,
        backgroundColor: theme.colors.red,
        borderRadius: height * 0.0125,
        position: 'absolute',
        top: 2,
        right: -5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    number: {
        fontSize: width * 0.025, // Slightly increased font size
        color: theme.colors.white,
        fontWeight: 'bold',
        textAlign: 'center', // Ensures text alignment
    },
    rightIcon: {
        height: height * 0.06, // Adjust size dynamically
        width: height * 0.06,
    },
});