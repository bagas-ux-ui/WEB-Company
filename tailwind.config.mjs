/** @type {import(`tailwindcss`).Config} */

export default{
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme:{
        screen: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        container: {
            center: true,
            padding: "15px"
        },
        fontFamily: {
            primary: "var(--font-dmSans)",
            secondary: "var(--font-barlow)",
        },
        extend: {
            colors: {
                primary: "#121315",
                secondary:"#666666",
                accent: "#ffca3b",
                border: "#d7d7d7",
            },
            boxShadow:{
                custom: "0px 4px 54px 10px rgba(18,19,21,0.06)",
            },
            backgroundImage: {
                hero: "url(`/public/assets/assets/img/hero/bg.jpg`)",
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}
