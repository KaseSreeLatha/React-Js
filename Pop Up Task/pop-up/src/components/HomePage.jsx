import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import { useCookies } from 'react-cookie';

const HomePage = () => {
  const [cookies] = useCookies(['firstLogin']);
  const [isFirstLogin, setIsFirstLogin] = useState(false);

  useEffect(() => {
    // Check if it's the user's first login
    const firstLoginCookie = cookies.firstLogin;
    if (firstLoginCookie === undefined) {
      setIsFirstLogin(true);
    }
  }, [cookies]);

  const handleClosePopup = () => {
    //setIsFirstLogin(false);
  };

  return (
    <div>
      {isFirstLogin && <Popup onClose={handleClosePopup} />}
      {!isFirstLogin && <p>This is not your First time login!!!</p>}
    </div>
  );
};

export default HomePage;
