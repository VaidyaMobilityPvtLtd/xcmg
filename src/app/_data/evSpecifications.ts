export type SpecRow = { item: string; unit: string; parameter: string };

/** Specification rows sourced from “specifications of ev.xlsx” (per-model sheets). */
export const evSpecificationsByModel: Record<string, SpecRow[]> = {
  XC918EV: [
    { item: "Bucket capacity", unit: "m³", parameter: "1" },
    { item: "Traveling motor power", unit: "kW", parameter: "40" },
    { item: "Hydraulic motor power", unit: "kW", parameter: "18" },
    { item: "Rated load", unit: "kg", parameter: "1800" },
    { item: "Wheelbase", unit: "mm", parameter: "2150" },
    { item: "Overall Dimensions（L*W*H）", unit: "mm", parameter: "5670*2060*2745" },
  ],
  XC938EV: [
    { item: "Bucket capacity", unit: "m³", parameter: "2.1" },
    { item: "Traveling motor power", unit: "kW", parameter: "120" },
    { item: "Hydraulic motor power", unit: "kW", parameter: "36" },
    { item: "Rated load", unit: "kg", parameter: "3500" },
    { item: "Wheelbase", unit: "mm", parameter: "2900" },
    { item: "Overall Dimensions（L*W*H）", unit: "mm", parameter: "7600*2482*3220" },
  ],
  XC968EV: [
    { item: "Bucket capacity", unit: "m³", parameter: "3.5" },
    { item: "Traveling motor power", unit: "kW", parameter: "2*120" },
    { item: "Hydraulic motor power", unit: "kW", parameter: "80" },
    { item: "Rated load", unit: "kg", parameter: "6000" },
    { item: "Wheelbase", unit: "mm", parameter: "3350" },
    { item: "Overall Dimensions（L*W*H）", unit: "mm", parameter: "9130*2996*3565" },
  ],
  XC975EV: [
    { item: "Bucket capacity", unit: "m³", parameter: "4.5" },
    { item: "Traveling motor power", unit: "kW", parameter: "2*120" },
    { item: "Hydraulic motor power", unit: "kW", parameter: "80" },
    { item: "Rated load", unit: "kg", parameter: "7000" },
    { item: "Wheelbase", unit: "mm", parameter: "3450" },
    { item: "Overall Dimensions（L*W*H）", unit: "mm", parameter: "9310*3100*3630" },
  ],
  XE215EV: [
    { item: "Operating weight", unit: "Kg", parameter: "23500" },
    { item: "Rated power", unit: "kW/rpm", parameter: "140" },
    { item: "Engine model", unit: "-", parameter: "/" },
    { item: "Bucket capacity", unit: "m³", parameter: "1" },
    { item: "Emission standard", unit: "-", parameter: "/" },
    { item: "Maximum torque/speedN.m/", unit: "N.m", parameter: "/" },
    { item: "Displacement", unit: "L", parameter: "/" },
    { item: "Travel speed", unit: "km/h", parameter: "5.4/3.3" },
    { item: "Swing speed", unit: "r/min", parameter: "12" },
    { item: "Bucket digging force", unit: "kN", parameter: "149" },
    { item: "Arm digging force", unit: "kN", parameter: "111" },
  ],
  RP905HEV: [
    { item: "Basic Paving Width", unit: "m", parameter: "3.0-6.0" },
    { item: "Max. Paving Width", unit: "m", parameter: "9" },
    { item: "Max. Paving Thickness", unit: "mm", parameter: "300" },
    { item: "Max. Paving Speed", unit: "m/min", parameter: "25" },
    { item: "Max. Working Speed", unit: "km/h", parameter: "4" },
    { item: "Max. Productivity", unit: "t/h", parameter: "1000" },
    { item: "Overall Dimension", unit: "mm", parameter: "7100*4000*3200" },
    { item: "Total Weight", unit: "t", parameter: "24" },
  ],
  XCR40_EV: [
    { item: "Max. load capacityt", unit: "t", parameter: "40" },
    { item: "Telescopic boom", unit: "m", parameter: "35" },
    { item: "Number of axles", unit: "-", parameter: "2" },
    { item: "Max. hoist height", unit: "m", parameter: "42.1" },
    { item: "Max.load moment", unit: "kN.m", parameter: "1396" },
    { item: "Drive engine model", unit: "-", parameter: "\\" },
    { item: "Drive engine power", unit: "kw", parameter: "120" },
    { item: "Drive/Steering", unit: "-", parameter: "4×4×4" },
    { item: "Driving speed", unit: "km/h", parameter: "25" },
    { item: "Dead Weight in Travel State", unit: "kg", parameter: "30710 (31500)" },
    { item: "Dimensions", unit: "mm", parameter: "12883×2980×3480" },
    { item: "Emission standard", unit: "-", parameter: "\\" },
  ],
  XS265HEV: [
    { item: "Operating Weight", unit: "kg", parameter: "26000" },
    { item: "Working Width", unit: "mm", parameter: "2170" },
    { item: "Static Line Load", unit: "N/CM", parameter: "784" },
    { item: "Vibration Frequency", unit: "HZ", parameter: "27/32" },
    { item: "Excitation Force", unit: "KN", parameter: "435/315" },
    { item: "Gradeability", unit: "%", parameter: "40" },
    { item: "Range Power", unit: "-", parameter: "100" },
    { item: "Battery Power", unit: "kWh", parameter: "30.37" },
  ],
};

