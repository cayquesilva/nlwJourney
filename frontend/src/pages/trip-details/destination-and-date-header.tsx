import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){
    return (
        <div className="px-4 h-16 rounded-lg bg-zinc-900 shadow-shape flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400"/>
                <span className="text-zinc-100">Florianópolis, Brasil</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400"/>
                    <span className="text-zinc-100">16 a 27 de Agosto</span>
                </div>

                <div className="w-px h-4 bg-zinc-800"></div>

                <Button variant="secondary">
                    Alterar local/data
                    <Settings2 className="size-5"/>         
                </Button>

            </div>
        </div>
    )
}