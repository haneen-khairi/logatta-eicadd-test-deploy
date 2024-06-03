
import PropTypes from 'prop-types';
import { useState, createContext } from 'react';


export const UserData = createContext();

const UserContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);



  return (
    <UserData.Provider value={{ profileData, setProfileData}}>
      {children}
    </UserData.Provider>
  );
};

export default UserContextProvider;

UserContextProvider.propTypes = {
  children: PropTypes.any,
};
