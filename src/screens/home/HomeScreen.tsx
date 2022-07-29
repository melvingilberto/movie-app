import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { useMovies } from './hooks/useMovies';
import { MoviePoster } from '../../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';

interface Props extends StackScreenProps<any, any>{}

export const HomeScreen = ({ navigation } : Props) => {

    const { moviesPlayingNow, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if(isLoading){
        return (
            <View style={{ flex:1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator
                    color="red"
                    size={ 50 }
                ></ActivityIndicator>
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            {/* <MoviePoster
                movie={moviesPlayingNow[0]}
            /> */}
            <Carousel 
                data={moviesPlayingNow}
                renderItem={ () => <MoviePoster movie={moviesPlayingNow[0]} />}
                sliderWidth={350}
                itemWidth={300}
            />
        </View>
    )
}
