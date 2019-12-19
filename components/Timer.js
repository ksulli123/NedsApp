import React, { useState } from "react";
import { View } from "react-native";

const Timer = props => {
  return (
    <View>
      <Text>{getTime(props.remainingTime)}</Text>
    </View>
  );
};

export default Timer;
