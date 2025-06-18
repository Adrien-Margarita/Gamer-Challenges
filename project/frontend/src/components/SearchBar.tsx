import { ISearchBar } from "@/@types/ISearchbar";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";


export default function SearchBar ({
  value,
  onChange,
  placeholder = "Rechercher ...",
}: ISearchBar) {
    
  return (        
    <div className="relative w-96 mt-1">
      {/* Icone de loupe */}
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon path={mdiMagnify} size={1} className="text-gray-400" />
      </span>

      {/* Champ de recherche */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
      />
    </div>        
    );    
}