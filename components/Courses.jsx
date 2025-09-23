import Image from "next/image";

export const Courses = ({ refs }) => {
    return <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white" ref={refs.Courses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Professional Courses
                </h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                    Industry-validated curriculum designed to prepare you for high-growth career opportunities
                </p>
            </div>
            <div className="max-w-5xl mx-auto">
                {[
                    {
                        title: "Full Stack Development Program",
                        image: "/mern.png",
                        og_price: "₹79,999",
                        discount_price: "₹59,999",
                        description: "Comprehensive full-stack development program covering MERN stack, MySQL, Next.js, and DSA with industry-oriented curriculum",
                        features: [
                            "MERN Stack (MongoDB, Express, React, Node.js)",
                            "MySQL Database Integration", 
                            "Next.js Framework Development",
                            "Data Structures & Algorithms",
                            "Project Management (Agile, Waterfall)",
                            "One-on-One Mentoring",
                            "Industry-Oriented Curriculum",
                            "Adaptive Learning Approach",
                            "Project-Driven Training"
                        ],
                        program: {
                            duration: "8 months",
                            includes: [
                                "Comprehensive MERN Stack Training",
                                "MySQL & Next.js Integration",
                                "DSA Fundamentals & Practice", 
                                "Real-world Project Development",
                                "One-on-One Mentoring Sessions",
                                "Industry Expert Sessions",
                                "Agile & Waterfall Methodology Training",
                                "Placement Assistance"
                            ]
                        }
                    }
                ].map((course, index) => (
                    <article
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="relative h-48 sm:h-56 md:h-64">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                                <h3 className="text-white text-2xl font-bold p-6">{course.title}</h3>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <p className="text-gray-600 text-lg mb-8">{course.description}</p>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold mb-6 text-gray-800">Program Features</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {course.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 group">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-200">
                                                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl border-2 border-primary/20 hover:border-primary/30 transition-colors duration-300">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500 mb-1">Course Fee</span>
                                        <span className="text-2xl font-bold text-primary"><span className="line-through text-gray-400">{course.og_price}</span> <span className="ml-2">{course.discount_price}</span></span>
                                        
                                    </div>
                                    <div className="flex flex-col items-start sm:items-end">
                                        <span className="text-sm text-gray-500 mb-1">Duration</span>
                                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                                            {course.program.duration}
                                        </span>
                                    </div>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {course.program.includes.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-700">
                                            <span className="mr-2 text-primary">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
};