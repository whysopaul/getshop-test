'use client'

import { useEffect, useState } from "react"

export default function Footer() {

    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        if (!email) {
            setIsError(false)
            return
        }

        if (!email.match(/^[^@]+@\w+\.\w+$/)) {
            setIsError(true)
            return
        }

        setIsError(false)
    }, [email])

    return <footer className='footer'>
        <div className='footer-header'>
            <h2 className='h2'>
                Заполните форму
            </h2>
        </div>
        <div className='footer-form'>
            <div className='footer-textarea'>
                <textarea
                    className='text-2'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Напишите свой вопрос'
                />
            </div>
            <div className='footer-submit'>
                <div className='footer-submit-email'>
                    <input
                        className={isError ? 'text-2 error' : 'text-2'}
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Введите e-mail'
                    />
                    <span className={isError ? 'footer-submit-email-error footer-submit-email-error__visible' : 'footer-submit-email-error'}>
                        Неправильно указана почта
                    </span>
                </div>
                <div
                    className='footer-submit-checkbox'
                    onClick={() => setIsChecked(!isChecked)}
                >
                    {isChecked
                        ? <div className='footer-submit-checkbox-input footer-submit-checkbox-input__checked'>
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.26673 0.754181L3.77507 5.24585L1.7334 3.20418"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        : <div className='footer-submit-checkbox-input' />}
                    <span className='footer-submit-checkbox-label'>
                        Я ознакомлен(а) с <a>политикой конфиденциальности</a> и согласен(на) на обработку <a>персональных данных</a>.
                    </span>
                </div>
                <button className='button button-black'>
                    Отправить
                </button>
            </div>
        </div>
    </footer>
}