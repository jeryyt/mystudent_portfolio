import { useState } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
// lib
import { cn } from "../../lib/utils";
import animationData from "../../lib/confetti.json";
// components
import { BackgroundGradientAnimation } from "./BgGradient";
import GridGlobe from "./GridGlobe";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5
        lg:gap-8`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["C", "ROS", "Java"];
  const rightLists = ["Python", "Embedd C", "Python"];
  const [copied, setCopied] = useState(false);
  // control the state of animation for lotte
  const [animationStopped, setAnimationStopped] = useState(true);
  const defaultOptions = {
    loop: false, // set to manual control
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "jerinraj729@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setAnimationStopped(false);

    // reset the copy function and animation for email after 5s
    setTimeout(() => {
      setCopied(false);
      setAnimationStopped(true);
    }, 5000);
  };

  return (
    <div
      className={cn(
        `group/bento shadow-input relative row-span-1 flex flex-col justify-between
        space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] transition
        duration-200 hover:shadow-xl dark:shadow-none`,
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && "w-full opacity-80"} `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              // width={220}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div
              className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4
                text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
            ></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `relative flex min-h-40 flex-col p-5 px-5 transition duration-200
            group-hover/bento:translate-x-2 md:h-full lg:p-10`,
          )}
        >
          <div className="z-10 text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base">
            {description}
          </div>

          <div className="z-10 max-w-96 text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4
                      lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4
                      lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
              >
                <Lottie
                  options={defaultOptions}
                  height={200}
                  width={400}
                  isStopped={animationStopped}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
