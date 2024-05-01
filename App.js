import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import GetStarted from "./screens/GetStarted/GetStarted";
import Login from "./screens/Login/Login";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"GetStarted"}
                    component={GetStarted}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"Login"}
                    component={Login}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}