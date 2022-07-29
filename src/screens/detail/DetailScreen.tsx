import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigation';

const screenHeight = Dimensions.get("screen").height

interface Props extends StackScreenProps<RootStackParams, "DetailScreen">{}

export const DetailScreen = ({route}:Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <ScrollView>
            <View style={style.imageContainer}>
                <Image
                    source={{uri}}
                    style={ style.posterImage }
                />
            </View>

            <View style={style.titleContainer}>
                <Text style={style.title}>{movie.original_title}</Text>
                <Text style={style.subTitle}>{movie.title}</Text>
            </View>

            <View style={[style.descriptionContainer, style.marginContainer]}>
                <Text style={style.description}>{movie.overview}</Text>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    imageContainer:{
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        
        elevation: 10,
        height: screenHeight * 0.6,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        overflow: 'hidden'
    },
    posterImage:{
        flex: 1,
    },
    titleContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    marginContainer: {
        marginHorizontal: 20
    },
    title:{
        textTransform: 'uppercase',
        fontSize:20,
        fontWeight: 'bold'
    },
    subTitle: {
        textTransform: 'uppercase',
        fontSize:14,
        top: -5
    },
    descriptionContainer:{
        top: 5,
    },
    description: {
        textAlign: 'justify'
    },
});