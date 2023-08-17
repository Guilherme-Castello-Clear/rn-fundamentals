import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Primeiro from "./Componentes/Primeiro";
import { Comp1, Comp2 } from "./Componentes/Multi";
import Comp from "./Componentes/Multi";

export default () => {
    
    return (
        <View style={style.App}>
            <Comp/>
            <Comp1/>
            <Comp2/>
        </View>
    )
}

const style = StyleSheet.create({
    
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})