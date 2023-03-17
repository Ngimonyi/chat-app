const Message = ({
  message,
  member,
  position,
  textColor = "#FFF",
  positionLeftColor = "#e86d38",
  positionRightColor = "#38b0e8",
}) => {
  const messageBgColor =
    position === "left" ? positionLeftColor : positionRightColor;

  let classNames = "msg";
  if (position === "right") {
    classNames += " msg--them";
  } else {
    classNames += " msg--me";
  }

  return (
    <div className={classNames}>
      <div className="">
        <div style={{ display: "flex" }}>
          <div className="avatar">
            <div className="avatar__image">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height="100%"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                width="100%"
              >
                <path d="M12,3.5c2.347,0,4.25,1.903,4.25,4.25S14.347,12,12,12s-4.25-1.903-4.25-4.25S9.653,3.5,12,3.5z M5,20.5 c0-3.866,3.134-7,7-7s7,3.134,7,7H5z"></path>
              </svg>
            </div>
          </div>
          <div className="message-member">{member}</div>
        </div>
        <span
          className="message-text"
          style={{ color: textColor, backgroundColor: messageBgColor }}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default Message;
