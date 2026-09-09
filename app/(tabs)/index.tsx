import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  interface CardProps {
    title: string;
    image: string;
  }

  const Card = ({ title, image }: CardProps) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
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
          source={{ uri: image }}
          style={styles.cardImage_recente}
        />

        <Text style={styles.cardText_recente}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

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
            title="Descobertas da Semana"
            image="https://picsum.photos/200"
          />
          <Card
            title="Nightstorms"
            image="https://picsum.photos/201"
          />
          <Card
            title="Cool Down"
            image="https://picsum.photos/202"
          />
          <Card
            title="Music for a Workday"
            image="https://picsum.photos/203"
          />
          <Card
            title="Cool Down"
            image="https://picsum.photos/202"
          />
          <Card
            title="Music for a Workday"
            image="https://picsum.photos/203"
          />
        </View>

        <Text style={styles.title}>Suas músicas estão com saudades</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsContainer_recente}
        >
          <Card_recente
            title="Descobertas da Semana"
            image="https://picsum.photos/200"
          />
          <Card_recente
            title="Nightstorms"
            image="https://picsum.photos/201"
          />
          <Card_recente
            title="Cool Down"
            image="https://picsum.photos/202"
          />
          <Card_recente
            title="Music for a Workday"
            image="https://picsum.photos/203"
          />
          <Card_recente
            title="Cool Down"
            image="https://picsum.photos/202"
          />
        </ScrollView>

      </View>
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
    width: 125,
    marginRight: 12,
  },

  cardImage_recente: {
    width: 125,
    height: 125,
  },

  cardText_recente: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
});
