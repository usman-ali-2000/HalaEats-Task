import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style";
import Header from "../../components/Header";
import CartItem from "../../components/CartItem";

export default function Cart({ navigation }) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    const renderItem = ({ item }) => (
        <CartItem item={item} onRemove={() => handleRemoveFromCart(item.id)} />
    );

    return (
        <View style={styles.container}>
            <Header heading="Your Cart" onBack={() => navigation.goBack()} />
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}