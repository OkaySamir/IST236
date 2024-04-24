import MenuItems from "../models/MenuItems";
import Reward from "../models/Rewards";

export const MenuData = [
    new MenuItems(
        '1',
        'Crazy Mason',
        'Build Me Up Buttercup',
        'https://www.thecrazymason.com/wp-content/uploads/2021/05/Buttercup-mar2022-01.png',
        '16.99',
        'Vanilla ice cream, Peanut Butter, Chocolate syrup, Reese’s Peanut Butter Cup, and Mini Reese’s Pieces'
    ),
    new MenuItems(
        '2',
        'Crazy Mason',
        'Have Your Cake & Eat It Too',
        'https://www.thecrazymason.com/wp-content/uploads/2021/05/Have-Cake-2.png',
        '16.99',
        'Crazy Confetti Cake ice cream, Blue Marshmallow Sauce, Cupcake, Rainbow Sprinkles, and a Rainbow Lollipop'
    ),
    new MenuItems(
        '3',
        'Crazy Mason',
        'Sweet Cheesus',
        'https://www.thecrazymason.com/wp-content/uploads/2021/05/Sweet-Cheezus-2.png',
        '16.99',
        'Strawberry Cheesecake ice cream, Strawberry Sauce, Cheesecake, Crushed Graham Cracker ,and Fresh Strawberry'
    ),
    new MenuItems(
        '4',
        'Crazy Mason',
        'Whatever Floats Your Boat',
        'https://www.thecrazymason.com/wp-content/uploads/2021/07/RootBeerFloat.png',
        '10.99',
        'Scooped Vanilla ice cream, Whipped Cream, Cherry, Chocolate Sprinkles, and Choice of Root Beer, Coke, DrPepper, or Fanta'
    ),
    new MenuItems(
        '5',
        'Crazy Mason',
        'Simple Mason',
        'https://www.thecrazymason.com/wp-content/uploads/2021/05/PlainJane.png',
        '8.99',
        'Customer’s choice of ice cream, Whipped Cream, and a Cherry'
    )
];

export const REWARDS = [
    new Reward("1", "Free Topping", "#3ecfe9", "200"), 
    new Reward("2", "Free Sauce", "#3ecfe9", "300"),
    new Reward("3", "Free Single Scoop", "#e9bb3e", "600"),
    new Reward("4", "Free Premium Topping", "#e9bb3e", "600"),
    new Reward("4", "Free Double Scoop", "#e97d3e", "900"),
    new Reward("5", "Free Mason Jar", "#e97d3e", "950"),
    new Reward("6", "Free Simple Milkshake", "#e93e3e", "1100"),
    new Reward("7", "Free Crazy Mason Milkshake", "#e93e3e", "1600"),
    new Reward("8", "Free Crazy Mason Shirt", "#3ee93e", "2000"),
];
