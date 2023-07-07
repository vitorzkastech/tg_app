import React, { startTransition } from "react";
import {View,
        StyleSheet,
        Text,
        StatusBar,
        VirtualizedList
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default function Header(){
    return(
        <View style={styles.container}>
            <Text>Header do App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d6cfe5',
        paddingTop: statusBarHeight,
    }
})