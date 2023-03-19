import { useState } from "react";
import { Input } from "../../components/Forms/Input";
import GameTile from "../../components/Global/GameTile";
import PBreadcrumb from "../../components/Panel/PBreadcrumb";
import PanelLayout from "../layouts/PanelLayout";

const Gry = () => {

    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    
    return (
        <PanelLayout PopUpOpen={ open } setPopUpOpen={ setOpen } >
            <PBreadcrumb primary="Gry" secondary="pandarium.pl" />
            <div className="bg-purple-950/[.5] backdrop-blur-3xl text-white w-full px-8 py-8 rounded-3xl">
                <Input type="text" label="Wyszukaj swoją ulubioną grę:" onChange={ (e: any) => setSearch(e.target.value) } value={ search } placeholder="np. Kółko i krzyżyk" className="" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="bg-purple-950/[.5] backdrop-blur-3xl text-white p-8 rounded-3xl">
                    <GameTile onClick={ () => setOpen(true) } className="w-[100%!important]" name="Kółko i krzyżyk" background="/images/song.JPG"/>
                </div>
            </div>
        </PanelLayout>
    );
}

export default Gry