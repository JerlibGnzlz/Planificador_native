import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto.jsx';
import FormularioGastos from './src/components/FormularioGastos.jsx';
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';

export default function App() {

  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);

  const [presupuesto, setPresupuesto] = useState(0);

  const [gastos, setGastos] = useState([]);

  const [modal, setModal] = useState(false);


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
      {modal && (

        <Modal
          animationtype="slide"
          visible={modal} >
          <FormularioGastos />
        </Modal >
      )}

      {isvalidPresupuesto && (
        <Pressable
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.imagen}
            source={require("./src/img/nuevo-gasto.png")}
          />
        </Pressable>


      )}
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
  imagen: {
    width: 50,
    height: 50,
    alignSelf: "center",
    // top: 10,
    right: 20,
    position: "absolute"
  }
});
