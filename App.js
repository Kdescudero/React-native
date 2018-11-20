import React, {Component} from 'react';
import { Text, StyleSheet, } from 'react-native';
import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import CategoryList from "./src/videos/containers/CategoryList";
import API from './utils/api'
import Player from "./src/player/containers/player";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from "./store";
import Loading from "./src/sections/components/loading";

export default class App extends Component {
   async componentDidMount(){
      const categoriesList = await API.getMovies();
      store.dispatch({
         type : 'SET_CATEGORY_LIST',
         payload : {
            categoriesList
         }
      });
      const suggestionList = await API.getSuggestion(80);
      store.dispatch({
         type : 'SET_SUGGESTION_LIST',
         payload : {
            suggestionList
         }
      });
   }
   render() {
      return (
          <Provider
              store={store}
          >
             <PersistGate
                 loading={<Loading />}
                 persistor={persistor}
             >
                <Home>
                   <Header />
                   <Player />
                   <Text>Buscador</Text>
                   <CategoryList />
                   <SuggestionList />
                </Home>
             </PersistGate>
          </Provider>
      );
   }
}

const styles = StyleSheet.create({
   container : {
      width : 200,
      height: 200
   },
});
