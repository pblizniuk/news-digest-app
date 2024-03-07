import { useEffect, useState } from "react"
// import { articles as mockArticles } from "../../api/articles/response"
import moment from "moment"
import getArticles from "../../hooks/useArticlesQuery"

const apiEndpoint = 'https://newsapi.org/v2/'
type Article = {
  title: string
  urlToImage: string
  description: string
  url: string
  source: {
    name: string
  }
  publishedAt: string
}

type Props = {
  activeCategory: string,
  searchQuery?: string

}

function Articles(props:Props) {
  const { activeCategory, searchQuery } = props
  const [articles, setArticles] = useState([])
console.log({searchQuery})
  useEffect(() => {
    const query =
      searchQuery
        ? `${apiEndpoint}/everything?q=${searchQuery}&sortBy=popularity&language=en`
        : `${apiEndpoint}/top-headlines?country=us&category=${activeCategory}&sortBy=popularity`
    //const query = `https://newsapi.org/v2/everything?q=technology+bitcoin&sortBy=popularity`
    getArticles(query).then(data => {
      setArticles(data)
    })
  }, [activeCategory, searchQuery])

  return (
    <>
      {articles?.map((article:Article, index) => {
        if (!article.urlToImage || !article.title) {
          return
        }
        const { title, urlToImage, description, url, source, publishedAt } = article
        const date = moment(publishedAt)
        const formattedDate = date.format('ll')
        return (
          <article className="transition-all rounded-sm overflow-hidden shadow-md hover:shadow-lg font-montserrat z-0 dark:bg-stone-800" key={index}>
            <div className="text-left">
              <a href={url} target="_blank">
                <div className="overlay relative bg-stone-900">
                  <div className="article_date source absolute text-white p-2 ">{formattedDate}</div>
                  <img
                    alt=""
                    src={urlToImage !== null ? urlToImage : '/assets/logo-xl.png'}
                    className="h-32 rounded-t-sm w-full object-cover sm:h-80 lg:h-52"
                  />
                </div>
                <div className="block px-4">
                  <div className="transition-all text-gray-900 dark:text-stone-500 pt-2 text-sm">{source.name}</div>
                  <h3 className="transition-all pt-1 sm:text-lg font-montserrat text-gray-900 dark:text-stone-300 font-semibold md:leading-snug">{title}</h3>
                  <p className="transition-all py-3 text-gray-700 dark:text-stone-400">
                    {description}
                  </p>
                </div>
              </a>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Articles
