import { View, Text, StyleSheet } from 'react-native';

export const ListadoGasto = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 70,
    // backgroundColor: "#551414"
  },
  titulo: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 30,
    fontWeight: "400"
  }
});