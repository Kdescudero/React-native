import React, {Component} from 'react';
import Video from "react-native-video";
import {StyleSheet, ActivityIndicator, Text} from "react-native";
import Layout from "../components/layout";
import ControlLayout from "../components/control-layout";
import PlayPause from "../components/play-pause";

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
      loading : true,
      paused  : false,
   };

   onBuffer = ({isBuffering}) =>{
      this.setState({
         loading: isBuffering
      })
   };

   playPause=()=>{
      this.setState(({paused}) => ({
         paused: !paused
      }))
   };

   render(){
      const {loading,paused} = this.state;

      return(
          <Layout
              loading={loading}
              video={
                 <Video
                     source={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                     style={styles.video}
                     resizeMode='contain'
                     onBuffer={this.onBuffer}
                     paused={paused}
                 />
              }
              loader={
                 <ActivityIndicator size="large" color="red" />
              }
              controls={
                 <ControlLayout>
                    <PlayPause
                        paused={paused}
                        onPress={this.playPause}
                    />
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