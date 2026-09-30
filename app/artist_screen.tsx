import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const musicas = [
  ['CARNIVAL', '57,831,780', require('../assets/images/carnival.jpg')],
  ['Stronger', '1,245,830,210', require('../assets/images/stronger.jpg')],
  ['POWER', '982,456,321', require('../assets/images/mbdtf.jpg')],
  ['Heartless', '756,321,456', require('../assets/images/808.jpg')],
  ['Flashing Lights', '645,231,987', require('../assets/images/808.jpg')],
  ['Gold Digger', '598,432,765', require('../assets/images/lateregistration.jpg')],
  ['Father Stretch My Hands Pt. 1', '534,876,543', require('../assets/images/lifeofpablo.jpg')],
  ['Runaway', '487,654,321', require('../assets/images/mbdtf.jpg')],
  ['All Of The Lights', '423,567,890', require('../assets/images/mbdtf.jpg')],
  ['Bound 2', '398,765,432', require('../assets/images/yeezus.jpg')],
];

const albuns = [
  ['VULTURES 1', '2024', require('../assets/images/carnival.jpg')],
  ['Donda', '2021', require('../assets/images/donda.png')],
  ['Jesus Is King', '2019', require('../assets/images/jesus.jpg')],
  ['The Life Of Pablo', '2016', require('../assets/images/lifeofpablo.jpg')],
];

const artistas = [
  ['Travis Scott', require('../assets/images/travis.jpg')],
  ['Tyler, The Creator', require('../assets/images/tyler.jpg')],
  ['Drake', require('../assets/images/drake.jpg')],
  ['Kid Cudi', require('../assets/images/kidcudi.jpg')],
];

const shows = [
  ['São Paulo, SP', 'Allianz Parque', '15 de novembro'],
  ['Rio de Janeiro, RJ', 'Engenhão', '22 de novembro'],
  ['Porto Alegre, RS', 'Pepsi On Stage', '6 de dezembro'],
];

