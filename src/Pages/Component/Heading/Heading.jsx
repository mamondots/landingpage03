

const Heading = ({subtitle,title}) => {
    return (
        <div className="text-center">
            <p className="font-medium text-[#525FE1] tracking-wider">{subtitle}</p>
            <h2 className="py-2 lg:text-4xl font-bold md:text-3xl text-2xl">{title}</h2>
        </div>
    );
};

export default Heading;