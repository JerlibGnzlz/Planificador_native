import { View, Text, StyleSheet } from 'react-native';
import { Gasto } from './Gasto';

export const ListadoGasto = ({ gastos }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0
        ? <Text style={styles.noGatos}>No hay gasto</Text>
        : gastos.map(gasto => {
          <Gasto
            key={gasto.id}
            gasto={gasto}
          />
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
  },
  noGatos: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20

  }
});