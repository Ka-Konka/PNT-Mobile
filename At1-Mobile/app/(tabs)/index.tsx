import { Image, StyleSheet, Platform } from 'react-native';
import { Button, TextInput } from 'react-native';
import {Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';



export default function HomeScreen() {

  const [nome, setnome] = useState('')
  const [hora, sethora] = useState('')
  const [saudacao, setsaudacao] = useState('')
  const smile = '😊'

  const atualizarsaudacao = () => {
    let saudacaoHora;
      if (hora === 'dia') {
        saudacaoHora = 'Bom dia';
      } else if (hora === 'tarde') {
        saudacaoHora = 'Boa tarde';
      } else {
        saudacaoHora = 'Boa noite';
      }

    setsaudacao(`Seja Bem-Vindo(a), ${nome}! ${saudacaoHora} ${smile}`);
  };

  const limpar = () => {
    setnome('');
    sethora('');
    setsaudacao('');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/image.png')}
          style={styles.welcomelogo}
        />
      }>
      <View>
        {saudacao !== '' && (
            <Text style={styles.titulo}>{saudacao}</Text>
          )}
        <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome:" 
        onChangeText={(nome) => setnome(nome)}/>
        <TextInput 
        style={styles.input} 
        placeholder="Digite o momento do dia? (dia, tarde, noite)" 
        onChangeText={(hora) => sethora(hora)}/>

      <TouchableOpacity style={styles.button} onPress={atualizarsaudacao}>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>Atualizar Saudação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={limpar}>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>Limpar Saudação</Text>
      </TouchableOpacity>
      </View>
    </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  welcomelogo: {
    height: 300,
    width: 400,
    bottom: 0,
    left: 40,
    resizeMode: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color : '#fff',
    textAlign: 'left',
    marginTop: 50
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    color : 'black',
    backgroundColor: '#fff'
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: 'green',
    marginTop: 20,
    marginLeft: 20  

  },
});
