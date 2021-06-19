import Image from "next/image"

function Header() {
    return (
        <div className=''>
            {/* <h1>This is a Header.</h1> */}
            <Image 
                className="object-contain"
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" 
                width={200} 
                height={100}
            />
        </div>
    )
}

export default Header
