import React from 'react';
import Video from 'react-native-video';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <Video
        source={{
          uri:
            'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        }}
        resizeMode="cover"
        controls={true}
        style={styles.backgroundVideo}
      />

      <Video
        source={{
          uri: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8',
        }}
        resizeMode="cover"
        controls={true}
        style={styles.backgroundVideo}
      />
      <Video
        source={{
          uri:
            'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
        }}
        controls={true}
        resizeMode="contain"
        style={styles.backgroundVideo}
      />
    </>
  );
};
var styles = StyleSheet.create({
  backgroundVideo: {
    height: 400,
    flex: 1,
    margin: 8,
  },
});
export default App;
