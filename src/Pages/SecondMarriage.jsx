import Navbar from '../Components/Navbar'
import CommonBanner from '../Components/CommonBanner'
import BreadCrumb from '../Components/BreadCrumb'
import ServiceComponent from '../Components/ServiceComponent';
import Footer from '../Components/Footer';

function SecondMarriage() {
    const breadcrumbPaths = [
        { name: 'Home', link: '>>' },
        { name: 'Services', link: '>>' },
        { name: 'Second Marriage Services'}
      ];

  return (
    <div>
       <Navbar/>
      <CommonBanner title="Second Marriage Services"/>
      <div>
        <BreadCrumb paths={breadcrumbPaths} />
      </div>
      <div>
        <ServiceComponent
            imageSrc="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/wedding-photography-services-delhi-ncr.jpg"
            heading="Second Marriage Services"
            content="Sachin Kumar has captured various shoots of Bollywood Actors like Arbaaz Khan, Riya Sen, Rohit Reddy, Top TV Actors; Divyanka Tripathi, Shweta Tiwari, Rashmi Desai, Ajaz Khan, Mayank Gandhi, Ada Khan, Karanvir Bohra, Karan Singh Grover and many more."
            summary="Sachin has done hundreds of pre wedding and other wedding ceremonies shoots of many celebrities and elite families. Sachin and his experienced team are specialized in Candid Wedding, Pre-wedding Shoots, Bridal Portraits, Reception, Engagement, Indian Wedding, Wedding, New Born, Birthday, Kids Portraits and Babies & Kids photography."
        />
      </div>
      <Footer/>
    </div>
  )
}

export default SecondMarriage