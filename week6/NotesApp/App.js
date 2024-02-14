import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    noteFont: require("./asstes/fonts/Note.tff"),
    PapernotesFont: require("./asstes/fonts/Papernotes.tff"),
    PapernotesFont: require("./asstes/fonts/Papernotes.tff"),
    PapernotesFont: require("./asstes/fonts/Papernotes.tff"),
  })

  const [currentScreen, setCurrentScreen] = useState("home")
  const [currentID, setCurrentID] = useState(3);
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner"
    }
  ]);

  function homeScreenHandler () {
    setCurrentScreen("home")
  }

  function notesScreenHandler () {
    setCurrentScreen("notes")
  }

  function addNotesScreenHandler () {
    setCurrentScreen("add")
  }

  function addNoteHandler(enteredNoteTitle, enteredNoteText){
    setCurrentNotes((currentNotes) => {
      return [...currentNotes, {id: currentID,
                                title:enteredNoteTitle,
                                text: enteredNoteText}
              ];
    });
    setCurrentID(currentID + 1);
    notesScreenHandler();
  }

  function deleteNoteHandler (id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => {
        item.id !== id;
      });
    });
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />;

  if (currentScreen === "add"){
    screen = <AddNotesScreen onNext={homeScreenHandler} />
  }

  if (currentScreen === "notes"){
    screen = <NotesScreen onNext={addNotesScreenHandler} />
  }

  return (
  <>
  <StatusBar style='auto' />
  <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
