import { BannerDesc, BannerProps } from "../types/bannerTypes"

const BannerDescription = ({ desc, descSpan, descLast = null, color }: BannerDesc) => {
  // Los estilos irian aca???

  return (
      <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-[48px] tracking-[0] leading-[48px]">
        <span className="font-bold text-[#d2d7e0]">{desc}</span>
        <span className={`font-bold italic text-[${color}]`}>{descSpan}</span>
        {descLast && <span className="font-bold text-[#d2d7e0]">{descLast}</span>}
      </p>
  )
}


const Banner = ({id, background, img, service, description, features, featDesc} : BannerProps) => {

  // El bg no se por que no funciona lol. Solo me toma el primero.

  return (
    <div className="relative w-[1632px] h-[590px] rounded-[20px]">
      <div className={`flex w-[1632px] h-[590px] items-center justify-center relative rounded-[20px] ${background}`}>
        <div className="flex flex-col w-[802px] items-center justify-center gap-[10px] relative">
          <img
            alt="Image"
            src={img}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-[32px] px-[80px] py-0 relative flex-1 grow">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <img
              className="relative w-[120px] h-[52.17px] object-cover"
              alt="Servi logotype copy"
              src="https://c.animaapp.com/VhSIGBrd/img/servi-logotype-copy-2@2x.png"
            />
            <div className="relative w-[120px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#bebebe] text-[24px] tracking-[0] leading-[normal]">
              {service}
            </div>
          </div>
          <div className="relative w-[697px] h-[144px] mr-[-27.00px] font-normal text-[48px] tracking-[0] leading-[48px]">
            <BannerDescription {...description} />
          </div>
          <div className="inline-flex items-center justify-center gap-[16px] relative flex-[0_0_auto] mr-[-37.00px]">
            <div className="flex w-[225px] items-center gap-[8px] relative">
              <img
                className="relative w-[48px] h-[48px]"
                alt="Fluent verified"
                src="https://c.animaapp.com/VhSIGBrd/img/fluent-mdl2-verified-brand-11.svg"
              />
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#f4f5f8] text-[20px] tracking-[0] leading-[28px]">
                  {features[0]}
                </div>
                {featDesc && <div className="relative self-stretch [font-family:'Inter',Helvetica] font-light text-[#f4f5f8] text-[20px] tracking-[0] leading-[28px]">{featDesc[0]}</div>}
              </div>
            </div>
            <div className="flex w-[225px] items-center gap-[8px] relative">
              <img
                className="relative w-[48px] h-[48px]"
                alt="Fluent verified"
                src="https://c.animaapp.com/VhSIGBrd/img/fluent-mdl2-verified-brand-10.svg"
              />
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#f4f5f8] text-[20px] tracking-[0] leading-[28px]">
                  {features[1]}
                </div>
                {featDesc && <div className="relative self-stretch [font-family:'Inter',Helvetica] font-light text-[#f4f5f8] text-[20px] tracking-[0] leading-[28px]">{featDesc[1]}</div>}
              </div>
            </div>
            <div className="flex w-[225px] items-center gap-[8px] relative">
              <img
                className="relative w-[48px] h-[48px]"
                alt="Fluent verified"
                src="https://c.animaapp.com/VhSIGBrd/img/fluent-mdl2-verified-brand-9.svg"
              />
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#f4f5f8] text-[20px] tracking-[0] leading-[28px]">
                  {features[2]}
                </div>
                {featDesc && <div className="relative self-stretch [font-family:'Inter',Helvetica] font-light text-[#f4f5f8] text-[20px] tracking-[0] leading-[28px]">{featDesc[2]}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
