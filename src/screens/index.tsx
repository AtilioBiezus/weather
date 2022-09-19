import React from "react"
import { SafeAreaView, Text } from "react-native"
import Divider from "./components/divider"
import ForecastItem from "./components/item"

const Weather = () => {
    return (
        <SafeAreaView>
            <Text>Oi</Text>
            <Divider />
            <ForecastItem />
        </SafeAreaView>
    )
}

export default Weather