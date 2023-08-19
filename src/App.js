import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Primeiro from "./Componentes/Primeiro";
import { Comp1, Comp2 } from "./Componentes/Multi";
import Comp from "./Componentes/Multi";
import MinMax from "./Componentes/MinMax";
import Aleatorio from "./Componentes/Aleatorio";
import Titulo from "./Componentes/Titulo";
import Botao from "./Componentes/Botao";
import Contador from "./Componentes/Contador";
export default () => {

    return (
        <View style={style.App}>
            <Contador/>
        </View>
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