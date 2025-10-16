"use client";

import { useState } from "react";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState<number | "">("");
  const [years, setYears] = useState<number | "">("");
  const [rate, setRate] = useState<number | "">("");
  const [monthly, setMonthly] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  function calculate() {
    if (!principal || !years || !rate) {
      setError("Please fill in all fields before calculating.");
      return;
    }
    setError(null);
    const n = Number(years) * 12;
    const r = Number(rate) / 100 / 12;
    const P = Number(principal);
    const payment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalPay = payment * n;
    setMonthly(Number(payment.toFixed(2)));
    setTotal(Number(totalPay.toFixed(2)));
  }

  function reset() {
    setPrincipal("");
    setYears("");
    setRate("");
    setMonthly(null);
    setTotal(null);
    setError(null);
  }

  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16 px-4 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Loan Calculator
            </h1>
            <p className="text-gray-500 mt-2">
              Calculate your monthly and total loan payments easily.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <input
              type="number"
              placeholder="Principal (₦ e.g., 10000)"
              value={principal}
              onChange={(e) =>
                setPrincipal(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 shadow-sm"
            />
            <input
              type="number"
              placeholder="Years (e.g., 3)"
              value={years}
              onChange={(e) =>
                setYears(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 shadow-sm"
            />
            <input
              type="number"
              placeholder="Rate % (e.g., 7.5)"
              value={rate}
              onChange={(e) =>
                setRate(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 shadow-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={calculate}
              className="w-full sm:w-auto bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 shadow-md hover:shadow-lg transition"
            >
              Calculate
            </button>
            <button
              onClick={reset}
              className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Reset
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Results */}
          {monthly !== null && total !== null && (
            <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-6 text-center shadow-sm">
              <h2 className="text-xl font-bold text-cyan-700 mb-2">
                Your Results
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-800">
                <div>
                  <p className="text-sm text-gray-500">Monthly Payment</p>
                  <p className="text-2xl font-bold">
                    ₦{monthly.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Payment</p>
                  <p className="text-2xl font-bold">
                    ₦{total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
