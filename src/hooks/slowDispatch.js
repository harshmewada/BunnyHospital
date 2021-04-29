import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

function useSlowDispatch() {
  const olddispatch = useDispatch();

  return (fn, cb) => {
    console.log("fn", fn);

    olddispatch({ type: "SPIN_START" });
    setTimeout(() => {
      olddispatch(fn);
      olddispatch({ type: "SPIN_STOP" });
      cb && cb();
    }, 3000);
  };
}
export default useSlowDispatch;
