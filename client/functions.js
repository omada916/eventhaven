let d = document;

async function request(url, way, body) {
   try {
      const response = await fetch(url, {
         method: way,
         body,
         headers: {
            "Content-type": "application/JSON; charset=UTF-8",
         },
      });
      const parsedResponse = await response.json();
      return parsedResponse;
   } catch (e) {
      console.error(e);
   }
}