export default function ArtistScreen() {
  const [showMore, setShowMore] = useState(false);
  const [local, setLocal] = useState<number[] | null>(null);

  async function descobrirLocalizacao() {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      alert('Permissão de localização negada!');
      return;
    }

    const { coords } =
      await Location.getCurrentPositionAsync({});

    setLocal([coords.latitude, coords.longitude]);
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Image
          source={require('../assets/images/kanyebackground.png')}
          style={styles.heroImage}
        />

        <Pressable
          style={styles.back}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </Pressable>

        <Text style={styles.artistName}>Kanye West</Text>
      </View>

      <View style={styles.content}>

        <Text style={styles.listeners}>
          71,6 mi de ouvintes mensais
        </Text>

        <View style={styles.actions}>
          <Pressable style={styles.follow}>
            <Text style={styles.followText}>Seguir</Text>
          </Pressable>

          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color="#fff"
            style={{ marginLeft: 20 }}
          />

          <View style={{ flex: 1 }} />

          <Ionicons
            name="shuffle"
            size={25}
            color="#fff"
            style={{ marginRight: 15 }}
          />

          <Pressable style={styles.play}>
            <Ionicons name="play" size={25} color="#000" />
          </Pressable>
        </View>

        <Section title="Popular">

          {(showMore ? musicas : musicas.slice(0, 5)).map(
            ([nome, plays, imagem], i) => (
              <View style={styles.music} key={nome as string}>
                <Text style={styles.number}>{i + 1}</Text>

                <Image
                  source={imagem}
                  style={styles.musicImg}
                />

                <View style={styles.info}>
                  <Text style={styles.name}>{nome}</Text>
                  <Text style={styles.plays}>▶ {plays}</Text>
                </View>

                <Ionicons
                  name="ellipsis-horizontal"
                  size={20}
                  color="#aaa"
                />
              </View>
            )
          )}

          <Pressable
            style={styles.more}
            onPress={() => setShowMore(!showMore)}
          >
            <Text style={styles.moreText}>
              {showMore ? 'Mostrar menos' : 'Mostrar mais'}
            </Text>
          </Pressable>

        </Section>

        <Section title="Escolha do artista">

          <View style={styles.pick}>
            <Image
              source={require('../assets/images/carnival.jpg')}
              style={styles.pickImg}
            />

            <View style={styles.info}>
              <Text style={styles.gray}>Kanye West</Text>
              <Text style={styles.pickTitle}>VULTURES</Text>
              <Text style={styles.gray}>
                Uma seleção escolhida pelo artista
              </Text>
            </View>
          </View>

        </Section>

        <Section title="Lançamentos populares">

          {albuns.map(([nome, ano, imagem]) => (
            <View style={styles.album} key={nome as string}>

              <Image
                source={imagem}
                style={styles.albumImg}
              />

              <View style={styles.info}>
                <Text style={styles.name}>{nome}</Text>
                <Text style={styles.gray}>{ano} • Álbum</Text>
              </View>

              <Ionicons
                name="ellipsis-horizontal"
                size={22}
                color="#aaa"
              />

            </View>
          ))}

        </Section>

        <Section title="Os fãs também curtem">

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {artistas.map(([nome, imagem]) => (
              <View
                style={styles.related}
                key={nome as string}
              >
                <Image
                  source={imagem}
                  style={styles.relatedImg}
                />

                <Text style={styles.name}>
                  {nome}
                </Text>
              </View>
            ))}
          </ScrollView>

        </Section>

        <Section title="Shows próximos de você">

          <View style={styles.shows}>

            <Text style={styles.gray}>
              Encontre shows e eventos próximos da sua localização.
            </Text>

            <Pressable
              style={styles.locationButton}
              onPress={descobrirLocalizacao}
            >
              <Ionicons
                name="location-outline"
                size={20}
                color="#000"
              />

              <Text style={styles.locationText}>
                Usar minha localização
              </Text>
            </Pressable>

            {local && (
              <View style={styles.result}>

                <Text style={styles.name}>
                  📍 Localização encontrada
                </Text>

                <Text style={styles.gray}>
                  Latitude: {local[0].toFixed(4)}
                </Text>

                <Text style={styles.gray}>
                  Longitude: {local[1].toFixed(4)}
                </Text>

                <Text style={styles.nearby}>
                  Shows disponíveis
                </Text>

                {shows.map(([cidade, localShow, data]) => (
                  <View
                    style={styles.show}
                    key={cidade}
                  >
                    <Ionicons
                      name="musical-notes"
                      size={22}
                      color="#1ed760"
                    />

                    <View style={styles.info}>
                      <Text style={styles.name}>
                        {cidade}
                      </Text>

                      <Text style={styles.gray}>
                        {localShow}
                      </Text>

                      <Text style={styles.date}>
                        {data}
                      </Text>
                    </View>
                  </View>
                ))}

                <Pressable
                  onPress={() =>
                    Linking.openURL(
                      `https://www.google.com/maps?q=${local[0]},${local[1]}`
                    )
                  }
                >
                  <Text style={styles.map}>
                    Ver minha localização no mapa
                  </Text>
                </Pressable>

              </View>
            )}

          </View>

        </Section>

        <View style={{ height: 40 }} />

      </View>
    </ScrollView>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  content: {
    paddingHorizontal: 14,
  },

  hero: {
    height: 340,
  },

  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  back: {
    position: 'absolute',
    top: 45,
    left: 15,
  },

  artistName: {
    position: 'absolute',
    bottom: 12,
    left: 14,
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  listeners: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 18,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  follow: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },

  followText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  play: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1ed760',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 15,
  },

  music: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
  },

  number: {
    color: '#aaa',
    width: 25,
    textAlign: 'center',
  },

  musicImg: {
    width: 48,
    height: 48,
    marginLeft: 5,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  plays: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },

  more: {
    marginLeft: 25,
    paddingVertical: 10,
  },

  moreText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  pick: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    borderRadius: 6,
    padding: 10,
  },

  pickImg: {
    width: 100,
    height: 100,
  },

  pickTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  gray: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 4,
  },

  album: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  albumImg: {
    width: 75,
    height: 75,
  },

  related: {
    width: 170,
    marginRight: 15,
  },

  relatedImg: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginBottom: 10,
  },

  shows: {
    backgroundColor: '#242424',
    borderRadius: 8,
    padding: 16,
  },

  locationButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 12,
  },

  locationText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  result: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    marginTop: 18,
    paddingTop: 15,
  },

  nearby: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 12,
  },

  show: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  date: {
    color: '#1ed760',
    fontWeight: 'bold',
    fontSize: 13,
  },

  map: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
  },
});