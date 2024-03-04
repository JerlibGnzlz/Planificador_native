import { SafeAreaView, Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';

const FormularioGastos = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <Text>
            Cancelar
          </Text>
        </Pressable>
      </View>

      <View>
        <Text>Nuevo Gasto</Text>

        <View>
          <Text>Nombre Gasto</Text>
          <TextInput
            placeholder="Nombre del Gato eje.. comida"
          />
        </View>

        <View>
          <Text>Cantidad de  Gasto</Text>
          <TextInput
            placeholder="Cantidad de Gato eje.. $300"
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text>Categoria Gasto</Text>
          <Picker style={styles.picker}>
            <Picker.Item label="--Seleccione--" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Gastos Varios" value="gastos" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscrpciones" value="suscripciones" />
          </Picker>
        </View>
      </View>
    </SafeAreaView >
  );
};


const styles = StyleSheet.create({
  picker: {
    color: "black"
  },

});

export default FormularioGastos;
