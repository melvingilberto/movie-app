import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/MovieNowPlaying';
import { RootStackParams } from '../navigation/Navigation';


interface Props{
    movie: Movie,
    height?: number,
    width?: number
}
type DetailScreenNavigationProp = StackNavigationProp<RootStackParams, any>

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<DetailScreenNavigationProp>();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={ ()=> navigation.navigate("DetailScreen", movie) }
            style={{
                width,
                height,
                marginHorizontal: 5
            }}
        >
            <View style={styles.imageWrapper}>
                <Image 
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageWrapper:{
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        
        elevation: 8,
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
});