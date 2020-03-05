import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {Feather, MaterialIcons} from '@expo/vector-icons';

const {width: screenWidth, height: screenHeight} = Dimensions.get("window");

const bests = [
    {key: "1", title: 'Italian Breakfast Combo', price: '$2.99', thumb: require('../../assets/restaurant/01.png'), orderCnt: 1},
    {key: "2", title: 'Bread & Bacon', price: '$5.99', thumb: require('../../assets/restaurant/01.png'), orderCnt: 1},
];

const populars = [
    {key: "1", title: 'Bread Butter Tost', price: '$4.99', thumb: null, orderCnt: 1},
    {key: "2", title: 'Veg & Cheese Sandwich', price: '$4.99', thumb: null, orderCnt: 1},
    {key: "3", title: 'Italian Breakfast Combo', price: '$2.99', thumb: require('../../assets/restaurant/03.png'), orderCnt: 1},
];

export default function Restaurant(props) {


    const handlePlus = () => {
        alert('plus');
    }

    const handleMinus = () => {
        alert("minus");
    }

    return(
        <View style={styles.container}>
            {/* header */}
            <ImageBackground 
                source={require('../../assets/restaurant/title.png')} 
                style={{width: '100%', height: 160}} >
                <View style={{flexDirection: 'row', marginTop: 24, padding: 20}}>
                    <TouchableOpacity style={{flex: 1}} onPress={() => props.navigation.goBack()}>
                        <MaterialIcons name="arrow-back" style={{fontSize: 22}} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 20}} onPress={()=> alert('book-mark')}>
                        <MaterialIcons name="bookmark" style={{fontSize: 22}} color="white" />
                    </TouchableOpacity>                    
                    <TouchableOpacity onPress={() => alert('cart')}>
                        <MaterialIcons name="shopping-cart" style={{fontSize: 22}} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* info */}
            <View 
                style={{
                    alignItems: 'center',  
                    justifyContent: 'center', 
                    backgroundColor: 'white', 
                    elevation: 1, 
                    width: screenWidth-40, 
                    height: 120, 
                    marginHorizontal: 20,
                    position: 'absolute',
                    top: 90
                }}>
                <View>
                    <Text style={{fontSize: 20}}>Zillion Reasons</Text>
                </View>
                <View style={{marginTop: 5}}>
                    <Text style={{
                        fontSize: 12, 
                        color: '#A0A0A0'}}>
                        Italian, Vegan Snacks
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10,  width: '100%'}}>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10}}>
                        <Feather name="clock" style={{fontSize: 16}} color="#459D72" />
                        <Text style={{fontSize: 12, marginLeft: 2}}>10-20mins</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10}}>
                        <Feather name="clock" style={{fontSize: 16}} color="#459D72" />
                        <Text style={{fontSize: 12, marginLeft: 2}}>$$</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10}}>
                        <Feather name="clock" style={{fontSize: 16}} color="#459D72" />
                        <Text style={{fontSize: 12, marginLeft: 2}}>New York.NY</Text>
                    </View>
                </View>
            </View>

            {/* body */}
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 70}}>
                {/* Best sellers */}
                <View style={{borderBottomWidth: 4, borderBottomColor: '#F2F2F4'}}>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}>Best Sellers</Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 10, marginBottom: 5}}>
                        {bests.map(item => (
                            <View key={item.key} style={{width: 300, backgroundColor: 'white', marginVertical: 10, marginHorizontal: 10}}>
                                <Image source={item.thumb} style={{width: 300, height: 160}} />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontSize: 14, color: '#459D72'}}>{item.title}</Text>
                                        <Text style={{fontSize: 14, color: '#342B2B'}}>{item.price}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <TouchableOpacity 
                                            style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 20, backgroundColor: '#459D72', borderRadius: 5}}
                                            onPress={() => handleMinus()}
                                            >
                                            <Text style={{fontSize: 22, color: 'white'}}>-</Text>
                                        </TouchableOpacity>

                                        <Text style={{marginHorizontal: 10, fontSize: 16}}>{item.orderCnt}</Text>

                                        <TouchableOpacity 
                                            style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 20, backgroundColor: '#459D72', borderRadius: 5}}
                                            onPress={() => handlePlus()}
                                            >
                                            <Text style={{fontSize: 22, color: 'white'}}>+</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                
                            </View>
                        ))}
                    </ScrollView>
                </View>


                {/* Most Popular */}
                <View style={{marginHorizontal: 20}}>
                    {populars.map(item => (
                        <View key={item.key} style={{marginVertical: 10}}>
                            {item.thumb !== null ? (
                                <View style={{alignItems: 'center', position: 'relative', top: -20}}>
                                    <View style={{
                                        backgroundColor: 'white', 
                                        width: 145, 
                                        height: 40, 
                                        alignItems: 'center', 
                                        justifyContent: 'center', 
                                        elevation: 3, 
                                        position: 'relative', 
                                        top: 20}}>
                                        <Text style={{fontSize: 16}}>Food Menu</Text>
                                    </View>
                                    <Image source={item.thumb} style={{width: '100%', height: 207}} resizeMode='cover' />
                                </View>
                            ) : (
                                <View></View>
                            )}

                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                                <View style={{flex: 1}}>
                                    <Text style={{fontSize: 14, color: '#459D72'}}>{item.title}</Text>
                                    <Text style={{fontSize: 14, color: '#342B2B'}}>{item.price}</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <TouchableOpacity 
                                        style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 20, backgroundColor: '#459D72', borderRadius: 5}}
                                        onPress={() => handleMinus()}
                                        >
                                        <Text style={{fontSize: 22, color: 'white'}}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={{marginHorizontal: 10, fontSize: 16}}>{item.orderCnt}</Text>

                                    <TouchableOpacity 
                                        style={{alignItems: 'center', justifyContent: 'center', width: 25, height: 20, backgroundColor: '#459D72', borderRadius: 5}}
                                        onPress={() => handlePlus()}
                                        >
                                        <Text style={{fontSize: 22, color: 'white'}}>+</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>
            


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});