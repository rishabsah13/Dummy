import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const PostsScreen = ({ dispatch, isLoggedIn }) => {
    const [posts, setPosts] = useState([]);
    const navigation = useNavigation()
    const handleLogout = () => {
        navigation.navigate("LoginScreen")
    };

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data;
            setPosts(posts);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <ScrollView style={styles.container}>
            <Button title="Logout" onPress={handleLogout} />
            {posts.map((post) => (
                <View key={post.id} style={styles.post}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.body}>{post.body}</Text>
                    <Text style={styles.user}>{`by User ${post.id}`}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    post: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    body: {
        marginTop: 5,
    },
    user: {
        marginTop: 5,
        color: '#888',
    },
});



export default PostsScreen
