/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */

const SectionHeader = ({ title,titleHighlighterStart,titleHighlighterEnd, description }) => {
 



  return (
    <div className="max-w-[1240px] rounded mx-auto p-4">
      <h1 className="font-bold text-3xl text-center mb-2">
        <span className="text-[#b13939]">{titleHighlighterStart}</span> <span>{title}</span> <span className="text-[#b9083dcd]">{titleHighlighterEnd}</span>
      </h1>
      <p className="text-gray-700 text-center text-base">{description}</p>
    </div>
  );
};

export default SectionHeader;

{
	/* <SectionHeader
          title=" International School & Collage"
          titleHighlighterStart={'ZenTexx'}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
             but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
             1960s with the release of Letraset sheets containing Lorem"
        /> */
}
