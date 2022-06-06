import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const bgImage = require("./assets/mainBG.jpg");
const bgImageTwo = require("./assets/secondBG.jpg");
const dpImage = require("./assets/Waxx-DP.png");

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={styles.image}
      blurRadius={30}
    >
      <ImageBackground
        source={bgImageTwo}
        resizeMode="cover"
        style={styles.imageTwo}
        blurRadius={30}
      >
        <View
          style={{
            flex: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={dpImage}
            style={{
              width: 200,
              height: 200,
              borderColor: "darkgrey",
              borderRadius: 100,
              borderWidth: 5,
            }}
          />
        </View>
        <View
          style={{
            flex: 50,
            backgroundColor: "#fff",
            paddingHorizontal: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              textAlign: "center",
              paddingVertical: 50,
            }}
          >
            Anthony Bassaw
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Some Quick Example Text to build a simple react native prifile for
            the magic programe. thank you :)
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Entypo name="facebook-with-circle" size={30} color="#f37820" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="twitter-with-circle" size={30} color="#f37820" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name="google-plus-official"
                size={30}
                color="#f37820"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="web" size={30} color="#f37820" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="behance" size={30} color="#f37820" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            paddingTop: 2,
            justifyContent: "center",
            position: "absolute",
            alignSelf: "center",
          }}
        >
          <AntDesign name="checkcircle" size={50} color="#f37820" />
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageTwo: {
    flex: 100,
    justifyContent: "center",
    height: 700,
    width: 350,
    position: "absolute",
    alignSelf: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default App;
