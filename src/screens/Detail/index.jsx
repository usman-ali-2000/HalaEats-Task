import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ToastAndroid } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import { data1 } from "../../assets/Data";
import { useDispatch } from "react-redux";

export default function Detail({ navigation, route }) {
    const id = route.params.id;
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const selectedItem = data1.find(item => item.id === id);
        setItem(selectedItem);
    }, []);

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id: item.id, name: item.name, price: item.price, quantity },
        });
        console.log(`Added ${quantity} ${item.name}(s) to the cart.`);
        ToastAndroid.show('Item Added...', ToastAndroid.SHORT);
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <View style={styles.container}>
            <Header heading="Product Details" onBack={() => navigation.goBack()} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Rs {item.price}</Text>

            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
}