import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
        <footer className="flex flex-col relative items-center justify-center pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-black">

            <div className="hidden lg:block absolute -top-1/3 -right-1/4"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm text-start">
                       Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </p>
                 
                </div>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium">
                                Products
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Features
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Testimonials
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Social Media
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium">
                                Social Media
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Facebook
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Instagram
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Twitter
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Blog
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Case Studies
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium">
                                Company
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        About Us
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Terms and Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                    &copy; {new Date().getFullYear()} Connecktica - All rights reserved.
                </p>
            </div>

        </footer>
        </div>
    )
}

export default Footer
