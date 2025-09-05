

export default function HomePage() {
    return (
        <div className="w-[50%] justify-center items-center flex-col">
            <div className="bg-red-500 border-b-black border-2 h-[200px] w-[200px] rounded-full flex items-center justify-center overflow-hidden">
                <img src="/vite.svg" alt="profile" className="h-full w-full object-cover" />
            </div>
            <h1>Jacob Nye</h1>
            <p>
                Hello, I'm an aspiring software engineer that loves making websites and solving problems involing my hobbies of compeittive gaming and films. Feel free to check out some examples in projects. 
            </p>
        </div>
    )
}