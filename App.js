import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./src/pages/Task/";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";
import RedefinirSenha from "./src/pages/Redefinir";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title:"Hospede+" }} />
        <Stack.Screen name="NewUser" component={NewUser} options={{headerLeft: null, title:"Hospede+" }} />
        <Stack.Screen name="Task" component={Task} options={{ headerTintColor: "#f92e6a", headerLeft: null, title:"Hospede+" }} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} options={{headerLeft: null, title:"Hospede+"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}