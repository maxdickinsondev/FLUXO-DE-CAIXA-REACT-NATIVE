import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import firebase from '../firebase/FirebaseConnection';

export default class Login extends Component{

    static navigationOptions = {
        title:'Login',
        headerStyle:{
            backgroundColor:'#ffff00'
        },
        headerTintColor:'#000000'
    }

    constructor(props){
        super(props);
        this.state = {
            email:'',
            senha:''
        };

        this.entrar = this.entrar.bind(this);

        firebase.auth().signOut();
    }
    
    entrar(){

        if (this.state.email != '' && this.state.senha != ''){

            firebase.auth().onAuthStateChanged((user) => {
                if (user){
                    this.props.navigation.navigate('Interna');
                }
            });

            firebase.auth().signInWithEmailAndPassword(
                this.state.email,
                this.state.senha
            ).catch((error) => {
                alert(error.code);
            });
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>E-mail</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({email:text})}/>

                <Text>Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(text) => this.setState({senha:text})}/>

                <Button title='Entrar' onPress={this.entrar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    input:{
        height:40,
        backgroundColor:'#CCCCCC',
        padding:5,
        marginBottom:10
    }
});