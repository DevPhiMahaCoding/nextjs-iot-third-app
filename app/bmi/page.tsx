"use client";
import {useState} from "react"; 
import Image from "next/image";
import bmiImg from "@/assets/images/bmi.png";
import { useRouter } from "next/navigation"; 

export default function Page() {
  const router = useRouter(); 
  // Create State Module inside in Components
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiResult, setBmiResult] = useState(""); 

  // Create Function to Button Calculate BMI
  const handleCalClick = () => {
      //Calculator BMI and Change to Result Page
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      if(isNaN(weightNum) || isNaN(heightNum) || heightNum <= 0){
        alert("Please enter a valid weight and height"); 
        return; 
      }
      const heightInMeters = heightNum / 100;
      const CalculaterBmi = weightNum / (heightInMeters * heightInMeters);
      setBmi(CalculaterBmi.toFixed(2));

      //แปลผลลัพธ์ Result BMI
      let Result = " ";
      if(CalculaterBmi < 18.5){
        Result = "Underweight";
      }else if(CalculaterBmi < 25){
        Result = "Normal weight";
      }else if(CalculaterBmi < 30){
        Result = "Overweight";
      }else{
        Result = "Obesity";
      }
      setBmiResult(Result);

      //Display Message "/resultbmi"
      router.push(`/resultbmi?weight=${weight}&height=${height}&bmi=${bmi}&bmiResult=${bmiResult}`);
  };
  
  // Create Function to Reset BMI
  const handleResetClick = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setBmiResult(""); 
  }; 
  return (
    <div className="w-1/2 border-gray-300 mx-auto shadow-2xl shadow-gray-300
                    p-10 rounded-lg">
        {/* Section to Show Image */}
        <Image src={bmiImg} alt="BMI"
        width={80} height={80}
        className="mx-auto"/>
        
        {/* Section to Show Title Web */} 
        <h1 className="text-2xl font-bold text-center mt-4 text-blue-800"> 
            BMI Calculator
        </h1>

        {/* Section to Show Subtitle */}
        <h3 className="text-xl text-center mt-2 font-bold text-gray-600"> 
            Calculate Of BMI 
        </h3>

        {/* Section to Show Form Data and Button to Click */}
        <div className="flex flex-col gap-4 mt-6"> 
          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" name="weight" id="weight"
                 className="border border-gray-300 rounded-md p-2 font-bold"
                 value={weight}
                 onChange={(e) => setWeight(e.target.value)}/> 
          <label htmlFor="height">Height (cm)</label>
          <input type="number" name="height" id="height"
                 className="border border-gray-300 rounded-md p-2 font-bold"
                 value={height}
                 onChange={(e) => setHeight(e.target.value)}/>
        {/* Section to Show Button */} 
        <button className="bg-blue-500 text-white p-3 rounded-md
                           hover:bg-blue-600 transition"
            onClick={handleCalClick}>
            Calculate Of BMI
        </button>
        <button className="bg-orange-500 text-white p-3 rounded-md
                      hover:bg-orange-600 transition" 
            onClick={handleResetClick}>
            Reset
        </button>
        </div> 
    </div> 
  );
} 