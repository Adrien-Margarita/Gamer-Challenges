import { Navbar } from "@/components/homepage";
import UserboardTable from "@/components/settings/UserboardTable";
import { usePlayers } from "@/hooks/usePlayer";
import { IUserData } from "@/@types/IPlayer";
import Footer from "@/components/Footer";

export default function AmdinistraionPage(){

    const { data } = usePlayers();
    const players: IUserData[] = data ?? [];

    return (
        <>
      <Navbar />
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
       
        <div className="separator"></div>
        <UserboardTable players={players} offset={3}/>
      </main>
    <Footer />
      </>
    )
}