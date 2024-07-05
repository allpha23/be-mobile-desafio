const SVGEllipse = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <circle cx="4.5" cy="4.5" r="4" fill="white"/>
    </svg>
  );
}

export default SVGEllipse;
