import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native';

export default function Pelicula(props) {
  const { navigation } = props;

  const pelComedias = {
    name: [
      {
        id: 0,
        name: 'Shrek 2',
        photo: 'https://i.ibb.co/gZrbSJ9/Shrek-2.webp',
        vidurl: 'https://www.youtube.com/watch?v=xBxVgh-kgAI',
      },
      {
        id: 1,
        name: 'El Grinch',
        photo: 'https://i.ibb.co/bbkDPm9/Grinch.webp',
        vidurl: 'https://www.youtube.com/watch?v=I457Tv4aaRY',
      },
      {
        id: 2,
        name: 'Mi pobre angelito',
        photo: 'https://i.ibb.co/TP3b0Pz/home-alone.jpg',
        vidurl: 'https://www.youtube.com/watch?v=jEDaVHmw7r4',
      },
      {
        id: 3,
        name: 'Matilda',
        photo: 'https://i.ibb.co/x2xnwgg/matilda.webp',
        vidurl: 'https://www.youtube.com/watch?v=7i-hSS2xYTI',
      },
      {
        id: 4,
        name: 'Alvin y las ardillas',
        photo: 'https://i.ibb.co/RjwqrpR/alvin-las-ardillas.jpg',
        vidurl: 'https://www.youtube.com/watch?v=lX2dFTRMVvQ',
      },
      {
        id: 5,
        name: 'La mascara',
        photo: 'https://i.ibb.co/kKCM5Ht/La-mascara.jpg',
        vidurl: 'https://www.youtube.com/watch?v=DhP0P4q8jLk',
      },
    ],
  };

  const pelRomances = {
    name: [
      {
        id: 0,
        name: 'Titanic',
        photo: 'https://i.ibb.co/rx2p1dK/3853436.jpg',
        vidurl: 'https://www.youtube.com/watch?v=FiRVcExwBVA',
      },
      {
        id: 1,
        name: 'El Diario de Noa',
        photo: 'https://i.ibb.co/0J1nSkG/El-diario-de-Noa-242272771-large.jpg',
        vidurl: 'https://www.youtube.com/watch?v=QoC8q9Oc2w8',
      },
      {
        id: 2,
        name: 'Antes de tí',
        photo: 'https://i.ibb.co/vLHWHyP/599815.jpg',
        vidurl: 'https://www.youtube.com/watch?v=y-tS4DcM-Ug',
      },
      {
        id: 3,
        name: 'A través de mi ventana',
        photo: 'https://i.ibb.co/Wy0ThBY/5276813.jpg',
        vidurl: 'https://www.youtube.com/watch?v=ibjAgqsgQzc',
      },
      {
        id: 4,
        name: 'Bajo la misma estrella',
        photo: 'https://i.ibb.co/YdbYtjL/034641.jpg',
        vidurl: 'https://www.youtube.com/watch?v=9Lt8QAZkc94',
      },
      {
        id: 5,
        name: 'Shakespeare enamorado',
        photo: 'https://i.ibb.co/x2pj5Js/Shakespeare-enamorado-489243485-large.jpg',
        vidurl: 'https://www.youtube.com/watch?v=gk1rTKB6ZF8',
      },
    ],
  };

  const pelAccion = {
    name: [
      {
        id: 0,
        name: 'Atómica',
        photo: 'https://i.ibb.co/TLjCY9b/At-mica-Atomic-Blonde-584111545-large.jpg',
        vidurl: 'https://youtu.be/aieQrj9Yy8s',
      },
      {
        id: 1,
        name: 'Misión imposible: Protocolo fantasma',
        photo: 'https://i.ibb.co/5L0z7yH/Misi-n-imposible-Protocolo-fantasma-284514904-large.jpg',
        vidurl: 'https://youtu.be/EDGYVFZxsXQ',
      },
      {
        id: 2,
        name: 'Skyfall',
        photo: 'https://i.ibb.co/J3JJQ8d/159059.jpg',
        vidurl: 'https://youtu.be/6kw1UVovByw',
      },
      {
        id: 3,
        name: 'John Wick (Otro día para matar)',
        photo: 'https://i.ibb.co/Wy61HMK/John-Wick-Otro-d-a-para-matar-166872838-large.jpg',
        vidurl: 'https://youtu.be/2AUmvWm5ZDQ',
      },
      {
        id: 4,
        name: 'Mad Max: Furia en la carretera',
        photo: 'https://i.ibb.co/rM5P2zt/mad-max-fury-road-imax.jpg',
        vidurl: 'https://youtu.be/hEJnMQG9ev8',
      },
      {
        id: 5,
        name: 'John Wick',
        photo: 'https://i.ibb.co/R0WYPLJ/john-wick-5-4txn.jpg',
        vidurl: 'https://www.youtube.com/watch?v=BzLA7Ey2Af4',
      },
    ],
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.banner}
          source={require('../img/peliculas-wallpaper.jpg')}
        />
      </View>
      
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Comedia</Text>
        <ScrollView horizontal>
          {pelComedias.name.map((item, index) => (
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                  Linking.openURL(item.vidurl);
                }}>
                <Image style={styles.peli} source={{ uri: item.photo }} />
              </TouchableHighlight>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Romances</Text>
        <ScrollView horizontal>
          {pelRomances.name.map((item, index) => (
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                  Linking.openURL(item.vidurl);
                }}>
                <Image style={styles.peli} source={{ uri: item.photo }} />
              </TouchableHighlight>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Acción</Text>
        <ScrollView horizontal>
          {pelAccion.name.map((item, index) => (
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                  Linking.openURL(item.vidurl);
                }}>
                <Image style={styles.peli} source={{ uri: item.photo }} />
              </TouchableHighlight>
            </View>
          ))}
        </ScrollView>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 150,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  peli: {
    width: 100,
    height: 100,
    marginRight: 2,
  },
});
