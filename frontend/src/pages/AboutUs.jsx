import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-base-100 pb-10">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold mb-6 text-center">About Rental Buddy</h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10"></div>
                <p className="text-center text-xl text-gray-500 max-w-3xl mx-auto">
                    We are dedicated to providing the best vehicle rental experience.
                    (Waiting for new design inspiration...)
                </p>
            </div>
            <div className="fixed bottom-0 left-0 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;
