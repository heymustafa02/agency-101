"use client";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";

export default function Partners() {
  // svg icons provided by https://svgl.app/
  const icons = [
    {
      name: "Docker",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="#008fe2"
        >
          <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
        </svg>
      ),
    },
    {
      name: "Raycast",
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 18.079V21L0 14L1.46 12.54L7 18.081V18.079ZM9.921 21H7L14 28L15.46 26.54L9.921 21ZM26.535 15.462L27.996 14L13.996 0L12.538 1.466L18.077 7.004H14.73L10.864 3.146L9.404 4.606L11.809 7.01H10.129V17.876H20.994V16.196L23.399 18.6L24.859 17.14L20.994 13.274V9.927L26.535 15.462ZM7.73 6.276L6.265 7.738L7.833 9.304L9.294 7.844L7.73 6.276ZM20.162 18.708L18.702 20.17L20.268 21.738L21.73 20.276L20.162 18.708ZM4.596 9.41L3.134 10.872L7 14.738V11.815L4.596 9.41ZM16.192 21.006H13.268L17.134 24.872L18.596 23.41L16.192 21.006Z"
            fill="#FF6363"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 1052 1052"
        >
          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
          <path
            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
            fill="#323330"
          />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      svg: (
        <svg
          viewBox="0 0 256 154"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              x1="-2.778%"
              y1="32%"
              x2="100%"
              y2="67.556%"
              id="gradient"
            >
              <stop stopColor="#2298BD" offset="0%"></stop>
              <stop stopColor="#0ED7B5" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
            fill="url(#gradient)"
          ></path>
        </svg>
      ),
    },
    {
      name: "ReactJS",
      svg: (
        <svg
          viewBox="0 0 256 228"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
            fill="#00D8FF"
          />
        </svg>
      ),
    },
    {
      name: "Postman",
      svg: (
        <svg
          viewBox="0 0 256 256"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M254.953 144.253c8.959-70.131-40.569-134.248-110.572-143.206C74.378-7.912 10.005 41.616 1.047 111.619c-8.959 70.003 40.569 134.248 110.572 143.334 70.131 8.959 134.248-40.569 143.334-110.7Z"
            fill="#FF6C37"
          />
          <path
            d="m174.2 82.184-54.007 54.007-15.229-15.23c53.11-53.11 58.358-48.503 69.236-38.777Z"
            fill="#FFF"
          />
          <path
            d="M120.193 137.47c-.384 0-.64-.128-.895-.384l-15.358-15.229a1.237 1.237 0 0 1 0-1.792c54.007-54.006 59.638-48.887 71.028-38.649.255.256.383.512.383.896s-.128.64-.383.896l-54.007 53.878c-.128.256-.512.384-.768.384Zm-13.437-16.509 13.437 13.438 52.087-52.087c-9.47-8.446-15.87-11.006-65.524 38.65Z"
            fill="#FF6C37"
          />
          <path
            d="m135.679 151.676-14.718-14.718 54.007-54.006c14.46 14.59-7.167 38.265-39.29 68.724Z"
            fill="#FFF"
          />
          <path
            d="M135.679 152.956c-.384 0-.64-.128-.896-.384l-14.718-14.718c-.256-.256-.256-.512-.256-.896s.128-.64.384-.895L174.2 82.056a1.237 1.237 0 0 1 1.791 0 15.58 15.58 0 0 1 4.991 11.902c-.256 14.206-16.38 32.25-44.28 58.614-.383.256-.767.384-1.023.384Zm-12.926-15.998c8.19 8.319 11.646 11.646 12.926 12.926 21.5-20.476 42.36-41.464 42.488-55.926.128-3.327-1.152-6.655-3.327-9.214l-52.087 52.214Z"
            fill="#FF6C37"
          />
          <path
            d="m105.22 121.345 10.878 10.878c.256.256.256.512 0 .768-.128.128-.128.128-.256.128l-22.524 4.863c-1.152.128-2.175-.64-2.431-1.791-.128-.64.128-1.28.512-1.664l13.053-13.054c.256-.256.64-.384.768-.128Z"
            fill="#FFF"
          />
          <path
            d="M92.934 139.262c-1.92 0-3.327-1.536-3.327-3.455 0-.896.384-1.792 1.024-2.432l13.053-13.054c.768-.64 1.792-.64 2.56 0l10.878 10.878c.768.64.768 1.792 0 2.56-.256.256-.512.384-.896.512l-22.524 4.863c-.256 0-.512.128-.768.128Zm11.902-16.51-12.542 12.543c-.256.256-.383.64-.128 1.024.128.383.512.511.896.383l21.116-4.607-9.342-9.342Z"
            fill="#FF6C37"
          />
          <path
            d="M202.739 52.238c-8.191-7.935-21.373-7.679-29.307.64-7.935 8.318-7.679 21.372.64 29.306A20.678 20.678 0 0 0 199.155 85l-14.59-14.59 18.174-18.172Z"
            fill="#FFF"
          />
          <path
            d="M188.405 89.223c-12.158 0-22.012-9.854-22.012-22.012 0-12.158 9.854-22.012 22.012-22.012 5.631 0 11.134 2.176 15.23 6.143.255.256.383.512.383.896s-.128.64-.384.895L186.357 70.41l13.566 13.566c.512.512.512 1.28 0 1.792l-.256.256c-3.327 2.047-7.295 3.199-11.262 3.199Zm0-41.337c-10.75 0-19.452 8.703-19.324 19.453 0 10.75 8.702 19.452 19.452 19.324 2.944 0 5.887-.64 8.575-2.047l-13.438-13.31c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l17.149-17.15c-3.456-2.943-7.807-4.479-12.414-4.479Z"
            fill="#FF6C37"
          />
          <path
            d="m203.122 52.622-.255-.256-18.301 18.044 14.461 14.462c1.408-.896 2.816-1.92 3.967-3.072a20.51 20.51 0 0 0 .128-29.178Z"
            fill="#FFF"
          />
          <path
            d="M199.155 86.28c-.384 0-.64-.128-.896-.384l-14.589-14.59c-.256-.256-.384-.512-.384-.896s.128-.64.384-.895l18.173-18.173a1.237 1.237 0 0 1 1.791 0l.384.256c8.575 8.574 8.575 22.396.128 31.098-1.28 1.28-2.687 2.432-4.223 3.328-.384.128-.64.256-.768.256Zm-12.798-15.87 12.926 12.926c1.024-.64 2.048-1.536 2.816-2.304 7.294-7.294 7.678-19.196.64-26.875L186.357 70.41Z"
            fill="#FF6C37"
          />
          <path
            d="M176.375 84.488a7.879 7.879 0 0 0-11.134 0l-48.247 48.247 8.063 8.063 51.062-44.792c3.328-2.816 3.584-7.807.768-11.134-.256-.128-.384-.256-.512-.384Z"
            fill="#FFF"
          />
          <path
            d="M124.929 142.077c-.384 0-.64-.128-.896-.383l-8.063-8.063a1.237 1.237 0 0 1 0-1.792l48.247-48.247a9.115 9.115 0 0 1 12.926 0 9.115 9.115 0 0 1 0 12.926l-.384.384-51.063 44.792c-.128.255-.384.383-.767.383Zm-6.143-9.342 6.27 6.271 50.167-44.024c2.816-2.304 3.072-6.527.768-9.342-2.303-2.816-6.526-3.072-9.342-.768-.128.128-.256.256-.512.384l-47.351 47.48Z"
            fill="#FF6C37"
          />
          <path
            d="M80.009 187.637c-.512.256-.768.768-.64 1.28l2.175 9.214c.512 1.28-.256 2.816-1.663 3.2-1.024.384-2.176 0-2.816-.768l-14.077-13.95 45.943-45.943 15.87.256 10.75 10.75c-2.56 2.175-18.045 17.149-55.542 35.961Z"
            fill="#FFF"
          />
          <path
            d="M78.985 202.61c-1.024 0-2.048-.383-2.688-1.151l-13.95-13.95c-.255-.256-.383-.512-.383-.896 0-.383.128-.64.384-.895l45.944-45.944c.256-.256.64-.384.895-.384l15.87.256c.383 0 .64.128.895.384l10.75 10.75c.256.256.384.64.384 1.024s-.128.64-.512.896l-.895.767c-13.566 11.902-31.995 23.804-54.902 35.194l2.175 9.086c.384 1.664-.384 3.456-1.92 4.352-.767.384-1.407.512-2.047.512Zm-14.078-15.997 13.182 13.054c.384.64 1.152.896 1.792.512.64-.384.896-1.152.512-1.792l-2.176-9.214c-.256-1.152.256-2.176 1.28-2.688 22.652-11.39 40.952-23.163 54.39-34.81l-9.47-9.47-14.718-.256-44.792 44.664Z"
            fill="#FF6C37"
          />
          <path
            d="m52.11 197.62 11.006-11.007 16.38 16.381-26.107-1.791c-1.151-.128-1.92-1.152-1.791-2.304 0-.512.128-1.024.512-1.28Z"
            fill="#FFF"
          />
          <path
            d="m79.497 204.146-26.236-1.791c-1.92-.128-3.199-1.792-3.071-3.712.128-.768.384-1.535 1.024-2.047L62.22 185.59a1.237 1.237 0 0 1 1.792 0l16.38 16.38c.385.385.512.897.257 1.408-.256.512-.64.768-1.152.768Zm-16.381-15.74-10.11 10.11c-.384.255-.384.895 0 1.151.127.128.255.256.511.256l22.652 1.536-13.053-13.054ZM104.452 146.557c-.768 0-1.28-.64-1.28-1.28 0-.384.128-.64.384-.896l12.414-12.414a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-20.477 4.352h-.256Zm12.414-11.902-8.446 8.446 13.821-2.943-5.375-5.503Z"
            fill="#FF6C37"
          />
          <path
            d="m124.8 140.926-14.077 3.071c-1.024.256-2.048-.384-2.303-1.408-.128-.64 0-1.28.511-1.791l7.807-7.807 8.063 7.935Z"
            fill="#FFF"
          />
          <path
            d="M110.467 145.277a3.168 3.168 0 0 1-3.2-3.2c0-.895.385-1.663.897-2.303l7.806-7.807a1.237 1.237 0 0 1 1.792 0l8.062 8.063c.384.384.512.768.384 1.28-.128.384-.512.767-1.023.895l-14.078 3.072h-.64Zm6.399-10.622-6.91 6.91c-.257.257-.257.512-.129.768s.384.384.768.384l11.774-2.56-5.503-5.502ZM203.25 64.907c-.256-.767-1.151-1.151-1.92-.895-.767.255-1.151 1.151-.895 1.92 0 .127.128.255.128.383.768 1.536.512 3.455-.512 4.863-.512.64-.384 1.536.128 2.048.64.512 1.536.384 2.048-.256 1.92-2.432 2.303-5.503 1.023-8.063Z"
            fill="#FF6C37"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-screen-md w-full mx-auto px-4 py-24 gap-10 md:px-8 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
         Tools we use ~
        </h2>
      </motion.div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-6 grid-rows-3 sm:grid-rows-1 gap-5 place-items-center">
        {icons.map((icon, index) => (
          <Tooltip content={icon.name} key={icon.name}>
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                type: "spring",
                bounce: 0,
              }}
            >
              {icon.svg}
            </motion.div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
