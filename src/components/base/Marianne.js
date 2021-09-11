import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1em;
  font-size: 0.75rem;
  background-color: #fff;

  &:before {
    content: '';
    display: block;
    width: 2.75em;
    height: 1em;
    margin-bottom: 0.33333em;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    backface-visibility: hidden;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 16'%3E%3Cpath fill='%23fff' d='M0 0h44v16H0z'/%3E%3Cpath d='M14.271 14.066c.005 0 .011-.008.011-.008a.645.645 0 00.123-.118.016.016 0 01-.016-.008c-.037.039-.08.087-.117.134M20.181 12.084l-.093.08c.053-.013.093-.027.093-.08' fill='%231f356c'/%3E%3Cpath d='M18.27 14.113c.171-.171.342-.353.514-.54h-.005a9.9 9.906 0 011.006-1.03 3.332 3.334 0 01.327-.265c.031-.031.031-.094.062-.12-.15.058-.239.183-.394.24-.031 0-.062-.031-.031-.062.109-.078.218-.161.322-.244h-.021c-.031 0-.031-.031-.031-.062a1.223 1.224 0 00-.965.452c-.062.031-.119-.031-.15-.031-.451.151-.783.545-1.235.722v-.062a5.372 5.375 0 01-.545.214 3.105 3.107 0 01-.752.03 9.868 9.874 0 00-1.095.2c-.01.006-.021.006-.031.01a2.271 2.272 0 00-.56.23l-.021.01c-.016.02-.031.036-.041.052a.7.7 0 01-.207.182 3 3.002 0 00-.5.39.072.072 0 01-.047.016c-.161.156-.322.312-.488.462a.158.158 0 01-.093.01.009.009 0 00.011-.013l.016-.03.078-.126c.031-.047.057-.094.088-.14.041-.062.083-.125.13-.182a.031.031 0 000-.042.059.059 0 00-.041-.016 2.816 2.818 0 01.508-.38v-.004c-.021.005-.052-.01-.036-.031a.728.728 0 00.052-.083c.005-.01.005-.016.01-.026.005-.01-.016-.016-.021-.026a1.354 1.355 0 00-.14.1c-.073.062-.13.2-.239.2a.178.178 0 01-.047-.005.044.044 0 01-.031-.01c0-.005 0-.005.005-.005a.018.018 0 00.005-.01.005.005 0 01.005-.005l.016-.026.016-.026c.006-.01.005-.016.01-.021a.309.31 0 00.021-.042l.016-.026c.006-.01.026-.047.041-.068a.109.11 0 01.021-.031c.01-.021.021-.036.031-.057a.033.033 0 00-.021-.052.7.7 0 01.207-.182h-.01c.114-.057.233-.13.348-.192a.2.2 0 01.052-.043 1.868 1.87 0 00-.477.24.235.235 0 00-.052.026.08.08 0 01-.073-.026c-.005-.005-.005-.01-.005-.021.031-.062.119-.088.182-.151.031 0 .057 0 .057.03.965-.753 2.293-.57 3.408-.966.088-.062.182-.12.27-.182.15-.062.27-.213.451-.3a1.342 1.343 0 00.514-.7.109.11 0 00-.031-.063 4.77 4.773 0 01-1.328 1 5.6 5.603 0 01-1.987.365c.031-.062.093-.062.15-.062 0-.094.057-.119.119-.182h.088c.031 0 .031-.062.062-.062.062 0 .15-.031.119-.031-.093-.12-.27.088-.42 0 .057-.062.031-.151.088-.182h.119a.2.2 0 01.062-.12c.451-.27.877-.483 1.3-.722-.088 0-.15.094-.239.031.062 0 0-.088.062-.088.332-.088.6-.27.934-.395-.119 0-.213.094-.332 0 .062-.03.088-.088.182-.088v-.088c0-.031.031-.031.062-.031a.109.11 0 01-.062-.031c.031-.062.119-.031.182-.088-.031 0-.088 0-.088-.031a.6.6 0 01.389-.182c-.031-.062-.119 0-.119-.062 0-.031.031-.031.062-.031h-.062c-.062-.031-.031-.094-.031-.12a2.069 2.07 0 00.27-.722c-.031 0-.062 0-.062-.03a2.452 2.453 0 01-1.235.57h-.15a.6.6 0 01-.514-.03 2.421 2.422 0 01-.3-.24 3.721 3.723 0 00-.752-.364 6.78 6.784 0 00-2.319-.332 4.889 4.892 0 011.053-.3 4.484 4.487 0 011.535-.3.974.975 0 00-.3 0 4.817 4.82 0 00-1.3.182c-.3.062-.571.182-.877.239-.182.062-.27.239-.482.213v-.099a1.732 1.733 0 011.146-.753 5.689 5.692 0 011.6.062 7.521 7.525 0 011.146.213c.15 0 .182.239.3.27.182.062.363 0 .545.119 0-.062-.031-.12 0-.182.119-.12.27.03.389-.031.244-.151-.213-.421-.332-.635a.109.11 0 01.031-.062 3.371 3.373 0 00.721.6c.15.063.514.152.451-.03a4.675 4.678 0 00-.7-.9V7.34c-.062 0-.062-.03-.088-.062v-.12c-.119-.062-.093-.182-.15-.27-.093-.151-.031-.364-.093-.545a3.07 3.072 0 01-.119-.515c-.093-.514-.213-.966-.27-1.45-.062-.57.332-1.03.6-1.538a2.592 2.593 0 01.846-.967 2.633 2.634 0 01.571-.966 2.506 2.507 0 01.929-.6 7.734 7.738 0 01.8-.307H0v16h14.784a13.507 13.515 0 011.95-1.009 8.119 8.124 0 001.535-.878m-4.638-2.162c-.062 0-.182.03-.15-.031.031-.151.239-.151.363-.213.062-.031.15-.088.213-.062.062.088.15.062.213.119-.187.187-.425.094-.638.187m-4.612-.666a.109.11 0 01-.031-.062 9.23 9.235 0 00.965-1.539 4.216 4.218 0 001.027-.847 5.835 5.838 0 011.686-1.33 1.131 1.132 0 01.783.03c-.088.12-.239.088-.363.182a.114.114 0 01-.093-.03.115.115 0 00.031-.095c-.3.332-.721.484-.965.879-.182.3-.3.7-.69.784-.119.031.031-.088-.031-.062a10.317 10.323 0 00-2.319 2.09m2.5-1.997c-.031.062-.062.068-.088.12a.243.243 0 01-.119.118c-.031 0-.062 0-.062-.03a.371.371 0 01.239-.27c.031.004.031.035.031.061m1.4 4.528a.387.387 0 01-.073.088c.036.005.062.026.041.047a.651.651 0 01-.228.16.4.4 0 01-.047.006 1.084 1.085 0 01-.114.1c-.036.031-.2.01-.15-.036.078-.068.15-.14.223-.213.041-.042.088-.078.124-.12a.385.385 0 01.062-.067c.026-.016.187-.031.161.03m-.539-.248c-.005 0-.005 0-.005.005-.114.078-.223.16-.342.229-.119.068-.265.13-.4.2a.005.005 0 00-.005-.005.039.039 0 00-.052-.01 1.335 1.336 0 00-.3.234.158.158 0 00-.041.042l-.041.042-.005.005v.005a1.056 1.056 0 00-.067.073c-.016.016-.021.031-.041.042-.02.011-.073.01-.067-.02v-.006a.242.242 0 01-.052.026c-.016.01-.031.016-.047.026a.044.044 0 00-.041 0c-.036.031-.073.057-.109.094a2.023 2.024 0 00-.176.187.005.005 0 01-.005.005c0 .005-.005.005-.005.01l-.01.01c-.005.005-.005.01-.01.01l-.005.005a.109.11 0 01-.021.031.04.04 0 01-.026.01c-.005-.005-.01-.01-.01-.016s-.005-.01-.01-.016-.016-.03-.026-.047v-.005c0-.005-.005-.01-.005-.016l.093-.109.005-.005c.01-.01.021-.026.031-.036.01-.01.036-.042.052-.062.016-.02.01-.016.016-.026.031-.042.062-.083.093-.13v-.005a.027.027 0 00.01-.021.433.433 0 00.041-.062l.031-.062v-.005l.005-.005c0-.005.005-.005.005-.01l.031-.073v-.005l.005-.021c.005-.01.005-.021.01-.031v-.005c.005-.016.005-.031.01-.047a.031.031 0 00-.005-.021.861.861 0 01.119-.161c-.005 0-.01.005-.016.005-.041.026-.073.068-.114.1-.041.032-.093-.016-.052-.047a.8.8 0 00.067-.062.005.005 0 01.006-.002 2.132 2.133 0 01.156-.151c.036-.026.062-.047.093-.073.005-.005.01-.01.016-.01a.9.9 0 01.067-.078.005.005 0 00.005-.005c.29-.282.773-.266 1.157-.443.15-.062.332.031.482 0a.431.431 0 01.27.062c-.265.14-.514.307-.763.463M13 11.467c-.031-.03.093 0 .119-.062h-.239c-.031 0-.031-.03-.031-.062-.15.031-.332.088-.482.12-.213.061-.394.213-.633.27-.332.119-.6.395-.965.514-.031 0-.031-.031-.031-.062.031-.088.15-.12.213-.213 0-.031 0-.062-.031-.062a5.063 5.066 0 01.877-.785v-.094c.088-.119.239-.182.3-.332a.541.541 0 01.3-.27c-.031-.031-.088-.031-.088-.088-.119 0-.244.062-.363-.031a.432.432 0 01.187-.11.106.106 0 01-.067-.041c-.031-.062.057-.13.15-.151a.792.792 0 00.363-.12c-.213-.03-.451.063-.664-.061a1.631 1.632 0 01.752-.901c.031 0 .093 0 .093.031a.3.3 0 01-.244.3 3.263 3.265 0 01.721.182c-.031.062-.088.031-.119.031.15.088.332.031.482.151-.093.088-.182 0-.27 0a7.876 7.88 0 012.715 1.081 8.308 8.313 0 01-2.08.634.63.63 0 01-.239-.03c0 .03 0 .087-.031.087a.479.48 0 00-.3.062c-.124.068-.306.1-.394.01' fill='%23000091'/%3E%3Cpath d='M44.005 0h-17.16a.793.794 0 01.16.073c.14.073.322.171.43.23a1.4 1.402 0 01.577.483c.062.088.15.27.093.39-.062.152-.093.396-.244.453a1.084 1.086 0 01-.633.062 1.521 1.523 0 01-.363-.062 2.477 2.48 0 011.178.818c.03.062.15.088.27.088.03 0 .03.062.03.088-.061.062-.118.094-.087.182h.088c.15-.062.119-.364.332-.27a.337.337 0 01.119.448 2.722 2.726 0 01-.363.3.255.255 0 000 .214.953.954 0 01.15.365c.093.213.119.452.213.666a4.41 4.416 0 01.21 1.365c0 .24-.12.453-.031.701a2.737 2.74 0 00.332.635 5.361 5.369 0 01.332.484c.182.3.514.601.363.967-.088.214-.42.183-.633.3-.182.152-.031.396.062.547.15.27-.182.452-.394.545.062.095.182.063.213.12.03.15.182.239.088.395-.12.182-.482.27-.3.546a.807.808 0 01-.032.663.741.742 0 01-.545.453 1.187 1.189 0 01-.571.03.422.423 0 00-.182-.061 13.114 13.133 0 00-1.535-.209 1.657 1.66 0 00-.42.12 2.435 2.439 0 00-.363.322l-.005.005c-.021.026-.047.047-.067.073-.02.026-.026.031-.036.047-.01.016-.016.021-.026.031a3.176 3.18 0 00-.24.349.072.072 0 01-.015.02.182.182 0 01-.026.043 2.989 2.993 0 00-.228.557 1.8 1.803 0 00.03 1.43c.042.043 1 .339 1.66.635a5.918 5.927 0 01.712.359H44V0z' fill='%23e1000f'/%3E%3Cpath d='M27.862 5.844c.119.031.3.031.3.094-.062.239-.42.3-.6.545h-.093c-.088.062-.062.213-.15.213a.408.408 0 00-.27.031.515.515 0 00.451.182c.031 0 .088.062.088.119A.1.1 0 0027.649 7c.031 0 .062 0 .062.031v.119c-.088.119-.244.062-.363.088a1.314 1.314 0 00.7 0c.182-.062 0-.364.119-.514-.062 0 0-.094-.062-.094.062-.062.119-.151.182-.182a.213.213 0 00.182-.094c0-.062-.119-.088-.093-.151.182-.119.332-.3.27-.483-.031-.094-.27-.094-.42-.151a1.036 1.036 0 00-.514.031 2.9 2.9 0 00-.451.119 2.069 2.069 0 00-.571.3 4.751 4.751 0 01.664-.182 2.425 2.425 0 01.514.005' fill='gray'/%3E%3C/svg%3E");
  }

  &:after {
    content: '';
    display: block;
    width: 2.625em;
    height: 1.83333em;
    margin-top: 0.33333em;
    font-size: inherit;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='88'%3E%3Cpath fill='%231e1e1e' d='M119.147 74.617c1.059 0 1.974.818 1.492 2.7l-4.862 1.3c.77-2.311 2.214-4 3.37-4m2.7 7.895h-.963c-1.2 1.444-2.551 2.6-3.851 2.6-1.348 0-2.022-.818-2.022-2.6a10.665 10.665 0 01.241-2.166l7.847-2.6c1.54-3.659-.289-5.247-2.455-5.247-3.707 0-7.943 6.5-7.943 11.7 0 2.455 1.155 3.8 2.985 3.8 2.118-.048 4.333-2.118 6.162-5.488m-1.252-11.746l4.477-4.092V66.1h-2.985l-2.648 4.67zm-16.753 3.947h2.6L102.3 86.074A1.31 1.31 0 00103.453 88c2.937 0 6.451-2.5 7.8-6.066h-.722a9.4 9.4 0 01-5.1 3.418l3.8-10.639h3.9l.481-1.637h-3.8l1.444-4.092h-1.492l-2.7 4.092-3.225.433zm-2.7-.53a1.138 1.138 0 00-.915-1.637c-2.263 0-4.958 2.022-6.066 4.91h.722a5.577 5.577 0 013.177-2.407l-4.332 11.315A1.12 1.12 0 0094.643 88c2.166 0 4.67-2.07 5.777-4.91h-.77a5.577 5.577 0 01-3.177 2.41zm.433-4.525a1.777 1.777 0 001.781-1.781 1.809 1.809 0 00-1.781-1.781 1.777 1.777 0 00-1.781 1.781 1.809 1.809 0 001.781 1.781m-21.038 6.019c.674 0 1.059 1.059 0 3.37l-3.081 6.836c-.578 1.3.048 2.118 1.3 2.118a1.3 1.3 0 001.443-1.011L83.234 79c1.4-1.685 4-3.514 5.1-3.514.818 0 .722.674.193 1.685l-4.621 8.906A1.314 1.314 0 0085.063 88c2.263 0 4.958-2.022 6.066-4.91h-.722a5.577 5.577 0 01-3.177 2.41l4-8.039a6.113 6.113 0 00.77-2.748 1.962 1.962 0 00-2.118-2.166c-1.974 0-3.659 2.214-6.018 4.958v-2.118c0-1.492-.481-2.84-1.829-2.84-1.589 0-3.033 2.455-4.14 4.91h.722c.674-1.155 1.348-1.781 1.926-1.781m-3.129.289c.53-1.829.241-3.466-1.155-3.466-1.781 0-2.311 1.2-4.092 4.958v-2.118c0-1.492-.481-2.84-1.829-2.84-1.589 0-3.033 2.455-4.14 4.91h.722c.77-1.107 1.492-1.781 2.07-1.781.674 0 1.059 1.059 0 3.37l-3.09 6.836c-.578 1.3.048 2.118 1.3 2.118a1.3 1.3 0 001.444-1.011l3.036-7.991c.867-1.059 1.637-1.974 2.6-2.985zM60.7 74.617c1.059 0 1.974.818 1.492 2.7l-4.862 1.3c.77-2.311 2.214-4 3.37-4m2.7 7.895h-.963c-1.2 1.444-2.551 2.6-3.851 2.6-1.348 0-2.022-.818-2.022-2.6a10.665 10.665 0 01.241-2.166l7.847-2.6c1.54-3.659-.289-5.247-2.455-5.247-3.707 0-7.943 6.5-7.943 11.7 0 2.455 1.155 3.8 2.985 3.8 2.118-.048 4.333-2.118 6.162-5.488m-18-7.8H48l-4.14 11.361A1.31 1.31 0 0045.011 88c2.937 0 6.451-2.5 7.8-6.066h-.722a9.4 9.4 0 01-5.1 3.418l3.8-10.639h3.9l.481-1.637h-3.8l1.444-4.092h-1.497l-2.7 4.092-3.217.434v1.2zm-13.768 8.81c0-3.514 3.9-8.232 6.066-8.232a3.969 3.969 0 011.348.193l-2.263 6.066c-1.3 1.589-3.322 3.514-4.284 3.514-.53 0-.867-.481-.867-1.54m11.939-11.65l-1.2-.1-1.348 1.348h-.241c-5.729 0-11.842 7.125-11.842 12.709A1.962 1.962 0 0031.05 88c1.685 0 3.322-2.407 5.151-4.958l-.1.915c-.241 2.6.578 4.044 1.926 4.044 1.589 0 3.033-2.455 4.14-4.91h-.722c-.77 1.107-1.492 1.781-2.07 1.781s-1.011-1.059 0-3.37zm-12.233 4.093c.53-1.829.241-3.466-1.155-3.466-1.781 0-2.311 1.2-4.092 4.958v-2.118c0-1.492-.481-2.84-1.829-2.84-1.589 0-3.033 2.455-4.14 4.91h.722c.77-1.107 1.492-1.781 2.022-1.781.674 0 1.059 1.059 0 3.37l-3.081 6.884c-.578 1.3.048 2.118 1.3 2.118a1.3 1.3 0 001.444-1.011L25.562 79c.867-1.059 1.637-1.974 2.6-2.985h3.177zM11.217 87.422l.289-.867c-3.8-.722-4.284-.722-2.744-4.814l1.4-3.851h3.028c1.877 0 1.877.818 1.637 2.888h1.059l2.5-6.836H17.33c-.915 1.637-1.685 2.888-3.707 2.888h-3.032l2.07-5.632c.722-2.022 1.059-2.407 3.659-2.407h.674c2.648 0 2.937.722 2.937 3.514h1.059l.867-4.67H7.269l-.289.865c3.033.626 3.322.915 1.926 4.814l-3.129 8.38c-1.444 3.9-2.022 4.188-5.488 4.814L0 87.422zM83.764 41.593c1.059 0 1.974.818 1.492 2.648l-4.862 1.3c.818-2.263 2.263-3.947 3.37-3.947m2.7 7.847H85.5c-1.2 1.444-2.551 2.6-3.851 2.6-1.348 0-2.022-.818-2.022-2.6a10.665 10.665 0 01.241-2.166l7.895-2.6c1.54-3.659-.337-5.247-2.455-5.247-3.707 0-7.943 6.5-7.943 11.7 0 2.455 1.155 3.8 2.985 3.8 2.118 0 4.333-2.07 6.114-5.488m-1.252-11.7l4.477-4.092v-.578H86.7l-2.648 4.67zM68.5 41.689h2.6L66.963 53.05a1.31 1.31 0 001.155 1.926c2.937 0 6.451-2.5 7.8-6.066h-.722a9.4 9.4 0 01-5.1 3.418l3.8-10.639h3.9l.481-1.637h-3.8l1.444-4.092h-1.497l-2.7 4.092-3.225.433v1.2zm-2.7-.578c.289-1.059-.385-1.637-.963-1.637-2.263 0-4.958 2.07-6.066 4.91h.729a5.577 5.577 0 013.177-2.407l-4.331 11.314a1.12 1.12 0 00.915 1.637c2.166 0 4.67-2.07 5.777-4.91h-.722a5.577 5.577 0 01-3.177 2.407zm.433-4.477a1.781 1.781 0 000-3.562 1.777 1.777 0 00-1.781 1.781 1.809 1.809 0 001.781 1.781m-13.905 15.79L59.5 33.361l-.241-.289-4.959.578v.578l.963.722c.867.674.578 1.3-.193 3.418L49.584 53a1.314 1.314 0 001.155 1.926c2.263 0 4.67-2.07 5.777-4.91h-.722a6.542 6.542 0 01-3.466 2.407M37.645 50.5c0-3.514 3.9-8.232 6.066-8.232a4.153 4.153 0 011.348.193L42.8 48.525c-1.3 1.589-3.322 3.514-4.236 3.514-.578 0-.915-.481-.915-1.54m11.939-11.65l-1.2-.1-1.355 1.351h-.241c-5.729 0-11.842 7.125-11.842 12.709a1.962 1.962 0 002.118 2.166c1.685 0 3.322-2.407 5.151-4.958l-.1.915c-.241 2.6.578 4.044 1.926 4.044 1.589 0 3.033-2.455 4.14-4.91h-.722c-.77 1.107-1.492 1.781-2.07 1.781s-1.011-1.059 0-3.37zM21.807 57.72c0-1.492 1.444-2.455 3.514-3.274A21.541 21.541 0 0028.4 55.6c2.166.722 2.985 1.011 2.985 1.637 0 1.4-1.974 2.455-5.584 2.455-2.7 0-4-.578-4-1.974m5.921-9.195c-.963 0-1.3-.818-1.3-1.685 0-2.792 1.348-6.258 3.514-6.258.963 0 1.3.818 1.3 1.685-.048 2.84-1.4 6.258-3.514 6.258m6.114 7.8c0-1.829-1.637-2.455-4.284-3.274-2.263-.674-3.274-.867-3.274-1.637a2.387 2.387 0 011.444-1.829 6.606 6.606 0 006.114-6.5 4.538 4.538 0 00-.241-1.444h2.551L36.635 40H32.3a3.769 3.769 0 00-2.118-.578 6.575 6.575 0 00-6.451 6.5 3.331 3.331 0 002.937 3.562c-1.829.867-2.888 1.781-2.888 2.937a1.692 1.692 0 00.818 1.54c-4.236 1.252-5.969 2.792-5.969 4.67 0 1.974 2.6 2.792 5.632 2.792 5.247.048 9.58-2.744 9.58-5.1M14.3 44.818c1.877 0 1.926.818 1.637 2.888h1.059l2.5-6.836h-1.058c-.915 1.637-1.685 2.888-3.707 2.888h-4.14l2.022-5.632c.722-2.022 1.059-2.407 3.659-2.407H18.1c2.648 0 2.937.722 2.937 3.514H22.1l.867-4.67H7.269l-.289.867c3.033.626 3.322.915 1.926 4.814L5.777 48.67c-1.444 3.9-2.022 4.188-5.536 4.814L0 54.4h17.427l3.129-4.958h-1.2c-2.022 1.974-4.044 3.8-7.991 3.8-4.621 0-4.236-.241-2.7-4.525l1.444-3.851H14.3zm2.26-11.746l4.477-3.225v-.578h-2.984L15.4 33.12h1.16zM83.234 8.569c1.059 0 1.974.818 1.492 2.648l-4.862 1.3c.77-2.263 2.214-3.947 3.37-3.947m2.7 7.847h-.963c-1.2 1.444-2.551 2.6-3.851 2.6-1.348 0-2.022-.818-2.022-2.6a10.665 10.665 0 01.241-2.166l7.847-2.6c1.54-3.659-.337-5.247-2.455-5.247-3.707 0-7.943 6.5-7.943 11.7 0 2.455 1.155 3.755 2.985 3.755 2.118.048 4.333-2.022 6.162-5.44m-1.252-11.7L89.155.626V.048h-2.984l-2.648 4.67zM67.926 8.665h2.6l-4.14 11.361a1.31 1.31 0 001.155 1.926c2.937 0 6.451-2.5 7.8-6.066h-.722a9.4 9.4 0 01-5.1 3.418l3.8-10.639h3.9l.481-1.637h-3.8l1.444-4.092h-1.497l-2.7 4.092-3.225.433v1.2zm-1.348 1.252c.53-1.829.241-3.466-1.155-3.466-1.781 0-2.311 1.2-4.092 4.958V9.291c0-1.492-.481-2.84-1.829-2.84-1.589 0-3.033 2.455-4.14 4.91h.722c.77-1.107 1.492-1.781 2.022-1.781.674 0 1.059 1.059 0 3.37l-3.081 6.836c-.578 1.3.048 2.118 1.3 2.118a1.3 1.3 0 001.444-1.011L60.8 12.9c.867-1.059 1.637-1.974 2.6-2.985h3.177zM49.825 8.569c1.059 0 1.974.818 1.492 2.648l-4.862 1.3c.818-2.263 2.214-3.947 3.37-3.947m2.7 7.847h-.963c-1.2 1.444-2.551 2.6-3.851 2.6-1.348 0-2.022-.818-2.022-2.6a10.665 10.665 0 01.241-2.166l7.847-2.6c1.54-3.659-.289-5.247-2.455-5.247-3.707 0-7.943 6.5-7.943 11.7 0 2.455 1.155 3.755 2.985 3.755 2.118.048 4.333-2.022 6.162-5.44m-18.347 3.174c-.77 0-1.877-.722-1.877-1.348a15.464 15.464 0 01.77-2.166l1.252-3.37c1.348-1.637 3.466-3.37 4.621-3.37.722 0 1.252.433 1.252 1.492.048 3.129-2.888 8.761-6.017 8.761m8.761-9.965c0-2.311-.578-3.177-2.214-3.177-2.022 0-3.9 2.166-5.777 4.766L38.993.385l-.24-.337-4.959.578V1.2l.963.722c.867.674.578 1.348-.193 3.418l-4.38 11.46a13.883 13.883 0 00-.818 2.407c0 1.348 1.829 2.648 3.514 2.648 3.755.048 10.061-6.884 10.061-12.228M28.21 8.088c.289-1.059-.385-1.637-.963-1.637-2.263 0-4.958 2.07-6.066 4.91h.719a5.577 5.577 0 013.177-2.407l-4.329 11.313a1.122 1.122 0 00.963 1.637c2.166 0 4.67-2.07 5.777-4.91h-.722a5.577 5.577 0 01-3.177 2.406zm.481-4.525a1.809 1.809 0 001.781-1.781A1.809 1.809 0 0028.691 0a1.777 1.777 0 00-1.781 1.781 1.747 1.747 0 001.781 1.781M17.619 1.444H7.269l-.289.867c3.033.626 3.322.915 1.926 4.814l-3.129 8.521c-1.444 3.9-2.022 4.188-5.488 4.814L0 21.326h15.742l3.418-6.066h-1.2c-1.974 2.166-4.188 4.91-7.7 4.91-2.648 0-3.033-.481-1.54-4.525l3.081-8.473c1.444-3.9 2.022-4.188 5.536-4.814z'/%3E%3C/svg%3E");
  }
