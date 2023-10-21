import { Box, Image, Grid, Text } from "@mantine/core";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";

export default function Services() {
  return (
    <Box
      style={{
        borderRadius: "100%/60px 60px 0 0",
      }}
      className="inline-block md:hidden w-full h-auto mt-52 border border-dashed border-[#DADBE7] border-t-[1px] border-b-0 border-l-0 border-r-0"
    >
      <Grid className="py-10">
        <Grid.Col span={6} className="text-center">
          <Image src={icon1} w={40} h={40} mx={"auto"} />
          <Text ff={"dana"} fz={13} fw={500}>
            تنوع بالای
          </Text>
          <Text ff={"dana"} fz={13} fw={900}>
            محــصـــــولات
          </Text>
        </Grid.Col>
        <Grid.Col span={6} className="text-center">
          <Image src={icon4} w={40} h={40} mx={"auto"} />
          <Text ff={"dana"} fz={13} fw={500}>
            بیش از ۱K
          </Text>
          <Text ff={"dana"} fz={13} fw={900}>
            مشتـــری راضــــی
          </Text>
        </Grid.Col>
        <Grid.Col span={6} className="text-center">
          <Image src={icon3} w={40} h={40} mx={"auto"} />
          <Text ff={"dana"} fz={13} fw={500}>
            محصولات باکیفیت
          </Text>
          <Text ff={"dana"} fz={13} fw={900}>
            و اورجـــیـــنــــال{" "}
          </Text>
        </Grid.Col>
        <Grid.Col span={6} className="text-center">
          <Image src={icon2} w={40} h={40} mx={"auto"} />
          <Text ff={"dana"} fz={13} fw={500}>
            بالای ۱۰ سال تجربه
          </Text>
          <Text ff={"dana"} fz={13} fw={900}>
            فــــروش محصــــول{" "}
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
