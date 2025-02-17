import Image from "next/image";
import Link from "next/link";

interface ProductContainerProps {
    name: string,
    description: string,
    image: string,
    image_right?: boolean
}

const ProductContainer = ({ name, description, image, image_right }: ProductContainerProps) => (
    <div className={`flex flex-row items-center  ${image_right && "justify-end"}`}>
        <div className="bg-white rounded-lg p-8 shadow-md flex flex-row gap-10">
            {!image_right && (
                <div>
                    <Image src={image} alt="Product image" height={200} width={200} className="max-h-40 w-auto cursor-pointer object-contain" />
                </div>
            )}
            <div className="flex flex-col">
                <div className="text-sans text-lg text-gray-700 font-semibold">
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
    </div>
)

export default ProductContainer;