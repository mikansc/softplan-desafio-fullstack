import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userListReducer } from "./userDomain/reducers";

const reducer = combineReducers({
  session: userLoginReducer,
  userList: userListReducer,
});

const userInfoFromStorage = localStorage.getItem("@session")
  ? JSON.parse(localStorage.getItem("@session"))
  : null;

const initialState = {
  session: { userInfo: userInfoFromStorage },
  userList: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
