# AI University · Calculus II

From integration techniques to infinite approximation

English edition 1 · source v0.1.2 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

A complete next course in single-variable calculus: integration methods and errors, improper integrals, sequences and series, Taylor expansions, parametric and polar curves, and introductory first-order differential equations.

Scope: Eight complete chapters, including geometric and physical integral models, introductory first-order equations and numerical methods. Multivariable calculus, higher-order equations, complex series and full real analysis belong to separate volumes.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Integration techniques

- 1.1 Integration by parts
- 1.2 Trigonometric integrals
- 1.3 Trigonometric substitution
- 1.4 Partial fractions
- 1.5 Choosing an integration method

### Approximating, extending and modeling integrals

- 2.1 Numerical integration and error
- 2.2 Integrals over infinite intervals
- 2.3 Unbounded integrands on finite intervals
- 2.4 Surface area of revolution
- 2.5 Mass, moments and center of mass
- 2.6 Pressure and work by layers

### From sequences to infinite sums

- 3.1 Sequences and limits
- 3.2 Monotone bounded sequences and recurrences
- 3.3 Infinite series and partial sums
- 3.4 Geometric and telescoping series

### Series convergence and error

- 4.1 The integral test and tail bounds
- 4.2 Comparison and limit comparison
- 4.3 Ratio and root tests
- 4.4 Alternating series and error

### From convergence to function representation

- 5.1 Absolute and conditional convergence
- 5.2 Power series and convergence intervals
- 5.3 Differentiating and integrating power series
- 5.4 Taylor polynomials

### Taylor expansions in calculation

- 6.1 Taylor remainders and error bounds
- 6.2 Standard Taylor series
- 6.3 Using series for integrals and limits
- 6.4 The generalized binomial series

### Parametric curves and polar coordinates

- 7.1 Parametric equations and motion
- 7.2 Tangents and arc length of parametric curves
- 7.3 Polar coordinates and curves
- 7.4 Polar area and arc length

### First-order differential equations

- 8.1 Differential equations and direction fields
- 8.2 Separable equations
- 8.3 First-order linear equations
- 8.4 Euler's method and the logistic model

# Chapter 1 · Integration techniques

Simplify first, then choose substitution, parts, identities or partial fractions. Check results by differentiation or recombining fractions.

Goals:
- Choose an integration method
- Handle radicals and rational expressions
- Check results by differentiation

## 1.1 Integration by parts

*Replace a difficult product with an easier integral*

### The idea

Differentiate one factor and integrate the other; aim to simplify the remaining integral.

### Intuition

Integrate the product rule, then move one term to the other side.

### Another explanation

Split a product's total change into two contributions. Use the easily integrated contribution to replace the difficult one.

### Quick check

For $\int xe^x dx$, which choice leaves the simplest integral?

A. $u=x,\ dv=e^x dx$
B. $u=e^x,\ dv=x dx$
C. Neither choice is valid

Answer: A. The first choice reduces the polynomial to a constant.

### Which factor should be differentiated?

Try differentiating a polynomial or logarithm. Check whether the new integral is actually simpler.

### When is repetition useful?

For a polynomial times an exponential, repeat until the polynomial disappears. If the original integral returns, solve for it algebraically.

### What changes for definite integrals?

Evaluate the boundary term at both endpoints. For an infinite limit, first truncate the interval, then take a limit.

### Definition and conditions

Replace a difficult product with an easier integral

$$
\int_a^b u v\prime\,dx=[uv]_a^b-\int_a^b u\prime v\,dx
$$

- $u,v$ are continuously differentiable on $[a,b]$; indefinite integrals refer to one connected interval.

### Derivation

Start with the product rule.

$$
(uv)\prime=u\prime v+uv\prime
$$

Integrate and separate the terms.

$$
[uv]_a^b=\int_a^b u\prime v\,dx+\int_a^b uv\prime\,dx
$$

Rearrange to replace the original integral.

$$
\int_a^b uv\prime\,dx=[uv]_a^b-\int_a^b u\prime v\,dx
$$

### Interactive diagram

As the upper endpoint increases, do both expressions give the same accumulated value?

Compare $\int_0^b xe^x dx$ with its boundary term and remaining integral.

Online diagram: #/lesson/c2-parts?view=visual

### Guided experiment

1. **Short interval** Set the upper endpoint to 0.5.

Preset observation: The area is $1-\frac12e^{1/2}$; the right side of the integration-by-parts identity agrees.

2. **Check the endpoint** Set the upper endpoint to 1.

Preset observation: The integral is 1; boundary term minus remaining integral is also 1.

3. **Extend the interval** Set the upper endpoint to 2.

Preset observation: The integral is $e^2+1$; both terms on the right must be evaluated.

### Worked examples

#### Example 1: One application

Evaluate $\int x e^x\,dx$.

- Choose $u=x$, $dv=e^x dx$, giving $du=dx$, $v=e^x$.
- This gives $xe^x-\int e^x dx$; differentiation recovers $xe^x$.

**Answer: $e^x(x-1)+C$.**

#### Example 2: Integrating a logarithm

Evaluate $\int_1^e\ln x\,dx$.

- Use $1$ as the second factor: $u=\ln x$, $dv=dx$.
- This gives $[x\ln x-x]_1^e=0-(-1)$.

**Answer: $1$.**

### Common mistakes

- **Integration by parts always simplifies an integral.** If the new integral is harder, swap the choices. Judge the method by what remains.

- **Only the upper endpoint enters the boundary term.** $[uv]_a^b=u(b)v(b)-u(a)v(a)$.

### Exercises and solutions

**1. Evaluate $\int x\cos x\,dx$.**

Hint: Differentiate the polynomial.

Answer: $x\sin x+\cos x+C$.

- $u=x,v=\sin x$ gives $x\sin x-\int\sin x\,dx$.

**2. Evaluate $\int_0^1 xe^x\,dx$.**

Hint: Use the antiderivative from the example.

Answer: $1$.

- $[e^x(x-1)]_0^1=0-(-1)=1$.

**3. Evaluate $\int x^2e^x\,dx$.**

Hint: Integrate by parts twice.

Answer: $e^x(x^2-2x+2)+C$.

- $x^2e^x-2\int xe^x dx=e^x(x^2-2x+2)+C$.

**4. Evaluate $\int e^x\cos x\,dx$.**

Hint: After two applications, rearrange.

Answer: $\frac{e^x(\sin x+\cos x)}2+C$.

- Call the integral $I$. The first application gives $I=e^x\cos x+\int e^x\sin x dx$.
- The second gives $I=e^x\cos x+e^x\sin x-I$; solve for $2I$.

Prerequisites: Integration by substitution, Basic Differentiation Rules.

## 1.2 Trigonometric integrals

*Use identities to expose a substitution*

### The idea

For odd powers, reserve a derivative factor; for even powers, use power-reduction identities.

### Intuition

In $\sin^3x$, reserve $\sin x$ and replace the remaining $\sin^2x$ with $1-\cos^2x$.

### Another explanation

Trigonometric functions are not independent variables for the power rule. Identities reshape the integral into a form your tools can handle.

### Quick check

What is the most direct approach to $\sin^4x$?

A. Apply the power rule immediately
B. Use power reduction
C. Set $u=\sin x$ and ignore the differential

Answer: B. There is no cosine factor for a direct substitution; power reduction lowers the power.

### Products of sine and cosine

For odd sine powers, reserve one sine and set $u=\cos x$; reverse the roles for odd cosine powers. If both powers are even, use half-angle identities.

### Powers of tangent and secant

In $\tan^m x\sec^n x$ with nonnegative integer powers, if $n\ge2$ is even, reserve $\sec^2x\,dx$ and set $u=\tan x$. If $m\ge1$ is odd and $n\ge1$, reserve $\sec x\tan x\,dx$ and set $u=\sec x$. Other cases require another identity or integration by parts.

### Check the interval

Formulas involving $\tan x$ or $\sec x$ apply on intervals avoiding $\cos x=0$. Differentiate to check signs.

### Definition and conditions

Use identities to expose a substitution

$$
\sin^2x=\frac{1-\cos 2x}{2},\qquad \cos^2x=\frac{1+\cos 2x}{2}
$$

- Angles are in radians. Transform the differential along with the variable.

### Derivation

Split the odd power.

$$
\sin^3x=\sin x(1-\cos^2x)
$$

Substitution introduces a minus sign.

$$
u=\cos x,\quad du=-\sin x\,dx
$$

Integrate the resulting polynomial.

$$
\int\sin^3x\,dx=-\cos x+\frac{\cos^3x}{3}+C
$$

### Interactive diagram

Does refining the partition bring the sum closer to the exact integral?

Compare finite partitions of $\int_0^{\pi/2}\sin^3x\,dx$ with its exact integral.

Online diagram: #/lesson/c2-trig-integrals?view=visual

### Guided experiment

1. **Coarse partition** Set the number of subintervals to 4.

Preset observation: The rectangles give a finite approximation; the exact integral is $\frac23$.

2. **Refine the partition** Set the number of subintervals to 20.

Preset observation: The rectangles narrow; compare the approximate sum with the exact value.

3. **Refine further** Set the number of subintervals to 80.

Preset observation: A finite approximation is still not a convergence proof.

### Worked examples

#### Example 1: An even power

Evaluate $\int_0^\pi\sin^2x\,dx$.

- Power reduction gives $\frac12\int_0^\pi(1-\cos2x)dx$.
- An antiderivative is $\frac{x}{2}-\frac{\sin2x}{4}$; the sine terms vanish at both endpoints.

**Answer: $\frac\pi2$.**

#### Example 2: Reserve the derivative factor

Evaluate $\int\tan^3x\sec^2x\,dx$.

- Set $u=\tan x$, so $du=\sec^2x dx$.
- This gives $\int u^3du=\frac{u^4}{4}+C$.

**Answer: $\frac{\tan^4x}{4}+C$.**

### Common mistakes

- **The integral of $\sin^2x$ is $\frac{\sin^3x}{3}$.** Differentiating that expression introduces $\cos x$; reduce the power first.

- **$d(\cos x)=\sin x dx$.** Omitting the minus sign reverses the integral's sign.

### Exercises and solutions

**1. Evaluate $\int\cos^3x dx$.**

Hint: Reserve one cosine factor.

Answer: $\sin x-\frac{\sin^3x}{3}+C$.

- Set $u=\sin x$; the integral becomes $\int(1-u^2)du$.

**2. Evaluate $\int_0^{\pi/2}\sin x\cos x dx$.**

Hint: Use sine as the new variable.

Answer: $\frac12$.

- $[\frac12\sin^2x]_0^{\pi/2}=\frac12$.

**3. Evaluate $\int\tan^2x dx$.**

Hint: Rewrite in terms of secant.

Answer: $\tan x-x+C$.

- $\tan^2x=\sec^2x-1$; integrate term by term on an interval avoiding tangent's poles.

**4. Evaluate $\int\sec^3x dx$.**

Hint: Differentiate secant and integrate the remaining secant-squared factor.

Answer: $\frac12(\sec x\tan x+\ln|\sec x+\tan x|)+C$.

- $I=\sec x\tan x-\int\sec x\tan^2x dx$.
- Using $\tan^2x=\sec^2x-1$ gives $2I=\sec x\tan x+\int\sec x dx$; the final integral is $\ln|\sec x+\tan x|$.

Prerequisites: Integration by parts, Trigonometric Functions and Radians.

## 1.3 Trigonometric substitution

*Use identities to simplify square roots*

### The idea

Match the substitution to the radical, then choose an angle interval to handle absolute values correctly.

### Intuition

$x=a\sin\theta$ turns $\sqrt{a^2-x^2}$ into $a|\cos\theta|$. On $-\frac\pi2\leq\theta\leq\frac\pi2$, cosine is nonnegative.

### Another explanation

Match the radical to an identity, control its sign with a branch, and convert the result back to the original variable.

### Quick check

What does $\sqrt{9\cos^2\theta}$ always equal?

A. $3\cos\theta$
B. $3|\cos\theta|$
C. $9\cos\theta$

Answer: B. A square root is nonnegative: retain the absolute value.

### Which substitution fits?

For $a^2-x^2$ use sine; for $a^2+x^2$ use tangent; for $x^2-a^2$ use secant on the $x\geq a$ branch, where $a>0$.

### Why draw a triangle?

A triangle converts trigonometric ratios back to the original variable. It describes one branch, not every possible sign.

### What else changes?

The differential $dx$ changes too. A denominator's radical often cancels a factor from the differential.

### Definition and conditions

Use identities to simplify square roots

$$
x=a\sin\theta\quad\Longrightarrow\quad dx=a\cos\theta\,d\theta,\quad\sqrt{a^2-x^2}=a\cos\theta
$$

- $a>0$ and $\theta\in[-\frac\pi2,\frac\pi2]$; exclude endpoints when the radical is in a denominator.

### Derivation

Substitute in the semicircle-area integral.

$$
\int\sqrt{a^2-x^2}\,dx=a^2\int\cos^2\theta\,d\theta
$$

Reduce the power and integrate.

$$
=\frac{a^2}{2}(\theta+\sin\theta\cos\theta)+C
$$

Return to the original variable.

$$
=\frac12\left(a^2\arcsin\frac xa+x\sqrt{a^2-x^2}\right)+C
$$

### Interactive diagram

Near the semicircle's edge, what happens to the horizontal coordinate and height?

Move a point on the semicircle; compare $x=2\sin\theta$ with the radical's height.

Online diagram: #/lesson/c2-trig-substitution?view=visual

### Guided experiment

1. **At the center** Set the angle to 0.

Preset observation: The horizontal coordinate is zero; the radical's height is 2.

2. **An intermediate angle** Set the angle to 0.5.

Preset observation: The horizontal coordinate increases and the height decreases; the hypotenuse remains 2.

3. **Near the edge** Set the angle to 1.4.

Preset observation: The radical's height is small and remains nonnegative.

### Worked examples

#### Example 1: A radical in the denominator

Evaluate $\int\frac{dx}{\sqrt{9-x^2}}$.

- Set $x=3\sin\theta$, $dx=3\cos\theta d\theta$, choosing a branch with positive cosine.
- The integral becomes $\int d\theta$; convert back using arcsine.

**Answer: $\arcsin\frac x3+C$, $-3<x<3$.**

#### Example 2: A sum of squares

Evaluate $\int\frac{dx}{x^2+4}$.

- Set $x=2\tan\theta$; the denominator becomes $4\sec^2\theta$.
- Since $dx=2\sec^2\theta d\theta$, the integral is $\frac12\theta+C$.

**Answer: $\frac12\arctan\frac x2+C$.**

#### Example 3: A sum-of-squares radical

Evaluate $\int\frac{x^2}{\sqrt{x^2+4}}\,dx$.

- Set $x=2\tan\theta$ with $-\pi/2<\theta<\pi/2$, so $\sqrt{x^2+4}=2\sec\theta>0$ and $dx=2\sec^2\theta\,d\theta$.
- The integral becomes $4\int(\sec^3\theta-\sec\theta)\,d\theta$. Integration by parts gives $\int\sec^3\theta\,d\theta=\tfrac12(\sec\theta\tan\theta+\ln|\sec\theta+\tan\theta|)+C$, hence $2\sec\theta\tan\theta-2\ln|\sec\theta+\tan\theta|+C$.
- Substitute $\tan\theta=x/2$, $\sec\theta=\sqrt{x^2+4}/2$. Absorb the logarithm's constant factor into $C$; $x+\sqrt{x^2+4}>0$ holds for every real input.

**Answer: $\frac{x\sqrt{x^2+4}}2-2\ln(x+\sqrt{x^2+4})+C$, $x\in\mathbb R$.**

### Common mistakes

- **$\sqrt{\cos^2\theta}=\cos\theta$ always holds.** Keep the absolute value first, then remove it using the chosen angle branch.

- **Substitute only in the radical, leaving the differential unchanged.** Transform both the scale factor in $dx$ and the integration variable.

### Exercises and solutions

**1. Evaluate $\int\frac{dx}{\sqrt{16-x^2}}$.**

Hint: Express the radical using cosine.

Answer: $\arcsin\frac x4+C$.

- $x=4\sin\theta$; the factors $4\cos\theta$ cancel.

**2. Evaluate $\int_0^2\sqrt{4-x^2}\,dx$.**

Hint: Check using a quarter circle.

Answer: $\pi$.

- A radius-2 quarter circle has area $\frac14\pi\cdot4=\pi$; substitution also gives $4\int_0^{\pi/2}\cos^2\theta d\theta$.

**3. Which substitution suits $\sqrt{x^2+9}$?**

Hint: Turn the sum of squares into secant squared.

Answer: $x=3\tan\theta$, $-\frac\pi2<\theta<\frac\pi2$.

- $x^2+9=9(1+\tan^2\theta)=9\sec^2\theta$; secant is positive on this branch.

**4. On $x>2$, evaluate $\int\frac{dx}{x\sqrt{x^2-4}}$.**

Hint: Use the secant branch.

Answer: $\frac12\arccos\frac2x+C$.

- $x=2\sec\theta$, $0<\theta<\frac\pi2$; the integral becomes $\frac12\int d\theta$.
- $\cos\theta=\frac2x$; this answer is asserted only on the specified positive branch.

Prerequisites: Trigonometric integrals, Inverse-Function and Inverse-Trigonometric Derivatives.

## 1.4 Partial fractions

*Split a rational function into integrable pieces*

### The idea

Factor the denominator and split the fraction into simpler terms. Divide first, then match coefficients.

### Intuition

$\frac1{x(x+1)}=\frac1x-\frac1{x+1}$. The simpler terms still add up to the original function.

### Another explanation

Decomposition preserves the function while making integration easier. Combining denominators determines the coefficients.

### Quick check

How many fraction terms correspond to the factor $(x-2)^3$?

A. One
B. Two
C. Three

Answer: C. Include powers one through three, not just the highest.

### What if the numerator's degree is too large?

Use polynomial division first. The remaining numerator must have lower degree than the denominator.

### Repeated roots and quadratic factors

For a repeated root $(x-a)^m$, include every power through $m$. Use a linear numerator $Ax+B$ over each irreducible quadratic, including each repeated power.

### How can the result be checked?

Combine fractions to check the decomposition, then differentiate the antiderivative. Use absolute values in logarithms; constants may differ across poles.

### Definition and conditions

Split a rational function into integrable pieces

$$
\frac1{x(x+1)}=\frac1x-\frac1{x+1},\quad\int\frac{dx}{x(x+1)}=\ln|x|-\ln|x+1|+C
$$

- $x\neq0,-1$; integrate on a connected interval containing no pole.

### Derivation

Introduce coefficients and combine fractions.

$$
1=A(x+1)+Bx
$$

Match constant and linear coefficients.

$$
A=1,\quad A+B=0
$$

Integrate term by term.

$$
\int\left(\frac1x-\frac1{x+1}\right)dx=\ln\left|\frac{x}{x+1}\right|+C
$$

### Interactive diagram

Does adding the fractions recover the original function?

Compare the rational function with its two partial fractions, avoiding poles.

Online diagram: #/lesson/c2-partial-fractions?view=visual

### Guided experiment

1. **Positive input** Set the input to 0.5.

Preset observation: $\frac1{x(x+1)}=\frac43$; the difference of the two fractions agrees.

2. **Another point** Set the input to 1.

Preset observation: Both forms equal $\frac12$.

3. **Farther out** Set the input to 3.

Preset observation: Both forms equal $\frac1{12}$.

### Worked examples

#### Example 1: Distinct linear factors

Evaluate $\int\frac{3x+1}{x(x+1)}dx$.

- Set $3x+1=A(x+1)+Bx$; this gives $A=1,B=2$.
- Integrate $\frac1x$ and $\frac2{x+1}$ separately.

**Answer: $\ln|x|+2\ln|x+1|+C$.**

#### Example 2: Include every repeated power

Evaluate $\int\frac{dx}{x(x+1)^2}$.

- Decompose as $\frac1x-\frac1{x+1}-\frac1{(x+1)^2}$; combine fractions to verify it.
- The last term has antiderivative $\frac1{x+1}$.

**Answer: $\ln|x|-\ln|x+1|+\frac1{x+1}+C$.**

#### Example 3: An irreducible quadratic

Evaluate $\int\frac{2x+3}{x(x^2+1)}\,dx$.

- Write $A/x+(Bx+C)/(x^2+1)$. Match coefficients in $2x+3=(A+B)x^2+Cx+A$ to obtain $A=3,B=-3,C=2$.
- Integrate $3/x-3x/(x^2+1)+2/(x^2+1)$ term by term. Use $u=x^2+1$ for the second term and arctangent for the third.
- $x^2+1>0$; the only pole is $x=0$. Choose integration constants separately on the positive and negative half-lines.

**Answer: $3\ln|x|-\frac32\ln(x^2+1)+2\arctan x+C$, $x\ne0$.**

### Common mistakes

- **Only the highest repeated power is needed.** Lower-power terms generally must also be included.

- **For a denominator factor $x^2+1$, use only a constant numerator.** Use $Ax+B$ in general; either coefficient may turn out to be zero.

### Exercises and solutions

**1. Decompose $\frac1{x^2-1}$.**

Hint: Factor the denominator as a difference of squares.

Answer: $\frac1{2(x-1)}-\frac1{2(x+1)}$.

- Write $\frac A{x-1}+\frac B{x+1}$; substituting $x=1,-1$ gives $A=\frac12,B=-\frac12$.

**2. Evaluate $\int_1^2\frac{dx}{x(x+1)}$.**

Hint: Evaluate the logarithm at both endpoints.

Answer: $\ln\frac43$.

- $[\ln x-\ln(x+1)]_1^2=\ln\frac23-\ln\frac12=\ln\frac43$.

**3. Evaluate $\int\frac{x^2}{x^2+1}dx$.**

Hint: Divide first.

Answer: $x-\arctan x+C$.

- $\frac{x^2}{x^2+1}=1-\frac1{x^2+1}$; integrate term by term.

**4. Write the decomposition form for $\frac1{(x-1)^2(x^2+1)}$, without finding coefficients.**

Hint: Treat the repeated root and irreducible quadratic separately.

Answer: $\frac A{x-1}+\frac B{(x-1)^2}+\frac{Cx+D}{x^2+1}$.

- Keep both linear-factor powers; the quadratic's numerator has lower degree.

Prerequisites: Trigonometric substitution.

## 1.5 Choosing an integration method

*Read the structure before choosing a tool*

### The idea

Simplify and look for an inner derivative, then examine products, radicals or rational functions. A definite integral can exist without an elementary antiderivative.

### Intuition

Although both contain exponentials, $\int2xe^{x^2}dx$ suggests substitution and $\int xe^x dx$ suggests parts. Look for the inner derivative outside.

