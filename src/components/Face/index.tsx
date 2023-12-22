interface IFaceProps {
  mood: "happy" | "sad";
}
const Face = ({ mood }: IFaceProps) => {
  return (
    <div className="wrapper">
      <div className={`face ${mood}`}>
        <div className="eye"></div>
        <div className="eye right"></div>
        <div className="mouth"></div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Face;
