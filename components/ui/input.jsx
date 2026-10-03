import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props}, ref) =>{
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[54px] w-full rounded-none border border-amber-50 focus:border-amber-300 bg-white px-6 py-2 text-base text-primary transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})

export { Input };
