import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Subscribed with email:", email);
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 p-4 md:p-8 flex items-center justify-center">
      <div className="relative overflow-hidden max-w-5xl mx-auto">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-4xl p-8 md:px-12 lg:px-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Sign up for our Newsletter
            </h2>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-xl  font-light">
              Stay informed about our latest properties at DreamDwell Estates by
              subscribing to regular updates directly to your inbox.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="space-y-4 min-w-[300px] md:min-w-[400px] justify-center flex flex-col">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-full px-6 py-6 text-lg bg-white/10 backdrop-blur-sm border rounded-2xl text-white placeholder-blue-200 focus:outline-none border-white"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(e);
                    }
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !isValidEmail(email)}
                className="w-[225px] px-8 py-3 text-lg  text-blue-600 bg-white rounded-2xl hover:bg-blue-50 focus:outline-none font-light"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
