
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Star, Shield, Clock, DollarSign, MapPin, CheckCircle, FileText, Camera, CreditCard, Users, TrendingUp, Award } from 'lucide-react';

const AnimatedLanding: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: DollarSign,
      title: 'Flexible Earnings',
      description: 'Earn ₹15,000-₹40,000 per month with flexible working hours',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Work Your Hours',
      description: 'Choose your own schedule and work when it suits you best',
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Complete insurance coverage for you and your vehicle',
      gradient: 'from-purple-400 to-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Smart Routing',
      description: 'AI-powered route optimization to maximize your earnings',
      gradient: 'from-orange-400 to-red-600'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      text: 'I\'ve been delivering with this platform for 8 months now. The earnings are consistent and the app is very user-friendly. Best decision I made!'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      text: 'As a part-time driver, I love the flexibility. I can work around my college schedule and still earn good money for my expenses.'
    },
    {
      name: 'Mohammed Ali',
      location: 'Delhi',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      text: 'The support team is amazing and payments are always on time. I\'ve recommended this to all my friends in the delivery business.'
    }
  ];

  const documents = [
    {
      icon: FileText,
      title: 'Aadhaar Card',
      description: 'Valid Aadhaar card for identity verification',
      required: true,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: FileText,
      title: 'PAN Card',
      description: 'PAN card for tax and financial verification',
      required: true,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FileText,
      title: 'Driving License',
      description: 'Valid driving license for your vehicle type',
      required: true,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: FileText,
      title: 'Vehicle Registration',
      description: 'RC book of your delivery vehicle',
      required: true,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: FileText,
      title: 'Vehicle Insurance',
      description: 'Valid insurance certificate for your vehicle',
      required: true,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: CreditCard,
      title: 'Bank Account',
      description: 'Bank account details for salary payments',
      required: true,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Camera,
      title: 'Profile Photo',
      description: 'Clear photo for profile verification',
      required: true,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: FileText,
      title: 'Address Proof',
      description: 'Utility bill or rental agreement (optional)',
      required: false,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Drivers', gradient: 'from-blue-500 to-purple-600' },
    { icon: TrendingUp, value: '₹25,000', label: 'Avg Monthly Earning', gradient: 'from-green-500 to-emerald-600' },
    { icon: Award, value: '4.8/5', label: 'Driver Satisfaction', gradient: 'from-yellow-500 to-orange-600' },
    { icon: MapPin, value: '25+', label: 'Cities', gradient: 'from-red-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="flex items-center mb-8 animate-bounce-gentle">
                <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm animate-pulse-glow mr-4">
                  <Truck className="w-16 h-16" />
                </div>
                <div className="text-left">
                  <div className="text-sm uppercase tracking-wide text-blue-200 mb-2">Join Our Platform</div>
                  <div className="text-2xl font-bold">Drive with Purpose</div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Drive. Earn. Grow.
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Join thousands of drivers earning flexible income with India's fastest-growing delivery platform
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <Link
                  to="/signup"
                  className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">Start Earning Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                <Link
                  to="/login"
                  className="group border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Driver Login
                </Link>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Delivery driver with motorcycle"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl"></div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-2xl shadow-xl animate-bounce-gentle">
                  <div className="text-sm font-bold">₹25,000+</div>
                  <div className="text-xs">Monthly Avg</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                  <div className="text-sm font-bold">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driving Experience Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Images */}
            <div className="relative animate-slide-in-left">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/773199/pexels-photo-773199.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Delivery scooter on city street"
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Food delivery bag"
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-6 pt-8">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Delivery person with helmet"
                      className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="City traffic and delivery"
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating achievement badges */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl animate-float border-4 border-blue-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Happy Drivers</div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Journey Starts Here
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the freedom of flexible work while earning a steady income. Our platform connects you with endless delivery opportunities across your city.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: "🏍️", title: "Any Vehicle", desc: "Bike, scooter, or car - all welcome" },
                  { icon: "📱", title: "Easy App", desc: "Simple interface for seamless deliveries" },
                  { icon: "💰", title: "Daily Payouts", desc: "Get paid every day for your work" },
                  { icon: "🛡️", title: "Full Support", desc: "24/7 assistance when you need it" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/signup"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Join Our Community</span>
                <div className="group-hover:translate-x-1 transition-transform duration-300">→</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in hover:transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-r ${stat.gradient} p-4 rounded-full text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide the best platform for delivery partners with competitive earnings and excellent support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in">
              About Our Platform
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed animate-slide-in-left">
              We are India's leading on-demand delivery platform, connecting millions of customers with local businesses 
              through our network of dedicated delivery partners. Our mission is to empower drivers with flexible earning 
              opportunities while providing exceptional service to our customers.
            </p>
            <div className="grid md:grid-cols-3 gap-10 mt-16">
              {[
                { 
                  icon: Shield, 
                  title: "Trusted Platform", 
                  desc: "Secure and reliable platform with 24/7 support",
                  color: "from-green-500 to-emerald-600",
                  delay: "0s"
                },
                { 
                  icon: TrendingUp, 
                  title: "Growing Network", 
                  desc: "Expanding across India with new opportunities",
                  color: "from-orange-500 to-red-600",
                  delay: "0.2s"
                },
                { 
                  icon: Award, 
                  title: "Award Winning", 
                  desc: "Recognized for excellence in delivery services",
                  color: "from-purple-500 to-indigo-600",
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center group animate-scale-in hover:transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: item.delay }}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-6 rounded-full w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Drivers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our delivery partners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Requirements Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Document Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get ready with these documents for quick verification and faster onboarding
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {documents.map((doc, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 p-6 rounded-xl border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${doc.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <doc.icon className={`w-6 h-6 ${doc.color}`} />
                  </div>
                  {doc.required && (
                    <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold animate-pulse">
                      Required
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{doc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-sm text-gray-500 mb-6">
              * All documents will be verified within 24-48 hours
            </p>
            <Link
              to="/signup"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <CheckCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Start Registration</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-gentle">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-10 text-blue-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Join our platform today and start your journey as a delivery partner
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/signup"
              className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Register Now
            </Link>
            <a
              href="tel:+911234567890"
              className="group border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Call Support
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Truck className="w-8 h-8" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DeliveryPro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                India's leading delivery platform connecting drivers with opportunities.
              </p>
            </div>
            {[
              {
                title: "For Drivers",
                links: [
                  { name: "Sign Up", href: "/signup" },
                  { name: "Login", href: "/login" },
                  { name: "Driver Support", href: "#" },
                  { name: "Earnings", href: "#" }
                ]
              },
              {
                title: "Support",
                links: [
                  { name: "Help Center", href: "#" },
                  { name: "Contact Us", href: "#" },
                  { name: "Safety", href: "#" },
                  { name: "Terms", href: "#" }
                ]
              },
              {
                title: "Contact",
                links: [
                  { name: "📧 support@deliverypro.com", href: "#" },
                  { name: "📞 +91 123 456 7890", href: "#" },
                  { name: "📍 Bangalore, India", href: "#" }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-bold mb-6 text-lg">{section.title}</h3>
                <ul className="space-y-3 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fade-in">
            <p>&copy; 2024 DeliveryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AnimatedLanding;
