import React,{Component} from 'react';
import {YellowBox,TextInput, StyleSheet} from 'react-native';
import API from '../../../utils/api';
import {connect} from 'react-redux';

YellowBox.ignoreWarnings(['Remote debugger']);
console.ignoredYellowBox = ['Remote debugger'];

const styles = StyleSheet.create({
   input:{
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
   }
});

class Search extends Component{
   state = {
      text: ''
   };

   handleSubmit= async ()=>{
      const movies = await API.searchMovie(this.state.text);
      this.props.dispatch({
         type: 'SET_SELECTED_MOVIE',
         payload:{
            movie: movies[0]
         }
      })
   };

   handleChangeText=(text)=> {
      this.setState({ text })
   };

   render(){
      return(
          <TextInput
              placeholder='Busca tu película'
              autoCorrect={false}
              autoCapitalize='none'
              onSubmitEditing={this.handleSubmit}
              onChangeText={this.handleChangeText}
              style={styles.input}
          />
      )
   }
}

export default connect(null)(Search);