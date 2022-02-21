import Image from "next/image"
import {AiOutlineZoomIn} from "react-icons/ai"

export const Galleries = ({galleries}) => {
  return (
    <div className="columns-3 gap-2">
        {galleries.map(gallery => (
            <div className="group relative w-full mb-2 overflow-hidden" key={gallery.id}>
                <div className="absolute w-full h-full bg-black z-[1] opacity-0 group-hover:opacity-40 transition-all"></div>
                <div className="absolute bottom-5 right-5 opacity-[0.85] bg-black z-[2] w-10 h-10 rounded-full hidden group-hover:block">
                    <button onClick={() => (window.location = gallery.src)} className="w-full h-full">
                        <div className="flex justify-center">
                            <AiOutlineZoomIn className="w-5 h-5 text-white"/>
                        </div>
                    </button>
                </div>
                <Image layout="responsive" placeholder="blur" blurDataURL={gallery.base64} src={gallery.src} height={gallery.height} width={gallery.width} alt={gallery.description}/>
            </div>
        ))}            
    </div>
  )
}
