const API_BASE_URL = 'http://localhost:3001/api'

export const API = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/signup`,
    SIGNIN: `${API_BASE_URL}/signin`,
    TURN_ADMIN: `${API_BASE_URL}/turn-admin`
  },
  NEWS: `${API_BASE_URL}/news`
}