`
const Text = styled.svg`
  display: block;
  transform: translateX(0.05em);
`
export default function Marianne() {
  return (
    <Wrapper>
      <Text width='73' height='26' viewBox='0 0 73 26'>
        <path
          d='M0.236 11H1.94V7.604H2.816L5.048 11H7.088L4.448 7.28C5.3 6.872 5.792 6.116 5.792 5.108C5.792 3.548 4.652 2.6 2.804 2.6H0.236V11ZM2.9 4.052C3.62 4.052 4.04 4.448 4.04 5.084C4.04 5.768 3.62 6.152 2.9 6.152H1.94V4.052H2.9ZM11.3373 1.88L12.8973 0.26H11.1453L9.78934 1.88H11.3373ZM8.13334 11H13.0293V9.548H9.83734V7.448H12.5493V5.996H9.83734V4.052H13.0293V2.6H8.13334V11ZM14.9994 11H16.7034V7.604H17.7714C19.6194 7.604 20.7474 6.656 20.7474 5.108C20.7474 3.548 19.6194 2.6 17.7714 2.6H14.9994V11ZM17.8434 4.052C18.5634 4.052 18.9954 4.448 18.9954 5.084C18.9954 5.768 18.5634 6.152 17.8434 6.152H16.7034V4.052H17.8434ZM27.1005 7.856C27.1005 8.984 26.4525 9.644 25.4085 9.644C24.3405 9.644 23.7045 8.984 23.7045 7.856V2.6H22.0005V7.712C22.0005 9.92 23.2965 11.24 25.3965 11.24C27.5085 11.24 28.8045 9.92 28.8045 7.712V2.6H27.1005V7.856ZM30.9113 11H33.4793C35.4113 11 36.5993 10.064 36.5993 8.528C36.5993 7.652 36.1073 6.932 35.2193 6.536C35.7953 6.14 36.1073 5.552 36.1073 4.88C36.1073 3.464 35.0513 2.6 33.2993 2.6H30.9113V11ZM33.3353 4.052C33.9833 4.052 34.3553 4.4 34.3553 4.964C34.3553 5.564 33.9833 5.888 33.3353 5.888H32.6153V4.052H33.3353ZM33.5753 7.352C34.3673 7.352 34.8473 7.736 34.8473 8.432C34.8473 9.128 34.3673 9.548 33.5753 9.548H32.6153V7.352H33.5753ZM38.3282 11H43.2242V9.452H40.0322V2.6H38.3282V11ZM44.7138 11H46.4178V2.6H44.7138V11ZM55.7997 10.784L55.2957 10.304C56.3277 9.488 56.9517 8.204 56.9517 6.8C56.9517 4.4 55.1397 2.36 52.4997 2.36C49.8477 2.36 48.0357 4.4 48.0357 6.8C48.0357 9.2 49.8477 11.24 52.4997 11.24C52.9077 11.24 53.2917 11.192 53.6517 11.096L54.6477 11.984C55.4757 12.704 56.3397 13.088 57.2757 13.088C57.6477 13.088 57.8877 13.04 58.1637 12.932V11.492C57.9837 11.564 57.7437 11.588 57.5637 11.588C57.0237 11.588 56.4477 11.372 55.7997 10.784ZM52.4997 9.644C50.9157 9.644 49.7877 8.408 49.7877 6.8C49.7877 5.192 50.9157 3.956 52.4997 3.956C54.0717 3.956 55.1997 5.192 55.1997 6.8C55.1997 8.408 54.0717 9.644 52.4997 9.644ZM63.5287 7.856C63.5287 8.984 62.8807 9.644 61.8367 9.644C60.7687 9.644 60.1327 8.984 60.1327 7.856V2.6H58.4287V7.712C58.4287 9.92 59.7247 11.24 61.8247 11.24C63.9367 11.24 65.2327 9.92 65.2327 7.712V2.6H63.5287V7.856ZM67.3394 11H72.2354V9.548H69.0434V7.448H71.7554V5.996H69.0434V4.052H72.2354V2.6H67.3394V11ZM0.236 24H1.94V20.448H4.652V18.996H1.94V17.052H5.132V15.6H0.236V24ZM6.62162 24H8.32562V20.604H9.20163L11.4336 24H13.4736L10.8336 20.28C11.6856 19.872 12.1776 19.116 12.1776 18.108C12.1776 16.548 11.0376 15.6 9.18962 15.6H6.62162V24ZM9.28563 17.052C10.0056 17.052 10.4256 17.448 10.4256 18.084C10.4256 18.768 10.0056 19.152 9.28563 19.152H8.32562V17.052H9.28563ZM13.8262 24H15.6382L16.4422 21.816H19.8022L20.6063 24H22.4182L19.2383 15.6H17.0062L13.8262 24ZM16.9702 20.364L18.1223 17.208L19.2742 20.364H16.9702ZM23.7054 24H25.4094V17.964L29.1654 24H31.3494V15.6H29.6454V21.612L25.8894 15.6H23.7054V24ZM37.4327 22.644C35.8487 22.644 34.7207 21.408 34.7207 19.8C34.7207 18.192 35.8487 16.956 37.4327 16.956C38.3927 16.956 39.1487 17.424 39.6287 18.108L40.9727 17.064C40.2047 16.044 38.9567 15.36 37.4327 15.36C34.7807 15.36 32.9687 17.4 32.9687 19.8C32.9687 21.936 34.4087 23.784 36.5927 24.168L35.5367 25.932H37.0487L38.0927 24.192C39.3167 24.036 40.3247 23.412 40.9727 22.524L39.6287 21.492C39.1487 22.176 38.3927 22.644 37.4327 22.644ZM41.3269 24H43.1389L43.9429 21.816H47.3029L48.1069 24H49.9189L46.7389 15.6H44.5069L41.3269 24ZM44.4709 20.364L45.6229 17.208L46.7749 20.364H44.4709ZM51.206 24H52.91V15.6H51.206V24ZM54.4919 22.836C55.2359 23.724 56.1959 24.24 57.6119 24.24C59.1479 24.24 60.3719 23.28 60.3959 21.72C60.3959 18.876 56.5559 19.224 56.5559 17.724C56.5559 17.232 56.9399 16.848 57.5279 16.848C58.1639 16.848 58.7159 17.256 59.2079 17.892L60.4559 16.776C59.7479 15.924 58.7759 15.36 57.5159 15.36C55.9199 15.36 54.8279 16.464 54.8279 17.796C54.8279 20.592 58.6679 20.256 58.6679 21.756C58.6679 22.368 58.2599 22.728 57.5879 22.728C56.9039 22.728 56.2319 22.344 55.7279 21.696L54.4919 22.836ZM62.1726 24H67.0686V22.548H63.8766V20.448H66.5886V18.996H63.8766V17.052H67.0686V15.6H62.1726V24Z'
          fill='black'
        />
      </Text>
    </Wrapper>
  )
}
