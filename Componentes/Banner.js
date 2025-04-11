// Components/Banner.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={estilos.contenedor}>
      <Image
          source={require('../assets/login-pana.png')}
          style={estyle.imagen}/>
        <Text> WELCOME </Text>
         </View>
    
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(140, 143, 225)', // Fondo azul claro para coincidir con el diseño
  
  },
  imagen: {
    width: 170,
    height: 170,
    borderRadius: 100, // Forma circular
    backgroundColor: '#FFFFFF', // Fondo blanco para el círculo
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Sombra para Android
    marginTop: 80,
  },
  imagen: {
    width: '90%',
    height: '100%',
  },
});

export default Banner;