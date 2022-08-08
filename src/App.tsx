import { Box, Typography } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getDatabase, ref, set } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import React, { ReactElement } from 'react';

import FlagsList from './components/FlagsList';
import { featureFlags } from './constants';
import './App.css';

export const Firebase = initializeApp({
  apiKey: 'AIzaSyCSH9Tky6Xrl_aF6e7SynmUog6PTHk1m_c',
  appId: '1:563428540865:web:83b02e51bef921c0422f40',
  authDomain: 'chyron-firebase.firebaseapp.com',
  messagingSenderId: '563428540865',
  projectId: 'chyron-firebase',
  storageBucket: 'chyron-firebase.appspot.com',
});

export const auth = getAuth(Firebase);
export const db = getFirestore(Firebase);

// function writeUserData() {
//   const database = getDatabase();
//   const reference = ref(database, yourDBname);

//   set(reference, {});
// }

// writeUserData();

function App(): ReactElement {
  return (
    <div className="App">
      <Box margin={4} padding={4} style={{ border: '2px solid rgba(0, 0, 0, 0.5)' }}>
        <Typography padding={2} variant="h4" sx={{ color: 'purple' }}>
          LPP-Flags
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          Feature flags can be used to hide features that are not integrated and fully working yet
        </Typography>
        <FlagsList featureFlags={featureFlags} />
      </Box>
    </div>
  );
}

export default App;
