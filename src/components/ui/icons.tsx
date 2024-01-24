import { LucideProps } from 'lucide-react'

export const ImagePlaceholder = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 120 120'
      {...props}>
      <path fill='#EFF1F3' d='M0 0H120V120H0z'></path>
      <path
        fill='#687787'
        fillRule='evenodd'
        d='M33.25 38.482a2.625 2.625 0 012.604-2.607h47.292a2.606 2.606 0 012.604 2.607v42.036a2.625 2.625 0 01-2.604 2.607H35.854a2.607 2.607 0 01-2.604-2.607V38.482zm47.25 2.643h-42v36.75l24.392-24.397a2.625 2.625 0 013.712 0L80.5 67.401V41.125zm-36.75 10.5a5.25 5.25 0 1010.5 0 5.25 5.25 0 00-10.5 0z'
        clipRule='evenodd'></path>
    </svg>
  )
}

export const Logo = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 165 25'
      {...props}>
      <path
        fill='#251932'
        d='M4.177 6.375c.39-.635.952-1.148 1.685-1.539.733-.39 1.572-.586 2.516-.586 1.124 0 2.141.285 3.053.855.912.57 1.629 1.384 2.15 2.442.537 1.059.806 2.288.806 3.689 0 1.4-.269 2.638-.806 3.712-.521 1.059-1.238 1.881-2.15 2.467-.912.57-1.93.855-3.053.855-.96 0-1.8-.187-2.516-.561-.716-.391-1.278-.904-1.685-1.54v1.906H0V0h4.177v6.375zm5.96 4.86c0-1.041-.294-1.856-.88-2.442-.57-.602-1.278-.904-2.125-.904-.83 0-1.539.302-2.125.904-.57.603-.855 1.425-.855 2.467s.285 1.865.855 2.467c.586.603 1.295.904 2.125.904.83 0 1.54-.301 2.125-.904.586-.619.88-1.45.88-2.491zM29.426 11.04c0 .391-.025.798-.074 1.222H19.9c.065.846.334 1.498.806 1.954.488.44 1.083.66 1.783.66 1.042 0 1.767-.44 2.174-1.32h4.445a6.022 6.022 0 01-1.245 2.418 6.063 6.063 0 01-2.223 1.686c-.896.407-1.897.61-3.005.61-1.335 0-2.524-.285-3.566-.855a6.08 6.08 0 01-2.442-2.442c-.586-1.059-.88-2.296-.88-3.713 0-1.417.285-2.654.855-3.713a6.08 6.08 0 012.443-2.442c1.042-.57 2.239-.855 3.59-.855 1.32 0 2.492.277 3.518.83a5.883 5.883 0 012.393 2.37c.587 1.026.88 2.223.88 3.59zM25.15 9.941c0-.716-.244-1.286-.732-1.71-.489-.423-1.1-.635-1.832-.635-.7 0-1.295.204-1.784.611-.472.407-.765.985-.879 1.734h5.227zM30.799 11.236c0-1.4.26-2.63.781-3.689.538-1.058 1.262-1.872 2.174-2.442.912-.57 1.93-.855 3.053-.855.961 0 1.8.195 2.516.586.733.391 1.295.904 1.686 1.54v-1.93h4.176v13.629H41.01v-1.93c-.407.635-.977 1.148-1.71 1.54-.717.39-1.555.585-2.516.585a5.6 5.6 0 01-3.029-.855c-.912-.586-1.636-1.408-2.174-2.467-.52-1.074-.781-2.312-.781-3.712zm10.21.024c0-1.042-.294-1.864-.88-2.467a2.778 2.778 0 00-2.1-.904c-.83 0-1.54.302-2.125.904-.57.586-.855 1.4-.855 2.443 0 1.042.285 1.872.855 2.491.586.603 1.294.904 2.125.904.83 0 1.53-.301 2.1-.904.587-.602.88-1.425.88-2.467zM61.666 4.445v13.63h-4.177v-1.856c-.424.602-1.002 1.09-1.734 1.465-.717.358-1.515.537-2.394.537-1.042 0-1.962-.227-2.76-.683-.798-.473-1.417-1.148-1.857-2.028-.44-.88-.66-1.913-.66-3.102V4.445h4.153v7.401c0 .912.236 1.62.709 2.125.472.505 1.107.758 1.905.758.814 0 1.457-.253 1.93-.758.472-.504.708-1.213.708-2.125v-7.4h4.177zM72.262 14.533v3.542h-2.125c-1.514 0-2.695-.366-3.542-1.1-.846-.748-1.27-1.961-1.27-3.639V7.914h-1.66V4.445h1.66V1.124h4.177v3.321h2.736v3.469h-2.736v5.471c0 .407.098.7.293.88.195.179.521.268.977.268h1.49zM88.511 4.445l-8.549 20.103h-4.494l3.126-6.937L73.05 4.445h4.665l3.15 8.525 3.127-8.525h4.52z'></path>
      <path
        fill='#9333EA'
        d='M95.396 18.27c-1.189 0-2.248-.203-3.176-.61-.928-.407-1.66-.961-2.198-1.661a4.464 4.464 0 01-.904-2.394h4.128c.05.472.269.855.66 1.148.39.293.87.44 1.44.44.522 0 .92-.098 1.198-.293.293-.212.44-.48.44-.806 0-.391-.204-.676-.611-.855-.407-.196-1.067-.408-1.979-.635-.977-.228-1.791-.464-2.442-.709a4.386 4.386 0 01-1.686-1.197c-.472-.553-.708-1.294-.708-2.222 0-.782.212-1.49.635-2.125.44-.652 1.075-1.165 1.905-1.54.847-.374 1.848-.561 3.005-.561 1.71 0 3.053.423 4.03 1.27.993.847 1.563 1.97 1.71 3.37h-3.86a1.646 1.646 0 00-.635-1.123c-.342-.277-.798-.415-1.367-.415-.49 0-.864.098-1.124.293a.866.866 0 00-.39.757c0 .391.203.684.61.88.423.195 1.074.39 1.954.586 1.01.26 1.832.521 2.467.781.635.245 1.188.652 1.661 1.222.488.553.741 1.303.757 2.247 0 .798-.228 1.514-.684 2.15-.44.618-1.083 1.107-1.93 1.465-.83.358-1.799.537-2.906.537zM102.641 11.236c0-1.4.26-2.63.781-3.689.538-1.058 1.262-1.872 2.174-2.442.912-.57 1.93-.855 3.053-.855.961 0 1.8.195 2.516.586.733.391 1.295.904 1.686 1.54v-1.93h4.176v13.629h-4.176v-1.93c-.407.635-.977 1.148-1.71 1.54-.717.39-1.555.585-2.516.585a5.602 5.602 0 01-3.029-.855c-.912-.586-1.636-1.408-2.174-2.467-.521-1.074-.781-2.312-.781-3.712zm10.21.024c0-1.042-.294-1.864-.88-2.467a2.778 2.778 0 00-2.1-.904c-.831 0-1.539.302-2.125.904-.57.586-.855 1.4-.855 2.443 0 1.042.285 1.872.855 2.491.586.603 1.294.904 2.125.904.83 0 1.53-.301 2.1-.904.586-.602.88-1.425.88-2.467zM124.226 0v18.075h-4.177V0h4.177zM133.457 18.27c-1.335 0-2.54-.285-3.615-.855a6.362 6.362 0 01-2.516-2.442c-.603-1.059-.904-2.296-.904-3.713 0-1.4.31-2.63.928-3.688a6.277 6.277 0 012.541-2.467c1.074-.57 2.279-.855 3.615-.855 1.335 0 2.54.285 3.615.855a6.281 6.281 0 012.54 2.467c.619 1.058.928 2.288.928 3.688 0 1.4-.318 2.638-.953 3.713a6.275 6.275 0 01-2.564 2.442c-1.075.57-2.28.855-3.615.855zm0-3.615c.798 0 1.473-.293 2.027-.879.57-.586.855-1.425.855-2.516 0-1.09-.277-1.93-.83-2.516a2.608 2.608 0 00-2.003-.879c-.815 0-1.49.293-2.028.88-.537.57-.806 1.408-.806 2.515 0 1.091.261 1.93.782 2.516.537.586 1.205.88 2.003.88zM151.11 4.299c1.595 0 2.865.521 3.81 1.563.961 1.026 1.441 2.443 1.441 4.25v7.963h-4.152v-7.401c0-.912-.236-1.62-.709-2.125-.472-.505-1.107-.757-1.905-.757s-1.433.252-1.905.757-.708 1.213-.708 2.125v7.4h-4.177V4.446h4.177v1.808c.423-.603.993-1.075 1.709-1.417.717-.358 1.523-.537 2.419-.537z'></path>
      <path
        fill='#251932'
        d='M161.592 18.27c-.732 0-1.335-.211-1.807-.635a2.154 2.154 0 01-.684-1.612c0-.651.228-1.197.684-1.636.472-.44 1.075-.66 1.807-.66.717 0 1.303.22 1.759.66.472.44.708.985.708 1.636 0 .635-.236 1.172-.708 1.612-.456.424-1.042.635-1.759.635z'></path>
    </svg>
  )
}

