import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './components/context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = ({ dispatch }) => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (email, password) => {
        // authenticate user with API here
        // if authentication is successful, dispatch the LOGIN action
        signIn(email, password)
        navigation.navigate("PostsScreen")
    };

    const { signIn } = React.useContext(AuthContext)
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoComplete='off'
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {/*  // <TouchableOpacity
            //     onPress={
            //         () => handleLogin(email, password)}
            //     style={{ backgroundColor: 'black', width: 100, height: 40, justifyContent: "center", alignItems: "center", margin: 20, borderRadius: 10 }} >

            //     <Text style={{ color: "white" }} >Login</Text>
    // </TouchableOpacity>*/}
            <Button title="Login" onPress={() => handleLogin(email, password)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#fefefe',
        borderRadius: 10
    },
});

export default LoginScreen;
