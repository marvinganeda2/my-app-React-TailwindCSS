import React from 'react'


const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* left side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3355788/pexels-photo-3355788.jpeg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/88212/pexels-photo-88212.jpeg" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3816807/pexels-photo-3816807.jpeg" alt="/" />
            </div>
            {/* right side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, temporibus!</p>
                <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam sapiente, dolores tempora quae, repellendus labore, delectus repellat earum nulla optio fugiat facilis nobis velit! Dignissimos corporis ut odio harum totam?</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>

            </div>
            </div>
        </div>
    )
}

export default Plan