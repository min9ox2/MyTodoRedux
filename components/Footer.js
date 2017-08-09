import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import FilterLinkContainer from '../containers/FilterLinkContainer';

export default class Footer extends Component {

    render() {
        //let {currentFilter, setFilter} = this.props;
		return (
            <View style={styles.container}>
                <FilterLinkContainer style={styles.filterStyle} filter='ALL' label='All' />
                <FilterLinkContainer style={styles.filterStyle} filter='INCOMPLETE' label='Incomplete' />
                <FilterLinkContainer style={styles.filterStyle} filter='COMPLETE' label='Complete' />
            </View>
		);
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        /*flexDirection: 'row',
        alignItems: 'center'*/
    },
    filterStyle: {
        padding: 20
    }
});