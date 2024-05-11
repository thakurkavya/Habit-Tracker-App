//entry point for routing within the app
import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const index = () => {
  return (
  <Redirect href="/home"/>
  );
};

export default index;

const styles = StyleSheet.create({});

// -> "/"
// it's gonna represent forward slash i.e. means whenever you open or reload the app this is the file that's gonna get opened up