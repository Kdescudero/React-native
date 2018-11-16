import React, {Component} from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";

export default class App extends Component {
   render() {
      return (
          <Home>
             <Header />
             <Text>Buscador</Text>
             <Text>Categorias</Text>
             <SuggestionList />
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
