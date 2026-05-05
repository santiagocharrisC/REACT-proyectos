import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"


const tipOptions =[
    {
        id: 'tip-10',
        value: .10,
        label: '10%',
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%',
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%',
    }
]

type TipPercentageFormProps ={
    dispatch: Dispatch<OrderActions>,
    tip: number

}

export default function TipPercentageForm({dispatch, tip} : TipPercentageFormProps ) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propinas:</h3>
        <form>
            {tipOptions.map(tipOptions => (
                <div key={tipOptions.id} className="flex gap-2">
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input
                        id={tipOptions.id}
                        type="radio"
                        name="tip"
                        value={tipOptions.value}
                        onChange={e => dispatch({type: 'add-tip',playload: {value: +e.target.value}})}
                        checked={tipOptions.value === tip}
                    />  
                </div>
            ))}
        </form>
    </div>
  )
}
