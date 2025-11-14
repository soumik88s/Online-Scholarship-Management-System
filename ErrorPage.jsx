import { Link } from 'react-router-dom';
import errorImg from './assets/404.png'
const ErrorPage = () => {
    return (
        <div className='flex bg-[#f2f8f1] h-[100vh] pt-10 justify-center items-center flex-col text-center'>
            <img className='max-h-96' src={errorImg} alt="" />
            <div className='flex flex-col gap-5'>
                <p className='text-5xl font-bold'>OOPS!</p>
                <p className='text-3xl font-semibold'>Looks like you have lost. <br /> Use this Button to go back to Home.</p>
                <Link to={'/'}><button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7'>Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;