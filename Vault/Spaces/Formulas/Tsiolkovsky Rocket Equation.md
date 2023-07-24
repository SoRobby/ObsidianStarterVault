---
date_created: 2023-07-14
date_modified: 2023-07-18
document_type: formula
tags: formula 
---
[[All Formulas|All Formulas]] / **[[Spaces/Formulas/Tsiolkovsky Rocket Equation|Tsiolkovsky Rocket Equation]]**
# Tsiolkovsky Rocket Equation

> [!summary] Description
> **Description**:: The rocket equation, also known as Tsiolkovsky's rocket equation, describes how the speed of a rocket changes when it expels part of its mass (propellant) to generate thrust. It factors in the initial and final mass of the rocket and the effective exhaust velocity of the propellant, essentially stating that a rocket's change in velocity is equal to the exhaust velocity times the natural logarithm of the initial mass divided by the final mass.

## Formula

$$\Delta{V} = I_{sp}*g_{0}*ln\frac{m_{i}}{m_{f}} \tag{ 1 }$$

Where,
$\Delta V$ = Change in velocity. Units: m/s
$I_{sp}$ = Specific impulse. Units: sec
$g_{0}$ = Earth surface gravity of $9.80665 \space m/s^2$.
$m_{i}$ = Initial mass or wet mass of the spacecraft before the maneuver. Units: kg
$m_{f}$ = Final mass or dry mass of the spacecraft after the maneuver. Units: kg

**Note:** The formula above assumes a constant specific impulse, in reality the specific impulse will change slightly throughout the burn.

## Example
Assuming:
$I_{sp} = 180 \space sec$
$g_{0} = 9.81 \space m/s^2$
$m_{i} = 105 \space m/s$
$m_{f} = 75 \space kg$

$$\Delta{V} = (180 \space sec)*(9.81 \space m/s^2)*ln\frac{105 \space kg}{75 \space kg} \tag{ 2.1 }$$

$$\Delta{V} = 593.94 \space m/s \tag{ 2.2 }$$

## Related
- Specific impulse
- Propellant mass for maneuver

## Sources
1. https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation


---
[[All Formulas|All Formulas]] / **[[Spaces/Formulas/Tsiolkovsky Rocket Equation|Tsiolkovsky Rocket Equation]]**