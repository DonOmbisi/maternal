import React from 'react';
import { Heart, Award, Truck, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif text-black mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Born from a vision to celebrate the beauty of motherhood, Pietro Brunelli creates 
              sophisticated maternity wear that honors this extraordinary journey with elegance and grace.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/7156337/pexels-photo-7156337.jpeg"
                alt="Pietro Brunelli Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif text-black mb-6">Meet Pietro Brunelli</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in Milan in 1993, Pietro Brunelli began as a small atelier with a revolutionary idea: 
                  that pregnancy should never compromise a woman's sense of style and elegance. Pietro, a designer 
                  with decades of experience in luxury fashion, recognized that expecting mothers deserved 
                  sophisticated, well-crafted clothing that celebrated their changing bodies.
                </p>
                <p>
                  What started as a personal mission to create beautiful maternity wear for his wife during her 
                  pregnancy has evolved into an internationally recognized brand trusted by women worldwide. 
                  Pietro's commitment to exceptional craftsmanship, premium fabrics, and timeless design has 
                  remained unchanged throughout the decades.
                </p>
                <p>
                  Today, Pietro Brunelli continues to be a family-run business, with Pietro's daughter Sofia 
                  bringing fresh perspectives while honoring the brand's founding principles of elegance, 
                  comfort, and empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-black mb-6">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every piece we create is guided by our core beliefs about motherhood, craftsmanship, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Celebrating Motherhood',
                description: 'We believe pregnancy is a time of beauty and strength, deserving of sophisticated fashion that honors this journey.'
              },
              {
                icon: Award,
                title: 'Italian Craftsmanship',
                description: 'Every garment is meticulously crafted in our Milan atelier using traditional techniques and premium materials.'
              },
              {
                icon: Truck,
                title: 'Comfort First',
                description: 'Our designs prioritize comfort without compromising style, growing with you throughout your pregnancy.'
              },
              {
                icon: Leaf,
                title: 'Sustainable Practices',
                description: 'We are committed to responsible fashion, using eco-friendly materials and ethical production methods.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <value.icon className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-black mb-6">Artisanal Excellence</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In our Milan atelier, skilled artisans bring each design to life with meticulous attention to detail. 
                  We source only the finest fabrics—luxurious silks, premium cottons, and innovative stretch materials 
                  that move with your body while maintaining their shape and elegance.
                </p>
                <p>
                  Every pattern is carefully engineered to accommodate the changing female form during pregnancy, 
                  with thoughtful design elements like adjustable waistbands, strategic draping, and nursing-friendly 
                  features that extend the life of each garment beyond pregnancy.
                </p>
                <p>
                  Our commitment to quality means each piece undergoes rigorous testing for comfort, durability, 
                  and fit, ensuring that Pietro Brunelli garments become treasured additions to your wardrobe.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/7156342/pexels-photo-7156342.jpeg"
                  alt="Craftsmanship detail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/7156344/pexels-photo-7156344.jpeg"
                  alt="Craftsmanship detail 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/7156346/pexels-photo-7156346.jpeg"
                  alt="Craftsmanship detail 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/7155712/pexels-photo-7155712.jpeg"
                  alt="Craftsmanship detail 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-black mb-8">Our Mission</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              At Pietro Brunelli, we believe that every woman deserves to feel beautiful, confident, and 
              comfortable during one of life's most transformative experiences. Our mission is to create 
              maternity wear that doesn't just accommodate pregnancy—it celebrates it.
            </p>
            <p>
              We understand that pregnancy is not a time to compromise on style or quality. That's why 
              every piece in our collection is designed to make you feel as elegant and confident as 
              you did before pregnancy, while providing the comfort and functionality you need as your body changes.
            </p>
            <blockquote className="text-2xl font-serif text-black italic border-l-4 border-sage-300 pl-6 my-8">
              "Pregnancy is not a limitation—it's an inspiration. Every curve tells a story of life, 
              love, and the incredible strength of women."
            </blockquote>
            <p className="text-right text-gray-600">— Pietro Brunelli, Founder</p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-black mb-6">Sustainable Fashion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in creating beautiful fashion while protecting the world our children will inherit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ethical Production',
                description: 'All our garments are produced in our Milan atelier under fair working conditions, supporting local artisans and their families.'
              },
              {
                title: 'Sustainable Materials',
                description: 'We prioritize organic, recycled, and sustainably sourced fabrics, reducing our environmental impact without compromising quality.'
              },
              {
                title: 'Timeless Design',
                description: 'Our pieces are designed to transcend trends, creating lasting wardrobe staples that reduce the need for frequent replacements.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-black mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you. Whether you have questions about our collection, 
            need styling advice, or simply want to share your Pietro Brunelli story, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@pietrobrunelli.com"
              className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-8 py-3 rounded hover:bg-black hover:text-white transition-colors"
            >
              Follow Our Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;