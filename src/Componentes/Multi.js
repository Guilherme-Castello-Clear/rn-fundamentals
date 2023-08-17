import React from 'react'
import { Text } from 'react-native'

import Style from './estilo'


function Comp() {
    return <Text style={Style.fontG}>Comp Principal</Text>
}

function Comp1() {
    return <Text style={Style.fontG}>Comp 1</Text>
}

function Comp2() {
    return <Text style={Style.fontG}>Comp 2</Text>
}

export default Comp
export { Comp1, Comp2 }