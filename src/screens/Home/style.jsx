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
    flatContainer: {
        marginBottom: 10,
        borderWidth: 1,
        marginTop: '2%',
        padding: 10,
        borderRadius: 10
    },
    name: {
        color: 'black',
        height: 30,
        fontWeight: 'bold',
        fontSize: 16
    },
    price: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 12
    }
})

export default styles;