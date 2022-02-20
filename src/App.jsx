/* eslint-disable no-nested-ternary */
/*
 * ========================================================
 *                       Imports
 * ========================================================
 */
import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./theme";
// import views components
import AuthView from "./components/views/AuthView";
import ChatListView from "./components/views/ChatListView";
import ChatView from "./components/views/ChatView";
import HandDownPage from "./components/pages/HandDownPage";
import HomeView from "./components/views/HomeView";
import InterestGroupDetailView from "./components/views/InterestGroupDetailView";
import InterestGroupListView from "./components/views/InterestGroupListView";

/*
 * ========================================================
 *                       App
 * ========================================================
 */

export default function App() {
  const [view, setView] = useState("auth");

  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        {view === "auth" ? (
          <AuthView setView={setView} />
        ) : view === "home" ? (
          <HomeView setView={setView} />
        ) : view === "chatlist" ? (
          <ChatListView setView={setView} />
        ) : view === "chat" ? (
          <ChatView setView={setView} />
        ) : view === "handdown-page" ? (
          <HandDownPage setView={setView} />
        ) : view === "interestgrouplist" ? (
          <InterestGroupListView setView={setView} />
        ) : view === "interestgroupdetail" ? (
          <InterestGroupDetailView setView={setView} />
        ) : (
          <AuthView setView={setView} />
        )}
      </div>
    </ThemeProvider>
  );
}

// auth
// home
// chatlist
// chat
// handdownlist
// handdowndetail
// handdownadd
// interestgrouplist
// interestgroupdetail