### Another explanation

Ask which rewrite simplifies the next step. Then differentiate your proposed answer to check it.

### Quick check

Which step should come first?

A. Use parts whenever a product appears
B. Simplify and look for a composite structure
C. Guess a more complicated antiderivative

Answer: B. Choose a method from the simplified structure, not just its appearance.

### What should you try first?

Simplify algebraically, use identities or perform polynomial division. The result may fit a basic formula.

### Can methods be combined?

Yes. Integration by parts may lead to substitution; a trigonometric substitution may lead to a trigonometric integral. Each step should reduce some difficulty.

### When should you stop seeking an elementary formula?

Functions such as $e^{-x^2}$ have no elementary antiderivative. Keep the definite integral and use numerical methods or series with an error estimate.

### Definition and conditions

Read the structure before choosing a tool

$$
\int_a^b f(x)\,dx=F(b)-F(a)\quad(F\prime=f)
$$

- The fundamental theorem applies when $f$ is continuous on a finite closed interval; elementary formulas are not required for integrability.

### Derivation

Identify the composite structure first.

$$
\int2xe^{x^2}dx=\int e^u du,\quad u=x^2
$$

The other product calls for integration by parts.

$$
\int xe^x dx=e^x(x-1)+C
$$

Check every candidate antiderivative by differentiating.

$$
\frac d{dx}F(x)=f(x)
$$

### Interactive diagram

As the upper endpoint increases, do both expressions give the same accumulated value?

Compare $\int_0^b xe^x dx$ with its boundary term and remaining integral.

Online diagram: #/lesson/c2-strategy?view=visual

### Guided experiment

1. **Short interval** Set the upper endpoint to 0.5.

Preset observation: The area is $1-\frac12e^{1/2}$; the integration-by-parts expression agrees.

2. **Check the endpoint** Set the upper endpoint to 1.

Preset observation: The integral is 1, as is the boundary term minus the remaining integral.

3. **Extend the interval** Set the upper endpoint to 2.

Preset observation: The integral is $e^2+1$; evaluate both terms on the right.

### Worked examples

#### Example 1: Expansion is shorter

Evaluate $\int\frac{x^2+2x+1}{x}dx$.

- For $x\neq0$, split into $x+2+\frac1x$.
- Integrate term by term; parts is unnecessary.

**Answer: $\frac{x^2}{2}+2x+\ln|x|+C$.**

#### Example 2: Combining two methods

Evaluate $\int x\ln(x^2)dx$, where $x>0$.

- First set $u=x^2$, giving $\frac12\int\ln u\,du$.
- Then integration by parts gives $\frac12(u\ln u-u)+C$.

**Answer: $\frac12[x^2\ln(x^2)-x^2]+C$.**

### Common mistakes

- **Each problem must use only one method.** When the structure changes, switch tools and verify each step.

- **Without an elementary antiderivative, the integral cannot exist.** Continuity guarantees a definite integral on a finite closed interval.

### Exercises and solutions

**1. Which method should you try first for $\int\frac{2x}{1+x^2}dx$?**

Hint: The numerator is the denominator's derivative.

Answer: Substitute $u=1+x^2$, obtaining $\ln(1+x^2)+C$.

- $du=2x dx$; the integral becomes $\int\frac1u du$.

**2. Which method should you try first for $\int x\sin x dx$?**

Hint: Differentiate the polynomial.

Answer: Integration by parts, giving $-x\cos x+\sin x+C$.

- $u=x,v=-\cos x$; the remaining integral is $\int\cos x dx$.

**3. Evaluate $\int_0^1\frac{x^2+1}{x+1}dx$.**

Hint: Divide first.

Answer: $2\ln2-\frac12$.

- $\frac{x^2+1}{x+1}=x-1+\frac2{x+1}$; evaluate the resulting integrals at the endpoints.

**4. Can $\int_0^1e^{-x^2}dx$ be defined despite having no elementary antiderivative?**

Hint: Check continuity on the finite interval first.

Answer: Yes; its value lies between 0 and 1.

- The integrand is continuous and satisfies $0<e^{-x^2}\leq1$. The integral exists and can be approximated with error control.

Prerequisites: Integration by parts, Trigonometric integrals, Partial fractions.

## Chapter review

Try independently before reading the solutions.

**1. Evaluate $\int x\ln x\,dx$, $x>0$.**

Hint: Differentiate the logarithm.

Answer: $\frac{x^2}{2}\ln x-\frac{x^2}{4}+C$.

- $u=\ln x,v=\frac{x^2}{2}$; the remaining integral is $\frac12\int x dx$.

**2. Evaluate $\int_0^{\pi/2}\cos^2x\,dx$.**

Hint: Reduce the power first.

Answer: $\frac\pi4$.

- $\cos^2x=\frac{1+\cos2x}{2}$; sine terms vanish at the endpoints.

**3. What should you do first for $\int\frac{x^3+1}{x^2}dx$? Evaluate it.**

Hint: Simplify before choosing a method.

Answer: Divide first; the result is $\frac{x^2}{2}-\frac1x+C$.

- $\frac{x^3+1}{x^2}=x+x^{-2}$; integrate term by term; $x\neq0$.

# Chapter 2 · Approximating, extending and modeling integrals

Numerical methods address accuracy; improper integrals address limiting existence. Surface area, centers of mass and pressure each require their own small-piece model.

Goals:
- Attach error bounds to approximations
- Check tails and singularities separately
- Model area, center of mass and force

## 2.1 Numerical integration and error

*Approximate an integral with an error bound*

### The idea

Trapezoids use straight lines; Simpson's rule uses parabolas. Error bounds tell you how many subintervals suffice.

### Intuition

Finer partitions often improve accuracy, but a close-looking graph gives no guarantee. Derivative bounds supply that guarantee.

### Another explanation

The algorithm supplies a number; error theory supplies a guaranteed range. Keep them separate.

### Quick check

Composite Simpson's rule requires which number of subintervals?

A. Any positive integer
B. A positive even integer
C. Exactly two

Answer: B. Fit a parabola to each pair; interior weights depend on the node's parity.

### Simpson's weights

Use equal spacing and an even $n$. Endpoints have weight 1; interior odd-indexed nodes have weight 4 and even-indexed nodes weight 2.

### Why do the error bounds differ?

The trapezoidal bound scales with $n^{-2}$. With a bounded fourth derivative, Simpson's bound scales with $n^{-4}$. Higher-order guarantees require more smoothness.

### Choosing the partition

Specify a tolerance, insert a derivative bound and solve for a sufficient $n$. The actual error may be smaller than this conservative bound.

### Definition and conditions

Approximate an integral with an error bound

$$
|I-T_n|\leq\frac{M_2(b-a)^3}{12n^2},\qquad |I-S_n|\leq\frac{M_4(b-a)^5}{180n^4}
$$

- For trapezoids require $f\in C^2[a,b]$ and $|f^{(2)}|\leq M_2$; for Simpson require $f\in C^4[a,b]$ and $|f^{(4)}|\leq M_4$, with positive even $n$.

### Derivation

Approximate each pair of subintervals with a parabola.

$$
\int_{x_0}^{x_2}f(x)dx\approx\frac h3(f_0+4f_1+f_2)
$$

Add the pairs; interior even-indexed nodes occur twice.

$$
S_n=\frac h3\left(f_0+4\sum_{j\text{ odd}}f_j+2\sum_{\substack{j\text{ even}\\0<j<n}}f_j+f_n\right)
$$

Insert a fourth-derivative bound to bound the error.

$$
h=\frac{b-a}{n},\quad |I-S_n|\leq\frac{M_4(b-a)h^4}{180}
$$

### Interactive diagram

With the same partition, which method has the smaller error?

Compare trapezoidal and Simpson approximations of $e^x$ on $[0,1]$ with the exact value.

Online diagram: #/lesson/c2-numerical?view=visual

### Guided experiment

1. **Two subintervals** Set the count to 2.

Preset observation: Simpson uses a three-point parabola; trapezoids use two line segments.

2. **Eight subintervals** Set the count to 8.

Preset observation: For this smooth exponential model, both errors decrease.

3. **Thirty-two subintervals** Set the count to 32.

Preset observation: Actual errors and conservative bounds are displayed separately.

### Worked examples

#### Example 1: Exact for a quadratic

Use Simpson's rule with two subintervals for $\int_0^1x^2dx$.

- $h=\frac12$; the three node values are $0,\frac14,1$.
- $S_2=\frac16(0+4\cdot\frac14+1)=\frac13$; the fourth derivative is zero.

**Answer: $\frac13$; this approximation is exact.**

#### Example 2: Choosing the number of subintervals

Approximate $\int_0^1e^x dx$ by trapezoids with error below $0.001$. Give a sufficient number of subintervals.

- $M_2=e$, so the error is at most $\frac e{12n^2}$.
- $n^2>\frac e{0.012}$; choose $n=16$.

**Answer: Choose 16 subintervals; the bound guarantees the tolerance.**

### Common mistakes

- **Simpson's rule permits any odd number of subintervals.** This composite rule groups subintervals in pairs and requires an even count.

- **Two close approximations prove that the error is small.** Agreement is a diagnostic; a guarantee still needs the hypotheses and an error bound.

### Exercises and solutions

**1. Approximate $\int_0^1x^2dx$ with two trapezoids.**

Hint: Use half weight at the endpoints and full weight internally.

Answer: $\frac38$.

- $T_2=\frac14(0+2\cdot\frac14+1)=\frac38$.

**2. What does two-subinterval Simpson give for $\int_0^1x^3dx$?**

Hint: It is exact for cubics too.

Answer: $\frac14$.

- $S_2=\frac16(0+4\cdot\frac18+1)=\frac14$.

**3. The trapezoidal bound uses $M_2=12$ on an interval of length 1. What is the smallest count guaranteeing error at most $0.01$?**

Hint: Solve the inequality.

Answer: $10$.

- $\frac1{n^2}\leq0.01$ gives $n\geq10$.

**4. Can the fourth-derivative bound be used directly when the graph has a corner?**

Hint: Check smoothness.

Answer: No.

- The fourth derivative may not exist. Split at the corner or use an applicable estimate.

Prerequisites: Choosing an integration method, Riemann sums and numerical integration.

## 2.2 Integrals over infinite intervals

*Truncate first, then move the boundary outward*

### The idea

An infinite-interval integral is a limit of finite integrals. Infinity is not an ordinary endpoint value.

### Intuition

A region may extend forever yet have finite area. The tail's rate of decay decides.

### Another explanation

Infinite length need not mean infinite area. Track finite truncations and ask whether their values approach a finite limit.

### Quick check

Does $f(x)\to0$ guarantee that $\int_1^\infty f(x)dx$ converges?

A. Yes
B. No
C. Only for positive functions

Answer: B. $f(x)=\frac1x$ is a positive counterexample.

### What does convergence mean?

The integral $\int_a^R f$ must tend to a finite real number as $R\to\infty$. Unbounded growth and persistent oscillation both mean divergence.

### What if both endpoints are infinite?

Split at a finite point; both halves must converge separately. Symmetric truncation alone may produce only a principal value.

### The power-tail threshold

On $[1,\infty)$, $\int x^{-p}dx$ converges exactly when $p>1$. Even the slow logarithmic growth at $p=1$ is unbounded.

### Definition and conditions

Truncate first, then move the boundary outward

$$
\int_a^\infty f(x)dx:=\lim_{R\to\infty}\int_a^R f(x)dx,\qquad\int_1^\infty\frac{dx}{x^p}=\frac1{p-1}\ (p>1)
$$

- Each finite truncation is integrable and the limiting value must be finite. For two infinite endpoints, both halves must converge.

### Derivation

Evaluate a finite truncation.

$$
\int_1^R x^{-p}dx=\frac{R^{1-p}-1}{1-p}\quad(p\neq1)
$$

A negative exponent makes the far-end term vanish.

$$
p>1\Longrightarrow R^{1-p}\to0
$$

Check the threshold separately.

$$
\int_1^R\frac{dx}{x}=\ln R\to\infty
$$

### Interactive diagram

How does extending the interval differ on either side of exponent one?

Truncate $\int_1^R x^{-p}dx$, varying both exponent and upper endpoint.

Online diagram: #/lesson/c2-improper-infinity?view=visual

### Guided experiment

1. **A convergent tail** Set the exponent to 2 and upper endpoint to 4.

Preset observation: The truncated area is $\frac34$, still $\frac14$ below its limit 1.

2. **Move the boundary outward** Set the exponent to 2 and upper endpoint to 40.

Preset observation: The area is $\frac{39}{40}$; the remaining tail is $\frac1{40}$.

3. **The threshold exponent** Set the exponent to 1 and upper endpoint to 40.

Preset observation: The area is $\ln40$; increasing the endpoint produces no finite limit.

### Worked examples

#### Example 1: A finite tail area

Evaluate $\int_1^\infty x^{-2}dx$.

- The truncated integral is $[-\frac1x]_1^R=1-\frac1R$.
- As $R\to\infty$, the tail $\frac1R$ tends to zero.

**Answer: $1$.**

#### Example 2: An exponential tail

Evaluate $\int_0^\infty e^{-2x}dx$.

- The finite integral is $\frac12(1-e^{-2R})$.
- The exponential tends to zero, leaving a finite limit.

**Answer: $\frac12$.**

### Common mistakes

- **If the function tends to zero, its integral converges.** $\frac1x\to0$, but its integral from 1 to infinity diverges.

- **The two infinite tails can cancel.** Ordinary improper integration requires each half to converge. Principal value uses a different definition.

### Exercises and solutions

**1. Evaluate $\int_1^\infty x^{-3}dx$.**

Hint: Use a finite upper endpoint first.

Answer: $\frac12$.

- $\int_1^R x^{-3}dx=\frac12(1-R^{-2})\to\frac12$.

**2. Does $\int_1^\infty x^{-1/2}dx$ converge?**

Hint: Check the antiderivative's growth.

Answer: It diverges.

- $2(\sqrt R-1)\to\infty$.

**3. Evaluate $\int_0^\infty xe^{-x}dx$.**

Hint: Integrate by parts before taking the limit.

Answer: $1$.

- An antiderivative is $-(x+1)e^{-x}$; the truncated value is $1-(R+1)e^{-R}\to1$.

**4. Can symmetry make $\int_{-\infty}^{\infty}x dx$ zero?**

Hint: Calculate the halves separately.

Answer: No; the ordinary improper integral diverges.

- The integral from 0 to $R$ is $\frac{R^2}{2}\to\infty$. A zero symmetric principal value does not establish convergence.

Prerequisites: Numerical integration and error, Infinite Limits and Asymptotes.

## 2.3 Unbounded integrands on finite intervals

*Approach every singularity separately*

### The idea

Avoid an unbounded endpoint or interior point, integrate on a truncated interval, then take one-sided limits.

### Intuition

Infinite height near zero need not give infinite area. Both height and width matter.

### Another explanation

Mark every unbounded point on the interval. The whole integral exists only if each required one-sided limit exists.

### Quick check

For which exponents does $\int_0^1x^{-p}dx$ converge?

A. $p>1$
B. $p<1$
C. $p=1$

Answer: B. Near zero, the spike must be weak enough; this reverses the tail condition at infinity.

### An interior singularity

Split at the singularity; both sides must converge. Never subtract antiderivative values across a singularity directly.

### Is the power threshold the same as at infinity?

It is reversed: $\int_0^1x^{-p}dx$ converges exactly when $p<1$. Here the issue is a spike near zero, not a distant tail.

### Can comparison help?

Yes. A nonnegative function bounded above by an integrable spike is integrable. One bounded below by a divergent spike diverges.

### Definition and conditions

Approach every singularity separately

$$
\int_0^1x^{-p}dx=\lim_{\delta\to0^+}\int_\delta^1x^{-p}dx=\frac1{1-p}\quad(p<1)
$$

- Truncation points approach from inside the interval. Check every relevant side of every singularity.

### Derivation

Avoid zero initially.

$$
\int_\delta^1x^{-p}dx=\frac{1-\delta^{1-p}}{1-p}\quad(p\neq1)
$$

A positive exponent makes the lower-end term vanish.

$$
p<1\Longrightarrow\delta^{1-p}\to0
$$

The threshold still diverges.

$$
\int_\delta^1\frac{dx}{x}=-\ln\delta\to\infty
$$

### Interactive diagram

As the lower endpoint shrinks, which exponents keep the area finite?

Truncate the spike of $[0,\delta)$ and display $\int_\delta^1x^{-p}dx$.

Online diagram: #/lesson/c2-improper-singular?view=visual

### Guided experiment

1. **An integrable spike** Set the exponent to 0.5 and lower endpoint to 0.1.

Preset observation: The limiting total is 2, but the truncation still omits $2\sqrt{0.1}$.

2. **Approach zero** Set the exponent to 0.5 and lower endpoint to 0.001.

Preset observation: The height grows, yet the omitted area shrinks.

3. **A nonintegrable spike** Set the exponent to 1 and lower endpoint to 0.001.

Preset observation: The area is $-\ln0.001$, unbounded as the lower endpoint approaches zero.

### Worked examples

#### Example 1: Unbounded but integrable

Evaluate $\int_0^1\frac{dx}{\sqrt x}$.

- The truncated integral is $2-2\sqrt\delta$.
- As $\delta\to0^+$, the lower-end contribution vanishes.

**Answer: $2$.**

#### Example 2: Do not cross an interior singularity

Does $\int_{-1}^1\frac{dx}{x}$ exist?

- The left integral is $\ln\delta\to-\infty$; the right is $-\ln\delta\to\infty$.
- Neither converges, so cancellation is invalid.

**Answer: Divergent; a zero symmetric principal value is a different concept.**

### Common mistakes

- **Every vertical asymptote implies infinite area.** $x^{-1/2}$ is unbounded at zero but has finite integral.

- **Just substitute the endpoints into an antiderivative.** Locate all singularities first. The fundamental theorem cannot be used across one.

### Exercises and solutions

**1. Evaluate $\int_0^1x^{-1/3}dx$.**

Hint: Use a limit at the lower endpoint.

Answer: $\frac32$.

- $[\frac32x^{2/3}]_\delta^1\to\frac32$.

**2. Does $\int_0^1x^{-2}dx$ converge?**

Hint: The issue is behavior near zero.

Answer: It diverges.

- $[-x^{-1}]_\delta^1=\delta^{-1}-1\to\infty$.

**3. Evaluate $\int_0^1\ln x dx$.**

Hint: Integrate by parts, then take the lower-end limit.

Answer: $-1$.

- $[x\ln x-x]_\delta^1=-1-\delta\ln\delta+\delta$; $\delta\ln\delta\to0$.

**4. An antiderivative difference for $\int_0^2\frac{dx}{(x-1)^2}$ is negative. What went wrong?**

Hint: Split at 1.

Answer: It crosses an interior singularity, invalidating the fundamental theorem.

- The integrand is positive on both sides, and both integrals tend to positive infinity near 1. It diverges.

Prerequisites: Integrals over infinite intervals.

## 2.4 Surface area of revolution

*Circumference times a small arc length*

### The idea

Rotating a small arc produces a narrow band, with area approximately circumference times arc length.

### Intuition

Volume uses disks; surface area uses circumferences. Their pieces and formulas differ.

### Another explanation

For a surface, cut the generating curve into small arcs and rotate each into a narrow band.

### Quick check

What is the small piece in a surface-of-revolution integral?

A. $\pi r^2 dx$
B. $2\pi r\,ds$
C. $r\,dx$

Answer: B. Circumference times arc length along the curve.

### Why include arc length?

A sloping arc is longer than its horizontal projection. Use $ds=\sqrt{1+(f\prime)^2}dx$, not simply $dx$.

### Which radius?

The radius is distance to the axis. Around the horizontal line $y=c$, use $|f(x)-c|$.

### Are end caps included?

This formula gives lateral area only. Add end caps separately for a closed surface. Retracing a curve counts the surface repeatedly.

### Definition and conditions

Circumference times a small arc length

$$
S=2\pi\int_a^b|f(x)-c|\sqrt{1+f\prime(x)^2}\,dx
$$

- $f$ is continuously differentiable on $[a,b]$, rotated about $y=c$, without repeated counting. Only lateral area is included.

### Derivation

Approximate each small arc by a segment.

$$
\Delta s\approx\sqrt{(\Delta x)^2+(\Delta y)^2}
$$

Its rotation gives a narrow frustum band.

$$
\Delta S\approx2\pi|f(x)-c|\Delta s
$$

Refine the partition and take a limit.

$$
S=2\pi\int_a^b|f(x)-c|\sqrt{1+f\prime(x)^2}dx
$$

### Interactive diagram

As the slope increases, what happens to both radius and slant height?

Use the cone generated by $y=mx$ to compare circumference, slant height and area.

Online diagram: #/lesson/c2-surface?view=visual

### Guided experiment

1. **Gentle slope** Set the slope to 0.5.

Preset observation: The top radius is 0.5; the slant height is $\sqrt{1.25}$.

2. **Unit slope** Set the slope to 1.

Preset observation: The lateral area is $\pi\sqrt2$, excluding caps.

3. **Steep slope** Set the slope to 2.

Preset observation: The lateral area is $2\pi\sqrt5$; this is not volume.

### Worked examples

#### Example 1: A cone's lateral area

Rotate $y=x$, $0\leq x\leq1$ about the horizontal axis. Find its lateral area.

- The radius is $x$ and $ds=\sqrt2 dx$.
- $S=2\pi\sqrt2\int_0^1x dx=\pi\sqrt2$.

**Answer: $\pi\sqrt2$; the base is excluded.**

#### Example 2: A cylinder

Rotate $y=2$, $0\leq x\leq3$ about the horizontal axis. Find its lateral area.

- The radius is 2; the arc-length element is $dx$.
- $S=2\pi\int_0^3 2dx$, agreeing with circumference times height.

**Answer: $12\pi$.**

### Common mistakes

- **Surface area still uses $\pi r^2$.** That is cross-sectional area. A lateral band uses $2\pi r\,ds$.

- **Lateral area automatically includes end caps.** End caps require separate calculation; the surface may not be capped at all.

### Exercises and solutions

**1. Find the lateral area from rotating $y=3$, $0\leq x\leq2$ about the horizontal axis.**

Hint: Use the cylinder's lateral area.

Answer: $12\pi$.

- $S=2\pi\int_0^2 3dx=12\pi$.

**2. Find the lateral area from rotating $y=2x$, $0\leq x\leq1$ about the horizontal axis.**

Hint: The arc-length factor is constant.

Answer: $2\pi\sqrt5$.

- $S=2\pi\int_0^1 2x\sqrt5 dx=2\pi\sqrt5$.

**3. Find the lateral area from rotating $y=-1$, $0\leq x\leq2$ about the horizontal axis.**

