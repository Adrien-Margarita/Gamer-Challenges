import type { HTMLAttributes } from "react"

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div className={`animate-pulse rounded bg-base-300 ${className ?? ""}`} {...props} />
  )
}