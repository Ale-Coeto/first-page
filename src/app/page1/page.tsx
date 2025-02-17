import ProductContainer from "../components/productContainer";
import Title from "../components/title";

const Page1 = () => {
    return (
        <div className="w-full pb-20">
            <Title text="Products" />

            <div className="flex flex-col pt-10 gap-10">
                <ProductContainer name="Computers" description="Explore our wide selection of high-performance computers, from powerful desktops to sleek laptops. Whether you need a machine for gaming, work, or everyday use, we have the perfect option for you." image="/images/Computer.jpg" />
                <ProductContainer name="Monitors" description="Upgrade your viewing experience with our top-quality monitors, designed for work, gaming, and entertainment. From ultra-sharp 4K displays to high-refresh-rate gaming screens, we have the perfect match for your needs. " image="/images/Monitor.jpg" image_right/>
                <ProductContainer name="Software" description="From productivity tools to creative software and security solutions, we offer a wide range of programs to enhance your workflow and entertainment." image="/images/Software.png" />
            </div>
        </div>
    )
}

export default Page1;