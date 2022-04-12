import PropTypes from "prop-types";
import React, { useEffect, useReducer } from "react";
import UserContext from "./UserContext";
import EnvContext from "./EnvContext";
import { dataReducer, dataInitialState } from "../reducers/data";

const ContextProvider = (props) => {
  const [userProfile, dispatchUserProfile] = useReducer(
    dataReducer,
    dataInitialState
  );

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
        value={{
          userProfile,
          dispatchUserProfile,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </EnvContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContextProvider;
