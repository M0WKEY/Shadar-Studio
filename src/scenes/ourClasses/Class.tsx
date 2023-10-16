import React from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

type ImageStyles = {
  width: string;
  height: string;
  objectFit: ObjectFit;
  objectPosition: string;
  borderRadius: string;
};

const Class: React.FC<Props> = ({ name, description, image }) => {
  const boxStyles = {
    border: "2px solid #000", // Add border styling
    borderRadius: "10px",     // Add rounded corners
    padding: "20px",         // Add padding
    textAlign: "center",     // Center text
  };

  const imageStyles: ImageStyles = {
    width: "400px",
    height: "400px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "10px", // Apply the same border radius to the image
  };

  return (
    <li className="relative mx-2 p-2 text-center" style={{ listStyle: "none" }}>
      <div style={boxStyles}>
        <p className="text-2xl">{name}</p>

        {description && (
          <p
            className="mt-5 text-center"
            dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br />") }}
          />
        )}
      </div>
    </li>
  );
};

export default Class;