export const Cosmetic = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 74 76'
      {...props}>
      <path
        fill='currentColor'
        d='M1.472 6.83l4.986 57.347v4.948a6.258 6.258 0 006.25 6.25h12.5a6.258 6.258 0 006.25-6.25v-4.948L36.444 6.83l1.227-4.901A1.25 1.25 0 0036.458.375h-35A1.253 1.253 0 00.245 1.929L1.472 6.83zm28.787 42.295h-22.6l-.652-7.5H30.91l-.65 7.5zm-.218 2.5l-.979 11.25H8.855l-.98-11.25h22.166zm-15.458 13.75h8.75v1.25c0 .69-.56 1.25-1.25 1.25h-6.25c-.69 0-1.25-.56-1.25-1.25v-1.25zm14.375 3.75a3.75 3.75 0 01-3.75 3.75h-12.5a3.75 3.75 0 01-3.75-3.75v-3.75h3.125v1.25a3.75 3.75 0 003.75 3.75h6.25a3.75 3.75 0 003.75-3.75v-1.25h3.125v3.75zm2.169-30H6.79L4.072 7.875h29.773l-2.718 31.25zm3.73-36.25l-.625 2.5H3.684l-.625-2.5h31.798zM47.708 75.375h17.5a3.75 3.75 0 003.75-3.75v-47.5a6.25 6.25 0 00-3.75-5.72v-4.28c0-.69-.56-1.25-1.25-1.25h-3.75v-5h12.5a1.25 1.25 0 00.884-2.134l-2.5-2.5a1.256 1.256 0 00-.706-.354l-17.5-2.5a1.36 1.36 0 00-.178-.012h-5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5v5h-3.75c-.69 0-1.25.56-1.25 1.25v4.28a6.25 6.25 0 00-3.75 5.72v47.5a3.75 3.75 0 003.75 3.75zm18.75-45h-20v-2.5h20v2.5zm0 27.5h-20v-25h20v25zm-1.25 15h-17.5c-.69 0-1.25-.56-1.25-1.25v-11.25h20v11.25c0 .69-.56 1.25-1.25 1.25zm-16.25-70h3.662l17 2.429.07.071H48.959v-2.5zm6.25 5h2.5v5h-2.5v-5zm-5 7.5h12.5v2.5h-12.5v-2.5zm0 5h12.5a3.75 3.75 0 013.75 3.75v1.25h-20v-1.25a3.75 3.75 0 013.75-3.75z'></path>
      <path
        fill='currentColor'
        d='M11.458 46.625h15a1.25 1.25 0 100-2.5h-15a1.25 1.25 0 100 2.5zM56.458 67.875h-5v-3.75a1.25 1.25 0 10-2.5 0v5c0 .69.56 1.25 1.25 1.25h6.25a1.25 1.25 0 100-2.5zM62.708 67.875h-1.25a1.25 1.25 0 100 2.5h1.25a1.25 1.25 0 100-2.5zM24.813 60.312a1.25 1.25 0 001.58-.792l1.25-3.75a1.251 1.251 0 10-2.375-.79l-1.25 3.75a1.25 1.25 0 00.795 1.582z'></path>
    </svg>
  )
}

