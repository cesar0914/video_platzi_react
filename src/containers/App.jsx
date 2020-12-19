import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';




const App = () => {
    
    const initalState =  useInitialState(API);   
    return (
        <div className = 'App'>
             <Header />
             <Search />
            {
                // si el arreglo miLista[] no tiene información no se muestra en pantalla
                initalState.mylist.length > 0 && 
                <Categories title='Mi lista'>
                    <Carousel>
                    {
                        initalState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item} />      
                        )                       
                    }                                   
                    </Carousel>
                </Categories>  
            }
            
            <Categories title='Tendencias'>
                <Carousel>
                    {
                        initalState.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />      
                        )                       
                    }                                                      
                </Carousel>
            </Categories>  

            <Categories title='Originales de platzi video'>
                <Carousel>
                    {
                        initalState.originals.map(item =>
                            <CarouselItem key={item.id} {...item} />      
                        )   
                    }                                 
                </Carousel>
            </Categories>  
             
             <Footer />
        </div>
    );
}

export default App;
;