// import { Provider } from 'react-redux';
// import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import PostsScreen from './src/PostsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PostsScreen" component={PostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
