import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipeScreen from "./screens/RecipeScreen";

export default function App() {

  //load custom font
  const [fontLoaded] = useFonts ({
    Violeta: require("./assets/fonts/Violeta.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Beef Wellington",
      text: "Ingredients:\n2 x 400g beef fillets\nOlive oil, for frying\n500g mixture of wild mushrooms, cleaned" +
            "\n1 thyme sprig, leaves only\n500g puff pastry\n8 slices of Parma ham" +
            "\n2 egg yolks, beaten with 1 tbsp water and a pinch of salt\nSea salt and freshly ground black pepper"
    }
  ]);


  // functions for navigation
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add")
  }

  // add a new recipe to the list
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        {
          id: currentID, title: enteredRecipeTitle, text: enteredRecipeText 
        },
      ];
    });
    // auto increment ID
    setCurrentID(currentID + 1)
    //return to recipe screen
    recipeScreenHandler();
  }

  // remove a recipe matching the id of the one clicked
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }


  // determind which screen to load based on current screen
  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipeScreenHandler} />;
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
        />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});