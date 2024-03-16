import { Zoom } from "@vx/zoom";
import { localPoint } from "@vx/event";
import { RectClipPath } from "@vx/clip-path";

import { yourSVGfile } from "../../assets";
import "./ZoomI.css"; // Import the CSS file

const bg = "#737373";

const initialTransform = {
  scaleX: 1.27,
  scaleY: 1.27,
  translateX: -211.62,
  translateY: 162.59,
  skewX: 0,
  skewY: 0,
};

export type ZoomIProps = {
  width: number;
  height: number;
};

export default function ZoomI({ width, height }: ZoomIProps) {
  return (
    <>
      <Zoom
        width={width}
        height={height}
        scaleXMin={1 / 2}
        scaleXMax={4}
        scaleYMin={1 / 2}
        scaleYMax={4}
        transformMatrix={initialTransform}
      >
        {(zoom) => (
          <div className="relative">
            <svg
              width={width}
              height={height}
              className="zoom-svg" // Add class name for SVG
              style={{ cursor: zoom.isDragging ? "grabbing" : "grab" }}
            >
              <RectClipPath id="zoom-clip" width={width} height={height} />
              <rect width={width} height={height} rx={14} fill={bg} />

              <image
                xlinkHref={yourSVGfile}
                width="700"
                height="700"
                transform={zoom.toString()}
              />

              <rect
                width={width}
                height={height}
                rx={14}
                fill="transparent"
                onTouchStart={zoom.dragStart}
                onTouchMove={zoom.dragMove}
                onTouchEnd={zoom.dragEnd}
                onMouseDown={zoom.dragStart}
                onMouseMove={zoom.dragMove}
                onMouseUp={zoom.dragEnd}
                onMouseLeave={() => {
                  if (zoom.isDragging) zoom.dragEnd();
                }}
                onDoubleClick={(event) => {
                  const point = localPoint(event) || { x: 0, y: 0 };
                  zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
                }}
              />
            </svg>
            <div className="controls">
              <button
                className="btn btn-zoom"
                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
              >
                +
              </button>
              <button
                className="btn btn-zoom btn-bottom"
                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
              >
                -
              </button>
            </div>
          </div>
        )}
      </Zoom>
    </>
  );
}
