import { Hero } from '../components/Hero/Heroes';
import Head from 'next/head';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import Us from '../components/Us/Us';
import GamesCarousel from '../components/Global/GameCarousel';
import Title from '../components/Global/Title';
import { LgContainer, TitleContainer, XlContainer } from '../components/Global/Containers';
import OurPandas from '../components/Global/OurPandas';
import ArticleThumb from '../components/Article/ArticleThumb';
import Section from '../components/Global/Section';
import GoLogin from '../components/Global/GoLogin';

export default function LandingPage() {
    return (	
        <div className="w-full h-full snap-y">
            <Head>
                <title>Pandarium - minigierki od graczy dla graczy</title>
                <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <GoLogin />

            <Hero />
            
            <Section className='pt-14 sm:pt-20 md:pt-20 lg:pt-36 2xl:pt-40 snap-center'>
                <Info />
            </Section>
                
            <Section>
                <OurPandas />
            </Section>

            <Section>
                <TitleContainer>
                    <Title primary="Poznaj nasze wszystkie gry" secondary="Zobacz jak wiele" color="purple" position="center" variant="1"/>
                </TitleContainer>
                <GamesCarousel />
            </Section>

            <Section>
                <Us />
            </Section>
            
            <Section>
                <LgContainer>
                    <TitleContainer>
                        <Title primary="Co w bambusie piszczy?" secondary="Badź zawsze na bieżąco" color="purple" position="left"/>
                    </TitleContainer>
                    <div className="overflow-x-scroll overscroll-contain scrollbar-hidden">
                        <div className="flex flex-row gap-4">
                            <ArticleThumb link="/aktualnosci/1" primary="Pandy podbijają polskę!" secondary="Zobacz ile nas już jest, to jest po prostu neisamowite!" date="21 sty 2023" />
                            <ArticleThumb link="/aktualnosci/1" primary="Pandy podbijają polskę!" secondary="Zobacz ile nas już jest, to jest po prostu neisamowite!" date="21 sty 2023" />
                            <ArticleThumb link="/aktualnosci/1" primary="Pandy podbijają polskę!" secondary="Zobacz ile nas już jest, to jest po prostu neisamowite!" date="21 sty 2023" />
                            <ArticleThumb link="/aktualnosci/1" primary="Pandy podbijają polskę!" secondary="Zobacz ile nas już jest, to jest po prostu neisamowite!" date="21 sty 2023" />
                        </div>
                    </div>
                </LgContainer>
            </Section>
            
            <Footer />

        </div>
    )
}
