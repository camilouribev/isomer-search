import React from 'react';
import Chem3D from './Chem3D';
import './ChemItem.css';

const ChemItem = (res) => {
  return (

    res.res.foundChems.map((chem) => {
      return(

        <div key={chem.cid} className="item">
          <div className="ui small image test">
              <img src={chem.img} onClick={()=> window.open(chem.img)} alt="Not available" />
                <div className="meta">
                  <span className="price">{'Molecular Weight: '+ chem.molWeight.slice(0,-3)}</span>
                </div>

                <div className="meta">
                  <span className="price">{'Charge: '+ chem.charge}</span>
                </div>
          </div>
          <div className="content">
            <div className="header">{chem.commonName[0].toUpperCase()}</div>

              <div className="price">
                <span className="price">{
                   chem.description.data.InformationList.Information === "" || chem.description.data.InformationList.Information.length < 2  ?  "" : chem.description.data.InformationList.Information[1].Description
                  }</span>
              </div>
              <Chem3D cid={chem.cid} />
            </div>
        </div>
      );
    })
  );
};

export default ChemItem
