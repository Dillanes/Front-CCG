export const BASEURL = 'https://msdocs-python-test-webapp-117.azurewebsites.net/'

    

export const config = (token)=>{
    const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

    return config
}


