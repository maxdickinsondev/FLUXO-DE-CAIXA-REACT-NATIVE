import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import firebase from '../firebase/FirebaseConnection';
import HistoricoItem from '../components/HistoricoItem';

export default class Interna extends Component{

    static navigationOptions = {
        title:'Home',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {
            saldo:0,
            historico:[]
        };

        this.addReceita = this.addReceita.bind(this);
        this.addDespesa = this.addDespesa.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user){

                firebase.database().ref('usuarios').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.saldo = snapshot.val().saldo;
                    this.setState(state);
                });
                
            }else{
                this.props.navigation.navigate('Home');
            }
        });
    }

    addReceita(){
        this.props.navigation.navigate('AddReceita');
    }

    addDespesa(){
        this.props.navigation.navigate('AddDespesa');
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.saldoArea}>
                    <Text style={styles.saldo}>Saldo: R$ {this.state.saldo} </Text>
                </View>

                <FlatList
                    data={this.state.historico}
                    style={styles.historico}
                    renderItem={(item) => <HistoricoItem data={item} />} 
                />

                <View style={styles.botoesArea}>
                    <TouchableHighlight underlayColor='#CCCCCC' style={styles.buttonStyle} onPress={this.addReceita}>
                        <Text style={styles.textButton}>+ Receita</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#CCCCCC' style={styles.buttonStyle} onPress={this.addDespesa}>
                        <Text style={styles.textButton}>+ Despesa</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    saldoArea:{
        paddingTop:40,
        paddingBottom:20,
        backgroundColor:'#DDDDDD'
    },
    saldo:{
        textAlign:'center',
        fontSize:25
    },
    historico:{
        flex:1
    },
    botoesArea:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#DDDDDD'
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