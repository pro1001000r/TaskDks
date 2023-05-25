import axios from "axios";
 
export default function GetTask({setData, strFind}) {
 
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const config = {
      headers,
    };

    const apiUrl = "https://dks.tuva.info/Obmen/Mobile/}";
    const data = { getTask: strFind };

    axios
      .post(apiUrl, data, config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setData(error);
      });

    return (true);
};
 
