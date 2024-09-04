import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import batSignal from './assets/batSignal.png';
import { useState } from 'react';

export default function App() {
  const [showForm, setShowForm] = useState(true);
  const handleClick = () => {
    setShowForm(!showForm)
  }
  return (
    <View style={styles.container}>
      {
        showForm ? <>
        <Image source={batSignal}/>      
        <View onTouchStart={(e) => handleClick()}><Text style={styles.text}>Call Batman</Text></View>
        </>
        :
        <>
          <Image source={batSignal}/>
          <TextInput style={styles.input} textAlign='center' placeholder='nome'></TextInput>
          <TextInput style={styles.input} textAlign='center' placeholder='telefone' keyboardType='number-pad' ></TextInput>
          <TextInput style={styles.input} textAlign='center' placeholder='localização'></TextInput>
          <TextInput style={styles.input} textAlign='center' placeholder='Observações'></TextInput>
          <View style={styles.button} onTouchStart={(e) =>  handleClick()}><Text>Enviar</Text></View>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
  },
  input:{
    borderColor: "#000000",
    borderRadius: 10,
    width:250,
    height:30,
    borderWidth:1,
    margin:10
  },
  button:{
    width:300,
    alignItems:"center",
    justifyContent:'center',
    height:30,
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth:1,

  }
});
