import Image from 'next/image';
import notfound from '../assets/404.png'

const notFound = () => {
    return (
      <div className="mx-auto">
        <Image src={notfound} alt="not-found" />
      </div>
    );
};

export default notFound;