import ImageLogo from '../image/logo.png';

const Header = () => {
    return(

    <header className="container mx-auto flex justify-between items-center absolute inset-x-0">
        
        <div id="logo" className='w-1/2'>
            <img src={ImageLogo} alt="logo" />
        </div>

        <nav className="flex justify-between w-1/2 text-white list-none">
            <li><a href=''>Overview</a></li>
            <li><a href=''>Collection</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            
        </nav>
    </header>
    )
}

export default Header;