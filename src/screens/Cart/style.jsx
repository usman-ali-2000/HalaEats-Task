import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
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
});

export default styles;