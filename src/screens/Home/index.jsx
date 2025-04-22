import React from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import { data1, IMAGES } from "../../assets/Data";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const { height, width } = Dimensions.get('window');

export default function Home({ navigation }) {

    const cart = useSelector(state => state.cart);
    const renderItem = ({ item }) => (
        <ProductCard item={item} onPress={() => { navigation.navigate('Detail', { id: item.id }) }} />
    );

    return (
        <View style={styles.container}>
            <Header
                heading="Home"
                rightIcon={<Image source={IMAGES.cart} />}
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
