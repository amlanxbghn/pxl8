import { MdOutlineArrowRightAlt } from "react-icons/md";
import { AnimatedGradientTextEffect } from "./AnimatedGradientTextEffect";
import { ShimmerButtonEffect } from "./ShimmerButtonEffext";
import WordRotate from "@/components/magicui/word-rotate";
import {Button} from "@nextui-org/button";

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
                        <WordRotate words={["Early-Stage Startups","Future UNICORNS 🦄"]} />
                    </span>{" "}
                    build Landing Pages that Converts.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
                <ShimmerButtonEffect />
                <Button variant="light" radius="full" className="whitespace-pre-wrap text-center text-lg font-medium leading-none tracking-tight flex items-center py-[22px] md:py-[23px]">
                    View Works
                    <MdOutlineArrowRightAlt />
                </Button>
            </div>
        </div>
    );
}