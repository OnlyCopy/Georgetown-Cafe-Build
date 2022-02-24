"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 3193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "w-full border-t-2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "f-content max-w-[1440px] mx-auto mt-2 px-3 pb-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Follow us"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "my-3 flex space-x-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "blank",
                                href: "https://www.facebook.com/Georgetown-Cafe-1-1909672329271844/?ref=page_internal",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("box-icon", {
                                    type: "logo",
                                    color: "black",
                                    name: "facebook-circle"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "blank",
                                href: "https://www.yelp.com/biz/georgetown-cafe-lexington",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("box-icon", {
                                    name: "yelp",
                                    type: "logo"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "\xa92022 A Caip Year Website"
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./images/gtc.png
/* harmony default export */ const gtc = ({"src":"/_next/static/media/gtc.e12bdfbc.png","height":431,"width":480,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA6klEQVR42mPW1NTmY2JksVVSUur6/OlH158/P3MYGBgNtDR1XrCysX1gUFfTMDUyMtnPwMDwPzs75/+DBw/+B/gH/gfyVzk5uagzAEE1EP+Pi4v/v3Llyr//////m5SYBFLwDYgTGK9evTqLlZUtVUZG+t/379+Z7t69xyAuLv7/y5fPjGxs7HUsCgoKD4F2Mfz984eJjY3tH5DPICgowPTnj+h3IP8xy9atW3f9/PnThZub24GFhYUJCBhevnzJwMfPv4WNlfU4y6VLl28CVbby8vK+/fXrpwkDA+MfRkbGQ0DrZp49c+4JAF0/WiCcA1IBAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
;// CONCATENATED MODULE: ./components/Navbar.js







function Navbar() {
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    let MobileMenu;
    if (isOpen === true) {
        MobileMenu = /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "w-screen h-screen bg-white md:hidden",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-elements mt-8 flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navigation flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-col space-x-4 text-3xl items-center space-y-4 border-b-2 pb-2 mb-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/menu",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Menu"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/reviews",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Reviews"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "About"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "discovery items-center space-y-4 text-xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "flex items-center space-x-1 hover:underline",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(solid_.LocationMarkerIcon, {
                                                    className: "w-5 h-5 text-gray-800"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Find us"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "hover:underline",
                                        href: "tel:859-309-2777",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center space-x-1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.PhoneIcon, {
                                                        className: "w-5 h-5 text-gray-800"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-bold",
                                                        children: "Call now!"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "(859)-309-2777"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "w-full border-b-2 pb-2 z-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "nav-elements flex mt-3",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-10 w-full max-w-[1440px] md:mx-auto flex items-center justify-between text-lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "left flex align-items items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "logo",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "hidden sm:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                className: "rounded-full",
                                                src: gtc,
                                                alt: "Logo",
                                                width: 60,
                                                height: 60
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "sm:hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                className: "rounded-full",
                                                src: gtc,
                                                alt: "Logo",
                                                width: 40,
                                                height: 40
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "navigation hidden md:block ml-10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/menu",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Menu"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/reviews",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Reviews"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/about",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "About"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "right",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.MenuIcon, {
                                        className: "w-6 h-6 cursor-pointer md:hidden",
                                        onClick: ()=>setIsOpen(!isOpen)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: MobileMenu
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "discovery hidden md:inline-flex flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/about",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "flex items-center space-x-1 hover:underline",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.LocationMarkerIcon, {
                                                        className: "w-5 h-5 text-gray-800"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Find us"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "hover:underline",
                                            href: "tel:859-309-2777",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex items-center space-x-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(solid_.PhoneIcon, {
                                                            className: "w-5 h-5 text-gray-800"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "font-bold",
                                                            children: "Call now!"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "(859)-309-2777"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;