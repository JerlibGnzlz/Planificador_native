import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'


const NuevoPresupuesto = () => {
    return (
        <View style={styles.contenedor}>
            <Text>
                Definir Presupuesto
            </Text>

            <TextInput

            />

            <Pressable>
                <Text>
                    Agregar presupuesto
                </Text>
            </Pressable>
        </View>
    )
}

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
    }

});



export default NuevoPresupuesto