Hint: A radius cannot be negative.

Answer: $4\pi$.

- The radius is $|y|=1$, and $S=2\pi\int_0^2dx=4\pi$.

**4. What is the total area of a cylinder with radius $2$, length $3$, including both end caps?**

Hint: Add two circles to the lateral area.

Answer: $20\pi$.

- The lateral area is $12\pi$; each cap has area $\pi\cdot2^2=4\pi$; total $20\pi$.

Prerequisites: Arc length and surface area of revolution, Trigonometric substitution.

## 2.5 Mass, moments and center of mass

*Weight position by mass*

### The idea

The center of mass is a mass-weighted average, not a simple average of boundary positions.

### Intuition

The midpoint works for equal masses. For a continuous distribution, sum mass times position and divide by total mass.

### Another explanation

Each small piece contributes its position, weighted by its mass.

### Quick check

If a rod is denser on the right, which way does its center of mass shift?

A. Left
B. Right
C. Density has no effect

Answer: B. Mass elements on the right carry greater weight in the average.

### A thin rod

With linear density $\rho(x)$, $dm=\rho(x)dx$. Mass is $\int dm$; moment about the origin is $\int x\,dm$.

### A planar lamina

A uniform lamina lies between $g(x)$ and $f(x)$. A vertical strip has area $(f-g)dx$ and midpoint height $\frac{f+g}{2}$.

### What does symmetry simplify?

A symmetric mass distribution places the center of mass on the symmetry axis. Symmetric shape alone is insufficient if density is asymmetric.

### Definition and conditions

Weight position by mass

$$
\bar x=\frac{\int x\,dm}{\int dm},\qquad\bar y=\frac{\int y\,dm}{\int dm}
$$

- Total mass is positive and finite; moments exist. Uniform-lamina formulas require constant area density.

### Derivation

Add the small masses.

$$
M=\int_a^b\rho(x)dx
$$

Add each mass times its position.

$$
P=\int_a^b x\rho(x)dx
$$

Match the moment with a mass concentrated at the center of mass.

$$
M\bar x=P
$$

### Interactive diagram

When the right side is heavier, does the center of mass stay at the midpoint?

Vary density $\rho(x)=1+cx$ on $[0,1]$ and track the center of mass.

Online diagram: #/lesson/c2-moments?view=visual

### Guided experiment

1. **A uniform rod** Set the density coefficient to 0.

Preset observation: The center of mass is 0.5 and total mass is 1.

2. **Heavier on the right** Set the density coefficient to 2.

Preset observation: Mass is 2; the center of mass is $\frac7{12}$.

3. **Increase the gradient** Set the density coefficient to 6.

Preset observation: The center of mass is $\frac58$, still inside the rod.

### Worked examples

#### Example 1: A rod heavier toward the right

On $0\leq x\leq1$, density is $\rho(x)=2x$. Find the center of mass.

- $M=\int_0^1 2x dx=1$.
- $P=\int_0^1 2x^2dx=\frac23$, so $\bar x=\frac23$.

**Answer: $\bar x=\frac23$.**

#### Example 2: A triangular lamina

Find the center of mass of the uniform lamina $0\leq y\leq x$, $0\leq x\leq1$.

- Its area is $A=\int_0^1x dx=\frac12$.
- Moment about the vertical axis is $\int_0^1x^2dx=\frac13$; about the horizontal axis, $\frac12\int_0^1x^2dx=\frac16$.

**Answer: $(\bar x,\bar y)=(\frac23,\frac13)$.**

### Common mistakes

- **The center of mass must be the geometric center.** Weight by mass. For a lamina with a hole, the center of mass can even lie outside the material.

- **Moment about the horizontal axis integrates horizontal position.** Distance to that axis is the vertical coordinate. Draw the moment arm first.

### Exercises and solutions

**1. Mass 1 is at $x=0$ and mass 3 at $x=2$. Find the center of mass.**

Hint: Use a weighted average.

Answer: $\frac32$.

- $\bar x=\frac{1\cdot0+3\cdot2}{4}=\frac32$.

**2. Find the center of mass of a uniform rod on $[2,6]$.**

Hint: Use symmetry.

Answer: $4$.

- Constant density puts it at the midpoint $\frac{2+6}{2}=4$.

**3. On $[0,1]$, density is $\rho=3x^2$. Find the center of mass.**

Hint: Compute mass and moment separately.

Answer: $\frac34$.

- $M=1$, $P=3\int_0^1x^3dx=\frac34$.

**4. Find the center of mass of the uniform rectangle $0\leq x\leq2,0\leq y\leq4$.**

Hint: Use its two symmetry axes.

Answer: $(1,2)$.

- Symmetry about both midlines places it at their intersection.

Prerequisites: Displacement, work, mass, and averages, Choosing an integration method.

## 2.6 Pressure and work by layers

*Depth and lifting distance vary with position*

### The idea

Total force and work accumulate layer contributions; force or travel distance can differ between layers.

### Intuition

Water pressure increases with depth. Using one depth for an entire gate only works if it is the correct average.

### Another explanation

First define a small layer's physical contribution, then sum. The integral follows the model.

### Quick check

For pumping, what is one layer's work contribution?

A. Mass times height
B. Weight times lifting distance
C. Pressure times volume

Answer: B. Weight is the ideal lifting force; multiply by displacement to obtain work.

### Force on a gate

Hydrostatic gauge pressure is $\rho g h$. Strip area is width times thickness, so $dF=\rho g h\,dA$.

### What changes for pumping work?

A layer weighs $\rho g\,dV$; multiply by its lift to the outlet: $dW=\rho g\ell\,dV$. Tank shape is specified by horizontal cross-sectional area $A(y)$, not base area alone. The water examples use $\rho=1000\,\mathrm{kg/m^3}$, $g=9.8\,\mathrm{m/s^2}$.

### Why draw coordinates first?

Mark the surface, bottom, outlet and positive direction. Then express both depth and lift as functions of position.

### Definition and conditions

Depth and lifting distance vary with position

$$
F=\int\rho gh\,dA,\qquad W=\int\rho g\ell\,dV
$$

- Water is at rest, with known density and gravity. Use gauge pressure, neglect flow losses and keep units consistent.

### Derivation

Depth is nearly constant across a thin horizontal strip.

$$
\Delta F\approx\rho gh(y)w(y)\Delta y
$$

Refine the strips to obtain total hydrostatic force.

$$
F=\rho g\int h(y)w(y)dy
$$

Multiply each layer's weight by its lift to obtain work.

$$
W=\rho g\int\ell(y)A(y)dy
$$

### Interactive diagram

If depth doubles, does force per unit width only double?

Slice a rectangular gate by depth; pressure increases linearly downward.

Online diagram: #/lesson/c2-pressure?view=visual

### Guided experiment

1. **One meter deep** Set depth to 1.

Preset observation: Force per unit width is $4900\,\mathrm N$.

2. **Two meters deep** Set depth to 2.

Preset observation: Force per unit width is $19600\,\mathrm N$, four times the previous value.

3. **Three meters deep** Set depth to 3.

Preset observation: Force per unit width is $44100\,\mathrm N$; bottom pressure does not represent the whole gate.

### Worked examples

#### Example 1: A rectangular gate

A vertical gate has width $2\,\mathrm m$ and extends $3\,\mathrm m$ below the surface. With water density $1000\,\mathrm{kg/m^3}$ and $g=9.8\,\mathrm{m/s^2}$, find the resultant force.

- Measure depth $y$ downward; $dA=2dy$.
- $F=9800\int_0^3 2y dy=88200$.

**Answer: $88200\,\mathrm N$.**

#### Example 2: Pumping a cylindrical tank

A vertical cylindrical tank has constant horizontal cross-sectional area $1\,\mathrm{m^2}$ and water depth $2\,\mathrm m$. Pump it empty to a fixed outlet $2\,\mathrm m$ above the bottom, neglecting losses. Find the work.

- Set the bottom at $y=0$. A layer has volume $1\,dy$, weight $9800\,dy$ and lifting distance $2-y$ to the fixed outlet.
- $W=9800\int_0^2(2-y)\,dy=19600\,\mathrm J$. The water level falls; the outlet height stays fixed.

**Answer: $19600\,\mathrm J$.**

### Common mistakes

- **Total work equals total weight.** Multiply weight by distance too; each layer generally travels a different distance.

- **Pressure and resultant force are the same quantity.** Pressure is force per area. Integrate it over area to obtain force.

### Exercises and solutions

**1. A rectangular gate has width $1\,\mathrm m$ and depth $2\,\mathrm m$ below the surface. Find the resultant force.**

Hint: Slice by depth.

Answer: $19600\,\mathrm N$.

- $F=9800\int_0^2y dy=19600$.

**2. A vertical cylindrical tank has cross-sectional area $1\,\mathrm{m^2}$, water depth $2\,\mathrm m$ and a fixed outlet $3\,\mathrm m$ above its bottom. With $\rho=1000\,\mathrm{kg/m^3}$, $g=9.8\,\mathrm{m/s^2}$ and no losses, find the work to empty it.**

Hint: Each layer travels one additional meter.

Answer: $39200\,\mathrm J$.

- $W=9800\int_0^2(3-y)dy=39200$.

**3. A spring has $k=20\,\mathrm{N/m}$. Find the work to stretch it from 0 to $0.5\,\mathrm m$.**

Hint: The force changes with extension.

Answer: $2.5\,\mathrm J$.

- $W=\int_0^{0.5}20x dx=2.5$.

**4. Does bottom pressure times total area overestimate or underestimate force on a vertical gate?**

Hint: The bottom has the greatest depth.

Answer: Overestimate, for a nondegenerate vertical gate.

- Every other point has lower pressure; replacing all pressures by the maximum overestimates the integral.

Prerequisites: Mass, moments and center of mass, Displacement, work, mass, and averages.

## Chapter review

Try independently before reading the solutions.

**1. Do $\int_1^\infty\frac{dx}{x^{3/2}}$ and $\int_0^1\frac{dx}{x^{3/2}}$ have the same convergence behavior?**

Hint: Distinguish a distant tail from a spike near zero.

Answer: The first converges to 2; the second diverges.

- Their truncated integrals are $2-\frac2{\sqrt R}\to2$ and $\frac2{\sqrt\delta}-2\to\infty$.

**2. Find the center of mass of a rod on $[0,1]$ with density $\rho=1+2x$.**

Hint: Integrate mass and moment separately.

Answer: $\frac7{12}$.

- $M=2$, $P=\frac12+\frac23=\frac76$, hence $P/M=\frac7{12}$.

**3. Rotate $y=x$ on $[0,2]$ about the horizontal axis. Find lateral area.**

Hint: Keep both radius and arc-length element.

Answer: $4\pi\sqrt2$.

- $S=2\pi\int_0^2 x\sqrt2 dx=4\pi\sqrt2$; end caps excluded.

# Chapter 3 · From sequences to infinite sums

Sequence limits underpin series. First examine later terms, then determine whether their running totals stabilize.

Goals:
- Explain sequence convergence
- Check monotone bounds and recurrences
- Compute geometric and telescoping sums

## 3.1 Sequences and limits

*Track the index, not continuous time*

### The idea

A sequence converges when every sufficiently late term stays close to one number. Finitely many initial terms do not determine its limit.

### Intuition

$a_n=\frac1n$ approaches zero without ever equaling it. Sequence indices are integers.

### Another explanation

Initial terms may be erratic. Convergence requires that no sufficiently late term strays far from the limit.

### Quick check

Which sequence converges?

A. $(-1)^n$
B. $\frac{(-1)^n}{n}$
C. $n$

Answer: B. The second sequence's oscillation amplitude tends to zero.

### Making closeness precise

For every positive tolerance, there is an index beyond which all terms lie within that tolerance of the limit. A few close terms do not suffice.

### Computing limits

Use limit laws, squeezing or a related continuous function. The quotient law requires a nonzero denominator limit.

### Must oscillation diverge?

Oscillation can converge if its amplitude vanishes. $(-1)^n$ diverges, while $\frac{(-1)^n}{n}$ tends to zero.

### Definition and conditions

Track the index, not continuous time

$$
a_n\to L\iff\forall\varepsilon>0\ \exists N\ \forall n\geq N:\ |a_n-L|<\varepsilon
$$

- The index $n$ is a positive integer. The threshold $N$ may depend on tolerance, not on the later term chosen.

### Derivation

Bound the reciprocal using the tolerance.

$$
\left|\frac1n-0\right|<\varepsilon\iff n>\frac1\varepsilon
$$

Choose a strictly larger integer threshold.

$$
N>\frac1\varepsilon
$$

Every term beyond that threshold meets the tolerance.

$$
n\geq N\Longrightarrow\frac1n\leq\frac1N<\varepsilon
$$

### Interactive diagram

Can 20 close late terms replace an argument about every later term?

Compare the discrete terms of $a_n=\frac1n$ with the target zero.

Online diagram: #/lesson/c2-sequences?view=visual

### Guided experiment

1. **First ten terms** Set the count to 10.

Preset observation: The last term is $\frac1{10}$.

2. **Forty terms** Set the count to 40.

Preset observation: The last term is $\frac1{40}$; gaps between dots are not extra terms.

3. **Eighty terms** Set the count to 80.

Preset observation: The last term is still positive. A limit need not equal any term.

### Worked examples

#### Example 1: A polynomial ratio

Find $\lim_{n\to\infty}\frac{3n+1}{2n-5}$.

- Divide numerator and denominator by $n$, giving $\frac{3+1/n}{2-5/n}$.
- The denominator tends to nonzero 2, so the quotient law applies.

**Answer: $\frac32$.**

#### Example 2: Convergent oscillation

Find $\lim\frac{\sin n}{n}$.

- Using $|\sin n|\leq1$ gives $|\frac{\sin n}{n}|\leq\frac1n$.
- The right side tends to zero; squeeze the sequence to zero.

**Answer: $0$.**

### Common mistakes

- **One sufficiently close term proves convergence.** Every sufficiently late term must be close.

- **Every bounded sequence converges.** $(-1)^n$ is bounded but has no limit.

### Exercises and solutions

**1. Find $\lim\frac{n}{n+1}$.**

Hint: Rewrite as one minus a small quantity.

Answer: $1$.

- $\frac n{n+1}=1-\frac1{n+1}\to1$.

**2. Why does $(-1)^n$ not converge?**

Hint: Examine the two subsequences.

Answer: Its odd and even subsequences have different limits.

- Odd terms equal $-1$; even terms equal 1. Convergence would require the same limit for both.

**3. What is the smallest integer threshold $N$ guaranteeing $\frac1n<0.01$?**

Hint: Respect the strict inequality.

Answer: $101$.

- $n>100$, so every $n\geq101$ satisfies the requirement.

**4. Find $\lim\sqrt{n^2+n}-n$.**

Hint: Multiply by the conjugate.

Answer: $\frac12$.

- $\sqrt{n^2+n}-n=\frac{n}{\sqrt{n^2+n}+n}=\frac1{\sqrt{1+1/n}+1}\to\frac12$.

Prerequisites: Limit Laws.

## 3.2 Monotone bounded sequences and recurrences

*Establish convergence before solving for a limit*

### The idea

A bounded monotone real sequence converges. Pass a recurrence to its limit only after proving convergence.

### Intuition

A sequence rising beneath a ceiling approaches a height without necessarily reaching it in finitely many steps.

### Another explanation

A fixed-point equation identifies where a limit could be. Bounds and monotonicity establish that the sequence actually approaches one.

### Quick check

What should come first when solving for a recursive limit?

A. Assume convergence and accept all roots
B. Prove convergence using bounds and monotonicity
C. Ignore the initial value

Answer: B. Passing to a limit requires a convergence argument first.

### Which bound is needed?

An increasing sequence needs an upper bound; a decreasing one needs a lower bound. An unbounded monotone sequence may tend to infinity. The supremum is the least upper bound.

### Finding a recursive limit

Use induction to establish an invariant interval and monotonicity. Then use continuity of the recurrence function to pass to the limit.

### Is every fixed point a possible limit?

No. The initial value and invariant interval select branches; solving a fixed-point equation does not prove convergence.

### Definition and conditions

Establish convergence before solving for a limit

$$
a_n\uparrow,\ a_n\leq M\ \Longrightarrow\ a_n\to\sup\{a_n:n\geq1\}
$$

- Use completeness of the real numbers, monotonicity and a finite bound in the appropriate direction.

### Derivation

Take the supremum as candidate limit.

$$
L=\sup\{a_n:n\geq1\}
$$

Every smaller number fails to be an upper bound.

$$
\forall\varepsilon>0\ \exists N:\ a_N>L-\varepsilon
$$

Monotonicity traps all later terms in a narrow band.

$$
L-\varepsilon<a_N\leq a_n\leq L\quad(n\geq N)
$$

### Interactive diagram

If the graph appears to reach 2, must a finite term equal 2 exactly?

Display the recurrence $a_1=1,a_{n+1}=\sqrt{2+a_n}$ with upper bound 2.

Online diagram: #/lesson/c2-monotone?view=visual

### Guided experiment

1. **Early terms** Set the count to 3.

Preset observation: The sequence increases and remains below 2.

2. **More terms** Set the count to 10.

Preset observation: The error shrinks; rounding may make displayed terms look equal.

3. **Continue the recurrence** Set the count to 20.

Preset observation: Numerical agreement cannot replace the monotone convergence proof.

### Worked examples

#### Example 1: A square-root recurrence

Given $a_1=1$, $a_{n+1}=\sqrt{2+a_n}$, find the limit.

- If $1\leq a_n<2$, the next term stays in the interval; also $\sqrt{2+x}>x$ holds for $1\leq x<2$.
- Increasing and bounded above, it converges. The nonnegative solution of $L=\sqrt{2+L}$ is 2.

**Answer: $2$.**

#### Example 2: An averaging recurrence

Given $a_1=0$, $a_{n+1}=\frac{a_n+3}{2}$, find the limit.

- $3-a_{n+1}=\frac12(3-a_n)$, hence $a_n=3-\frac3{2^{n-1}}$.
- The error decays geometrically; the sequence increases without exceeding 3.

**Answer: $3$.**

### Common mistakes

- **A recurrence with a fixed point must converge.** $a_{n+1}=-a_n$ has fixed point zero, but nonzero initial values oscillate.

- **Boundedness makes monotonicity unnecessary.** Bounded oscillation need not converge.

### Exercises and solutions

**1. Is $a_n=1-\frac1n$ monotone and bounded? Find its limit.**

Hint: Compare consecutive terms.

Answer: Increasing, bounded above by 1, with limit 1.

- $a_{n+1}-a_n=\frac1n-\frac1{n+1}>0$; $a_n<1$.

**2. Given $a_1=0,a_{n+1}=\frac{a_n+4}{2}$, find the limit.**

Hint: Write the error relative to the fixed point.

Answer: $4$.

- $4-a_{n+1}=\frac12(4-a_n)$, so the error tends to zero.

**3. Can this theorem give a finite limit for the monotone sequence $a_n=n$?**

Hint: Check both hypotheses.

Answer: No; an upper bound is missing.

- The sequence is strictly increasing and unbounded, so it tends to positive infinity.

**4. Given $a_1=1,a_{n+1}=2-a_n$, if $a_1$ is changed to 0, is the limit still 1?**

Hint: A fixed point does not guarantee convergence.

Answer: Starting at 1 gives the constant sequence 1; starting at 0 gives alternating 0 and 2.

- The first four terms reveal the cycle; the two subsequences have different limits.

Prerequisites: Sequences and limits.

## 3.3 Infinite series and partial sums

*Define infinite addition through finite sums*

### The idea

A series converges when its partial sums converge. Terms tending to zero are necessary, not sufficient.

### Intuition

Ever smaller contributions can still produce an unbounded total. $\frac1n$ is the key counterexample.

### Another explanation

Track the entire running total, not just its newest contribution. Does that total approach a finite value?

### Quick check

What follows from $a_n\to0$?

A. The series converges
B. The series diverges
C. The test is inconclusive

Answer: C. This condition is necessary. The harmonic series shows it is insufficient.

### Sequence versus series

$a_n$ describes one contribution; $S_N$ describes the accumulated total. Their limits answer different questions.

### What if terms do not tend to zero?

If partial sums have a finite limit, $a_n=S_n-S_{n-1}\to0$. Thus terms not tending to zero force divergence. The converse fails.

### Can finitely many terms change convergence?

Adding or removing finitely many terms changes the sum but not convergence. The infinite tail decides.

### Definition and conditions

Define infinite addition through finite sums

$$
S_N=\sum_{n=1}^N a_n,\qquad\sum_{n=1}^\infty a_n=S\iff\lim_{N\to\infty}S_N=S
$$

- Use the specified summation order. Convergence means a finite real limit.

### Derivation

Assume partial sums converge.

$$
S_n\to S,\quad S_{n-1}\to S
$$

Their consecutive difference is one term.

$$
a_n=S_n-S_{n-1}
$$

Subtract limits to obtain the necessary condition.

$$
a_n\to S-S=0
$$

### Interactive diagram

If individual terms shrink, must the running total shrink too?

Display harmonic terms $a_n$ and partial sums $S_n$ together.

Online diagram: #/lesson/c2-series?view=visual

### Guided experiment

1. **Ten terms** Set the count to 10.

Preset observation: The last term is 0.1, yet the partial sum exceeds 2.

2. **Forty terms** Set the count to 40.

Preset observation: Terms keep shrinking while partial sums keep growing.

3. **Eighty terms** Set the count to 80.

Preset observation: A finite window cannot prove unboundedness; the grouping argument does.

### Worked examples

#### Example 1: Terms fail to vanish

Does $\sum_{n=1}^\infty\frac n{n+1}$ converge?

- The individual term satisfies $\frac n{n+1}\to1$.
- The necessary condition fails; no further partial-sum test is needed.

**Answer: It diverges.**

#### Example 2: The harmonic series

Why does $\sum\frac1n$ diverge although its terms vanish?

- Group terms by $[2^{k-1}+1,2^k]$; each group has $2^{k-1}$ terms.
- Each term in a group is at least $\frac1{2^k}$; each group contributes at least $\frac12$, with arbitrarily many groups.

**Answer: Partial sums are unbounded; the series diverges.**

### Common mistakes

- **$a_n\to0$ implies convergence of the series.** The harmonic series disproves this.

- **A divergent series must have terms tending to infinity.** Terms may tend to zero while the accumulated sum remains unbounded.

### Exercises and solutions

**1. Does $\sum_{n=1}^\infty\frac{n+2}{n}$ converge?**

Hint: Check the terms first.

Answer: It diverges.

- Terms tend to 1, not zero.

**2. What happens to the partial sums of $\sum_{n=1}^\infty(-1)^n$?**

