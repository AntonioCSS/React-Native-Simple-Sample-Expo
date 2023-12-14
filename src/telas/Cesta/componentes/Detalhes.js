import React from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';


import Texto from '../../../componentes/texto';


export default function Detalhes({ nome,logoFazenda,nomeFazenda,descricao,preco, botao }){
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.viewLogo}>
        <Image source={logoFazenda} style={estilos.imagemLogo}></Image>
        <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        textAlign: 'center',
        fontWeight: "bold"
    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginTop: 8,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },

    descricao:{
        color:'#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },

    preco:{
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },

    viewLogo:{
        flexDirection: 'row',
        paddingVertical: 12
    },

    imagemLogo:{
        width:50,
        height: 50,
    },

    botao:{
        marginTop: 40,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },

    textoBotao:{
        textAlign: 'center',
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26
    }
})
