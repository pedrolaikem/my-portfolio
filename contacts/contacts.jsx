import Emails from './imgs/emails-bro.svg'

function Contacts() {
    return (
        <div className="w-screen h-[62vh] border-y-black border-2">
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-black font-inter text-[30px] font-bold'>Entre em contato!</h1>
                </div>
                <div>
                    <img src={Emails} alt="" className='w-[400px]'/>
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
    let emailBackground = document.getElementById('txt-copy')
    let text = document.getElementById('txt-copied')
    let emailCopy = 'pedro-6-h@hotmail.com'
    text.innerText = 'Texto Copiado!'
    emailBackground.style.background = 'green'
    setTimeout(function() {
        text.innerText = 'Clique para copiar'
        emailBackground.style.background = ''
        
    }, 2000);
    navigator.clipboard.writeText(emailCopy)
    
}


