import React, { FC } from "react";

const ProjectTag: FC<any> = ({ tag, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-white  border-green-600"
		: "text-[#ADB7B] border-late-600 hover:border-white";
	return (
		<div>
			<button
				className={`rounded-full border-2 px-6 py-2 text-xl cursor-pointer ${buttonStyles}`}
				onClick={() => onClick(tag)}
			>
				{tag}
			</button>
		</div>
	);
};

export default ProjectTag;
