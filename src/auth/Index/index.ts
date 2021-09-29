// import PATHS from "constants/paths/endpoints";
// import { getUserProfile } from "utils/userManager/UserManager";
import { UserManager } from "oidc-client";
// import Axios from "axios";

export class AuthenticationStore {
  manager: UserManager;
  user: any;

  constructor() {
    const config = JSON.parse(
      window.sessionStorage.getItem("odic_settings") || "{}"
    );
    console.log(config);
    this.manager = new UserManager(config);
  }

  // authin = async () => {
  //   let res = await Axios.get(
  //     "https://platform.antronsys.com/v1/general/configuration/"
  //   );

  //   // console.log(res.data);

  //   let config = {
  //     authority: res.data.authority,
  //     client_id: res.data.client_id,
  //     response_type: res.data.response_type,
  //     scope: res.data.scope,
  //     filterProtocolClaims: res.data.filterProtocolClaims,
  //     loadUserInfo: res.data.loadUserInfo,
  //     automaticSilentRenew: res.data.automaticSilentRenew,
  //     includeIdTokenInSilentRenew: res.data.includeIdTokenInSilentRenew,
  //     revokeAccessTokenOnSignout: res.data.revokeAccessTokenOnSignout,
  //     validateAccessTokenFromServer: res.data.validateAccessTokenFromServer,
  //     create_user: res.data.create_user,
  //     api_link: res.data.api_link,
  //     api_token: "456787-ecbc-4754-9490-5a5c5a72e04b",
  //     pool_id: res.data.pool_id,
  //     is_username_equals_email: false,
  //     redirect_uri:
  //       window.location.protocol +
  //       "//" +
  //       window.location.host +
  //       "/" +
  //       "auth-callback",
  //     post_logout_redirect_uri:
  //       window.location.protocol + "//" + window.location.host,
  //     silent_redirect_uri:
  //       window.location.protocol +
  //       "//" +
  //       window.location.host +
  //       "/silent-refresh.html",
  //   };

  //   // console.log(typeof config);
  //   // this.manager = new UserManager(config);
  //   return config;
  // };

  // constructor() {
  //   this.manager = new UserManager({});
  //   // this.authin();
  //   var k;
  //   this.authin().then((res) => {
  //     k = res;
  //     this.manager = new UserManager(k);
  //   });

  //   // console.log(k);
  // }

  get isLoggedIn() {
    return this.user != null && this.user.access_token && !this.user.expired;
  }

  loadUser() {
    this.manager.getUser().then((user: any) => {
      this.user = user;
    });
  }

  login() {
    this.manager.signinRedirect().catch((error) => this.handleError(error));
  }

  completeLogin() {
    this.manager
      .signinRedirectCallback()
      .then((user) => {
        this.user = user;
        // this.createDynamicRoutes();
      })
      .catch((error) => this.handleError(error));
  }

  getUserProfile() {

    
    return this.user;
  }

  // createDynamicRoutes = async () => {
  //   this.prepareRoutes([]);
  //   // const userProfile = getUserProfile();
  //   // let referer = window.location.host;
  //   // await Axios.get(
  //   //   `https://platform.antronsys.com/v1/Authorize/GetClaims/${userProfile.email}/${referer}`
  //   // ).then((res) => {
  //   //   let routes = res.data;
  //   // });
  // };

  // prepareRoutes = (routes: any) => {
  //   let vRoutes: any = [];
  //   routes.map((route: any, index: any) => {
  //     if (route.FeatureName.endsWith("_Page")) {
  //       vRoutes.push("/" + route.FeatureName);
  //     }
  //   });
  //   window.sessionStorage.setItem("routes", JSON.stringify(vRoutes));
  //   window.location.href = PATHS.COMMUNITY.OVERVIEW;
  // };

  logout() {
    this.manager.signoutRedirect().catch((error) => this.handleError(error));
  }

  completeLogout() {
    this.manager
      .signoutRedirectCallback()
      .then(() => {
        this.manager.removeUser();
      })
      .then(() => {
        this.user = null;
      })
      .catch((error) => this.handleError(error));
  }

  handleError(error: any) {
    console.error("Problem with authentication endpoint: ", error);
  }
}
