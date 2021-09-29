export const getUserProfile = () => {
  let userManagerSettings = JSON.parse(sessionStorage.getItem("odic_settings") || '{}');
  let user_specific_info =
    userManagerSettings != null
      ? userManagerSettings.authority + ":" + userManagerSettings.client_id
      : "";
  let oidc_token = sessionStorage.getItem("oidc.user:" + user_specific_info);
  return JSON.parse(oidc_token || '{}').profile ;
};

export const getUserAccessToken = () => {
  let userManagerSettings = JSON.parse(sessionStorage.getItem("odic_settings") || '{}');
  let user_specific_info =
    userManagerSettings != null
      ? userManagerSettings.authority + ":" + userManagerSettings.client_id
      : "";
  let oidc_token = sessionStorage.getItem("oidc.user:" + user_specific_info);
  return JSON.parse(oidc_token || '{}').access_token;
};
