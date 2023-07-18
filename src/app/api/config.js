export const BASE_URL = process.env.API_URL,
  BEARER_TOKEN =process.env.API_TOKEN,
    headers = {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
  NEWSREVALIDATE = 20,
  CATREVALIDATE = 20;