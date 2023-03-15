import { useRef, useState } from "react";
import { ReactComponent as BackgroundGeometry1 } from "../assets/svgs/BackgroundGeometry1.svg";
import { ReactComponent as BackgroundGeometry2 } from "../assets/svgs/BackgroundGeometry2.svg";
import { ActionButton } from "../components/ActionButton";

export const HomePage = () => {
  const bottomDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen overflow-x-hidden">
      <div className="relative w-screen h-[200vh] bg-beige-200">
        <div className="w-full h-screen flex flex-col items-center justify-center text-beige-1200">
          <h1 className="font-bold text-[28px]">Vad ska jag laga för mat?</h1>
          <p className="w-1/3 text-center my-8">
            Har du svårt att veta vad du ska laga idag? Då har du kommit rätt.
            Vi hjälper dig ta vara på dina livsmedel genom att föreslå recept
            utifrån ingredienser du har hemma.
          </p>
          <ActionButton
            label={"Kom igång"}
            onClickAction={() =>
              bottomDivRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
        <BackgroundGeometry2 className="absolute right-0 bottom-0 z-0" />
        <BackgroundGeometry1 className="absolute right-0 bottom-0 z-0" />
      </div>
    </div>
  );
};
