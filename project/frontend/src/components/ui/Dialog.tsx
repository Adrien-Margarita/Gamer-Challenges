import type { ReactNode } from "react"
import { createPortal } from "react-dom"
import { mdiClose } from "@mdi/js"
import Icon from "@mdi/react"

type Props = {
  children: ReactNode
  onClose: () => void
  /** Si true, un clic à l’extérieur de la modale la ferme (par défaut : true) */
  closeOnOutsideClick?: boolean
}

/**
 * Modale réutilisable avec halo bleu, fond sombre et fermeture contrôlée.
 */
export default function Dialog({ children, onClose, closeOnOutsideClick = true }: Props) {
  const handleBackdropClick = () => {
    if (closeOnOutsideClick) onClose()
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-10 overflow-y-auto"
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={handleBackdropClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose()
      }}
    >
      <dialog
        open
        className="relative w-full max-w-2xl bg-[#1e1e1e] text-white border border-[#2a2a2a] rounded-xl p-6 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Halo bleu vertical à gauche */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#00aaff] rounded-l-xl z-10" />

        {/* Bouton de fermeture */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la modale"
          className="ghost absolute top-4 right-4 text-gray-400 hover:text-white p-2 z-20"
        >
          <Icon path={mdiClose} size={1} />

        </button>

        {/* Contenu */}
        <div className="relative z-10">{children}</div>
      </dialog>
    </div>,
    document.body
  )
}
