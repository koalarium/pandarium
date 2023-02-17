import CTA from 'components/CTA/CTA'
import { LgContainer, MdContainer, SmContainer } from 'components/Global/Containers'
import GamesCarousel from 'components/Global/GameCarousel'
import Title from 'components/Global/Title'
import Hero from 'components/Hero/Hero'
import Us from 'components/Us/Us'
import Head from 'next/head'
import Image from 'next/image'
import Article from 'components/Article/Article'
import Date from 'components/Article/Date'
import Hashtag from 'components/Article/Hashtag'
import ArticleTitle from 'components/Article/ArticleTitle'

export default function LandingPage() {
  return (	
		<>
			<Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
      <Hero />
		</>
	)
}
