import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface GamingCarouselProps {
  title: string
  images: { src: string; description: string }[]
  children: React.ReactNode 
}

export default function GamingCarousel({
  title,
  images,
  children,
}: GamingCarouselProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-full max-w-4xl h-[80vh] sm:h-[70vh] md:h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg md:text-xl">{title}</DialogTitle>
        </DialogHeader>

        <div className="flex-1">
          <Carousel className="relative h-full">
            <CarouselContent>
              {images.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex flex-col items-center justify-center h-[50vh] sm:h-[60vh] gap-2 sm:gap-4"
                >
                  <img
                    src={item.src}
                    alt={`Screenshot ${idx + 1}`}
                    className="max-h-[40vh] sm:max-h-[50vh] w-auto rounded-lg object-contain"
                  />
                  <p className="text-xs sm:text-sm md:text-base text-center text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}