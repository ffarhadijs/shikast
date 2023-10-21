import { Text, TextProps } from "@mantine/core";
import { useEffect, useState } from "react";

type Props = {
  min: number;
  sec: number;
} & TextProps;
export default function Timer({ min, sec, ...props }: Props) {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined
    if (minutes >= 0 && seconds >= 0) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds]);

  return (
    <>
      <Text {...props} w={"max-content"}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </Text>
    </>
  );
}
