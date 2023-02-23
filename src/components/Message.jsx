const Message = ({
    message,
    member,
    position, // can be 'left' or 'right'
    textColor = '#FFF',
    positionLeftColor = '#e86d38',
    positionRightColor = '#38b0e8'
}) => {

    const messageBgColor = position === 'left'
        ? positionLeftColor
        : positionRightColor;

    return <div>
        <div>{member}</div>
        <span style={{ color: textColor, backgroundColor: messageBgColor }}>{message}</span>
    </div>
}

export default Message;