Hint: Compute odd and even partial sums separately.

Answer: They oscillate between two values and do not converge.

- $S_{2k}=0$, $S_{2k-1}=-1$.

**3. Increase the first term of a convergent series by 7. What changes?**

Hint: Compare the partial sums.

Answer: It still converges; its sum increases by 7.

- Every partial sum increases by 7, so does the limit.

**4. Given $a_n\to0$, what must you examine next to decide $\sum a_n$?**

Hint: A necessary condition is not sufficient.

Answer: Examine partial sums or use an applicable convergence test.

- Vanishing terms exclude only the simplest cause of divergence. Geometric and harmonic tails behave differently.

Prerequisites: Sequences and limits, Monotone bounded sequences and recurrences.

## 3.4 Geometric and telescoping series

*One scales; the other cancels*

### The idea

Find finite partial sums before taking a limit. Do not manipulate an infinite expression whose convergence is unknown.

### Intuition

Multiplying a geometric sum by its ratio shifts its terms. Telescoping expresses terms as differences so the interior cancels.

### Another explanation

Perform each manipulation on a finite sum first. Keeping the uncancelled tail prevents assigning a false finite value to divergence.

### Quick check

What is the sum of $\sum_{n=1}^\infty r^n$ when $|r|<1$?

A. $\frac1{1-r}$
B. $\frac r{1-r}$
C. $1-r$

Answer: B. Starting at power one makes the first term the ratio itself.

### Why must the ratio have magnitude below one?

The finite-sum remainder contains $r^{N+1}$, which vanishes only when $|r|<1$. Treat $r=1$ separately; $r=-1$ oscillates.

### Does the starting index matter?

Starting at power zero differs from starting at power one. Write the first two terms to avoid losing a ratio factor.

### What survives telescoping?

Write the first and last terms explicitly. The surviving boundary terms determine convergence.

### Definition and conditions

One scales; the other cancels

$$
\sum_{n=0}^N ar^n=\frac{a(1-r^{N+1})}{1-r},\qquad\sum_{n=0}^\infty ar^n=\frac a{1-r}\quad(|r|<1)
$$

- The finite-sum formula requires $r\neq1$. If $a\neq0$, the infinite geometric series converges exactly when $|r|<1$.

### Derivation

Multiply the finite sum by its ratio and subtract.

$$
(1-r)S_N=a-ar^{N+1}
$$

Solve for the finite sum.

$$
S_N=\frac{a(1-r^{N+1})}{1-r}
$$

Within the convergence range, the tail vanishes.

$$
|r|<1\Longrightarrow S_N\to\frac a{1-r}
$$

### Interactive diagram

For a negative ratio, how do partial sums approach the sum?

Vary the ratio and count to distinguish convergence, oscillation and growth.

Online diagram: #/lesson/c2-geometric?view=visual

### Guided experiment

1. **Positive ratio** Set the ratio to 0.5 and count to 8.

Preset observation: Starting at power zero, the limiting sum is 2.

2. **Negative ratio** Set the ratio to -0.5 and count to 8.

Preset observation: Partial sums approach $\frac23$ from alternating sides.

3. **Outside the convergence range** Set the ratio to 1.1 and count to 20.

Preset observation: Terms and partial sums grow; the infinite-sum formula does not apply.

### Worked examples

#### Example 1: Check the starting index

Evaluate $\sum_{n=1}^\infty\frac1{3^n}$.

- The first term is $\frac13$; the ratio is $\frac13$.
- The sum is $\frac{1/3}{1-1/3}$.

**Answer: $\frac12$.**

#### Example 2: Telescoping

Evaluate $\sum_{n=1}^\infty\frac1{n(n+1)}$.

- Decompose as $\frac1n-\frac1{n+1}$.
- $S_N=1-\frac1{N+1}\to1$.

**Answer: $1$.**

### Common mistakes

- **Any ratio can enter the infinite-sum formula.** Check $|r|<1$ first.

- **Cancellation removes every term.** Retain the first and last boundary contributions.

### Exercises and solutions

**1. Evaluate $\sum_{n=0}^\infty(\frac14)^n$.**

Hint: The first term is one.

Answer: $\frac43$.

- $|r|=\frac14<1$; the sum is $\frac1{1-1/4}=\frac43$.

**2. Evaluate $\sum_{n=0}^\infty(-\frac12)^n$.**

Hint: A negative ratio can still converge.

Answer: $\frac23$.

- $|r|=\frac12<1$; the sum is $\frac1{1+1/2}=\frac23$.

**3. Evaluate $\sum_{n=2}^\infty\frac1{n(n+1)}$.**

Hint: The telescoping sum begins at the second term.

Answer: $\frac12$.

- $S_N=\frac12-\frac1{N+1}\to\frac12$.

**4. Can $\frac1{1-2}=-1$ be used for $\sum_{n=0}^\infty2^n$?**

Hint: Check the ratio range and positivity.

Answer: No; the series diverges.

- The ratio's magnitude exceeds one and terms do not vanish; finite sums $2^{N+1}-1$ are unbounded.

Prerequisites: Infinite series and partial sums, Partial fractions.

## Chapter review

Try independently before reading the solutions.

**1. Find $\lim\frac{2n-1}{n+3}$.**

Hint: Divide by the highest power.

Answer: $2$.

- $\frac{2-1/n}{1+3/n}\to2$.

**2. For $a_1=1,a_{n+1}=\frac{a_n+5}{2}$, prove convergence and find the limit.**

Hint: Track distance from the fixed point.

Answer: $5$.

- $5-a_{n+1}=\frac12(5-a_n)$, hence $a_n=5-\frac4{2^{n-1}}\to5$.

**3. Evaluate $\sum_{n=1}^\infty\frac2{n(n+1)}$.**

Hint: Split into differences of consecutive reciprocals.

Answer: $2$.

- $S_N=2(1-\frac1{N+1})\to2$.

# Chapter 4 · Series convergence and error

Start with the term test, then choose according to positivity, ratios or alternation. Convergence, exact sums and error estimates are distinct questions.

Goals:
- Choose comparison, integral, ratio or root tests
- Check alternating-series hypotheses
- Estimate tails and truncation errors

## 4.1 The integral test and tail bounds

*Trap a positive tail between areas*

### The idea

A positive, continuous, decreasing function links an integral to a series and bounds the tail after a finite partial sum.

### Intuition

Unit-width rectangles on opposite sides of a decreasing curve bound its area. Two integrals trap the tail sum.

### Another explanation

Replace an infinite unseen tail by two computable areas, obtaining both convergence and a useful error range.

### Quick check

What does the integral test generally provide?

A. An exact series sum
B. Convergence equivalence and applicable tail bounds
C. The sum of any signed series

Answer: B. Positive decreasing curves and rectangles trap tails; they usually do not coincide.

### Essential hypotheses

The function is eventually positive, continuous and decreasing, and its integer values give the terms. Handle any finite initial segment separately.

### Does the integral equal the series sum?

Usually not. They share convergence behavior; tail integrals provide bounds, not equality.

### Choosing the number of terms

If the upper tail bound is below the tolerance, the partial sum meets the error target. The benchmark $\sum_{n=1}^\infty n^{-p}$ is a $p$-series and converges exactly when $p>1$.

### Definition and conditions

Trap a positive tail between areas

$$
\int_{N+1}^\infty f(x)dx\leq R_N:=\sum_{n=N+1}^\infty f(n)\leq\int_N^\infty f(x)dx
$$

- $f$ is positive, continuous and decreasing on $[N,\infty)$, and its improper integral converges.

### Derivation

Use monotonicity to compare each rectangle with neighboring areas.

$$
\int_n^{n+1}f(x)dx\leq f(n)\leq\int_{n-1}^{n}f(x)dx
$$

Sum from the first omitted term.

$$
\int_{N+1}^{M+1}f(x)dx\leq\sum_{n=N+1}^M f(n)\leq\int_N^M f(x)dx
$$

Let the upper endpoint tend to infinity to bound the tail.

$$
\int_{N+1}^\infty f\leq R_N\leq\int_N^\infty f
$$

### Interactive diagram

How much does increasing the count narrow the possible tail range?

Display reciprocal-square partial sums with tail bounds from $\frac1{N+1}\leq R_N\leq\frac1N$.

Online diagram: #/lesson/c2-integral-test?view=visual

### Guided experiment

1. **Ten terms** Set the count to 10.

Preset observation: The tail lies between $\frac1{11}$ and $\frac1{10}$.

2. **Forty terms** Set the count to 40.

Preset observation: The tail lies between $\frac1{41}$ and $\frac1{40}$.

3. **Eighty terms** Set the count to 80.

Preset observation: The upper bound is $\frac1{80}$; the finite partial sum is still not the full sum.

### Worked examples

#### Example 1: A reciprocal-square tail

Bound the error after 10 terms of $\sum\frac1{n^2}$.

- The function is positive, continuous and decreasing; its tail integral is simple.
- $\int_{11}^\infty x^{-2}dx\leq R_{10}\leq\int_{10}^\infty x^{-2}dx$.

**Answer: $\frac1{11}\leq R_{10}\leq\frac1{10}$.**

#### Example 2: A logarithmic boundary

Does $\sum_{n=2}^\infty\frac1{n(\ln n)^2}$ converge?

- Its associated function is positive and decreasing on $x\geq2$.
- Set $u=\ln x$; the integral is the finite value $\int_{\ln2}^\infty u^{-2}du$.

**Answer: It converges.**

### Common mistakes

- **Any function representation permits the integral test.** Check positivity, continuity and eventual decrease.

- **The sum equals the integral starting at one.** Rectangles differ from the curve. The test gives convergence equivalence and tail bounds.

### Exercises and solutions

**1. When does $\sum\frac1{n^p}$ converge?**

Hint: Examine the tail integral.

Answer: $p>1$.

- $\int_1^\infty x^{-p}dx$ converges exactly when $p>1$; for $p\leq0$, the term test also applies.

**2. For reciprocal squares with bound $R_N\le1/N$, how many terms guarantee this bound is at most $0.01$?**

Hint: Use the upper tail bound.

Answer: $100$ terms suffice.

- $R_N\leq\frac1N$; choose $N=100$.

**3. Does $\sum_{n=2}^\infty\frac1{n\ln n}$ converge?**

Hint: Substitute the logarithm as variable.

Answer: It diverges.

- $\int_2^R\frac{dx}{x\ln x}=\ln\ln R-\ln\ln2\to\infty$.

**4. For $\sum_{n=1}^{\infty}1/n^3$, use $\int_{10}^{\infty}x^{-3}\,dx$ to bound the tail after 10 terms. What is the bound?**

Hint: Start the integral at ten.

Answer: $\frac1{200}$.

- $R_{10}\leq\int_{10}^\infty x^{-3}dx=\frac1{2\cdot10^2}$.

Prerequisites: Geometric and telescoping series, Integrals over infinite intervals.

## 4.2 Comparison and limit comparison

*Match an unfamiliar tail to a known one*

### The idea

Compare positive terms with a known series. Limit comparison checks whether their tails differ by a finite positive factor.

### Intuition

For large $n$, $\frac1{n^2+1}$ behaves like $\frac1{n^2}$. Limit comparison turns this resemblance into a precise ratio.

### Another explanation

Decide whether you need an upper or lower bound before choosing the reference.

### Quick check

Which comparison establishes convergence of a positive series?

A. Above a convergent series
B. Below a divergent series
C. Below a convergent series

Answer: C. The tails are bounded above by a finite total.

### Which direction works?

Below a convergent positive series implies convergence; above a divergent one implies divergence. Reversing either comparison is inconclusive.

### Limit-comparison hypotheses

Both sequences must eventually be positive and their ratio must tend to a finite positive number. Limits zero or infinity can support one-sided conclusions, not automatic equivalence.

### Choosing a reference

For rational terms, compare leading powers; for radicals, compare growth rates. Initial inequalities do not determine tail behavior.

### Definition and conditions

Match an unfamiliar tail to a known one

$$
a_n,b_n>0,\quad\lim_{n\to\infty}\frac{a_n}{b_n}=c\in(0,\infty)\ \Longrightarrow\ \sum a_n,\sum b_n\text{ converge or diverge together}
$$

- Terms are eventually positive; finitely many initial terms do not affect convergence.

### Derivation

A positive ratio limit traps the terms between two positive multiples.

$$
\frac c2b_n\leq a_n\leq\frac{3c}{2}b_n\quad(n\geq N)
$$

If the reference converges, use an upper comparison.

$$
\sum b_n<\infty\Longrightarrow\sum a_n<\infty
$$

If the reference diverges, use a lower comparison.

$$
\sum b_n=\infty\Longrightarrow\sum a_n=\infty
$$

### Interactive diagram

If the terms become close, must the sums be equal?

Compare terms of $\frac1{n^2+1}$ and $\frac1{n^2}$ and display their ratio.

Online diagram: #/lesson/c2-comparison?view=visual

### Guided experiment

1. **First five terms** Set the count to 5.

Preset observation: Each term of the first sequence is smaller.

2. **Twenty terms** Set the count to 20.

Preset observation: The ratio approaches 1; the tails have the same order.

3. **Eighty terms** Set the count to 80.

Preset observation: The finite partial sums still differ; comparison decides convergence.

### Worked examples

#### Example 1: Direct comparison

Does $\sum\frac1{n^2+1}$ converge?

- $0<\frac1{n^2+1}\leq\frac1{n^2}$.
- Reciprocal squares converge, so the smaller positive series converges.

**Answer: It converges.**

#### Example 2: Limit comparison

Does $\sum\frac{3n+1}{n^2+5}$ converge?

- Compare with $b_n=\frac1n$; the ratio is $\frac{3n^2+n}{n^2+5}\to3$.
- The harmonic series diverges, and the ratio limit is finite and positive.

**Answer: It diverges.**

### Common mistakes

- **Anything below a divergent series converges.** A divergent upper bound is too loose to decide.

- **A ratio tending to zero still guarantees the same behavior.** Zero does not guarantee equivalence; compare reciprocal squares with harmonic terms.

### Exercises and solutions

**1. Does $\sum\frac1{n^2+n}$ converge?**

Hint: Compare with reciprocal squares.

Answer: It converges.

- Positive terms are at most $\frac1{n^2}$; the upper series converges.

**2. Does $\sum\frac1{\sqrt{n^2+1}}$ converge?**

Hint: Use limit comparison with harmonic terms.

Answer: It diverges.

- $\frac{n}{\sqrt{n^2+1}}\to1$, so it shares harmonic divergence.

**3. Does $0<a_n\leq\frac1n$ determine $\sum a_n$?**

Hint: Try two sequences satisfying the upper bound.

Answer: No.

- $a_n=\frac1{n^2}$ converges, but $a_n=\frac1n$ diverges.

**4. Does $\sum\frac{n+1}{n^3+2}$ converge?**

Hint: Compare with reciprocal squares.

Answer: It converges.

- $\frac{(n+1)n^2}{n^3+2}\to1$; the finite positive ratio gives convergence.

Prerequisites: The integral test and tail bounds.

## 4.3 Ratio and root tests

*Look for eventual geometric decay*

### The idea

A limiting consecutive ratio or nth root below one gives a convergent geometric bound. A limit equal to one is inconclusive.

### Intuition

Factorials and exponentials often suit the ratio test; an overall $n$th power often suits the root test. Both seek a hidden geometric tail.

### Another explanation

Below one, the tail eventually shrinks at least at some fixed geometric rate. One gives no such guarantee.

### Quick check

A ratio limit equal to one means what?

A. Divergence
B. Absolute convergence
C. This test is inconclusive

Answer: C. Use comparison, integration or another applicable test.

### The ratio test

For eventually nonzero terms, compute the limit of $|a_{n+1}/a_n|$. Below one gives absolute convergence; above one or infinity gives divergence. Factorials satisfy $n!=1\cdot2\cdots n$, with $0!=1$.

### The root test

Compute the limit of $\sqrt[n]{|a_n|}$, with the same threshold one. If the limit fails to exist, this limit version cannot be applied directly.

### What if the limit is one?

Use another test. Both $\sum\frac1n$ and $\sum\frac1{n^2}$ have ratio limit one, but opposite convergence behavior.

### Definition and conditions

Look for eventual geometric decay

$$
L=\lim\left|\frac{a_{n+1}}{a_n}\right|\ \text{or}\ \lim\sqrt[n]{|a_n|}:\quad L<1\Rightarrow\text{absolute convergence},\quad L>1\Rightarrow\text{divergence}
$$

- The chosen limit exists, possibly as positive infinity; ratio denominators are eventually nonzero. $L=1$ is inconclusive.

### Derivation

For a limit below one, choose an intermediate geometric ratio.

$$
L<q<1
$$

All sufficiently late ratios are at most that value.

$$
|a_{N+k}|\leq|a_N|q^k
$$

The geometric tail converges, proving absolute convergence by comparison.

$$
\sum_{k=0}^\infty|a_{N+k}|\leq\frac{|a_N|}{1-q}
$$

### Interactive diagram

If initial terms do not shrink, must the series diverge?

Display terms, partial sums and the next ratio for $\frac{2^n}{n!}$.

Online diagram: #/lesson/c2-ratio-root?view=visual

### Guided experiment

1. **Initial terms** Set the count to 2.

Preset observation: Terms may increase initially; the first few terms do not decide.

2. **Into the tail** Set the count to 8.

Preset observation: The consecutive ratio is below 1 and terms shrink noticeably.

3. **Later terms** Set the count to 20.

Preset observation: The ratio tends to zero; a tiny undisplayed term is not mathematically zero.

### Worked examples

#### Example 1: Factorials dominate exponentials

Does $\sum_{n=0}^\infty\frac{2^n}{n!}$ converge?

- Its consecutive ratio is $\frac2{n+1}\to0$.
- The limit is below one, giving absolute convergence, not the sum.

**Answer: Absolutely convergent.**

#### Example 2: An overall power

Does $\sum_{n=1}^\infty(\frac{3n+1}{5n})^n$ converge?

- Its nth root is $\frac{3n+1}{5n}\to\frac35$.
- Large initial terms do not change tail convergence.

**Answer: It converges.**

### Common mistakes

- **A ratio tending to one implies divergence.** One is inconclusive; use another test.

- **The ratio test computes the sum.** It decides convergence, not the sum itself.

### Exercises and solutions

**1. Does $\sum\frac{3^n}{n!}$ converge?**

Hint: Divide consecutive terms.

Answer: Absolutely convergent.

- The ratio is $\frac3{n+1}\to0$.

**2. Does $\sum\frac{n!}{2^n}$ converge?**

Hint: The ratio grows.

Answer: It diverges.

- The ratio is $\frac{n+1}{2}\to\infty$; terms also fail to tend to zero.

**3. Find the root limit of $\sum(\frac{n}{2n+1})^n$.**

Hint: Take the nth root first.

Answer: $\frac12$, so the series converges.

- The root is $\frac{n}{2n+1}\to\frac12<1$.

**4. The ratio limit of $\sum\frac1{n^2}$ is one. What next?**

Hint: This is a familiar positive power tail.

Answer: Use the positive $p$-series result or integral test to establish convergence.

- The ratio test is inconclusive; the $p$-series has $p=2>1$, so it converges.

Prerequisites: Comparison and limit comparison, Geometric and telescoping series.

## 4.4 Alternating series and error

*Alternating decreasing terms trap the remainder*

### The idea

Eventually nonincreasing positive magnitudes tending to zero give convergence. The next-term bound applies only after the truncation enters that decreasing tail.

### Intuition

Pair decreasing positive and negative terms: partial sums trap the limit from opposite sides. Keep an irregular initial segment before bounding its tail.

### Another explanation

The next term gives both an error bound and the side of the partial sum on which the true value lies.

### Quick check

What supports the alternating next-term error bound?

A. Alternation alone
B. Magnitudes eventually decreasing to zero
C. A sufficiently large count alone

Answer: B. Alternation and decreasing magnitudes together trap the tail.

### The two conditions

Magnitudes are eventually nonincreasing and tend to zero. Alternation alone is insufficient; a finite initial segment does not affect convergence.

### What is the error's sign?

If $b_n$ decreases to zero from $n=n_0$, then for $N+1\ge n_0$, the remainder has the first omitted term's sign or is zero, with magnitude at most $b_{N+1}$. Do not apply the bound before decrease begins.

### Does this bound work without alternation?

No. Positive tails can accumulate many terms and need integral, geometric or other estimates.

### Definition and conditions

Alternating decreasing terms trap the remainder

$$
\sum_{n=1}^\infty(-1)^{n-1}b_n=S,\quad b_n\downarrow0\ \Longrightarrow\ |S-S_N|\leq b_{N+1}
$$

- $b_n\ge0$; there exists $n_0$ such that $b_n$ is nonincreasing for $n\ge n_0$ and tends to zero. The error formula requires $N+1\ge n_0$.

### Derivation

Pair terms when decrease starts immediately. For eventual decrease, remove the finite initial segment and apply the same proof to the tail.

$$
S_{2k+2}-S_{2k}=b_{2k+1}-b_{2k+2}\geq0
$$

Odd partial sums decrease, even partial sums increase, and both trap the limit.

$$
S_{2k}\leq S\leq S_{2k+1}
$$

Their gap vanishes, yielding the next-term error bound.

$$
S_{2k+1}-S_{2k}=b_{2k+1}\to0
$$

### Interactive diagram

On which side of the true sum do odd and even partial sums lie?

Display alternating harmonic partial sums, the exact sum $\ln2$ and next-term bounds.

Online diagram: #/lesson/c2-alternating?view=visual

### Guided experiment

1. **An odd count** Set the count to 5.

Preset observation: The next term is negative; the partial sum is above the true sum.

2. **An even count** Set the count to 6.

Preset observation: The next term is positive; the partial sum is below the true sum.

3. **Reduce the error** Set the count to 60.

Preset observation: The error is at most $\frac1{61}$; the sum remains between neighboring partial sums.

### Worked examples

#### Example 1: The alternating harmonic series

Using 100 terms for $1-\frac12+\frac13-\cdots$, what is the maximum error?

- $b_n=\frac1n$ decreases to zero.
- The next magnitude is $\frac1{101}$ and its sign is positive, so the true sum is above the partial sum.

**Answer: $0\leq S-S_{100}\leq\frac1{101}$.**

#### Example 2: Choosing a count

How many terms suffice to approximate $\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}$ with error at most $0.001$?

- Require $\frac1{(N+1)^2}\leq0.001$.
- $N+1\geq\sqrt{1000}$; choosing $N=31$ suffices.

**Answer: 31 terms suffice.**

### Common mistakes

- **Alternation alone guarantees convergence.** The magnitudes in $1-1+1-1+\cdots$ do not vanish; partial sums oscillate.

