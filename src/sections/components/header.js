import React from 'react';
import {
   Text,
   View,
   Image,
   SafeAreaView,
   StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
   Logo: {
      width      : 80,
      height     : 26,
      paddingVertical : 20,
      resizeMode : 'contain'
   },
});

function Header(props){
   return(
       <View>
          <SafeAreaView>
             <Image source ={{uri : "https://fedesoft.org/wp-content/uploads/2018/03/platzi.jpg"}}
                    style  ={styles.Logo}
             />
          </SafeAreaView>
       </View>
   )
}

export default Header;