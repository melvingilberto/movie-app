import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/MovieNowPlaying';


interface Props{
    movie: Movie
}

export const MoviePoster = ({ movie}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
        <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
                <Image 
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 420
    },
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