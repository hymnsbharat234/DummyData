import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import HomePageSection from "./Components/HomePage"
export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <HomePageSection/>
     
  
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
