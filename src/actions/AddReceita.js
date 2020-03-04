import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

import firebase from '../firebase/FirebaseConnection';

export default class AddReceita extends Component{

    static navigationOptions = {
        title:'Adicionar Receita'
    }

    constructor(props){
        super(props);
        this.state = {
            valor:''
        };

        this.add = this.add.bind(this);
    }

    add(){
        if (this.state.valor != ''){
            
            let uid = firebase.auth().currentUser.uid;

            let key = firebase.database().ref('historico').child(uid).push().key;

            let user = firebase.database().ref('usuarios')
            .child(firebase.auth().currentUser.uid);

            firebase.database().ref('historico').child(uid).child(key).set({
                type:'receita',
                valor:this.state.valor
            });

            
            user.once('value').then((snapshot) => {

                let saldo = snapshot.val().saldo;
                saldo += parseFloat(this.state.valor);

                user.set({
                    saldo:saldo
                });

                this.props.navigation.goBack();
            });

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Quanto você quer adicionar?</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.valor}
                    autoFocus={true}
                    onChangeText={(value) => this.setState({valor:value})}
                />

                <View style={styles.botoesArea}>
                    <TouchableHighlight underlayColor='#CCCCCC' style={styles.buttonStyle} onPress={this.add}>
                        <Text style={styles.textButton}>Adicionar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    input:{
        height:40,
        backgroundColor:'#DDDDDD',
        marginTop:20,
        marginBottom:20
    },
    botoesArea:{
        alignItems:'center'
    },
    buttonStyle:{
        height:40,
        width:100,
        borderWidth:0.5,
        borderRadius:10,
        padding:8,
        backgroundColor:'#bfb300'
    },
    textButton:{
        textAlign:'center'
    }
});