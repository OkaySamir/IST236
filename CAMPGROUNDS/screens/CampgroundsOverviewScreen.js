import { useLayoutEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { CAMPGROUNDS } from "../data/dummy-data";
import { STATES } from "../data/dummy-data";
import CampgroundItem from "../components/CampgroundItem";

function CampgroundsOverviewScreen(props) {
  const stateid = props.route.params.stateid;

  useLayoutEffect(() => {
    const state = STATES.find((state) => state.id === stateid);
    props.navigation.setOptions({ title: state ? state.name : null });
  }, [stateid, props.navigation]);

  const displayedCampgrounds = CAMPGROUNDS.filter((campgroundItem) => {
    return campgroundItem.stateId === stateid;
  });

  function renderCampgroundItem(itemData) {
    const campgroundItemProps = {
        name: itemData.item.name,
        imageUrl: itemData.item.imageUrl,
        numSites: itemData.item.numSites,
        foundedYear: itemData.item.foundedYear,
        rating: itemData.item.rating,
        listIndex: itemData.index
    }
    return <CampgroundItem {...campgroundItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedCampgrounds}
        keyExtractor={(item) => item.id}
        renderItem={renderCampgroundItem}
      />
    </View>
  );
}

export default CampgroundsOverviewScreen;

const styles = StyleSheet.create({
    flex: 1,
    padding: 16
})