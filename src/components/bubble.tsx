
interface BubbleProps{
    word: string,
    height?: string,
    width?: string,
    text?: string
}

export default function Bubble({  word, height = "h-12", width = "w-12", text = "text-base"}: BubbleProps) {
    
    return (
        <div className={`${height} ${width} ${text} flex items-center justify-center rounded-full bg-blue-500 text-white`}>
            {word}
        </div>
    )
}