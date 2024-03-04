import { Text, View, Image, StyleSheet } from 'react-native';
import globalStyles from '../styles';


const ControlPresupuesto = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafico}>
        <Image
          style={styles.imagen}
          source={require("../img/grafico.jpg")}
        />
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
  }
});

export default ControlPresupuesto;
