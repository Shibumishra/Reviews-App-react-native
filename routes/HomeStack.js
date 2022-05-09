import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screen/Home';
import ReviewDetails from '../Screen/ReviewDetails';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;