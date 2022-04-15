import { useReducer } from "react";
import COMMON_STATE from "../local-constants/commonState";

export const ACTION_TYPE = {
  getData: "GET_DATA",
  dataReady: "DATA_READY",
  notFound: "NOT_FOUND",
  reload: "RELOAD_DATA",
  clear: "CLEAR_DATA",
  internalServerError: "INTERNAL_SERVER_ERROR",
};

export const dataInitialState = {
  state: COMMON_STATE.notReady,
  values: [],
};

export function dataReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.dataReady:
      return {
        state: COMMON_STATE.ready,
        values: action.values,
      };
    case ACTION_TYPE.clear:
      return {
        state: COMMON_STATE.notReady,
        values: [],
      };
    case ACTION_TYPE.getData:
      return {
        ...state,
        state: COMMON_STATE.loading,
      };
    case ACTION_TYPE.reload:
      return {
        ...state,
        state: COMMON_STATE.loading,
        values: [],
      };
    case ACTION_TYPE.notFound:
      return {
        ...state,
        state: COMMON_STATE.notFound,
        values: [],
      };
    case ACTION_TYPE.internalServerError:
      return {
        ...state,
        state: COMMON_STATE.internalServerError,
        values: [],
      };
    default:
      throw new Error();
  }
}
