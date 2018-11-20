import React, { Component } from 'react';
import {FlatList,} from 'react-native';
import Separator from "../../sections/components/horizontal-separator";
import Empty from "../components/empty";
import Layout from "../components/category-list-layout";
import Category from "../components/category";
import {connect} from 'react-redux';

function mapStateToProps(state) {
   return {
      list : state.categoriesList
   }
}

class CategoryList extends Component{
   renderEmpty   = () =><Empty text="No hay Sugerencias" />;
   itemSeparator = () =><Separator />;
   renderItem = ({item}) => {
      return (
          <Category {...item}/>
      )
   };
   render(){
      const {list} = this.props;
      return(
         <Layout title="Categorias">
            <FlatList
                data={list}
                horizontal
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
         </Layout>
      )
   }
}

export default connect(mapStateToProps)(CategoryList);
