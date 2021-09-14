import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label, content }) => {
    return (
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>{label}</Text>
            <Text style={[styles.cell, styles.content]}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 2,
        borderColor: '#F7DDF4',
    },
    cell: {
        fontSize: 16,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
    },
    content: {
        flex: 4,
    }
});

export default Line;