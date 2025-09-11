
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/1.png`,
      title: "Side of Mountain at Night",
      description: "A magnificent mountain at the Expedition spawn"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/2.png`,
      title: "Mountain Vista",
      description: "Beautiful icy mountain with a river beside it"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/3.png`,
      title: "Large Forest",
      description: "A large forest that never stops"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/4.png`,
      title: "Forest Vegetation",
      description: "Beautiful custom generation of flowers and grass"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/5.png`,
      title: "Tallest Icy Mountain",
      description: "Tallest mounatin on the whole server"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/6.png`,
      title: "Floating Islands",
      description: "Islands reaching for the sky"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/7.png`,
      title: "Long Icy Valley",
      description: "Winding icy valley leading to the sea"
    },
    {
      src: `${import.meta.env.BASE_URL}lovable-uploads/8.png`,
      title: "Dry Mesa",
      description: "Largest Mesa biome on the server"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-black-50">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Server Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore amazing builds, landscapes, and adventures from our Minecraft community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-4xl max-h-full">
            <img 
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
