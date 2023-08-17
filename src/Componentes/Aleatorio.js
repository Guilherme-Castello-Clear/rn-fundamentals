import React from "react";
import { Text } from "react-native";

export default props => {

    max = props.max
    min = props.min

    const random = Math.floor(Math.random() * max) + min

    return(
        <Text>{random}</Text>
    )


}