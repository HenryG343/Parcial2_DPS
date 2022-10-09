import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
  const {
    errorMessage,
    totalpagar,
    tam,
    cantidad,
    tipopa,
    tipoca,
    tamtext,
    tipocatext,
  } = props;
  return (
    <View style={styles.content}>
      {totalpagar && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Cantidad solicitada:" value={`${cantidad}`} />
          <DataResult title="Tamaño:" value={`${tamtext}`} />
          <DataResult title="Tipo de Cafe:" value={`${tipocatext}`} />
          <DataResult
            title="Tipo de pago:"
            value={`${tipopa == 0.15 ? 'Efectivo' : 'Tarjeta'}`}
          />
          <DataResult title="Descuento:" value={`${tipopa * 100} %`} />
          <DataResult title="Total a pagar cafe:" value={`${totalpagar} $`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
function DataResult(props) {
  const { title, value } = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
