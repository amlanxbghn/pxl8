import { AnimatedGradientTextEffect } from "./AnimatedGradientTextEffect";
import { ShimmerButtonEffect } from "./ShimmerButtonEffext";
import WordRotate from "@/components/magicui/word-rotate";

export const Hero = () => {
    return (
        <div className="container min-h-screen">
            <div className="cursor-pointer">
                <AnimatedGradientTextEffect />
            </div>
            <div className="flex flex-col items-center justify-center tracking-tighter text-center">
                <h1 className="text-6xl md:text-8xl md:leading-[95px] font-bold tracking-tighter max-w-[950px] mx-auto mt-8 py-2">
                    Crafting Next-Gen Landing Pages
                </h1>
                <p className="text-[22px] leading-[30px] tracking-tight text-[#000]/60 mt-8 max-w-[700px] mx-auto">
                    Helping Founders and{" "}
                    <span className="inline-flex" style={{ width: "205px", justifyContent: "center" }}>
                        <WordRotate words={["Early-Stage Startups", "Future Unicorns 🦄"]} />
                    </span>{" "}
                    build Landing Pages for less than 1/3 of the Cost and get 3x More Conversions.
                </p>
                <div className="flex gap-10">
                    <ShimmerButtonEffect />
                </div>
            </div>
        </div>
    );
}