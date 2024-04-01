import { View, Text } from "react-native"




export const Gasto = ({ gasto }) => {
    return (
        <View>
            <Text>
                {gasto.nombre}
            </Text>
        </View>
    )
}
