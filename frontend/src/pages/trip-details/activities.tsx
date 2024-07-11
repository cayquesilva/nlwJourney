import { CircleCheck } from "lucide-react";

export function Activities(){
    return (
        <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <div className="text-zinc-300 text-xl font-semibold">Dia 17</div>
                    <span className="text-zinc-500 text-xs">Sábado</span>
                </div>
                <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <div className="text-zinc-300 text-xl font-semibold">Dia 18</div>
                    <span className="text-zinc-500 text-xs">Domingo</span>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-lg shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300"/>
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="text-zinc-300 ml-auto">08:00h</span>

                    </div>

                    <div className="px-4 py-2.5 bg-zinc-900 rounded-lg shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300"/>
                        <span className="text-zinc-100">Fit Dance</span>
                        <span className="text-zinc-300 ml-auto">10:00h</span>

                    </div>
                </div>
            </div>


        </div>
    )
}