- **An error below the last term means the answer is exact.** Finite truncation remains approximate. Use the next term to bound its error.

### Exercises and solutions

**1. What is the remainder's sign after 9 alternating harmonic terms?**

Hint: The next term is negative.

Answer: Nonpositive.

- The tenth term is $-\frac1{10}$; the remainder is nonpositive, so the sum is at most the ninth partial sum.

**2. Bound the error after 99 alternating harmonic terms.**

Hint: Use the first omitted term.

Answer: $0.01$.

- $b_{100}=\frac1{100}=0.01$.

**3. Does $\sum(-1)^n\frac{n}{n+1}$ converge?**

Hint: Check whether magnitudes vanish.

Answer: It diverges.

- Magnitudes tend to 1, so terms do not vanish; the alternating-series test cannot establish convergence.

**4. Does $\sum\frac{(-1)^{n-1}}{\sqrt n}$ converge?**

Hint: Check both magnitude conditions.

Answer: It converges.

- $n^{-1/2}$ is positive and decreases to zero, so the alternating series converges.

**5. Let $b_1=1,b_2=100$, with $b_n=1/n$ when $n\ge3$. Does the alternating series converge? At $N=0$, can you use $|S|\le b_1$?**

Hint: Convergence concerns the eventual tail; an error bound also depends on where truncation occurs.

Answer: It converges, but the tail bound cannot be used before the decreasing portion begins.

- Magnitudes decrease to zero from the third term, so the series converges.
- The tail starting at the third term lies between $0$ and $1/3$; hence $-99\le S\le-99+1/3$, and clearly $|S|>1=b_1$.
- In this example the next-term bound applies directly only for $N\ge2$.

Prerequisites: Ratio and root tests.

## Chapter review

Try independently before reading the solutions.

**1. Does $\sum_{n=1}^\infty\frac{4n+1}{n^3+1}$ converge?**

Hint: Use limit comparison with reciprocal squares.

Answer: It converges.

- Ratio $\frac{(4n+1)n^2}{n^3+1}\to4$; the series share convergence behavior.

**2. Does $\sum_{n=0}^\infty\frac{5^n}{n!}$ converge? Does this test alone give its sum?**

Hint: Compute consecutive ratios first.

Answer: Absolutely convergent; the ratio test itself does not give the exact sum.

- Ratio $\frac5{n+1}\to0$; geometric decay bounds the tail.

**3. Bound the error after 9 terms of $\sum\frac{(-1)^{n-1}}{n^3}$.**

Hint: Use the next term's magnitude.

Answer: $\frac1{1000}$.

- Magnitudes decrease to zero; $b_{10}=\frac1{10^3}$.

# Chapter 5 · From convergence to function representation

Distinguish absolute and conditional convergence, treat inputs as parameters, and develop power series, termwise operations and Taylor polynomials.

Goals:
- Classify absolute and conditional convergence
- Find radii and test endpoints
- Construct polynomials matching derivatives

## 5.1 Absolute and conditional convergence

*Remove signs and test the total magnitude*

### The idea

Absolute convergence means the absolute-value series converges. Conditional convergence means the original series converges but its absolute-value series diverges.

### Intuition

Conditional convergence relies on cancellation; rearrangement can change the sum. Absolutely convergent sums are stable under rearrangement.

### Another explanation

First ask whether the total magnitude is finite without cancellation. If so, convergence is absolute; if convergence requires cancellation, it is conditional.

### Quick check

If the absolute-value series diverges, what about the original?

A. It must diverge
B. It must converge conditionally
C. Further testing is needed

Answer: C. Either conditional convergence or divergence is possible.

### Why is absolute convergence stronger?

The magnitude of an original tail is at most its absolute-value tail. Making the latter small controls the former.

### Classifying a series

Test absolute values first. If they converge, you are done. If they diverge, test the signed original instead of immediately declaring divergence.

### Can terms be rearranged freely?

Finite sums can. Infinite sums need conditions: absolute convergence allows rearrangement; for conditional convergence retain the specified order.

### Definition and conditions

Remove signs and test the total magnitude

$$
\sum|a_n|<\infty\Rightarrow\sum a_n\text{ converges};\qquad \sum a_n\text{ converges and }\sum|a_n|=\infty\Rightarrow\text{conditional convergence}
$$

- These are real series. Rearrangement invariance does not make arbitrary finite truncations equal.

### Derivation

Apply the triangle inequality to a finite tail.

$$
\left|\sum_{n=N+1}^M a_n\right|\leq\sum_{n=N+1}^M|a_n|
$$

Absolute convergence makes the bound arbitrarily small.

$$
\forall\varepsilon>0\ \exists N:\sum_{n>N}|a_n|<\varepsilon
$$

The original series satisfies the Cauchy criterion and converges.

$$
\left|\sum_{n=N+1}^M a_n\right|<\varepsilon
$$

### Interactive diagram

On which side of the true sum do odd and even partial sums lie?

Display alternating harmonic partial sums, the exact sum $\ln2$ and next-term bounds.

Online diagram: #/lesson/c2-absolute?view=visual

### Guided experiment

1. **An odd count** Set the count to 5.

Preset observation: The next term is negative; the partial sum is above the true sum.

2. **An even count** Set the count to 6.

Preset observation: The next term is positive; the partial sum is below the true sum.

3. **Reduce the error** Set the count to 60.

Preset observation: The error is at most $\frac1{61}$; the sum remains between neighboring partial sums.

### Worked examples

#### Example 1: Conditional convergence

Classify $\sum\frac{(-1)^{n-1}}n$.

- The alternating-series test gives convergence.
- Its absolute-value series is harmonic and diverges.

**Answer: Conditionally convergent.**

#### Example 2: Absolute convergence

Classify $\sum\frac{(-1)^n}{n^2}$.

- Its absolute-value series is the reciprocal-square series.
- The power is 2, greater than 1, so the absolute sum is finite.

**Answer: Absolutely convergent.**

### Common mistakes

- **Divergent absolute values force the original series to diverge.** Conditional convergence is still possible; test the original series next.

- **Rearrangement cannot change any infinite sum.** A conditionally convergent sum can depend on order.

### Exercises and solutions

**1. Classify $\sum\frac{(-1)^n}{n^3}$.**

Hint: Remove the signs first.

Answer: Absolutely convergent.

- Its absolute-value series is a convergent power tail with exponent 3.

**2. Classify $\sum\frac{(-1)^n}{\sqrt n}$.**

Hint: Test the original and absolute-value series separately.

Answer: Conditionally convergent.

- Magnitudes decrease to zero, so the original converges. The absolute-value power is $\frac12\leq1$, giving divergence.

**3. Classify $\sum\frac{(-2)^n}{n}$.**

Hint: Do its terms tend to zero?

Answer: It diverges.

- The magnitude $\frac{2^n}{n}$ does not vanish, violating the necessary condition.

**4. Classify $\sum\frac{\sin n}{n^2}$.**

Hint: Compare absolute values.

Answer: Absolutely convergent.

- $|\frac{\sin n}{n^2}|\leq\frac1{n^2}$; comparison gives absolute convergence.

Prerequisites: Alternating series and error, Comparison and limit comparison.

## 5.2 Power series and convergence intervals

*Treat each input as a separate series*

### The idea

A power series converges inside its radius and diverges outside. Test each boundary point separately.

### Intuition

On $|x|<1$, $\sum x^n$ represents $\frac1{1-x}$. Outside this range, that series representation is invalid.

### Another explanation

Each input creates a sequence of numbers to add. The convergence interval contains exactly those inputs producing finite sums.

### Quick check

After finding the radius, what remains?

A. Include both endpoints by default
B. Test left and right endpoints separately
C. Treat the radius as a function value

Answer: B. The endpoint series may behave differently.

### Center and radius

The center of $\sum c_n(x-a)^n$ is $a$. The radius measures distance from it and may be zero, positive finite or infinite.

### Why are endpoints special?

The ratio test usually gives a strict inequality. At endpoints, harmonic, alternating harmonic or other series can arise, with different results on each side.

### Does a defined function value imply a convergent expansion?

No. $\frac1{1-x}$ is defined at $x=2$, but its geometric expansion centered at zero diverges there.

### Definition and conditions

Treat each input as a separate series

$$
\sum_{n=0}^\infty c_n(x-a)^n:\quad |x-a|<R\text{ absolutely convergent},\quad |x-a|>R\text{ divergent}
$$

- Test endpoints $x=a\pm R$ separately. For $R=0$ only the center converges; for $R=\infty$ every input converges.

### Derivation

Compute the ratio for a typical power series.

$$
\sum_{n=1}^\infty\frac{x^n}{n},\quad\left|\frac{a_{n+1}}{a_n}\right|=|x|\frac n{n+1}\to|x|
$$

Find the open interval, then substitute both endpoints.

$$
|x|<1;\quad x=1:\sum\frac1n;\quad x=-1:\sum\frac{(-1)^n}{n}
$$

Combine the endpoint results.

$$
\text{The convergence interval is }[-1,1)
$$

### Interactive diagram

Outside the radius, do the polynomial graphs still approach the same function?

Compare $\sum_{n=0}^{N-1}x^n$ with $\frac1{1-x}$ and mark the convergence radius.

Online diagram: #/lesson/c2-power-series?view=visual

### Guided experiment

1. **Near the center** Set input to 0.5 and count to 10.

Preset observation: Inside the radius, partial sums approach 2.

2. **Near the boundary** Set input to 0.95 and count to 10.

Preset observation: Convergence still holds, but similar accuracy takes more terms.

3. **Outside the radius** Set input to -1.2 and count to 20.

Preset observation: Partial sums oscillate with growing magnitude and do not equal the rational function.

### Worked examples

#### Example 1: A shifted center

Find the convergence interval of $\sum_{n=0}^\infty\frac{(x-2)^n}{3^n}$.

- The ratio is $\frac{x-2}{3}$; its magnitude must be below one.
- This gives $-1<x<5$; at endpoints the ratios are plus or minus one, so terms do not vanish.

**Answer: $(-1,5)$; center 2, radius 3.**

#### Example 2: Both endpoints included

Find the convergence interval of $\sum_{n=1}^\infty\frac{x^n}{n^2}$.

- The ratio limit is $|x|$, giving radius 1.
- At either endpoint, absolute values form the reciprocal-square series, so both converge.

**Answer: $[-1,1]$.**

### Common mistakes

- **The radius equals the interval's length.** The radius is distance from the center; the open interval has twice that length.

- **Finding the radius finishes the problem.** For a finite radius, test both endpoints individually.

### Exercises and solutions

**1. Find the radius of $\sum(2x)^n$.**

Hint: Require the geometric ratio's magnitude below one.

Answer: $\frac12$.

- $|2x|<1$; the radius is $\frac12$, and both endpoints diverge.

**2. Find the radius of $\sum\frac{x^n}{n!}$.**

Hint: Fix the input before taking the ratio limit.

Answer: $\infty$.

- The ratio is $\frac{|x|}{n+1}\to0$; every finite input gives convergence.

**3. Find the radius of $\sum n!x^n$.**

Hint: Check nonzero inputs.

Answer: $0$.

- For nonzero input, the ratio is $(n+1)|x|\to\infty$; only center zero converges.

**4. Find the convergence interval of $\sum\frac{(x-1)^n}{n}$.**

Hint: Find the open interval, then test left and right endpoints.

Answer: $[0,2)$.

- $|x-1|<1$; the left endpoint is alternating harmonic, the right harmonic.

Prerequisites: Absolute and conditional convergence, Ratio and root tests.

## 5.3 Differentiating and integrating power series

*Operate term by term inside the convergence radius*

### The idea

Inside the convergence interval, power series can be differentiated and integrated term by term. The radius stays the same; endpoints may change.

### Intuition

Integrating a geometric series gives a logarithm; differentiating it gives another rational-function expansion.

### Another explanation

Use a reliable expansion to build others through substitution, differentiation and integration, always tracking the valid range.

### Quick check

After termwise differentiation, what happens to the radius and endpoints?

A. Same radius; check endpoints again
B. Both remain unchanged
C. The radius must decrease

Answer: A. The interior is guaranteed; boundaries need a new test.

### Why emphasize the interior?

Arbitrary function series cannot be differentiated term by term. A power series and its derivative series converge uniformly on every closed interval strictly inside the radius, justifying differentiation. Uniform convergence of the original justifies integration. One term count controls all inputs in that interval at once.

### Determining the integration constant

Integrate from the center or use a known function value to determine the constant. Do not lose the constant term.

### What happens at endpoints?

Integration may gain endpoint convergence; differentiation may lose it. Substitute the endpoints again.

### Definition and conditions

Operate term by term inside the convergence radius

$$
\frac d{dx}\sum_{n=0}^\infty c_n(x-a)^n=\sum_{n=1}^\infty nc_n(x-a)^{n-1}\quad(|x-a|<R)
$$

- The original radius is $R>0$. Termwise integration is initially guaranteed only on the open interval; check boundaries separately.

### Derivation

Start with a convergent geometric series.

$$
\frac1{1-t}=\sum_{n=0}^\infty t^n\quad(|t|<1)
$$

Integrate term by term from the center to the input.

$$
-\ln(1-x)=\sum_{n=0}^\infty\frac{x^{n+1}}{n+1}\quad(|x|<1)
$$

Alternatively, differentiate to obtain a new expansion.

$$
\frac1{(1-x)^2}=\sum_{n=1}^\infty nx^{n-1}\quad(|x|<1)
$$

### Interactive diagram

Outside the radius, do the polynomial graphs still approach the same function?

Compare $\sum_{n=0}^{N-1}x^n$ with $\frac1{1-x}$ and mark the convergence radius.

Online diagram: #/lesson/c2-power-operations?view=visual

### Guided experiment

1. **Near the center** Set input to 0.5 and count to 10.

Preset observation: Inside the radius, partial sums approach 2.

2. **Near the boundary** Set input to 0.95 and count to 10.

Preset observation: Convergence holds, but similar accuracy takes more terms.

3. **Outside the radius** Set input to -1.2 and count to 20.

Preset observation: Partial sums oscillate with growing magnitude, unlike the rational function's value.

### Worked examples

#### Example 1: The arctangent series

Derive the expansion of $\arctan x$ on $|x|<1$ from a geometric series.

- $\frac1{1+t^2}=\sum_{n=0}^\infty(-1)^nt^{2n}$.
- Integrate from 0 to $x$; use $\arctan0=0$ to set the constant.

**Answer: $\arctan x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{2n+1}$.**

#### Example 2: A weighted sum

Evaluate $\sum_{n=1}^\infty\frac n{2^n}$.

- Termwise differentiation gives $\sum n x^{n-1}=\frac1{(1-x)^2}$.
- Multiply by $x$, then substitute $x=\frac12$.

**Answer: $2$.**

### Common mistakes

- **Every infinite sum can be differentiated term by term.** Convergence hypotheses are needed; here the guarantee applies to power series inside their radius.

- **The differentiated series retains the same endpoints.** The radius stays the same, but endpoint behavior may change.

### Exercises and solutions

**1. Evaluate $\sum_{n=1}^\infty n(\frac13)^n$.**

Hint: Use the derivative of a geometric series.

Answer: $\frac34$.

- $\sum nx^n=\frac{x}{(1-x)^2}$; substituting $\frac13$ gives $\frac34$.

**2. Find the first four nonzero terms of the expansion of $\ln(1+x)$ at zero.**

Hint: Integrate a geometric series with negative ratio.

Answer: $x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}$.

- $\frac1{1+t}=1-t+t^2-t^3+\cdots$; integrate term by term from zero.

**3. The series $\sum\frac{x^n}{n^2}$ converges at $x=1$. What about its derivative there?**

Hint: Inspect the derivative terms.

Answer: It diverges.

- At 1 the derivative series is $\sum\frac1n$, the harmonic series.

**4. From $\frac1{1-x}$, obtain an expansion and range for $\frac1{1-x^2}$.**

Hint: Replace the input by its square.

Answer: $\sum_{n=0}^\infty x^{2n}$, $|x|<1$.

- The ratio is $x^2$, requiring $|x^2|<1$.

Prerequisites: Power series and convergence intervals.

## 5.4 Taylor polynomials

*Match a function's derivatives at one point*

### The idea

A Taylor polynomial matches the value and first few derivatives at its center. This local agreement does not guarantee accuracy far away.

### Intuition

The linear term matches slope; the quadratic term matches curvature. Higher terms match higher derivatives, with factorials cancelling differentiation factors.

### Another explanation

Build a local substitute: match value, then slope, curvature and successive derivatives.

### Quick check

What is a Taylor polynomial's quadratic coefficient?

A. $f^{(2)}(a)$
B. $\frac{f^{(2)}(a)}{2}$
C. $2f^{(2)}(a)$

Answer: B. Twice differentiating the quadratic term introduces a factor of two.

### Why divide by a factorial?

The $k$th derivative of $c_k(x-a)^k$ at the center leaves $k!c_k$. Divide by $k!$ to match the corresponding derivative of the function.

### Is Maclaurin a different method?

It is simply Taylor expansion centered at zero, with the same formula and reasoning.

### Polynomial versus infinite series

A finite Taylor polynomial exists when the required derivatives exist. Equality with the infinite series additionally requires the remainder to vanish.

### Definition and conditions

Match a function's derivatives at one point

$$
T_m(x)=\sum_{k=0}^m\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

- $f$ has derivatives through order $m$ at the center. Estimate the remainder separately to establish accuracy.

### Derivation

Write a candidate polynomial.

$$
P(x)=c_0+c_1(x-a)+\cdots+c_m(x-a)^m
$$

Differentiate repeatedly at the center to isolate each coefficient.

$$
P^{(k)}(a)=k!c_k
$$

Match these derivatives with the original function.

$$
c_k=\frac{f^{(k)}(a)}{k!}
$$

### Interactive diagram

Does raising the order give the same accuracy far away as near the center?

Compare $e^x$ with finite expansions centered at zero and read the error.

Online diagram: #/lesson/c2-taylor?view=visual

### Guided experiment

1. **Low order** Set order to 2 and input to 0.5.

Preset observation: The finite polynomial matches low-order derivatives; the readout shows its actual error.

2. **Increase the order** Set order to 6, keeping input 0.5.

Preset observation: Observe how the actual error changes at this input.

3. **Farther from the center** Set order to 10 and input to 0.9.

Preset observation: Accuracy depends on input and function; range and remainder conditions still matter.

### Worked examples

#### Example 1: Exponential derivatives

Find the cubic Taylor polynomial of $e^x$ at zero.

- Every derivative at zero is 1.
- Divide each coefficient by $0!,1!,2!,3!$.

**Answer: $T_3=1+x+\frac{x^2}{2}+\frac{x^3}{6}$.**

#### Example 2: A different center

Find the quadratic Taylor polynomial of $\ln x$ at $a=1$.

- $f(1)=0,f\prime(1)=1,f^{(2)}(1)=-1$.
- Expand around 1 using $x-1$, not $x$.

**Answer: $T_2=(x-1)-\frac12(x-1)^2$.**

### Common mistakes

- **The quadratic coefficient is simply the second derivative.** It must also be divided by $2!$.

- **Matching more derivatives guarantees better accuracy everywhere.** The information is local. Use a remainder estimate away from the center.

### Exercises and solutions

**1. Find the cubic Maclaurin polynomial of $\sin x$.**

Hint: Compute derivatives at zero.

Answer: $x-\frac{x^3}{6}$.

- The constant and quadratic coefficients vanish; the first derivative is 1 and the third is $-1$.

**2. Find the fourth-degree Maclaurin polynomial of $\cos x$.**

Hint: Odd derivatives vanish at zero.

Answer: $1-\frac{x^2}{2}+\frac{x^4}{24}$.

- Even derivatives are $1,-1,1$; divide by their factorials.

**3. Given $f(2)=3,f\prime(2)=-1,f^{(2)}(2)=4$, write the quadratic expansion.**

Hint: Keep the center shift and factorial.

Answer: $3-(x-2)+2(x-2)^2$.

- The coefficients are $3,-1,\frac4{2!}=2$.

**4. Use the quadratic expansion of $e^x$ to estimate $e^{0.1}$.**

Hint: Substitute into the finite polynomial.

Answer: $1.105$, an approximation.

- $1+0.1+\frac{0.1^2}{2}=1.105$; its error needs a separate estimate.

Prerequisites: Differentiating and integrating power series, Linear Approximation and Differentials.

## Chapter review

Try independently before reading the solutions.

**1. Classify $\sum\frac{(-1)^n}{n^{2/3}}$.**

Hint: Test the signed and absolute-value series separately.

Answer: Conditionally convergent.

- Alternating magnitudes decrease to zero; the absolute-value exponent $\frac23\leq1$ gives divergence.

**2. Find the convergence interval of $\sum_{n=1}^\infty\frac{(x+2)^n}{2^n n}$.**

Hint: Find the open interval, then test both endpoints.

Answer: $[-4,0)$.

- $|x+2|<2$; left is alternating harmonic, right is harmonic.

**3. Given $f(1)=2,f\prime(1)=3,f^{(2)}(1)=-2$, find the quadratic Taylor polynomial.**

Hint: Keep the center shift and factorial.

Answer: $2+3(x-1)-(x-1)^2$.

- The quadratic coefficient is $-2/2!=-1$.

# Chapter 6 · Taylor expansions in calculation

Use remainders to control errors, transform basic expansions, and apply them to nonelementary integrals, limits and radical approximations.

Goals:
- Estimate Taylor remainders
- Transform standard expansions
- Use series for integrals and limits

## 6.1 Taylor remainders and error bounds

*Pair every approximation with an applicable bound*

### The idea

A Taylor polynomial gives an approximation; a bound on the next derivative limits its error.

### Intuition

Closer to the center, $(x-a)^{m+1}$ is smaller. Derivatives may be large, so distance alone is insufficient.

### Another explanation

Use the polynomial to calculate and the remainder to state how reliable that calculation is.

### Quick check

For a Taylor series to equal its function, what else is needed?

A. Infinitely many written terms suffice
B. The corresponding remainder tends to zero
C. Continuity alone

Answer: B. Finite derivative matching does not automatically establish an infinite representation.

### Where must the derivative be bounded?

Throughout the interval from center to target, not just at the center.

### Choosing the order

Bound the derivative on the interval, then require the remainder bound below tolerance. The derivative bound may change with order.

### Does infinite smoothness guarantee equality with the series?

No. Define $f(x)=e^{-1/x^2}$ away from zero and $f(0)=0$. Every derivative at zero vanishes, but the function is positive elsewhere. Its Taylor series does not represent it. Away from zero, each derivative is a polynomial in $x^{-1}$ times $e^{-1/x^2}$. Exponential decay beats every negative power, allowing continuous extension of every derivative by zero.

