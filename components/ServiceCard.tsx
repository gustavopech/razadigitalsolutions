'use client';

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
};

export default function ServiceCard({ title, description, icon, link = '#' }: ServiceCardProps) {
  return (
<a href={link} className="group relative block h-80 sm:h-72 max-w-xl w-full mx-auto">
      <span className="absolute inset-0 border border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 flex flex-col items-center justify-center text-center w-full h-full">
          {icon && <div className="w-8 h-8 mb-2">{icon}</div>}
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
          {/*<p className="mt-4 text-sm font-bold text-red-700">Read more</p>*/}
        </div>
      </div>
    </a>
  );
}