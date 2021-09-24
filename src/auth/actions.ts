// import ENDPOINTS from 'constants/routes/endpoints';
import { LOAD_AUTH_CONFIG } from "./types";
// import configurationApi from "api/configuration";
//Load User data and claims
export const loadConfig = () => async (dispatch: any, getState: any) => {
  //local present break;
  //store config in session storage
  const config = await fetchConfig();
  dispatch({ type: LOAD_AUTH_CONFIG, payload: config });
};

const fetchConfig = async () => {
  // await configurationApi
  //   .get(`${ENDPOINTS.CONFIGURATION.COMMUNITY}`)
  //   .then((res) => {
      let config = {
        authority: "https://ca-central-1.console.aws.amazon.com/cognito/users/?region=ca-central-1#/pool/ca-central-1_dcs5wTtEl/app-integration-app-settings?_k=2m4zpw",
        client_id: "6ao3t42tqdtgrp56ojvauitm25",
        response_type: "code",
        scope: "email openid profile",
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
