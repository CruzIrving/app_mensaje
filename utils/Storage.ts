import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = '@message_records'

export type MSGRecord = {
    id: string,
    one: string,
    two: string
}


export const saveData = async (record: MSGRecord) => {
  try {
    const review = await AsyncStorage.getItem(KEY);
    const records: MSGRecord[] = review ? JSON.parse(review) : []; 

    records.push(record)

    await AsyncStorage.setItem(KEY, JSON.stringify(records));
    console.log('Dato guardado correctamente');
  } catch (error) {
    console.log('Error al guardar:', error);
  }
};


export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.log('Error al leer:', error);
    return [];
}
};

// await AsyncStorage.removeItem('Name');

// await AsyncStorage.clear();
