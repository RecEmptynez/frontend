import { ReactComponent as BackgroundGeometry1 } from "../assets/svgs/BackgroundGeometry1.svg";
import { ReactComponent as BackgroundGeometry2 } from "../assets/svgs/BackgroundGeometry2.svg";

export const HomePage = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <div className="relative w-screen h-[200vh] bg-beige-200">
        <BackgroundGeometry2 className="absolute right-0 bottom-0 z-0" />
        <BackgroundGeometry1 className="absolute right-0 bottom-0 z-0" />
      </div>
    </div>
  );
};
