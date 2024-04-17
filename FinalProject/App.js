import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/colors.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback } from "react";
import MenuScreen from "./screens/MenuScreen.js";
import RewardsScreen from "./screens/RewardsScreen.js";
import UserCodeScreen from "./screens/UserCodeScreen.js";
import AccountScreen from "./screens/AccountScreen.js";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontFamily: "RobotoBold",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cupcake" color={color} size={size} />
          ),
          tabBarLabel: "Menu",
        }}
      />
      <Tabs.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift-outline" color={color} size={size} />
          ),
          tabBarLabel: "Rewards",
        }}
      />
      <Tabs.Screen
        name="UserCode"
        component={UserCodeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
          tabBarLabel: "Code",
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  if (!fontsLoaded || fontError) {
    return null;
  } else {
    return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"   
          >
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
            options={{ 
              headerShown: false, 
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
