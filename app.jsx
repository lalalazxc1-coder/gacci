import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Heart } from 'lucide-react';

const globalStyles = `
@import
url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

:root {
--bg: #f8fbff;
--text: #1a202c;
--accent: #5c8eb8;
--accent-soft: #dbeafe;
--font-serif: 'Playfair Display', serif;
--font-sans: 'Outfit', sans-serif;
--transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
background-color: var(--bg);
color: var(--text);
font-family: var(--font-sans);
overflow-x: hidden;
line-height: 1.8;
-webkit-font-smoothing: antialiased;
}

/* Нежная текстура бумаги */
body::before {
content: "";
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
opacity: 0.4;
pointer-events: none;
z-index: -1;
}

h1, h2, h3 {
font-family: var(--font-serif);
font-weight: 400;
letter-spacing: -0.02em;
}

.section {
min-height: 100vh;
padding: 12vh 8vw;
display: flex;
flex-direction: column;
justify-content: center;
}

.container {
max-width: 1200px;
margin: 0 auto;
width: 100%;
}

.image-frame {
position: relative;
background: white;
padding: min(4vw, 30px);
box-shadow: 0 30px 60px -12px rgba(0,0,0,0.08);
transition: var(--transition);
display: inline-block;
}

.image-frame:hover {
transform: translateY(-10px);
box-shadow: 0 40px 80px -15px rgba(0,0,0,0.12);
}

.image-frame img, .image-frame video {
display: block;
width: 100%;
height: auto;
}

.story-text {
font-size: 1.15rem;
color: #4a5568;
max-width: 500px;
font-weight: 300;
}

.italic-serif {
font-family: var(--font-serif);
font-style: italic;
}

.heart-divider {
display: flex;
align-items: center;
justify-content: center;
gap: 1.5rem;
margin: 6rem 0;
}

.heart-divider .line {
height: 1px;
background: var(--accent-soft);
width: 100px;
}

.progress-bar {
position: fixed;
top: 0;
left: 0;
height: 4px;
background: var(--accent);
z-index: 100;
transform-origin: 0%;
}

@media (max-width: 768px) {
.section {
padding: 10vh 24px;
}
}
`;

