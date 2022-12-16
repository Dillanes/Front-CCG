export const BASEURL = 'http://localhost:8000/api/'

    

export const config = (token)=>{
    const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

    return config
}


