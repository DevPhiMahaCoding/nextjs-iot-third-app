import Image from "next/image";
import bmiImg from "@/assets/images/bmi.png";
import Link from "next/link"; 

export default function Page() {
  return (
    <>
      <Image src={bmiImg} alt="BMI"
             width={200} height={200}
             className="mx-auto"/> 
      <h1 className="text-3xl text-center font-bold mt-4 text-blue-800"> 
        BMI CALCULATOR APP 
      </h1>
      <h3 className="text-center text-xl text-gray-600 mt-2 font-bold">
        Calculate Of BMI
      </h3>
      <Link href="/bmi" className="w-50 bg-yellow-400 block mx-auto
                  text-center text-black font-bold py-2 mt-4 mb-4 rounded
                  hover:bg-red-600 transition">
        Go to BMI Calculator
      </Link> 
    </> 
  );
}  