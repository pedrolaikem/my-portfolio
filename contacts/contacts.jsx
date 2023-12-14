import Emails from './imgs/emails-bro.svg'
import Emails2 from './imgs/emails-bro2.svg'

function Contacts() {
    return (
        <div className="w-screen md:h-[62vh] sm:h-[80vh]">
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-black font-inter text-[30px] font-bold'>Entre em contato!</h1>
                </div>
                <div>
                    <img src={Emails} alt="" className='w-[400px]' id='img'/>
                </div>
                <div id="txt-copy" className=' flex lg:w-[600px] w-[300px] h-[50px] border-black border-2 items-center justify-center'>
                    <div>
                        <span id="email">pedro-6-h@hotmail.com</span>
                    </div>
                    <div>
                        <i></i>
                    </div>
                </div>
                <div>
                    <button id="txt-copied"className='bg-black text-white lg:w-[600px] w-[300px] h-[50px]' onClick={copy}>Clique para copiar</button>
                </div>
            </div>
        </div>
    )
} export default Contacts

function copy() {
    //variables
    let emailBackground = document.getElementById('txt-copy')
    let text = document.getElementById('txt-copied')
    let emailCopy = 'pedro-6-h@hotmail.com'
    let img = document.getElementById('img')

    //What happens on click
    img.src = `${Emails2}`
    text.innerText = 'Email copiado!'
    emailBackground.style.background = 'green'
    img.classList.add('animate-bounce')
    //Time in ms to the function to end, and what happens after the function ends
    setTimeout(function() {
        text.innerText = 'Clique para copiar'
        emailBackground.style.background = ''
        img.src = `${Emails}`
        img.classList.remove('animate-bounce')
    }, 1500);
    navigator.clipboard.writeText(emailCopy)
    
}


