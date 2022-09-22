import React from "react"
import { SafeAreaView, Text } from "react-native"
import Divider from "./components/divider"
import ForecastItem from "./components/item"
import useWeather from "./hook/use-weather"

const Weather = () => {

    const { weather } = useWeather(-25.9773161, -52.9277801)

    return (
        <SafeAreaView>
            <Divider />
            {weather && weather.forecast.map(item => (
                <>
                    <ForecastItem forecast={item}/>
                    <Divider />
                </>
            ))}
        </SafeAreaView>
    )
}

export default Weather