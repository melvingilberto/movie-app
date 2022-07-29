import React, { useContext } from 'react'
import { ActivityIndicator, Button, Dimensions, Text, View, FlatList, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { useMovies } from './hooks/useMovies';
import { MoviePoster } from '../../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../../components/HorizontalSlider';
import { GradientBackground } from '../../components/GradientBackground';
import { getImageColors } from '../../helpers/getColores';
import { GradientContext } from '../../context/GradientContext';

const { width:windowWith } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{}

export const HomeScreen = ({ navigation } : Props) => {

    const { moviesResponse, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext( GradientContext )
   

    
    const getPosterColors = async( index: number ) => {
        const movie = moviesResponse.moviesPlayingNow[index];
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
        const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
        setMainColors({ primary, secondary })
    }

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
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <View style={{ height:440 }}>
                        <Carousel 
                            data={moviesResponse.moviesPlayingNow}
                            renderItem={ ({ item }) => <MoviePoster movie={ item } />}
                            sliderWidth={windowWith}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ index => getPosterColors( index ) }
                        />
                    </View>

                    <HorizontalSlider title='Popular' movies={moviesResponse.popularMovies} />
                    <HorizontalSlider title='Top Rated' movies={moviesResponse.topRatedMovies} />
                    <HorizontalSlider title='Upcoming' movies={moviesResponse.upComingMovies} />

                    
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
