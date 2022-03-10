import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#696664",
    secondary: '#343434',
    accent: '#343434',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#696664"
}


export const SIZES = {
    base: 10,
    width,
    height
}