import React from 'react';
import Chem3D from './Chem3D';

const ChemItem = (res) => {
  return (
    res.res.foundChems.map((chem) => {
      return(
        <div key={chem.id} className="item">
          <div className="ui small image">
            <img src={"data:image/png;base64, "+chem.img} alt="error" />
          </div>
          <div className="content">
            <div className="header">{chem.commonName}</div>
              <div className="meta">
                <span className="price">{'Masa:'+ chem.averageMass}</span>
                <span className="stay"></span>
              </div>
              <div className="price">
                <span className="price">{chem.description.data.InformationList === undefined ?  "" : chem.description.data.InformationList.Information[1].Description  }</span>
              </div>
              <Chem3D cid={chem.cid.data} />
            </div>
        </div>
      );
    })
  );
};

export default ChemItem
