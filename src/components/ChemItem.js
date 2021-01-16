import React from 'react';
import Chem3D from './Chem3D';
import './ChemItem.css';
import Accordion from './Accordion.js'

const ChemItem = (res) => {
  return (

    res.res.foundChems.map((chem) => {
      return(

        <div key={chem.cid} className= "ui stackable  grid items"  >
          <div className="four column row" >
            <div className="four wide column data " >
              <img src={chem.img} className="cropped zoom"  onClick={()=> window.open(chem.img)} alt="Not available" />
                <div >
                  <p ><span className="property">{'Molecular Weight: '}</span><span className="result">{chem.molWeight.slice(0,-3) }</span></p>
                  <p ><span className="property">{'Charge: '}</span><span className="result">{chem.charge}</span></p>
                </div>

            </div>
            <div className="twelve wide column info">
                <p className="title">{chem.commonName[0].toUpperCase()}</p>
                <p className="description">{
                    chem.description.data.InformationList.Information === "" || chem.description.data.InformationList.Information.length < 2  ?  "" : chem.description.data.InformationList.Information[1].Description
                  }</p>
                <div className=" twelve wide column forced">
                    <Accordion cid={chem.cid} />
                  </div>

            </div>

          </div>

        </div>

      );
    })
  );
};

export default ChemItem
