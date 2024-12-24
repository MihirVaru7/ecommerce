

"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePersistLoginQuery } from "@/services/auth/authApi";
import { addUser } from "@/features/auth/authSlice";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { data: userData, isError: userError } = usePersistLoginQuery();
  const user = userData?.data || {};

  useEffect(() => {
    if (!userError) {
      dispatch(addUser(user));
    }
  }, [userData, userError]);

  return <>{children}</>;
};

export default AppWrapper;
