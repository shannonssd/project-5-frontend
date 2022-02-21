import React, { useState } from 'react';
import HandDownAddView from '../views/HandDownAddView';
import HandDownDetailView from '../views/HandDownDetailView';
import HandDownListView from '../views/HandDownListView';

function HandDownPage({ setView }) {
  const [chosenItem, setChosenItem] = useState(null);
  const [handDownView, setHandDownView] = useState('handdownlist');

  return (
    <div>
      {handDownView === 'handdownlist'
      && (
      <HandDownListView
        setView={setView}
        handDownView={handDownView}
        setHandDownView={setHandDownView}
        setChosenItem={setChosenItem}
      />
      )}

      {handDownView === 'handdowndetail'
      && (
        <HandDownDetailView
          chosenItem={chosenItem}
          setHandDownView={setHandDownView}
        />
      )}

      {handDownView === 'handdownadd' && (
        <HandDownAddView setHandDownView={setHandDownView} />
      )}

    </div>
  );
}

export default HandDownPage;
