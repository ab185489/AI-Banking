import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "../Smiley/smiley.scss";
import Robot from "../Robot/Robot";
import Header from "../Header/Header";
import Message from "../Message/Message";
const alanKey =
  "7d101a696804cf704164c69b97e910692e956eca572e1d8b807a3e2338fdd0dc/stage";

function MainContent() {
  const [smiley, setSmiley] = useState("normal");
  const [displayMsg, setDisplayMsg] = useState("Welcome Arun");
  const [displayCard, setDisplayCard] = useState(false);
  const [card, setCard] = useState({});
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, smile = "normal", content }) => {
        if (command === "Message") {
          setDisplayMsg(content);
        } else if (command === "card") {
          setDisplayCard(true);
          setCard(content);
        }
        setSmiley(smile);
      },
    });
    setSmiley("happy");
  }, []);
  return (
    <>
      <Header />
      {!displayCard ? (
        <>
          <Robot smiley={smiley} />
          <Message message={displayMsg} />{" "}
        </>
      ) : (
        // <Card />
        <></>
      )}
    </>
  );
}

export default MainContent;
