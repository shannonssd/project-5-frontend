/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./theme";
import { AuthProvider } from "./components/others/store";

// import Pages components
import AuthPage from "./components/pages/AuthPage";
import ChatListPage from "./components/pages/ChatListPage";
import ChatRoomPage from "./components/pages/ChatRoomPage";
import HandDownAddPage from "./components/pages/HandDownAddPage";
import HandDownListPage from "./components/pages/HandDownListPage";
import HandDownDetailPage from "./components/pages/HandDownDetailPage";
import HomePage from "./components/pages/HomePage";
import InterestGroupDetailPage from "./components/pages/InterestGroupDetailPage";
import InterestGroupListPage from "./components/pages/InterestGroupListPage";
import InterestGroupMembersPage from './components/pages/InterestGroupMembersPage';
import InterestGroupAddPage from "./components/pages/InterestGroupAddPage";
import HandMeDownUserPage from "./components/pages/HandMeDownUserPage";

/*
 * ========================================================
 * ========================================================
 *
 *                Component for App
 *
 * ========================================================
 * ========================================================
 */
export default function App() {
  const [chosenItem, setChosenItem] = useState(null);

  return (
    <Router>
      <div>
        <ThemeProvider theme={mainTheme}>
          <AuthProvider>
            <Switch>
              <Route exact path="/">
                <AuthPage />
              </Route>
              <Route exact path="/home">
                <HomePage />
              </Route>
              <Route exact path="/hmd-list">
                <HandDownListPage setChosenItem={setChosenItem} />
              </Route>
              <Route exact path="/hmd-detail">
                <HandDownDetailPage chosenItem={chosenItem} />
              </Route>
              <Route exact path="/hmd-add">
                <HandDownAddPage />
              </Route>
              <Route exact path="/hmd-user">
                <HandMeDownUserPage chosenItem={chosenItem} />
              </Route>
              <Route exact path="/chat-list">
                <ChatListPage />
              </Route>
              <Route exact path="/chat-room">
                <ChatRoomPage />
              </Route>
              <Route exact path="/interest-group-list">
                <InterestGroupListPage />
              </Route>
              <Route exact path="/add-new-interest-group">
                <InterestGroupAddPage />
              </Route>
              <Route exact path="/interest-group-detail">
                <InterestGroupDetailPage />
              </Route>
              <Route exact path="/interest-group-members">
                <InterestGroupMembersPage />
              </Route>
            </Switch>
          </AuthProvider>
        </ThemeProvider>

      </div>
    </Router>
  );
}