export const WomanHair = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 76 76'
      {...props}>
      <path
        fill='currentColor'
        d='M16.75 21.75a5 5 0 100-10 5 5 0 000 10zm0-7.5a2.5 2.5 0 110 5.002 2.5 2.5 0 010-5.001zM15.5 34.25a5 5 0 10-10 .001 5 5 0 0010 0zm-7.5 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM13 46.75a5 5 0 100 10 5 5 0 000-10zm0 7.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM59.25 21.75a5 5 0 100-10 5 5 0 000 10zm0-7.5a2.5 2.5 0 110 5.002 2.5 2.5 0 010-5.001zM60.5 34.25a5 5 0 1010 0 5 5 0 00-10 0zm7.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'></path>
      <path
        fill='currentColor'
        d='M68.853 43.659a9.986 9.986 0 00-3.03-19.392A9.989 9.989 0 0053 8.955V1.75c0-.69-.56-1.25-1.25-1.25h-27.5c-.69 0-1.25.56-1.25 1.25v7.222a9.982 9.982 0 00-12.823 15.294 9.986 9.986 0 00-3.03 19.392 9.991 9.991 0 1015.692 9.827 21.28 21.28 0 005.162 5.08V65.5H16.75a6.257 6.257 0 00-6.25 6.25v2.5c0 .69.56 1.25 1.25 1.25H64.25c.69 0 1.25-.56 1.25-1.25v-2.5a6.258 6.258 0 00-6.25-6.25H48v-6.934a21.295 21.295 0 005.161-5.08 10 10 0 1015.692-9.827zM73 34.25a7.5 7.5 0 11-7.5-7.5 7.508 7.508 0 017.5 7.5zm-16.323-4.697c-.4-1.26-.896-2.486-1.482-3.67a9.918 9.918 0 003.73.851 10.052 10.052 0 00-2.248 2.82zM59.25 9.251a7.5 7.5 0 11-7.39 8.727A1.238 1.238 0 0053 16.751v-4.125a7.437 7.437 0 016.25-3.375zM50.5 15.5h-6.25V3h6.25v12.5zM41.75 3v12.5h-7.5V3h7.5zM19.322 29.553a10.049 10.049 0 00-2.25-2.819 9.928 9.928 0 003.732-.85 26.144 26.144 0 00-1.482 3.67zM25.5 3.001h6.25v12.5H25.5V3zM9.25 16.75A7.49 7.49 0 0123 12.626v4.125a1.237 1.237 0 001.14 1.227A7.5 7.5 0 019.25 16.75zM3 34.25a7.5 7.5 0 117.5 7.5 7.507 7.507 0 01-7.5-7.5zM13 59.25a7.5 7.5 0 117.5-7.5 7.507 7.507 0 01-7.5 7.5zm3.354-16.908a10.157 10.157 0 001.784-1.65c.09.927.222 1.84.4 2.739a9.896 9.896 0 00-2.184-1.089zm29.726 14.5c-.361.23-.58.628-.58 1.056v8.852c0 .69.56 1.25 1.25 1.25h12.5A3.75 3.75 0 0163 71.75V73H13v-1.25A3.75 3.75 0 0116.75 68h12.5c.69 0 1.25-.56 1.25-1.25v-8.857a1.25 1.25 0 00-.58-1.056C24.11 53.148 20.5 45.931 20.5 38a23.04 23.04 0 017.035-17.028 69.697 69.697 0 00-.785 8.278 1.25 1.25 0 102.5 0 87.606 87.606 0 011.125-10.36A15.9 15.9 0 0132.1 18h.69a87.317 87.317 0 00-1.04 11.25 1.25 1.25 0 102.5 0A87.782 87.782 0 0135.32 18h1.43v11.25a1.25 1.25 0 102.5 0V18h1.43a88.034 88.034 0 011.07 11.25 1.25 1.25 0 102.5 0A87.477 87.477 0 0043.21 18h.689c.593.262 1.171.56 1.729.89.579 3.429.954 6.888 1.122 10.36a1.25 1.25 0 102.5 0 69.802 69.802 0 00-.785-8.278A23.042 23.042 0 0155.5 38c0 7.932-3.61 15.149-9.42 18.837v.005zm11.782-16.15c.527.619 1.125 1.173 1.784 1.65a9.929 9.929 0 00-2.185 1.089c.178-.898.312-1.811.4-2.74zM63 59.25a7.5 7.5 0 110-15 7.5 7.5 0 017.5 7.5 7.507 7.507 0 01-7.5 7.5z'></path>
      <path
        fill='currentColor'
        d='M63 46.75a5 5 0 100 10 5 5 0 000-10zm0 7.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM35.134 35.867a1.251 1.251 0 00-1.767 0 4.751 4.751 0 01-6.987 0 1.25 1.25 0 00-1.763 1.771 8.023 8.023 0 005.407 2.321 7.118 7.118 0 005.11-2.32 1.252 1.252 0 000-1.772zM51.384 35.867a1.251 1.251 0 00-1.767 0 4.751 4.751 0 01-6.987 0 1.25 1.25 0 00-1.763 1.771 8.023 8.023 0 005.407 2.321 7.118 7.118 0 005.11-2.32 1.252 1.252 0 000-1.772zM42.117 47.117c-3.97 3.967-7.806.42-8.235 0a1.25 1.25 0 00-1.765 1.77 8.974 8.974 0 006.05 2.599 7.968 7.968 0 005.717-2.6 1.25 1.25 0 00-1.767-1.767v-.002z'></path>
    </svg>
  )
}

