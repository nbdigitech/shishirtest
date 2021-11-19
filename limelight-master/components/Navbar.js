import Image from "next/image";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { MdPlayArrow } from "react-icons/md";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      status: "top",
    };

    this.listener = null;
  }

  drawer() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.state.isOpen)
        this.setState({ isOpen: false });
    });

    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "scrolled") {
          this.setState({ status: "scrolled" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <nav
        className="fixed top-0 left-0 right-0  z-50"
        style={{
          backgroundColor: this.state.status === "top" ? "transparent" : "#fff",
          opacity: this.state.status === "top" ? 1 : 0.95,
        }}
      >
        <div className="w-full ">
          <div className="flex  w-full items-center  justify-between lg:px-32 md:px-2 px-10 h-20  mx-auto   ">
            <div className="flex items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-4xl font-bold">limelight</span>
                <span className="flex align-bottom mt-4 text-[#FFD400]">
                  <MdPlayArrow />
                </span>
              </a>
            </div>
            <div className="flex justify-end">
              <div className=" flex items-center justify-end font-medium lg:text-lg text-base ">
                <Link href="/">
                  <a
                    className="hidden sm:block lg:mr-8 mr-6   cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/" ? "#000" : "#464655",
                      fontWeight:
                        this.props.router.route === "/" ? "bold" : "normal",
                    }}
                  >
                    Home
                  </a>
                </Link>
                {/* <Link href="/management"> */}
                <a
                  className="hidden sm:block lg:mr-8 mr-6  cursor-pointer"
                  style={{
                    color:
                      this.props.router.route === "/management"
                        ? "#000"
                        : "#464655",
                    fontWeight:
                      this.props.router.route === "/management"
                        ? "bold"
                        : "normal",
                  }}
                >
                  Perception Management
                </a>
                {/* </Link>
                <Link href="/experience"> */}
                <a
                  className="hidden sm:block lg:mr-8 mr-6  cursor-pointer"
                  style={{
                    color:
                      this.props.router.route === "/experience"
                        ? "#000"
                        : "#464655",
                    fontWeight:
                      this.props.router.route === "/experience"
                        ? "bold"
                        : "normal",
                  }}
                >
                  Experience Design
                </a>
                {/* </Link>
                <Link href="/"> */}
                <a
                  className="hidden sm:block lg:mr-8 mr-6  cursor-pointer"
                  style={{
                    color:
                      this.props.router.route === "/video" ? "#000" : "#464655",
                  }}
                >
                  Video Production
                </a>
                {/* </Link>
                <Link href="/"> */}
                <a
                  className="hidden sm:block lg:mr-8 mr-6  cursor-pointer"
                  style={{
                    color:
                      this.props.router.route === "/career"
                        ? "#000"
                        : "#464655",
                  }}
                >
                  Careers
                </a>
                {/* </Link>
                <Link href="/contactus"> */}
                <div className="hidden sm:block hover:text-[#FFD400] text-white">
                  <button className="inline-flex items-center border  border-black  py-2 px-2 hover:px-5 focus:outline-none text-base text-black hover:text-[#FFD400] hover:bg-black mt-4 md:mt-0">
                    Contact Us
                    <span className="font-bold text-xl mt-[2px] ml-1">
                      <MdKeyboardArrowRight />
                    </span>
                  </button>
                </div>
                {/* </Link> */}
                <div
                  className="ml-28 mr-6 sm:hidden cursor-pointer"
                  onClick={() => this.drawer()}
                >
                  <RiBarChartHorizontalLine size={24} color="black" />
                </div>
              </div>

              <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
              >
                <div
                  style={{ display: this.state.isOpen ? "block" : "none" }}
                  className="z-10 fixed inset-0 transition-opacity"
                >
                  <div
                    className="absolute inset-0 bg-black opacity-50"
                    tabIndex="0"
                  ></div>
                </div>
              </transition>
              <aside
                className="transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 "
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <span className="flex w-full justify-between p-4 border-b ">
                  <div>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                      <span className="ml-3 text-4xl font-bold">limelight</span>
                      <span className="flex align-bottom mt-4 text-[#FFD400]">
                        <MdPlayArrow />
                      </span>
                    </a>
                  </div>
                  <div
                    className="absolute top-8 right-5  justify-center  flex items-center cursor-pointer "
                    onClick={() => this.drawer()}
                  >
                    <AiOutlineClose size={28} color="black" />
                  </div>
                </span>
                {/* <Link href="/"> */}
                <span className="flex justify-center items-center p-4  text-2xl  cursor-pointer">
                  <a
                    className=" ml-4 mr-6 cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/" ? "#000" : "#464655",
                      fontWeight:
                        this.props.router.route === "/" ? "bold" : "normal",
                    }}
                  >
                    Home
                  </a>
                </span>
                {/* </Link>
                <Link href="/management"> */}
                <span className="flex justify-center items-center p-4 font-semibold text-2xl   cursor-pointer ">
                  <a
                    className=" ml-4 mr-6    cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/management"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/management"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Perception Management
                  </a>
                </span>
                {/* </Link>
                <Link href="/experience"> */}
                <span className="flex justify-center items-center p-4 font-semibold text-2xl   cursor-pointer ">
                  <a
                    className=" ml-4 mr-6    cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/experience"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/experience"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Experience Design
                  </a>
                </span>
                {/* </Link>
                <Link href="/video"> */}
                <span className="flex justify-center items-center p-4 font-semibold text-2xl   cursor-pointer ">
                  <a
                    className=" ml-4 mr-6    cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/video"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/video"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Video Production
                  </a>
                </span>
                {/* </Link>
                <Link href="/career"> */}
                <span className="flex justify-center items-center p-4 font-semibold text-2xl   cursor-pointer ">
                  <a
                    className=" ml-4 mr-6    cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/career"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/career"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Careers
                  </a>
                </span>
                {/* </Link>
                <Link href="/contactus"> */}
                <div className="hover:text-[#FFD400] text-white flex justify-center">
                  <button className="inline-flex items-center border  border-black  py-2 px-3 hover:px-8 focus:outline-none text-base text-black hover:text-[#FFD400] hover:bg-black mt-4 md:mt-0">
                    Contact Us
                    <span className="font-bold text-xl mt-[2px] ml-1">
                      <MdKeyboardArrowRight />
                    </span>
                  </button>
                </div>
                {/* </Link> */}
              </aside>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
