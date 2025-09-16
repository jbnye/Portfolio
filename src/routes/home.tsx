

export default function HomePage() {
    return (
        <div className="flex flex-col w-[50%] justify-center items-center ">
            <div className="w-full h-full flex justify-center">
                <div className="bg-red-500 border-b-black border-2 h-[200px] w-[200px] rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/vite.svg" alt="profile" className="h-[200px] w-[200px] object-cover" />
                </div>
            </div>
            <h1 className="text-4xl m-2">Jacob Nye</h1>
            <p className="text-xl m-3">
                Hello, I'm an aspiring software engineer that loves making websites and solving problems involving my hobbies of competitive gaming and films. Feel free to check out some examples in projects. 
            </p>
        </div>
    )
}