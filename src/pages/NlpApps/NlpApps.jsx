import React from "react";
import ChatBotImage from '../../assets/images/chatbot.png';
import classes from "./NlpApps.module.scss";

const NlpApps = () => {
  return (
    <div className={classes.NlpApps__Container}>
      <div className={classes.DescriptionWrapper}>
        <div className={classes.TextDesc}>
          <h2 className={classes.DescHeader}>NLP Apps</h2>
          <p className={classes.DescText}>
            Natural Language Processing (NLP) allows machines to break down and
            interpret human language. it's at the core of tools we use every day
            - from translation software, chatbots, spam filters and search
            engines, to grmmer correction software, voice assistants, and social
            media monitoring tools. Start your NLP journey with no-code tools.
          </p>
        </div>
        <div className={classes.ChatBotImageWrapper}>
            <img className={classes.ChatBotImage} src={ChatBotImage} alt="ChatBotImage" />
        </div>
      </div>
      <div className={classes.TabsWrapper}></div>
    </div>
  );
};

export default NlpApps;
