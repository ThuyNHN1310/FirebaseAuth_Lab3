import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash.png")}
        style={styles.backgroundImage}
      >
        

        <View style={styles.buttons}>
          <Button
            title="Sign in"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Sign In")}
          />
          <Button
            title="Sign up"
            type="outline"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Sign Up")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width:'100%',
    height:'100%',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
    flex: 1,
    top:250,
    alignItems: "center",
    left:25,
    flexDirection: "row",
    
  },

  button: {
    marginTop: 10,
    backgroundColor:"#22092C",
    borderRadius: 50,
    width: 100,
    height: 100,
    marginLeft:50,
    

  },
});

export default WelcomeScreen;
