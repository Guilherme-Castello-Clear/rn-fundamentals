import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Primeiro from "./Componentes/Primeiro";
import { Comp1, Comp2 } from "./Componentes/Multi";
import Comp from "./Componentes/Multi";
import MinMax from "./Componentes/MinMax";
import Aleatorio from "./Componentes/Aleatorio";
import Titulo from "./Componentes/Titulo";
import Botao from "./Componentes/Botao";
import Contador from "./Componentes/Contador";
// import Pai from "./Componentes/direta/Pai";
import Pai from './Componentes/indireta/Pai'
import Diferenciar from "./Componentes/Diferenciar";
// import ParImpar from './Componentes/ParImpar.js'
import Membro from "./Componentes/relacao/Membro";
import Familia from "./Componentes/relacao/Familia";
export default () => {

    return (
        <SafeAreaView style={style.App}>
            <Familia>
                <Membro nome="Guilherme" sobrenome="Castello"/>
            </Familia>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})