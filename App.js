import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import PostsScreen from './src/PostsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './src/components/context';
const Stack = createNativeStackNavigator();

export default function App() {


  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState('')

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        }

    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)
  const authConntext = useMemo(() => ({

    signIn: async (userName, password) => {
      let userToken
      userToken = null
      if (userName == 'user' && password == 'pass') {
        try {
          userToken = 'abcdef'
          await AsyncStorage.setItem('userToken', userToken)

        } catch (e) {
          console.log(e)
        }

      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken })

    },
    signOut: async () => {
      try {

        await AsyncStorage.removeItem('userToken')

      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGOUT' })
    },


  }), [])

  useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken', userToken)
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000)
  }, [])




  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />

      </View>
    )
  }


  return (
    <AuthContext.Provider value={authConntext}>
      <NavigationContainer>

        <Stack.Navigator>
          {loginState.userToken !== null ? (

            <Stack.Screen name="PostsScreen" component={PostsScreen} />

          ) : (<Stack.Screen name="LoginScreen" component={LoginScreen} />
          )

          }
        </Stack.Navigator>

      </NavigationContainer>
    </AuthContext.Provider>
  );
}
