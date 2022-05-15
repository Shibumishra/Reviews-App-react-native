import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }) => {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                <Drawer.Screen name="AboutStack" component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerContent;