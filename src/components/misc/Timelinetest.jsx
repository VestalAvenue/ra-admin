import React from "react";

const events = [
    {
        time: "9:00AM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        count: "10+",
        title: "frontend development",
        bg: "#d7f5fa",
        highlight: "#6adcf6",
        color: "#fff",
        titleColor: "#2b7a8b",
    },
    {
        time: "11:00AM",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        count: "10+",
        title: "Principles of Economics",
        bg: "#f6fae3",
        highlight: "#e3f6a1",
        color: "#7a8b2b",
        titleColor: "#7a8b2b",
    },
    {
        time: "1:30PM",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        count: "25+",
        title: "Organic Chemistry",
        bg: "#f3f3f3",
        highlight: "#d3d3d3",
        color: "#7a6b8b",
        titleColor: "#7a6b8b",
    },
];

export default function Timelinetest() {
    return (
        <div style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "16px",
            width: "400px",
            fontFamily: "sans-serif",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}>
            <div style={{position: "relative"}}>
                {events.map((event, idx) => (
                    <div key={idx} style={{display: "flex", alignItems: "flex-start", marginBottom: "36px"}}>
                        {/* Time and dot */}
                        <div style={{width: "90px", textAlign: "right", paddingRight: "16px", position: "relative"}}>
                            <div style={{fontSize: "16px", color: "#555", fontWeight: 500, marginBottom: "4px"}}>{event.time}</div>
                            <div style={{
                                width: "12px",
                                height: "12px",
                                background: "#3ec6f2",
                                borderRadius: "50%",
                                position: "absolute",
                                left: "72px",
                                top: "7px",
                                border: "2px solid #fff",
                                boxShadow: "0 0 0 2px #e5e5e5"
                            }} />
                            {/* Dotted line */}
                            {idx < events.length - 1 && (
                                <div style={{
                                    position: "absolute",
                                    left: "77px",
                                    top: "22px",
                                    width: "2px",
                                    height: "56px",
                                    borderLeft: "2px dotted #e5e5e5"
                                }} />
                            )}
                        </div>
                        {/* Card */}
                        <div style={{
                            background: event.bg,
                            borderRadius: "18px",
                            padding: "16px 24px",
                            minWidth: "260px",
                            boxShadow: "0 0 0 1px #e5e5e5",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            border: "1px dashed #e5e5e5"
                        }}>
                            {/* Avatar and count */}
                            <div style={{display: "flex", alignItems: "center", marginRight: "16px"}}>
                                <img src={event.avatar} alt="" style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "2px solid #fff",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
                                }} />
                                <span style={{
                                    marginLeft: "-12px",
                                    background: "#888",
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    borderRadius: "12px",
                                    padding: "3px 10px",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
                                }}>{event.count}</span>
                            </div>
                            {/* Title */}
                            <span style={{
                                background: event.highlight,
                                color: event.titleColor,
                                fontWeight: 700,
                                fontSize: "18px",
                                borderRadius: "6px",
                                padding: "6px 14px"
                            }}>{event.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}