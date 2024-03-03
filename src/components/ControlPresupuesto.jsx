import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';


const ControlPresupuesto = () => {
  return (
    <View style={StyleSheet.contenedor}>
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
    width: 250,
    height: 250
  }
});

export default ControlPresupuesto;
