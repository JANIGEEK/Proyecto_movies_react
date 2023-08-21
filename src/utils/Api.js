const URL = "http://www.omdbapi.com/?apikey=69848584";

export function get(path) {
  return fetch(URL + path)
    .then((result) => {
      if (!result.ok) {
        throw new Error("Error en la consulta a la api");
      } else {
        return result.json();
      }
    })

    .catch((error) => {
      console.log(error);
    });
  //fetch(`${API}&s=${path}`).then((results)=>results.json())
}
