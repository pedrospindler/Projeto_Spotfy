import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  interface CardProps {
    title: string;
    image: any;
  }

  const Card = ({ title, image }: CardProps) => {
    return (
      <View style={styles.card}>
        <Image
          source={image}
          style={styles.cardImage}
        />

        <Text style={styles.cardText}>
          {title}
        </Text>
      </View>
    );
  };

  const Card_recente = ({ title, image }: CardProps) => {
    return (
      <View style={styles.card_recente}>
        <Image
          source={image}
          style={styles.cardImage_recente}
        />

        <Text style={styles.cardText_recente}>
          {title}
        </Text>
      </View>
    );
  };

  const Card_ouvidos = ({ title, image }: CardProps) => {
    return (
      <View style={styles.card_ouvidos}>
        <Image
          source={image}
          style={styles.cardImage_ouvidos}
        />

        <Text style={styles.cardText_ouvidos}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

        

          <View style={styles.header}>
            <Text style={styles.title}>Bom Dia</Text>

            <Ionicons
              name="settings-outline"
              size={24}
              color="#ffffff"
            />
          </View>


         

          <View style={styles.cardsContainer}>

            <Card
              title="Cuida do Pet"
              image={require('../../assets/images/cuidadopet.jpg')}
            />

            <Card
              title="DtMF"
              image={require('../../assets/images/DtMF.jpg')}
            />

            <Card
              title="Everlong"
              image={require('../../assets/images/everlong.jpg')}
            />

            <Card
              title="Into It"
              image={require('../../assets/images/intoit.jpg')}
            />

            <Card
              title="Into You"
              image={require('../../assets/images/intoyou.jpg')}
            />

            <Card
              title="It's Raining Like It's The End Of The World"
              image={require('../../assets/images/itsraininglikeitstheendoftheworld.jpg')}
            />

          </View>




          <Text style={styles.title}>
            Tocadas recentemente
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer_recente}
          >

            <Card_recente
              title="I Wanna Be Yours"
              image={require('../../assets/images/iwannabeyours.png')}
            />

            <Card_recente
              title="Me and Your Mama"
              image={require('../../assets/images/meandyourmama.jpg')}
            />

            <Card_recente
              title="Mente Barulhenta"
              image={require('../../assets/images/mentebarulhenta.jpg')}
            />

            <Card_recente
              title="Mystery of Love"
              image={require('../../assets/images/mysteryoflove.jpg')}
            />

            <Card_recente
              title="Purple Rain"
              image={require('../../assets/images/purplerain.jpg')}
            />

            <Card_recente
              title="Snowman"
              image={require('../../assets/images/snowman.jpg')}
            />

          </ScrollView>



          <Text style={styles.title}>
            Suas músicas estão com saudades
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer_ouvidos}
          >

            <Pressable
              onPress={() => router.push('/artist_screen')}
            >
              <View style={styles.card_ouvidos}>

                <Image
                  source={require('../../assets/images/kanye.png')}
                  style={styles.cardImage_ouvidos}
                />

                <Text style={styles.cardText_ouvidos}>
                  Kanye West
                </Text>

              </View>
            </Pressable>


            <Card_ouvidos
              title="Leão"
              image={require('../../assets/images/leao.jpg')}
            />

            <Card_ouvidos
              title="Tous Les Mêmes"
              image={require('../../assets/images/touslesmemes.jpg')}
            />

            <Card_ouvidos
              title="untitled 02 | 06.23.2014."
              image={require('../../assets/images/untitled02.jpg')}
            />

          </ScrollView>


          

          <Pressable
            onPress={() => router.push('/artist_screen')}
          >

            <View style={styles.discoverHeader}>

              <Image
                source={require('../../assets/images/kanye.png')}
                style={styles.discoverArtistImage}
              />

              <View>

                <Text style={styles.discoverSmall}>
                  Descubra mais:
                </Text>

                <Text style={styles.discoverArtist}>
                  Kanye West
                </Text>

              </View>

            </View>

          </Pressable>


          

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer_recente}
          >

            <Card_recente
              title="Runaway"
              image={require('../../assets/images/mbdtf.jpg')}
            />

            <Card_recente
              title="Bound 2"
              image={require('../../assets/images/yeezus.jpg')}
            />

            <Card_recente
              title="Saint Pablo"
              image={require('../../assets/images/lifeofpablo.jpg')}
            />

          </ScrollView>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  content: {
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -15,
  },

  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 40,
    marginBottom: 20,
  },


  

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48.7%',
    height: 60,
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },

  cardImage: {
    width: 60,
    height: 60,
  },

  cardText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },


  

  cardsContainer_recente: {
    paddingRight: 16,
  },

  card_recente: {
    width: 135,
    marginRight: 12,
  },

  cardImage_recente: {
    width: 135,
    height: 135,
  },

  cardText_recente: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },




  cardsContainer_ouvidos: {
    paddingRight: 16,
  },

  card_ouvidos: {
    width: 180,
    marginRight: 12,
  },

  cardImage_ouvidos: {
    width: 180,
    height: 180,
  },

  cardText_ouvidos: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },




  discoverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },

  discoverArtistImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },

  discoverSmall: {
    color: '#b3b3b3',
    fontSize: 14,
  },

  discoverArtist: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 2,
  },

});