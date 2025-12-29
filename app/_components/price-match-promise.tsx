import Image from "next/image";

const PriceMatchPromise = () => {
    return (
        <section className="bg-slate-800 text-white py-12 md:py-20">
            <div className="px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-4 xl:gap-12">
                    {/* Left side - Product image with overlay badge */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-60 md:w-64 xl:w-88 h-96 md:h-104 xl:h-144">
                            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/worcester-boiler-heating-system.jpg"
                                    alt="Worcester Boiler Installation"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute top-1/4 left-full -translate-x-1/2 z-10">
                                <div className="bg-red-500 rounded-lg shadow-lg  p-4 md:p-6 text-center max-w-xs">
                                    <h3 className="text-white font-bold text-xl md:text-2xl">
                                        <span className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                                            BOXT
                                        </span>
                                        <br />
                                        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider">
                                            PRICE
                                        </span>
                                        <br />
                                        <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-widest">
                                            MATCH
                                        </span>
                                        <br />
                                        <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-wider md:tracking-widest lg:tracking-wider xl:tracking-widest">
                                            PROMISE
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Text content and CTA button */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl lg:text-[32px] text-white text-balance">
                            The BOXT Price Match Promise
                        </h2>

                        <p className="text-neutral-300 text-base leading-relaxed max-w-xl">
                            We enjoy saving you time and money; that&apos;s why
                            we regularly review our prices. In fact, we
                            guarantee to beat any like-for-like boiler
                            installation quote by £50, so you can shop with
                            peace of mind.
                        </p>

                        <button className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-slate-800 mt-2">
                            Find out more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceMatchPromise;
