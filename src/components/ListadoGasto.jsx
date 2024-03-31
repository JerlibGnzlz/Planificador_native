import { View, Text, StyleSheet } from 'react-native';

export const ListadoGasto = ({ gastos }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0
        ? <Text>No hay gasto</Text>
        : gastos.map(gasto => {

          <Text>{gasto.nombre}</Text>;
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 70,
  },
  titulo: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 30,
    fontWeight: "400"
  }
});