### Definition and conditions

Pair every approximation with an applicable bound

$$
f(x)=T_m(x)+R_m(x),\quad R_m(x)=\frac{f^{(m+1)}(\xi)}{(m+1)!}(x-a)^{m+1},\quad |R_m(x)|\leq\frac{M|x-a|^{m+1}}{(m+1)!}
$$

- $f$ has a continuous derivative of order $m+1$ on an interval containing $a,x$. The point $\xi$ lies between the endpoints, and $M$ bounds that derivative throughout.

### Derivation

The remainder is the function minus its matching polynomial.

$$
R_m(x)=f(x)-T_m(x)
$$

Taylor's theorem expresses it using a higher derivative at an intermediate point.

$$
R_m(x)=\frac{f^{(m+1)}(\xi)}{(m+1)!}(x-a)^{m+1}
$$

Take absolute values and use a uniform derivative bound.

$$
|f(x)-T_m(x)|\leq\frac{M|x-a|^{m+1}}{(m+1)!}
$$

### Interactive diagram

Does raising the order give the same accuracy far away as near the center?

Compare $e^x$ with finite expansions centered at zero and read the error.

Online diagram: #/lesson/c2-taylor-error?view=visual

### Guided experiment

1. **Low order** Set order to 2 and input to 0.5.

Preset observation: The finite polynomial matches low-order derivatives; the readout shows its actual error.

2. **Increase the order** Set order to 6, keeping input 0.5.

Preset observation: Observe how the actual error changes at this input.

3. **Farther from the center** Set order to 10 and input to 0.9.

Preset observation: Accuracy depends on input and function; range and remainder conditions still matter.

### Worked examples

#### Example 1: Bounding an exponential approximation

Approximate $e^{0.1}$ by its quadratic Maclaurin polynomial and bound the error.

- On $[0,0.1]$, its third derivative satisfies $e^t\leq e^{0.1}<1.106$.
- The error is below $\frac{1.106(0.1)^3}{6}<0.000185$.

**Answer: Approximation $1.105$, with error below $0.000185$.**

#### Example 2: A cubic sine approximation

Use $x-\frac{x^3}{6}$ to estimate $\sin0.2$, with a guarantee.

- Regard it as the fourth-degree Taylor polynomial: the fourth-degree coefficient is zero.
- The fifth derivative has magnitude at most 1, giving error at most $\frac{0.2^5}{120}$.

**Answer: Error at most $0.000002667$.**

### Common mistakes

- **Only the center's derivative matters for the bound.** The intermediate point is unknown; bound the derivative over the whole interval.

- **Existing derivatives of every order guarantee equality with the Taylor series.** You must also prove the remainder tends to zero.

### Exercises and solutions

**1. Use $1-\frac{x^2}{2}$ for $\cos0.1$. Regard it as a cubic Taylor polynomial, with fourth-derivative bound $M_4=1$. What Lagrange error bound follows?**

Hint: Regard it as a cubic polynomial.

Answer: At most $\frac{0.1^4}{24}$.

- The fourth derivative is cosine, of magnitude at most 1. Insert this into the bound.

**2. Use $1+x$ to estimate $e^x$. What error bound holds on $|x|\leq0.1$?**

Hint: The second derivative is bounded throughout the interval.

Answer: At most $\frac{e^{0.1}}2x^2$, with uniform bound $\frac{e^{0.1}}{200}$.

- $|f^{(2)}(t)|=e^t\leq e^{0.1}$; use the first-order remainder bound.

**3. On $[0,1]$, bound the remainder of the fourth-degree Maclaurin polynomial for $e^x$ uniformly.**

Hint: The fifth derivative is again exponential.

Answer: $\frac e{120}$.

- $e^t\leq e$ and $|x|^5\leq1$, so $|R_4|\leq\frac e{5!}$.

**4. Can overlapping curves in a graph replace a remainder proof?**

Hint: The graph has finite range and sampling.

Answer: No.

- Agreement at the displayed resolution is not a guarantee. Check the theorem's hypotheses and bound.

Prerequisites: Taylor polynomials, Rolle's Theorem and the Mean Value Theorem.

## 6.2 Standard Taylor series

*Build from a few basic expansions*

### The idea

Exponential, sine, cosine, geometric and logarithmic expansions generate many others by substitution and calculus. Keep each convergence range.

### Intuition

You rarely need ten fresh derivatives. Substituting into a familiar expansion often suffices.

### Another explanation

A few well-understood expansions and valid transformations are easier to retain than disconnected formulas.

### Quick check

What is the fourth-degree term of $e^{-x^2}$?

A. $-x^4$
B. $\frac{x^4}{2}$
C. $\frac{x^2}{2}$

Answer: B. The exponential's quadratic term is the squared input divided by two.

### Which work everywhere?

The exponential, sine and cosine Maclaurin series converge to their functions at every finite real input, as vanishing remainders show.

### Which have boundaries?

The geometric series works on $|x|<1$; logarithm $\ln(1+x)$ on $-1<x\leq1$; arctangent on $[-1,1]$. Endpoint identification for logarithm and arctangent needs a remainder argument or Abel's continuity theorem, not interior termwise integration alone.

### Substituting inputs

Replace the entire input and transform the range too. For example, the zero-centered expansion of $\ln(1+x^2)$ works on $|x|\leq1$.

### Definition and conditions

Build from a few basic expansions

$$
e^x=\sum_{n=0}^\infty\frac{x^n}{n!},\quad\sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\quad\ln(1+x)=\sum_{n=1}^\infty\frac{(-1)^{n-1}x^n}{n}
$$

- The first two formulas hold for all real inputs; the logarithmic formula requires $-1<x\leq1$. Cosine is $\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!}$, for all real inputs.

### Derivation

All exponential derivatives at zero equal one.

$$
T_m(x)=\sum_{n=0}^m\frac{x^n}{n!}
$$

For a fixed finite input, factorial growth drives the remainder to zero.

$$
|R_m(x)|\leq e^{|x|}\frac{|x|^{m+1}}{(m+1)!}\to0
$$

Integrate the geometric series for logarithm, first inside the radius.

$$
\ln(1+x)=\int_0^x\frac{dt}{1+t}=\sum_{n=1}^\infty\frac{(-1)^{n-1}x^n}{n}\quad(|x|<1)
$$

### Interactive diagram

Does raising the order give the same accuracy far away as near the center?

Compare $\sin x$ with finite zero-centered expansions and read the error.

Online diagram: #/lesson/c2-standard-series?view=visual

### Guided experiment

1. **Low order** Set order to 2 and input to 0.5.

Preset observation: The finite polynomial matches low-order derivatives; the readout shows its actual error.

2. **Increase the order** Set order to 6, keeping input 0.5.

Preset observation: Observe how the actual error changes at this input.

3. **Farther from the center** Set order to 10 and input to 0.9.

Preset observation: Accuracy depends on input and function; range and remainder conditions still matter.

### Worked examples

#### Example 1: Substitute a square

Find the first four nonzero terms of $e^{-x^2}$.

- Replace the exponential series input by $-x^2$.
- The terms are $1,-x^2,\frac{x^4}{2},-\frac{x^6}{6}$.

**Answer: $1-x^2+\frac{x^4}{2}-\frac{x^6}{6}+\cdots$, for every real input.**

#### Example 2: A logarithmic endpoint

Find the convergence range of the zero-centered series for $\ln(1+2x)$.

- The input $u=2x$ must satisfy $-1<u\leq1$.
- The series is $\sum_{n=1}^\infty\frac{(-1)^{n-1}(2x)^n}{n}$.

**Answer: $-\frac12<x\leq\frac12$.**

### Common mistakes

- **Correct coefficients allow every input.** Transform and check the convergence range too.

- **Squaring the input leaves term powers unchanged.** Substitute the whole expression into every power, including its sign.

### Exercises and solutions

**1. Find the first three nonzero terms of $\cos(2x)$.**

Hint: Replace the entire input by twice the input.

Answer: $1-2x^2+\frac23x^4$.

- $1-\frac{(2x)^2}{2!}+\frac{(2x)^4}{4!}$.

**2. Find the zero-centered expansion of $\frac1{1+x^2}$.**

Hint: The ratio is a negative square.

Answer: $\sum_{n=0}^\infty(-1)^nx^{2n}$, $|x|<1$.

- The geometric ratio $-x^2$ must have magnitude below one.

**3. Find the first three nonzero terms of $\arctan x$.**

Hint: Integrate the previous expansion.

Answer: $x-\frac{x^3}{3}+\frac{x^5}{5}$.

- Integrate from 0 term by term. It is guaranteed on $|x|<1$; handle endpoints using convergence and a boundary theorem.

**4. What are the constant and linear coefficients of $e^x$ at $x=0$?**

Hint: Check function value and derivative separately.

Answer: Both are 1.

- $e^0=1$, $f\prime(0)=1$; the expansion does not start at power one.

Prerequisites: Taylor remainders and error bounds, Differentiating and integrating power series.

## 6.3 Using series for integrals and limits

*Replace difficult functions by integrable powers*

### The idea

Series approximate integrals without elementary antiderivatives and reveal the first surviving term in a limit.

### Intuition

Low-order cancellation can hide a limit. Expansion exposes the first term that remains.

### Another explanation

Expansion organizes contributions by size. Retain terms according to the calculation and allowed error.

### Quick check

After low-order cancellation in a limit, focus on what?

A. The first uncancelled term and the remainder
B. Substitution of zero alone
C. Deleting every small quantity

Answer: A. Order relative to the denominator determines which small terms matter.

### When can integration be termwise?

On closed intervals inside a power series' radius. Reaching a boundary requires additional justification.

### Bounding the approximation

If integrated terms alternate with decreasing magnitudes tending to zero, use the next-term bound. Otherwise integrate a remainder or use another valid bound.

### How far should you expand?

Continue to the first uncancelled term relevant to the denominator, then control the remaining terms. Here $O(x^k)$ means the remainder's magnitude near zero is at most a fixed constant times $|x|^k$.

### Definition and conditions

Replace difficult functions by integrable powers

$$
\int_0^x e^{-t^2}dt=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{n!(2n+1)}
$$

- The exponential series has infinite radius and can be integrated termwise over any finite interval. Check decreasing magnitudes separately for an error bound.

### Derivation

Expand the integrand.

$$
e^{-t^2}=1-t^2+\frac{t^4}{2!}-\frac{t^6}{3!}+\cdots
$$

Integrate term by term on the finite interval.

$$
\int_0^x e^{-t^2}dt=x-\frac{x^3}{3}+\frac{x^5}{10}-\frac{x^7}{42}+\cdots
$$

On inputs from zero to one, the integrated magnitudes decrease, allowing the next-term bound.

$$
|R|\leq\frac{x^{2N+3}}{(N+1)!(2N+3)}\quad(0\leq x\leq1)
$$

### Interactive diagram

Does raising the order give the same accuracy far away as near the center?

Compare $e^{-x^2}$ with finite zero-centered expansions and read the error.

Online diagram: #/lesson/c2-series-applications?view=visual

### Guided experiment

1. **Low order** Set order to 2 and input to 0.5.

Preset observation: The finite polynomial matches low-order derivatives; the readout shows its actual error.

2. **Increase the order** Set order to 6, keeping input 0.5.

Preset observation: Observe how the actual error changes at this input.

3. **Farther from the center** Set order to 10 and input to 0.9.

Preset observation: Accuracy depends on input and function; range and remainder conditions still matter.

### Worked examples

#### Example 1: A nonelementary integral

Approximate $\int_0^1e^{-t^2}dt$, retaining terms through $t^4$.

- Integrating three terms gives $1-\frac13+\frac1{10}=\frac{23}{30}$.
- The next magnitude is $\frac1{42}$; the negative remainder places the true value in $[\frac{23}{30}-\frac1{42},\frac{23}{30}]$.

**Answer: Approximation $\frac{23}{30}$, error at most $\frac1{42}$.**

#### Example 2: A limit after cancellation

Find $\lim_{x\to0}\frac{\sin x-x}{x^3}$.

- $\sin x=x-\frac{x^3}{6}+O(x^5)$.
- Cancel the linear term and divide by $x^3$; higher-order remainders vanish.

**Answer: $-\frac16$.**

### Common mistakes

- **An ellipsis is an error estimate.** Specify the remainder's order or a numerical bound.

- **No elementary antiderivative means no integral.** Series and numerical methods can still calculate with controlled error.

### Exercises and solutions

**1. Find $\lim_{x\to0}\frac{1-\cos x}{x^2}$.**

Hint: Find the first nonzero term.

Answer: $\frac12$.

- $1-\cos x=\frac{x^2}{2}+O(x^4)$; after division, the remainder vanishes.

**2. Use two terms to approximate $\int_0^{1/2}e^{-t^2}dt$.**

Hint: Integrate the constant and quadratic terms.

Answer: $\frac{11}{24}$, with error at most $\frac1{320}$.

- $x-\frac{x^3}{3}$ on $x=\frac12$ gives $\frac{11}{24}$; the next term is $\frac{x^5}{10}=\frac1{320}$.

**3. Find $\lim_{x\to0}\frac{e^x-1-x}{x^2}$.**

Hint: Retain the quadratic term.

Answer: $\frac12$.

- $e^x=1+x+\frac{x^2}{2}+O(x^3)$; cancel the first two terms.

**4. When approximating an integrand by $1-t^2+\frac{t^4}{2}$, can you just substitute the upper limit?**

Hint: A function value is not an accumulated integral.

Answer: No; integrate each term.

- Integration raises each power and divides by the new exponent: $x-\frac{x^3}{3}+\frac{x^5}{10}$.

Prerequisites: Standard Taylor series, Alternating series and error.

## 6.4 The generalized binomial series

*Expand noninteger powers locally*

### The idea

Binomial coefficients extend to any real exponent. Nonnegative integer exponents terminate; others generally yield infinite series with limited convergence ranges.

### Intuition

Square roots can be approximated by polynomial terms, but this expansion works only near its center.

### Another explanation

The infinite binomial extension comes with a range that must accompany its formula.

### Quick check

Which exponents guarantee termination?

A. Every integer
B. Nonnegative integers
C. Every real number

Answer: B. Only nonnegative integers introduce a zero factor in the descending product.

### Defining the coefficients

Multiply descending factors from the exponent, then divide by a factorial. The zeroth coefficient is one; no fractional or negative factorial is needed.

### The valid range

For any real exponent, the series represents $(1+x)^\alpha$ on $|x|<1$; check endpoints separately. For a nonnegative integer, the finite polynomial identity has no radius restriction.

### Checking an approximation

At the center, check the constant and derivative coefficients. For guaranteed accuracy, use a Taylor remainder rather than merely small terms.

### Definition and conditions

Expand noninteger powers locally

$$
(1+x)^\alpha=\sum_{n=0}^\infty{\alpha\choose n}x^n,\quad{\alpha\choose n}=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!},\quad{\alpha\choose0}=1
$$

- $\alpha\in\mathbb R$, $|x|<1$. For a nonnegative integer, termination gives a polynomial identity valid for all real inputs.

### Derivation

Compute derivatives of the power function at zero.

$$
f^{(n)}(0)=\alpha(\alpha-1)\cdots(\alpha-n+1)
$$

Divide by factorials to obtain Taylor coefficients.

$$
(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+\cdots
$$

For a nonterminating series, the absolute consecutive ratio tends to the input's magnitude. The binomial theorem identifies the represented function.

$$
\left|\frac{a_{n+1}}{a_n}\right|=\left|\frac{\alpha-n}{n+1}x\right|\to|x|
$$

### Interactive diagram

Does raising the order give the same accuracy far away as near the center?

Compare $\sqrt{1+x}$ with finite zero-centered expansions and read the error.

Online diagram: #/lesson/c2-binomial?view=visual

### Guided experiment

1. **Low order** Set order to 2 and input to 0.5.

Preset observation: The finite polynomial matches low-order derivatives; the readout shows its actual error.

2. **Increase the order** Set order to 6, keeping input 0.5.

Preset observation: Observe how the actual error changes at this input.

3. **Farther from the center** Set order to 10 and input to 0.9.

Preset observation: Accuracy depends on input and function; range and remainder conditions still matter.

### Worked examples

#### Example 1: Square root

Find the quadratic approximation of $\sqrt{1+x}$.

- $\alpha=\frac12$; the linear coefficient is $\frac12$.
- The quadratic coefficient is $\frac{(1/2)(-1/2)}2=-\frac18$.

**Answer: $1+\frac x2-\frac{x^2}{8}$.**

#### Example 2: Negative integer powers do not terminate

Expand $\frac1{(1+x)^2}$.

- $\alpha=-2$; successive coefficients are $1,-2,3,-4,\ldots$.
- The general coefficient is $(-1)^n(n+1)$, valid on $|x|<1$.

**Answer: $\sum_{n=0}^\infty(-1)^n(n+1)x^n$.**

### Common mistakes

- **Every integer exponent gives termination.** Only nonnegative integers terminate; negative integers generally give infinite series.

- **A radical's domain equals its expansion's convergence interval.** The function may exist on a larger domain than this particular centered expansion.

### Exercises and solutions

**1. Expand $(1+x)^3$.**

Hint: A nonnegative integer terminates.

Answer: $1+3x+3x^2+x^3$.

- Coefficients from degree four onward contain a zero factor and vanish.

**2. Find the first three terms of $(1+x)^{-1/2}$.**

Hint: Use the generalized coefficients.

Answer: $1-\frac x2+\frac{3x^2}{8}$.

- The quadratic coefficient is $\frac{(-1/2)(-3/2)}2=\frac38$.

**3. Use a quadratic expansion to estimate $\sqrt{1.04}$.**

Hint: Take the small increment as 0.04.

Answer: $1.0198$.

- $1+\frac{0.04}{2}-\frac{0.04^2}{8}=1.0198$; this remains approximate.

**4. Can $x=2$ be substituted in the zero-centered infinite expansion of $\sqrt{1+x}$?**

Hint: Existence of the function does not validate this expansion.

Answer: Not directly: it is outside the convergence radius.

- The noninteger binomial series centered at zero has radius 1; input 2 lies outside.

Prerequisites: Standard Taylor series.

## Chapter review

Try independently before reading the solutions.

**1. Approximate $e^{0.2}$ with a cubic polynomial and give a Taylor error bound.**

Hint: Bound the fourth derivative throughout the interval.

Answer: At most $e^{0.2}\frac{0.2^4}{24}$.

- On $[0,0.2]$, $f^{(4)}\leq e^{0.2}$; insert it into the cubic remainder.

**2. Find $\lim_{x\to0}\frac{\tan x-x}{x^3}$.**

Hint: Expand sine and cosine, then divide.

Answer: $\frac13$.

- $\tan x=(x-\frac{x^3}{6}+O(x^5))(1+\frac{x^2}{2}+O(x^4))=x+\frac{x^3}{3}+O(x^5)$.

**3. Find the quadratic expansion and basic valid range of $(1+2x)^{1/2}$.**

Hint: Replace the entire input.

Answer: $1+x-\frac{x^2}{2}$; the infinite expansion is initially guaranteed on $|x|<\frac12$.

- Replace the square-root expansion's increment by $2x$; check endpoints separately.

# Chapter 7 · Parametric curves and polar coordinates

Parameters determine position, direction and repetitions. Check tracing ranges before computing tangents, arc lengths or sector areas.

Goals:
- Read parametric motion
- Compute tangents and arc length
- Handle polar coordinates and swept areas

## 7.1 Parametric equations and motion

*Use one parameter to determine both coordinates*

### The idea

Parametric equations specify how a point moves. The same geometric curve can have different directions and speeds.

### Intuition

$x=\cos t,y=\sin t$ describes a circle and also its starting point, direction and traversal time.

### Another explanation

A curve is the trace; its parametrization also describes how that trace is traveled.

### Quick check

What can eliminating the parameter lose?

A. The geometric equation
B. Direction and repetition count
C. All coordinate relations

Answer: B. The parameter interval and rate carry extra motion information.

### Is eliminating the parameter enough?

It reveals a geometric equation but loses direction, start, range and repeated tracing. State the parameter interval too.

### Must the parameter be time?

It may be time, angle or another quantity. Derivatives have velocity units only if it represents time.

### What does negative velocity mean?

A coordinate derivative may be negative, indicating motion against that axis. Speed is the nonnegative length of the velocity vector.

### Definition and conditions

Use one parameter to determine both coordinates

$$
\mathbf r(t)=(x(t),y(t)),\quad\mathbf v(t)=(x\prime(t),y\prime(t)),\quad v(t)=\sqrt{x\prime(t)^2+y\prime(t)^2}
$$

- Coordinate functions are differentiable on the interval. Interpret units according to the parameter.

### Derivation

Describe a circle point with two coordinates.

$$
x=\cos t,\quad y=\sin t
$$

Square and add to identify the geometric locus.

$$
x^2+y^2=1
$$

Derivatives retain the motion information.

$$
\mathbf v=(-\sin t,\cos t),\quad v=1
$$

### Interactive diagram

Is speed constant around this ellipse?

Move along the ellipse $(2\cos t,\sin t)$, displaying velocity and parameter position.

Online diagram: #/lesson/c2-parametric?view=visual

### Guided experiment

1. **Rightmost point** Set the parameter to 0.

Preset observation: The point is $(2,0)$, speed is 1 and the tangent is vertical.

2. **Top point** Set the parameter to 1.5707963267948966.

Preset observation: The point is $(0,1)$, speed is 2 and the tangent is horizontal.

3. **Leftmost point** Set the parameter to 3.141592653589793.

Preset observation: The point is $(-2,0)$; speed returns to 1 and motion remains counterclockwise.

### Worked examples

#### Example 1: Parametrizing an ellipse

For $x=2\cos t,y=\sin t$, $0\leq t\leq2\pi$, describe the path and direction.

- Elimination gives $\frac{x^2}{4}+y^2=1$.
- Start at $(2,0)$ with initial velocity $(0,1)$; traverse once counterclockwise.

**Answer: An ellipse with horizontal semiaxis 2 and vertical semiaxis 1, traversed counterclockwise.**

#### Example 2: Same path, different speed

How many turns does $x=\cos2t,y=\sin2t$ make on $0\leq t\leq2\pi$?

- The geometric equation is still the unit circle.
- The angle runs from zero to $4\pi$; speed is 2.

**Answer: Two counterclockwise turns.**

### Common mistakes

- **The same eliminated equation means the same motion.** Direction, speed and repetition may all differ.

- **A coordinate derivative is the speed.** Speed is the square root of the sum of squared coordinate derivatives.

### Exercises and solutions

**1. What is the path of $x=t,y=t^2$?**

Hint: Replace the parameter by the horizontal coordinate.

Answer: A parabola.

- $y=x^2$; over all real parameters the point travels left to right.

**2. What is the direction of $x=\cos t,y=-\sin t$?**

Hint: Check the initial velocity.

Answer: Clockwise.

- Starting at $(1,0)$, velocity $(0,-1)$ initially points downward.

**3. Find the speed of $x=3t,y=4t$.**

Hint: Take the velocity vector's length.

Answer: $5$.

- $\sqrt{3^2+4^2}=5$.

**4. Which portion does $x=\cos t,y=\sin t$, $0\leq t\leq\pi$ trace?**

Hint: Check the sine's sign on the interval.

Answer: The upper semicircle, from right to left.

- $\sin t\geq0$; the endpoints are $(1,0)$ and $(-1,0)$.

Prerequisites: Trigonometric Functions and Radians, Basic Differentiation Rules.

## 7.2 Tangents and arc length of parametric curves

*Differentiate with respect to the parameter first*

### The idea

Parametric slope is vertical rate divided by horizontal rate. Arc length accumulates speed.

### Intuition

Over a short time, displacement has components $dx$ and $dy$. Slope uses their ratio; distance uses their Pythagorean length.

### Another explanation

Compute rates per unit parameter, then convert to rise per unit horizontal displacement.

### Quick check

How is the parametric second derivative calculated?

A. Divide the two second parameter derivatives
B. Differentiate slope in the parameter, then divide by the horizontal derivative
C. Only differentiate slope in the parameter

Answer: B. The extra division changes the differentiation variable back to horizontal position.

### What if the horizontal derivative is zero?

A nonzero vertical derivative gives a vertical tangent. If both vanish, analyze the local path separately; the quotient formula fails.

### Computing the second derivative

Differentiate the slope with respect to the parameter, then divide by $x\prime(t)$. The parameter derivative alone is not enough.

### Can arc length count repetitions?

If the path retraces a segment, the integral measures total travel. To measure the geometric curve once, choose a nonrepeating interval.

### Area in parametric form

Replace $dx$ by $x\prime(t)dt$: $\int y\,dx=\int y(t)x\prime(t)dt$. Increasing horizontal coordinate and nonnegative height give area beneath the curve. Reverse direction when the horizontal coordinate decreases; split at reversals and sign changes. Signed accumulation is not automatically geometric area.

### Definition and conditions

Differentiate with respect to the parameter first

$$
\frac{dy}{dx}=\frac{y\prime(t)}{x\prime(t)},\quad\frac{d^2y}{dx^2}=\frac1{x\prime(t)}\frac d{dt}\left(\frac{y\prime(t)}{x\prime(t)}\right),\quad L=\int_\alpha^\beta\sqrt{x\prime(t)^2+y\prime(t)^2}\,dt
$$

- Slope and second-derivative formulas require $x\prime(t)\neq0$ and sufficient smoothness. Arc length requires piecewise continuous differentiability; check repeated tracing.

### Derivation

Use the chain rule to relate parameter and horizontal coordinate.

$$
\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt}
$$

