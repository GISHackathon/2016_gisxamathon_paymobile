
export const orderProduct = (data) => {
  return (dispatch, getState) => {
    const url = `https://csasfunction.azurewebsites.net/api/HttpTriggerOrderNew?code=AZ0q39xsYwLG9n4lgJ8wa5M3RGjLuWkS90rhFafCdSwHaXNkpa1TKw==`;
    const order = {
      "client": {
        "name": "Franta Jednička"
      },
      "order": [
        data
      ]
    }
    return fetch(url,
      {
        method: "POST",
        body: JSON.stringify(order)
    }).then(() => {
      dispatch({
        type:''
      })
    })

  }
}


export const loadProducts = () => {
  return (dispatch, getState) => {

    const url = `https://csasfunction.azurewebsites.net/api/HttpTriggerStoreOrders?code=SWOdWKjvLu0JDbyOWrINcN4fkZwczw27GKSWU7uLmdd0vLgRR5Ca0g==`;

    return fetch(url)
      .then((response) => {
      return response.json();
      })
      .then((data) => {
        dispatch({
          type:'setProducts',
          products: data
        })
      })
  }
}
