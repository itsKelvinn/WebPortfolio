import { gsap } from 'gsap';
import { useEffect } from 'react';

const Service = () => {

    useEffect(() => {
        gsap.from('.service-item', {
          y: 50,
          opacity: 0,
          stagger: 0.2, // Adjust the stagger value as needed
          duration: 1, // Adjust the duration of the animation
          delay: .1,
          ease: 'power3.out', // Adjust the easing function as needed
          scrollTrigger: {
            trigger: '#services',
            start: 'top 80%', // Adjust the starting point as needed
            end: 'top 50%', // Adjust the end point as needed
            toggleActions: 'play none none reverse' // Define the toggle actions
          }
        });
    }, []);

    const imagepath = process.env.PUBLIC_URL + "/icons/";


    return (
        <div id="services" className="w-full flex flex-col items-center py-20 gap-20 relative">
            
            <h1 className="text-5xl font-bold">My Services</h1>

            <div className="w-[1280px] flex gap-10 z-10">
                
                <div className="service-item bg-secondary flex flex-col justify-end h-[520px] w-[400px] p-10 gap-4">
                    <div>
                        <img src={"./WebPortfolio/icons/" + "UI_UX_icon.svg"} alt="uiux_icon" />
                        <h1 className="mt-4 text-4xl font-bold w-14">UI/UX Designer</h1>
                    </div>
                    <div>
                        <p className="text-base">
                            Actively exploring the fundamentals of UI/UX design through online resources, demonstrating a growing understanding of the principles behind creating intuitive and visually appealing digital experiences.
                        </p>
                    </div>
                </div>

                <div className="service-item bg-secondary flex flex-col justify-end h-[520px] w-[400px] p-10 gap-4">
                    <div>
                        <img src={"./WebPortfolio/icons/" + "Backend_icon.svg" } alt="backend_icon" />
                        <h1 className="mt-4 text-4xl font-bold">Back End Developer</h1>
                    </div>
                    <div>
                        <p className="text-base">
                            Proficient in MongoDB and SQL databases. Skilled in Laravel and experienced in building RESTful APIs. Focused on creating efficient and secure back-end systems for web applications.
                        </p>
                    </div>
                </div>

                <div className="service-item bg-secondary flex flex-col justify-end h-[520px] w-[400px] p-10 gap-4">
                    <div>
                        <img src={"./WebPortfolio/icons/" + "Frontend_icon.svg"} alt="frontend_icon" />
                        <h1 className="mt-4 text-4xl font-bold text-red-500">Back End Developer</h1>
                    </div>
                    <div>
                        <p className="text-base">
                            Proficient in MongoDB and SQL databases. Skilled in Laravel and experienced in building RESTful APIs. Focused on creating efficient and secure back-end systems for web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2 bg-[#151515] absolute top-1/2"></div>
        </div>
    );
}
 
export default Service;