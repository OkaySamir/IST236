import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { REWARDS } from "../data/MenuData";

function RedeemScreen(itemData) {

    const [openModal, setOpenModal] = useState(false);

    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 16,
              borderRadius: 8,
              width: "100%",
              height: "60%",
            }}
          >
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Text style={{ color: "black", justifyContent: "right" }}>
                Close
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "black", fontSize: 18, marginTop: 20 }}>
              Redeem Points For This Reward
            </Text>
            <Text
              style={{ color: "black", fontSize: 16, marginTop: 10 }}
              data={REWARDS}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={renderRewardItem}
              numColumns={1}
            >
              Points: {itemData.item.points}
              Reward: {itemData.item.name}
            </Text>
            <TouchableOpacity>
              <Pressable
                style={{ color: "black", fontSize: 16, marginTop: 10 }}
              >
                Redeem
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
}

export default RedeemScreen;
