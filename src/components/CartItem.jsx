import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "./Button";
import theme from "../Theme/GlobalTheme";

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemPrice}>Price: Rs {item.price * item.quantity}</Text>
      <Button title={'Remove'} onPress={onRemove} style={{backgroundColor:theme.colors.red, width:'100%', height:50}}/>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
    cartItem: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        marginBottom: 15,
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    itemQuantity: {
        fontSize: 16,
        marginVertical: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: "green",
    },
    removeButton: {
        marginTop: 10,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: "#fff",
        textAlign: "center",
    },
})