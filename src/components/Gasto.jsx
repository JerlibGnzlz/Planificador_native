import { View, Text, StyleSheet, Image } from "react-native"
import globalStyles from "../styles";


const diccionarioIconos = {
    ahorro: require("../img/icono_ahorro.png"),
    comida: require("../img/icono_comida.png"),
    casa: require("../img/icono_casa.png"),
    gasto: require("../img/icono_gastos.png"),
    ocio: require("../img/icono_ocio.png"),
    salud: require("../img/icono_salud.png"),
    suscripciones: require("../img/icono_suscripciones.png")
}

export const Gasto = ({ gasto }) => {

    const { nombre, cantidad, categoria } = gasto

    return (
        <View style={styles.contenedor}>
            <View>

                <Image
                    source={diccionarioIconos[categoria]}
                />

                <Text> {categoria}</Text>
                <Text> {nombre}</Text>
            </View>
            <Text style={styles.titulo} >
            </Text>
            <Text> {cantidad}</Text>
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