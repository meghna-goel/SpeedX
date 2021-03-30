import React from 'react';
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 15%;
`;

const Loader = ({loading}) => {
    return (
        <CircleLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={loading}
        />
    )
};

export default Loader;
