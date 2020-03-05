import React from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';

import Header from '../share/header';
import Finder from '../share/finder';

const MARGIN = 20;
const {width: screenWidth} = Dimensions.get('window');

const data = [
    {key: "1", title: 'Americal', count: 240, thumb: require('../../assets/explore/01.png') },
    {key: "2", title: 'Italian', count: 124, thumb: require('../../assets/explore/02.png') },
    {key: "3", title: 'Chinese', count: 21, thumb: require('../../assets/explore/03.png') },
    {key: "4", title: 'Middle East', count: 240, thumb: require('../../assets/explore/04.png') },
    {key: "5", title: 'Eastern', count: 21, thumb: require('../../assets/explore/05.png') },
    {key: "6", title: 'Mexican', count: 240, thumb: require('../../assets/explore/06.png') },
    {key: "7", title: 'French', count: 21, thumb: require('../../assets/explore/07.png') },
    {key: "8", title: 'Indian', count: 21, thumb: require('../../assets/explore/08.png') },
    {key: "9", title: 'European', count: 21, thumb: require('../../assets/explore/09.png') },
    {key: "10", title: 'Continental', count: 21, thumb: require('../../assets/explore/10.png') }
]

export default function Explore(props) {
    return(
        <View style={styles.container}>
            <Header />
            <Finder />
            <View style={{flex: 1, marginTop: 5, marginHorizontal: MARGIN-4}}>
                {/* title */}
                <View style={{marginBottom: 5}}>
                    <Text style={{fontSize: 16}}>Explore New York</Text>
                </View>

                {/* list */}
                <FlatList 
                    style={{flex: 1}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={{marginHorizontal: 2, marginVertical: 5, backgroundColor: 'white'}}>
                            <TouchableOpacity>
                                <ImageBackground source={item.thumb} style={{alignItems:'center', justifyContent:'center', width: (screenWidth-MARGIN)/2 - 4, height: 100}} resizeMode='cover'>
                                    <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
                                    <Text style={{color:'white'}}>{item.count} Restaurants</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    )}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 24, 
        // backgroundColor: 'yellow'
    }
});