import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import {MaterialIcons, FontAwesome} from '@expo/vector-icons';


const list = [
    {key: "1", title: "Saved Restaurants", icon: 'bookmark'},
    {key: "2", title: "My Orders", icon: 'shopping-cart' },
    {key: "3", title: "Offers", icon: 'check-circle' },
    {key: "4", title: "Account Settings", icon: 'settings' },
    {key: "5", title: "Payment Profile", icon: 'payment' },
    {key: "6", title: "Help & Support", icon: 'live-help' },
    {key: "7", title: "Logout", icon: 'exit-to-app' },
];

export default function Profile(props) {
    return(
        <View style={styles.container}>
            {/* back logo */}
            <Image source={require("../../assets/profile/title.jpg")} style={{width: '100%', height: 140, opacity: 1}} />

            {/* avatar + name + email */}
            <View style={{flexDirection: 'row', top: -60,  backgroundColor: 'white', marginHorizontal: 24, height: 120, borderWidth: 1, borderColor: '#E7E7E7', elevation: 1 }}>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 100}} >
                    <Image source={require('../../assets/profile/avatar.png')} style={{width: 80, height: 80, borderRadius: 45}} resizeMode='cover' />
                </View>
                <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
                    <Text style={{fontSize: 20, color: '#342B2B'}}>Kistore</Text>
                    <Text style={{color: '#A0A0A0'}}>my@mydomain.com</Text>
                </View>
                <View style={{width: 40, alignItems: 'center', paddingTop: 10}}>
                    <TouchableOpacity>
                        <FontAwesome name="pencil" style={{fontSize: 15}} color="#A0A0A0" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* list */}
            <View  style={{backgroundColor: 'white', top: -34}}>
                {list.map(item => (
                    <TouchableOpacity 
                        key={item.key} 
                        style={{
                            backgroundColor: 'white', 
                            flexDirection: 'row', 
                            alignItems:'center', 
                            marginVertical: 5, 
                            marginHorizontal: 24, 
                            paddingVertical: 5}} 
                        >
                        <MaterialIcons name={item.icon} style={{fontSize: 20}} color="green" />
                        <Text style={{flex: 1, fontSize: 19, marginLeft: 5}}>{item.title}</Text>
                        <MaterialIcons name="navigate-next" style={{fontSize: 20}} color="black" />
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    }
});