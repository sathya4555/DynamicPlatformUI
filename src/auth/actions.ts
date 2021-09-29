// import ENDPOINTS from 'constants/routes/endpoints';
import { LOAD_AUTH_CONFIG } from "./types";
// import configurationApi from "api/configuration";
//Load User data and claims
export const loadConfig = () => async (dispatch: any, getState: any) => {
  //local present break;
  //store config in session storage
  console.log("inside load config");
  
  const config = await fetchConfig();
  dispatch({ type: LOAD_AUTH_CONFIG, payload: config });
};

const fetchConfig = async () => {
  // await configurationApi
  //   .get(`${ENDPOINTS.CONFIGURATION.COMMUNITY}`)
  //   .then((res) => {
    console.log("inside fetch config");
    
      let config = {
        authority: "https://cognito-idp.region.amazonaws.com/ca-central-1_dcs5wTtEl",
        client_id: "6ao3t42tqdtgrp56ojvauitm25",
        response_type: "code",
        scope: "openid profile email",
        pool_id: "ca-central-1_dcs5wTtEl",
        redirect_uri:"http://localhost:3000/apps",
          // window.location.protocol +
          // "//" +
          // window.location.host +
          // "/" +
          // "auth-callback",
        post_logout_redirect_uri:
          window.location.protocol + "//" + window.location.host,
        silent_redirect_uri:
          window.location.protocol +
          "//" +
          window.location.host +
          "/silent-refresh.html",
      };
      window.sessionStorage.setItem("odic_settings", JSON.stringify(config));
      return config;
    // });
};
