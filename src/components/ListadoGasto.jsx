import { View, Text, StyleSheet } from 'react-native';
import { Gasto } from './Gasto';

export const ListadoGasto = ({ gastos }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0
        ?
        (
          <Text style={styles.noGastos}>No hay gasto</Text>
        )
        :
        (
          gastos.map(gasto => {
            <Gasto
              key={gasto.id}
              gasto={gasto}
            />
            console.log(gasto)
          }
          )
        )
      }


    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 70,
    marginBottom: 100
  },
  titulo: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 40,
    // fontWeight: "400",
    marginTop: 20
  },
  noGastos: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
    color: "blue"
  }
});