import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Modal, Button } from 'react-native';

export default function App() {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const [userWish, setUserWish] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState('');

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleAskQuestion = () => {
    const randomResponse = getRandomResponse();
    setSelectedResponse(randomResponse);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic 8-Ball</Text>
          </View>
        </View>

        <View>
          <TextInput
            style={styles.textInput}
            placeholder='Ask The Magic 8-Ball a Question'
            onChangeText={setUserWish}
            value={userWish}
          />
        </View>

        <View style={styles.askQuestionContainer}>
          <Pressable
            // Add Android Ripple
            android_ripple={{ color: "#ffffff" }}
            // Style Button When Pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            onPress={handleAskQuestion}
          >
            <View style={styles.askQuestion}>
              <Text style={styles.askQuestionText}>Ask Question</Text>
            </View>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{userWish}</Text>
            <Text style={styles.modalText}>{selectedResponse}</Text>
            <Button title="Close" onPress={handleCloseModal} />
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e144e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  titleBackground: {
    backgroundColor: "black",
    borderWidth: 3,
    padding: 10,
    borderRadius: 60,
    borderBlockColor: "white"
  },
  title: {
    fontSize: 60,
    color: "white",
    padding: 15,
    fontWeight: "bold"
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: '80%',
    backgroundColor: "white"
  },
  askQuestionContainer: {
    flex: 1,
    marginTop: 20,
  },
  pressedButton: {
    opacity: 0.8,
  },
  askQuestion: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderRadius: 15,
  },
  askQuestionText: {
    fontSize: 15,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e144e',
  },
  modalText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});