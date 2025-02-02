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
    const response = await fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
    });
    return await response.json();
}

async function login({ email, password }) {
    const response = await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

async function getUserLogged() {
  const response = await fetchWithToken(`${ENDPOINT}/users/me`);
  return await response.json();
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${ENDPOINT}/notes`);
  return await response.json();
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${ENDPOINT}/notes/archived`);
  return await response.json();
}

async function getNote(id) {
  const response = await fetchWithToken(`${ENDPOINT}/notes/${id}`);
  return await response.json();
}

async function archiveNote(id) {
  const response = await fetchWithToken(`${ENDPOINT}/notes/${id}/archive`, {
    method: 'POST',
  });

  return await response.json();
}

async function unarchiveNote(id) {
  const response = await fetchWithToken(`${ENDPOINT}/notes/${id}/unarchive`, {
    method: 'POST',
  });

  return await response.json();
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${ENDPOINT}/notes/${id}`, {
    method: 'DELETE',
  });

  return await response.json();
}

async function addNote({title, body}) {
  const response = await fetchWithToken(`${ENDPOINT}/notes`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  });

  return await response.json();
}

export {
  getAccessToken,
  putAccessToken,
  fetchWithToken,
  register,
  login,
  getUserLogged,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
  addNote,
};
