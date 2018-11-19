import React, {Component} from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import CategoryList from "./src/videos/containers/CategoryList";
import API from './utils/api'
import Player from "./src/player/containers/player";

export default class App extends Component {
   state = {
      suggestionsList : [],
      categoryList   : []
   };
   async componentDidMount(){
      const movies = await API.getSuggestion(10);
      const categories = await API.getMovies();
      this.setState({
         suggestionsList : movies,
         categoryList    : categories
      })
   }
   render() {
      const {suggestionsList,categoryList} = this.state;
      return (
          <Home>
             <Header />
             <Player />

             <Text>Buscador</Text>
             <CategoryList
                 list={categoryList}
             />
             <SuggestionList
                 list={suggestionsList}
             />
          </Home>
      );
   }
}

const styles = StyleSheet.create({
   container : {
      width : 200,
      height: 200
   },
});
