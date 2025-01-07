import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

const HeroSection = ({ title, subtitle, imageUrl }: HeroSectionProps) => {
  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="object-center object-cover opacity-30 transform scale-110 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl transition-transform transform hover:text-blue-700">
          {title}
        </h1>
        <p className="mt-6 text-xl text-gray-300 sm:text-2xl max-w-3xl mx-auto transition-all duration-300 ease-in-out">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
