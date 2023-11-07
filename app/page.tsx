import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Card from "./components/Card";
import supabase from './supabaseClient.js'

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {

  const data = await supabase
  .from('restaurants')
  .select()
  console.log(data)

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <Card />
          </div>
        </main>
      </main>
    </main>
  );
}
