import './css/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, byPrefixAndName } from '@fortawesome/fontawesome-svg-core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
function Card2({heading,tagline}){
    return(
        <div style={{backgroundColor:'#1f2033'}} className="flex flex-row bg-black w-[250px] h-[100px] rounded-md items-center gap-3 p-3">
              <div className="icon">
                <FontAwesomeIcon icon={faHandshake} className="text-white text-2xl" />
            </div>

            <div className="p-3">
                <div className="text-xl font-bold">
                    {heading}
                </div>
                <div className='text-xs'>{tagline}</div>
            </div>
        </div>
    )
}

export default Card2;