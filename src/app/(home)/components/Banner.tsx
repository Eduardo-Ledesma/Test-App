import { BannerProps } from "../types/bannerTypes"

const Banner = ({background, img, service, description, features, featDesc} : BannerProps) => {
  return (
    <div className={`bg-${background}`}>
      Testinggg
    </div>
  )
}

export default Banner
