// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Banner from './Componentes/Banner';
import Cuerpo from './Componentes/Cuerpo';

export default function App() {
  return (
    <View style={estilos.contenedor}>
      <Banner />
      <Cuerpo />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo azul claro para aproximar el gradiente
  },
});