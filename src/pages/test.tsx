import GamesCarousel from 'components/Global/GameCarousel'
import Title from 'components/Global/Title'
import Hero from 'components/Hero/Hero'
import Head from 'next/head'
import Image from 'next/image'

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
      {/* <Title position="center" variant="1" color="purple" primary="Poznaj nasze wszystkie gry" secondary='Zobacz ile' />
      <GamesCarousel /> */}
      <div className="p-24 m-0 w-screen">
        COKOLWIEK
      </div>
		</>
	)
}
