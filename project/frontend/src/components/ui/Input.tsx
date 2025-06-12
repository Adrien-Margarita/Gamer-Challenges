import { forwardRef, type InputHTMLAttributes } from "react"
import clsx from "clsx"

type Props = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          "w-full rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-2 text-sm text-white placeholder-gray-500 outline-none",
          "transition duration-200 focus:border-[#00aaff] focus:ring-2 focus:ring-[#00aaff]/50",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
