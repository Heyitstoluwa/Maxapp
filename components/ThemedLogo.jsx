import { Image, useColorScheme } from 'react-native';
import React from 'react';

// Image Logo Imports

import DarkLogo from '../assets/logo_light.png';
import LightLogo from '../assets/logo_dark.png';

// Detecting device preference

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'light' ? DarkLogo  : LightLogo
    
    return (
        <Image source={logo} {...props} />
        
    )
}


export default ThemedLogo