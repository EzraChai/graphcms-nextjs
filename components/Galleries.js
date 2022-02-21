import Image from "next/image"

export const Galleries = ({galleries}) => {
  return (
    <div className="columns-3 gap-3">
        {galleries.map(gallery => (
            <div className="w-full mb-3 rounded-md overflow-hidden" key={gallery.id}>
                <Image layout="responsive" placeholder="blur" blurDataURL={gallery.base64} src={gallery.src} height={gallery.height} width={gallery.width} alt={gallery.description}/>
            </div>
        ))}            
    </div>
  )
}
