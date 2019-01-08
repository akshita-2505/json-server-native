import React, {Component} from 'react';
import {StyleSheet,View,Text,ImageBackground,TouchableOpacity,SafeAreaView} from "react-native";
import Constant from '../helper/themeHelper';

export default class App extends React.Component {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        header: null,
    };
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../image/background.jpeg')}
                                 style={{width: '100%', height: '100%'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>

                        <Text style={{fontSize:40,color:'white'}}>Welcome</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Constant.appColor,
        alignItems: 'center',
    }
})
