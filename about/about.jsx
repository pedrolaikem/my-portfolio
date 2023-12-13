import Coding from './imgs/Coding.svg'

function AboutMe() {
    return (
        <div className='flex sm:flex-col md:flex-row md:text-start w-screen md:h-[80vh] sm:h-[120vh] items-center justify-center border-y-black border-2'>
            <div className='flex w-[50%] justify-center'>
                <img src={Coding} alt="Coding-img" className='w-[500px]'/>
            </div>
            <div className='w-[50%]'>
                <div className='flex justify-start flex-col gap-2 '>
                    <h1 className='font-extrabold font-inter md:text-[25px] sm:text-[20px] text-center lg:text-start'>Sobre mim</h1>
                    <h2 className='font-bold font-inter md:text-[20px] sm:text-[16px]'>Um desenvolvedor dedicado e em constante aprendizado</h2>
                    <h3 className='font-inter md:text-[16px] text-gray-500 sm:text-[13px]'>Olá, sou Pedro Henrique Alves Lima, um desenvolvedor web com formação em direito. <br /><br />
                        Desde meados de 2023, dedico-me diariamente ao estudo de tecnologias <br />como HTML, CSS, JavaScript, React e TailwindCSS. <br /><br />
                        Minha incursão na programação foi motivada pela curiosidade em entender como funcionava a lógica <br />por trás de um video-game e impulsionada pela vontade de criar um simulador para um jogo, o Teamfight Tactics. <br /><br />
                        Busco desafios e oportunidades para aplicar minhas habilidades e contribuir para projetos.
                        <br />Também gosto de basquete e video-games.
                    </h3>
                </div> 
            </div>
        </div>
    )
} 

export default AboutMe