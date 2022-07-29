import React from 'react'
import { Movie } from '../interfaces/MovieNowPlaying'
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies} : Props) => {
  return (
    
    <View style={{height: (title) ? 240 : 248 }}>
        { title && <Text style={{ fontSize:18, fontWeight: 'bold', marginLeft: 10}}> { title }</Text> }
        <FlatList
            data={movies}
            renderItem={ ({ item }) => <MoviePoster movie={ item } width={130} height={200} />}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
