import Logo from "@/assets/HomePageText.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-20 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width="80"  />
          <p className="my-5">
            
          </p>
          <p></p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
         
          <p>maryleemarylee@hotmail.com</p>
          <p>2325 Palos Verdes Dr. West</p>
          <p>Verdes Estates, CA 90274</p>
          <p>Phone: 310 373 5888</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
