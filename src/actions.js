
export const loadOrders = () => {
  return (dispatch, getState) => {
    // var myInit = { method: 'GET',
    // headers: myHeaders,
    // mode: 'cors',
    // cache: 'default' };

    const state = getState();
    const loading = state.loading;
    const uploading = state.uploading;

    if(loading || uploading) {
      return;
    }

    const url = `https://csasfunction.azurewebsites.net/api/HttpTriggerDashboard?code=Gl7ukfnLaXkg5A/DAfi2ANDRuHrBlBtNWyvM74cosWB7g5aZJKBSGw==`;

    dispatch({
      type:'setLoading',
      loading: true
    })

    return fetch(url)
      .then((response) => {
      return response.json();
      })
      .then((data) => {
        dispatch({
          type:'setData',
          data: data
        })
        dispatch({
          type:'setLoading',
          loading: false
        })
      })
  }
}

export const confirmDelivery = (dispatch, item) => {
  // var myInit = { method: 'GET',
  // headers: myHeaders,
  // mode: 'cors',
  // cache: 'default' };

  return (dispatch) => {
    //FIXME set url for order
    const url = `https://csasfunction.azurewebsites.net/api/HttpTriggerDashboard?code=Gl7ukfnLaXkg5A/DAfi2ANDRuHrBlBtNWyvM74cosWB7g5aZJKBSGw==`;

    dispatch({
      type:'setUploading',
      uploading: true
    })

    return fetch(url)
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(
            () => {
              resolve()
              dispatch({
                type:'setUploading',
                uploading: false
              })
            }, 3000
          )
        });
      })
  }
}
