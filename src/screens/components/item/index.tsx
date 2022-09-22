import React from "react"
import { Text, View } from "react-native"
import { ForecastDto } from "../../../domain/dto/forecast"

interface Props {
    forecast: ForecastDto
}

const ForecastItem = ( props : Props) => {
    const { forecast } = props;
    return (
        <View>
            <Text>{forecast.weekday}</Text>
        </View>
    )
}

export default ForecastItem