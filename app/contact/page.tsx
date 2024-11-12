import ContactBackground from '@/components/Contact/ContactBackground';
import ThankYou from '@/components/Contact/ThankYou';
import ContactUs from '@/components/ContactUs';
import LightContactBackground from '@/components/Contact/LightContactBackground';

const FullScreenImages = () => {
  return (
    <div className='dark:bg-black bg-light-purple w-full'>
    <div className='hidden dark:block'>
      <ContactBackground />

      </div>
      <div className='dark:hidden block'>
          <LightContactBackground />
        </div>      <ContactUs />
      <ThankYou />
    </div>
  );
};

export default FullScreenImages;