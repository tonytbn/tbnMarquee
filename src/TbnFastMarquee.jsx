import { createElement } from "react";
import "./ui/TbnFastMarquee.css";
import Marquee from "react-fast-marquee";

export function TbnFastMarquee({
    dataTypeEnum,
    textString,
    textImage,
    textCard,
    speed,
    delay,
    loop,
    autoFill,
    play,
    pauseOnHover,
    pauseOnClick,
    direction,
    gradient,
    gradientColor,
    gradientWidth
}) {
    if (dataTypeEnum === "Text") {
        if (textString.status === "available") {
            const dataString = textString.value.replace(/\n/g, "");
            const dataObject = JSON.parse(dataString);

            return (
                <div className="demo-marquee">
                    <Marquee
                        autoFill={autoFill}
                        play={play}
                        pauseOnHover={pauseOnHover}
                        pauseOnClick={pauseOnClick}
                        speed={speed}
                        direction={direction}
                        delay={delay}
                        loop={loop}
                        gradient={gradient}
                        gradientColor={gradientColor}
                        gradientWidth={`${gradientWidth}px`}
                    >
                        {dataObject.map((item, index) => {
                            if (index % 2 === 0)
                                return (
                                    <h1
                                        className="welcome-text"
                                        style={{ color: "#444d54", marginTop: 80 }}
                                        key={index}
                                    >
                                        {item.text}
                                    </h1>
                                );
                            else
                                return (
                                    <h1
                                        className="welcome-text"
                                        style={{ color: "#89939c", marginTop: 80 }}
                                        key={index}
                                    >
                                        {item.text}
                                    </h1>
                                );
                        })}
                    </Marquee>
                </div>
            );
        }
    } else if (dataTypeEnum === "Image") {
        if (textImage.status === "available") {
            const dataString = textImage.value.replace(/\n/g, "");
            const dataObject = JSON.parse(dataString);

            return (
                <div className="demo-marquee">
                    <Marquee
                        autoFill={autoFill}
                        play={play}
                        pauseOnHover={pauseOnHover}
                        pauseOnClick={pauseOnClick}
                        speed={speed}
                        direction={direction}
                        delay={delay}
                        loop={loop}
                        gradient={gradient}
                        gradientColor={gradientColor}
                        gradientWidth={`${gradientWidth}px`}
                    >
                        {dataObject.map((item, index) => {
                            return (
                                <img
                                    src={item.src}
                                    height={50}
                                    style={{ margin: "0 40px", marginTop: 80 }}
                                    alt={item.alt}
                                    key={index}
                                />
                            );
                        })}
                    </Marquee>
                </div>
            );
        }
    } else if (dataTypeEnum === "Card") {
        if (textCard.status === "available") {
            const dataString = textCard.value.replace(/\n/g, "");
            const dataObject = JSON.parse(dataString);

            return (
                <div className="demo-marquee">
                    <Marquee
                        autoFill={autoFill}
                        play={play}
                        pauseOnHover={pauseOnHover}
                        pauseOnClick={pauseOnClick}
                        speed={speed}
                        direction={direction}
                        delay={delay}
                        loop={loop}
                        gradient={gradient}
                        gradientColor={gradientColor}
                        gradientWidth={`${gradientWidth}px`}
                    >
                        {dataObject.map((image, index) => (
                            <div
                                className="card"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center"
                                }}
                            >
                                <img
                                    alt={image.alt}
                                    src={image.src}
                                    width={100}
                                    height={100}
                                    style={{ borderRadius: 15 }}
                                />
                                <p
                                    style={{
                                        marginTop: 5,
                                        marginBottom: 0,
                                        width: 100,
                                        height: 100,
                                        display: "block",
                                        marginBlockStart: "1em",
                                        marginBlockEnd: "1em"
                                    }}
                                >
                                    {image.text}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            );
        }
    } else {
        return null;
    }
}
