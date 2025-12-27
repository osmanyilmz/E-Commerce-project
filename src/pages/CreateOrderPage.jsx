import { useState } from "react";
import Step1Address from "./Step1Address";
import Step2Payment from "./Step2Payment";

export default function CreateOrderPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Create Order</h1>

      <div className="flex gap-4 mb-8">
        <span className={step === 1 ? "font-bold" : ""}>1. Address</span>
        <span className={step === 2 ? "font-bold" : ""}>2. Payment</span>
      </div>

      {step === 1 && <Step1Address onNext={() => setStep(2)} />}
      {step === 2 && <Step2Payment />}
    </div>
  );
}
