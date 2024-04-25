import Image from "next/image";
import { Inter } from "next/font/google";
import Tutorial from "@/components/tutorial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="delete-div-after-tutorial">
        <Tutorial />
      </div>
    </div>
  );
}
