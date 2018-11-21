import React,{Component, Fragment} from 'react'
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
import Header from "./sections/components/header";
import {connect} from 'react-redux'
import CategoryList from "./videos/containers/CategoryList";
import SuggestionList from "./videos/containers/suggestion-list";
import API from "../utils/api";
import Search from "./sections/components/search";

class AppLayout extends Component{

   async componentDidMount(){
      const categoriesList = await API.getMovies();
      this.props.dispatch({
         type : 'SET_CATEGORY_LIST',
         payload : {
            categoriesList
         }
      });
      const suggestionList = await API.getSuggestion(80);
      this.props.dispatch({
         type : 'SET_SUGGESTION_LIST',
         payload : {
            suggestionList
         }
      });
   }

   render(){
      const {selectedMovie} = this.props;
      return(
          <Fragment>
             {selectedMovie ?
                 <Movie />
                 :
                 <Home>
                    <Header />
                    <Search />
                    <CategoryList />
                    <SuggestionList />
                 </Home>
             }
          </Fragment>
      )
   }
}

function mapStateToProps(state){
   return{ selectedMovie: state.selectedMovie }
}

export default connect(mapStateToProps)(AppLayout)