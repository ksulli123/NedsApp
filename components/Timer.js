import React, { useState } from "react";
import { View, Text } from "react-native";

const Timer = props => {
  //Display in minute, second format
  const getTime = time => {
    return (
      <Text>
        {Math.round(time / 60)}m {time % 60}s
      </Text>
    );
  };

  return (
    <View>
      <Text
        style={{
          marginTop: 28,
          paddingLeft: 10,
          left: 10
        }}
      >
        {getTime(props.remainingTime)}
      </Text>
    </View>
  );
};

export default Timer;
