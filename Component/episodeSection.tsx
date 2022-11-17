import Ep01 from "./EP/episode1"
import Ep02 from "./EP/episode2"
import Ep03 from "./EP/episode3"
import Ep04 from "./EP/episode4"
import Ep05 from "./EP/episode5"
import Ep06 from "./EP/episode6"
import Ep07 from "./EP/episode7"
import Ep08 from "./EP/episode8"

export default function EpisodeSection() {

    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
                <Ep01/>
                <Ep02/>
                <Ep03/>
                <Ep04/>
                <Ep05/>
                <Ep06/>
                <Ep07/>
                <Ep08/>
            </div>
        </section>
    )
} 