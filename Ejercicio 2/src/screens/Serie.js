import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native';
export default function Serie() {
  const serComedias = {
    name: [
      {
        id: 0,
        name: 'Cómo conocí a tu madre',
        photo:
          'https://i.ibb.co/crgkpgj/cartel-como-conoci-a-vuestra-madre-696x1024.jpg',
        temp: '9',
        vidurl: 'https://www.youtube.com/watch?v=BxJ9wBuQUFI',
      },
      {
        id: 1,
        name: 'Friends',
        photo: 'https://i.ibb.co/m8QHFPs/friends.webp',
        temp: '10',
        vidurl: 'https://www.youtube.com/watch?v=ki6Mbtnl_9I',
      },
      {
        id: 2,
        name: 'The Big Bang Theory',
        photo: 'https://i.ibb.co/s52VqqB/tbbt.jpg',
        temp: '12',
        vidurl: 'https://www.youtube.com/watch?v=_uQXxvZ3afQ',
      },
    ],
  };

  const serAventuras = {
    name: [
      {
        id: 0,
        name: 'Avatar: la leyenda de Aang',
        photo: 'https://i.ibb.co/mXy3wSw/avatar-la-leyenda-de-aang.jpg',
        temp: '3',
        vidurl: 'https://www.youtube.com/watch?v=NNSphdEYFT0',
      },
      {
        id: 1,
        name: 'Patoaventuras',
        photo: 'https://i.ibb.co/FbhSJkF/visd-0001-JPG0-DV7-R.jpg',
        temp: '3',
        vidurl: 'https://www.youtube.com/watch?v=7oud8y2IYRQ',
      },
      {
        id: 2,
        name: 'El increible mundo de Gumball',
        photo: 'https://i.ibb.co/phwxXfw/0950731.jpg',
        temp: '6',
        vidurl: 'https://www.youtube.com/watch?v=LP79h5NfXNk',
      },
    ],
  };

    const serFantasia = {
    name: [
      {
        id: 0,
        name: 'The Witcher',
        photo: 'https://i.ibb.co/v17LgzN/The-Witcher-Poster-Netflix.webp',
        temp: '2',
        vidurl: 'https://www.youtube.com/watch?v=ETY44yszyNc',
      },
      {
        id: 1,
        name: 'WandaVision',
        photo: 'https://i.ibb.co/T4ymvfy/Wanda-Vision-official-teaster-poster.webp',
        temp: '1',
        vidurl: 'https://www.youtube.com/watch?v=sj9J2ecsSpo',
      },
      {
        id: 2,
        name: 'Smallville',
        photo: 'https://i.ibb.co/72GGx5C/120735.jpg',
        temp: '10',
        vidurl: 'https://www.youtube.com/watch?v=70Y32si4yb8',
      },
    ],
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.banner}
          source={require('../img/series-wallpaper.jpg')}
        />
      </View>

      <Text style={styles.titulo}>Comedia</Text>
      <View>
        <View>
          {serComedias.name.map((item, index) => (
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                  Linking.openURL(item.vidurl);
                }}>
                <View style={styles.item}>
                  <Image style={styles.seri} source={{ uri: item.photo }} />

                  <View style={styles.item2}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: 'gray' }}>
                      Temporadas: {item.temp}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.titulo}>Aventura</Text>
      <View>
        <View>
          {serAventuras.name.map((item, index) => (
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                  Linking.openURL(item.vidurl);
                }}>
                <View style={styles.item}>
                  <Image style={styles.seri} source={{ uri: item.photo }} />

                  <View style={styles.item2}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: 'gray' }}>
                      Temporadas: {item.temp}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </View>
      </View>

<Text style={styles.titulo}>Aventura</Text>
      <View>
        <View>
          {serFantasia.name.map((item, index) => (
            <View>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => {
                  Linking.openURL(item.vidurl);
                }}>
                <View style={styles.item}>
                  <Image style={styles.seri} source={{ uri: item.photo }} />

                  <View style={styles.item2}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: 'gray' }}>
                      Temporadas: {item.temp}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </View>
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
    paddingVertical:10,
    borderBottom: '1px solid black',
  },
  seri: {
    width: 70,
    height: 70,
    marginRight: 2,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical:2,
  },
  item2: {
    display: 'flex',
    flexDirection: 'column',
  },
});
