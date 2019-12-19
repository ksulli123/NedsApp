import React, { useState } from "react";
import { View, Text } from "react-native";

const Timer = props => {
  const getTime = time => {
    return (
      <Text>
        {Math.round(time / 60)}m {time % 60}s
      </Text>
    );
  };

  return (
    <View>
      <Text style={{ alignItems: "baseline" }}>
        {"\n"}
        {getTime(props.remainingTime)}
      </Text>
    </View>
  );
};

export default Timer;
