import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const UserCard = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: user.uri }} />
            <Text style={styles.name}>{user.firstName + ' ' + user.lastName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
    },

    name: {
        textTransform: 'uppercase',

    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
        borderRadius: 15
    }

})

export default UserCard;
