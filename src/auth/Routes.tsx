import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import AuthCallBack from "./AuthCallBack";
// import CommunityOverview from "screens/superAdmin/communitydashboard";
import { loadConfig } from "./actions";
// import { SocketUtility } from "api/socket";
// import PATHS from "constants/paths/endpoints";



function AuthContainer() {
  const authStore = useSelector(
    (state: RootStateOrAny) => state.auth.authStore
  );
  useEffect(() => {
    authStore.login();
  }, []);

  return <div>     <Route path="/">
  <AuthContainer />
</Route></div>;
}

function Routes(props: any) {
  // SocketUtility.getInstance();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootStateOrAny) => state.auth);
  const isMenuLoading = useSelector(
    (state: RootStateOrAny) => state.menu.isLoading
  );

  useEffect(() => {
    dispatch(loadConfig());
    // dispatch(loadSidebar());
  }, []);

  if (isLoading || isMenuLoading) {
    return null;
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/apps">
            {!isLoading && !isMenuLoading && <AuthCallBack />}
          </Route>
          {/* {window.sessionStorage.getItem("routes") &&
            getComponentAndPathBasedOnRoute()} */}
          <Route path="/">
            <AuthContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;

// function getComponentAndPathBasedOnRoute() {
//   return (
//     <>
//       <Route exact path={PATHS.COMMUNITY.OVERVIEW}>
//         <CommunityOverview />
//       </Route>
//     </>
//   );
// }
