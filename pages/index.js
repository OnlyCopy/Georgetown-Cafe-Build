import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../images/banner.png';
import Card from '../components/Card';
import BourbonChicken from '../images/food/bourbonChicken.jpg';
import Banner2 from '../images/banner3.png';
import SPotato from '../images/food/sPotato.jpg';
import EBowl from '../images/food/eBowl.jpg';
import Drinks from '../images/food/drinks.jpg';
import iPhone from '../images/phone.png';
import FMobile from '../images/fMobile.png';
import Link from 'next/link';
import Script from 'next/script';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Georgetown Cafe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></Script>

    <Navbar />

    <main className="w-screen">

      <section>
        <div className="max-w-[1440px] mx-auto">
          <header>
            <div className="relative overflow-hidden">
            <Image alt="Banner" className="z-0" draggable="false" src={Banner2} width={0} height={0}/>
            <div className="absolute top-20 mx-0 lg:top-56 w-full lg:ml-20 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black">Georgetown Cafe</h1>
                <br />
                <p className="text-lg">Delicious Cajun Food!</p>
            </div>
            </div>
          </header>
          <div className="px-5 lg:px-0 my-5 justify-center mx-auto flex flex-col lg:flex-row space-x-4 space-y-4 items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                  <Image alt="" className="rounded-full" draggable="false" src={BourbonChicken} width={250} height={250} />
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Try Our Famous Bourbon Chicken!</h2>
                <p>Try one of our most popular entrees.
                Pick up to 2 sides when you go large and with 3 different choices for rice.
                </p>
                <div className="card-actions mt-3">
                  <Link href="/menu">
                  <a className="btn btn-black">Order Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                  <Image alt="" className="rounded-full" draggable="false" src={SPotato} width={250} height={250} />
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Food For Everyone!</h2>
                <p>Don't know what to try? don't worry check out our menu for many different choices.
                </p>
                <div className="card-actions mt-3">
                <Link href="/menu">
                  <a className="btn btn-black">View Menu</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                  <Image alt="" className="rounded-full" draggable="false" src={iPhone} width={250} height={250} />
               </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Skip the line when you order on your phone!</h2>
                <p>Place your order from anywhere with your phone! make getting your food easier.
                </p>
                <div className="card-actions mt-3">
                  <a href="tel:859-309-2777" className="btn btn-black">Call us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-20 max-w-6xl px-10 mx-auto items-center">
            <div>
              <div className="mockup-phone">
                <div div className="camera"></div> 
                <div className="display">
                  <div className="artboard artboard-demo phone-1 border-x-8 border-[#1c1e21]">
                    <Image alt="" draggable="false" src={FMobile} width={310} height={0} />
                  </div>
                </div>
              </div>
            </div>
            <div className="align-center text-left lg:ml-10">
              <h1 className="text-4xl font-bold">Follow us on Facebook</h1>
              <br />
              <p className="text-xl">Stay up to date with us when you follow us on Facebook. We post all our updates and specials that are happening! </p>
              <br />
              <a target="blank" href="https://www.facebook.com/Georgetown-Cafe-1-1909672329271844/">
              <box-icon type='logo' size="lg" name='facebook-circle'></box-icon>
              </a>
            </div>
          </div>
        </div>
          <div className="w-full bg-gray-100">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col lg:flex-row items-center align-center overflow-hidden h-96">
                <div>
                  <h1 className="text-black text-center text-4xl font-bold lg:text-left">Don't forget about us!</h1>
                  <br />
                  <p className="text-xl text-black text-center lg:text-left">Don't forget to grab yourself a drink along with some desert along with your delicious meal.</p>
                </div>
                <div>
                  <Image alt="" className="mask mask-parallelogram-2" src={Drinks} width={0} height={0} />
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>

    <Footer />
    </div>
  )
}
