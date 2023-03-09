import GameTile from "../components/Global/GameTile";
import { LgContainer } from "../components/Global/Containers";
import Title from "../components/Global/Title";
import { HeroSmall } from "../components/Hero/Heroes";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

const Gry = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Poznaj nasze wszystkie minigierki oraz najbardziej urocze pandy w przebraniach!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroSmall />
            <Title primary="Zobacz nasze wszystkie gry" secondary="JAK DUŻO!" variant="1" position="center" color="purple"/>
            <LgContainer vertical>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <GameTile className="w-[100%!important]" name="Pandarium" background="/images/song.JPG"/>
                    <GameTile className="w-[100%!important]" name="Pandarium" background="/images/song.JPG"/>
                    <GameTile className="w-[100%!important]" name="Pandarium" background="/images/song.JPG"/>
                    <GameTile className="w-[100%!important]" name="Pandarium" background="/images/song.JPG"/>
                    <GameTile className="w-[100%!important]" name="Pandarium" background="/images/song.JPG"/>
                </div>
            </LgContainer>
            <Footer small/>
        </>
    );
}

export default Gry;