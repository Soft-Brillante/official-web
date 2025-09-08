import { FaUsers } from "react-icons/fa";

export const Placements = ({ refs }) => {
    return <section className="w-full py-20 bg-white" ref={refs.Placements}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Our First Placement Coming Soon!</h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    We're excited to announce our first placement success story. Stay tuned to meet our pioneering graduate who will pave the way for future success stories.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="bg-gray-50 p-8 rounded-2xl text-center max-w-lg">
                    <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaUsers className="text-primary text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Who will be first?</h3>
                    <p className="text-gray-600">
                        Our inaugural placement story is in the making. This space will soon showcase our first success story, inspiring future tech professionals.
                    </p>
                    <div className="mt-8">
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
                            Join Our Program
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
};