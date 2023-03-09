import { useEffect, useState } from "react";
import GameTile from "./GameTile";

const GamesCarousel = () => {

    return (
        <>
            <div className="w-full overflow-x-hidden">
                <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5">
                    <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5 animate-slideLeft">
                        <GameTile className="shrink-0" name="Pandarium" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Chińczyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Kółko i krzyżyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    </div>
                    <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5 animate-slideLeft">
                        <GameTile className="shrink-0" name="Pandarium" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Chińczyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Kółko i krzyżyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    </div>
                    <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5 animate-slideLeft">
                        <GameTile className="shrink-0" name="Pandarium" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Chińczyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Kółko i krzyżyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    </div>
                </div>
                <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5">
                    <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5 animate-slideRight">
                        <GameTile className="shrink-0" name="Pandarium" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Chińczyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Kółko i krzyżyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    </div>
                    <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5 animate-slideRight">
                        <GameTile className="shrink-0" name="Pandarium" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Chińczyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Kółko i krzyżyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    </div>
                    <div className="flex flex-row gap-3 md:gap-4 xl:gap-5 mb-3 md:mb-4 xl:mb-5 animate-slideRight">
                        <GameTile className="shrink-0" name="Pandarium" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Chińczyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                        <GameTile className="shrink-0" name="Kółko i krzyżyk" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default GamesCarousel;