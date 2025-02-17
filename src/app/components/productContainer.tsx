import Image from "next/image";
import Link from "next/link";

interface ProductContainerProps {
    name: string,
    description: string,
    image: string,
    image_right?: boolean
}

const ProductContainer = ({ name, description, image, image_right }: ProductContainerProps) => (
    <div className={`flex flex-row gap-10 items-center ${image_right && "justify-end"}`}>
        {!image_right && (
            <div>
                <Image src={image} alt="Product image" height={200} width={200} className="max-h-40 w-auto cursor-pointer object-contain" />
            </div>
        )}
        <div className="flex flex-col">
            <div className="text-sans text-gray-700 font-semibold">
                {name}
            </div>
            <div className="text-sans text-gray-600 max-w-80">
                {description}
            </div>
            <Link href={"/page2"} className="text-sky-400 pt-5 hover:underline">
                Check it out
            </Link>
        </div>

        {image_right && (
            <Image src={image} alt="Product image" height={200} width={200} className="max-h-40 w-auto cursor-pointer object-contain" />
        )}
    </div>
)

export default ProductContainer;