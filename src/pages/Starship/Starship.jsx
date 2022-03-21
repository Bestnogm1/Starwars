import './Startship.css'
import React, { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const Starships = (props) =>{
  const [results, setResults] = useState([])
  
  useEffect(()=> {
    getAllStarships()
    .then(shipData => setResults(shipData.results))
  }, [])

  return (
    <>
      <div>
        {results ?
        <>
                {results.map((starship, index) => (
            <Link key={starship.index} state={{ starship }} to='/starshipPage'>
              <button> {starship.name} </button>  
            </Link>
          ))}
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    </>
  );
}

//   return (
//     <>
//     <>
//       <div className="main-div">
//       <h3>Class List</h3>
//       <div className="icon-container">
//           {results.map((starship, index) => (
//             <Link key={starship.index} state={{ starship }} to='/starshipPage'>
//               <button> {starship.name} </button>  
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//     </>
//   );
// }

export default Starships