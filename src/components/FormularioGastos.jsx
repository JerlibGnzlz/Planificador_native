import { SafeAreaView, Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../styles';
import { useState } from "react";



const FormularioGastos = ({ setModal, handleGasto }) => {

  const [nombre, setNombre] = useState("");

  const [cantidad, setCantidad] = useState("");

  const [categoria, setCategoria] = useState("");

  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Pressable
          onPress={() => setModal(false)}
          style={styles.btnCancelar}
        >
          <Text style={styles.btnCancelarTexto}>
            Cancelar
          </Text>
        </Pressable>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>

        <View>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            tyle={styles.input}
            placeholder="Nombre del Gato eje.. comida"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad de  Gasto</Text>
          <TextInput
            tyle={styles.input}
            placeholder="Cantidad de Gato eje.. $300"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}

          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker
            selectedValue={categoria}
            onValueChange={(value) => setCategoria(value)}>
            <Picker.Item label="--Seleccione--" value="" />
            <Picker.Item label="Ahorro" value="ahorro" />
            <Picker.Item label="Comida" value="comida" />
            <Picker.Item label="Gastos Varios" value="gastos" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Salud" value="salud" />
            <Picker.Item label="Suscrpciones" value="suscripciones" />
          </Picker>
        </View>
        <Pressable
          onPress={() => { handleGasto({ nombre, cantidad, categoria }); }}
          style={styles.submitBtn}>
          <Text style={styles.submitBtnTexto}>
            Agregar Gasto
          </Text>
        </Pressable>
      </View>
    </SafeAreaView >
  );
};


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#1e40af"
  },
  formulario: {
    ...globalStyles.contenedor
  },
  titulo: {
    textAlign: "center",
    fontSize: 28,
    marginVertical: 30,
    marginBottom: 30,
    color: "#64748B"
  },
  campo: {
    marginVertical: 10
  },
  label: {
    color: "#64748B",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  submitBtn: {
    backgroundColor: "#3B82f6",
    padding: 10,
    marginTop: 20
  },
  submitBtnTexto: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
  },
  btnCancelar: {
    backgroundColor: "#db2777",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    borderRadius: 10,

  },
  btnCancelarTexto: {
    textTransform: "uppercase",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  }
});

export default FormularioGastos;
