import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import { saveData } from "../utils/Storage";

export const HomeScreen = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");


  const Enviar = async () => {
    if (input1.trim() === "" || input2.trim() === "") {
      Alert.alert("Error", "No puedes enviar registros vacios");
      return;
    } else {

      const id = Math.random().toString();
      const Message = {
        id: id,
        one: input1,
        two: input2,
      };
      Alert.alert("Operacion exitosa", "Se han guardado los mensajes correctamente")
      setInput1('')
      setInput2('')
      await saveData(Message);
    }
  };

  return (
    <View style={styles.home}>
      <Text style={styles.title}>Envia un mensaje</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el texto 1"
        value={input1}
        onChangeText={setInput1}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el texto 2"
        value={input2}
        onChangeText={setInput2}
      ></TextInput>
      <Pressable style={styles.btn} onPress={() => Enviar()}>
        <Text style={styles.btnT}>Enviar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "rgba(46, 168, 118, 1)",
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
    textAlign: "center",
    margin: 100,
  },
  input: {
    width: 300,
    height: 60,
    borderColor: "#000",
    borderWidth: 2,
    borderStyle: "solid",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 10,
    padding: 15,
  },
  btn: {
    padding: 20,
    backgroundColor: "rgba(61, 136, 247, 1)",
    width: 90,
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
  },
  btnT: {
    color: "#fff",
    fontWeight: 900,
    textAlign: "center",
  },
});
