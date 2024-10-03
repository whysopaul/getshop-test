export default function Footer() {
    return <footer className='footer'>
        <div className='footer-header'>
            <h2 className='h2'>
                Заполните форму
            </h2>
        </div>
        <div className='footer-form'>
            <div className='footer-textarea'>
                <textarea className='text-2' placeholder='Напишите свой вопрос' />
            </div>
            <div className='footer-submit'>
                <input className='text-2' type='email' placeholder='Введите e-mail' />
                <label>
                    <input type='checkbox' />
                    <span>
                        Я ознакомлен(а) с <a>политикой конфиденциальности</a> и согласен(на) на обработку <a>персональных данных</a>.
                    </span>
                </label>
                <button className='button button-black'>
                    Отправить
                </button>
            </div>
        </div>
    </footer>
}