import { Mail, Plus, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void,
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void,
    createTrip: () => void,

}

export function ConfirmTripModal({addNewEmailToInvite, closeConfirmTripModal, createTrip}: ConfirmTripModalProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
                  <button>
                    <X onClick={closeConfirmTripModal} className="size-5 text-zinc-400"/>
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, brasil </span> 
                  nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
                </p>
              </div>
              
              <form onSubmit={addNewEmailToInvite} className="space-y-3">
                <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="size-5 text-zinc-400"/>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Seu nome completo" 
                    className="bg-transparent text-lg text-zinc-400 outline-none flex-1"
                  />
                </div>

                <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Mail className="size-5 text-zinc-400"/>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Seu email pessoal" 
                    className="bg-transparent text-lg text-zinc-400 outline-none flex-1"
                  />
                </div>

                <button onClick={createTrip} type="submit" className="bg-lime-300 text-lime-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400">
                  Confirmar criação da viagem 
                  <Plus className="size-5"/>
                </button>
              </form>
            </div>
          </div>
    )
}