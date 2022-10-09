/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [tam, setTam] = useState(null);
  const [tipoca, setTipoca] = useState(null);
  const [tipopa, setTipopa] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [totalpagar, setTotalpagar] = useState(null);
  const [tamtext, setTamtext] = useState(null);
  const [tipocatext, setTipocatext] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (tam && tipopa && tipoca && cantidad) calculate();
    else reset();
  }, [tam, tipoca, tipopa, cantidad]);
  const calculate = () => {
    reset();
    if (!tam) {
      setErrorMessage('Seleccione el tamaño del café');
    } else if (!tipoca) {
      setErrorMessage('Seleccione el tipo de café');
    } else if (!tipopa) {
      setErrorMessage('Seleccióne el tipo de pago');
    } else if (!cantidad) {
      setErrorMessage('Agrege la cantidad a comprar');
    } else {
      const descuento = (parseFloat(tam) + parseFloat(tipoca)) * tipopa;
      const calculo =
        (parseFloat(tam) + parseFloat(tipoca) - descuento) * cantidad;
      setTotalpagar(calculo.toFixed(2));
      if(tam == 1){
        setTamtext('8 onz');
      }else if(tam == 1.5){
        setTamtext('12 onz');
      }else if(tam == 2){
        setTamtext('16 onz');
      }

      if(tipoca == 2){
        setTipocatext('Mocha');
      }else if(tipoca == 2.5){
        setTipocatext('Te chai');
      }else if(tipoca == 1.5){
        setTipocatext('Americano');
      }else if(tipoca == 3){
        setTipocatext('Frapper');
      }
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotalpagar(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>StarBosco APP</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
          setTam={setTam}
          setTipoca={setTipoca}
          setTipopa={setTipopa}
          setCantidad={setCantidad}
        />
      </SafeAreaView>
      <Result tam={tam} 
        cantidad = {cantidad}
        tipoca = {tipoca}
        tipopa ={tipopa}
        totalpagar={totalpagar} 
        tamtext = {tamtext}
        tipocatext = {tipocatext}
        errorMessage={errorMessage} 
      />
      <Footer calculate={calculate} />
    </>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    height: 210,
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#6D6767',
    height: 240,
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
