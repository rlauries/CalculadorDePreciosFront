  import React, { useEffect,useState, } from 'react'

export const FenceList = () => {

    const [fenceList, setFenceList] = useState([]);

    const fenceListDB = async () => {
        const data = await fetch('https://localhost:7156/api/precio/listaDeFences');
        const fences = await data.json();
        setFenceList(fences);
    }

    useEffect( () => {
        fenceListDB()
    }, []);

  return (
    <div>
        {
           fenceList.map(f =>(
            <div className="col-md-4 col-sm-6">
                <div id="ho_color" className="service_box">
                    <img src={`images/${f.nameId}.jpg`} alt="#"/>
                    <a href={`/${f.nameId}`}><h3>{`${f.name}`} Fence</h3></a>
                    <p>
                        <b className='H3'>Size:
                        </b> 
                        {`${f.size}`}
                        <br/>
                        <b className='H3'>Installation:
                        </b>  
                        {`${f.installation}`}
                    </p>
                    
                </div>
            </div>        
           ))
        }

    </div>
  )
};
