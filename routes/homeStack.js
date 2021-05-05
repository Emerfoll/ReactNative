import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OtherTestScreen from "../app/Screens/OtherTestScreen";
import WelcomeScreen from "../app/Screens/WelcomeScreen";


const screens = {
    Home : {
        screen : WelcomeScreen,
    },
    Welcome: {
        screen : OtherTestScreen,
    },
};

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);