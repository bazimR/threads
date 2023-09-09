import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import AnimatedLottieView from "lottie-react-native";
export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <AnimatedLottieView
          source={require("../../assets/animations/threadsOg.json")}
          loop
          style={{ width: 90, height: 100, flex: 1 }}
          autoPlay
          resizeMode="cover"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
