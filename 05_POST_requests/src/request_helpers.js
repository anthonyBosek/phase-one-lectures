function getJSON(url) {
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw (response.statusText)
    }
  })
}

function postJSON(url, data) {
  //! Add you code in here
}