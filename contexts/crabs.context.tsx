import React, {
  createContext,
  Reducer,
  useContext,
  useReducer,
  useState,
} from "react";

interface ICrabsState {
  breedCount: number[];
  legend: number[];
  purity: number[];
}

export enum ICrabsActionType {
  UPDATE_STATE = "UPDATE_STATE",
  ERASE_STATE = "ERASE_STATE",
}

interface ICrabsReducerAction {
  type: ICrabsActionType;
  payload: ICrabsState;
}

const initialState = {
  breedCount: [0, 3],
  legend: [0, 6],
  purity: [0, 6],
};

export interface CrabsContextData {
  crabsState: ICrabsState;
  dispatchCrabs: React.Dispatch<ICrabsReducerAction>;
}

function reducer(state: ICrabsState, action: ICrabsReducerAction) {
  switch (action.type) {
    case ICrabsActionType.UPDATE_STATE:
      return { ...action.payload };
    case ICrabsActionType.ERASE_STATE:
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
