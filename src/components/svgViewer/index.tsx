import React, { useRef, useState } from "react";
import yourSvgFile from "/src/assets/yourSvgFile.svg";
import "./SvgViewer.css"; // Import the CSS file for styling

const SvgViewer = () => {
  const issues = [{}];

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [circleCount, setCircleCount] = useState(1); // State to keep track of circle count
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
  const [zoomLevel, setZoomLevel] = useState(1); // State to manage zoom level

  const handleCircleClick = (circleNumber: number) => {
    return () => {
      console.log(`Circle ${circleNumber} clicked`);
      // Show the pop-up window when a circle is clicked
      setShowPopup(true);
    };
  };

  const handleSvgClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    const svg = svgRef.current;
    if (!svg) return;

    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const svgPoint = point.matrixTransform(svg.getScreenCTM()?.inverse());
    if (!svgPoint) return;

    if (event.target instanceof SVGCircleElement) {
      // If the clicked element is a circle, log the circle number
      const circleNumber = parseInt(
        event.target.getAttribute("data-circle-number") || ""
      );
    } else {
      // If the clicked element is not a circle, add a new circle
      const circleNumber = circleCount;
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", String(svgPoint.x));
      circle.setAttribute("cy", String(svgPoint.y));
      circle.setAttribute("r", "1");
      circle.setAttribute("fill", "red");
      circle.setAttribute("data-circle-number", String(circleNumber)); // Set circle number as attribute

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", String(svgPoint.x));
      text.setAttribute("y", String(svgPoint.y));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dy", "0.3em");
      text.setAttribute("font-size", "2px");
      text.textContent = String(circleNumber);

      // Add click event listener to the circle
      circle.addEventListener("click", handleCircleClick(circleNumber));

      svg.appendChild(circle);
      svg.appendChild(text);

      setCircleCount(circleCount + 1);

      // Show the pop-up window after adding the circle
      //setShowPopup(true);
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prevZoom) => Math.max(0.1, prevZoom + delta));
  };

  return (
    <>
      <div className="svg-container">
        <h1>SVG Display</h1>
        <div
          className="svg-content"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            ref={svgRef}
            //onClick={handleSvgClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="400"
            height="400"
          >
            <image xlinkHref={yourSvgFile} width="100" height="100" />
          </svg>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <p>Circle added!</p>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>

      <div className="zoom-buttons">
        <button onClick={() => handleZoom(0.5)}>Zoom In</button>
        <button onClick={() => handleZoom(-0.1)}>Zoom Out</button>
      </div>
    </>
  );
};

export default SvgViewer;
