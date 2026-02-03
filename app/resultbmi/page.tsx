 "use client";
import Image from "next/image";
import bmiImg from "@/assets/images/bmi.png";
import { useSearchParams } from "next/navigation";


export default function Page() {
  const {weight, height, bmi, bmiResult} = Object.fromEntries(useSearchParams());

  return (
    <div className="w-1/2 border-gray-300 mx-auto shadow-2xl shadow-gray-300
                    p-10 rounded-lg">
        {/* Section to Show Image */}
        <Image src={bmiImg} alt="BMI"
        width={100} height={100}
        className="mx-auto"/>
        
        {/* Section to Show Title Web */} 
        <h1 className="text-2xl font-bold text-center mt-4 text-blue-800"> 
            BMI Calculator App
        </h1>

        {/* Section to Show Subtitle */}
        <h3 className="text-lg text-center mt-2 font-bold text-gray-600"> 
            Calculate Of BMI Result 
        </h3>
        {/* Section to Show Form Data and Button to Click */}
        <div className="mt-6">
             <p className="text-center from-blue-500 to-green-500 bg-linear-to-r bg-clip-text text-transparent text-lg font-bold">
              Weight : {weight} kg
             </p>
             <p className="text-center from-blue-500 to-green-500 bg-linear-to-r bg-clip-text text-transparent text-lg font-bold">
              Height : {height} cm
             </p>
             <p className="text-center from-red-500 to-blue-700 bg-linear-to-r bg-clip-text text-transparent text-lg font-bold">
              Value of BMI : {bmi}
             </p>
             <p className="text-center from-red-500 to-blue-700 bg-linear-to-r bg-clip-text text-transparent text-lg font-bold">
              Calculate BMI Result : {bmiResult}
             </p>
             <br />
              <h3 className="text-center text-gl from-red-700 to-yellow-700 bg-linear-to-r bg-clip-text text-transparent font-bold">
                Thank You For Using BMI Calculator App
              </h3>
              <h3 className="text-center text-lg font-bold text-blue-600">
                Have A Nice Day Engineer
              </h3> 
        </div> 
    </div>
  );
}