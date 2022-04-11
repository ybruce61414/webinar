import PropTypes from "prop-types";
import React, { useEffect, useReducer } from "react";
import UserContext from "./UserContext";
import EnvContext from "./EnvContext";

const ContextProvider = (props) => {
  // const [userProfile] = useReducer(dataReducer, {
  //   state: 'Ready',
  //   values: props.profile,
  // });
  //
  // const {
  //   state: storedData,
  //   saveData,
  //   deleteSpecificStoredData,
  // } = useStorageData();
  //
  // useEffect(() => {
  //   const apiHelper = new ApiHelper();
  //   apiHelper.errors = errors.general;
  // }, []);

  return (
    <EnvContext.Provider
      value={
        {
          // API_HOST: config.api.host,
          // ERRORS: errors,
        }
      }
    >
      <UserContext.Provider
        value={
          {
            // userProfile,
            // allowPagePermission: props.allowPagePermission,
          }
        }
      >
        {props.children}
        {/*<AppContextProvider>{props.children}</AppContextProvider>*/}
      </UserContext.Provider>
    </EnvContext.Provider>
  );
};
ContextProvider.propTypes = {
  profile: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default ContextProvider;
