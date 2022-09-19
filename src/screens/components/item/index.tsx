import React from "react"
import { Text, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WeatherItemProps } from "./interface"

const ForecastItem = ({ item }: WeatherItemProps ) => {
    return (
        <View>
            <Text>{item ? item.city : 'nada aqui'}</Text>
            <Text>Terça feira</Text>
            <Text>14/09</Text>
            <Text>19°</Text>
            <Text>24°</Text>
            {/* <FontAwesomeIcon icon={faCloudSun} /> */}
        </View>
    )
}

export default ForecastItem