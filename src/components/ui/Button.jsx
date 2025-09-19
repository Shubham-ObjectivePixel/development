const Button = ({ link, text }) => {
    return (
        <a href={link} className="inline-block rounded-full px-5 py-3 bg-op-green hover:bg-white text-op-darkBlue text-xl font-medium leading-none transition duration-500 transition-discrete">{text}</a>
    )
}

export default Button