import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = ({ dispatch }) => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // authenticate user with API here
        // if authentication is successful, dispatch the LOGIN action
        navigation.navigate("PostsScreen")
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
});

export default LoginScreen;
