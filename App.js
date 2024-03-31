import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto.jsx';
import FormularioGastos from './src/components/FormularioGastos.jsx';
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';
import { generarId } from './src/helper/index.jsx';
import { ListadoGasto } from './src/components/ListadoGasto.jsx';


export default function App() {

  const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);

  const [presupuesto, setPresupuesto] = useState(0);

  const [gastos, setGastos] = useState([]);

  const [modal, setModal] = useState(false);


  const handlePresupuesto = (presupuesto) => {
    if (presupuesto > 0) {
      setIsvalidPresupuesto(true);

    } else {
      Alert.alert(
        "Error",
        "El presupuesto no puede ser 0 o menor"
      );
    }
  };


  const handleGasto = (gasto) => {

    if (Object.values(gasto).includes("")) {
      Alert.alert(
        "Error",
        "Hay almenos un campo vacio"
      );
      return;
    }

    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setModal(!modal);
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
      {isvalidPresupuesto && (
        <ListadoGasto />
      )}

      {modal && (

        <Modal
          animationtype="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}
        >
          <FormularioGastos
            setModal={setModal}
            handleGasto={handleGasto}
          />
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
    right: 20,
    position: "absolute"
  }
});
