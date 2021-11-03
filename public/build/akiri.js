/* 
Funciones Ajax: get y post
akiri del esperanto signfica obtener
*/

/* 
obtener: obtiene una respuesta de servidor y la parse a json
inputs-> url: url de API para obtener los datos
output-> respuesta de servidor en formato JSON

*/
export async function getData(url) {
  let res = null;
  try {
    res = await fetch(url);
    res = await res.json();
  } catch (error) {
    console.log(error);
  }
  return res;
}

export async function sendData (url, data, method) {
  let res = null;
  if (!method) {
    method = "POST";
  }

  try {
    res = await fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
  res = await res.json();
  return res;
};

export async function sendFormData (url, items, method) {
  const formData = new FormData();

  if (!method) {
    method="POST"
  }

  for (let index = 0; index < items.length; index++) {
    formData.append(items[index].name, items[index].val);
    //console.log("items[index].name", items[index].name);
    //console.log("items[index].val", items[index].val);
  }

  const resp = await fetch(url, {
    method: method,
    body: formData,
  });
  let json = await resp.json();
  return json;
};