Combine the two displacement components for distance.

$$
ds=\sqrt{dx^2+dy^2}=\sqrt{x\prime(t)^2+y\prime(t)^2}\,dt
$$

Accumulate over the parameter interval.

$$
L=\int_\alpha^\beta v(t)dt
$$

### Interactive diagram

Is speed constant around this ellipse?

Move along the ellipse $(2\cos t,\sin t)$, displaying velocity and parameter position.

Online diagram: #/lesson/c2-parametric-calculus?view=visual

### Guided experiment

1. **Rightmost point** Set the parameter to 0.

Preset observation: The point is $(2,0)$, speed is 1 and the tangent is vertical.

2. **Top point** Set the parameter to 1.5707963267948966.

Preset observation: The point is $(0,1)$, speed is 2 and the tangent is horizontal.

3. **Leftmost point** Set the parameter to 3.141592653589793.

Preset observation: The point is $(-2,0)$; speed returns to 1 and motion remains counterclockwise.

### Worked examples

#### Example 1: A parametric slope

For $x=t^2,y=t^3$, find slope and second derivative at $t=1$.

- $\frac{dy}{dx}=\frac{3t^2}{2t}=\frac32t$; here $t\neq0$.
- The second derivative is $\frac{3/2}{2t}=\frac3{4t}$.

**Answer: Slope $\frac32$; second derivative $\frac34$.**

#### Example 2: Length and area of the same semicircle

Find path length and upper-semicircle area for $x=\cos t,y=\sin t$, $0\leq t\leq\pi$.

- Speed is $\sqrt{\sin^2t+\cos^2t}=1$.
- $L=\int_0^\pi1dt=\pi$.
- The horizontal coordinate decreases from 1 to $-1$, so $\int_0^\pi y(t)x\prime(t)dt=-\int_0^\pi\sin^2t dt=-\frac\pi2$ is a negative directed integral.
- Height is nonnegative. Reverse horizontal direction for geometric area, giving $\frac\pi2$; check with the semicircle formula.

**Answer: Path length $\pi$; area $\frac\pi2$. They accumulate different pieces.**

### Common mistakes

- **The second derivative equals $\frac{y^{(2)}(t)}{x^{(2)}(t)}$.** Differentiate the slope in the parameter, then divide by the horizontal derivative.

- **Zero velocity means there is no tangent.** Failure of the quotient formula does not rule out a tangent; inspect the local path.

### Exercises and solutions

**1. Find the slope for $x=2t,y=t^2$ at $t=1$.**

Hint: Divide vertical derivative by horizontal derivative.

Answer: $1$.

- $\frac{2t}{2}=t$; substitution gives 1.

**2. For $x=2t,y=t^2$ at $t=1$, find the second derivative $d^2y/dx^2$.**

Hint: Divide again by the horizontal derivative.

Answer: $\frac12$.

- $\frac d{dt}(t)=1$; dividing by 2 gives $\frac12$.

**3. Find the length of $x=3t,y=4t$, $0\leq t\leq2$.**

Hint: Multiply constant speed by the parameter interval's length.

Answer: $10$.

- Speed is 5; $L=\int_0^2 5dt=10$.

**4. What tangent does the unit circle have at $t=0$?**

Hint: Check both coordinate derivatives.

Answer: A vertical tangent.

- $x\prime(0)=0$, $y\prime(0)=1$; at $(1,0)$ the tangent is $x=1$.

Prerequisites: Parametric equations and motion, Arc length and surface area of revolution.

## 7.3 Polar coordinates and curves

*Locate points using radius and direction*

### The idea

Polar coordinates give radius and angle. A negative radius moves opposite the stated direction.

### Intuition

One point has many polar representations. Different coordinate pairs need not represent different points.

### Another explanation

Cartesian coordinates specify horizontal and vertical moves; polar coordinates specify direction and distance on the same plane.

### Quick check

What does polar coordinate $r<0$ mean?

A. The point does not exist
B. Move opposite the angle's direction
C. The angle must be negative

Answer: B. Signed radius encodes a direction reversal.

### Converting to Cartesian coordinates

$x=r\cos\theta,y=r\sin\theta$. Distance from the origin is $|r|$, not always the signed $r$.

### Plotting a negative radius

Face the angle's direction, then move $|r|$ the opposite way. Equivalently, make the radius positive and add $\pi$ to the angle.

### Finding intersections

Equal radii at the same angle find some intersections. Also check negative-radius representations and the origin: a point can have different angles.

### Definition and conditions

Locate points using radius and direction

$$
x=r\cos\theta,\quad y=r\sin\theta,\quad(r,\theta)\sim(r,\theta+2\pi)\sim(-r,\theta+\pi)
$$

- Use radians. Any angle represents the origin when radius is zero. Recover angles using the correct quadrant.

### Derivation

Start with a direction unit vector.

$$
\mathbf e_\theta=(\cos\theta,\sin\theta)
$$

Multiply by the signed radius.

$$
(x,y)=r\mathbf e_\theta
$$

Reverse direction and radius sign together to keep the point unchanged.

$$
(-r)(\cos(\theta+\pi),\sin(\theta+\pi))=(r\cos\theta,r\sin\theta)
$$

### Interactive diagram

What relationship, if any, is there between half-turn swept area and half the radius?

Move along $r=1+\cos\theta$ and show the region swept from angle zero.

Online diagram: #/lesson/c2-polar?view=visual

### Guided experiment

1. **Starting point** Set the angle to 0.

Preset observation: The point is $(2,0)$; no area has been swept yet.

2. **Half a turn** Set the angle to 3.141592653589793.

Preset observation: The point returns to the origin, having swept upper-half area $\frac{3\pi}{4}$.

3. **A full turn** Set the angle to 6.283185307179586.

Preset observation: The full cardioid region has area $\frac{3\pi}{2}$.

### Worked examples

#### Example 1: A negative radius

Which point has polar coordinates $(-2,\frac\pi6)$?

- $x=-2\cos\frac\pi6=-\sqrt3$, $y=-2\sin\frac\pi6=-1$.
- It can also be written $(2,\frac{7\pi}{6})$.

**Answer: Cartesian coordinates $(-\sqrt3,-1)$.**

#### Example 2: A polar circle

What curve is $r=2\cos\theta$?

- Multiply by $r$ to obtain $r^2=2r\cos\theta$.
- Thus $x^2+y^2=2x$; completing the square gives $(x-1)^2+y^2=1$.

**Answer: A circle with center $(1,0)$ and radius 1; $-\frac\pi2\leq\theta\leq\frac\pi2$ traces it once.**

### Common mistakes

- **Negative radius has no geometric meaning.** It locates a point in the opposite direction.

- **Equating the two radii always finds all intersections.** Also check equivalent polar representations and the origin.

### Exercises and solutions

**1. Convert $(2,\frac\pi2)$ to Cartesian coordinates.**

Hint: Use sine and cosine.

Answer: $(0,2)$.

- $x=2\cos\frac\pi2=0$, $y=2\sin\frac\pi2=2$.

**2. Which positive-radius representation equals $(-1,0)$?**

Hint: Reverse direction for a negative radius.

Answer: $(1,\pi)$.

- Make the radius positive and add $\pi$ to the angle.

**3. What does $r=3$ describe?**

Hint: Distance from the origin stays constant.

Answer: A radius-3 circle centered at the origin.

- $x^2+y^2=r^2=9$.

**4. Find the Cartesian equation of $r=2\sin\theta$.**

Hint: Multiply by the radius, then complete the square.

Answer: $x^2+(y-1)^2=1$.

- $r^2=2r\sin\theta$ gives $x^2+y^2=2y$; rearrange and complete the square.

Prerequisites: Parametric equations and motion, Trigonometric Functions and Radians.

## 7.4 Polar area and arc length

*Area uses sectors; length uses speed*

### The idea

Polar area accumulates small sectors, while arc length accumulates short arcs. Check tracing ranges to avoid repetition.

### Intuition

A small sector has area about $\frac12r^2\Delta\theta$. Changing radius contributes to length, so the length formula includes both radius and its derivative.

### Another explanation

Area measures sectors swept; length measures actual travel. Different pieces give different formulas.

### Quick check

If a polar curve is traced twice, what can direct area integration do?

A. Remove repetitions automatically
B. Count area repeatedly
C. Always give zero

Answer: B. The integral accumulates over the parameter process. Choose the tracing interval first.

### Why the factor one-half?

Allocate a circle's area in proportion to the sector angle: $\pi r^2\cdot\frac{\Delta\theta}{2\pi}$.

### Between two polar curves

Over a common angle range with $0\leq r_{in}\leq r_{out}$, integrate half the difference of squared radii. Split at intersections and changes in tracing behavior.

### Deriving arc length

Insert $x=r\cos\theta,y=r\sin\theta$ into parametric arc length; cross terms cancel after squaring and adding.

### Definition and conditions

Area uses sectors; length uses speed

$$
A=\frac12\int_\alpha^\beta r(\theta)^2d\theta,\qquad L=\int_\alpha^\beta\sqrt{r(\theta)^2+r\prime(\theta)^2}\,d\theta
$$

- The area formula describes a radial region covered once, usually with continuous nonnegative radius. Arc length requires piecewise continuous differentiability. Retracing counts again.

### Derivation

Approximate area by small sectors.

$$
\Delta A\approx\frac12r^2\Delta\theta
$$

Differentiate coordinates, square and add.

$$
\left(\frac{dx}{d\theta}\right)^2+\left(\frac{dy}{d\theta}\right)^2=(r\prime)^2+r^2
$$

Obtain distinct integrals for area and length.

$$
dA=\frac12r^2d\theta,\quad ds=\sqrt{r^2+(r\prime)^2}\,d\theta
$$

### Interactive diagram

What relationship, if any, is there between half-turn swept area and half the radius?

Move along $r=1+\cos\theta$ and show the region swept from angle zero.

Online diagram: #/lesson/c2-polar-calculus?view=visual

### Guided experiment

1. **Starting point** Set the angle to 0.

Preset observation: The point is $(2,0)$; no area has been swept yet.

2. **Half a turn** Set the angle to 3.141592653589793.

Preset observation: The point returns to the origin, having swept upper-half area $\frac{3\pi}{4}$.

3. **A full turn** Set the angle to 6.283185307179586.

Preset observation: The full cardioid region has area $\frac{3\pi}{2}$.

### Worked examples

#### Example 1: Area inside a cardioid

Find the enclosed area for $r=1+\cos\theta$, $0\leq\theta\leq2\pi$.

- Area is $A=\frac12\int_0^{2\pi}(1+2\cos\theta+\cos^2\theta)d\theta$.
- The three integrals are $2\pi,0,\pi$; multiply their sum by one-half.

**Answer: $\frac{3\pi}{2}$.**

#### Example 2: A circle's arc length

Find arc length for $r=2$, $0\leq\theta\leq\pi$.

- $r\prime=0$; the length element is $2d\theta$.
- $L=\int_0^\pi2d\theta=2\pi$.

**Answer: $2\pi$.**

### Common mistakes

- **Polar area integrates the radius to the first power.** Sector area uses radius squared and a factor one-half.

- **Every angle interval traces the curve only once.** Some curves retrace within a full angle interval. Check the parameter path.

### Exercises and solutions

**1. Find the full circular area for $r=3$.**

Hint: Integrate over one complete turn.

Answer: $9\pi$.

- $A=\frac12\int_0^{2\pi}9d\theta=9\pi$.

**2. For the circle $r=2\cos\theta$ on $[-\frac\pi2,\frac\pi2]$, find the area.**

Hint: This interval traces it once.

Answer: $\pi$.

- $A=2\int_{-\pi/2}^{\pi/2}\cos^2\theta d\theta=\pi$.

**3. Find the full annular area between $r=2$ and $r=1$.**

Hint: Subtract inner radius squared from outer radius squared.

Answer: $3\pi$.

- $\frac12\int_0^{2\pi}(4-1)d\theta=3\pi$.

**4. Set up the arc-length integral for $r=\theta$, $0\leq\theta\leq1$.**

Hint: The radius derivative is one.

Answer: $\int_0^1\sqrt{\theta^2+1}d\theta$.

- $r\prime=1$; insert into the arc-length formula, not the area formula.

Prerequisites: Polar coordinates and curves, Tangents and arc length of parametric curves, Trigonometric integrals.

## Chapter review

Try independently before reading the solutions.

**1. For $x=t^2,y=2t$ at $t=1$, find slope and speed.**

Hint: A ratio and a vector length are different calculations.

Answer: Slope 1; speed $2\sqrt2$.

- $x\prime=2t,y\prime=2$; slope $2/(2t)=1$, speed $\sqrt{4+4}=2\sqrt2$.

**2. Convert $(-3,\frac\pi2)$ to Cartesian coordinates and a positive-radius representation.**

Hint: Move in the opposite direction.

Answer: $(0,-3)$; $(3,\frac{3\pi}{2})$.

- $x=-3\cos\frac\pi2=0,y=-3\sin\frac\pi2=-3$; changing radius to positive adds half a turn to the angle.

**3. Find the full-turn area of $r=2+\cos\theta$.**

Hint: Square and integrate, handling sine and cosine terms separately.

Answer: $\frac{9\pi}{2}$.

- $A=\frac12\int_0^{2\pi}(4+4\cos\theta+\cos^2\theta)d\theta=\frac12(8\pi+\pi)$.

# Chapter 8 · First-order differential equations

Use initial values to select solutions and check equilibria and intervals. Separation and integrating factors give analytic solutions; Euler supplies discrete approximations for comparison.

Goals:
- Check initial-value solutions and intervals
- Use separation and integrating factors
- Compare equilibria and numerical errors

## 8.1 Differential equations and direction fields

*Find curves that follow a prescribed slope*

### The idea

A differential equation specifies slope; an initial value specifies a starting point. A direction field shows the local directions allowed.

### Intuition

The unknown is a function. $y\prime=y$ asks for all curves whose rate equals their value; an initial value selects one.

### Another explanation

A solution curve follows the small direction arrows at every point along its path.

### Quick check

What does an initial value determine?

A. A point on the curve
B. Slopes at every point
C. Existence on the entire real axis

Answer: A. The equation specifies slopes; global existence requires further checking.

### Checking a solution

Substitute the function and derivative into the equation. Check its claimed interval and initial value too.

### What does a direction field show?

At each $(x,y)$, draw a segment with slope $f(x,y)$. It suggests growth, decline and equilibria; finitely many segments do not prove existence.

### Is the solution unique?

A continuous right side gives local existence. If its derivative with respect to the vertical variable is also continuous near the initial point, local uniqueness follows. Continuity alone need not give uniqueness.

### Definition and conditions

Find curves that follow a prescribed slope

$$
y\prime=f(x,y),\quad y(x_0)=y_0
$$

- One sufficient local-uniqueness condition is continuity of $f$ and $\frac{\partial f}{\partial y}$ near the initial point. The latter means differentiating in $y$ while holding $x$ fixed.

### Derivation

Differentiate the exponential candidate.

$$
y=Ce^x\Longrightarrow y\prime=Ce^x=y
$$

Use the initial value to determine the constant.

$$
y(0)=2\Longrightarrow C=2
$$

Substitute back to check equation and initial value.

$$
y=2e^x,\quad y\prime=2e^x,\quad y(0)=2
$$

### Interactive diagram

How does reducing step size change the gap between polygon and exact curve?

Compare the direction field, exact solution and Euler polygon for $y\prime=y(1-y/10)$, with initial value $y(0)=2$.

Online diagram: #/lesson/c2-differential-models?view=visual

### Guided experiment

1. **Coarse steps** Set the count to 4.

Preset observation: Four steps on the fixed interval $[0,4]$ leave a visible gap from the exact curve.

2. **Reduce the step size** Set the count to 16.

Preset observation: The step size is 0.25; compare error directly with the exact solution.

3. **Refine further** Set the count to 64.

Preset observation: The approximation still has finitely many steps; the field is not a uniqueness proof.

### Worked examples

#### Example 1: Checking a solution family

Does $y=Ce^{-2x}$ satisfy $y\prime=-2y$?

- Its derivative is $-2Ce^{-2x}$.
- The right side $-2y$ agrees for every real input.

**Answer: Yes; an initial value determines the constant.**

#### Example 2: Selecting an initial-value solution

Solve $y\prime=y$, $y(0)=3$.

- A candidate general solution is $Ce^x$.
- The initial value gives $C=3$; verify by substitution.

**Answer: $y=3e^x$, for every real input.**

### Common mistakes

- **An initial value specifies a slope.** It specifies a point; the equation supplies the slope there.

- **Every continuous slope field guarantees uniqueness.** Additional local-uniqueness hypotheses are needed.

### Exercises and solutions

**1. Does $y=x^2+1$ satisfy $y\prime=2x$ and $y(0)=1$?**

Hint: Check both equation and initial value.

Answer: Yes.

- $y\prime=2x$ and $y(0)=1$.

**2. Solve $y\prime=y$, $y(0)=0$.**

Hint: Equilibria are solutions too.

Answer: $y=0$.

- For the zero function, both derivative and right side vanish. Smoothness here gives uniqueness.

**3. For $y\prime=1-y$, find the slope at $y=2$.**

Hint: Substitute the current height.

Answer: $-1$.

- $1-2=-1$; the curve falls to the right.

**4. Solve $y\prime=3y$, $y(0)=2$.**

Hint: Use an exponential and substitute back.

Answer: $2e^{3x}$.

- Its derivative is $6e^{3x}=3y$; the initial value is 2.

Prerequisites: Derivatives: From Secants to Tangents, Integrals over infinite intervals.

## 8.2 Separable equations

*Keep solutions that division might remove*

### The idea

If a rate factors into a function of each variable, separate and integrate. Find equilibria before dividing by the dependent-variable factor.

### Intuition

$y\prime=xy$ can be written $\frac{dy}{y}=x dx$, but division by $y$ temporarily loses the zero solution.

### Another explanation

Separation is a calculation method, not permission to change the solution set. Each division must account for excluded solutions.

### Quick check

Before dividing by a dependent-variable factor, what should you do?

A. Ignore the zero-factor case
B. Check equilibrium solutions
C. Divide away the initial value

Answer: B. Division is valid only on nonzero branches.

### Separating variables

On an interval with $g(y)\neq0$, rewrite $y\prime=f(x)g(y)$ as $\frac1{g(y)}dy=f(x)dx$, then integrate.

### Keeping equilibrium solutions

Check every constant function $y=c$ satisfying $g(c)=0$ in the original equation. Division may remove it from the derived expression.

### Initial values and valid intervals

Use the initial value to set the constant. If a denominator vanishes at a finite point, use the interval containing the initial point without crossing it.

### Definition and conditions

Keep solutions that division might remove

$$
y\prime=f(x)g(y)\quad\Longrightarrow\quad\int\frac{dy}{g(y)}=\int f(x)dx+C
$$

- Work on branches satisfying $g(y)\neq0$; separately retain equilibria from $g(c)=0$. Check initial values and domains afterward.

### Derivation

Separate variables in $y\prime=xy$.

$$
\frac{dy}{y}=x\,dx\quad(y\neq0)
$$

Integrate both sides.

$$
\ln|y|=\frac{x^2}{2}+C
$$

Combine sign branches and restore equilibria.

$$
y=Ae^{x^2/2},\quad A\in\mathbb R
$$

### Interactive diagram

How does reducing step size change the gap between polygon and exact curve?

Compare exact and Euler solutions of $y\prime=y^2$, $y(0)=1$ on $[0,0.8]$.

Online diagram: #/lesson/c2-separable?view=visual

### Guided experiment

1. **Coarse steps** Set the count to 4.

Preset observation: On $[0,0.8]$, the exact endpoint value is 5; four Euler steps substantially underestimate it.

2. **Reduce the step size** Set the count to 16.

Preset observation: The step size falls to 0.05; compare approximation and exact solution.

3. **Refine further** Set the count to 64.

