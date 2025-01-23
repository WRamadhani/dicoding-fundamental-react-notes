const ENDPOINT = 'https://notes-api.dicoding.dev/v1';

function getAccessToken() {
    return localStorage.getItem('accessToken')
  }
  
  function putAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
  }
  
  async function fetchWithToken(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`
      }
    });
  }

async function register({name, email, password}) {
  console.log({name, email, password});
    const response = await fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
    });
    return await response.json();
    
    // return { error: false };
    // return responseJson;
}

async function login({ user }) {
    const response = await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const responseJson = await response.json();
    return responseJson.data;
}

export {getAccessToken, putAccessToken, register, login};
