import React from 'react'
import Banner from './Banner'

const BannersRender = () => {
  return (
    <div>
      <Banner 
        background="redgrad" 
        img="/home/red.png" 
        service="affiliates" 
        description="Our system allows you to earn money by promoting service posts" 
        features={["Share", "Promote", "Receive a percentage"]} 
      />
      <Banner 
        background="greengrad" 
        img="/home/green.png" 
        service="learn" 
        description="We have training and courses to continue increasing your skills" 
        features={["Courses", "Webinars", "Tips"]} 
      />
      <Banner 
        background="bluegrad" 
        img="/home/blue.png" 
        service="ads" 
        description="We help you increase your visibility to clients around the world" 
        features={["Reports", "Performance", "Ads campaigns"]} 
      />
      <Banner 
        background="purplegrad" 
        img="/home/purple.png" 
        service="members" 
        description="We have plans designed to you according to your needs" 
        features={["Enterprice", "Basic", "Pro"]} 
        featDesc={["Free plan", "Free plan", "Annual/monthly"]}
      />
    </div>
  )
}

export default BannersRender
