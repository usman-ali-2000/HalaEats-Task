import { Dimensions, StyleSheet } from "react-native";
import theme from "../../Theme/GlobalTheme";

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: theme.colors.white
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        width: '90%'
    },
    price: {
        marginTop: '5%',
        color: 'gray',
        fontWeight: '500',
        fontSize: 16,
        width: '90%'
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        marginTop:'10%'
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
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    quantity: {
        fontSize: 18,
        fontWeight: "bold",
    },
    addToCartButton: {
        backgroundColor: "#28a745",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: '30%',
        width:'90%'
    },
    addToCartText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default styles;