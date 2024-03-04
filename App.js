import { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto.jsx';

export default function App() {

  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);

  const [presupuesto, setPresupuesto] = useState(0);

  const [gastos, setGastos] = useState([]);

  const handlePresupuesto = (presupuesto) => {
    if (presupuesto > 0) {
      setIsvalidPresupuesto(true);

    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor");
    }
  };


  return (
    <View style={styles.contenedor}>

      <View style={styles.header}>
        <Header />

        {
          isvalidPresupuesto
            ?
            (<ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />)
            :
            (<NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handlePresupuesto={handlePresupuesto}
            />)
        }
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
