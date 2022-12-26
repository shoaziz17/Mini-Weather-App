import React, { useState } from 'react'

function Temperature() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('bg-slate-300')
    const [emoji, setEmoji] = useState('☁️')

    const hot = () => {
        const newTemperature = count + 1;
        if (newTemperature > 0 && newTemperature < 10) {
            setColor('bg-red-500')
            setEmoji('🌤')
        } else if (newTemperature >= 10) {
            setColor('bg-red-700')
            setEmoji('☀️')
        } else if (newTemperature < 0 && newTemperature < -10) {
            setColor('bg-blue-800')
            setEmoji('❄️')
        } else if (newTemperature >= -10 && newTemperature < 0) {
            setColor('bg-blue-600')
            setEmoji('🌧')
        } else {
            setColor('bg-slate-300')
            setEmoji('☁️')
        }
        setCount(newTemperature)
    }

    const cold = () => {
        const newTemperature = count - 1;
        if (newTemperature < 0 && newTemperature > -10) {
            setColor('bg-blue-600')
            setEmoji('🌧')
        } else if (newTemperature <= -10) {
            setColor('bg-blue-800')
            setEmoji('❄️')
        } else if (newTemperature > 0 && newTemperature < 10) {
            setColor('bg-red-500')
            setEmoji('🌤')
        } else if (newTemperature >= 10) {
            setColor('bg-red-700')
            setEmoji('☀️')
        } else {
            setColor('bg-slate-300')
            setEmoji('☁️')
        }
        setCount(newTemperature)
    }

    return (
        <div className={`${color} w-1/4 rounded-md p-5`}>
            <div>
                <h1 className='text-center font-semibold text-7xl'>{count}°</h1>
                <h2 className='text-5xl text-center py-1'>{emoji}</h2>
            </div>
            <div className='flex gap-5 items-center justify-center mt-10'>
                <button onClick={cold} className='bg-blue-500 px-5 py-1 rounded-md text-2xl font-semibold'>❄️</button>
                <button onClick={hot} className='bg-orange-500 px-5 py-1 rounded-md text-2xl font-semibold'>☀️</button>
            </div>
        </div>
    )
}

export default Temperature