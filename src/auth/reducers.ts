import { USER_LOADING, USER_LOADED, LOAD_AUTH_CONFIG } from "./types";
import { AuthenticationStore } from "./Index/index";

const initialState = {
  isLoading: true,
  config: null,
  authStore: null,
};

export const authReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      const authorizedSidebarItems = filterSearchItems(
        state.authStore,
        action.payload
      );
      return {
        ...state,
        isLoading: false,
        sidebarItems: authorizedSidebarItems,
      };
    case LOAD_AUTH_CONFIG:
      return {
        ...state,
        isLoading: false,
        config: action.payload,
        authStore: new AuthenticationStore(),
      };
    default:
      return state;
  }
};

//filter sidebar items according to authorized user
const filterSearchItems = (sidebarItems: any, payload: any) => {
  var map = new Map();
  payload.forEach((element: any) => {
    map.set("/" + element.FeatureKey, element.Operation);
  });
  filterSearchItemRecursively(sidebarItems, map);
  return [...sidebarItems];
};

const filterSearchItemRecursively = (sidebarItems: any, map: any) => {
  for (let index = 0; index < sidebarItems.length; index++) {
    const element = sidebarItems[index];
    if (!map.get(element.route)) {
      element.isDeleted = true;
    }
    if (element.children) {
      filterSearchItemRecursively(element.children, map);
    }
  }
};
