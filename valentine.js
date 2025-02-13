const { useState, useEffect, useRef } = React;
const { Heart, Gift, ChevronLeft, ChevronRight, Volume2, VolumeX } = lucide;

const ValentinePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showSecret, setShowSecret] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
    
    const images = [
        "https://drive.google.com/uc?export=view&id=1K_uVXxnY_w4ba0ueQUaEJlev51CZ9w5c",
        "https://drive.google.com/uc?export=view&id=1fsC94xnvbGIayyV_OWX6chKOSFs83Yeh",
        "https://drive.google.com/uc?export=view&id=1vxxNd7bZtaEXYGDRlXRH6VSB90ImJmQA",
        "https://drive.google.com/uc?export=view&id=19fRWekaAKjsNCRfAhd9HNKA--x2TIcna",
        "https://drive.google.com/uc?export=view&id=1ydk601lF79Lu52GNIj3KH_z0e6HU0PCv",
        "https://drive.google.com/uc?export=view&id=1urs-xTspnPosPnj1WPZq9di2Ss5_vhtC"
    ];

    useEffect(() => {
        const slideTimer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(slideTimer);
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="min-h-screen bg-pink-50 py-8 px-4">
            <audio ref={audioRef} loop autoPlay className="hidden">
                <source src="https://docs.google.com/uc?export=download&id=1A4U4fc0sOxNUon7ZNZ1806Vbk5EER5Ze" type="audio/mpeg" />
            </audio>

            <button 
                onClick={toggleMute}
                className="fixed top-4 right-4 bg-white p-3 rounded-full shadow-lg z-50"
            >
                {isMuted ? (
                    <VolumeX className="w-6 h-6 text-pink-600" />
                ) : (
                    <Volume2 className="w-6 h-6 text-pink-600" />
                )}
            </button>

            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-pink-600 mb-2">Momo</h1>
                    <p className="text-lg text-gray-600 mb-4">~ Mulobela ~</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">My Valentine</h2>
                    <Heart className="w-12 h-12 text-pink-500 mx-auto animate-pulse" />
                </div>

                <div className="relative mb-8">
                    <div className="aspect-w-16 aspect-h-9 relative">
                        <img 
                            src={images[currentSlide]} 
                            alt={`Moment ${currentSlide + 1}`}
                            className="w-full h-64 object-cover rounded-lg transition-opacity duration-500"
                        />
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                        currentSlide === index ? 'bg-pink-600' : 'bg-pink-300'
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>

                <div className="mb-8 p-6 bg-pink-50 rounded-lg">
                    <p className="text-gray-800 leading-relaxed">
                        My dearest love,<br/><br/>
                        Every moment with you feels like a beautiful dream come true. Your smile brightens my darkest days, and your love fills my heart with endless joy. I cherish every second we spend together and look forward to creating countless more memories with you.<br/><br/>
                        Forever yours,<br/>
                        [Your Name]
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Special Moments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-pink-600 mb-2 transition-transform duration-300 hover:translate-x-2">Our First Date</h3>
                            <p className="text-gray-700">That magical evening when everything began... Your smile lit up the entire room.</p>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-pink-600 mb-2 transition-transform duration-300 hover:translate-x-2">Favorite Memory</h3>
                            <p className="text-gray-700">Walking hand in hand under the stars, making wishes for our future together.</p>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-pink-600 mb-2 transition-transform duration-300 hover:translate-x-2">Little Things</h3>
                            <p className="text-gray-700">Your morning texts, our inside jokes, and the way you make me laugh until I cry.</p>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-pink-600 mb-2 transition-transform duration-300 hover:translate-x-2">Dreams Together</h3>
                            <p className="text-gray-700">All the adventures we've planned, the places we'll see, and the love we'll share.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setShowSecret(!showSecret)}
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all"
                    >
                        <Gift className="w-5 h-5" />
                        Special Surprise
                    </button>
                    
                    {showSecret && (
                        <div className="mt-4 p-4 bg-pink-100 rounded-lg animate-fade-in">
                            <p className="text-gray-800">
                                You're not just my Valentine - you're my everything. I love you more with each passing day. ??
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<ValentinePage />, document.getElementById('root'));