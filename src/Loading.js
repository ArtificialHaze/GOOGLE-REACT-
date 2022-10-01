import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { LoaderContainer } from "./global-styles";

const Loading = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="rgb(231, 55, 55)"
        innerCircleColor="crimson"
        barColor="red"
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderContainer>
  );
};

export default Loading;
