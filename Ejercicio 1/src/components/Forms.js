import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import NumericInput from 'react-numeric-input';
export default function Form(props) {
  const {
    setCapital,
    setInterest,
    setMonths,
    setTam,
    setTipoca,
    setTipopa,
    setCantidad,
  } = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}></View>
      <RNPickerSelect
        onValueChange={(value) => setTam(value)}
        placeholder={{
          label: 'Seleccione tamaño del café',
          value: null,
        }}
        items={[
          { label: 'Short 8 onz. $1.00', value: 1 },
          { label: 'Tall 12 onz $1.50', value: 1.5 },
          { label: 'Grande 16 onz $2.00', value: 2 },
        ]}
      />
      <RNPickerSelect
        onValueChange={(value) => setTipoca(value)}
        placeholder={{
          label: 'Seleccione tipo de café',
          value: null,
        }}
        items={[
          { label: 'Mocha $2.00', value: 2 },
          { label: 'Te chai $2.50', value: 2.5 },
          { label: 'Americano $1.50', value: 1.5 },
          { label: 'Frapper $3.00', value: 3 },
        ]}
      />
      <RNPickerSelect
        onValueChange={(value) => setTipopa(value)}
        placeholder={{
          label: 'Tipo de pago',
          value: null,
        }}
        items={[
          { label: 'Efectivo', value: 0.15 },
          { label: 'Tarjeta de crédito', value: 0.05 },
        ]}
      />
      <Text style={styles.titleApp}>Cantidad</Text>
      <NumericInput min={0} onChange={(value) => setCantidad(value)} />
    </View>
  );
}
const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    paddingHorizontal: 55,
    backgroundColor: '#6D6767',
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  titleApp: {
    color: '#fff'
  },
});
