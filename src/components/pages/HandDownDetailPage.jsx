/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React from "react";
import { useHistory } from "react-router-dom";
import ItemDetailCard from '../organisms/ItemDetailCard';
import BackIcon from "../molecules/BackIcon";

/*
 * ========================================================
 * ========================================================
 *
 *             Component for HandDownDetailPage
 *
 * ========================================================
 * ========================================================
 */
export default function HandDownDetailPage({ chosenItem }) {
  const history = useHistory();
  const goBack = () => {
    history.push('/hmd-list');
  };

  const goChatRoom = (sellerId) => {
    history.push('/chat-room', { params: sellerId });
  };

  return (
    <div className="mobile">
      <BackIcon onClick={goBack} />
      <ItemDetailCard chosenItem={chosenItem} />
    </div>
  );
}
