"use client";

import Image from 'next/image';
import Head from 'next/head';
import Particle from '../Particles';

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#1f2937] text-white h-auto">
      <Head>
        <title>About Hafsa Kamali - Web Developer & Designer</title>
        <meta 
          name="description" 
          content="Learn more about Hafsa Kamali, a certified web developer, graphic designer, and video editor, and her journey in the Governor House training program with mentors Sir Anas and Sir Obaid." 
        />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section for text content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500 mb-4">
            Hafsa Kamali
          </h1>
          <p className="text-4xl md:text-4xl font-bold text-opacity-75 leading-relaxed mb-6">
            Hi, I'm Hafsa Kamali, a certified and highly skilled web developer with extensive expertise in creating dynamic and responsive web applications. I'm also a talented graphic designer and video editor, specializing in film animation and video editing.
          </p>
          <p className="text-lg md:text-4xl font-bold text-opacity-75 leading-relaxed mb-6">
            Currently, I'm part of an amazing training program at the Governor House, which has helped me grow tremendously. This program is guided by some of the most incredible mentors, including Sir Anas and Sir Obaid, who continuously push us to be our best.
          </p>
          <p className="text-lg md:text-4xl font-bold text-opacity-75 leading-relaxed mb-6">
            In addition to my web development skills, I have strong command over programming languages such as HTML, CSS, JavaScript, TypeScript, and Next.js. I'm passionate about crafting beautiful and efficient designs and bringing creativity to life through animation and video editing.
          </p>
        </div>

        {/* Right section for image */}
        <div className="flex items-start justify-center md:justify-end">
        <Image 
          src="/hafsa kamali.PNG" 
          alt="hafsa logo" 
          width={350} 
          height={300} 
          className="rounded-lg shadow-lg hero-image-container bg-black bg-opacity-50"
        />
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-xl text-white">
        <h2 className="text-3xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-gray-300 to-gray-500 mb-6 text-center">
          My Mentors
        </h2>
        <p className="text-lg md:text-4xl font-bold text-opacity-75 leading-relaxed mb-4 text-center">
        The true essence of this program lies in the outstanding mentorship provided by Sir Anas and Sir Obaid. They are far more than just instructors; they are visionary leaders who bring a profound understanding of the tech industry, coupled with an unwavering commitment to the growth of their students. With their unmatched dedication and expertise, they have crafted an environment that is both challenging and nurturing, where learning is encouraged, and curiosity is celebrated.

Sir Anas and Sir Obaid are known for their ability to translate complex concepts into approachable, digestible lessons, making even the most intricate subjects accessible. Their approach goes beyond the standard curriculum, emphasizing the importance of critical thinking, problem-solving, and real-world applications of our skills. They challenge us to push beyond our limits, fostering a culture of continuous learning and innovation.

Their wealth of knowledge spans across cutting-edge technologies, industry trends, and best practices, ensuring that we are not just prepared for today’s challenges but are also equipped to lead in the future. They seamlessly blend theory with practical insights, offering a holistic perspective that has been instrumental in my growth as a developer and designer.

Under their mentorship, I have gained a profound understanding of modern development practices, as well as a strong grasp of the latest technological advancements. Their guidance has been pivotal in refining my skills, deepening my technical expertise, and enhancing my creative abilities. More than just teachers, they have been inspiring role models who motivate us to excel in our fields, empowering us to reach our fullest potential. Their influence has transformed this training journey into an experience that is not only educational but truly transformative and life-changing.
        </p>
      </div>

      <Particle />
    </div>
  );
}
