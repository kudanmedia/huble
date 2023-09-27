import React from 'react';
import HeroBackgound from '../../assets/images/hero_background.webp';
import logo1 from '../../assets/logos/logo1.svg'
import logo2 from '../../assets/logos/logo2.svg'
import logo3 from '../../assets/logos/logo3.svg'
import logo4 from '../../assets/logos/logo4.png'
import logo5 from '../../assets/logos/logo5.png'
import logo6 from '../../assets/logos/logo6.png'
import logo7 from '../../assets/logos/logo7.png'
import logo8 from '../../assets/logos/logo8.png'
import logo9 from '../../assets/logos/logo9.svg'
import logo10 from '../../assets/logos/logo10.webp'
import LogoSlider from '../../components/molecules/LogoSlider';
import Button from '../atoms/Button';
import Label from '../atoms/Label';

const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  ];
  
  function Hero() {

    return (
      <>
      <div className="relative isolate overflow-hidde py-8 sm:py-8 bg-black-600/90 backdrop-brightness-90">
        <img src={HeroBackgound} alt="Hero background" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">    
             <Label text="Monolith" intent="subHeading" />
        </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Label text="Use AI software to test less and learn more." intent="heading" />
            <div className="mt-6">
            <Label text="Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.
" intent="description" />
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-10 lg:flex gap-x-6">
                <Button label="REQUEST DEMO" intent={"primary"} size={"medium"}/>
                <Button label="SPEAK TO OUR TEAM" intent={"secondary"} size={"medium"}/>
              </div>
            <div className="mt-16">
              <LogoSlider logos={logos} />
            </div>
          </div>
          
        </div>
      </div>
      </>
    
    );
  }
  
  export default Hero;
  