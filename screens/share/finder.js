import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const MARGIN = 20;

export default function Finder(props) {
    return(
        <View style={{flexDirection:'row', alignItems: 'center', height: 120, marginHorizontal: MARGIN, marginBottom:15,  borderWidth: 1, borderColor: '#D0D0D0', height: 36, borderRadius: 5}}>
            <TextInput 
                style={{flex: 1, height: 30, marginVertical: 1, marginLeft: 5, fontSize: 12}}
                placeholder="Search for restaurants, dishes or cuisines"  
            />
            
            <TouchableOpacity style={{marginHorizontal: 10}} >
                <FontAwesome name="search" style={{fontSize: 18}} />
            </TouchableOpacity>
        </View>
    );
};