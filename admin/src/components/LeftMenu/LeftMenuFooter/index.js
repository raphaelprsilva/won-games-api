/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered By{' '}
        <A
          key="website"
          href="https://elraphael.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raphael Silva
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
