import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

export default class PeoplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(() => {
            axios
                .get('https://randomuser.me/api/?nat=br&results=150')
                .then(response => {
                    const { results } = response.data;
                    this.setState({
                        peoples: results,
                        loading: false,
                    });
                })
        }, 1500)

    }

    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="#7871A2" />
                <PeopleList peoples={this.state.peoples}
                    onPressItem={(pageParams) => {
                        this.props.navigation.navigate('PeopleDetail', pageParams);
                    }} />
            </View >
        );
    }
}
