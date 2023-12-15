import { changeLanguage } from 'i18next';
import Emails from './imgs/emails-bro.svg'
import Emails2 from './imgs/emails-bro2.svg'
import { useTranslation, Trans } from 'react-i18next'
import i18n from '../i18n';



const lngs = {
    en: { nativeName: 'English' },
    pt: { nativeName: 'Português' }
}; 

function Contacts() {
    const { t, i18n } = useTranslation()
    return (
        <div className="w-screen md:h-[62vh] sm:h-[80vh]">
            {/* Contact me section */}
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-black font-inter text-[30px] font-bold'><Trans i18nKey="description.contact">Entre em contato!</Trans></h1>
                </div>
                <div>
                    <img src={Emails} alt="" className='w-[400px]' id='img'/>
                </div>
                <div id="txt-copy" className=' flex lg:w-[600px] w-[300px] h-[50px] border-black border-2 items-center justify-center'>
                    {/* Email area */}
                    <div>
                        <span id="email">pedro-6-h@hotmail.com</span>
                    </div>
                    {/* End email area */}
                </div>
                {/* Copy button */}
                <div>
                    <button id="txt-copied" className='bg-black text-white lg:w-[600px] w-[300px] h-[50px]' onClick={Copy}>
                        {t('description.copy')}
                    </button>
                </div>
                {/* End copy button */}
            </div>
            {/* End Contact me section */}
        </div>
    )

    
function Copy() {
    
    //variables
    let text = document.querySelector('#txt-copied')
    let emailCopy = 'pedro-6-h@hotmail.com'
    let img = document.querySelector('#img')

    //Code

    //What happens on click 
    //If the language is strictly equal to 'en', the translationKey will receive 'description.copied', 
    //since the portuguese version also needs this Key, it will receive the same value. 
    //But it will work out just as it should
    //The img will also be replaced with Emails 2, which is the green version of the image.
    //It will be added an bounce animation.
    const translationKey = i18n.language === 'en' ? 'description.copied' : 'description.copied'
    text.innerText = t(translationKey)
    img.src = `${Emails2}`
    img.classList.add('animate-bounce')

    //After 1500 ms, the copy function will return to its original state.
    //If the language is strictly equal to 'en', the translationKey variable will receive 'description.copy' which is the default value
    //Also the image will go back to the normal img and the animation will be removed.
    setTimeout(function() {
        const translationKey = i18n.language === 'en' ? 'description.copy' : 'description.copy'
        text.innerText = t(translationKey)
        img.src = `${Emails}`
        img.classList.remove('animate-bounce')
    }, 1500);
    
    //This will write the emailCopy variable(my email in this scenario) on the clipboard, disposing it for whoever click the button and want to paste the email.
    navigator.clipboard.writeText(emailCopy)
    
}
    
} export default Contacts



