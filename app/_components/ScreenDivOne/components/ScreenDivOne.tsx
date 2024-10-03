'use client'

import { useState } from "react"

export function ScreenDivOne() {

    const [mode, setMode] = useState(1)

    return <section className='screen-div-one'>
        <div className='screen-div-one-header'>
            <h2 className='h2'>
                Дополнительные источники выручки для разных компаний
            </h2>
        </div>
        <div className='screen-div-one-toggle'>
            <div className='screen-div-one-toggle-buttons'>
                <button className={mode === 1 ? 'h3 active' : 'h3'} onClick={() => setMode(1)}>
                    Операторам
                </button>
                <button className={mode === 2 ? 'h3 active' : 'h3'} onClick={() => setMode(2)}>
                    OTT сервисам
                </button>
            </div>
            <p className='text-1'>
                {mode === 1 && 'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации'}
                {mode === 2 && 'Дополнительные возможности обогащения данных об аудитории и монетизации'}
            </p>
        </div>
    </section>
}