export const Trim = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 76 76'
      {...props}>
      <path
        fill='currentColor'
        d='M38 42.989a3.75 3.75 0 002.652-6.401 3.843 3.843 0 00-5.302 0 3.75 3.75 0 002.65 6.4zm-.884-4.634a1.25 1.25 0 011.768 1.768 1.278 1.278 0 01-1.768 0 1.25 1.25 0 010-1.768zM53 25.489c.331 0 .65-.132.884-.366l11.25-11.25a1.25 1.25 0 00-1.768-1.768l-11.25 11.25A1.252 1.252 0 0053 25.489zM46.75 31.739c.331 0 .65-.132.884-.366l2.5-2.5a1.25 1.25 0 00-1.768-1.768l-2.5 2.5a1.252 1.252 0 00.884 2.134zM14.25 60.489a5 5 0 100 10 5 5 0 000-10zm0 7.5a2.5 2.5 0 11-.001-5 2.5 2.5 0 01.001 5zM61.796 70.489a5 5 0 100-10 5 5 0 000 10zm0-7.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM74.25 44.239a5 5 0 01-5-5 1.25 1.25 0 10-2.5 0 5 5 0 01-5 5 1.25 1.25 0 100 2.5 5 5 0 015 5 1.25 1.25 0 102.5 0 5 5 0 015-5 1.25 1.25 0 100-2.5zM68 47.602a7.557 7.557 0 00-2.112-2.113A7.552 7.552 0 0068 43.377a7.552 7.552 0 002.112 2.112A7.557 7.557 0 0068 47.602zM1.75 31.739a5 5 0 015 5 1.25 1.25 0 102.5 0 5 5 0 015-5 1.25 1.25 0 100-2.5 5 5 0 01-5-5 1.25 1.25 0 10-2.5 0 5 5 0 01-5 5 1.25 1.25 0 100 2.5zM8 28.376a7.552 7.552 0 002.112 2.113A7.557 7.557 0 008 32.602a7.557 7.557 0 00-2.112-2.113A7.552 7.552 0 008 28.376z'></path>
      <path
        fill='currentColor'
        d='M30.75 43.474L18 56.222a9.874 9.874 0 00-3.75-.733c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10a9.833 9.833 0 00-.167-1.782l13.94-13.625 13.94 13.625a9.79 9.79 0 00-.167 1.782c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10a9.864 9.864 0 00-3.75.733L45.312 43.489 68.976 16.27c5.508-6.885.119-15.142.064-15.225a1.248 1.248 0 00-.894-.547 1.264 1.264 0 00-1 .325L38.035 27.864 8.92.823a1.263 1.263 0 00-1-.325c-.364.043-.69.243-.894.547-.055.083-5.442 8.34.098 15.264L30.75 43.474zm-8.912 18.931c-.32.313-.447.773-.336 1.206a7.499 7.499 0 01-11.856 7.806 7.5 7.5 0 018.046-12.585 1.25 1.25 0 001.46-.227l13.235-13.234a8.831 8.831 0 002.528 1.668l1.32 1.291-14.397 14.075zm36.517-3.573a7.41 7.41 0 013.441-.843 7.547 7.547 0 014.672 13.506 7.545 7.545 0 01-11.922-7.881 1.248 1.248 0 00-.336-1.206l-15.16-14.82a8.516 8.516 0 004.582-2.25L56.896 58.6a1.25 1.25 0 001.46.23zM67.672 3.75c1.053 2.238 2.575 6.93-.614 10.919L42.116 43.355a5.821 5.821 0 11-8.264-8.2L67.672 3.75zM8.39 3.739l27.808 25.826-4.082 3.79a8.445 8.445 0 00-2.5 5L9.045 14.708C5.798 10.65 7.326 5.974 8.39 3.737z'></path>
    </svg>
  )
}

