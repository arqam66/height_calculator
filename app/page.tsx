import { WeightCalculator } from "@/components/weight-calculator"
import { CalorieCalculator } from "@/components/calorie-calculator"
import { ThemeToggle } from "@/components/theme-toggle"
import { Activity, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-background dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <header className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent">
              Health Calculator
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Calculate your BMI, daily calorie needs, and get personalized diet and exercise recommendations
          </p>
        </header>

        <div className="space-y-16 sm:space-y-20">
          <WeightCalculator />
          <div className="border-t border-border pt-12 sm:pt-16"></div>
          <CalorieCalculator />
        </div>

        <footer className="mt-16 sm:mt-24 text-center text-muted-foreground py-4 sm:py-6 border-t border-border">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-4 w-4 text-red-500" />
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} Health Calculator. All rights reserved to Arqam Hussain.
            </p>
          </div>
          <p className="text-xs">Designed for better health and wellness tracking</p>
        </footer>
      </div>
    </div>
  )
}

