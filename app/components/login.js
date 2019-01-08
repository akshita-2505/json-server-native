import  React, {Component} from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    ImageBackground,
    Button} from 'react-native';
import Constant from '../helper/themeHelper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class login extends Component {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        header: null,
        titile:"Login"
    };
    constructor(props) {

        super(props);
        this.state = {
            newEmail: "",
            newPass: ""
        }
    }

    check=(Email,Pass)=>
    {
        const {navigate} = this.props.navigation;
        fetch(`http://localhost:3000/StudentDetails?email=${Email}&password=${Pass}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.length >0 )
                {
                    navigate('Home')
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }
    render() {

        return (

            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../image/background.jpeg')}
                                 style={{width: '100%', height: '100%'}}>
                    <View style={styles.setuptext}>
                        <Icon
                            name='user'
                            size={24}
                            color='white'
                        />
                        <TextInput placeholder={"email"} style={styles.textfield}
                                   onChangeText={(newEmail) => {
                                       this.setState({newEmail})
                                   }}/>
                    </View>
                    <View style={styles.setuptext}>
                        <TextInput placeholder={"password"} style={styles.textfield}
                                   secureTextEntry={true}
                                   onChangeText={(newPass) => {
                                       this.setState({newPass})
                                   }}/>
                    </View>
                    <View style={{alignContent: 'center'}}>
                        <Button title={"Login"} onPress={()=>{this.check(this.state.newEmail,this.state.newPass)}}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}
                                          style={{alignItems: 'center'}}>
                            <Text>You haven't account?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Constant.appColor,

    },
    reg:{
        fontSize:35,

    },
    textfield:{
        width:Constant.screenWidth,
        height:50,
        fontSize:20

    },
    setuptext:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:25,
        fontSize:25,
        marginTop:10,
    },
    searchIcon: {
        padding: 10,
        height:10,
        width: 10
    },

});