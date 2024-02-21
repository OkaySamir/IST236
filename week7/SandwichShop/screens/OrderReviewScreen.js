import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";


function OrderReviewScreen(props){
    return(
        <View
        style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            },
        ]}
        >
            <View style={styles.titleContainer}>
                <Title>Order Summary</Title>
            </View>

            <View style={styles.subTitleContainer}>
                <Text>Your order has been placed with your order details below</Text>
            </View>

            <View> style={styles.ingredientsContainer}
                <Text style={styles.ingredient}>Sandwich Size:</Text>
                <Text style={styles.subIngredient}>{props.size}</Text>
                <Text style={styles.ingredient}>Bread:</Text>
                <Text style={styles.subIngredient}>{props.size}</Text>
                <Text style={styles.ingredient}>Cheese:</Text>
                <Text style={styles.subIngredient}>{props.size}</Text>
                <Text style={styles.ingredient}>Meats:</Text>
                <Text style={styles.subIngredient}>{props.size}</Text>
                {props.meats.map((item) => {
                    if (item.value) {
                        return (
                            <Text key={item.id} style={styles.subIngredient}>
                                {item.name}
                            </Text>
                        )
                    }
                })}
                <Text style={styles.ingredient}>Sauces:</Text>
                <Text style={styles.subIngredient}>{props.size}</Text>
                {props.sauces.map((item) => {
                    if (item.value) {
                        return (
                            <Text key={item.id} style={styles.subIngredient}>
                                {item.name}
                            </Text>
                        )
                    }
                })}
                <Text style={styles.ingredient}>Vegetables:</Text>
                <Text style={styles.subIngredient}>{props.size}</Text>
                {props.vegetables.map((item) => {
                    if (item.value) {
                        return (
                            <Text key={item.id} style={styles.subIngredient}>
                                {item.name}
                            </Text>
                        )
                    }
                })}
                <Text style={styles.ingredient}>Add Ons:</Text>
                <Text style={styles.subingredient}>{props.toasted ? "Toasted" : ""}Add Ons:</Text>
                <Text style={styles.subingredient}>{props.doubleMeat ? "Double Meat" : ""}Add Ons:</Text>
                <Text style={styles.subingredient}>{props.doubleCheese ? "Double Cheese" : ""}Add Ons:</Text>
                <Text style={styles.subingredient}>{props.mealCombo ? "Meal Combo" : ""}Add Ons:</Text>
            </View>

            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>    
                <Text style={styles.subTitle}>Sales Tax: ${props.price*0.06.toFixed(2)}</Text>    
                <Text style={styles.subTitle}>Total: ${props.price + props.price * 0.06.toFixed(2)}</Text>    
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Return Home</NavButton>    
            </View>    
        </View>
    );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    titleContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500
    }
});