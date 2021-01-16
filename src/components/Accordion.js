import React, { useState } from 'react';
import Chem3D from './Chem3D';

const Accordion = (cid) => {
  const [active , setActive] = useState ("");

  const render = () => {
    const activeSignal = active === "" ? "active" : "" ;
    return (
      <React.Fragment key={cid.cid}>
          <div className = {`title ${active} property`} onClick={() => setActive(activeSignal)}>
            <i className="dropdown icon"></i>
            <span className="menu">3D Structure</span>
          </div>
          <div className={`content ${active}`}>
           <Chem3D cid={cid.cid} />
          </div>
        </React.Fragment>
    );
  }

  return (
    <div className="ui styled accordion">
      {render()}
    </div>
  );
};

export default Accordion;
