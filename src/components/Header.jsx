import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView >
            <Text style={styles.texto}>
                Planificador de gastos
            </Text>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3b82f6',
    },
    texto: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingTop: 40

    },
    header: {
        backgroundColor: '#3b82f6',
    },
});

export default Header;
