import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./LandingPageStyle";

const LandingPage = () => {
  return (
    <ImageBackground source={require('./assets/welcome1.jpg')} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.overlay}>
        {/* Text Section */}
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Create recipe in minutes</Text>
          <Text style={styles.subtitle}>
            With just a tap, Transform your ingredients into delicious recipes effortlessly!.
          </Text>
        </View>
        
        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  
  );
};

export default LandingPage;