const App = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="selection:bg-[#5c8eb8] selection:text-white relative">
            <style>
                {
                    globalStyles
                }
            </style>
            <motion.div className="progress-bar" style={{ scaleX }} />

            {/* Floating Background Hearts */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
                <Heart className="absolute top-[10%] left-[10%] text-[#5c8eb8] w-6 h-6 md:w-8 md:h-8 rotate-12" />
                <Heart className="absolute top-[30%] right-[10%] text-[#90cdf4] w-8 h-8 md:w-12 md:h-12 -rotate-12" />
                <Heart className="absolute top-[60%] left-[5%] text-[#63b3ed] w-4 h-4 md:w-6 md:h-6 rotate-45" />
                <Heart className="absolute bottom-[20%] right-[10%] text-[#5c8eb8] w-8 h-8 md:w-10 md:h-10 -rotate-6" />
            </div>

            {/* Hero Section */}
            <section className="section bg-[#f0f7ff] relative overflow-hidden z-10">
                <div className="container flex flex-col items-center text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{
                        duration:
                            1.5, ease: "easeOut"
                    }} className="flex items-center justify-center gap-2 mb-8">
                        {/* Два переплетенных сердца, символизирующих двух парней */}
                        <Heart className="text-[#5c8eb8] fill-[#5c8eb8] w-12 h-12 -mr-4 z-10" />
                        <Heart className="text-[#90cdf4] fill-[#90cdf4] w-14 h-14" />
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{
                        duration: 1.2,
                        delay: 0.5
                    }} className="text-5xl md:text-7xl lg:text-9xl font-serif text-[#1a202c] mb-8 leading-tight">
                        Дильмар <br />
                        <span className="italic text-[#5c8eb8]">& Темирлан</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-xl text-[#4a5568] max-w-xl font-light tracking-wide">
                        Коллекция наших общих моментов, мужских объятий, смеха и тихой силы двух сердец, выбравших друг друга.
                    </motion.p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#dbeafe] rounded-full blur-[100px] opacity-70" />
            </section>

            {/* Chapter 1: The Video Story */}
            <section className="section bg-white space-y-12 z-10 relative">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ duration: 1 }} className="order-2 md:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="text-[#5c8eb8] w-6 h-6" />
                            <h2 className="text-4xl md:text-6xl m-0">Ритм <span className="text-[#5c8eb8]">Двоих</span></h2>
                        </div>
                        <div className="w-20 h-[2px] bg-[#5c8eb8] mb-8" />
                        <p className="story-text">
                            В каждом кадре нашей жизни мы находим свой собственный темп. Эти моменты запечатлели больше, чем
                            просто движение; они передают искренность чувств между нами, ту незримую связь двух мужчин, которой
                            не нужны слова.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ duration: 1 }} className="order-1 md:order-2 image-frame group">
                        <video src="/IMG_4167.MP4" autoPlay loop muted playsInline
                            className="w-full h-[350px] md:h-[500px] object-cover rounded-sm" />
                        <div
                            className="absolute -bottom-6 -right-6 text-[10px] tracking-widest uppercase text-[#5c8eb8] font-bold">
                            Его рука в моей
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chapter 2: The First Portrait */}
            <section className="section bg-[#f0f7ff] z-10 relative">
                <div className="container">
                    <div className="flex flex-col items-center">
                        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{
                            once: true
                        }} transition={{ duration: 1.2 }} className="max-w-2xl w-full image-frame floating-image relative">
                            <Heart
                                className="absolute -top-4 -left-4 text-[#90cdf4] fill-[#90cdf4] w-10 h-10 -rotate-12 z-20 drop-shadow-md" />
                            <img src="/photo_2026-03-12_11-54-32.jpg"
                                alt="Дильмар и Темирлан"
                                className="w-full h-auto max-h-[450px] md:max-h-[700px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" />
                            <div className="pt-8 pb-4 text-center">
                                <h3 className="text-2xl font-serif italic mb-2">«Его смех — мой любимый звук»</h3>
                                <p className="text-xs tracking-widest text-[#4a5568] uppercase">Фрагмент I • Наша весна 2026</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Chapter 3: The Second Portrait */}
            <section className="section bg-white z-10 relative">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{
                        once:
                            true
                    }} className="image-frame relative">
                        <Heart
                            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-[#5c8eb8] fill-white w-10 h-10 md:w-14 md:h-14 rotate-12 z-20 stroke-1" />
                        <img src="/photo_2026-03-12_11-54-54.jpg"
                            alt="Дильмар и Темирлан" className="w-full h-auto max-h-[450px] md:max-h-[700px] object-cover" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ duration: 1 }}>
                        <h2 className="text-4xl md:text-6xl mb-8">Плечо к <span className="text-[#5c8eb8]">Плечу</span></h2>
                        <p className="story-text italic border-l-2 border-[#dbeafe] pl-8 py-4">
                            «С ним я чувствую себя дома. Два разных пути слились в один общий».
                        </p>
                        <p className="story-text mt-8 text-sm">
                            Это не просто набор фотографий. Это история нашей гордости и преданности. Сквозь любые преграды мы,
                            два любящих мужчины, продолжаем идти по жизни рука об руку. Смелые, честные и неразлучные.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Decorative Quote Divider with Multiple Hearts */}
            <div className="container z-10 relative">
                <div className="heart-divider">
                    <div className="line" />
                    <div className="flex gap-2">
                        <Heart className="text-[#90cdf4] fill-[#90cdf4] w-5 h-5" />
                        <Heart className="text-[#5c8eb8] fill-[#5c8eb8] w-7 h-7 -mt-1" />
                        <Heart className="text-[#90cdf4] fill-[#90cdf4] w-5 h-5" />
                    </div>
                    <div className="line" />
                </div>
            </div>

            {/* Outro Section */}
            <section className="section items-center justify-center text-center bg-[#f0f7ff] z-10 relative">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{
                    duration: 1.5
                }} className="container flex flex-col items-center">
                    <Heart className="text-[#5c8eb8] w-12 h-12 mb-6 animate-pulse" />
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-12">Лучшее еще <br /><span
                        className="text-[#5c8eb8]">Впереди</span></h2>
                    <div className="flex gap-4">
                        <button
                            className="px-6 py-3 md:px-10 md:py-4 bg-[#1a202c] text-[#f0f7ff] rounded-full hover:bg-[#5c8eb8] transition-all duration-500 transform hover:scale-105 uppercase tracking-widest text-[10px] md:text-xs font-bold shadow-lg">
                            Праздновать Нашу Любовь
                        </button>
                    </div>
                    <p className="mt-24 text-[10px] tracking-[0.5em] text-[#4a5568] uppercase">Создано с мужской нежностью, 2026
                    </p>
                </motion.div>
            </section>

            {/* Footer */}
            <footer
                className="py-20 px-10 flex flex-col md:flex-row justify-between items-center bg-[#1a202c] text-[#f0f7ff] z-10 relative">
                <div className="text-2xl font-serif italic mb-8 md:mb-0 flex items-center gap-2">
                    Д
                    <Heart className="w-4 h-4 text-[#5c8eb8] fill-[#5c8eb8]" /> Т
                </div>
                <div className="flex gap-12 text-[10px] tracking-widest uppercase font-bold opacity-60">
                    <a href="#" className="hover:opacity-100 hover:text-[#90cdf4] transition-colors">Навечно</a>
                    <a href="#" className="hover:opacity-100 hover:text-[#90cdf4] transition-colors">Безгранично</a>
                    <a href="#" className="hover:opacity-100 hover:text-[#90cdf4] transition-colors">Вместе</a>
                </div>
            </footer>
        </div>
    );
};

export default App;