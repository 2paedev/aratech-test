import { HttpHeaders } from '@angular/common/http'

const API_BASE_URL = 'http://localhost:3001/api'

export const API = {
  AUTH: {
    SIGNUP: `${API_BASE_URL}/signup`,
    SIGNIN: `${API_BASE_URL}/signin`,
    TURN_ADMIN: (uuid: string): string => `${API_BASE_URL}/turn-admin/${uuid}`
  },
  NEWS: `${API_BASE_URL}/news`
}

export const CustomHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
