import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';


const NuevoPresupuesto = ({ handlePresupuesto }) => {

    const [presupuesto, setPresupuesto] = useState(0);



    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>
                Definir Presupuesto
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Agrega tu presupuesto Ej:... 300"
                keyboardType="numeric"
                value={presupuesto.toString()}
                onChangeText={setPresupuesto}

            />

            <Pressable
                onPress={() => handlePresupuesto(presupuesto)}
            >
                <Text style={styles.botonTexto}>
                    Agregar presupuesto
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "#fff",
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        transform: [{ translateY: 50 }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    input: {
        backgroundColor: "#f5f5f5",
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30,

    },
    label: {
        textAlign: 'center',
        color: "blue",
        marginBottom: 10,
        marginTop: 30,
        fontSize: 24,
        fontWeight: "600"
    },
    botonTexto: {
        color: "#fff",
        textAlign: 'center',
        marginVertical: 20,
        backgroundColor: "#f59E0B",
        borderRadius: 10,
        padding: 15,
        marginTop: 30,
        backgroundColor: "#1048a4",
        fontWeight: "700",
        textTransform: 'uppercase',
    },

});



export default NuevoPresupuesto;
