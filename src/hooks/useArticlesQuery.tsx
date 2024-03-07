import { API_KEY } from '../global_constants'

function getArticles(query:string) {
  return fetch(`${query}&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => (data.articles))
      .catch((err) => (console.log(err)))
}

export default getArticles
