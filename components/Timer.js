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
          textAlignVertical: "center",
          textAlign: "center"
        }}
      >
        {"\n"}
        {getTime(props.remainingTime)}
      </Text>
    </View>
  );
};

export default Timer;
