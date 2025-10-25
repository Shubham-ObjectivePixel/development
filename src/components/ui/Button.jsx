const Button = ({ buttonLink, buttonText, setBG }) => {
    return (
        <a href={buttonLink} className={`inline-block rounded-full px-10 py-4 transition duration-700 transition-discrete font-bold leading-none uppercase border border-solid border-acentColor bg-acentColor text-primaryColor hover:scale-[1.05] ${setBG === "Yes" ? "hover:border-primaryColor hover:bg-transparent hover:text-primaryColor" : "hover:border-secondaryColor hover:bg-transparent hover:text-secondaryColor"}`}>{buttonText}</a>
    )
}

export default Button