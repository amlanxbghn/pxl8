import { AnimatedGradientTextEffect } from "./AnimatedGradientTextEffect";
import { ShimmerButtonEffect } from "./ShimmerButtonEffext";
import WordRotate from "@/components/magicui/word-rotate";

export const Hero = () => {
    return (
        <div className="container">
            <div className="cursor-pointer">
                <AnimatedGradientTextEffect />
            </div>
            <div className="flex flex-col items-center justify-center tracking-tighter text-center">
                <h1 className="text-5xl md:text-8xl md:leading-[95px] font-bold tracking-tighter max-w-[950px] mx-auto mt-8 py-2">
                    Crafting Next-Gen Landing Pages
                </h1>
                <p className="text-[22px] leading-[25px] md:leading-[30px] tracking-tight text-[#000]/60 mt-8 max-w-[700px] mx-auto">
                    Helping Founders and{" "}
                    <span className="inline-flex" style={{ width: "205px", justifyContent: "center" }}>
                        <WordRotate words={["Early-Stage Startups","Future Unicorns 🦄"]} />
                    </span>{" "}
                    build Next-Gen Landing Pages that Converts.
                </p>
                <div className="">
                    <ShimmerButtonEffect />
                </div>
            </div>
        </div>
    );
}