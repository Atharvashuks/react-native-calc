import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const buttons = [
    "C",
    "DEL",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  const handleInput = (btnPressed) => {
    if (
      btnPressed === "+" ||
      btnPressed === "-" ||
      btnPressed === "*" ||
      btnPressed === "/"
    ) {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        setLastNumber(currentNumber + "=");
        calculate();
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  };

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1];
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+" ||
      lastArr === "."
    ) {
      setCurrentNumber(currentNumber);
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  };

  return (
    <View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((btn) =>
          btn === "=" ||
          btn === "/" ||
          btn === "*" ||
          btn === "-" ||
          btn === "+" ? (
            <TouchableOpacity
              key={btn}
              style={[styles.button, { backgroundColor: "red" }]}
              onPress={() => handleInput(btn)}
            >
              <Text
                style={[styles.textButton, { color: "white", fontSize: 28 }]}
              >
                {btn}
              </Text>
            </TouchableOpacity>
          ) : btn === 0 ? (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor: typeof btn === "number" ? "#fff" : "#ededed",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          ) : btn === "." || btn === "DEL" ? (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor: btn === "." ? "#fff" : "#ededed",
                  minWidth: "37%",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          ) : btn === "C" ? (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor: typeof btn === "number" ? "#fff" : "#ededed",
                  minWidth: "36%",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                {
                  backgroundColor: typeof btn === "number" ? "#fff" : "#ededed",
                },
              ]}
              onPress={() => handleInput(btn)}
            >
              <Text style={styles.textButton}>{btn}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    backgroundColor: "#f5f5f5",
    maxWidth: "100%",
    minHeight: "35%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  resultText: {
    maxHeight: 45,
    color: "#FF6666",
    margin: 15,
    fontSize: 35,
  },
  historyText: {
    color: "#7c7c7c",
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  buttons: {
    width: "100%",
    height: "35%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "24%",
    minHeight: "54%",
    flex: 2,
    borderWidth: 1,
  },
  textButton: {
    color: "red",
    fontSize: 28,
  },
});
