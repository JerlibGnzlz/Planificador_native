import { View, Text, StyleSheet } from "react-native"
import globalStyles from "../styles";




export const Gasto = ({ gasto }) => {

    const { nombre, cantidad, categoria } = gasto
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo} >
                {nombre}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        marginBottom: 20
    },

    gasto: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 20,
        color: "blue"
    }
});