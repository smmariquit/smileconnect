"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 scroll-smooth">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-blue-600">SmileConnect</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Home
              </Link>
              <Link href="#benefits" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Benefits
              </Link>
              <Link href="#about" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                About Us
              </Link>
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="home" className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connecting
                <br />
                Student Dentists
                <br />
                with Patients,
                <br />
                Hassle-Free.
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Find smiles. Build skills.</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Build clinical experience while helping
                  <br />
                  others get affordable dental care.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-full text-lg font-medium"
                asChild
              >
                <Link href="/dashboard">Join Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div
                className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl active:scale-95"
                onClick={() => {
                  // Add a pulse animation
                  const phone = document.querySelector(".phone-content")
                  phone?.classList.add("animate-pulse")
                  setTimeout(() => phone?.classList.remove("animate-pulse"), 1000)
                }}
              >
                <div className="phone-content w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-[2.5rem] overflow-hidden transition-all duration-300">
                  {/* Phone Content */}
                  <div className="p-6 space-y-6">
                    {/* App Header */}
                    <div className="flex items-center justify-center pt-8">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-white"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                            <path d="M9 9h.01" />
                            <path d="M15 9h.01" />
                          </svg>
                        </div>
                        <span className="text-blue-600 font-semibold">SmileConnect</span>
                      </div>
                    </div>

                    {/* Match Found Section */}
                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600 font-medium">PATIENT</p>
                      <h3 className="text-2xl font-bold text-blue-600">MATCH FOUND</h3>
                    </div>

                    {/* Patient Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                      {/* Patient Info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-blue-600"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Santos, John</h4>
                          <p className="text-sm text-gray-600">Age: 21</p>
                        </div>
                      </div>

                      {/* Procedures */}
                      <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-700">Procedures</p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Cleaning</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Filling</span>
                          </div>
                        </div>
                      </div>

                      {/* Confirm Button */}
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 font-medium">
                        Confirm
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section id="benefits" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How SmileConnect Benefits Everyone</h2>
            <p className="text-xl text-gray-600">Connecting communities for better dental health</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* For Dentists */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-blue-600"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Student Dentists</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gain hands-on clinical experience with real patients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build your portfolio with diverse dental cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Connect with patients who need affordable care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop professional skills in a supervised environment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For Patients */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-green-600"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access affordable dental care from qualified students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Receive treatment under professional supervision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Get matched with students based on your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contribute to the education of future dentists</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-xl text-gray-600 mb-8">
                We are a team of DOST Scholars passionate about using technology to improve healthcare access
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">SM</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Simonee Ezekiel Mariquit</h3>
                <p className="text-blue-600 font-medium mb-2">Project Manager</p>
                <p className="text-sm text-gray-600">Leading project coordination and strategic planning</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">CP</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Christine May Ponciano</h3>
                <p className="text-green-600 font-medium mb-2">Frontend Developer</p>
                <p className="text-sm text-gray-600">Creating beautiful and intuitive user interfaces</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">JZ</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Junjun Zaragosa</h3>
                <p className="text-purple-600 font-medium mb-2">Backend Developer</p>
                <p className="text-sm text-gray-600">Building robust server architecture and APIs</p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">SD</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Samuelson De Vera</h3>
                <p className="text-orange-600 font-medium mb-2">UX Designer</p>
                <p className="text-sm text-gray-600">Designing user-centered experiences and workflows</p>
              </div>

              {/* Team Member 5 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">KM</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Kharl Andre Miguel</h3>
                <p className="text-red-600 font-medium mb-2">Data Specialist</p>
                <p className="text-sm text-gray-600">Managing data analytics and insights</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DOST</span>
                </div>
                <span className="text-blue-800 font-medium">Proudly supported by DOST Scholarship Program</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
