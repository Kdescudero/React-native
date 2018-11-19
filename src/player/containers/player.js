import React, {Component} from 'react';
import Video from "react-native-video";
import {StyleSheet, ActivityIndicator} from "react-native";
import Layout from "../components/layout";

const styles = StyleSheet.create({
   video : {
      position:'absolute',left:0,right:0,bottom:0,top:0
   },
   container:{
      flex: 1, height: 100
   }
});

class Player extends Component {
   state={
      loading: true
   };

   onBuffer = ({isBuffering}) =>{
      this.setState({
         loading: isBuffering
      })
   };

   render(){
      const {loading} = this.state;

      return(
          <Layout
              loading={loading}
              video={
                 <Video
                     source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                     style={styles.video}
                     resizeMode='contain'
                     onBuffer={this.onBuffer}
                 />
              }
              loader={
                 <ActivityIndicator size="large" color="red" />
              }
              controls={
                 <ControlLayout>
                    <PlayPause />
                    <Text>Progress bar | </Text>
                    <Text>Time left | </Text>
                    <Text>fullscreen | </Text>
                 </ControlLayout>
              }
          />
      )
   }
}

export default Player;