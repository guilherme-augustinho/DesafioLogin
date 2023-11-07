import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { useState } from 'react';


import {Cadastro} from "./Cadastro";
import { Login } from "./Login";
import { Usuarios } from "./Usuarios";

import { UtilsContexts } from './context';


export default function App() {
  
  const Stack = createStackNavigator()

  const [utils, setUtils] = useState({})

  return(
    <NavigationContainer>
      <UtilsContexts.Provider value = {{utils, setUtils}}>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component = {Login} />
          <Stack.Screen name = "Cadastro" component = {Cadastro} />
          <Stack.Screen name = "Usuarios" component = {Usuarios} />
        </Stack.Navigator>
      </UtilsContexts.Provider>
    </NavigationContainer>
  );
}