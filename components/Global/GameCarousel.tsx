import GameTile from "./GameTile";
const GamesCarousel = () => {
    return (
        <>
            <div className="overflow-x-scroll w-[100vw]">
                <div className="flex flex-row gap-5">
                    <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                    <GameTile className="shrink-0" name="Music Panda" image="\images\pandas\lion\lion-1000px.png" background="/images/song.JPG"/>
                </div>
                <div className="flex flex-row">

                </div>
            </div>
            
        </>
    );
}

export default GamesCarousel;