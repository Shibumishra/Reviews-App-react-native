import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../Screen/About';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
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
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default AboutStack;