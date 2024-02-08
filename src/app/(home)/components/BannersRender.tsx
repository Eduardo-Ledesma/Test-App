import React from 'react'
import Banner from './Banner'
import { BannerDesc } from '../types/bannerTypes'

const BannersRender = () => {

  const descArray : BannerDesc[] = [
    {
      desc: "Our system ",
      descSpan: "allows you to earn money",
      descLast: " by promoting service posts",
    },
    {
      desc: "We have training and courses to continue ",
      descSpan: "increasing your skills",
    },
    {
      desc: "We help you increase your visibility to ",
      descSpan: "clients around the world",
    },
    {
      desc: "We have plans designed for you ",
      descSpan: "according to your needs",
    }
  ]

  const bannersData = [
    {
      id: 1,
      background: "redgrad",
      img: "/home/red.png",
      service: "affiliates",
      description: descArray[0],
      features: ["Share", "Promote", "Receive a percentage"],
    },
    {
      id: 2,
      background: "greengrad",
      img: "/home/green.png",
      service: "learn",
      description: descArray[1],
      features: ["Courses", "Webinars", "Tips"],
    },
    {
      id: 3,
      background: "bluegrad",
      img: "/home/blue.png",
      service: "ads",
      description: descArray[2],
      features: ["Reports", "Performance", "Ads campaigns"],
    },
    {
      id: 4,
      background: "purplegrad",
      img: "/home/purple.png",
      service: "members",
      description: descArray[3],
      features: ["Enterprise", "Basic", "Pro"],
      featDesc: ["Free plan", "Free plan", "Annual/monthly"],
    },
  ];

  return (
    <div className="inline-flex flex-col items-start gap-[56px] relative flex-[0_0_auto]">
      {bannersData.map((banner, index) => (
        <Banner key={index} {...banner} />
      ))}
    </div>
  )
}

export default BannersRender
