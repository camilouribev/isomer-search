import React, {useState, useEffect} from 'react';


const Chem3D = (cid) => {

  const [size, setSize] = useState(window.innerWidth);
  const breakpoint = 1000;
  const breakpoint_sm = 650;

  
  useEffect(()=>{    
    const handleWindowResize = () => setSize(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)}
  ,[])

  let url = 'https://embed.molview.org/v1/?mode=balls&cid='+cid.cid;

  const content= {__html: "<iframe style='width: 550px; height: 450px; background-color: Snow;' frameborder='0' src=" + url + "></iframe>"};
  const content_medium = {__html: "<iframe style='width: 420px; height: 350px; background-color: Snow;' frameborder='0' src=" + url + "></iframe>"};
  const content_small = {__html: "<iframe style='width: 270px; height: 250px; background-color: Snow;' frameborder='0' src=" + url + "></iframe>"};

 return size  > breakpoint ? <div dangerouslySetInnerHTML={content}/> : size > breakpoint_sm ? <div dangerouslySetInnerHTML={content_medium}/>: <div dangerouslySetInnerHTML={content_small}/>;

  

};

export default Chem3D;