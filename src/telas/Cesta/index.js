import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/texto';

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        marginTop: 30,
        marginBottom: 8,
        //textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});