/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '117px':'-117px',
        '750px': '750px',
        '535px': '535px',
        '360px': '360px'
      },
      scale:{
        '70':".6"
      },
      fontSize:{
        '2xs':'10px'
      },
      screens:{
        '3xl':'1600px'
      }
    },
  },
  plugins: [
    function({ addUtilities }){
      const newut = {
        '.left-117px':{
          left: '-116px',
        },
        '.height-750':{
          height: '750px',
        },
        '.w-535':{
          width: '535px'
        },
        '.w-360':{
          width: '360px'
        },
        '.scale-70':{
        }
      };

      addUtilities(newut,['responsive','hover'])
    }
  ],
}

