import {
  View,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData, MSGRecord } from "../utils/Storage";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export const MessageScreen = () => {
  const [texts, setTexts] = useState<MSGRecord[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadData = async () => {
        const data = await getData();
        setTexts(data);
      };
      loadData();
    }, [])
  );

  const RenderMSG = ({ item }: { item: MSGRecord }) => {
    return (
      <View style={styles.Globe}>
        <Text style={styles.Text}>1: {item.one}</Text>
        <Text style={styles.Text}>2: {item.two}</Text>
      </View>
    );
  };

  if (texts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Aún no hay registros guardados</Text>
      </View>
    );
  }

  return (
    <View style={styles.MessageScreen}>
      <Text style={styles.title}>Mensajes</Text>
      <FlatList
        data={texts}
        renderItem={RenderMSG}
        keyExtractor={(item) => item.id}
      />

      <Pressable
        style={styles.btndelete}
        onPress={async () => {
          Alert.alert(
            "Eliminar",
            "¿Seguro que quieres eliminar todos los registros?",
            [
              { text: "Cancelar", style: "cancel" },
              {
                text: "Eliminar",
                style: "destructive",
                onPress: async () => {
                  await AsyncStorage.clear();
                  setTexts([]);
                },
              },
            ]
          );
        }}
      >
        <Text style={styles.delete}>Limpiar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  MessageScreen: {
    flex: 1,
    backgroundColor: "rgba(52, 132, 163, 1)",
    paddingTop: 50,
  },
  Globe: {
    width: "90%",
    marginTop: 10,
    marginLeft: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
  },
  title: {
    fontWeight: 900,
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  Text: {
    fontSize: 25,
  },
  btndelete: {
    backgroundColor: "#f00",
    width: 90,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
  },
  delete: {
    textAlign: "center",
    fontWeight: 900,
    color: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(61, 61, 61, 1)',
  },
  emptyText: {
    color: "#ffffffff",
    fontSize: 20,

  },
});
