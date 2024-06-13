import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function TabLiveScreen({ navigation }: RootTabScreenProps<'TabLive'>) {

    const [state, dispatch] = useState([{name: 'mikki'}, {sex: 'female'}])

    return (
        <View style={styles.container}>
            {
            state.map((m: any) => (
                <View key={JSON.stringify(m)}>
                    <Text>{JSON.stringify(m)}</Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
