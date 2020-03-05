import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, FlatList, TouchableWithoutFeedback, Dimensions} from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import {MaterialIcons, FontAwesome} from '@expo/vector-icons';

import Header from '../share/header';
import Finder from '../share/finder';

const {width: screenWidth} = Dimensions.get("window");
const MARGIN = 20;

const topData = [
    {key: '1', title: 'Time to feast', descript: 'Get 40% OFF on all Online orders today', thumb: require('../../assets/home/top/01.jpeg')},
    {key: '2', title: 'Time to feast2', descript: 'Get 20% OFF on all Online orders today', thumb: require('../../assets/home/top/02.jpeg')},
    {key: '3', title: 'Time to feast3', descript: 'Get 30% OFF on all Online orders today', thumb: require('../../assets/home/top/03.jpeg')},
    {key: '4', title: 'Time to feast4', descript: 'Get 40% OFF on all Online orders today', thumb: require('../../assets/home/top/04.jpeg')},
];

const hotData = [
    {key: '1', title: 'That Breakfast Spot', descript: 'Vegan, Mexicano', star: 4.2, bookmark: false, thumb: require('../../assets/home/01.png') },
    {key: '2', title: 'Hot & Spicy', descript: 'Americal, Indian', star: 4.2, bookmark: true, thumb: require('../../assets/home/02.png') },
    {key: '3', title: 'That Breakfast Spot', descript: 'Vegan, Mexicano', star: 4.2, bookmark: false, thumb: require('../../assets/home/03.png') },
];

const foodData = [
    {key: '1', title: 'Italian Breakfast Combo', descript: 'Zillion Reascons', distance: '10~20mins', bookmark: false, thumb: require('../../assets/home/04.png')},
    {key: '2', title: 'Vegan Hangout', descript: 'Hotel Mayback', distance: '10~20mins', bookmark: true, thumb: require('../../assets/home/05.png')},
];

const TopCarousel = (props) => {
    const carouselRef = useRef(null);
    const [active, setActive] = useState(0);

    const _renderItem = ({item, index}, parallaxProps) => {
        return(
            <View style={{ width: "100%", height: "100%", padding: 1 }}>
                <Image source={item.thumb} style={{width: '100%', height: '100%'}} />
                <Text
                    numberOfLines={2}
                    style={{
                    position: 'relative',
                    top: -100,
                    left: 10,
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'white'
                    }}>
                    {item.title}
                    {`\n`}
                    {item.descript}
                </Text>
            </View>
        );
    };


    return(
        <View style={{height: 180, backgroundColor: 'white'}}>
            <Carousel
                style={{ flex: 1 }}
                ref={carouselRef}
                data={props.data}
                renderItem={_renderItem}
                hasParallaxImages={false}
                firstItem={active}
                onSnapToItem={index => setActive(index)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                // inactiveSlideShift={-18}
            />
            <Pagination
                dotsLength={props.data.length}
                activeDotIndex={active}
                dotStyle={{ 
                    width: 12, 
                    height: 12,
                    margin: -3,
                    borderRadius: 6,
                    // borderWidth: 2,
                    // borderColor: 'white', 
                    backgroundColor: 'white'
                }}
                inactiveDotScale={1}  //중요.. 이거 없으면 디폴트값 0.5 적용됨
                inactiveDotOpacity={0.7}  //비활성 불투명도
                inactiveDotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    borderWidth: 3,
                    borderColor: '#fff',
                    // backgroundColor: 'rgba(255, 255, 255, 0)'
                    backgroundColor: '#fff0'
                }}
                
                containerStyle={{
                    justifyContent: 'flex-start',
                    width: '100%',
                    height: 40,
                    paddingVertical: 1,
                    position: 'absolute',
                    bottom: 0
                }}
            /> 
        </View>
    );
};

const Hot = (props) => {
    return(
        <View style={{flex: 1, marginTop: MARGIN, paddingBottom: 10, borderBottomWidth: 4, borderBottomColor: '#F2F2F4'}}>
            {/* title */}
            <View style={{marginHorizontal: MARGIN}}>
                <Text style={{fontSize: 16}}>Hot Restaurants Around</Text>
            </View>
            
            {/* scroll */}
            <FlatList 
                style={{marginVertical: 5, paddingHorizontal: 10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={props.data}
                renderItem={({item}) => (
                    <View style={{marginHorizontal: 10}}>
                        <View>
                            {/* top-right bookmark */}
                            <View style={{position: 'absolute', zIndex: 1, top: 10, right: 10}}>
                                {item.bookmark ? (
                                    <MaterialIcons name="bookmark" style={{fontSize: 25}} color="#ffdd59" />
                                ): (
                                    <MaterialIcons name="bookmark" style={{fontSize: 25}} color="white" />
                                )}
                            </View>

                            {/* bottom-left star-value */}
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex:1, position: 'absolute', top: 125, left: 5, backgroundColor: '#459D72', width: 50, height: 30, borderRadius: 10}}>
                                <MaterialIcons name="star" style={{fontSize: 16}} color="white" />
                                <Text style={{fontSize: 14, color: 'white'}}>{item.star}</Text>
                            </View>

                            {/* thumbnail */}
                            <TouchableOpacity onPress={() => props.navigation.navigate('Restaurant')}>
                                <Image source={item.thumb} style={{width: 160, height: 160}} resizeMode="cover" />
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: 5}}>
                            <Text style={{fontSize: 14, color: '#459D72'}}>{item.title}</Text>
                            <Text style={{fontSize: 12}}>{item.descript}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const Food = (props) => {
    return(
        <View style={{flex: 1, marginVertical: 10}}>
            {/* title */}
            <View style={{marginHorizontal: MARGIN}}>
                <Text style={{fontSize: 16}}>Food Recommendations for you</Text>
            </View>
            
            {/* scroll */}
            <FlatList 
                style={{marginVertical: 5, paddingHorizontal: 10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={props.data}
                renderItem={({item}) => (
                    <View style={{marginHorizontal: 10}}>
                        <View>
                            {/* top-right bookmark */}
                            <TouchableOpacity style={{position: 'absolute', zIndex: 1, top: 10, right: 10}}>
                                {item.bookmark ? (
                                    <MaterialIcons name="bookmark" style={{fontSize: 25}} color="#ffdd59" />
                                ): (
                                    <MaterialIcons name="bookmark" style={{fontSize: 25}} color="white" />
                                )}
                            </TouchableOpacity>
                        
                            {/* thumbnail */}
                            <Image source={item.thumb} style={{width: 300, height: 160}} resizeMode="cover" />
                        </View>

                        <View style={{marginTop: 5}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                <Text style={{fontSize: 14, color: '#459D72'}}>{item.title}</Text>
                                <Text style={{fontSize: 12}}>{item.distance}</Text>
                            </View>
                            <Text style={{fontSize: 12}}>{item.descript}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default function Home(props) {
    return(
        <View style={styles.container}>
            <Header />
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <Finder />
                <TopCarousel data={topData}  {...props}/>
                <Hot data={hotData} {...props} />
                <Food data={foodData} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 24,
        paddingTop: 24,
        backgroundColor: 'white'
    }, 
});