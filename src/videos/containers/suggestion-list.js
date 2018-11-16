import React,{Component} from 'react';
import {
   FlatList,
   Text,
} from 'react-native'
import SuggestionListLayout from "../components/suggestion-list-layout";
import Empty from "../components/empty";
import Separator from "../components/vertical-separator";

class SuggestionList extends Component{
   renderEmpty = () =><Empty text="No hay Sugerencias" />;
   itemSeparator = () =><Separator />;
   render(){
      const list = [
         {
            title : "Avengers",
            key   : 1
         },
         {
            title : "Pokemon",
            key   : 2
         }
      ];
      return(
          <SuggestionListLayout title="Recomendado para ti">
             <FlatList
                 data={list}
                 ListEmptyComponent={this.renderEmpty}
                 ItemSeparatorComponent={this.itemSeparator}
                 renderItem={({ item }) => (
                     <Text>{item.title}</Text>
                 )}
                 keyExtractor={(item) => item.toString()}
             />

          </SuggestionListLayout>
      )
   }
}

export default SuggestionList;