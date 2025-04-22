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
})

export default styles;