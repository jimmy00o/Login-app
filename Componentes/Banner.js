import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../assets/login-pana.png')} 
          style={styles.image}
          resizeMode="contain" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    paddingTop: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  image: {
    width: 230,
    height: 250,
  },
});

export default Banner;
