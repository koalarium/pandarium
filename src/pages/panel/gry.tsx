import GameTile from "../../components/Global/GameTile";
import PBreadcrumb from "../../components/Panel/PBreadcrumb";
import PanelLayout from "../layouts/PanelLayout";

const index = () => {
    return (
        <PanelLayout>
            <PBreadcrumb primary="Gry" secondary="pandarium.pl" />
            <div className="bg-purple-950/[.5] backdrop-blur-3xl text-white w-[32%] p-12 rounded-3xl">
                <GameTile className="w-[100%!important]" name="Kółko i krzyżyk" background="/images/song.JPG"/>
            </div>
            <div className="bg-purple-950/[.5] backdrop-blur-3xl text-white w-[32%] p-12 rounded-3xl">
                <GameTile className="w-[100%!important]" name="Kółko i krzyżyk" background="/images/song.JPG"/>
            </div>
            <div className="bg-purple-950/[.5] backdrop-blur-3xl text-white w-[32%] p-12 rounded-3xl">
                <GameTile className="w-[100%!important]" name="Kółko i krzyżyk" background="/images/song.JPG"/>
            </div>
            <div className="bg-purple-950/[.5] backdrop-blur-3xl text-white w-[32%] p-12 rounded-3xl">
                <GameTile className="w-[100%!important]" name="Kółko i krzyżyk" background="/images/song.JPG"/>
            </div>
        </PanelLayout>
    );
}

export default index