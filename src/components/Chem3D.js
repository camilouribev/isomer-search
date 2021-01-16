import React from 'react';

const Chem3D = (cid) => {

  var url = 'https://embed.molview.org/v1/?mode=balls&cid='+cid.cid;

  var content ="<iframe style='width: 500px; height: 300px; background-color: Snow;' frameborder='0' src=" + url + "></iframe>";


  return(
    <div dangerouslySetInnerHTML={{__html: content}}></div>

  );

};

export default Chem3D;
