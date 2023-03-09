import { useEffect, useState } from "react";
import GameTile from "./GameTile";

const GamesCarousel = () => {

    return (
        <>
            <div className="w-full overflow-x-hidden">
                <div className="flex flex-row mb-3 md:mb-4 xl:mb-5">
                    <div className="flex flex-row animate-slideLeft">
                        <GameTile className="shrink-0 mx-2" name="Pandarium" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Music Panda" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Chińczyk" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Kółko i krzyżyk" background="/images/song.JPG"/>
                    </div>
                    <div className="flex flex-row animate-slideLeft">
                        <GameTile className="shrink-0 mx-2" name="Pandarium" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Music Panda" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Chińczyk" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Kółko i krzyżyk" background="/images/song.JPG"/>
                    </div>
                </div>
                <div className="flex flex-row mb-3 md:mb-4 xl:mb-5">
                    <div className="flex flex-row animate-slideRight">
                        <GameTile className="shrink-0 mx-2" name="Pandarium" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Music Panda" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Chińczyk" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Kółko i krzyżyk" background="/images/song.JPG"/>
                    </div>
                    <div className="flex flex-row animate-slideRight">
                        <GameTile className="shrink-0 mx-2" name="Pandarium" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Music Panda" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Chińczyk" background="/images/song.JPG"/>
                        <GameTile className="shrink-0 mx-2" name="Kółko i krzyżyk" background="/images/song.JPG"/>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default GamesCarousel;