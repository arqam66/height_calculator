import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Info, AlertCircle } from "lucide-react"

interface TipsDashboardProps {
  bmi?: number | null
  status?: string
  calories?: number | null
  goal?: string
}

export function TipsDashboard({ bmi, status, calories, goal }: TipsDashboardProps) {
  // Get quick tips based on status or goal
  const getQuickTips = () => {
    // If we have weight status, use that for tips
    if (status) {
      switch (status.toLowerCase()) {
        case "underweight":
          return [
            "Focus on nutrient-dense foods to gain weight healthily",
            "Eat more frequently throughout the day (5-6 smaller meals)",
            "Add healthy fats like avocados, nuts, and olive oil to meals",
            "Include protein with every meal to support muscle growth",
            "Consider strength training to build muscle mass",
          ]
        case "normal weight":
          return [
            "Maintain your balanced diet and regular exercise routine",
            "Focus on nutrient quality rather than calorie restriction",
            "Stay hydrated with at least 8 glasses of water daily",
            "Aim for 7-9 hours of quality sleep each night",
            "Mix up your exercise routine to prevent plateaus",
          ]
        case "overweight":
          return [
            "Create a moderate calorie deficit of 300-500 calories daily",
            "Increase protein intake to preserve muscle while losing fat",
            "Add more fiber-rich foods to increase satiety",
            "Combine cardio and strength training for optimal results",
            "Track your food intake to increase awareness",
          ]
        case "obese":
          return [
            "Consult with healthcare providers for personalized advice",
            "Focus on gradual, sustainable changes rather than crash diets",
            "Start with walking and gentle movement daily",
            "Reduce processed foods and added sugars",
            "Set small, achievable goals to build momentum",
          ]
        default:
          return []
      }
    }
    // If we have a goal but no status, use the goal
    else if (goal) {
      switch (goal) {
        case "lose":
          return [
            "Create a calorie deficit of 500 calories per day for 1lb/week loss",
            "Prioritize protein and fiber to stay full on fewer calories",
            "Drink water before meals to reduce hunger",
            "Include both cardio and strength training in your routine",
            "Get adequate sleep to regulate hunger hormones",
          ]
        case "gain":
          return [
            "Aim for a calorie surplus of 300-500 calories daily",
            "Focus on nutrient-dense foods rather than empty calories",
            "Prioritize strength training to build muscle mass",
            "Eat before bed to prevent overnight catabolism",
            "Track progress with measurements beyond just weight",
          ]
        case "maintain":
          return [
            "Monitor your weight weekly to catch fluctuations early",
            "Adjust calories based on activity level changes",
            "Focus on whole foods with minimal processing",
            "Stay consistent with your exercise routine",
            "Practice mindful eating to maintain awareness",
          ]
        default:
          return []
      }
    }

    // Default tips if neither status nor goal is provided
    return [
      "Focus on whole, unprocessed foods for better nutrition",
      "Stay hydrated by drinking water throughout the day",
      "Include physical activity in your daily routine",
      "Get 7-9 hours of quality sleep each night",
      "Practice mindful eating to improve your relationship with food",
    ]
  }

  // Get lifestyle changes based on status or goal
  const getLifestyleChanges = () => {
    // If we have weight status, use that for lifestyle changes
    if (status) {
      switch (status.toLowerCase()) {
        case "underweight":
          return [
            "Set reminders to eat if you often forget meals",
            "Keep nutrient-dense snacks readily available",
            "Consider reducing high-intensity cardio temporarily",
            "Focus on resistance training 2-3 times weekly",
            "Track your food intake to ensure adequate calories",
          ]
        case "normal weight":
          return [
            "Maintain regular meal times to support metabolism",
            "Stay active with activities you enjoy",
            "Practice stress management techniques like meditation",
            "Balance your macronutrients (protein, carbs, fats)",
            "Focus on fitness goals beyond weight maintenance",
          ]
        case "overweight":
          return [
            "Incorporate movement throughout your day (take stairs, walk more)",
            "Prepare meals at home to control ingredients and portions",
            "Use smaller plates to manage portion sizes visually",
            "Find physical activities you genuinely enjoy",
            "Practice stress management to reduce emotional eating",
          ]
        case "obese":
          return [
            "Focus on non-scale victories like improved energy and mobility",
            "Make gradual changes that you can sustain long-term",
            "Find supportive communities (in-person or online)",
            "Address emotional eating patterns with professional help if needed",
            "Celebrate every small improvement in habits",
          ]
        default:
          return []
      }
    }
    // If we have a goal but no status, use the goal
    else if (goal) {
      switch (goal) {
        case "lose":
          return [
            "Meal prep to avoid unhealthy convenience foods",
            "Keep a food journal to increase awareness",
            "Find an accountability partner for motivation",
            "Remove trigger foods from your environment",
            "Schedule workouts like important appointments",
          ]
        case "gain":
          return [
            "Set reminders for meals and snacks",
            "Prepare calorie-dense meals in advance",
            "Limit cardio to 1-2 sessions weekly",
            "Prioritize recovery between strength workouts",
            "Track progress with photos and measurements",
          ]
        case "maintain":
          return [
            "Develop sustainable habits you can maintain long-term",
            "Practice mindful eating to recognize hunger and fullness",
            "Adjust your routine seasonally as needed",
            "Find physical activities you genuinely enjoy",
            "Focus on overall health metrics beyond weight",
          ]
        default:
          return []
      }
    }

    // Default lifestyle changes if neither status nor goal is provided
    return [
      "Establish consistent sleep and wake times",
      "Take short movement breaks throughout the day",
      "Practice mindful eating without distractions",
      "Prepare meals at home when possible",
      "Find physical activities that bring you joy",
    ]
  }

  // Get common mistakes to avoid based on status or goal
  const getMistakesToAvoid = () => {
    // If we have weight status, use that for mistakes to avoid
    if (status) {
      switch (status.toLowerCase()) {
        case "underweight":
          return [
            "Relying on junk food to gain weight",
            "Skipping meals due to busy schedule",
            "Excessive cardio exercise",
            "Not eating enough protein",
            "Setting unrealistic weight gain expectations",
          ]
        case "normal weight":
          return [
            "Unnecessary restrictive dieting",
            "Overexercising out of fear of weight gain",
            "Comparing your body to unrealistic standards",
            "Neglecting strength training",
            "Ignoring hunger and fullness cues",
          ]
        case "overweight":
          return [
            "Extreme calorie restriction (under 1200 calories)",
            "Focusing only on cardio and neglecting strength training",
            "Eliminating entire food groups unnecessarily",
            "Expecting rapid results (healthy loss is 1-2 lbs/week)",
            "Using exercise to 'earn' food",
          ]
        case "obese":
          return [
            "Attempting fad or crash diets",
            "Setting overwhelming goals instead of small steps",
            "Starting with high-intensity exercise before building base fitness",
            "Ignoring medical guidance",
            "All-or-nothing thinking about diet and exercise",
          ]
        default:
          return []
      }
    }
    // If we have a goal but no status, use the goal
    else if (goal) {
      switch (goal) {
        case "lose":
          return [
            "Cutting calories too drastically",
            "Avoiding strength training out of fear of 'bulking up'",
            "Focusing only on the scale number",
            "Neglecting protein intake",
            "Unrealistic timeline expectations",
          ]
        case "gain":
          return [
            "Eating excessive junk food to increase calories",
            "Not training with sufficient intensity",
            "Inconsistent eating schedule",
            "Inadequate protein intake",
            "Expecting immediate visible results",
          ]
        case "maintain":
          return [
            "Weighing yourself too frequently",
            "Ignoring gradual weight changes",
            "Neglecting regular exercise",
            "Weekend overeating that offsets weekday habits",
            "Not adjusting intake as activity levels change",
          ]
        default:
          return []
      }
    }

    // Default mistakes to avoid if neither status nor goal is provided
    return [
      "Following fad diets that eliminate food groups",
      "Relying on supplements instead of whole foods",
      "Inconsistent eating and exercise patterns",
      "Ignoring the importance of sleep and stress management",
      "Setting unrealistic expectations for quick results",
    ]
  }

  const quickTips = getQuickTips()
  const lifestyleChanges = getLifestyleChanges()
  const mistakesToAvoid = getMistakesToAvoid()

  return (
    <Card className="mt-6 sm:mt-8 border-t-4 border-t-blue-500 dark:border-t-blue-600 shadow-md">
      <CardHeader className="pb-2 bg-blue-50/50 dark:bg-blue-950/20 px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <Info className="h-4 w-4 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400" />
          Personalized Health Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          <div className="space-y-3 p-3 sm:p-4 rounded-lg bg-blue-50/30 dark:bg-blue-950/10">
            <h3 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Check className="h-4 w-4 sm:h-5 sm:w-5" />
              Quick Tips
            </h3>
            <ul className="space-y-2">
              {quickTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 p-3 sm:p-4 rounded-lg bg-green-50/30 dark:bg-green-950/10">
            <h3 className="text-base sm:text-lg font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
              <Check className="h-4 w-4 sm:h-5 sm:w-5" />
              Lifestyle Changes
            </h3>
            <ul className="space-y-2">
              {lifestyleChanges.map((change, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{change}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 p-3 sm:p-4 rounded-lg bg-red-50/30 dark:bg-red-950/10">
            <h3 className="text-base sm:text-lg font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              Mistakes to Avoid
            </h3>
            <ul className="space-y-2">
              {mistakesToAvoid.map((mistake, index) => (
                <li key={index} className="flex items-start gap-2">
                  <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 dark:text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {(calories || bmi) && (
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg">
            <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2 text-sm sm:text-base">Your Next Steps:</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              {status?.toLowerCase() === "underweight" &&
                "Focus on gradually increasing your calorie intake with nutrient-dense foods. Aim to gain 0.5-1 lb per week through a combination of healthy eating and strength training."}
              {status?.toLowerCase() === "normal weight" &&
                "Maintain your healthy habits while focusing on fitness goals beyond weight, such as strength, endurance, or flexibility improvements."}
              {status?.toLowerCase() === "overweight" &&
                "Create a moderate calorie deficit through diet and exercise. Aim for 1-2 lbs of weight loss per week, focusing on sustainable changes you can maintain long-term."}
              {status?.toLowerCase() === "obese" &&
                "Consider consulting with healthcare providers for personalized guidance. Focus on small, consistent improvements in diet and physical activity rather than drastic changes."}
              {goal === "lose" &&
                !status &&
                `With your target of ${calories?.toFixed(0)} calories per day, focus on nutrient-dense foods that keep you satisfied. Combine this with regular exercise for best results.`}
              {goal === "gain" &&
                !status &&
                `To reach your target of ${calories?.toFixed(0)} calories daily, focus on nutrient-dense foods and strength training to ensure healthy weight gain.`}
              {goal === "maintain" &&
                !status &&
                `Your maintenance target of ${calories?.toFixed(0)} calories allows you to focus on food quality and consistent physical activity without strict calorie counting.`}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

