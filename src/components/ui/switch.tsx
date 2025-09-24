import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      {...props}
      className={cn(
        "relative inline-flex h-[1.3rem] w-16 shrink-0 items-center rounded-full cursor-pointer",
        "bg-white dark:bg-test-black2",
        "border border-black dark:border-white",
        "transition-colors outline-none shadow-xs",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "absolute block rounded-full overflow-hidden",
          "w-[1.3rem] h-[1.3rem]",
          "bg-black data-[state=checked]:bg-black",
          "transition-transform duration-500 ease-in-out",
          "data-[state=checked]:translate-x-[calc(4rem-1.15rem-0.25rem)] data-[state=checked]:rotate-180"
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 80 80" className="w-full h-full">
          <circle r="39" />
          <path fill="#fff" d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38" />
          <circle r="5" cy="19" fill="#fff" />
          <circle r="5" cy="-19" />
        </svg>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }