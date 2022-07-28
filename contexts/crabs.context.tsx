import React, {
  createContext,
  Reducer,
  useContext,
  useReducer,
  useState,
} from "react";

interface ICrabsState {
  SURGE: { value: string; percentage: string; bg: string; icon: string }[];
  SUNKEN: { value: string; percentage: string; bg: string; icon: string }[];
  PRIME: { value: string; percentage: string; bg: string; icon: string }[];
  BULK: { value: string; percentage: string; bg: string; icon: string }[];
  CRABOID: { value: string; percentage: string; bg: string; icon: string }[];
  RUINED: { value: string; percentage: string; bg: string; icon: string }[];
  GEM: { value: string; percentage: string; bg: string; icon: string }[];
  ORGANIC: { value: string; percentage: string; bg: string; icon: string }[];
}

export enum ICrabsSingleActionType {
  UPDATE_CRAB = "UPDATE_CRAB",
}

export enum ICrabsBaseActionType {
  UPDATE_STATE = "UPDATE_STATE",
  ERASE_STATE = "ERASE_STATE",
}

interface ICrabsReducerBaseAction {
  type: ICrabsBaseActionType;
  payload: ICrabsState;
}

interface ICrabsReducerSingleAction {
  type: ICrabsSingleActionType;
  payload: {
    crabName: keyof ICrabsState;
    state?: ICrabsState;
  };
}

type ICrabsReducerAction = ICrabsReducerBaseAction | ICrabsReducerSingleAction;

const initialState = {
  SURGE: [],
  SUNKEN: [],
  PRIME: [],
  BULK: [],
  CRABOID: [],
  RUINED: [],
  GEM: [],
  ORGANIC: [],
};

export interface CrabsContextData {
  crabsState: ICrabsState;
  dispatchCrabs: React.Dispatch<ICrabsReducerAction>;
}

function reducer(state: ICrabsState, action: ICrabsReducerAction) {
  switch (action.type) {
    case ICrabsSingleActionType.UPDATE_CRAB:
      return { ...state, [action.payload.crabName]: action.payload.state };
    case ICrabsBaseActionType.UPDATE_STATE:
      return { ...action.payload };
    case ICrabsBaseActionType.ERASE_STATE:
      return { ...initialState };
    default:
      throw new Error();
  }
}

export const CrabsContext = createContext<CrabsContextData>({
  crabsState: initialState,
  dispatchCrabs: () => null,
});

const CrabsProvider = ({ children }: { children?: React.ReactNode }) => {
  const [crabsState, dispatchCrabs] = useReducer(reducer, initialState);

  return (
    <CrabsContext.Provider value={{ crabsState, dispatchCrabs }}>
      {children}
    </CrabsContext.Provider>
  );
};

function useCrabsContext(): CrabsContextData {
  const context = useContext(CrabsContext);

  if (!context) {
    throw new Error("CrabsContext must be used within an CrabsProvider");
  }

  return context;
}

export { CrabsProvider, useCrabsContext };
