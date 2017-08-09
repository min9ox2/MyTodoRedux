import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Footer extends Component {

    /*constructor() {
        super();
        this.state = {
            currentFilter: 'INCOMPLETE'
        }
    }*/

    render() {
        let {currentFilter, setFilter, filter, label} = this.props;
		return (
            <Text 
                style={currentFilter === filter ? styles.active : styles.inactive}
                onPress={() => setFilter(filter)}>
                {label}
            </Text>
		);
    }
}

const styles = StyleSheet.create({
    active: {
        fontSize: 20,
		color: 'green'
    },
    inactive: {
        fontSize: 20,
    }
});