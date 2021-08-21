import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Button, FlatList } from 'react-native';
import { COLORS } from '../constants'
import UserCard from '../components/UserCard'
import { getUsers } from '../network/api';

const Home = ({ navigation }) => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        loadUsers()
        return (() => {

        })
    }, [])


    const loadUsers = async () => {
        const res = await getUsers('gender=F')
        const { data } = await res
        setUsers(data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={item => item.firstName}
                renderItem={({ item }) => <UserCard user={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    btn: {
        backgroundColor: COLORS.primary
    }

})

export default Home;
