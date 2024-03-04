import { Text, View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import { formatearCantidad } from '../helper';


const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafico}>
        <Image
          style={styles.imagen}
          source={require("../img/grafico.jpg")}
        />
      </View>

      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto:</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible:</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado:</Text>
          {formatearCantidad(presupuesto)}
        </Text>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
  },
  centrarGrafico: {
    alignItems: "center"
  },
  imagen: {
    width: 180,
    height: 180
  },
  contenedorTexto: {
    marginTop: 50
  },
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10
  },
  label: {
    color: "#3b82f6",
    fontWeight: "700"
  }
});

export default ControlPresupuesto;
