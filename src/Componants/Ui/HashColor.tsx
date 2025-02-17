interface Iprops {
    tempColors: string[];
  }
  
  export default function HashColor({ tempColors }: Iprops) {
    const renderHashColors = tempColors.map((tempColor) => (
      <h4 className="border-b-black" style={{ backgroundColor: tempColor }} key={tempColor}>
        {tempColor}
      </h4>
    ));
  
    return <>{renderHashColors}</>;
  }