import React from 'react'
// import { render } from '@react-email/components';
// import sendgrid from '@sendgrid/mail';
// import { Email } from './Email.jsx';

const Contact = () => {
  // sendgrid.setApiKey('');
  // const emailHtml = render(<Email url="https://example.com" />);

  // const options = {
  //   from: 'you@example.com',
  //   to: 'user@gmail.com',
  //   subject: 'hello world',
  //   html: emailHtml,
  // };

  // sendgrid.send(options);
  return (
    <section id='contact' class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-700 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-rose-700 border-0 py-2 px-8 focus:outline-none hover:bg-rose-800 rounded text-lg">Button</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a class="text-rose-500">bansaldrvandana@gmail.com</a>
              <p class="leading-normal my-5">JEEVAN JYOTI HOSPITAL CAMPUS, 162, Himmat Ganj, Bai Ka Bagh, Prayagraj, Uttar Pradesh 211003
              </p>
              <span class="inline-flex">
                <a href='https://www.facebook.com/vandana.bansal.33' target='_blank' class="text-rose-700 ">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href='https://x.com/bansaldrvandana?lang=en' target='_blank' class="ml-4 text-rose-700">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href='https://www.instagram.com/drvandanabansal_gynaecologist/' target='_blank' class="ml-4 text-rose-700">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/dr-vandana-bansal-5916279b/' target='_blank' class="ml-4 text-rose-700">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0597529168485!2d81.84401430943906!3d25.43626577746421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4375248d9b%3A0x385a6afccbc59834!2sDr.%20Vandana%20Bansal%20-%20Best%7CGynaecologist%20Doctors%7CHigh%20Risk%20Pregnancy%20Doctor%7CLaproscopy%20Doctor%7CInfertility%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1720863709269!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </section>
  )
}

export default Contact