import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';


const MARGIN = 20;

export default function Header(props) {
    return(
        <View style={{flexDirection: 'row', marginHorizontal: MARGIN, marginVertical: 5}}>
            {/* left */}
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View>
                    <Text style={{ fontSize: 10, color: '#342B2B'}}>DELIVERY TO</Text>
                </View>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="location-on" />
                    <Text style={{fontSize: 14, color: '#459D72'}}>New York, NY</Text>
                    <MaterialIcons name="keyboard-arrow-down" />
                </TouchableOpacity>
            </View>

            {/* right */}
            <TouchableOpacity style={{justifyContent: 'center'}}>
                <MaterialIcons name="shopping-cart" style={{fontSize: 22}} color="#459D72"/>
            </TouchableOpacity>
        </View>
    );
};