export function evSpecificationsForModel(model: string): SpecRow[] {
  const key = model.replace(/\s+/g, "").toUpperCase();
  return evSpecificationsByModel[key] ?? [];
}

/** “PRODUCT DESCRIPTION” text from specifications of ev.xlsx (per-model sheets). */
export const evProductDescriptionsByModel: Record<string, string> = {
  XC975EV: `The zero-emission electric loader represents the future of construction machinery and is an ideal option for environmentally sustainable operations. Developed using an international R&D platform and global resources, the XC975-EV is a next-generation loader from XCMG.

It is built with advanced global technology and supported by independent intellectual property, offering eco-friendly performance, strong power output, durability, and reliability. The machine also ensures high efficiency, energy savings, and simplified maintenance. Overall, it serves as a sustainable and efficient solution for a wide range of applications, including construction sites, mining operations, ports, and road work.`,
  XC918EV: `The zero-emission electric loader represents a forward-looking solution in construction machinery and is an excellent choice for environmentally responsible operations. Developed through an international research and development platform and supported by global resources, the XC918-EV is a new-generation loader from XCMG.

Designed with advanced global technology and backed by independent intellectual property, it delivers eco-friendly performance along with strong power, durability, and dependable operation. In addition, the machine offers high efficiency, reduced energy consumption, and easy maintenance, making it a practical and sustainable option for a variety of applications such as construction projects, mining, ports, and road works.`,
  XC968EV: `Zero-emission electric loaders are considered the future of construction machinery and are an ideal option for protecting the environment. Built on a global research and development platform and supported by integrated international resources, the XC968-EV pure electric loader is a new-generation machine developed by XCMG using advanced global technology and its own independent intellectual property.

This loader is designed to deliver environmentally friendly operation along with strong performance, durability, and reliability. It also offers high efficiency, energy savings, and convenient maintenance. As a result, it provides a green, cost-effective, and efficient solution for a wide range of applications such as construction sites, mining areas, ports, and road projects.`,
  XC938EV: `Zero-emission electric loaders are shaping the future of construction machinery and serve as an excellent choice for environmentally friendly operations. The XC938-EV pure electric loader, developed by XCMG, is built on a global R&D platform that combines international resources and advanced technologies. It represents a new generation of loaders with its own independent intellectual property.
This model delivers strong performance along with durability and reliability, while also focusing on environmental sustainability. It ensures high operational efficiency, reduced energy consumption, and easy maintenance. Therefore, it stands out as a green, energy-efficient, and versatile solution suitable for various applications such as construction projects, mining, ports, and road work.`,
  XE215EV: `XE215EV is equipped with high-safety lithium iron phosphate battery, IP67 protection for key electrical components, safe and reliable. Permanent magnet synchronous motor, large displacement, large diameter main valve, higher overall operating efficiency, high stability and low cost. Multiple attachment control modes "one machine with multiple functions", automatic lubrication. 10-inch touch screen instrument, integrated menu display, high-definition camera, easy operation and comfortable driving. Strengthened turntable main structure, good performance; new optimized boom and dipper rod, stress reduction of 25%. It can be widely used in urban construction, mine construction, cargo yard loading and unloading, metal smelting cleaning, tunnel construction and other projects.`,
  RP905HEV: `The RP905HEV paver is designed with a hybrid power system that combines a 150 kW range extender and a 49.55 kWh battery, ensuring sufficient power for demanding construction tasks. It incorporates a domestically developed control system along with an advanced control platform for efficient operation.

The machine features a 10.1-inch LCD display, ultrasonic material level sensing, and an electronic automatic leveling system to enhance paving accuracy. It is equipped with a single-vibration eccentric system and a DC electric heating hydraulic telescopic screed. The screed includes a four-cylinder support suspension structure, along with hydraulic height and crown (arch) adjustment for better paving performance.

Additionally, the left and right drives operate independently, and the paver uses constant-speed automatic control technology, allowing for smoother and more consistent operation during construction.`,
  XCR40_EV: `The XCR40-EV is designed for use in fixed-site operations such as construction areas, ports, docks, and industrial or mining facilities. It is also well-suited for environments where strict limits on emissions and noise are required, including factories, hospitals, schools, and laboratories.`,
  XS265HEV: `The XS265HEV vibratory roller is a heavy-duty, self-propelled machine featuring a range-extender hybrid drive system. It is designed for compacting base and sub-base layers of various materials, as well as for filling operations in construction projects.

This model provides an efficient and reliable compaction solution for demanding infrastructure works such as high-grade highways, airports, ports, dams, and industrial construction sites. It is also capable of operating in challenging environments, with suitability for altitudes up to 4,000 meters and ambient temperatures ranging from -15°C to +45°C.`,
};
