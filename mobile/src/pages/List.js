import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';

export default function List() {
    const [techs,setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, [])

    return <View />
}