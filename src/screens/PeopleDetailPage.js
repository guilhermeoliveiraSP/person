import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {

        const { people } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Image source={{ uri: people.picture.large }}
                    style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <View style={styles.line}>
                        <Text style={styles.cell}>Email:</Text>
                        <Text style={styles.cell}>{people.email}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
    },
    detailContainer: {
        backgroundColor: '#7871A2',
        marginTop: 20,
        elevation: 1.
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 2,
        borderColor: '#F7DDF4',
    },
    cellLabel: {
        fontSize: 25,
        color: '#F7DDF4',
        fontWeight: 'bold',
    },
    cellContent: {
        fontSize: 25,
        color: '#F7DDF4',
    },
})