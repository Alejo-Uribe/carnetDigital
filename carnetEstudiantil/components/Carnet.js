import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Carnet = () => {
  const [mostrarAnverso, setMostrarAnverso] = useState(true);

  return (
    <View style={styles.carnet}>
      {mostrarAnverso ? (
        <View style={styles.anverso}>
          <Image source={require('../assets/foto.jpg')} style={styles.foto} />
          <Text style={styles.nombre}>Alejandro Uribe Pino</Text>
          <Text style={styles.info}>Número de matrícula: 3123121</Text>
          <Text style={styles.info}>Carrera: Desarrollo software</Text>
          <View style={styles.linea} />
          <Image source={require('../assets/frame.png')} style={styles.qr} />
        </View>
      ) : (
        <View style={styles.reverso}>
          <Text style={styles.info}>Válido hasta: 31/12/2025</Text>
          <Text style={styles.info}>Este carnet es personal e intransferible.</Text>
        </View>
      )}

      <TouchableOpacity onPress={() => setMostrarAnverso(!mostrarAnverso)} style={styles.boton}>
        <Text style={styles.botonTexto}>Girar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carnet: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 250,
    alignItems: 'center',
  },
  anverso: {
    alignItems: 'center',
  },
  reverso: {
    alignItems: 'center',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  qr: {
    width: 100,
    height: 100,
    marginTop: 8,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    marginTop: 4,
  },
  linea: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 12,
  },
  boton: {
    marginTop: 12,
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 8,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Carnet;