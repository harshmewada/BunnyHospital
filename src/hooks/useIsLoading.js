import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function useIsLoading() {
  const isLoading = useSelector((state) => state.util.isLoading);

  return isLoading;
}
export default useIsLoading;
