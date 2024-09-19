import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const initialUri = 'https://egghunter.in/mainlogin.html';
  const iframeUri = 'https://egghunter.in/iframelogin2.html';
  const [uri, setUri] = useState(initialUri);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => setUri(initialUri)}>
            <Text>login</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => setUri(iframeUri)}>
            <Text>iframe SOP bypass</Text>
          </Pressable>
        </View>
        <View style={styles.webview}>
        <WebView
          source={{ uri }}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
    backgroundColor: '#f9f9f9',
  },
  webview:{
    flex:1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'red',
  },
});
