import React from "react";
import { StyleSheet, Image, Platform } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedText type="title">Orion</ThemedText>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
