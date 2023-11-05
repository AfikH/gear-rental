import Image from "next/image";

const Hero = ({className, title = 'Title', subTitle = 'Sub Title', image}) => (
    <div className="hero">
        {image &&
        <Image
            src={image}
            alt='todo'
            height={400}
            width={400}
            priority
        />}
        <div className="hero-content">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </div>
    </div>
)

export default Hero;