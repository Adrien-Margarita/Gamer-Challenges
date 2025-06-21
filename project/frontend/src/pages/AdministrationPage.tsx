import { Navbar } from "@/components/homepage";
import UserboardTable from "@/components/settings/UserboardTable";
import { usePlayers } from "@/hooks/usePlayer";
import { IUserData } from "@/@types/IPlayer";
import Footer from "@/components/Footer";

export default function AmdinistraionPage(){

    const { data } = usePlayers();
    const players: IUserData[] = data ?? [];

    return (
      <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
      <div className="flex flex-col mb-4">
        <div className="flex flex-col mx-4">
          <h2 className="text-2xl font-semibold ">Administration: utilisateurs</h2>
          <hr className="mt-4" />
        </div>
        <UserboardTable players={players} offset={3}/>
      </div>
      </main>
      <Footer />
      </div>
    )
}