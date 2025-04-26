import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./screens/Home";
import CreateAccount from "./screens/register";

const index = () => {
  return (
    <View>
      <View>
        <Home />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
