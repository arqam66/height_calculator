"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { calculateBMI, getWeightStatus } from "@/lib/calculator-utils"
import { WeightTipsSection } from "@/components/weight-tips-section"
import { TipsDashboard } from "@/components/tips-dashboard"
import { Scale, Calculator, ArrowRight } from "lucide-react"

export function WeightCalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [results, setResults] = useState<{
    bmi: number | null
    status: string
    showResults: boolean
  }>({
    bmi: null,
    status: "",
    showResults: false,
  })

  const handleCalculate = () => {
    if (!height || !weight) return

    const heightInM = Number.parseFloat(height) * 0.3048 // Convert feet to meters
    const weightInKg = Number.parseFloat(weight)

    const bmi = calculateBMI(weightInKg, heightInM)
    const status = getWeightStatus(bmi)

    setResults({
      bmi,
      status,
      showResults: true,
    })
  }

  // Define status colors
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "underweight":
        return "text-blue-500 dark:text-blue-400"
      case "normal weight":
        return "text-green-500 dark:text-green-400"
      case "overweight":
        return "text-yellow-500 dark:text-yellow-400"
      case "obese":
        return "text-red-500 dark:text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <section id="weight-calculator" className="scroll-mt-16">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-400">
            Weight Calculator
          </h2>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground">Calculate your BMI and get weight management tips</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-blue-200 dark:border-blue-900 shadow-md">
          <CardHeader className="bg-blue-50 dark:bg-blue-950/30 rounded-t-lg border-b border-blue-100 dark:border-blue-900 px-4 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 dark:text-blue-400" />
              BMI Calculator
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Enter your height in feet and weight in kg to calculate your Body Mass Index
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
            <div className="grid gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-xs sm:text-sm font-medium">
                    Height (feet)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g. 5.8"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    step="0.1"
                    className="focus-visible:ring-blue-500 text-sm sm:text-base"
                  />
                  <p className="text-xs text-muted-foreground">Format: 5.8 for 5 feet 8 inches</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-xs sm:text-sm font-medium">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="focus-visible:ring-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm sm:text-base py-2 sm:py-3"
              >
                Calculate BMI <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {results.showResults && (
          <>
            <Card className="mt-6 sm:mt-8 border-blue-200 dark:border-blue-900 shadow-md overflow-hidden">
              <CardHeader className="pb-2 bg-blue-50 dark:bg-blue-950/30 border-b border-blue-100 dark:border-blue-900 px-4 sm:px-6">
                <CardTitle className="text-base sm:text-lg">BMI Results</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl font-bold mb-2 text-blue-500 dark:text-blue-400">
                    {results.bmi?.toFixed(1)}
                  </div>
                  <div className={`text-lg sm:text-xl font-medium ${getStatusColor(results.status)}`}>
                    {results.status}
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-xs sm:text-sm">
                    <p className="font-medium mb-2">BMI Categories:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="p-2 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                        <div className="font-medium text-xs sm:text-sm">Underweight</div>
                        <div className="text-xs">BMI less than 18.5</div>
                      </div>
                      <div className="p-2 rounded bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                        <div className="font-medium text-xs sm:text-sm">Normal weight</div>
                        <div className="text-xs">BMI 18.5 to 24.9</div>
                      </div>
                      <div className="p-2 rounded bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300">
                        <div className="font-medium text-xs sm:text-sm">Overweight</div>
                        <div className="text-xs">BMI 25 to 29.9</div>
                      </div>
                      <div className="p-2 rounded bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300">
                        <div className="font-medium text-xs sm:text-sm">Obese</div>
                        <div className="text-xs">BMI 30 or higher</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TipsDashboard bmi={results.bmi} status={results.status} />

            <WeightTipsSection status={results.status} />
          </>
        )}
      </div>
    </section>
  )
}

