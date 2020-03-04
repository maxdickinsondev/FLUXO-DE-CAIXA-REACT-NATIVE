import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import firebase from '../firebase/FirebaseConnection';

export default class Cadastro extends Component{

    static navigationOptions = {
        title:'Cadastro',
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

        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();
    }
    
    cadastrar(){

        if (this.state.email != '' && this.state.senha != ''){

            firebase.auth().onAuthStateChanged((user) => {
                if (user){

                    firebase.database().ref('usuarios').child(user.uid).set({
                        saldo:0
                    });

                    this.props.navigation.navigate('Interna');

                }
            });

            firebase.auth().createUserWithEmailAndPassword(
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

                <Button title='Cadastrar' onPress={this.cadastrar} />
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