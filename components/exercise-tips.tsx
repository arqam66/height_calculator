import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

interface ExerciseTipsProps {
  goal: string
}

export function ExerciseTips({ goal }: ExerciseTipsProps) {
  // Get cardio recommendations based on goal
  const getCardioRecommendations = () => {
    if (goal === "lose") {
      return [
        {
          name: "Walking",
          description:
            "Start with 30 minutes daily, gradually increasing to 45-60 minutes. Aim for a brisk pace that elevates your heart rate.",
          frequency: "5-7 days per week",
          intensity: "Moderate - you should be able to talk but not sing",
        },
        {
          name: "Jogging/Running",
          description:
            "Begin with a walk/jog interval approach if you're new to running. Gradually increase running intervals.",
          frequency: "3-5 days per week",
          intensity: "Moderate to high, depending on fitness level",
        },
        {
          name: "Cycling",
          description: "Indoor or outdoor cycling is low-impact and effective for burning calories.",
          frequency: "3-5 days per week",
          intensity: "Moderate to high, mix in intervals for best results",
        },
        {
          name: "Swimming",
          description: "Full-body, low-impact exercise ideal for those with joint issues.",
          frequency: "2-4 days per week",
          intensity: "Moderate, focus on continuous movement",
        },
        {
          name: "HIIT (High-Intensity Interval Training)",
          description: "Short bursts of intense exercise followed by brief recovery periods.",
          frequency: "2-3 days per week (not consecutive)",
          intensity: "High intensity during work intervals, full recovery during rest",
        },
      ]
    } else if (goal === "gain") {
      return [
        {
          name: "Light Walking",
          description: "Helps with recovery and doesn't burn excessive calories.",
          frequency: "3-5 days per week",
          intensity: "Low to moderate, focus on enjoyment rather than calorie burn",
        },
        {
          name: "Short HIIT Sessions",
          description: "Brief, intense workouts that boost metabolism without excessive calorie burn.",
          frequency: "1-2 days per week",
          intensity: "High intensity but short duration (10-15 minutes)",
        },
        {
          name: "Rowing",
          description: "Builds upper body strength while providing cardiovascular benefits.",
          frequency: "1-2 days per week",
          intensity: "Moderate, focus on technique and strength",
        },
        {
          name: "Stair Climbing",
          description: "Builds lower body strength while improving cardiovascular fitness.",
          frequency: "1-2 days per week",
          intensity: "Moderate, focus on controlled movements",
        },
        {
          name: "Recreational Sports",
          description: "Basketball, soccer, or tennis can provide cardio while being enjoyable.",
          frequency: "1-2 days per week",
          intensity: "Varies, focus on fun and skill development",
        },
      ]
    } else {
      // maintain
      return [
        {
          name: "Mixed Cardio",
          description: "Variety of activities to maintain cardiovascular health without boredom.",
          frequency: "3-5 days per week",
          intensity: "Moderate, with occasional high-intensity sessions",
        },
        {
          name: "Jogging/Running",
          description: "Efficient way to maintain cardiovascular fitness.",
          frequency: "2-4 days per week",
          intensity: "Moderate, with one longer session per week",
        },
        {
          name: "Cycling",
          description: "Low-impact option for regular cardio workouts.",
          frequency: "2-4 days per week",
          intensity: "Moderate, mix flat terrain with hills",
        },
        {
          name: "Group Fitness Classes",
          description: "Provides structure, variety, and social motivation.",
          frequency: "2-3 days per week",
          intensity: "Varies by class type",
        },
        {
          name: "Cross-Training",
          description: "Alternating between different cardio activities to work different muscle groups.",
          frequency: "3-5 days per week",
          intensity: "Moderate, with focus on enjoyment and consistency",
        },
      ]
    }
  }

  // Get strength training recommendations based on goal
  const getStrengthRecommendations = () => {
    if (goal === "lose") {
      return [
        {
          name: "Circuit Training",
          description: "Moving quickly between exercises with minimal rest to keep heart rate elevated.",
          frequency: "2-3 days per week",
          focus: "Full body, 12-15 reps per exercise, moderate weight",
        },
        {
          name: "Compound Movements",
          description: "Exercises that work multiple muscle groups like squats, deadlifts, and push-ups.",
          frequency: "2-3 days per week",
          focus: "8-12 reps, moderate weight with proper form",
        },
        {
          name: "Bodyweight Exercises",
          description: "Effective for burning calories while building strength without equipment.",
          frequency: "3-4 days per week",
          focus: "High reps (15-20) or timed intervals",
        },
        {
          name: "Resistance Band Workouts",
          description: "Portable, versatile option for adding resistance without heavy weights.",
          frequency: "2-4 days per week",
          focus: "12-15 reps with appropriate resistance",
        },
        {
          name: "Supersets",
          description: "Performing two exercises back-to-back without rest to increase calorie burn.",
          frequency: "2-3 days per week",
          focus: "Pair opposing muscle groups, 10-12 reps each",
        },
      ]
    } else if (goal === "gain") {
      return [
        {
          name: "Heavy Compound Lifts",
          description: "Focus on squats, deadlifts, bench press, rows, and overhead press.",
          frequency: "3-4 days per week",
          focus: "4-6 reps with heavy weight, longer rest periods (2-3 minutes)",
        },
        {
          name: "Progressive Overload",
          description: "Gradually increasing weight or reps to continually challenge muscles.",
          frequency: "3-4 days per week",
          focus: "Track workouts and increase weight by 2.5-5% when possible",
        },
        {
          name: "Hypertrophy Training",
          description: "Focus on muscle growth through moderate weights and higher volume.",
          frequency: "3-5 days per week",
          focus: "8-12 reps, moderate to heavy weight, focus on mind-muscle connection",
        },
        {
          name: "Split Routines",
          description: "Dividing workouts by muscle groups to allow adequate recovery.",
          frequency: "4-6 days per week",
          focus: "Example: push/pull/legs or upper/lower splits",
        },
        {
          name: "Accessory Lifts",
          description: "Isolation exercises to target specific muscles after compound movements.",
          frequency: "3-5 days per week",
          focus: "10-15 reps, moderate weight, focus on form and contraction",
        },
      ]
    } else {
      // maintain
      return [
        {
          name: "Balanced Strength Program",
          description: "Mix of compound and isolation exercises to maintain overall strength.",
          frequency: "2-3 days per week",
          focus: "8-12 reps, moderate weight, full body approach",
        },
        {
          name: "Functional Training",
          description: "Exercises that mimic everyday movements to maintain practical strength.",
          frequency: "2-3 days per week",
          focus: "Body weight or light resistance, focus on quality movement",
        },
        {
          name: "Bodyweight Circuits",
          description: "Convenient way to maintain strength without gym access.",
          frequency: "2-3 days per week",
          focus: "10-15 reps of 5-8 exercises in circuit format",
        },
        {
          name: "Maintenance Lifting",
          description: "Continuing to lift weights that challenge you but don't require constant progression.",
          frequency: "2-3 days per week",
          focus: "8-12 reps at 70-80% of your maximum capacity",
        },
        {
          name: "Core Strengthening",
          description: "Focus on abdominal and back muscles to support overall fitness.",
          frequency: "2-4 days per week",
          focus: "Mix of static holds (planks) and dynamic movements",
        },
      ]
    }
  }

  // Get weight loss specific tips
  const getWeightLossTips = () => {
    return [
      "Combine cardio and strength training for optimal fat loss",
      "Focus on creating a calorie deficit through both diet and exercise",
      "Consider morning workouts on an empty stomach for increased fat burning",
      "Track your workouts to ensure progressive overload",
      "Include at least one HIIT session weekly for metabolic boost",
      "Don't rely solely on the scale - take measurements and photos",
      "Stay consistent rather than doing extreme workouts occasionally",
      "Ensure adequate protein intake to preserve muscle mass",
      "Get 7-9 hours of quality sleep to support recovery and hormone balance",
      "Stay hydrated before, during, and after workouts",
    ]
  }

  const cardioRecommendations = getCardioRecommendations()
  const strengthRecommendations = getStrengthRecommendations()
  const weightLossTips = goal === "lose" ? getWeightLossTips() : null

  return (
    <Card className="border-green-200 dark:border-green-900 shadow-md h-full">
      <CardHeader className="bg-green-50/50 dark:bg-green-950/20 border-b border-green-100 dark:border-green-900 px-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg">Exercise Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
        <Tabs defaultValue="cardio" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6">
            <TabsTrigger value="cardio" className="text-xs sm:text-sm">
              Cardio Workouts
            </TabsTrigger>
            <TabsTrigger value="strength" className="text-xs sm:text-sm">
              Strength Training
            </TabsTrigger>
            {goal === "lose" && (
              <TabsTrigger value="weight-loss" className="col-span-2 mt-2 text-xs sm:text-sm">
                Weight Loss Tips
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="cardio" className="space-y-3 sm:space-y-4">
            {cardioRecommendations.map((exercise, index) => (
              <div key={index} className="border-b border-border pb-2 sm:pb-3 last:border-0 last:pb-0">
                <h3 className="font-medium text-blue-700 dark:text-blue-400 text-sm sm:text-base">{exercise.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{exercise.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-1 sm:mt-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-medium text-foreground">Frequency:</span>{" "}
                    <span className="text-muted-foreground">{exercise.frequency}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Intensity:</span>{" "}
                    <span className="text-muted-foreground">{exercise.intensity}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg text-xs">
              <p className="text-muted-foreground">
                {goal === "lose"
                  ? "For weight loss, aim for 150-300 minutes of moderate cardio per week. Mix intensities for best results."
                  : goal === "gain"
                    ? "When gaining weight, limit cardio to 1-3 sessions weekly, focusing on shorter, more intense sessions."
                    : "For maintenance, 150 minutes of moderate cardio weekly is recommended for cardiovascular health."}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="strength" className="space-y-3 sm:space-y-4">
            {strengthRecommendations.map((exercise, index) => (
              <div key={index} className="border-b border-border pb-2 sm:pb-3 last:border-0 last:pb-0">
                <h3 className="font-medium text-blue-700 dark:text-blue-400 text-sm sm:text-base">{exercise.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{exercise.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-1 sm:mt-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-medium text-foreground">Frequency:</span>{" "}
                    <span className="text-muted-foreground">{exercise.frequency}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Focus:</span>{" "}
                    <span className="text-muted-foreground">{exercise.focus}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg text-xs">
              <p className="text-muted-foreground">
                {goal === "lose"
                  ? "Strength training preserves muscle mass during weight loss and boosts metabolism even after your workout."
                  : goal === "gain"
                    ? "Prioritize strength training for weight gain, as it stimulates muscle growth when combined with a calorie surplus."
                    : "Regular strength training maintains muscle mass, bone density, and metabolic health as you age."}
              </p>
            </div>
          </TabsContent>

          {goal === "lose" && (
            <TabsContent value="weight-loss" className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {weightLossTips?.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-3 w-3 sm:h-5 sm:w-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50/50 dark:bg-green-950/20 rounded-lg">
                <h3 className="font-medium text-green-800 dark:text-green-300 mb-1 text-xs sm:text-sm">
                  Sample Weekly Weight Loss Workout Plan:
                </h3>
                <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Monday:</span> 30-45 min strength training (full body)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Tuesday:</span> 30 min cardio (moderate intensity)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Wednesday:</span> 20 min HIIT or interval training
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Thursday:</span> Rest or light activity (walking,
                    yoga)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Friday:</span> 30-45 min strength training (full body)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Saturday:</span> 45-60 min longer cardio session
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Sunday:</span> Active recovery (light walking,
                    stretching)
                  </li>
                </ul>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}

