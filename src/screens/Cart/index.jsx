import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";
import Header from "../../components/Header";

export default function Cart({navigation}) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.itemPrice}>Price: Rs {item.price * item.quantity}</Text>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header heading="Your Cart" onBack={()=>navigation.goBack()}/>
            {/* <Text style={styles.heading}>Your Cart</Text> */}
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}