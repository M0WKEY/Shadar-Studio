type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `
    p-5 absolute z-30 flex
    h-[100%] w-[100%] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90
  `;

  const imageStyles = {
    width: "400px",
    height: "400px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "10px",
  };

  return (
    <li className="relative mx-2 p-2" style={{ listStyle: "none" }}>
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        {description && <p className="mt-5">{description}</p>}
      </div>
      <img alt={name} src={image} style={imageStyles} />
    </li>
  );
};

export default Class;
