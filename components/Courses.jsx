import Image from "next/image";

export const Courses = ({ refs }) => {
    return <section className="w-full py-20 bg-gray-50" ref={refs.Courses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Professional Courses</h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    Industry-validated curriculum designed to prepare you for high-growth career opportunities
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                {[
                    {
                        title: "MERN Stack Development",
                        image: "/mern.png",
                        description: "Master full-stack development with MongoDB, Express, React & Node.js",
                        features: [
                            "Frontend Development with React",
                            "Backend Development with Node.js & Express",
                            "Database Management with MongoDB",
                            "API Development & Integration",
                            "Authentication & Authorization",
                            "Real-world Project Development"
                        ],
                        placementSupport: {
                            basic: {
                                duration: "6 months",
                                price: "₹49,999",
                                includes: [
                                    "150+ hours of live training",
                                    "Project-based learning",
                                    "Placement support",
                                    "Certificate of completion"
                                ]
                            },
                            premium: {
                                duration: "1 year",
                                price: "₹79,999",
                                includes: [
                                    "300+ hours of live training",
                                    "Advanced projects & Mentorship",
                                    "Premium placement support",
                                    "Certificate of completion"
                                ]
                            }
                        }
                    }
                ].map((course, index) => (
                    <article
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                    >
                        <div className="relative h-40">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <h3 className="text-white text-xl font-bold p-4">{course.title}</h3>
                            </div>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-6">{course.description}</p>

                            <div className="mb-8">
                                <h4 className="text-lg font-semibold mb-4">Placement Support Features</h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {course.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold text-primary">{course.placementSupport.basic.price}</span>
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            {course.placementSupport.basic.duration}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {course.placementSupport.basic.includes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold text-primary">{course.placementSupport.premium.price}</span>
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {course.placementSupport.premium.duration}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {course.placementSupport.premium.includes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
};