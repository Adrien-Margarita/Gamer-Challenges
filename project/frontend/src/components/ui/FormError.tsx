import { mdiAlert } from "@mdi/js";
import Icon from '@mdi/react';
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function FormError({ children }: Props) {
  return (
    <div className="mt-1 flex items-center gap-2 text-sm text-red-400">
      <Icon path={mdiAlert}
        title="Parler"
        size={.5}
        className="text-red"
      />
      <span>{children}</span>
    </div>
  )
}