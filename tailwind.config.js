/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swiper-theme': '#ffc451',
        'border': 'rgba(255, 255, 255, 0.15)',
      },
      width: {
        'feature-left-img': '480px',
        'form-textArea': '620px',
      },
      height: {
        'feature-left-img': '440px',
        'testimonial': '450px',
        'form-text': '126px',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serrif'],
        'poppins': ['Poppins', 'sans-serrif'],
        'open-sans': ['Open Sans', 'sans-serrif']
      },
      backgroundImage: {
        'cta': "url('https://bootstrapmade.com/demo/templates/Gp/assets/img/cta-bg.jpg')",
        'gradient': 'url("https://bootstrapmade.com/demo/templates/Gp/assets/img/testimonials-bg.jpg"), linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
      },
    },
  },
  plugins: [],
}

