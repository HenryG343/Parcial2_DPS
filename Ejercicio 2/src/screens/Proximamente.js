import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Linking,
} from 'react-native';
export default function Proximamente(props) {
  const { navigation } = props;

  const proxEstrenos = {
    name: [
      {
        id: 0,
        name: 'Deadpool 3',
        desc: 'Deadpool 3, con Ryan Reynolds y Hugh Jackman retomando su papel de Lobezno, ya tiene fecha de estreno en el Universo cinematográfico Marvel.',
        fecha: '6 de septiembre de 2024',
        photo: 'https://i.ibb.co/ZVphnmx/1664320437-757522-1664320483-noticia-normal.jpg',
        vidurl: 'https://www.youtube.com/watch?v=3OJPKAE7ANI',
      },
      {
        id: 1,
        name: 'Super Mario Bros',
        desc: 'Narra las aventuras de dos fontaneros, Mario y Luigi en otra dimensión paralela gobernada por Koopa...',
        fecha: '2023',
        photo: 'https://i.ibb.co/pRyg69f/450-1000.webp',
        vidurl: 'https://www.youtube.com/watch?v=SvJwEiy2Wok',
      },
      {
        id: 2,
        name: 'The Witcher - Temporada 3',
        desc: 'La temporada 3 de The Witcher se basará en el libro de Andrzej Sapkowski Tiempo de Desprecio, en el que la intriga política en la isla de Thanedd estalla en un golpe de estado abierto, con Geralt metido en el meollo.',
        fecha: 'verano de 2023',
        photo: 'https://i.ibb.co/Q9DkRgj/witcher3.jpg',
        vidurl: 'https://www.youtube.com/watch?v=hnJjHibk00s',
      },
    ],
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: 'column' }}>
        {proxEstrenos.name.map((item, index) => (
          <View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                Linking.openURL(item.vidurl);
              }}>
              <View style={styles.item}>
                <Image style={styles.banner} source={{ uri: item.photo }} />

                <View style={styles.item2}>
                  <Text style={{ color: 'black', fontWeight: 'bold' }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: 'gray' }}>
                    Descripción: {item.desc}
                  </Text>
                  <Text style={{ color: 'gray', marginTop:3 }}>
                    Fecha de estreno: {item.fecha}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 150,
  },
  peli: {
    width: 100,
    height: 100,
    marginRight: 2,
  },
  item: {
    marginHorizontal: 10,
  },
  item2: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
});
