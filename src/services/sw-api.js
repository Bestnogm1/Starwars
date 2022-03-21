const baseUrl ="https://swapi.dev/api/starships"

export function getAllStarships(){
  return fetch(`${baseUrl}/`)
  .then(res => res.json())
}  