Preset observation: Improvement on a finite interval does not permit crossing the exact singularity at 1.

### Worked examples

#### Example 1: An initial-value problem

Solve $y\prime=2xy$, $y(0)=3$.

- The nonzero branch gives $\ln|y|=x^2+C$.
- $y=Ae^{x^2}$; the initial value gives $A=3$.

**Answer: $y=3e^{x^2}$.**

#### Example 2: Finite-time blow-up

Solve $y\prime=y^2$, $y(0)=1$, stating its interval.

- $\int y^{-2}dy=\int dx$, giving $-\frac1y=x+C$.
- The initial value gives $C=-1$, hence $y=\frac1{1-x}$.

**Answer: $y=\frac1{1-x}$; the maximal interval containing the initial point is $(-\infty,1)$.**

### Common mistakes

- **Dividing by an unknown function never loses solutions.** Record equilibria associated with zero factors first.

- **An explicit formula may be continued across any point where it can be evaluated.** Do not join intervals across a singularity into one initial-value solution.

### Exercises and solutions

**1. Solve $y\prime=-y,y(0)=4$.**

Hint: Separate and exponentiate.

Answer: $4e^{-x}$.

- $\ln|y|=-x+C$; the initial value gives positive coefficient 4.

**2. Find the equilibria of $y\prime=y^2$.**

Hint: Find constants making the right side zero.

Answer: $y=0$.

- The zero function has zero derivative. Retain it before dividing by a square.

**3. Given $y\prime=xy,y(0)=1$, find $y(1)$.**

Hint: Find the initial-value solution first.

Answer: $e^{1/2}$.

- $y=e^{x^2/2}$; substitute 1.

**4. Find the maximal initial-value interval for $y\prime=y^2,y(0)=-1$.**

Hint: Locate the denominator's zero.

Answer: $(-1,\infty)$.

- $y=-\frac1{x+1}$; the singularity is $-1$. Choose the side containing zero.

Prerequisites: Differential equations and direction fields, Partial fractions.

## 8.3 First-order linear equations

*Turn the left side into a product derivative*

### The idea

For $y\prime+p(x)y=q(x)$, multiply by a suitable function to combine the left side into one product derivative.

### Intuition

Design a factor that supplies the missing term in the product rule, rather than guessing a solution.

### Another explanation

Specify the desired product derivative, then find the factor that creates it. This uses the same product rule as integration by parts.

### Quick check

What should the integrating factor make on the left?

A. A product of two integrals
B. The derivative of one product
C. A constant

Answer: B. Then integration can recover the unknown function directly.

### Deriving the integrating factor

We want $\mu y\prime+\mu p y=(\mu y)\prime$, requiring $\mu\prime=\mu p$; choose $\mu=e^{\int p dx}$.

### Why omit its multiplicative constant?

Any nonzero constant scales the whole equation equally and is absorbed into the solution's constant.

### What makes an equation linear?

The unknown and its derivative appear to the first power, with coefficients depending only on the independent variable. Terms $y^2$ or $yy\prime$ do not fit.

### Definition and conditions

Turn the left side into a product derivative

$$
\mu=e^{\int p(x)dx},\quad(\mu y)\prime=\mu q,\quad y=\frac{\int\mu q\,dx+C}{\mu}
$$

- $p,q$ are continuous on the interval. Normalize the derivative coefficient to one; the integrating factor is nonzero there.

### Derivation

Apply the product rule to identify the condition.

$$
(\mu y)\prime=\mu y\prime+\mu\prime y
$$

Choose a factor satisfying it.

$$
\mu\prime=p\mu\Longrightarrow\mu=e^{\int p dx}
$$

Integrate and divide by the nonzero factor.

$$
\mu y=\int\mu q\,dx+C
$$

### Interactive diagram

How does reducing step size change the gap between polygon and exact curve?

Compare exact and Euler solutions of $y\prime=4-2y$, $y(0)=1$.

Online diagram: #/lesson/c2-linear-ode?view=visual

### Guided experiment

1. **Coarse steps** Set the count to 4.

Preset observation: Four steps on $[0,4]$ oscillate between 1 and 3, while the continuous solution approaches 2.

2. **Reduce the step size** Set the count to 16.

Preset observation: At step size 0.25, the approximation lies closer to the exact solution.

3. **Refine further** Set the count to 64.

Preset observation: Reduce steps further and inspect endpoint error; distinguish algorithm from continuous model.

### Worked examples

#### Example 1: A constant input

Solve $y\prime+2y=4$, $y(0)=1$.

- The integrating factor is $e^{2x}$; the left side becomes $(e^{2x}y)\prime$.
- $e^{2x}y=2e^{2x}+C$; the initial value gives $C=-1$.

**Answer: $y=2-e^{-2x}$.**

#### Example 2: A variable coefficient

On $x>0$, solve $y\prime+\frac1xy=x$.

- Choose integrating factor $x$, since $e^{\ln x}=x$.
- $(xy)\prime=x^2$, so $xy=\frac{x^3}{3}+C$.

**Answer: $y=\frac{x^2}{3}+\frac Cx$, $x>0$.**

### Common mistakes

- **Add the integrating factor directly to the solution.** Multiply the entire equation by it to create a product derivative.

- **Skip normalization of the derivative coefficient.** The factor uses the coefficient in standard form.

### Exercises and solutions

**1. Solve $y\prime+y=0,y(0)=2$.**

Hint: Use an exponential integrating factor.

Answer: $2e^{-x}$.

- $(e^xy)\prime=0$, hence $e^xy=2$.

**2. Solve $y\prime+y=1,y(0)=0$.**

Hint: The equilibrium is one.

Answer: $1-e^{-x}$.

- $(e^xy)\prime=e^x$; integration gives $y=1+Ce^{-x}$, and the initial value gives $C=-1$.

**3. Give an integrating factor for $2y\prime+4y=6$.**

Hint: Divide by two first.

Answer: $e^{2x}$.

- Standard form is $y\prime+2y=3$; integrate coefficient 2.

**4. Is $y\prime+y^2=x$ a linear equation of this type?**

Hint: Check the unknown's powers.

Answer: No.

- The term $y^2$ prevents direct use of this linear integrating-factor formula.

Prerequisites: Separable equations, Integration by parts.

## 8.4 Euler's method and the logistic model

*Step along the current slope and examine equilibria*

### The idea

Euler advances using the current slope. Logistic growth slows as remaining capacity decreases.

### Intuition

A stable continuous model can have unreasonable numerical behavior at large step sizes. Separate model properties from algorithm properties.

### Another explanation

The equation specifies continuous change; Euler updates at intervals. Large steps can miss important changes between updates.

### Quick check

If a large Euler step produces negative population, what should you conclude first?

A. Real population must become negative
B. The numerical approximation may have failed
C. The differential equation is undefined

Answer: B. Inspect the algorithm and step size rather than treating the approximation as exact.

### One Euler step

At $(x_n,y_n)$, use slope $f(x_n,y_n)$ over width $h$. Recompute slope every step rather than following the initial tangent forever.

### Logistic equilibria

$y\prime=ry(1-y/K)$, $r,K>0$. Equilibria are zero and $K$. Positive solutions grow below $K$ and fall above $K$.

### Understanding numerical error

On a fixed finite interval, if the exact solution has bounded second derivative and the right side has bounded vertical derivative near it, Euler's global error is bounded by a constant times step size. Halving steps typically reduces error, but a few comparisons do not establish a uniform guarantee.

### Definition and conditions

Step along the current slope and examine equilibria

$$
x_{n+1}=x_n+h,\quad y_{n+1}=y_n+h f(x_n,y_n);\qquad y\prime=ry\left(1-\frac yK\right)
$$

- Euler uses a fixed positive step size. Convergence requires sufficient regularity and controlled derivatives on the interval. For logistic $r,K>0$ and positive initial values, compare with an explicit solution.

### Derivation

Separate the logistic equation, keeping both equilibria.

$$
\frac{dy}{y(1-y/K)}=r\,dx
$$

Use partial fractions and solve for positive initial values.

$$
y(x)=\frac K{1+Ae^{-rx}},\quad A=\frac K{y(0)}-1
$$

Approximate one step using the current slope.

$$
y_{n+1}=y_n+hr y_n\left(1-\frac{y_n}K\right)
$$

### Interactive diagram

How does reducing step size change the gap between polygon and exact curve?

Compare the direction field, exact solution and Euler polygon for $y\prime=y(1-y/10)$, with initial value $y(0)=2$.

Online diagram: #/lesson/c2-euler-logistic?view=visual

### Guided experiment

1. **Coarse steps** Set the count to 4.

Preset observation: Four steps on the fixed interval $[0,4]$ leave a visible gap from the exact curve.

2. **Reduce the step size** Set the count to 16.

Preset observation: The step size is 0.25; compare error directly with the exact solution.

3. **Refine further** Set the count to 64.

Preset observation: The approximation still has finitely many steps; the field is not a uniqueness proof.

### Worked examples

#### Example 1: Two Euler steps

Use $h=0.1$ to approximate $y\prime=y$, $y(0)=1$ through $x=0.2$.

- First step: $y_1=1+0.1\cdot1=1.1$.
- Second step: $y_2=1.1+0.1\cdot1.1=1.21$; the exact value is $e^{0.2}$.

**Answer: Euler gives $1.21$; the exact value is about $1.2214$, an underestimate of about $0.0114$.**

#### Example 2: Limited resources

Solve $y\prime=y(1-y/10)$, $y(0)=2$ and describe long-term behavior.

- $A=\frac{10}{2}-1=4$.
- $y=\frac{10}{1+4e^{-x}}$; the denominator decreases from 5 to 1.

**Answer: The positive solution increases toward 10.**

### Common mistakes

- **The Euler polygon is the exact solution.** It is discrete approximation; compare it with exact solutions or error bounds.

- **A stable continuous model stays stable at every step size.** Large steps may cause oscillation, overshoot or unrealistic negative values.

### Exercises and solutions

**1. For $y\prime=y,y(0)=1,h=0.5$, find the value after one step.**

Hint: Add step size times slope to the current value.

Answer: $1.5$.

- $y_1=1+0.5\cdot1=1.5$.

**2. Find the equilibria of the logistic equation $r=2,K=5$.**

Hint: Set the right side to zero.

Answer: $y=0$ and $y=5$.

- $2y(1-y/5)=0$, giving two constant solutions.

**3. For $y\prime=y(1-y/10)$, find the slope when $y=12$.**

Hint: Above carrying capacity, the solution declines.

Answer: $-2.4$.

- $12(1-12/10)=-2.4$.

**4. For $y\prime=-y,y(0)=1$, with Euler step $h=3$, what happens after two steps?**

Hint: Calculate the numerical recurrence multiplier.

Answer: $1\to-2\to4$, contrary to continuous decay.

- $y_{n+1}=(1-h)y_n=-2y_n$; magnitude grows. The step choice causes numerical instability.

Prerequisites: First-order linear equations, Separable equations, Partial fractions.

## Chapter review

Try independently before reading the solutions.

**1. Solve $y\prime=3xy,y(0)=2$.**

Hint: Keep equilibria, then separate the nonzero branch.

Answer: $2e^{3x^2/2}$.

- $\ln|y|=\frac32x^2+C$; the initial value makes the exponential coefficient 2.

**2. Solve $y\prime+3y=6,y(0)=0$.**

Hint: The integrating factor is exponential.

Answer: $2-2e^{-3x}$.

- $(e^{3x}y)\prime=6e^{3x}$; integrating gives $y=2+Ce^{-3x}$, and the initial value gives $C=-2$.

**3. For $y\prime=y,y(0)=2$ with $h=0.2$, compute two Euler steps.**

Hint: Update the slope each step.

Answer: $2.88$.

- $y_1=2+0.2\cdot2=2.4$; $y_2=2.4+0.2\cdot2.4=2.88$.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. Evaluate $\int_0^1x^2e^x dx$.**

Hint: Integrate by parts twice and keep both endpoints.

Answer: $e-2$.

- An antiderivative is $e^x(x^2-2x+2)$; its endpoint difference is $e-2$.

**2. Evaluate $\int_1^2\frac{x^2+2}{x}dx$.**

Hint: Split into two terms first.

Answer: $\frac32+2\ln2$.

- $\int_1^2(x+\frac2x)dx=[\frac{x^2}{2}+2\ln x]_1^2$.

**3. For a trapezoidal bound with $M_2=3$ on an interval of length 2, what is the smallest integer count ensuring error at most $0.005$?**

Hint: Simplify the error bound first.

Answer: $20$.

- The bound is $\frac{3\cdot8}{12n^2}=\frac2{n^2}$, so $n^2\geq400$.

**4. Evaluate $\int_2^\infty x^{-3}dx$.**

Hint: Truncate first; note the lower endpoint.

Answer: $\frac18$.

- $[-\frac1{2x^2}]_2^R=\frac18-\frac1{2R^2}\to\frac18$.

**5. Evaluate $\int_0^4x^{-1/2}dx$.**

Hint: Take a right-hand limit at the lower endpoint.

Answer: $4$.

- $[2\sqrt x]_\delta^4=4-2\sqrt\delta\to4$.

**6. Find the center of mass on $[0,2]$ with linear density $\rho=x$.**

Hint: Divide moment by mass.

Answer: $\frac43$.

- $M=2$, $P=\int_0^2x^2dx=\frac83$; the center of mass is $\frac43$.

**7. Find $\lim_{n\to\infty}\sqrt{n^2+4n}-n$.**

Hint: Use the conjugate to remove subtraction of radicals.

Answer: $2$.

- The expression becomes $\frac{4n}{\sqrt{n^2+4n}+n}=\frac4{\sqrt{1+4/n}+1}\to2$.

**8. Does $\sum\frac{2n+1}{n^3+4}$ converge?**

Hint: Use limit comparison with reciprocal squares.

Answer: It converges.

- The ratio is $\frac{(2n+1)n^2}{n^3+4}\to2$; the reference series converges.

**9. For 9 terms of $\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n^2}$, bound the error and determine its sign.**

Hint: The first omitted term is the tenth.

Answer: Error at most $0.01$; the remainder is negative.

- Magnitudes decrease to zero; the tenth term is $-\frac1{100}$, so the sum is below the ninth partial sum.

**10. Find the convergence interval of $\sum_{n=1}^\infty\frac{(2x-1)^n}{n}$.**

Hint: Constrain the ratio's magnitude, then test endpoints.

Answer: $[0,1)$.

- $|2x-1|<1$ gives $0<x<1$; the left alternating harmonic series converges, the right harmonic series diverges.

**11. Use $1-\frac{x^2}{2}+\frac{x^4}{24}$ to estimate $\cos0.3$, with the Taylor bound from the next nonzero order.**

Hint: The fifth-degree coefficient is zero, so regard it as a fifth-degree polynomial.

Answer: Error at most $\frac{0.3^6}{720}$.

- The sixth derivative has magnitude at most 1; use the fifth-order remainder.

**12. Find $\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}$.**

Hint: Expand through degree two with a remainder.

Answer: $-\frac12$.

- $\ln(1+x)=x-\frac{x^2}{2}+O(x^3)$; cancel the linear term and divide by the square.

**13. Find the area enclosed by $r=1+\sin\theta$.**

Hint: Use squared radius over one full turn.

Answer: $\frac{3\pi}{2}$.

- $A=\frac12\int_0^{2\pi}(1+2\sin\theta+\sin^2\theta)d\theta=\frac12(2\pi+\pi)$.

**14. For $y\prime=-2y,y(0)=1$, compute two Euler steps of size $h=1.5$. Do they match the exact trend?**

Hint: Compute the discrete multiplier and compare continuous behavior.

Answer: $1\to-2\to4$; they do not.

- The multiplier is $1-2h=-2$; the exact solution $e^{-2x}$ stays positive and decays.

# Glossary

- **Integration by parts**: Differentiate one factor and integrate the other; aim to simplify the remaining integral.

- **Trigonometric integrals**: For odd powers, reserve a derivative factor; for even powers, use power-reduction identities.

- **Trigonometric substitution**: Match the substitution to the radical, then choose an angle interval to handle absolute values correctly.

- **Partial fractions**: Factor the denominator and split the fraction into simpler terms. Divide first, then match coefficients.

- **Choosing an integration method**: Simplify and look for an inner derivative, then examine products, radicals or rational functions. A definite integral can exist without an elementary antiderivative.

- **Numerical integration and error**: Trapezoids use straight lines; Simpson's rule uses parabolas. Error bounds tell you how many subintervals suffice.

- **Integrals over infinite intervals**: An infinite-interval integral is a limit of finite integrals. Infinity is not an ordinary endpoint value.

- **Unbounded integrands on finite intervals**: Avoid an unbounded endpoint or interior point, integrate on a truncated interval, then take one-sided limits.

- **Surface area of revolution**: Rotating a small arc produces a narrow band, with area approximately circumference times arc length.

- **Mass, moments and center of mass**: The center of mass is a mass-weighted average, not a simple average of boundary positions.

- **Pressure and work by layers**: Total force and work accumulate layer contributions; force or travel distance can differ between layers.

- **Sequences and limits**: A sequence converges when every sufficiently late term stays close to one number. Finitely many initial terms do not determine its limit.

- **Monotone bounded sequences and recurrences**: A bounded monotone real sequence converges. Pass a recurrence to its limit only after proving convergence.

- **Infinite series and partial sums**: A series converges when its partial sums converge. Terms tending to zero are necessary, not sufficient.

- **Geometric and telescoping series**: Find finite partial sums before taking a limit. Do not manipulate an infinite expression whose convergence is unknown.

- **The integral test and tail bounds**: A positive, continuous, decreasing function links an integral to a series and bounds the tail after a finite partial sum.

- **Comparison and limit comparison**: Compare positive terms with a known series. Limit comparison checks whether their tails differ by a finite positive factor.

- **Ratio and root tests**: A limiting consecutive ratio or nth root below one gives a convergent geometric bound. A limit equal to one is inconclusive.

- **Alternating series and error**: An alternating series with eventually nonincreasing positive magnitudes tending to zero converges. Once truncation enters that decreasing tail, its error is at most the next magnitude.

- **Absolute and conditional convergence**: Absolute convergence means the absolute-value series converges. Conditional convergence means the original series converges but its absolute-value series diverges.

- **Power series and convergence intervals**: A power series converges inside its radius and diverges outside. Test each boundary point separately.

- **Differentiating and integrating power series**: Inside the convergence interval, power series can be differentiated and integrated term by term. The radius stays the same; endpoints may change.

- **Taylor polynomials**: A Taylor polynomial matches the value and first few derivatives at its center. This local agreement does not guarantee accuracy far away.

- **Taylor remainders and error bounds**: A Taylor polynomial gives an approximation; a bound on the next derivative limits its error.

- **Standard Taylor series**: Exponential, sine, cosine, geometric and logarithmic expansions generate many others by substitution and calculus. Keep each convergence range.

- **Using series for integrals and limits**: Series approximate integrals without elementary antiderivatives and reveal the first surviving term in a limit.

- **The generalized binomial series**: Binomial coefficients extend to any real exponent. Nonnegative integer exponents terminate; others generally yield infinite series with limited convergence ranges.

- **Parametric equations and motion**: Parametric equations specify how a point moves. The same geometric curve can have different directions and speeds.

- **Tangents and arc length of parametric curves**: Parametric slope is vertical rate divided by horizontal rate. Arc length accumulates speed.

- **Polar coordinates and curves**: Polar coordinates give radius and angle. A negative radius moves opposite the stated direction.

- **Polar area and arc length**: Polar area accumulates small sectors, while arc length accumulates short arcs. Check tracing ranges to avoid repetition.

- **Differential equations and direction fields**: A differential equation specifies slope; an initial value specifies a starting point. A direction field shows the local directions allowed.

- **Separable equations**: If a rate factors into a function of each variable, separate and integrate. Find equilibria before dividing by the dependent-variable factor.

- **First-order linear equations**: For $y\prime+p(x)y=q(x)$, multiply by a suitable function to combine the left side into one product derivative.

- **Euler's method and the logistic model**: Euler advances using the current slope. Logistic growth slows as remaining capacity decreases.

- **Factorial**: $n!=1\cdot2\cdots n$, with $0!=1$.

- **$p$-series**: $\sum_{n=1}^\infty\frac1{n^p}$; it converges exactly when $p>1$.

- **Big-O notation**: $R(x)=O(x^k)$ means there is a fixed constant $C$ such that $|R(x)|\leq C|x|^k$ near zero.

# Proof supplements and scope

## Why Taylor's theorem uses an intermediate point

Fix the target $x\neq a$. Write $F(t)=f(t)-T_m(t)-K(t-a)^{m+1}$, choosing $K$ so that $F(x)=0$. The function and its first $m$ derivatives vanish at the center. Repeated Rolle applications yield an intermediate point $\xi$ with $F^{(m+1)}(\xi)=0$, hence $K=\frac{f^{(m+1)}(\xi)}{(m+1)!}$. This gives the remainder formula. Handle endpoint or zero-distance cases by continuity or direct equality.

## Power-series endpoints and Abel's continuity theorem

If $\sum c_n$ converges, Abel's theorem gives $\lim_{r\to1^-}\sum c_nr^n=\sum c_n$. This links an interior function representation to a convergent endpoint; the theorem is cited, not fully proved here. Finite geometric sums and summation by parts control tails. Endpoint convergence alone does not replace the linking argument. This result identifies logarithm at 1 and arctangent at plus or minus one.

## Why the generalized binomial series represents the function

For a nonterminating series, the ratio test proves convergence on $|x|<1$. Termwise differentiation inside the interval and the coefficient recurrence show its sum $S$ satisfies $(1+x)S\prime=\alpha S$, $S(0)=1$. The function $(1+x)^\alpha$ solves the same initial-value problem. Continuous coefficients and first-order linear uniqueness make them equal. The ratio test alone establishes convergence, not the sum's identity.

## The scope of differential-equation existence and uniqueness

Continuity of the right side and its vertical partial derivative near the initial point gives a unique local solution. This theorem is cited, not fully proved here. Local uniqueness does not guarantee existence on the entire real axis: $y\prime=y^2$, $y(0)=1$ blows up at a finite time. Higher-order equations, systems, rigorous numerical stability and full existence theory belong to the differential-equations volumes.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [OpenStax · Calculus Volume 2](https://openstax.org/books/calculus-volume-2/pages/preface): Used to check public course topics and mathematical hypotheses only. Explanations, examples, exercises, solutions and visuals are independently authored; no source passages, problems or images were copied.

- [Active Calculus · Second Edition](https://activecalculus.org/acs2e/): Referenced for course organization and approaches to Taylor approximation. No text or activities were copied; this source does not establish this book's teaching effectiveness.
