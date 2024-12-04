/*
Description

Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific 
temperature T, find the total pressure P total exerted by the molecules.

Input
Six values :
M1, M2: molar masses of both gases, in g ⋅ mol − 1
m1 and m2 : present mass of both gases, in grams (g)
V: volume of the vessel, in dm3
T: temperature, in °C

Output
One value: 
P total, in units of atm.

Notes

Remember: Temperature is given in Celsius while SI unit is Kelvin (K).
 
0°C=273.15K

The gas constant R = 0.082 dm3 ⋅ atm ⋅ K − 1 ⋅ mol − 1
*/

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const R = 0.082;
  temp += 273.15;

  const n1 = givenMass1 / molarMass1;
  const n2 = givenMass2 / molarMass2;

  const p1 = (n1 * R * temp) / volume;
  const p2 = (n2 * R * temp) / volume;

  return p1 + p2;
};
