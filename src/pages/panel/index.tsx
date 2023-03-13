import PBreadcrumb from "../../components/Panel/PBreadcrumb";
import PanelLayout from "../layouts/PanelLayout";

const index = () => {
    return (
        <PanelLayout>
            <PBreadcrumb primary="Strona główna" secondary="pandarium.pl" />
            <div className="bg-purple-950/[.4] backdrop-blur-3xl text-white w-fit p-12 rounded-3xl">
                Witam mordeczko!
            </div>
            <div className="bg-purple-950/[.4] backdrop-blur-3xl text-white w-fit p-12 rounded-3xl">
                Witam mordeczko!
            </div>
            <div className="bg-purple-950/[.4] backdrop-blur-3xl text-white w-fit p-12 rounded-3xl">
                Witam mordeczko!
            </div>
            <div className="bg-purple-950/[.4] backdrop-blur-3xl text-white w-fit p-12 rounded-3xl">
                Witam mordeczko!
            </div>
        </PanelLayout>
    );
}

export default index