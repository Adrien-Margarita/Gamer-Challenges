import { forwardRef, type ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type Variant = "default" | "outline" | "neon" | "destructive" | "ghost"
type Size = "sm" | "md" | "lg"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

/**
 * Bouton unifié utilisé dans tout Stark Byte Hub.
 */
const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "default", size = "md", className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0"

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    }

    const variants = {
      default: "bg-[#00aaff] text-white hover:bg-[#0095cc] focus:ring-[#00aaff]",
      outline:
        "border border-white text-white hover:bg-white hover:text-black focus:ring-white",
      neon:
        "border border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black focus:ring-[#00aaff]",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
      ghost:
        "text-gray-400 hover:text-white hover:bg-[#2a2a2a] focus:ring-gray-600",
    }

    return (
      <button
        ref={ref}
        className={clsx(base, sizes[size], variants[variant], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export default Button
