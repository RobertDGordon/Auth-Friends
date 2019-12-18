import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loading = props => {
  return (
    <Loader
      type="ThreeDots"
      color="Blue"
      height={150}
      width={150}
    />
  );
};

export default Loading;