import "@mantine/core/styles.css";
import {
  Box,
  Button,
  DirectionProvider,
  Image,
  Grid,
  Group,
  MantineProvider,
  NumberInput,
  Text,
  Title,
} from "@mantine/core";
import { GoArrowLeft } from "react-icons/go";
import { hasLength, useForm } from "@mantine/form";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import Timer from "./components/timer/Timer";
import pattern from "./assets/images/patten.png";
import Services from "./components/services/Services";
import Footer from "./components/layout/footer/Footer";
import group from "./assets/images/group.png";
function App() {
  const [verification, setVerification] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      phoneNumber: "",
    },
    validate: {
      phoneNumber: hasLength(
        { max: 11, min: 10 },
        "شماره تماس را به صورت صحیح وارد کنید."
      ),
    },
  });

  const submitHandler = ({ phoneNumber }: { phoneNumber: string }) => {
    setVerification(true);
  };

  const changeHandler = (value: string) => {
    if (value.length === 4) setComplete(true);
    else setComplete(false);
  };

  return (
    <DirectionProvider>
      <MantineProvider>
        <Grid>
          <Grid.Col
            order={{ base: 1, sm: 0 }}
            span={{ base: 12, sm: 5.5 }}
            bg={{ base: "white", sm: "#F7F7F7" }}
            mih={"100vh"}
            className="relative"
          >
            <Group
              justify="start"
              display={{ base: "none", sm: "flex" }}
              className="w-full absolute top-0 right-0"
            >
              <Image src={pattern} alt="pattern" w={350} />
            </Group>
            <Text
              fw={400}
              fz={40}
              display={{ base: "none", sm: "inline-block" }}
              className="absolute top-10 right-40 font-dana inline-block"
            >
              <Text fw={700} fz={40} span>
                Shi
              </Text>
              kast
            </Text>

            <Group
              justify="end"
              display={{ base: "none", sm: "flex" }}
              className="w-full absolute bottom-0 left-0"
            >
              <Image
                src={pattern}
                alt="pattern"
                w={350}
                className="rotate-180"
              />
            </Group>
            <Box className="flex justify-center items-center w-[90%] sm:w-full h-full -top-[730px] sm:-top-[690px] md:top-0 absolute md:relative">
              <Image src={group} alt="group" w={500} />
            </Box>
            <Services />
            <Footer />
          </Grid.Col>

          <Grid.Col
            span={{ base: 12, sm: 6.5 }}
            bg={{ sm: "white", base: "#F7F7F7" }}
            h={"100vh"}
            p={"40px"}
            className="relative"
          >
            <Group
              justify="start"
              display={{ base: "flex", sm: "none" }}
              className="w-full absolute top-0 left-0"
            >
              <Image src={pattern} alt="pattern" w={350} />
            </Group>
            <Group
              justify="start"
              gap={0}
              align="baseline"
              className="absolute top-10 right-10"
            >
              <Text
                fw={700}
                fz={{ base: 30, sm: 40 }}
                display={{ sm: "none" }}
                span
                className="font-dana "
              >
                kast
              </Text>
              <Text
                fw={400}
                fz={{ base: 30, sm: 40 }}
                span
                display={{ sm: "none" }}
                className="font-dana "
              >
                Shi
              </Text>
            </Group>
            <Group justify="left" className="absolute top-10 left-10">
              <Button
                variant="outline"
                rightSection={<GoArrowLeft color="#141414" />}
                radius="10px"
                classNames={{
                  label:
                    "font-[400] text-[13px] md:text-[16px] text-[#141414] font-dana",
                }}
                style={{
                  border: "1px solid #DADBE7",
                  backgroundColor: "white",
                }}
                h={{ base: 44, sm: 56 }}
              >
                برگشت به خانه
              </Button>
            </Group>
            <Box className="h-full w-full flex flex-col justify-start md:justify-center mt-16 md:mt-0 items-start ">
              <Title
                fw={900}
                ff={"peyda"}
                fz={{ base: 22, sm: 32 }}
                c={"#141414"}
              >
                ورود به شیکاست
              </Title>
              <Text
                fw={400}
                fz={{ base: 13, sm: 16 }}
                c={"#3D3D3D"}
                ff={"peyda"}
                pb={40}
              >
                به شیکاست خوش آمدید
              </Text>
              <Box
                className="w-full md:max-w-[450px] bg-white rounded-[15px] p-4 md:p-0 z-50"
                component="form"
                onSubmit={form.onSubmit(submitHandler)}
              >
                {verification ? (
                  <Box
                    style={{ direction: "ltr" }}
                    className="flex flex-col items-end"
                  >
                    <Text
                      ff={"peyda"}
                      fw={400}
                      fz={{ base: 13, sm: 16 }}
                      c={"#3D3D3D"}
                      mb={"10px"}
                      ta={"right"}
                    >
                      کد تایید برای شماره{" "}
                      <Text
                        ff={"peyda"}
                        fw={500}
                        fz={{ base: 13, sm: 16 }}
                        c={"#3D3D3D"}
                        className="inline-block"
                        span
                      >
                        {form.values.phoneNumber}
                      </Text>{" "}
                      ارسال شده است
                    </Text>
                    <VerificationInput
                      validChars="0-9"
                      inputProps={{ inputMode: "numeric" }}
                      length={4}
                      classNames={{
                        container: "w-full gap-[15px] ",
                        character:
                          "md:w-[100px] w-[62px] md:h-[70px] h-[48px] rounded-[10px] bg-[#F7F7F7] border-0 text-[#7A7A7A] text-center text-[15px] md:text-[20px] font-dana font-[400] flex justify-center items-center",
                      }}
                      onChange={changeHandler}
                    />
                  </Box>
                ) : (
                  <>
                    <Text
                      fw={400}
                      ff={"peyda"}
                      fz={{ base: 13, sm: 16 }}
                      c={"#3D3D3D"}
                      span
                    >
                      برای ورود و عضویت در سایت{" "}
                      <Text inherit fw={500} span>
                        شماره موبایل
                      </Text>{" "}
                      خود را وارد کنید
                    </Text>
                    <NumberInput
                      variant="filled"
                      placeholder="شماره موبایل"
                      radius={"10px"}
                      hideControls
                      classNames={{
                        error: "font-peyda font-[500] text-[12px]",
                        input:
                          "!h-[48px] md:!h-[64px] !text-[13px] md:!text-[16px] !text-[#7A7A7A] !font-[400] !font-dana",
                      }}
                      {...form.getInputProps("phoneNumber")}
                      maw="400px"
                      pt={6}
                    />
                  </>
                )}
                <Group
                  justify="space-between"
                  align="center"
                  w={"100%"}
                  mt={{ base: 20, sm: verification ? 40 : 20 }}
                >
                  <Button
                    color="#ED2425"
                    classNames={{
                      label:
                        "font-[400] text-[13px] md:text-[16px] text-[#fff] font-dana",
                    }}
                    type="submit"
                    radius={"10px"}
                    disabled={verification ? !complete : false}
                    h={{ base: 44, sm: 56 }}
                  >
                    {verification ? "تایید حساب" : " ورود و عضویت"}
                  </Button>
                  {verification && (
                    <Box w="auto">
                      <Text
                        c={"#3D3D3D"}
                        ff={"peyda"}
                        fz={{ base: 13, sm: 16 }}
                        fw={400}
                        display={"inline-block"}
                        pl={"10px"}
                        w={"max-content"}
                      >
                        ارسال مجدد کد تا
                      </Text>
                      <Timer
                        min={1}
                        sec={30}
                        c="red"
                        ff="peyda"
                        fz={{ base: 13, sm: 16 }}
                        fw={500}
                        span
                      />
                    </Box>
                  )}
                </Group>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </MantineProvider>
    </DirectionProvider>
  );
}

export default App;
