import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../Screens/HomeScreen";
import { MessageScreen } from "../Screens/MessageScreen";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export function Navegation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Calculadora"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="calculator" size={24} color="blue" />
              ) : (
                <AntDesign name="calculator" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Registros"
          component={MessageScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="comment" size={24} color="blue" />
              ) : (
                <AntDesign name="comment" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
