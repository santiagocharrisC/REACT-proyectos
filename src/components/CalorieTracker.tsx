import { useMemo } from "react"
import type { Activity } from "../types"
import CaloryDisplay from "./CaloryDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities}: CalorieTrackerProps) {
   
   //Contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activities) => activities.category === 1 ? total + 
    activities.calories : total, 0)  , [activities])
   
    const caloriesBurned = useMemo(() => activities.reduce((total, activities) => activities.category === 2 ? total + 
    activities.calories : total, 0)  , [activities])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CaloryDisplay
                    calories= {caloriesConsumed}
                    text="Consumidas"
                ></CaloryDisplay>

                <CaloryDisplay
                    calories= {caloriesBurned}
                    text="Ejercicios"
                ></CaloryDisplay>

                <CaloryDisplay
                    calories= {netCalories}
                    text="Diferencia"
                ></CaloryDisplay>
            </div>     
        </>
    )
}
