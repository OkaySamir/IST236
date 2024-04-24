import { View, Text, FlatList, Modal } from "react-native";
import { REWARDS } from "../data/MenuData";
import RewardsGridTile from "../components/RewardsGridTile";

function RewardsScreen(props) {
  function renderRewardItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("../modals/RedeemScreen.js",{
        name: itemData.item.name,
        points: itemData.item.points,
      });
    }
    return (
      <RewardsGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={REWARDS}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderRewardItem}
        numColumns={2}
      />
    </View>
  );
}

export default RewardsScreen;
