
const Service = () => {
    return (
        <div className="w-full flex flex-col items-center py-20 gap-20 relative">
            
            <h1 className="text-5xl font-bold">My Services</h1>

            <div className="w-[1280px] flex gap-10 z-10">
                
                <div className="bg-secondary flex flex-col justify-end h-[520px] w-[400px] p-10 gap-4">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/icons/UI_UX_icon.svg`} alt="uiux_icon" />
                        <h1 className="mt-4 text-4xl font-bold w-14">UI/UX Designer</h1>
                    </div>
                    <div>
                        <p className="text-base">
                            Actively exploring the fundamentals of UI/UX design through online resources, demonstrating a growing understanding of the principles behind creating intuitive and visually appealing digital experiences.
                        </p>
                    </div>
                </div>

                <div className="bg-secondary flex flex-col justify-end h-[520px] w-[400px] p-10 gap-4">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/icons/Backend_icon.svg`} alt="backend_icon" />
                        <h1 className="mt-4 text-4xl font-bold">Back End Developer</h1>
                    </div>
                    <div>
                        <p className="text-base">
                            Proficient in MongoDB and SQL databases. Skilled in Laravel and experienced in building RESTful APIs. Focused on creating efficient and secure back-end systems for web applications.
                        </p>
                    </div>
                </div>

                <div className="bg-secondary flex flex-col justify-end h-[520px] w-[400px] p-10 gap-4">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/icons/Frontend_icon.svg`} alt="frontend_icon" />
                        <h1 className="mt-4 text-4xl font-bold">Back End Developer</h1>
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