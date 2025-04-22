import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ToastAndroid } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import { data1 } from "../../assets/Data";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import theme from "../../Theme/GlobalTheme";

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
            <ProductCard item={item} showQuantity={true} quantity={quantity} OnIncrement={incrementQuantity} OnDecrement={decrementQuantity} />
            <Button title="Add to Cart" onPress={handleAddToCart} style={{ backgroundColor: theme.colors.green }} />
        </View>
    );
}