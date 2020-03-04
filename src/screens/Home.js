import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

export default class Home extends Component{

    static navigationOptions = {
        title:'Home',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {};

        this.cadastrar = this.cadastrar.bind(this);
        this.login = this.login.bind(this);
    }

    cadastrar(){
        this.props.navigation.navigate('Cadastro');
    }

    login(){
        this.props.navigation.navigate('Login');
    }

    render(){
        return(
            <ImageBackground source={require('../../images/coin.jpg')} style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>Fluxo de Caixa</Text>

                    <View style={styles.buttonArea}>
                        <TouchableHighlight underlayColor='#cccccc' style={styles.button} onPress={this.cadastrar}>
                            <Text style={styles.btnText}>Cadastrar</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#cccccc' style={styles.button} onPress={this.login}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:null
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        backgroundColor:'transparent'
    },
    buttonArea:{
        marginTop:30
    },
    button:{
        backgroundColor:'#bfb300',
        height:40,
        margin:10,
        width:200,
        justifyContent:'center'
    },
    btnText:{
        color:'#ffffff',
        textAlign:'center'
    }
});