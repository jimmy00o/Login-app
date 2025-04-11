// Components/Cuerpo.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Cuerpo = () => {
  return (
    <View style={estilos.contenedor}>
      {/* Título */}
      <Text style={estilos.titulo}>Welcome!</Text>
      <Text style={estilos.subtitulo}>Login your account</Text>

      {/* Campo de Correo */}
      <Text style={estilos.etiqueta}>Email</Text>
      <View style={estilos.contenedorEntrada}>
        <View style={estilos.contenedorTexto}>
          <TextInput
            style={estilos.entrada}
            placeholder="ejemplo@email.com"
            placeholderTextColor="#C2C2C2"
          />
        </View>
        <View style={estilos.contenedorIcono}>
          <Ionicons name="mail" size={24} color="#FFFFFF" />
        </View>
      </View>

      {/* Campo de Contraseña */}
      <Text style={estilos.etiqueta}>Password</Text>
      <View style={estilos.contenedorEntrada}>
        <View style={estilos.contenedorTexto}>
          <TextInput
            style={estilos.entrada}
            placeholder="Enter your password"
            placeholderTextColor="#C2C2C2"
            secureTextEntry
          />
        </View>
        <View style={estilos.contenedorIcono}>
          <Ionicons name="lock-closed" size={24} color="#FFFFFF" />
        </View>
      </View>

      {/* ¿Olvidaste tu contraseña? */}
      <TouchableOpacity>
        <Text style={estilos.textoOlvidaste}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Botones */}
      <TouchableOpacity style={estilos.botonIniciarSesion}>
        <Text style={estilos.textoBoton}>Login Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botonRegistrarse}>
        <Text style={estilos.textoBotonRegistrarse}>Signup Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 0.8,
    paddingHorizontal: 35, // Más espacio para mejor alineació
    backgroundColor: '#FFFFFF', // Fondo azul claro para coincidir con el diseño
    justifyContent: 'center', // Centrar el contenido verticalmente
    marginBottom: 150,
  },
  titulo: {
    fontSize: 35,
    color: '#1E2772', // Azul
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },
 subtitulo: {
    fontSize: 30,
    color: '#1E2772', // Azul, no gris oscuro
    textAlign: 'center',
    marginBottom: 100,
  },
  etiqueta: {
    fontSize: 16,
    color: '#1E2772',
    
  },
    contenedorEntrada: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD7401',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 1,
    paddingVertical:2,
  },
  contenedorTexto: {
    flex: 1, // Ocupa el espacio restante
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10, // Esquinas redondeadas solo a la izquierda
    borderBottomLeftRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  entrada: {
    flex: 1,
    fontSize: 14,
    color: '#555555', // Gris oscuro
    paddingVertical: 6,
  },
  contenedorIcono: {
    backgroundColor: '#FD7401', // Fondo naranja
    borderTopRightRadius: 8, // Esquinas redondeadas solo a la derecha
    borderBottomRightRadius: 8,
    padding: 10, // Espacio para que el ícono no esté pegado a los bordes
    justifyContent: 'center',
    alignItems: 'center',
    width: 60, // Ancho fijo para el cuadro del ícono
  },
 textoOlvidaste: {
    fontSize: 14,
    color: '#1E2772', //
    textAlign: 'center', // Centrado
    marginBottom: 20,
  },
 botonIniciarSesion: {
    backgroundColor: '#FD7401', // Naranja
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
 botonRegistrarse: {
    backgroundColor: '#FFFFFF', // Fondo blanco
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FD7401', // Borde naranja
  },
  textoBoton: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoBotonRegistrarse: {
    fontSize: 16,
    color: '#FD7401', // Texto naranja
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Cuerpo;