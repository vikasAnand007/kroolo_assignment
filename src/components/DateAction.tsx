import React, { useRef } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const DateAction: React.FC = () => {
  const dateRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    dateRef.current?.click(); // Trigger the native click event
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <CalendarMonthOutlinedIcon
        onClick={handleClick}
        sx={{
          width: "20px",
          color: "#a2a4ad",
        //   cursor: "pointer",
        }}
      />
      <input
        type="date"
        ref={dateRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0, // Fully transparent
          width: "100%",
          height: "100%",
        //   cursor: "pointer",
        }}
      />
    </div>
  );
};

export default DateAction;