export const WhatsAppIcon = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        d='M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7zm-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5 3.9-2.5 8.9-1.2 11.3 2.6 2.4 3.9 1.3 9-2.6 11.4z'></path>
    </svg>
  )
}

export const InstagramIcon = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M7 3a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7zM1 7a6 6 0 016-6h10a6 6 0 016 6v10a6 6 0 01-6 6H7a6 6 0 01-6-6V7z'
        clipRule='evenodd'></path>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12.483 8.99a3 3 0 10-.88 5.934 3 3 0 00.88-5.935zM9.74 7.518a5 5 0 114.606 8.876A5 5 0 019.74 7.519zM16.5 6.5a1 1 0 011-1h.01a1 1 0 110 2h-.01a1 1 0 01-1-1z'
        clipRule='evenodd'></path>
    </svg>
  )
}

export const FacebookIcon = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.757 2.757A6 6 0 0115 1h3a1 1 0 011 1v4a1 1 0 01-1 1h-3v2h3a1 1 0 01.97 1.242l-1 4A1 1 0 0117 15h-2v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7H7a1 1 0 01-1-1v-4a1 1 0 011-1h2V7a6 6 0 011.757-4.243zM15 3a4 4 0 00-4 4v3a1 1 0 01-1 1H8v2h2a1 1 0 011 1v7h2v-7a1 1 0 011-1h2.22l.5-2H14a1 1 0 01-1-1V7a2 2 0 012-2h2V3h-2z'
        clipRule='evenodd'></path>
    </svg>
  )
}

