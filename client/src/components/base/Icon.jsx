export const Logo = ({ width, height }) => {
  return (
    <svg
      width={width || 64}
      height={height || 64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6924 1.97505C29.0954 0.141618 33.2047 0.141618 36.6077 1.97505L56.3361 12.6041C60.012 14.5845 62.3002 18.3973 62.3002 22.5419V42.658C62.3002 46.8026 60.012 50.6155 56.3361 52.5959L36.6077 63.2249C33.2047 65.0583 29.0954 65.0583 25.6924 63.2249L5.96405 52.5959C2.2882 50.6155 0 46.8026 0 42.658L0 22.5419C0 18.3973 2.2882 14.5845 5.96404 12.6041L25.6924 1.97505Z"
        fill="currentColor"
      />
      <ellipse
        cx="31.1503"
        cy="31.9381"
        rx="11.8649"
        ry="11.7519"
        fill="#FBFAFC"
      />
    </svg>
  )
}

export const AddBtn = ({ width, height }) => {
  return (
    <svg
      width={width || "43"}
      height={height || "28"}
      viewBox="0 0 43 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H39C41.2091 0 43 1.79086 43 4V24C43 26.2091 41.2091 28 39 28H4C1.79086 28 0 26.2091 0 24V4Z"
        fill="#5542F6"
      />
      <path
        d="M26.1667 14.6667H22.1667V18.6667H20.8333V14.6667H16.8333V13.3334H20.8333V9.33337H22.1667V13.3334H26.1667V14.6667Z"
        fill="white"
      />
    </svg>
  )
}

export const Search = ({ width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
        fill="#84818A"
      />
    </svg>
  )
}

export const Notification = ({ width, height }) => {
  return (
    <svg
      width={width || "17"}
      height={height || "21"}
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.91667 20.0139C10.009 20.0139 10.9028 19.1201 10.9028 18.0278H6.93056C6.93056 19.1201 7.81438 20.0139 8.91667 20.0139ZM14.875 14.0555V9.09026C14.875 6.04158 13.2464 3.48943 10.4063 2.81415V2.13888C10.4063 1.31464 9.74091 0.649292 8.91667 0.649292C8.09244 0.649292 7.42709 1.31464 7.42709 2.13888V2.81415C4.57702 3.48943 2.95834 6.03165 2.95834 9.09026V14.0555L0.972229 16.0417V17.0347H16.8611V16.0417L14.875 14.0555Z"
        fill="#84818A"
      />
    </svg>
  )
}

export const Profile = ({ width, height }) => {
  return (
    <svg
      width={width || "56"}
      height={height || "32"}
      viewBox="0 0 56 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#5542F6" />
      <path
        d="M8.84391 21H10.1159V14.574L14.3699 21H15.6419V12.36H14.3699V18.78L10.1159 12.36H8.84391V21ZM17.3166 21H18.5706V17.268H22.8906V21H24.1506V12.36H22.8906V16.086H18.5706V12.36H17.3166V21Z"
        fill="white"
      />
      <path d="M38 13L44 19L50 13H38Z" fill="#84818A" />
    </svg>
  )
}

export const Person = ({ width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM15 9C15 10.6575 13.6575 12 12 12C10.3425 12 9 10.6575 9 9C9 7.3425 10.3425 6 12 6C13.6575 6 15 7.3425 15 9ZM6 16.6667C6 14.8933 9.9975 14 12 14C14.0025 14 18 14.8933 18 16.6667V18H6V16.6667Z"
      />
    </svg>
  )
}

export const Settings = ({ width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM17.25 12C17.25 12.23 17.23 12.46 17.2 12.68L18.68 13.84C18.81 13.95 18.85 14.14 18.76 14.29L17.36 16.71C17.27 16.86 17.09 16.92 16.93 16.86L15.19 16.16C14.83 16.44 14.43 16.67 14.01 16.85L13.75 18.7C13.72 18.87 13.57 19 13.4 19H10.6C10.43 19 10.28 18.87 10.25 18.71L9.99 16.86C9.56 16.68 9.17 16.45 8.81 16.17L7.07 16.87C6.91 16.93 6.73 16.87 6.64 16.72L5.24 14.3C5.15 14.15 5.19 13.96 5.32 13.85L6.8 12.69C6.77 12.46 6.75 12.23 6.75 12C6.75 11.77 6.77 11.54 6.8 11.32L5.32 10.16C5.19 10.05 5.15 9.86 5.24 9.71L6.64 7.29C6.73 7.14 6.91 7.08 7.07 7.14L8.81 7.84C9.17 7.56 9.57 7.33 9.99 7.15L10.25 5.3C10.28 5.13 10.43 5 10.6 5H13.4C13.57 5 13.72 5.13 13.75 5.29L14.01 7.14C14.44 7.32 14.83 7.55 15.19 7.83L16.93 7.13C17.09 7.07 17.27 7.13 17.36 7.28L18.76 9.7C18.85 9.85 18.81 10.04 18.68 10.15L17.2 11.31C17.23 11.54 17.25 11.77 17.25 12Z" />
    </svg>
  )
}

export const ContactSupport = ({ width, height }) => {
  return (
    <svg
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.63913 1.77783C5.25191 1.77783 2.50024 4.5295 2.50024 7.91672C2.50024 11.3039 5.25191 14.0556 8.63913 14.0556H9.00024V16.2223C12.5102 14.5323 14.778 11.1667 14.778 7.91672C14.778 4.5295 12.0264 1.77783 8.63913 1.77783ZM9.36135 12.2501H7.91691V10.8056H9.36135V12.2501ZM9.36135 9.72228H7.91691C7.91691 7.37505 10.0836 7.55561 10.0836 6.11117C10.0836 5.31672 9.43358 4.66672 8.63913 4.66672C7.84469 4.66672 7.19469 5.31672 7.19469 6.11117H5.75024C5.75024 4.51505 7.04302 3.22228 8.63913 3.22228C10.2352 3.22228 11.528 4.51505 11.528 6.11117C11.528 7.91672 9.36135 8.09728 9.36135 9.72228Z"
        fill="#5542F6"
      />
      <path
        d="M11.8892 9.3613V6.47241C11.8892 4.67749 10.4341 3.22241 8.63916 3.22241C6.84423 3.22241 5.38916 4.67749 5.38916 6.47241V9.3613C5.38916 11.1562 6.84423 12.6113 8.63916 12.6113C10.4341 12.6113 11.8892 11.1562 11.8892 9.3613Z"
        fill="#5542F6"
        stroke="#5542F6"
      />
    </svg>
  )
}

export const Cursor = ({ width, height }) => {
  return (
    <svg
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.8629 10.5319L5.6722 3.00024L5.66675 14.1273L8.15225 11.7491L9.61205 15.0769L11.8896 14.0778L10.4298 10.75L13.8629 10.5319Z"
        fill="#5542F6"
      />
    </svg>
  )
}

export const Watch = ({ width, height }) => {
  return (
    <svg
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99981 1.77783C5.02759 1.77783 1.77759 5.02783 1.77759 9.00005C1.77759 12.9723 5.02759 16.2223 8.99981 16.2223C12.972 16.2223 16.222 12.9723 16.222 9.00005C16.222 5.02783 12.972 1.77783 8.99981 1.77783ZM12.0331 12.0334L8.27759 9.72228V5.38894H9.36092V9.1445L12.6109 11.0945L12.0331 12.0334Z"
        fill="#5542F6"
      />
    </svg>
  )
}

export const Pointer = ({ width, height }) => {
  return (
    <svg
      width={width || "17"}
      height={height || "18"}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.37492 4.04175V5.45841H11.0428L2.83325 13.668L3.832 14.6667L12.0416 6.45716V11.1251H13.4583V4.04175H6.37492Z"
        fill="#20C9AC"
      />
    </svg>
  )
}

export const Rectangle = ({ width, height }) => {
  return (
    <svg
      width={width || "7"}
      height={height || "7"}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7" height="6.85176" rx="2" fill="#00A5FF" />
    </svg>
  )
}

export const ThreeDots = ({ width, height }) => {
  return (
    <svg
      width={width || "4"}
      height={height || "16"}
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
        fill="#84818A"
      />
    </svg>
  )
}

export const ArrowDown = ({ width, height }) => {
  return (
    <svg
      width={width || "17"}
      height={height || "18"}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4294 10.3932L11.4558 9.436L8.97683 11.8663L8.97683 3.60461L7.59579 3.60461L7.59579 11.8663L5.11681 9.436L4.14317 10.3932L8.28631 14.4663L12.4294 10.3932Z"
        fill="#84818A"
      />
    </svg>
  )
}
