import React from 'react'
import ReviewDetails from '../Screen/ReviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    )
}

export default HomeStack;