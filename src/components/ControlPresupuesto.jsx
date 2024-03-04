import { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, Modal } from 'react-native';
import globalStyles from '../styles';
import { formatearCantidad } from '../helper';


const ControlPresupuesto = ({ presupuesto, gastos }) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGasto = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0);
    setGastado(totalGasto);


    const totalDisponible = presupuesto - totalGasto;
    setDisponible(totalDisponible);
  }, []);


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
          <Text style={styles.label}>Presupuesto: {""}</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible: {""}</Text>
          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado: {""}</Text>
          {formatearCantidad(gastado)}
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
