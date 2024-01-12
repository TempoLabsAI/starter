import Image from "next/image";
import { Inter } from "next/font/google";
import Tutorial from "@/components/tutorial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Tutorial />;
}
