import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import React from "react";
import {COLORS} from './src/colors/colors';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.divider}/>
                    <View style={styles.divider}/>
                    <Text style={styles.title}>
                        Todo <Text style={{fontWeight: "300", color: COLORS.CORNFLOWER_BLUE}}>List</Text>
                    </Text>
                    <View style={{marginVertical: 48}}>
                        <TouchableOpacity>
                            <AntDesign name="plus" size={16} color={COLORS.CORNFLOWER_BLUE}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        backgroundColor: COLORS.CYAN_AQUA,
        height: 1,
        flex: 1,
        alignSelf: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: COLORS.BLACK,
        paddingHorizontal: 64
    }
});
