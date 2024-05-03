import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import img from '../assets/profile.jpeg'

const Banner = () => {
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal">Olá! Meu nome é<span className="text-cyan-400"> Larissa Estella</span></h1>
                <h1 className="text-[20px] font-semibold mb-8 leading-normal">Estudante de Engenharia de Sotfware na FIAP</h1>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="" className="text-cyan-400 hover:text-cyan-400 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="" className="text-cyan-400 hover:text-cyan-400 rounded-full glow p-2">
                                <FaLinkedin className="text-[28px]"/>
                            </a>
                            <a href="" className="text-cyan-400 hover:text-cyan-400 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a>
                            <a href="" className="text-cyan-400 hover:text-cyan-400 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={img} width={290} height={290} className='rounded-full border-2 p-1 border-cyan-400 img_glow' alt="imagem" />
        </div>
    );
};

export default Banner;