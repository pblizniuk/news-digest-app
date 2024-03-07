import { layouts } from "./layouts.tsx"
import Slider from "react-slick";

type Props = {
  onChangeArticleLayout: (filter:string) => void
}


const ActiveLayout = (props:Props) => {
  const { onChangeArticleLayout } = props
  console.log(props)
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "80px",
    focusOnSelect: true
  }
  return (
    <div>
      <span className="flex items-center pt-5 pb-5">
        <span className="h-px flex-1 bg-stone-400 mb-2"></span>
      </span>
      <div className="px-2">
      <Slider {...settings}>
        <div className="px-1">
          <button onClick={() => onChangeArticleLayout(layouts.threeColumnLayout)}>
            <img src="/assets/thumbnail-3-col.png" alt="three column layout button" />
            <div className="text-custom-gray uppercase text-xs">3x Columns</div>
          </button>
        </div>
        <div className="px-1">
          <button onClick={() => onChangeArticleLayout(layouts.fourColumnLayout)}>
            <img src="/assets/thumbnail-4-col.png" alt="four column layout button" />
            <div className="text-custom-gray uppercase text-xs">4x Columns</div>
          </button>
        </div>
        <div className="px-1">
          <button onClick={() => onChangeArticleLayout(layouts.masonryLayout)}>
            <img src="/assets/thumbnail-3-col-masonry.png" alt="three column masonry layout button" />
            <div className="text-custom-gray uppercase text-xs">Masonry</div>
          </button>
        </div>
        <div className="px-1">
          <button onClick={() => onChangeArticleLayout(layouts.newsLayout)}>
            <img src="/assets/thumbnail-2-col.png" alt="two column layout button" />
            <div className="text-custom-gray uppercase text-xs">2x Colums</div>
          </button>
        </div>
      </Slider>
      </div>
    </div>
  )
}

export default ActiveLayout