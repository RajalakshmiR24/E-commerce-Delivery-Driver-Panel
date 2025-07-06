import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Star, Shield, Clock, DollarSign, MapPin, CheckCircle, FileText, Camera, CreditCard, Users, TrendingUp, Award, ArrowRight, Play, Zap, Globe, Heart, Phone, Mail } from 'lucide-react';

const Landing: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Flexible Earnings',
      description: 'Earn ₹15,000-₹40,000 per month with flexible working hours',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Clock,
      title: 'Work Your Hours',
      description: 'Choose your own schedule and work when it suits you best',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Complete insurance coverage for you and your vehicle',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Smart Routing',
      description: 'AI-powered route optimization to maximize your earnings',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      text: 'I\'ve been delivering with this platform for 8 months now. The earnings are consistent and the app is very user-friendly. Best decision I made!',
      earnings: '₹28,000/month'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      text: 'As a part-time driver, I love the flexibility. I can work around my college schedule and still earn good money for my expenses.',
      earnings: '₹15,000/month'
    },
    {
      name: 'Mohammed Ali',
      location: 'Delhi',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      text: 'The support team is amazing and payments are always on time. I\'ve recommended this to all my friends in the delivery business.',
      earnings: '₹32,000/month'
    }
  ];

  const documents = [
    {
      icon: FileText,
      title: 'Aadhaar Card',
      description: 'Valid Aadhaar card for identity verification',
      required: true
    },
    {
      icon: FileText,
      title: 'PAN Card',
      description: 'PAN card for tax and financial verification',
      required: true
    },
    {
      icon: FileText,
      title: 'Driving License',
      description: 'Valid driving license for your vehicle type',
      required: true
    },
    {
      icon: FileText,
      title: 'Vehicle Registration',
      description: 'RC book of your delivery vehicle',
      required: true
    },
    {
      icon: FileText,
      title: 'Vehicle Insurance',
      description: 'Valid insurance certificate for your vehicle',
      required: true
    },
    {
      icon: CreditCard,
      title: 'Bank Account',
      description: 'Bank account details for salary payments',
      required: true
    },
    {
      icon: Camera,
      title: 'Profile Photo',
      description: 'Clear photo for profile verification',
      required: true
    },
    {
      icon: FileText,
      title: 'Address Proof',
      description: 'Utility bill or rental agreement (optional)',
      required: false
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Active Drivers', color: 'text-blue-600' },
    { icon: TrendingUp, value: '₹25,000', label: 'Avg Monthly Earning', color: 'text-green-600' },
    { icon: Award, value: '4.8/5', label: 'Driver Satisfaction', color: 'text-yellow-600' },
    { icon: MapPin, value: '25+', label: 'Cities', color: 'text-purple-600' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Payments',
      description: 'Get paid instantly after each delivery with our fast payment system',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      icon: Globe,
      title: 'Wide Coverage',
      description: 'Deliver across multiple cities with our expanding network',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      icon: Heart,
      title: 'Driver Support',
      description: '24/7 support team ready to help you with any issues',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white/5 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8 animate-bounce">
              <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm border border-white/20">
                <Truck className="w-16 h-16 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Drive. Earn. <span className="text-yellow-400">Grow.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
              Join thousands of drivers earning flexible income with India's fastest-growing delivery platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link
                to="/signup"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Start Earning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/login"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <span>Driver Login</span>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="absolute bottom-0 right-0 w-1/3 h-64 opacity-20">
          <img 
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
            alt="Delivery" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-50 p-4 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the best platform for delivery partners with competitive earnings and excellent support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section with Images */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the <span className="text-blue-600">Difference</span>
            </h2>
          </div>
          <div className="space-y-20">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-1">
                  <div className="bg-blue-100 p-4 rounded-2xl w-fit mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
                <div className="flex-1">
                  <div className="relative group">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our <span className="text-blue-600">Platform</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                We are India's leading on-demand delivery platform, connecting millions of customers with local businesses 
                through our network of dedicated delivery partners. Our mission is to empower drivers with flexible earning 
                opportunities while providing exceptional service to our customers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group animate-fade-in-up animation-delay-200">
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">Trusted Platform</h3>
                <p className="text-gray-600">Secure and reliable platform with 24/7 support and verified partners</p>
              </div>
              <div className="text-center group animate-fade-in-up animation-delay-400">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">Growing Network</h3>
                <p className="text-gray-600">Expanding across India with new opportunities and partnerships</p>
              </div>
              <div className="text-center group animate-fade-in-up animation-delay-600">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Award Winning</h3>
                <p className="text-gray-600">Recognized for excellence in delivery services and driver satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-blue-600">Drivers</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our delivery partners across India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-blue-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm font-semibold text-green-600">{testimonial.earnings}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Requirements Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Document <span className="text-blue-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get ready with these documents for quick verification and faster onboarding
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {documents.map((doc, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${doc.required ? 'bg-red-100 group-hover:bg-red-200' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors duration-300`}>
                    <doc.icon className={`w-6 h-6 ${doc.required ? 'text-red-600' : 'text-gray-600'} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  {doc.required && (
                    <span className="text-xs bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium animate-pulse">
                      Required
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
            <p className="text-sm text-gray-500 mb-6">
              * All documents will be verified within 24-48 hours
            </p>
            <Link
              to="/signup"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Start Registration</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="text-yellow-400">Earning?</span>
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Join our platform today and start your journey as a delivery partner with thousands of satisfied drivers
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/signup"
                className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <span>Register Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+911234567890"
                className="group border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Call Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Truck className="w-8 h-8" />
                </div>
                <span className="text-2xl font-bold">DeliveryPro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                India's leading delivery platform connecting drivers with opportunities across the nation.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="font-bold mb-6 text-lg">For Drivers</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Driver Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Earnings</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <h3 className="font-bold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <h3 className="font-bold mb-6 text-lg">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@deliverypro.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DeliveryPro. All rights reserved. Made with ❤️ for drivers across India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;