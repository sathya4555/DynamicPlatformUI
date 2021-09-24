import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

function AuthCallBack(props: any) {
  const authStore = useSelector(
    (state: RootStateOrAny) => state.auth.authStore
  );
  useEffect(() => {
    authStore.completeLogin();
    authStore.loadUser();
  }, []);
  return <></>;
}

export default AuthCallBack;
