import { StyleSheet, Text, View, Alert } from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

export default function App() {


  const handlePresupuesto = (presupuesto) => {
    if (presupuesto > 0) {
      console.log("Presupuesto valido");

    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor");
    }
  };


  return (
    <View style={styles.contenedor}>

      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto
          handlePresupuesto={handlePresupuesto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  header: {
    backgroundColor: '#3b82f6',
  },
});
