import  React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Constant from '../helper/themeHelper';

export default class home extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: Constant.appColor,

    }
});