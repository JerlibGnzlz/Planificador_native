import { useState } from 'react';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto.jsx';
import FormularioGastos from './src/components/FormularioGastos.jsx';
import { StyleSheet, ScrollView, Text, View, Alert, Pressable, Image, Modal } from 'react-native';
import { generarId } from './src/helper/index.jsx';
import { ListadoGasto } from './src/components/ListadoGasto.jsx';


export default function App () {

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
        "Hay al menos un campo vacio"
      );
      return;
    }

    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setModal(!modal);
  };

  return (
    <View style={styles.contenedor}>
      <ScrollView>


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
          <ListadoGasto
            gastos={gastos}

          />
        )}
      </ScrollView>

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
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  header: {
    backgroundColor: '#3b82f6',
    minHeight: 500
  },
  imagen: {
    width: 50,
    height: 50,
    alignSelf: "center",
    right: 30,
    position: "absolute",
    bottom: 50
  },
  // scrollView: {
  //   backgroundColor: 'pink',
  //   marginHorizontal: 20,
  // },
});
