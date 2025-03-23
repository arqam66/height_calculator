"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getActivityLevel } from "@/lib/calculator-utils"
import { FoodRecommendations } from "@/components/food-recommendations"
import { ExerciseTips } from "@/components/exercise-tips"
import { TipsDashboard } from "@/components/tips-dashboard"
import { Flame, Calculator, ArrowRight } from "lucide-react"

export function CalorieCalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("male")
  const [activityLevel, setActivityLevel] = useState("moderate")
  const [goal, setGoal] = useState("maintain")
  const [results, setResults] = useState<{
    calories: number | null
    targetCalories: number | null
    showResults: boolean
  }>({
    calories: null,
    targetCalories: null,
    showResults: false,
  })

  const handleCalculate = () => {
    if (!height || !weight || !age) return

    const weightInKg = Number.parseFloat(weight)
    const heightInCm = Number.parseFloat(height) * 30.48 // Convert feet to cm
    const ageInYears = Number.parseInt(age)
    const activityMultiplier = getActivityLevel(activityLevel)

    // Basic BMR calculation using Mifflin-St Jeor Equation
    let bmr
    if (gender === "male") {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161
    }

    const maintenanceCalories = bmr * activityMultiplier

    // Adjust calories based on goal
    let targetCalories = maintenanceCalories
    if (goal === "lose") {
      targetCalories = maintenanceCalories - 500 // 500 calorie deficit for weight loss
    } else if (goal === "gain") {
      targetCalories = maintenanceCalories + 500 // 500 calorie surplus for weight gain
    }

    setResults({
      calories: maintenanceCalories,
      targetCalories: targetCalories,
      showResults: true,
    })
  }

  return (
    <section id="calorie-calculator" className="scroll-mt-16">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center gap-2 mb-2">
          <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 dark:text-green-400" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500 dark:text-green-400">
            Calorie Calculator
          </h2>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground">
          Calculate your daily calorie needs and get personalized food and exercise recommendations
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-green-200 dark:border-green-900 shadow-md">
          <CardHeader className="bg-green-50 dark:bg-green-950/30 rounded-t-lg border-b border-green-100 dark:border-green-900 px-4 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 dark:text-green-400" />
              Daily Calorie Calculator
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Enter your details to calculate your daily calorie needs
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
            <div className="grid gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calHeight" className="text-xs sm:text-sm font-medium">
                    Height (feet)
                  </Label>
                  <Input
                    id="calHeight"
                    type="number"
                    placeholder="e.g. 5.8"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    step="0.1"
                    className="focus-visible:ring-green-500 text-sm sm:text-base"
                  />
                  <p className="text-xs text-muted-foreground">Format: 5.8 for 5 feet 8 inches</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calWeight" className="text-xs sm:text-sm font-medium">
                    Weight (kg)
                  </Label>
                  <Input
                    id="calWeight"
                    type="number"
                    placeholder="e.g. 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="focus-visible:ring-green-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calAge" className="text-xs sm:text-sm font-medium">
                    Age
                  </Label>
                  <Input
                    id="calAge"
                    type="number"
                    placeholder="e.g. 30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="focus-visible:ring-green-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calGender" className="text-xs sm:text-sm font-medium">
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="calGender" className="focus-visible:ring-green-500 text-sm sm:text-base">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calActivity" className="text-xs sm:text-sm font-medium">
                    Activity Level
                  </Label>
                  <Select value={activityLevel} onValueChange={setActivityLevel}>
                    <SelectTrigger id="calActivity" className="focus-visible:ring-green-500 text-sm sm:text-base">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary</SelectItem>
                      <SelectItem value="light">Light Activity</SelectItem>
                      <SelectItem value="moderate">Moderate Activity</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="very-active">Very Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calGoal" className="text-xs sm:text-sm font-medium">
                  Your Goal
                </Label>
                <Select value={goal} onValueChange={setGoal}>
                  <SelectTrigger id="calGoal" className="focus-visible:ring-green-500 text-sm sm:text-base">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose">Lose Weight</SelectItem>
                    <SelectItem value="maintain">Maintain Weight</SelectItem>
                    <SelectItem value="gain">Gain Weight</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white text-sm sm:text-base py-2 sm:py-3"
              >
                Calculate Calories <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {results.showResults && (
          <>
            <Card className="mt-6 sm:mt-8 border-green-200 dark:border-green-900 shadow-md overflow-hidden">
              <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900 px-4 sm:px-6">
                <CardTitle className="text-base sm:text-lg">Calorie Results</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <div className="text-base sm:text-lg font-medium text-blue-700 dark:text-blue-400 mb-2">
                      Maintenance Calories
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {results.calories?.toFixed(0)}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Calories needed to maintain your current weight
                    </div>
                  </div>

                  <div className="text-center p-4 sm:p-6 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <div className="text-base sm:text-lg font-medium text-green-700 dark:text-green-400 mb-2">
                      {goal === "lose"
                        ? "Weight Loss Target"
                        : goal === "gain"
                          ? "Weight Gain Target"
                          : "Recommended Intake"}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {results.targetCalories?.toFixed(0)}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {goal === "lose"
                        ? "Daily calories for safe weight loss"
                        : goal === "gain"
                          ? "Daily calories for healthy weight gain"
                          : "Recommended daily calorie intake"}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted rounded-lg text-xs sm:text-sm">
                  <p className="font-medium mb-2">Note:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                    <li>These calculations provide estimates based on population averages.</li>
                    <li>Individual metabolism and needs may vary.</li>
                    <li>
                      For weight loss, a deficit of 500 calories/day leads to approximately 0.5kg (1lb) loss per week.
                    </li>
                    <li>Consult with a healthcare professional before making significant dietary changes.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <TipsDashboard calories={results.targetCalories} goal={goal} />

            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FoodRecommendations goal={goal} targetCalories={results.targetCalories} />
              <ExerciseTips goal={goal} />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

