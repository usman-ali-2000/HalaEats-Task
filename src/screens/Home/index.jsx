import React from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import { data1 } from "../../assets/Data";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const { height, width } = Dimensions.get('window');

export default function Home({ navigation }) {

    const cart = useSelector(state => state.cart);
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { navigation.navigate('Detail', { id: item.id }) }} style={styles.flatContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Rs {item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header
                heading="Home"
                rightIcon={<Image source={require('../../assets/images/cart.png')} />}
                number={cart?.length}
                onRightClick={() => navigation.navigate('Cart')}
            />
            <FlatList
                data={data1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 10, width: width * 0.90, }}
            />
        </View>
    );
}
