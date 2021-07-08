import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function IndexPage() {
    const [showAboutMe, setShowAboutMe] = useState(false)

    return (
        <>
            {/* <NavBar /> */}

            <AnimatePresence>
                {showAboutMe && (
                    <div className="fixed z-10 inset-0" onClick={() => setShowAboutMe(false)}>
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ height: 0 }}
                            exit={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            className="absolute z-10 bottom-0 bg-white md:bg-opacity-90 w-full shadow-xl"
                        >
                            <button onClick={() => setShowAboutMe(false)} className="absolute right-0 opacity-50 hover:opacity-50 p-6">
                                x
                            </button>
                            <div className="max-w-7xl mx-auto p-12 py-12 md:px-24">
                                <p className="text-lg md:text-2xl">
                                    Laborum enim non id sit aute culpa. Dolore aute esse labore enim irure et proident adipisicing ipsum aliqua aliqua velit laboris incididunt. Minim cillum minim in ullamco ut et
                                    incididunt officia minim labore excepteur nostrud. Commodo adipisicing consequat ad ipsum deserunt est occaecat irure voluptate eiusmod minim exercitation. Laborum ullamco laboris
                                    dolore do et pariatur cupidatat excepteur aliquip ea dolor. Sit id cupidatat cupidatat fugiat id voluptate irure deserunt veniam id Lorem ex. Velit est labore adipisicing nulla est
                                    cillum culpa ea.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-center bg-opacity-85 min-h-screen max-w-4xl mx-auto p-12 py-12 md:p-24 md:py-24 space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className="space-y-8">
                        <p className="text-5xl md:text-6xl font-light">I'm Alejo. I'm interested in math and blockchains. Hire me.</p>
                        <p className="text-3xl md:text-4xl font-extralight opacity-75">I'm Alejo. I'm interested in math and blockchains. Hire me.</p>

                        <div className="space-y-4">
                            <Link href="/projects">
                                <a>
                                    <button type="button" className="w-full bg-gray-900 text-white px-4 py-2 border-2 border-gray-900">
                                        Projects
                                    </button>
                                </a>
                            </Link>

                            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                                <button onClick={() => setShowAboutMe((_) => !_)} type="button" className="w-full text-gray-900 border-2 border-gray-900 px-4 py-2 font-medium">
                                    About Me
                                </button>
                                <a href="mailto:algi4wrk@gmail.com" type="button" className="text-center w-full text-gray-900 border-2 border-gray-900 px-4 py-2 font-medium">
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <motion.div animate={{ y: ['0%', '3%', '0%'] }} transition={{ loop: Infinity, duration: 5 }} className="hidden md:flex space-x-4 pl-24">
                        <motion.div className="bg-animated bg-blue-a rounded-xl shadow-2xl bg-gray-900 w-1/2 block h-full transform translate-y-2" />
                        <motion.div className="bg-animated bg-blue-b rounded-xl shadow-2xl bg-gray-900 w-1/2 block h-full transform -translate-y-2" />
                    </motion.div>
                </div>
                {/* <div className="space-y-6">
                    <p className="text-4xl max-w-lg">Hire me to build your next idea.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="border-2 border-gray-900 rounded-2xl p-6">
                            <p className="text-2xl">123</p>
                            <div className="flex-1" />
                        </div>
                        <div className="border-2 border-blue-900 rounded-2xl p-6">
                            <p className="text-2xl">123</p>
                            <div className="flex-1" />
                        </div>
                        <div className="border-2 border-blue-900 rounded-2xl p-6">
                            <p className="text-2xl">123</p>
                            <div className="flex-1" />
                        </div>
                        <div className="border-2 border-blue-900 rounded-2xl p-6">
                            <p className="text-2xl">123</p>
                            <div className="flex-1" />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
