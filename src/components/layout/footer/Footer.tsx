import { Box, Image, Grid, Group, Text } from "@mantine/core";
import whitePattern from "../../../assets/images/whitePattern.png";
import phone from "../../../assets/icons/phone.png";
import mail from "../../../assets/icons/mail.png";
import location from "../../../assets/icons/location.png";

const links = {
  brands: [
    { link: "#", label: "فونیکس" },
    { link: "#", label: "چری" },
    { link: "#", label: "جیلی" },
    { link: "#", label: "ام وی ام" },
    { link: "#", label: "لیفان" },
    { link: "#", label: "جک" },
  ],
  links: [
    { link: "#", label: "وبلاگ" },
    { link: "#", label: "خدمات" },
    { link: "#", label: "درباره ما" },
    { link: "#", label: "تماس با ما" },
    { link: "#", label: "سوالات متداول" },
    { link: "#", label: "قوانین و مقررات" },
  ],
};

export default function Footer() {
  return (
    <Box
      hiddenFrom="sm"
      style={{
        borderRadius: "100%/50px 50px 0 0",
        perspective: "1900px",

        transformStyle: "flat",
      }}
      className="bg-black relative w-full h-auto p-[40px] border border-dashed border-[#dadbe700] border-t-[1px] border-b-0 border-l-0 border-r-0"
    >
      <Group
        justify="start"
        display={{ base: "flex", sm: "none" }}
        className="w-full absolute top-0 right-0 h-auto"
      >
        <Image src={whitePattern} alt="pattern" w={300} />
      </Group>{" "}
      <Box
        className="bg-[#ED2425] w-full h-auto rounded-xl p-[30px] my-8"
        style={{
          transform: "rotateY(-28deg)",
          transformOrigin: "50% 50% 0px",
        }}
      >
        <Text fw={700} ff={"dana"} fz={30} c={"white"} span>
          Shi
        </Text>
        <Text fw={400} ff={"dana"} fz={30} c={"white"} span>
          kast
        </Text>

        <Text
          fw={400}
          fz={13}
          ff={"dana"}
          c={"white"}
          opacity={"70%"}
          lh={"24px"}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </Text>
      </Box>
      <Grid className="w-full h-auto pb-6">
        <Grid.Col span={6}>
          <Text ff={"dana"} fw={600} fz={16} c={"white"}>
            برندها
          </Text>
          {links.brands.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-white my-2 font-dana font-[400] text-[13px] opacity-70"
            >
              {item.label}
            </a>
          ))}
        </Grid.Col>
        <Grid.Col span={6} className="h-auto">
          <Text ff={"dana"} fw={600} fz={16} c={"white"}>
            لینک های کاربردی
          </Text>
          {links.links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-white my-2 font-dana font-[400] text-[13px] opacity-70"
            >
              {item.label}
            </a>
          ))}
        </Grid.Col>
      </Grid>
      <Box className="border border-white border-solid w-full h-1 border-b-0 border-x-0 opacity-70"></Box>
      <Box>
        <Text ff={"dana"} fw={600} fz={16} c="white" pt={30} pb={20}>
          راه های ارتباطی
        </Text>
        <Group align="center">
          <Image src={phone} alt="phone" w={20} />
          <Text ff={"dana"} fw={400} fz={13} c={"white"} opacity={"70%"}>
            09398635756 – 09124370723
          </Text>
        </Group>
        <Group align="center" my={20}>
          <Image src={mail} alt="phone" w={20} />
          <Text ff={"dana"} fw={400} fz={13} c={"white"} opacity={"70%"}>
            info@systimecoach.com
          </Text>
        </Group>
        <Group align="center">
          <Image src={location} alt="phone" w={20} />
          <Text ff={"dana"} fw={400} fz={13} c={"white"} opacity={"70%"}>
            جردن ، خیابان دستگردی ، ساختمان 354{" "}
          </Text>
        </Group>
      </Box>
      <Text fw={300} fz={13} ff={"dana"} c={"white"} mt={"40px"} ta={"center"}>
        تمام حقوق این سایت محفوظ است
      </Text>
      <Group
        justify="end"
        display={{ base: "flex", sm: "none" }}
        className="w-full absolute bottom-0 left-0 h-auto"
      >
        <Image
          src={whitePattern}
          alt="pattern"
          w={300}
          className="rotate-180"
        />
      </Group>{" "}
    </Box>
  );
}
