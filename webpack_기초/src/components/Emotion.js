import React from "react";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const divStyled = css`
  font-size: 50px;
  color: red;
`;

const Emotion = () => {
  return (
    <>
      <div css={divStyled}>dasdasds</div>
    </>
  );
};

export default Emotion;
