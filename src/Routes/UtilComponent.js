import React from "react";
import LoadingFullPage from "../components/Loading/LoadingFullPage";
import useIsLoading from "../hooks/useIsLoading";

const UtilComponent = () => {
  const isLoading = useIsLoading();
  return <div>{isLoading && <LoadingFullPage />}</div>;
};

export default UtilComponent;
