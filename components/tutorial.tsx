import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { MousePointer2 } from "lucide-react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const tutorialData = [
  {
    gif: "https://storage.googleapis.com/tempo-public-images/Preview%20Mode-new.gif",
    title: "Welcome to Tempo",
    subtitle: "This tutorial will teach you how to visually edit React code",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
        <div className="flex flex-col gap-x-9">
        <p className="text-md text-gray-300 text-2xl">Step 1: Select preview mode to interact with this UI</p>
        <p className="text-md text-gray-300 text-2xl">Step 2: Click "Get Started" below</p>
        </div>
      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/styling-panel.gif",
    title: "Edit Styles",
    subtitle: "You can edit Tailwind code just like a design tool",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start">
        <div>
        <div className="flex flex-row space-x-2 text-md text-gray-300 text-2xl">
        <p>Step 1: Use the <span className="italic">Select</span> tool by clicking the </p> <div className="bg-[#6858f5] p-2"><MousePointer2 /></div> <div>icon.</div>
        </div>
        <p className="text-md text-gray-300 text-2xl">Step 2: Select edit mode in top-right to edit styles</p>
        <p className="text-md text-gray-300 text-2xl">Step 3: Change the color of this div ----------></p></div>
        <div className="w-20 h-20 bg-orange-400"></div>
      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/ai-prompt.gif",
    title: "Generate With AI",
    subtitle: "You can generate UIs using text prompts or images",
    customJSX: (
          <div className="flex items-center gap-x-9 my-5 justify-start h-20">
          <div className="flex flex-col gap-x-9">
          <p className="text-md text-gray-300 text-2xl">Step 1: Open AI Toolbar</p>
          <p className="text-md text-gray-300 text-2xl">Step 2: Enter prompt or upload image (sketches work too)</p>
          </div>
        </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/checkout-code.gif",
    title: "Checkout The Code",
    subtitle: "You can view and edit code anytime",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
        <div className="flex flex-col gap-x-9">
        <p className="text-md text-gray-300 text-2xl">Step 1: Right-click any element</p>
        <p className="text-md text-gray-300 text-2xl">Step 2: Select "Open In Editor"</p>
        </div>
      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/components-marketplace.gif",
    title: "Reuse Components from the Marketplace",
    subtitle: "Drag and drop any component from the community",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
      <div className="flex flex-col gap-x-9">
      <p className="text-md text-gray-300 text-2xl">Step 1: Open the components toolbar</p>
      <p className="text-md text-gray-300 text-2xl">Step 2: Drag any component onto the canvas</p>
      </div>
    </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/push-git.gif",
    title: "Push to Github",
    subtitle: "Create a git repository and publish your code",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
      <div className="flex flex-col gap-x-9">
      <p className="text-md text-gray-300 text-2xl">Step 1: Open the code editor</p>
      <p className="text-md text-gray-300 text-2xl">Step 2: Select the version control tab</p>
      <p className="text-md text-gray-300 text-2xl">Step 3: Click "Create repository"</p>
      </div>
    </div>
    ),
  },
  {
    gif: "https://media.giphy.com/media/3oz9ZE2Oo9zRC/giphy.gif",
    title: "That's it! (...almost)",
    subtitle: "Time to start building your own UIs :)",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
        <div className="flex flex-col gap-x-9">
          <p className="text-2xl text-gray-300">Questions? Reach us at founders@tempolabs.ai</p>
        </div>
      </div>
    ),
  },
  {
    gif: "https://storage.googleapis.com/tempo-public-images/delete-tutorial-2.gif",
    title: "Burn everything (but not really)",
    subtitle: "Work better with a blank slate?",
    customJSX: (
      <div className="flex items-center gap-x-9 my-5 justify-start h-20">
        <div className="flex flex-col gap-x-9 flex flex-row space-x-2 text-md text-gray-300 text-2xl">
          <div className="flex flex-row space-x-2 text-md text-gray-300 text-2xl">
        <p>Step 1: Use the <span className="italic">Select</span> tool by clicking the </p> <div className="bg-[#6858f5] p-2"><MousePointer2 /></div> <div>icon.</div>
        </div>
        <p>Step 2: Click the div that contains the <code className="text-lg">Tutorial</code></p>
        <p>Step 3: Right-click and delete the div that renders the Tutorial</p>
        </div>
      </div>
    ),
  },
];

function Tutorial() {
  const [currentGif, setCurrentGif] = useState(0);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const prevGif = () =>
    setCurrentGif(currentGif > 0 ? currentGif - 1 : tutorialData.length - 1);
  const nextGif = () =>
    setCurrentGif(currentGif < tutorialData.length - 1 ? currentGif + 1 : 0);

  return (
    <div
      className="h-screen flex justify-center items-center bg-[#1E1B26] dark:bg-black w-screen">
      <div className="mx-auto p-4 max-w-[88rem]">
        <div className="mb-4 text-left">
          <h1 className="font-bold text-white mb-2.5 text-4xl">
            {tutorialData[currentGif].title}
          </h1>
          <p className="text-md text-gray-300 mt-1 text-3xl">
            {tutorialData[currentGif].subtitle}
          </p>
          {tutorialData[currentGif].customJSX}
        </div>
        <div className="relative mb-4 flex justify-center">
          <div
            className="rounded-lg overflow-hidden flex justify-center items-center bg-[#1e1b26] w-[86vh] border-0 border-white border-solid">
            <img
              src={tutorialData[currentGif].gif}
              alt={`Step ${currentGif}`}
              className="w-full h-full border-0 border-white border-solid" />
          </div>
        </div>
        <div className="flex justify-center space-x-1 mb-9">
          {tutorialData.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentGif ? "bg-gray-500" : "bg-white"
              }`}
              onClick={() => setCurrentGif(index)} />
          ))}
        </div>
        <div><div className="flex items-center justify-center space-x-4">
              {currentGif === 0 ? <Button
                variant="ghost"
                onClick={nextGif}
                className="text-white bg-[#6559EC] hover:bg-[#6559EC]/50 text-2xl font-normal rounded-3xl p-6"
                disabled={currentGif === tutorialData.length - 1}>Get Started</Button> : <>
                <Button
                  variant="ghost"
                  onClick={prevGif}
                  className="text-white bg-[#6559EC] hover:bg-[#6559EC]/50 text-2xl font-normal rounded-3xl p-6"
                  disabled={currentGif === 0}>
                  <ChevronLeft className="h-6 w-6" />Prev</Button>
                {currentGif === tutorialData.length - 1 ? null : <Button
                  variant="ghost"
                  onClick={nextGif}
                  className="text-white bg-[#6559EC] hover:bg-[#6559EC]/50 text-2xl font-normal rounded-3xl p-6"
                  disabled={currentGif === tutorialData.length - 1}>Next<ChevronRight className="h-6 w-6" />
                </Button>}
              </>}
            </div><p className="text-md text-gray-400 text-center mt-3.5 text-2xl">Reminder: select "Preview Mode" in the top-right to click these buttons</p></div>
      </div>{" "}
    </div>
  );
}

export default Tutorial;
