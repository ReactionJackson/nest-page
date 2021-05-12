import React from 'react'
import Hero from './Hero'
import VideoSection from './VideoSection'
import ShowcaseSection from './ShowcaseSection'
import CopySection from './CopySection'
import FeatureSection from './FeatureSection'
import FarsightSection from './FarsightSection'
import SafetySection from './SafetySection'
import Footer from './Footer'

const Overview = () => (
  <>
    <Hero />
    <CopySection
      title="Relax, we’ve got you covered."
      body="The Nest Learning Thermostat should be installed by a professional. A Nest Pro will install it in the right location, connect the Heat Link and set it up for you. Nest Stand sold separately."
      cta={{ href: '#', label: 'Find a Nest Pro' }}      
      narrow
    />
    <VideoSection />
    <CopySection
      title="Your thermostat controls 60% of your energy bill. So shouldn’t it help you save energy?"
      body="The Nest thermostat does. Since 2011, we estimate that it’s saved over 39 billion kWh of energy in millions of homes worldwide.² Because it learns from you. It gets to know the temperature that you like when you’re at home. And turns itself down when you’re away. It even learns how your home warms up or how draughty it is, so it only uses the energy it needs. That’s how the Nest thermostat saves energy."
      cta={{ href: '#', label: 'Find out more' }}      
    />
    <ShowcaseSection />
    <FeatureSection
      image="feature-1.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
    />
    <FeatureSection
      image="feature-2.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
      reversed
    />
    <FeatureSection
      image="feature-3.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
    />
    <FarsightSection />
    <FeatureSection
      image="feature-4.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
      reversed
    />
    <FeatureSection
      image="feature-5.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
    />
    <SafetySection />
    <CopySection
      title="See if Nest will work in your home."
      body="Nest is compatible with most central heating systems."
      cta={{ href: '#', label: 'Learn more' }}
    />
    <FeatureSection
      image="feature-4.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
      reversed
    />
    <FeatureSection
      image="feature-5.png"
      title="Control your hot water."
      body="Now, you can control your hot water tank with the Nest Learning Thermostat. It comes with a hot water schedule — just adjust it from the Nest app. You can boost the heat so that you have extra hot water if you want it. And when you’re away from home for a few days, you don’t have to remember to turn off the hot water. The Nest Learning Thermostat will do it for you."
    />
    <Footer />
  </>
)

export default Overview
