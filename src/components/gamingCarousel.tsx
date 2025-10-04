import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


interface GamingCarouselProps {
  title: string,
  images: {src: string, description: string}[],
}

export default function GamingCarousel({ title, images }: GamingCarouselProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-test-black text-white rounded-lg hover:bg-test-black/80">
          Open {title} Gallery
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title} Screenshots</DialogTitle>
        </DialogHeader>

        <div className="flex-1">
          <Carousel className="relative h-full">
            <CarouselContent>
              {images.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex flex-col items-center justify-center h-[60vh] gap-4"
                >
                  <img
                    src={item.src}
                    alt={`Screenshot ${idx + 1}`}
                    className="max-h-[50vh] rounded-lg object-contain"
                  />
                  <p className="text-sm md:text-base text-center text-gray-700 dark:text-gray-300">
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
  );
}