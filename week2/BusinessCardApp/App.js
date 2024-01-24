import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("./assets/images/Business.png")}/>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.text}>Samir Molina</Text>        
        <Text style={styles.text}>Computer Programming Major</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("mailto: samir.emolinad@gmail.com")}>samir.emolinad@gmail.com</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("tel: +18437427888")}>(843) 742-7888</Text>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4FFF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
    paddingTop: 40,
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "black"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 10
  }
});
