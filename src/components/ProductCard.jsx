import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const ProductCard = ({ item, onPress, quantity, OnDecrement, OnIncrement, showQuantity }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.flatContainer, { borderWidth: showQuantity ? 0 : 1 }]}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Rs {item.price}</Text>
            {showQuantity && <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={OnDecrement} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={OnIncrement} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>}
        </TouchableOpacity>
    );
};

export default ProductCard;


const styles = StyleSheet.create({
    flatContainer: {
        marginBottom: 10,
        marginTop: '2%',
        padding: 10,
        borderRadius: 10,
        width:'100%',
        alignItems:'center'
    },
    name: {
        color: 'black',
        height: 30,
        fontWeight: 'bold',
        fontSize: 16,
        width:'90%'
    },
    price: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 12,
        width:'90%'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    quantity: {
        fontSize: 18,
        fontWeight: "bold",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        marginTop: '10%'
    },
    button: {
        backgroundColor: "#ddd",
        borderRadius: 50,
        marginHorizontal: 10,
        height: 30,
        width: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})