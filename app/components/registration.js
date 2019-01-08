import  React, {Component} from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Animated,
    Button} from 'react-native';
import Constant from '../helper/themeHelper';
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

class registration extends Component {
    constructor(props){

        super(props);
        this.state={
            name:"",
            email:"",
            pass:"",
            data:[]
        }
    }
    // registerApi=()=>
    // {
    //     const {navigate} = this.props.navigation;
    //     fetch('http://localhost:3000/StudentDetails', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             email: this.state.email,
    //             password: this.state.pass,
    //
    //         }),
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             //return responseJson;
    //             this.setState({data:responseJson});
    //             navigate('Home')
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }
    emailValidation= () =>
    {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true) {
        }
    }
    validation=()=>{
        if((this.state.name && this.state.email && this.state.pass) === undefined){

        }
    }
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={{backgroundColor:'#d9b3ff'}}>
                <View style={{alignItems:'center',marginTop:25}}><Text style={{fontSize:25}}>Registration</Text></View>
                    <View style={styles.container}>

                        <View style={{alignItems:"center"}}/>

                        <Text style={{fontSize:20}}>Name</Text>
                        {/*<AnimatedInput placeholder='User name' underlineColorAndroid='transparent' style={styles.text} />*/}
                        <View style={styles.setuptext}>
                            <TextInput placeholder={"name"}
                                       style={styles.textfield}
                                       isRequired={true}
                                       onChangeText={(name)=>{this.setState({name})}}/>
                        </View>
                        <Text style={{fontSize:20}}>Email</Text>
                        <View style={styles.setuptext}>
                            <TextInput placeholder={"email"}
                                       style={styles.textfield}
                                       isRequired={true}
                                       onChangeText={(email)=>{this.setState({email})}}/>
                        </View>
                        <Text style={{fontSize:20}}>Password</Text>
                        <View style={styles.setuptext}>
                            <TextInput placeholder={"password"}
                                       style={styles.textfield}
                                       secureTextEntry={true}
                                       isRequired={true}
                                       onChangeText={(pass)=>{this.setState({pass})}}/>
                        </View>
                        <Text style={{fontSize:20}}>Confirm password</Text>
                        <View style={styles.setuptext}>
                            <TextInput placeholder={"confoirm password"}
                                       style={styles.textfield}
                                       secureTextEntry={true}
                                       isRequired={true}
                                       onChangeText={(cpass)=>{this.setState({cpass})}}/>
                        </View>
                        <View style={{alignContent:'center'}}>
                               <Button title={"Submit"} onPress={()=> navigate('Home')}/>
                        </View>
                </View>
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
    },
    textfield:{
        width:Constant.screenWidth,
        height:50,
        fontSize:20
    },
    text: {
        width: 250,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
    },
    setuptext:{
        borderWidth:1,
        borderRadius:25,
        fontSize:17,
        marginBottom:10,
    }
});
export default registration;
