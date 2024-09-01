import ShimmerButton from "@/components/magicui/shimmer-button";
import { ChevronRight } from "lucide-react";

export function ShimmerButtonEffect() {
  return (
    <div className="z-10 flex mt-8 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Schedula a Call
        </span>
        <ChevronRight className="ml-2 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </ShimmerButton>
    </div>
  );
}
