import { Hero } from '../components/Hero/Heroes';
import Head from 'next/head';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import Us from '../components/Us/Us';
import GamesCarousel from '../components/Global/GameCarousel';
import Title from '../components/Global/Title';
import { TitleContainer } from '../components/Global/Containers';
import OurPandas from '../components/Global/OurPandas';
import { VerticalContainer } from '../components/Global/Containers';

export default function LandingPage() {

    return (	
        <>
            <Head>
                <title>Pandarium - minigierki od graczy dla graczy</title>
                <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />

            <Info />

            <VerticalContainer>
                <OurPandas />
            </VerticalContainer>

            <TitleContainer>
                <Title primary="Poznaj nasze wszystkie gry" secondary="Zobacz jak wiele" color="purple" position="center" variant="1"/>
            </TitleContainer>

            <GamesCarousel />

            <Us />

            <Footer />

        </>
    )
}