export const YoutubeIcon = (props: LucideProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}>
      <g
        fill='currentColor'
        fillRule='evenodd'
        clipPath='url(#clip0_104_45)'
        clipRule='evenodd'>
        <path d='M12 3v2h-.075a86.587 86.587 0 00-1.016.007c-.668.007-1.575.022-2.534.05-.961.029-1.966.071-2.833.134-.888.065-1.548.147-1.877.233a1.78 1.78 0 00-1.227 1.25A28 28 0 002 11.745v.011a28 28 0 00.434 5.093 1.78 1.78 0 001.227 1.186c.327.087.99.168 1.881.234.867.063 1.872.105 2.833.134a136.737 136.737 0 003.55.057h.37a140.377 140.377 0 003.33-.057c.961-.029 1.966-.071 2.833-.134.888-.065 1.548-.147 1.877-.233a1.78 1.78 0 001.227-1.25c.298-1.66.444-3.345.438-5.032v-.01a28.004 28.004 0 00-.438-5.11 1.78 1.78 0 00-1.217-1.247c-.34-.08-1.002-.154-1.88-.212a75.155 75.155 0 00-2.837-.123 149.278 149.278 0 00-3.333-.051h-.22L12 5V4 3h.08a106.602 106.602 0 011.032.007c.675.006 1.595.02 2.57.046.974.026 2.01.066 2.915.126.88.059 1.714.141 2.24.27a3.78 3.78 0 012.687 2.794c.328 1.817.487 3.661.476 5.508a29.988 29.988 0 01-.49 5.492 3.78 3.78 0 01-2.638 2.72l-.014.003c-.533.143-1.375.233-2.255.297-.907.066-1.944.11-2.918.14a138.654 138.654 0 01-3.605.057h-.16a117.262 117.262 0 01-1.033-.007c-.676-.008-1.596-.022-2.572-.05a70.547 70.547 0 01-2.918-.14c-.88-.064-1.722-.154-2.255-.297l-.006-.001a3.78 3.78 0 01-2.638-2.611.996.996 0 01-.022-.096A30 30 0 010 11.748a30 30 0 01.49-5.532 3.78 3.78 0 012.638-2.72l.014-.003c.533-.143 1.375-.233 2.255-.297.907-.066 1.944-.11 2.918-.14A138.237 138.237 0 0111.92 3H12z'></path>
        <path d='M9.247 7.616a1 1 0 01.997-.005l5.75 3.27a1 1 0 010 1.738l-5.75 3.27a1 1 0 01-1.494-.869V8.48a1 1 0 01.497-.864zm1.503 2.583v3.102l2.727-1.551-2.727-1.55z'></path>
      </g>
      <defs>
        <clipPath id='clip0_104_45'>
          <path fill='#fff' d='M0 0H24V24H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}
