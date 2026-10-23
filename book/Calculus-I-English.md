# AI University · Calculus I

From rates of change to accumulation

English edition 1 · Chinese source v0.3.3 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

An introduction to single-variable calculus: functions, limits, derivatives, integrals, and applications. Each lesson includes concise explanations, precise conditions, derivations, examples, exercises, and interactive diagrams.

Scope: Functions, limits and continuity, differentiation and its applications, definite integrals, basic integration methods, and geometric and physical applications. Sequences, series, multivariable calculus, and systematic integration techniques belong to later volumes.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Functions: the language of change

- 1.1 Functions and Domains
- 1.2 Graphs and Transformations
- 1.3 Composition and Inverse Functions
- 1.4 Trigonometric Functions and Radians
- 1.5 Exponential and Logarithmic Functions

### Limits and continuity

- 2.1 Limits: What Happens Nearby?
- 2.2 Limit Laws
- 2.3 $\varepsilon$–$\delta$: Making Closeness Precise
- 2.4 Continuity and the Intermediate Value Theorem
- 2.5 Infinite Limits and Asymptotes

### Defining and calculating derivatives

- 3.1 Derivatives: From Secants to Tangents
- 3.2 Basic Differentiation Rules
- 3.3 The Chain Rule
- 3.4 Derivatives of Trigonometric Functions
- 3.5 Implicit Differentiation

### More derivatives and models of change

- 4.1 Differentiating Exponentials and Logarithms
- 4.2 Inverse-Function and Inverse-Trigonometric Derivatives
- 4.3 Related Rates
- 4.4 Linear Approximation and Differentials
- 4.5 Newton's Method: Follow a Tangent to a Root

### What derivatives reveal about a function

- 5.1 Extrema and Critical Points
- 5.2 Rolle's Theorem and the Mean Value Theorem
- 5.3 Monotonicity, Concavity, and Curve Sketching
- 5.4 Optimization: Turn the Problem into a Function
- 5.5 L'Hôpital's Rule

### Integrals: accumulation and antiderivatives

- 6.1 Antiderivatives and indefinite integrals
- 6.2 Riemann sums and numerical integration
- 6.3 Definite integrals and signed area
- 6.4 The fundamental theorem of calculus
- 6.5 Integration by substitution

### Geometric and physical applications

- 7.1 Area between curves
- 7.2 Volumes by cross sections: disks, washers, and more
- 7.3 Volumes by cylindrical shells
- 7.4 Arc length and surface area of revolution
- 7.5 Displacement, work, mass, and averages

# Chapter 1 · Functions: the language of change

Calculus asks how fast something changes and how much change accumulates. Functions, graphs, and basic models give the later symbols concrete meaning.

Goals:
- Determine domains and read graphs
- Understand composition, inverses, and radians
- Recognize exponential and logarithmic functions

## 1.1 Functions and Domains

*Check the input before you calculate.*

### The idea

A function assigns exactly one output to each allowed input.

### Intuition

Ask whether an input is allowed before evaluating it. For example, $\sqrt{x}$ requires $x \ge 0$; negative inputs are outside its real domain.

### Another explanation

Think of a function as a rule with an entry requirement. Check that the input can enter before finding its output. Over the reals, the square-root rule accepts only nonnegative inputs.

### Quick check

For $f (x) = \frac{1}{\sqrt{x - 2}}$, which inputs $x$ are allowed?

A. $x \ge 2$
B. $x > 2$
C. $x \ne 2$

Answer: B. The root requires $x - 2 \ge 0$, and the denominator cannot be zero. Together these give $x > 2$.

### Which inputs are allowed?

A denominator cannot be zero, an even root requires a nonnegative radicand, and a logarithm requires a positive argument. Intersect all these restrictions. Applied problems may also restrict time, length, or other quantities.

### How do you evaluate $f (x + h)$?

Replace every $x$ in the formula by $x + h$. The symbol $f$ names the rule; $f (x)$ is its output for this input. Its graph consists of all allowed pairs $(x , f (x))$.

### Why is a circle not a function of its horizontal coordinate?

One $x$ may give two values of $y$. Restricting to the upper semicircle, $y = \sqrt{1 - x^{2}}$, gives one output for each $x$. This is what the vertical line test checks.

### Definition and conditions

A function $f:D\to\mathbb R$ assigns a unique real number to each $x\in D$.

$$
f:D\to\mathbb R,\qquad x\mapsto f(x)
$$

- Inputs and outputs are real unless stated otherwise.

### Derivation

For a quotient containing a root, write both restrictions.

$$
f(x)=\frac{\sqrt{x-1}}{x-3}
$$

The root requires $x \ge 1$; the denominator also excludes 3.

$$
D=[1,3)\cup(3,\infty)
$$

Points outside this domain are not part of the graph.

### Interactive diagram

Move $x$ from positive to negative. Where does the square-root graph stop, and why?

Move the input $x$. The square root has a real output only when $x \ge 0$.

Online diagram: ?lang=en#/lesson/domain?view=visual

### Guided experiment

1. **An allowed input** Set the input to 4.

Preset observation: $\sqrt4=2$: the graph contains the corresponding point.

2. **A boundary input** Set the input to 0.

Preset observation: $\sqrt0=0$: this boundary point belongs to the domain.

3. **Beyond the boundary** Set the input to −1.

Preset observation: There is no real output, so no point should be added to the graph.

### Worked examples

#### Example 1: Substitution is not multiplication

For $f(x)=x^2-2x$, find $f(x+h)-f(x)$.

- Expand $(x+h)^2-2(x+h)$.
- Subtract $x^2-2x$, keeping the parentheses so no terms are lost.

**Answer: $2xh+h^2-2h$.**

#### Example 2: Two restrictions at once

Find the domain of $g(x)=\frac{\ln(x-2)}{x-5}$.

- The logarithm requires $x > 2$; the denominator requires $x \ne 5$.
- Both restrictions must hold.

**Answer: $(2,5)\cup(5,\infty)$.**

### Common mistakes

- **Checking the root but forgetting the denominator.** The domain must satisfy every restriction simultaneously.

- **Writing $f(x+h)$ as $f(x)+h$.** You changed the input. The output generally changes by a different amount.

### Exercises and solutions

**1. For $f(x)=3x-1$, find $f(4)$.**

Hint: Replace $x$ by 4.

Answer: $11$.

- Substitution gives $3 \times 4 - 1 = 11$.

**2. Find the domain of $\sqrt{4-x^2}$.**

Hint: Make the radicand nonnegative.

Answer: $[-2,2]$.

- Require $4 - x^{2} \ge 0$, equivalently $|x| \le 2$.

**3. Find the domain of $\frac{1}{x^2-1}$.**

Hint: Which inputs make the denominator zero?

Answer: $\mathbb R\setminus\{-1,1\}$.

- Factor the denominator as $(x - 1) (x + 1)$ and exclude its two zeros.

**4. For $f(x)=x^2$, what is $f(x+1)-f(x)$?**

Hint: The change in the output is not simply 1.

Answer: $2x+1$.

- Expand $(x + 1)^{2}$, then subtract $x^{2}$.

Prerequisites: Elementary algebra.

## 1.2 Graphs and Transformations

*Track the coordinates, not a memorized slogan.*

### The idea

A graph transformation moves or rescales each point. Following one point keeps the direction clear.

### Intuition

In $f (x - 2)$, keeping the inner input equal to $u$ requires the new horizontal coordinate $u + 2$. The graph therefore moves 2 units right.

### Another explanation

A shift changes where each point lies. Subtracting inside the function requires a larger input to reach the original value, so the graph moves right.

### Quick check

Where is the vertex of $y = (x - 2)^{2}$?

A. $(-2,0)$
B. $(0,2)$
C. $(2,0)$

Answer: C. The function is smallest when its inner expression is zero. Since $x - 2 = 0$, the vertex moves right to $(2,0)$.

### Why does subtracting $h$ move the graph right?

To make $x - h$ equal the original input $u$, set $x = u + h$. Thus $f (x - h) + k$ moves $(u , f (u))$ to $(u + h , f (u) + k)$.

### How does scaling work?

$Af(Bx)$ multiplies vertical coordinates by $A$ and divides horizontal coordinates by $B$ ($B \ne 0$). For $A < 0$ it reflects vertically; for $B < 0$ it reflects horizontally. Larger $|B|$ compresses horizontally.

### How do you check symmetry and monotonicity?

An even function satisfies $f (- x) = f (x)$; an odd function satisfies $f (- x) = - f (x)$. Monotonicity concerns an entire interval, not just two points. Treat disconnected pieces of a domain separately.

### Definition and conditions

For $B \ne 0$, the original point $(u,f(u))$ corresponds to $(\frac{u}{B}+h,Af(u)+k)$ in the following transformed graph.

$$
g(x)=A f(B(x-h))+k
$$

- The domain must be shifted or rescaled too.

### Derivation

Set the new inner input equal to the original input $u$.

$$
B(x-h)=u
$$

Solve for the new horizontal coordinate, then transform the output.

$$
x=\frac uB+h,\qquad y=A f(u)+k
$$

This point mapping is more reliable than memorizing a sign rule.

### Interactive diagram

As $h$ increases, does the vertex move left or right? Predict, then move the horizontal-shift slider.

Adjust $h$ and $k$ and follow the parabola's vertex.

Online diagram: ?lang=en#/lesson/transformations?view=visual

### Guided experiment

1. **Start with the original graph** Set both shifts to 0.

Preset observation: The vertex is $(0,0)$.

2. **Shift right** Set the horizontal shift to 2, leaving the other parameter unchanged.

Preset observation: The vertex of $y=(x-2)^2$ is $(2,0)$.

3. **Then shift up** Keep the horizontal shift at 2 and set the vertical shift to 1.

Preset observation: The vertex becomes $(2,1)$; the shifts affect different coordinates.

### Worked examples

#### Example 1: Finding the vertex

For $g(x)=2(x-3)^2+1$, find the vertex, opening direction, and minimum.

- Start with $y = x^{2}$, shift 3 units right, stretch vertically by 2, then shift 1 unit up.
- The squared term is nonnegative, so the smallest output is 1.

**Answer: Vertex $(3,1)$; opens upward; minimum 1.**

#### Example 2: Following a known point

Given $f(2)=5$, find the corresponding point on $g(x)=f(2x+2)-3$.

- Set $2 x + 2 = 2$, giving $x = 0$.
- The output is $5 - 3 = 2$.

**Answer: The corresponding point is $(0,2)$.**

### Common mistakes

- **Shifting $f(x-3)$ to the left.** Track the inner input: the original $x = 0$ occurs at the new $x = 3$.

- **Treating $2f(x)$ and $f(2x)$ as the same transformation.** One changes outputs; the other changes inputs. They generally differ.

### Exercises and solutions

**1. What is the vertex of $y=(x+2)^2-4$?**

Hint: First find where the squared term is zero.

Answer: $(-2,-4)$.

- The inner expression is zero at $x = - 2$, where the output is −4.

**2. Which reflection produces $g(x)=-f(x)$?**

Hint: Only the output changes sign.

Answer: Reflection across the $x$-axis.

- Each point $(x , y)$ becomes $(x , - y)$.

**3. Is $f(x)=x^3$ odd or even?**

Hint: Substitute $- x$ and check.

Answer: Odd.

- $f (- x) = - x^{3} = - f (x)$.

**4. Find the domain of $g(x)=\sqrt{x-2}$.**

Hint: The domain shifts too.

Answer: $[2,\infty)$.

- Require $x - 2 \ge 0$.

Prerequisites: Functions and Domains.

## 1.3 Composition and Inverse Functions

*Connect two rules, or undo one.*

### The idea

Composition applies one function after another: evaluate the inner function, then pass its result to the outer one. An inverse reverses a rule when that reversal is unique.

### Intuition

Squaring and then adding 1 gives $x \to x^{2} \to x^{2} + 1$. To recover an input, first restrict the domain if several inputs share an output.

### Another explanation

A forward rule can lose information: squaring merges positive and negative inputs. To reverse it uniquely, keep only one branch first.

### Quick check

For $f (x) = x^{2}$ and $g (x) = x + 1$, what is $f (g (2))$?

A. $9$
B. $5$
C. $7$

Answer: A. First $g (2) = 3$, then $f (3) = 9$. Reversing the order gives $g (f (2)) = 5$.

### Which inputs are allowed in a composition?

For $f (g (x))$, the input $x$ must be allowed in $g$, and its output $g (x)$ must be allowed in $f$. Both requirements matter.

### Why does $x^{2}$ need a restriction before inversion?

Both 2 and −2 give 4, so reversing the rule does not select a unique input. Restricting to $x \ge 0$ gives the inverse $\sqrt{x}$.

### How do you find an inverse?

Write $y = f (x)$, solve for $x$, then interchange $x$ and $y$. The inverse's domain is the original range. The notation $f^{-1}$ means inverse, not $\frac{1}{f}$.

### Definition and conditions

If $f$ is one-to-one onto its range, its inverse recovers the input from the output.

$$
f^{-1}(f(x))=x,\qquad f(f^{-1}(y))=y
$$

- Each identity holds on its corresponding domain.

### Derivation

Start with a linear function.

$$
y=3x-2
$$

Solve for the original input.

$$
x=\frac{y+2}{3}
$$

Interchange the variable names to obtain the inverse.

$$
f^{-1}(x)=\frac{x+2}{3}
$$

### Interactive diagram

Can one output come from two inputs? Find equal heights on opposite sides of the parabola.

Compare both sides of the parabola: the same height can come from two inputs, so the function is not one-to-one on the whole real line.

Online diagram: ?lang=en#/lesson/composition?view=visual

### Guided experiment

1. **Try a positive input** Set the input to 1 and record its square.

Preset observation: $1^2=1$.

2. **Try a negative input** Change the input to −1 and compare the output.

Preset observation: $(-1)^2=1$: different inputs give the same output.

3. **Try another pair** Set the input to −2 and compare it with positive input 2.

Preset observation: Both give 4. Restricting to the nonnegative branch makes the reverse choice unique.

### Worked examples

#### Example 1: Order matters

For $f(x)=x^2$ and $g(x)=x+1$, find both compositions.

- $f (g (x))$ adds 1, then squares.
- $g (f (x))$ squares, then adds 1.

**Answer: $(f\circ g)(x)=(x+1)^2$; $(g\circ f)(x)=x^2+1$.**

#### Example 2: Restrictions in a composition

Find the domain of $\ln(\sqrt{x-1})$.

- The root requires $x \ge 1$, but the logarithm also requires the root's value to be strictly positive.
- Therefore $x = 1$ is excluded.

**Answer: $x > 1$.**

### Common mistakes

- **Confusing an inverse with $\frac{1}{f(x)}$.** An inverse reverses the input–output relation; a reciprocal changes a numerical value.

- **Assuming composition can be done in either order.** In general, $f \circ g \ne g \circ f$.

### Exercises and solutions

**1. Find the inverse of $f(x)=2x+5$.**

Hint: First recover the original input.

Answer: $f^{-1}(x)=\frac{x-5}{2}$.

- Solve $y = 2 x + 5$ to obtain $x = \frac{y - 5}{2}$.

**2. Find the inverse of $f(x)=x^2$ restricted to $x\le0$.**

Hint: Squaring loses the sign; recover it from the original domain.

Answer: $-\sqrt{x}$, with inverse domain $x \ge 0$.

- The original input must be nonpositive, so take the negative square-root branch.

**3. For $f(x)=\sqrt{x}$ and $g(x)=x-4$, find $(f\circ g)(9)$.**

Hint: Work from the inside out.

Answer: $\sqrt5$.

- First evaluate $g (9) = 5$, then evaluate $f (5)$.

**4. Is $\frac{1}{x^2+1}$ the inverse of $x^2+1$?**

Hint: An inverse must recover the input.

Answer: No.

- It is the reciprocal. On the whole real line, $x^{2} + 1$ is not even one-to-one.

Prerequisites: Functions and Domains, Graphs and Transformations.

## 1.4 Trigonometric Functions and Radians

*Use the unit circle to understand periodic change.*

### The idea

On the unit circle, $\cos$ is the horizontal coordinate and $\sin$ the vertical coordinate. Radians measure an angle by arc length divided by radius.

### Intuition

An arc of length 1 on the unit circle subtends 1 radian. Trigonometric formulas in calculus use radians unless stated otherwise.

### Another explanation

Sine records height on the unit circle. A full turn returns to the same point, so the heights repeat. In radians, that turn measures twice pi.

### Quick check

Why are angles usually measured in radians in calculus?

A. Radians make every angle smaller
B. Radians are arc length divided by radius, so the basic limit needs no conversion factor
C. Angles measured in degrees cannot be differentiated

Answer: B. $\frac{\sin h}{h} \to 1$ requires $h$ in radians. Using degrees introduces a factor of $\frac{\pi }{180}$.

### How do radians convert to degrees?

Since $\theta  = \frac{s}{r}$, a full turn is $2 \pi$ radians and $180^{\circ} = \pi$ radians. The periods of $\sin$ and $\cos$ are $2 \pi$; that of $\tan$ is $\pi$. Tangent is undefined where $\cos = 0$.

### Where do the identities come from?

The unit-circle equation gives $\sin^{2} x + \cos^{2} x = 1$, while $\tan x = \frac{\sin x}{\cos x}$. Simplifying an expression does not remove its original domain restrictions.

### Why do small angles matter?

In radians, $\frac{\sin x}{x} \to 1$ as $x \to 0$. This limit underlies the derivative of sine. It does not mean $\sin x = x$ for every $x$.

### Definition and conditions

The angle $x$ on the unit circle determines the point $(\cos x,\sin x)$.

$$
\sin^2x+\cos^2x=1,\qquad \tan x=\frac{\sin x}{\cos x}
$$

- Trigonometric inputs are in radians unless stated otherwise; $\tan$ requires $\cos x \ne 0$.

### Derivation

The circumference is $2 \pi  r$; dividing by the radius gives the angle of a full turn.

$$
\theta=\frac sr,\qquad \theta_{\mathrm{circle}}=2\pi
$$

The unit circle's coordinates satisfy its equation.

$$
(\cos x)^2+(\sin x)^2=1
$$

Angles, graphs, and algebraic identities therefore describe the same geometry.

### Interactive diagram

What happens to $\sin x$ when $x$ increases by $2 \pi$? Compare inputs one period apart.

Move $x$ to explore sine's period. The horizontal axis is measured in radians.

Online diagram: ?lang=en#/lesson/trigonometry?view=visual

### Guided experiment

1. **Start at zero** Set the input to 0.

Preset observation: $\sin0=0$.

2. **A quarter turn** Set the input to 1.57, close to $\frac\pi2$.

Preset observation: The height is close to 1, near a peak of the sine wave.

3. **A full turn** Set the input to 6.28, close to $2\pi$.

Preset observation: The output is close to 0 again. These presets are decimal approximations, not exact multiples of pi.

### Worked examples

#### Example 1: Converting an angle

Convert 150° to radians and find its sine.

- Multiply by $\frac{\pi }{180}$ to get $\frac{5 \pi }{6}$.
- $\frac{5 \pi }{6}$ lies in quadrant II, where sine is positive, at the same height as $\frac{\pi }{6}$.

**Answer: $\frac{5\pi}{6}$ radians; sine $\frac{1}{2}$.**

#### Example 2: Where tangent is undefined

Where is $\tan x$ undefined?

- Division is not allowed when the denominator $\cos x = 0$.
- These angles are $\frac{\pi }{2}$ plus an integer multiple of $\pi$.

**Answer: $x=\frac{\pi}{2}+k\pi$, $k\in\mathbb Z$.**

### Common mistakes

- **Entering 30 as though it meant $30^{\circ}$.** In these formulas, 30 means radians. Convert $30^{\circ}$ to $\frac{\pi }{6}$ first.

- **Writing $\sin^{2} x$ as $\sin (x^{2})$.** The former means $(\sin x)^{2}$: evaluate sine, then square.

### Exercises and solutions

**1. How many radians equal 90°?**

Hint: A full turn is $2 \pi$.

Answer: $\frac{\pi}{2}$.

- $\frac{90 \times \pi }{180} = \frac{\pi }{2}$.

**2. Find $\cos\pi$.**

Hint: Use the horizontal coordinate.

Answer: $-1$.

- Half a turn on the unit circle reaches $(-1,0)$.

**3. Simplify $1-\sin^2x$.**

Hint: The sum of the squares is 1.

Answer: $\cos^2x$.

- Rearrange the unit-circle identity.

**4. How are $\sin(x+2\pi)$ and $\sin x$ related?**

Hint: Use periodicity.

Answer: They are equal.

- A full turn returns to the same point.

Prerequisites: Functions and Domains.

## 1.5 Exponential and Logarithmic Functions

*Repeated multiplication, and finding the exponent.*

### The idea

An exponential computes repeated multiplication; a logarithm asks which exponent produces a given value.

### Intuition

Adding the same amount at each step gives linear change. Multiplying by the same factor gives exponential change. Logarithms turn multiplication into addition.

### Another explanation

Exponential growth replaces equal additions with equal multiplications. A logarithm works backward, counting how many steps reach a given output.

### Quick check

What is $\ln (e^{3})$?

A. $e$
B. $3$
C. $3 e$

Answer: B. $\ln$ and exponentiation with base $e$ are inverse operations: $\ln (e^{x}) = x$. Here $x = 3$.

### Which inputs do exponentials and logarithms accept?

For $b > 0$ and $b \ne 1$, $b^{x}$ is defined for every real input and has positive outputs; $\log _ b x$ requires $x > 0$. Both increase if $b > 1$ and decrease if $0 < b < 1$.

### Which expressions can a logarithm split?

Products of positive numbers become sums of logarithms; quotients become differences; powers bring the exponent out front. A logarithm does not split addition: $\ln (x + y) \ne \ln x + \ln y$.

### Why use $e$?

An exponential with base $e$ has a rate of change equal to itself, and $\ln$ is its inverse. Other bases introduce the factor $\ln b$ in the derivative.

### Definition and conditions

Logarithms and exponentials are inverse functions.

$$
\log_b x=y\iff b^y=x,\qquad \ln(e^x)=x
$$

- $b > 0$, $b \ne 1$, and $x > 0$; $\ln$ is the logarithm with base $e$.

### Derivation

Write positive numbers $u$ and $v$ as exponentials.

$$
u=b^p,\quad v=b^q
$$

Multiplication adds the exponents.

$$
uv=b^{p+q}
$$

Reading off the exponent gives the logarithm product law.

$$
\log_b(uv)=\log_bu+\log_bv
$$

### Interactive diagram

Does increasing the input by 1 add $e$ to the output, or multiply it by $e$? Compare two readings.

The exponential is always positive. Move $x$ and check that increasing the input by one multiplies the output by $e$.

Online diagram: ?lang=en#/lesson/exponential-log?view=visual

### Guided experiment

1. **Zero input** Set the input to 0.

Preset observation: $e^0=1$.

2. **Increase by one** Change the input to 1.

Preset observation: The output changes from 1 to $e$, about 2.71828.

3. **Increase by one again** Change the input to 2.

Preset observation: The output is $e^2$, about 7.38906; the ratio of consecutive outputs is still $e$.

### Worked examples

#### Example 1: Finding an exponent

Solve $2^x=8$.

- Write 8 as $2^{3}$.
- The exponential with this base is one-to-one, so the exponents are equal.

**Answer: $x = 3$.**

#### Example 2: Solving within the domain

Solve $\ln(x-1)=2$.

- First require $x > 1$.
- Exponentiate both sides to get $x - 1 = e^{2}$; the resulting solution satisfies the domain restriction.

**Answer: $x=1+e^2$.**

### Common mistakes

- **Assuming $\ln(u+v)=\ln u+\ln v$.** Logarithms split products, not sums.

- **Evaluating $\ln (- 1)$ over the reals.** A real logarithm requires a strictly positive input.

### Exercises and solutions

**1. Find $\log_3 81$.**

Hint: Which power of 3 equals 81?

Answer: $4$.

- $3^{4} = 81$.

**2. Simplify $\ln(e^5)$.**

Hint: Use the inverse relationship.

Answer: $5$.

- $\ln$ and $\exp$ undo each other.

**3. Find the domain of $\ln(2-x)$.**

Hint: The argument of the logarithm must be strictly positive.

Answer: $x<2$.

- Require $2 - x > 0$.

**4. For $x>0$, what is $\ln(x^3)$?**

Hint: Apply the logarithm product law.

Answer: $3\ln x$.

- $x^{3}$ is a product of three positive factors $x$.

Prerequisites: Composition and Inverse Functions.

## Chapter review

Try independently before reading the solutions.

**1. Find the domain of $f(x)=\frac{\sqrt{9-x^2}}{x-1}$.**

Hint: The square root gives a closed interval; remove the denominator's zero.

Answer: $[-3,1)\cup(1,3]$.

- The square root requires $|x| \le 3$; the denominator excludes 1. Intersect these restrictions.

**2. Let $f(x)=\ln x$ and $g(x)=x^2$. Compare the domains of their two compositions.**

Hint: Check the inner and outer restrictions separately for each composition.

Answer: $f\circ g=\ln(x^2)$, $x \ne 0$; $g\circ f=(\ln x)^2$, $x > 0$.

- The first expression requires only $x^{2} > 0$.
- The second evaluates $\ln x$ first, requiring $x > 0$.

**3. Why do calculus formulas for trigonometric derivatives use radians?**

Hint: Compare $\lim_{h\to0}\frac{\sin h}{h}=1$ for radian and degree inputs.

Answer: Radians relate angular change directly to unit-circle arc length, giving $\lim_{h\to0}\frac{\sin h}{h}=1$.

- Degree inputs require conversion by $\frac{\pi }{180}$, adding that factor to the derivative.

# Chapter 2 · Limits and continuity

A limit describes how outputs behave as an input approaches a target. It lets us study holes, instantaneous change, and indefinitely fine partitions without assuming a value at the target.

Goals:
- Distinguish a limit from a function value
- Evaluate two-sided, one-sided, and infinite limits
- Use $\varepsilon$–$\delta$ definitions and continuity

## 2.1 Limits: What Happens Nearby?

*A hole need not prevent a limit.*

### The idea

A limit asks which number $f (x)$ approaches as $x$ approaches $a$. The value at the point can differ or even be undefined.

### Intuition

For $x \ne 1$, $\frac{x^{2} - 1}{x - 1}$ equals $x + 1$. As $x$ approaches 1 from either side, the output approaches 2. The quotient being undefined at 1 does not prevent this limit.

### Another explanation

Separate reaching a point from approaching it. A limit describes nearby outputs; a missing point can coexist with a stable limit.

### Quick check

If only $f (1)$ changes to 100, does the limit as $x \to 1$ change?

A. It must become 100
B. No, provided the two one-sided limits exist and agree
C. The limit must cease to exist

Answer: B. The limit examines inputs near 1 but different from 1. Changing the point value alone does not change the nearby behavior.

### Can you substitute directly?

Yes, for a continuous function. If substitution gives $\frac{0}{0}$, simplify or analyze nearby values first. $\frac{0}{0}$ is not an answer.

### What if the two sides disagree?

A two-sided limit requires equal left- and right-hand limits. If the values near zero are −1 on the left and 1 on the right, the two-sided limit does not exist. Do not average them.

### Can a graph settle the question?

Graphs and tables suggest a limit; they do not prove it. $\sin (\frac{1}{x})$ keeps oscillating near zero. Zooming in or adding finitely many samples cannot replace the definition.

### Definition and conditions

A two-sided limit is the common limiting behavior from the left and right.

$$
\lim_{x\to a}f(x)=L\iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L
$$

- Here the limit is a finite real number, and the domain must have points approaching from both sides.

### Derivation

Factor the numerator, but keep the original function's hole.

$$
\frac{x^2-1}{x-1}=x+1\quad(x\ne1)
$$

Nearby outputs follow a line toward 2.

$$
\lim_{x\to1}(x+1)=2
$$

Canceling a factor establishes equality nearby; it does not define the original quotient at $x = 1$.

### Interactive diagram

Does a hole rule out a limit? Compare it with the graph whose two sides disagree. What changes?

Move $x$ toward 1 from both sides. The open point marks the missing value at 1, while the outputs still approach 2.

Online diagram: ?lang=en#/lesson/limit-intuition?view=visual

### Guided experiment

1. **Look from the right** Start 0.5 units to the right of the target.

Preset observation: At $x=1.5$, the output is 2.5.

2. **Approach from the left** Switch to the left and reduce the distance to 0.01.

Preset observation: The left-side output is 1.99; on the right it is 2.01. Both approach 2.

3. **Compare a jump** Switch to the function with different left- and right-side values.

Preset observation: The left side stays at 1 and the right side at 3. Shrinking the distance cannot produce a common limit.

### Worked examples

#### Example 1: A line with a hole

Find $\lim_{x\to2}\frac{x^2-4}{x-2}$.

- For $x \ne 2$, cancel $x - 2$ to obtain $x + 2$.
- Both sides approach 4.

**Answer: The limit is 4; the original function is undefined at 2.**

#### Example 2: Different one-sided limits

Let $f(x)=-1$ for $x < 0$ and $f(x)=1$ for $x \ge 0$. Find the limit at zero.

- The left-side values stay at −1; the right-side values stay at 1.
- The one-sided limits differ. Changing $f (0)$ cannot make them equal.

**Answer: Left-hand limit −1; right-hand limit 1; no two-sided limit.**

### Common mistakes

- **Treating $\frac{0}{0}$ as a limit of 0.** $\frac{0}{0}$ is an indeterminate form: further analysis is needed.

- **Assuming that having a limit implies continuity.** Continuity also requires a defined point value equal to the limit.

### Exercises and solutions

**1. Find $\lim_{x\to3}(x+2)$.**

Hint: Direct substitution works for a continuous function.

Answer: $5$.

- Nearby outputs of this linear function approach $3 + 2$.

**2. Find $\lim_{x\to1}\frac{x^2-1}{x-1}$.**

Hint: Factor the difference of squares first.

Answer: $2$.

- For $x \ne 1$, the quotient simplifies to $x + 1$.

**3. If the one-sided limits are 2 and 3, does the two-sided limit exist?**

Hint: Do not average the one-sided limits.

Answer: No.

- The two-sided limit requires the same value from both sides.

**4. If only $f(1)$ changes from 2 to 100, does the behavior expressed by $\lim_{x\to1}(x+1)$ change?**

Hint: $x$ approaches 1 without equaling 1.

Answer: No; the limit remains 2.

- A limit concerns a punctured neighborhood, so changing one point does not affect it.

Prerequisites: Functions and Domains, Graphs and Transformations.

## 2.2 Limit Laws

*Know when to substitute and when to simplify.*

### The idea

Knowing the limits of two functions lets you find limits of their sums, products, and quotients. For a quotient, the denominator's limit must be nonzero.

### Intuition

Limit laws let you find each part's limiting value, then combine them. The quotient law cannot yet be applied to $\frac{0}{0}$.

### Another explanation

Getting zero over zero means direct substitution failed. Study the nearby expression and check the laws' conditions rather than treating the indeterminate form as a result.

### Quick check

Substitution gives $\frac{0}{0}$. What should you do next?

A. The answer is 0
B. The answer is 1
C. Simplify the expression, then find the limit

Answer: C. $\frac{0}{0}$ is an indeterminate form, not an answer. Factoring, cancellation, or rationalization may reveal nearby behavior; direct division by zero is invalid.

### When does substitution work?

Polynomials are continuous everywhere; rational functions are continuous where their denominators are nonzero. Roots and logarithms also require their domain restrictions.

### What should you do with $\frac{0}{0}$?

Try factoring, cancellation, or multiplication by a conjugate. The simplified expression need only agree near the target; the original need not be defined at the target itself.

### How does squeezing work?

If $g \le f \le h$ nearby and both $g$ and $h$ approach $L$, then $f$ approaches $L$ too. State the inequalities and the bounding limits. Use radians for trigonometric limits.

### Definition and conditions

If $f \to A$ and $g \to B$, sum and product limits follow ordinary arithmetic; the quotient also requires $B \ne 0$.

$$
\lim(f+g)=A+B,\quad\lim(fg)=AB,\quad\lim\frac fg=\frac AB\ (B\ne0)
$$

- Both $f$ and $g$ must have finite limits, and a quotient must have a nonzero denominator limit.

### Derivation

Use a conjugate to remove the difference of roots.

$$
\frac{\sqrt{1+x}-1}{x}=\frac{1}{\sqrt{1+x}+1}\quad(x\ne0)
$$

The new denominator approaches 2 at zero, so the quotient law applies.

$$
\lim_{x\to0}\frac{1}{\sqrt{1+x}+1}=\frac12
$$

The algebraic identity must hold for allowed inputs near the target.

### Interactive diagram

$\frac{\sin x}{x}$ is undefined at 0. Can its outputs still approach one number from both sides?

Observe $\frac{\sin (x)}{x}$ approaching 1 from both sides of $x = 0$. The open point marks the missing value.

Online diagram: ?lang=en#/lesson/limit-laws?view=visual

### Guided experiment

1. **Start away from zero** Observe a point 0.5 units to the right of zero.

Preset observation: $\frac{\sin(0.5)}{0.5}$ is approximately 0.95885.

2. **Move closer from the right** Reduce the distance to 0.01.

Preset observation: The output is close to 1; the original expression remains undefined at zero.

3. **Check the left side** Keep the same distance and switch to the left.

Preset observation: The output is the same. This trigonometric limit uses radians; finite samples support exploration, not proof.

### Worked examples

#### Example 1: Matching the inner angle

Find $\lim_{x\to0}\frac{\sin(3x)}{x}$.

- Rewrite it as $3\frac{\sin(3x)}{3x}$.
- Set $u = 3 x$; then $u$ also approaches 0.

**Answer: The limit is 3.**

#### Example 2: Bounding an oscillation

Find $\lim_{x\to0}x^2\cos(\frac{1}{x})$.

- Cosine lies between −1 and 1, so the expression lies between $- x^{2}$ and $x^{2}$.
- Both bounds approach 0. Apply the squeeze theorem.

**Answer: The limit is 0.**

### Common mistakes

- **Applying the quotient law when the denominator's limit is zero.** The nonzero-denominator condition is essential.

- **Forgetting the original restrictions after cancellation.** The simplified identity often holds only away from the target point.

### Exercises and solutions

**1. Find $\lim_{x\to2}(x^2+3x)$.**

Hint: Substitute at a point of continuity.

Answer: $10$.

- Substitute into the polynomial: $4 + 6 = 10$.

**2. Find $\lim_{x\to0}\frac{\sqrt{4+x}-2}{x}$.**

Hint: Multiply numerator and denominator by the conjugate.

Answer: $\frac{1}{4}$.

- Multiply by the conjugate to obtain $\frac{1}{\sqrt{4 + x} + 2}$, then substitute to get $\frac{1}{4}$.

**3. Find $\lim_{x\to0}\frac{\sin(5x)}{2x}$.**

Hint: Make the same small angle appear in numerator and denominator.

Answer: $\frac{5}{2}$.

- Write it as $\frac{(\frac{5}{2}) \sin (5 x)}{5 x}$.

**4. Find $\lim_{x\to0}x\sin(\frac{1}{x})$.**

Hint: The absolute value of sine is at most 1.

Answer: $0$.

- Its absolute value is at most $|x|$, so the squeeze theorem gives 0.

Prerequisites: Limits: What Happens Nearby?, Trigonometric Functions and Radians.

## 2.3 $\varepsilon$–$\delta$: Making Closeness Precise

*You specify the output error; find an input range that guarantees it.*

### The idea

$\varepsilon$ bounds the output error; $\delta$ bounds the input distance. A limit exists only if a suitable $\delta$ can be found for every positive error tolerance, however small.

### Intuition

For $f (x) = 2 x$, $a = 1$, and $L = 2$, output error is twice input distance. To keep it below $\varepsilon$, choose $\delta  = \frac{\varepsilon }{2}$.

### Another explanation

Start with a required output accuracy, then give an input radius that guarantees it. One good point is not enough: every allowed point in that range must satisfy the bound.

### Quick check

In the $\varepsilon$–$\delta$ definition, which quantity is specified first?

A. Specify output tolerance $\varepsilon$, then find input radius $\delta$
B. Fix $\delta$, then require it to work for every $\varepsilon$
C. $\varepsilon$ and $\delta$ must be equal

Answer: A. For every output tolerance $\varepsilon$, however small, a sufficiently small $\delta$ must exist. The choice of $\delta$ may depend on $\varepsilon$.

### Which quantity is specified first?

First take any $\varepsilon  > 0$, then choose $\delta  > 0$. Your $\delta$ may depend on $\varepsilon$, but cannot be chosen afterward to fit a particular $x$.

### Why require $0 < |x - a|$?

This excludes $x = a$. A limit concerns nearby allowed inputs, so $a$ itself need not belong to the domain.

### How do you find $\delta$?

Work backward from $|f (x) - L| < \varepsilon$, then verify the argument forward. For $x^{2}$ near $a = 2$, first require $\delta  \le 1$ so that $|x + 2| < 5$, then require $\delta  \le \frac{\varepsilon }{5}$.

### Definition and conditions

Let $D$ be the domain and $a$ an accumulation point of $D$: allowed inputs other than $a$ occur arbitrarily close to $a$. A finite limit is defined as follows.

$$
\forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:\quad 0<|x-a|<\delta\Rightarrow |f(x)-L|<\varepsilon
$$

- $x$ belongs to the function's domain; $a$ need not belong to it.

### Derivation

To prove that $x^{2}$ approaches 4 as $x \to 2$, factor the error.

$$
|x^2-4|=|x-2||x+2|
$$

First impose $|x - 2| < 1$. Then $1 < x < 3$, hence $|x + 2| < 5$.

$$
\delta=\min\left(1,\frac\varepsilon5\right)
$$

Whenever $0 < |x - 2| < \delta$, the error is less than $5 \delta  \le \varepsilon$.

$$
|x^2-4|<5\delta\le\varepsilon
$$

### Interactive diagram

If you halve $\varepsilon$, how does the guaranteed radius $\delta$ change? Predict, then compare the two bands.

Adjust $\varepsilon$. The choice $\delta  = \min (1 , \frac{\varepsilon }{5})$ guarantees that the curve within the blue vertical band stays inside the green horizontal band.

Online diagram: ?lang=en#/lesson/epsilon-delta?view=visual

### Guided experiment

1. **A wider error tolerance** Set the output tolerance to 1.

Preset observation: One valid choice is $\delta=0.2$.

2. **Tighten the output tolerance** Change the tolerance to 0.1.

Preset observation: The guaranteed radius shrinks to $\delta=0.02$.

3. **Halve it again** Change the tolerance to 0.05.

Preset observation: Now $\delta=0.01$. Use $|x^2-4|=|x-2||x+2|$ to justify the guarantee throughout the band.

### Worked examples

#### Example 1: A guarantee for a linear function

Prove $\lim_{x\to1}(3x+2)=5$.

- The output error is $|3 x + 2 - 5| = 3 |x - 1|$.
- For any $\varepsilon  > 0$, choose $\delta  = \frac{\varepsilon }{3}$. The error is then strictly less than $\varepsilon$.

**Answer: $\delta=\frac{\varepsilon}{3}$ works.**

#### Example 2: A constant function

Prove that the constant function $f(x)=7$ has limit 7.

- The output error is always zero.
- For any $\varepsilon  > 0$, choose $\delta  = 1$.

**Answer: Any positive $\delta$ works.**

### Common mistakes

- **Fixing $\delta$ first and demanding that it work for every $\varepsilon$.** For the given $\varepsilon$, choose $\delta$. One fixed positive $\delta$ generally cannot meet every tolerance.

- **Requiring only one favorable input $x$.** The error bound must hold for every allowed $x$ in the specified range.

### Exercises and solutions

**1. For $f(x)=2x$, $a = 3$, and $L = 6$, give a valid $\delta$.**

Hint: Output error is twice input distance.

Answer: $\delta=\frac{\varepsilon}{2}$.

- The error satisfies $2 |x - 3| < 2 \delta  = \varepsilon$.

**2. Using the choice $\delta=\varepsilon/2$, what radius $\delta$ does the formula give when $\varepsilon=0.1$?**

Hint: Substitute into your formula for $\delta$.

Answer: $0.05$.

- $\frac{0.1}{2} = 0.05$.

**3. Prove $\lim_{x\to1}x^2=1$, first imposing $|x - 1| < 1$.**

Hint: Factor the error.

Answer: $\delta=\min(1,\frac{\varepsilon}{3})$.

- Then $0 < x < 2$ and $|x + 1| < 3$.
- $|x^{2} - 1| < 3 \delta  \le \varepsilon$.

**4. Why does $0 < |x - a|$ exclude $x = a$?**

Hint: Recall the graph with a hole.

Answer: A limit describes nearby behavior, independently of the point value.

- Excluding the center lets us discuss a limit even when $f (a)$ is undefined.

Prerequisites: Limit Laws.

## 2.4 Continuity and the Intermediate Value Theorem

*Match nearby behavior with the point value.*

### The idea

Continuity at a point means that the limit exists and equals the function's value there. A hole or a jump prevents continuity.

### Intuition

Move $x$ gradually toward $a$: the output must approach $f (a)$. For continuity, the nearby limiting value and the actual point value must match.

### Another explanation

Continuity connects the nearby trend to the output at the point. Finding matching one-sided limits still leaves the point value to check.

### Quick check

The limit exists but differs from $f (a)$. Is the function continuous at $a$?

A. Yes
B. No
C. Yes, provided $f (a)$ is small enough

Answer: B. Continuity requires a defined $f (a)$, an existing limit, and equality between them. Every condition matters.

### Which three conditions must hold?

$f (a)$ must be defined, the limit as $x \to a$ must exist, and that limit must equal $f (a)$. At an interval endpoint, check the one-sided limit within the domain.

### Is a composition continuous?

Polynomials are continuous. Rational functions, roots, and logarithms are continuous on their domains. A composition is continuous when the inner and outer functions are continuous at the corresponding points.

### What does the intermediate value theorem guarantee?

If $f$ is continuous throughout $[a , b]$, it attains every value between its endpoint values. The theorem guarantees existence, not uniqueness or an explicit location.

### Definition and conditions

The equality defining continuity; the intermediate value theorem requires continuity on the entire closed interval.

$$
\lim_{x\to a}f(x)=f(a)
$$

- Intermediate value theorem: if $f$ is continuous on $[a , b]$ and $N$ lies between $f (a)$ and $f (b)$, some $c \in [a , b]$ satisfies $f (c) = N$.

### Derivation

At a junction of a piecewise function, match both one-sided limits and the point value.

$$
f(x)=\begin{cases}x^2,&x<1\\ kx+1,&x\ge1\end{cases}
$$

The left-hand limit is 1; the right-hand limit and point value are $k + 1$.

$$
1=k+1
$$

Thus only $k = 0$ makes the junction continuous.

$$
k=0
$$

### Interactive diagram

The nearby trends agree across the hole. Why is the original function still discontinuous, and how should you fill the hole?

The limit at the hole is 2. The function becomes continuous only if that point is filled with value 2.

Online diagram: ?lang=en#/lesson/continuity?view=visual

### Guided experiment

1. **The right-side behavior** Observe a point 0.1 units to the right of the hole.

Preset observation: The output is 2.1; the limiting value near the target is 2.

2. **The left-side behavior** Keep the distance and switch to the left.

Preset observation: The output is 1.9. Both sides approach the same value.

3. **Fill the point** Fill the target point with output 2.

Preset observation: Both sides approach 2 and the point value is 2, so the extended function is continuous there. Manually try a different point value to see why continuity fails.

### Worked examples

#### Example 1: Filling a hole

For $f (x) = \frac{x^{2} - 4}{x - 2}$ ($x \ne 2$), how should $f (2)$ be defined?

- Nearby, the function equals $x + 2$, so its limit is 4.
- Continuity requires the point value to equal that limit.

**Answer: Set $f (2) = 4$.**

#### Example 2: Guaranteeing a root

Show that $x^3+x-1=0$ has a root in $(0,1)$.

- The polynomial is continuous on $[0,1]$.
- $f (0) = - 1$ and $f (1) = 1$, so zero lies between the endpoint values.

**Answer: The intermediate value theorem guarantees at least one root in $(0,1)$.**

### Common mistakes

- **Assuming that being defined implies continuity.** The nearby limit must also equal the point value.

- **Claiming that the intermediate value theorem gives exactly one root.** It gives at least one. Uniqueness needs additional evidence, such as strict monotonicity.

### Exercises and solutions

**1. If $\lim_{x\to2}f(x)=5$ but $f (2) = 3$, is the function continuous there?**

Hint: Check the last condition for continuity.

Answer: No.

- The limit and the function value differ.

**2. Which value fills the hole in $\frac{x^2-9}{x-3}$ to make it continuous at 3?**

Hint: First find the limit near the hole.

Answer: $6$.

- After cancellation, the nearby expression is $x + 3$, whose limit is 6.

**3. Use the intermediate value theorem to show that $\cos x=x$ has a solution in $(0,1)$.**

Hint: Move all terms to one side to form a continuous function.

Answer: A solution exists.

- $g (x) = \cos x - x$ is continuous, with $g (0) = 1 > 0$ and $g (1) = \cos 1 - 1 < 0$.
- Thus $g$ is zero at least once inside the interval.

**4. Can changing only the point value repair a jump discontinuity?**

Hint: Continuity first requires an existing two-sided limit.

Answer: No.

- Different one-sided limits leave no common value with which to fill the point.

Prerequisites: Limits: What Happens Nearby?, Limit Laws.

## 2.5 Infinite Limits and Asymptotes

*Infinity describes behavior, not a real number.*

### The idea

An infinite limit concerns unbounded outputs as $x \to a$. A finite limit at infinity concerns outputs approaching a fixed number as $x \to \infty$. First identify which quantity grows without bound.

### Intuition

$\frac{1}{x}$ tends to $- \infty$ and $+ \infty$ on opposite sides of zero, yet tends to 0 as $x \to \infty$. One function can exhibit these two different uses of infinity.

### Another explanation

Tending to infinity means eventually passing every prescribed threshold, not reaching a number called infinity. Check the side of approach and the sign.

### Quick check

Does $\frac{1}{x}$ have the two-sided limit $+ \infty$ as $x \to 0$?

A. Yes
B. No: it tends to $- \infty$ on the left and $+ \infty$ on the right
C. Yes: $\infty$ and $- \infty$ are the same number

Answer: B. The two sides disagree, so a two-sided limit of $+ \infty$ is invalid. Infinite behavior is not a finite real value either.

### How do you find an asymptote?

If outputs tend to $\pm \infty$ as $x \to a$ from at least one side, $x = a$ is a vertical asymptote. If outputs tend to $L$ as $x \to \pm \infty$, then $y = L$ is a horizontal asymptote in that direction. A curve can cross it.

### How do rational functions behave at infinity?

Compare leading terms. A lower-degree numerator gives limit 0; equal degrees give the ratio of leading coefficients. For a higher-degree numerator, analyze growth and signs. Watch odd powers as $x \to - \infty$.

### Does being unbounded imply tending to $\infty$?

No. Tending to $+ \infty$ means eventually exceeding every prescribed threshold and remaining above it. Growing oscillations need not have that behavior.

### Definition and conditions

The definition of tending to positive infinity from the right, and an example of a finite limit at infinity.

$$
\forall M>0\ \exists\delta>0:\ 0<x-a<\delta\Rightarrow f(x)>M
$$

- $\pm \infty$ are not finite real numbers. Describe the signs of one-sided infinite behavior separately.

### Derivation

Factor out the leading powers when studying behavior at infinity.

$$
\frac{3x^2+1}{2x^2-5}=\frac{3+\frac{1}{x^2}}{2-\frac{5}{x^2}}
$$

The smaller terms tend to zero, and the denominator tends to a nonzero value.

$$
\lim_{x\to\pm\infty}\frac{3x^2+1}{2x^2-5}=\frac32
$$

The line $y = \frac{3}{2}$ is a horizontal asymptote in both directions.

### Interactive diagram

Does $\frac{1}{x}$ tend in the same direction as it approaches 0 from the left and right? Is the window's edge an endpoint of the curve?

$\frac{1}{x}$ tends to negative infinity on the left of zero and positive infinity on the right. The viewing window clips the graph; the curve does not end at its edge.

Online diagram: ?lang=en#/lesson/infinite-limits?view=visual

### Guided experiment

1. **Approach zero from the right** Set the right-side distance to 0.1.

Preset observation: The output is 10, beyond part of the viewing window. The curve has not stopped.

2. **Move closer from the right** Reduce the distance to 0.01.

Preset observation: The output becomes 100. Closer positive inputs produce larger positive outputs.

3. **Switch to the left** Keep distance 0.01 and switch to the left.

Preset observation: The output is −100. The sides have opposite behavior, so they cannot share one two-sided infinite limit.

### Worked examples

#### Example 1: Opposite one-sided signs

Find $\lim_{x\to0^-}\frac{1}{x}$ and $\lim_{x\to0^+}\frac{1}{x}$.

- A small negative number has a large negative reciprocal.
- A small positive number has a large positive reciprocal.

**Answer: Respectively $- \infty$ and $+ \infty$; there is no common two-sided behavior.**

#### Example 2: A slant asymptote

Find the slant asymptote of $f(x)=\frac{x^2+1}{x}$.

- Rewrite the function as $x + \frac{1}{x}$.
- Its signed vertical difference from $y = x$ is $\frac{1}{x}$, which tends to 0 at either end.

**Answer: The slant asymptote is $y = x$.**

### Common mistakes

- **Treating $\infty$ as a number in arithmetic.** Forms such as $\infty  - \infty$ do not determine a result. Compare the actual rates of growth.

- **Declaring a vertical asymptote whenever a denominator is zero.** A factor might cancel, leaving a hole. Check the nearby behavior.

### Exercises and solutions

**1. Find $\lim_{x\to\infty}\frac{2x+1}{x+4}$.**

Hint: Compare leading coefficients.

Answer: $2$.

- Divide by $x$ to obtain $\frac{2 + \frac{1}{x}}{1 + \frac{4}{x}}$.

**2. Find $\lim_{x\to0}\frac{1}{x^2}$.**

Hint: Squaring removes the sign difference between the two sides.

Answer: $+ \infty$.

- Both sides are positive and grow beyond every bound.

**3. Find $\lim_{x\to-\infty}x^3$.**

Hint: Check the direction and the parity of the power.

Answer: $- \infty$.

- An odd power of a negative input is negative, with unbounded magnitude.

**4. Does $f(x)=\frac{x^2-1}{x-1}$ have a vertical asymptote at 1?**

Hint: Cancel before deciding.

Answer: No. It has a removable hole.

- For $x \ne 1$, it equals $x + 1$, whose nearby limit is finite.

Prerequisites: Limit Laws, Continuity and the Intermediate Value Theorem.

## Chapter review

Try independently before reading the solutions.

**1. Find $\lim_{x\to4}\frac{\sqrt{x}-2}{x-4}$.**

Hint: Multiply by the conjugate and state where the simplification is valid.

Answer: $\frac{1}{4}$.

- Multiply by the conjugate to obtain $\frac{1}{\sqrt{x} + 2}$, then substitute.

**2. Prove that $x^{2} \to 0$ as $x \to 0$, and give a valid $\delta$.**

Hint: Work backward from the output error to an input bound.

Answer: $\delta=\sqrt\varepsilon$.

- If $0 < |x| < \sqrt{\varepsilon }$, then $|x^{2}| < \varepsilon$.

**3. A piecewise function equals $2 x + 1$ for $x < 0$ and $x^{2} + k$ for $x \ge 0$. Which $k$ makes it continuous?**

Hint: Compare both one-sided limits and the value at the join.

Answer: $k=1$.

- The left limit is 1; the right limit and point value are $k$. Set them equal.

# Chapter 3 · Defining and calculating derivatives

A derivative takes an interval's average rate of change to a single point. Start with the definition, then derive reliable calculation rules.

Goals:
- Connect difference quotients to tangents and velocity
- Use product, quotient, and chain rules
- Differentiate trigonometric and implicit relations

## 3.1 Derivatives: From Secants to Tangents

*Shrink the interval used to measure average change.*

### The idea

The derivative is a rate of change at a point: shrink the distance between two inputs toward 0 and find the limit of their average rate of change.

### Intuition

For $y = x^{2}$ near $x = 1$, the secant slope is $2 + h$. As $h \to 0$, it approaches 2: the derivative and tangent slope at that point.

### Another explanation

First measure average change over an interval, then shorten the interval. The derivative is the limiting value, not the slope of a merely short secant.

### Quick check

For $f (x) = x^{2}$ at $a = 1$, is the secant slope with $h = 0.1$ the derivative?

A. Yes, because $h$ is already small
B. No: the secant slope is 2.1; the derivative is the limit 2
C. The derivative does not exist

Answer: B. The quotient is $\frac{(1 + h)^{2} - 1}{h} = 2 + h$. At $h = 0.1$ it is 2.1; only taking $h \to 0$ gives derivative 2.

### What are the units of a derivative?

Output units divided by input units. Differentiating position with respect to time gives meters per second. Negative velocity means position decreases in the chosen direction; speed remains nonnegative.

### Is every continuous function differentiable?

No. $|x|$ is continuous at 0, but its one-sided slopes are −1 and 1. Differentiability implies continuity, but continuity does not imply differentiability.

### How do you write a tangent line?

Given the point $(a , f (a))$ and slope $f' (a)$, the tangent is $y = f (a) + f' (a) (x - a)$. It describes the curve locally and may cross it again elsewhere.

### Definition and conditions

$f$ is differentiable at $a$ when the two-sided limit of its difference quotient exists and is finite.

$$
f\prime(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
$$

- $f$ is defined at $a$ and nearby. One-sided derivatives can be considered separately at endpoints.

### Derivation

Substitute the square function into the difference quotient.

$$
\frac{(a+h)^2-a^2}{h}=2a+h\quad(h\ne0)
$$

As $h$ tends to zero, the secant slope approaches $2 a$.

$$
f\prime(a)=2a
$$

The tangent passes through $(a , a^{2})$ with slope $2 a$.

$$
y=a^2+2a(x-a)
$$

### Interactive diagram

As $h$ shrinks, does the secant slope equal the derivative or approach it? At the corner of $|x|$, do the one-sided quotients agree?

Shrink $h$: the blue secant approaches the gold tangent. The readings compare the difference quotient with the exact derivative.

Online diagram: ?lang=en#/lesson/derivative-definition?view=visual

### Guided experiment

1. **Start with a gap** Set the base point to 1 and the right-side gap to 1.

Preset observation: The secant slope is 3; the tangent slope is 2. They still differ.

2. **Shrink the gap** Keep the base point and reduce the gap to 0.01.

Preset observation: The secant slope is 2.01: closer to 2, but still not the limit.

3. **Check a corner** Switch to absolute value and set the base point to 0.

Preset observation: The right quotient is 1 and the left quotient is −1. The function is continuous but has no common two-sided derivative.

### Worked examples

#### Example 1: Instantaneous velocity

Position is $s(t)=t^2+3t$. Find the velocity at $t = 2$.

- The difference quotient is $2 t + h + 3$. Taking $h \to 0$ gives $v (t) = 2 t + 3$.
- Substitute $t = 2$.

**Answer: $v (2) = 7$. If position is in meters and time in seconds, this is 7 meters per second.**

#### Example 2: Continuous but not differentiable

Check whether $f(x)=|x|$ is differentiable at 0.

- For $h > 0$, the quotient is $\frac{|h|}{h} = 1$.
- For $h < 0$, the quotient is −1, so the sides disagree.

**Answer: Continuous at 0, but not differentiable there.**

### Common mistakes

- **Substituting $h = 0$ into the original quotient.** The quotient divides by $h$. Simplify first, then take a limit.

- **Assuming continuity guarantees a derivative.** A corner is a counterexample: differentiability requires matching one-sided slopes.

### Exercises and solutions

**1. Use the definition to differentiate $f(x)=3x+2$.**

Hint: Every secant of a line has the same slope.

Answer: $3$.

- The quotient is $\frac{3 (x + h) + 2 - 3 x - 2}{h} = 3$.

**2. Find the tangent to $y=x^2$ at $x = 2$.**

Hint: You need both a point and a slope.

Answer: $y=4x-4$.

- Use point $(2,4)$ and slope 4: $y - 4 = 4 (x - 2)$.

**3. If $f$ is differentiable at $a$, is $f$ continuous at $a$?**

Hint: Write the change as $h\times\text{difference quotient}$.

Answer: Yes.

- The change in the function is $h$ times a quotient tending to a finite number, so the change tends to zero.

**4. Find the instantaneous velocity of $s(t)=t^2$ at $t = 3$.**

Hint: The rate of change is not the current position, 9.

Answer: $6$.

- The derivative is $2 t$, whose value at 3 is 6.

Prerequisites: Limit Laws, Continuity and the Intermediate Value Theorem.

## 3.2 Basic Differentiation Rules

*The rules compress calculations from the definition.*

### The idea

Differentiation rules turn common structures into derivatives. First identify the outermost operation: sum, product, or quotient.

### Intuition

When a product $u v$ changes, both factors can contribute. Add $u' v$ and $uv\prime$; do not simply multiply the derivatives.

### Another explanation

Differentiation rules organize the limits in the definition into efficient calculations. You can still check them against difference quotients. A product's derivative is not the product of its derivatives.

### Quick check

What is $(f (x) g (x))'$?

A. $f' g'$
B. $f' g + f g'$
C. $f' + g'$

Answer: B. Both factors can change. Differentiate one and multiply by the other's original value, then add the two contributions.

### How do sums and powers differentiate?

A constant has derivative 0. Differentiate sums and constant multiples term by term. The derivative of $x^{n}$ is $n x^{n-1}$. Apply real-power formulas on their differentiable domains; check boundary points such as 0 separately.

### Why does the product rule have two terms?

Changing $u$ while holding $v$ fixed contributes $u' v$; changing $v$ while holding $u$ fixed contributes $uv\prime$. Adding gives $(u v)' = u' v + u v'$.

### Where does the minus sign go in the quotient rule?

$(\frac{u}{v})' = \frac{u' v - u v'}{v^{2}}$ requires $v \ne 0$. Rewrite the quotient as $u \cdot v^{-1}$ and use the product and chain rules to check it.

### Definition and conditions

If $u$ and $v$ are differentiable at the point, the following rules apply.

$$
(uv)\prime=u\prime v+uv\prime,\qquad\left(\frac uv\right)\prime=\frac{u\prime v-uv\prime}{v^2}
$$

- The quotient rule requires nonzero $v$. The power rule applies where the corresponding real power is differentiable.

### Derivation

Split the product's increment into two main terms and a smaller cross term.

$$
\Delta(uv)=v\Delta u+u\Delta v+\Delta u\Delta v
$$

After division by $h$, differentiability makes the cross term tend to zero.

$$
\frac{\Delta u\Delta v}{h}=\frac{\Delta u}{h}\Delta v\to0
$$

The remaining terms give the product rule.

$$
(uv)\prime=u\prime v+uv\prime
$$

### Interactive diagram

Move the base point on $x^{3}$ from 0 to 1. How does the slope change? Check against $3 a^{2}$.

Watch the difference quotient of $x^{3}$ approach $3 x^{2}$. Change $a$ to check other points.

Online diagram: ?lang=en#/lesson/derivative-rules?view=visual

### Guided experiment

1. **A horizontal tangent** For the cubic curve, set the base point to 0.

Preset observation: The exact derivative is $3a^2=0$; a finite quotient still has a small error.

2. **Try another point** Change the base point to 1 and shrink the gap.

Preset observation: The exact derivative is 3; the right-side quotient is approximately 3.0301.

3. **Compare a negative input** Change the base point to −1, keeping the small gap.

Preset observation: The derivative is again 3. A function can have a negative value and a positive rate of change.

### Worked examples

#### Example 1: Differentiate a polynomial term by term

$f(x)=4x^3-2x^2+7x-5$.

- Keep each constant multiplier, multiply by the original exponent, and lower the power by one.
- The constant −5 has derivative 0.

**Answer: $f\prime(x)=12x^2-4x+7$.**

#### Example 2: Differentiate a quotient

Find the derivative of $f(x)=\frac{x+1}{x-1}$.

- $u = x + 1$, $v = x - 1$, $u' = v' = 1$.
- The numerator is $(x - 1) - (x + 1) = - 2$.

**Answer: $f\prime(x)=-\frac{2}{(x-1)^2}$, $x \ne 1$.**

### Common mistakes

- **Writing the product derivative as $u' v'$.** The correct rule has two terms, differentiating only one factor in each.

- **Reversing the terms in the quotient-rule numerator.** Use $\text{numerator derivative}\times\text{denominator}$ minus $\text{numerator}\times\text{denominator derivative}$.

### Exercises and solutions

**1. Differentiate $x^5-3x$.**

Hint: Keep constant multipliers.

Answer: $5x^4-3$.

- Apply the power rule term by term.

**2. Differentiate $x^2(x+1)$.**

Hint: Expanding first provides another check.

Answer: $3x^2+2x$.

- The product rule gives $2 x (x + 1) + x^{2}$. Combine like terms.

**3. Find the derivative of $\frac{1}{x}$ at $x = 2$.**

Hint: Write the reciprocal as a negative power.

Answer: $-\frac{1}{4}$.

- The derivative is $- x^{- 2}$; substitute 2.

**4. Differentiate $\sqrt{x}$ and state the allowed values of $x$.**

Hint: The derivative of a half power has a denominator.

Answer: $\frac{1}{2\sqrt{x}}$, $x > 0$.

- Write it as $x^{\frac{1}{2}}$ and apply the power rule.
- There is no finite two-sided derivative at $x = 0$.

Prerequisites: Derivatives: From Secants to Tangents.

## 3.3 The Chain Rule

*Outer rate $\times$ inner rate*

### The idea

When functions are nested, multiply their rates: the outer derivative times the inner derivative.

### Intuition

For $y = (x^{2} + 1)^{3}$, call the inner expression $u$. Differentiate the outer function to get $3 u^{2}$, then multiply by $u' = 2 x$. The result is $6 x (x^{2} + 1)^{2}$.

### Another explanation

A change passes through two stages: input to inner output, then inner output to outer output. Multiply the rates of those stages to get the total rate.

### Quick check

Which factor is easiest to omit when differentiating $y = (x^{2} + 1)^{3}$?

A. $2 x$
B. $3$
C. $x^{2} + 1$

Answer: A. The outer rate is $3 (x^{2} + 1)^{2}$; the inner rate is $2 x$. The chain rule multiplies them.

### How do you identify the layers?

Find the last operation performed. In $(x^{2} + 1)^{3}$, cubing is the outer operation and $x^{2} + 1$ is the inner function. Differentiate from outside in; each layer supplies a factor.

### When is the product rule also needed?

The outermost operation in $x^{2} \sin (x^{3})$ is multiplication, so start with the product rule. Then use the chain rule inside $\sin (x^{3})$. Nesting and multiplication are different structures.

### Why can the rates be multiplied?

Since $\Delta  u \approx g' (x) \Delta  x$ and $\Delta  y \approx f' (u) \Delta  u$, we get $\Delta  y \approx f' (u) g' (x) \Delta  x$. A rigorous proof controls remainders rather than canceling a possibly zero $\Delta  u$.

### Definition and conditions

If $g$ is differentiable at $x$ and $f$ is differentiable at $g (x)$, their composition is differentiable.

$$
\frac d{dx}f(g(x))=f\prime(g(x))g\prime(x)
$$

- Evaluate the outer derivative at $g (x)$. Both differentiability assumptions are required.

### Derivation

Use the first-order differentiability expansion for $f (g (x))$.

$$
\Delta y=f\prime(g(x))\Delta u+o(\Delta u)
$$

The inner function also has a first-order expansion.

$$
\Delta u=g\prime(x)h+o(h)
$$

Substitute and divide by $h$. The remainder tends to zero, giving the chain rule.

$$
\frac{\Delta y}{h}\to f\prime(g(x))g\prime(x)
$$

### Interactive diagram

At $x = 0$, the outer rate is nonzero. Why can the total rate still be zero? Check the inner rate.

Choose $x$ and compare the inner rate $2 x$ for $u = x^{2} + 1$ with the outer rate $3 u^{2}$ for $y = u^{3}$. Their product is the total rate.

Online diagram: ?lang=en#/lesson/chain-rule?view=visual

### Guided experiment

1. **Zero inner rate** Set the input to 0.

Preset observation: The outer rate is 3, but the inner rate is 0. The total derivative is 0.

2. **A positive inner rate** Set the input to 1.

Preset observation: The inner output is 2 and its rate is 2; the outer rate is 12. The total derivative is 24.

3. **A negative inner rate** Set the input to −1.

Preset observation: The inner output remains 2, but its rate is −2. The total derivative is −24.

### Worked examples

#### Example 1: The function inside a cube

Differentiate $y=(x^2+1)^3$.

- The outer function is $u^{3}$, with derivative $3 u^{2}$.
- The inner derivative is $2 x$. Multiply, then substitute back.

**Answer: $y\prime=6x(x^2+1)^2$.**

#### Example 2: Two layers

Differentiate $y=\sqrt{1+x^2}$.

- The outer function $u^{\frac{1}{2}}$ has derivative $(\frac{1}{2}) u^{\frac{- 1}{2}}$.
- The inner function $1 + x^{2}$ has derivative $2 x$.

**Answer: $y\prime=\frac{x}{\sqrt{1+x^2}}$.**

### Common mistakes

- **Differentiating only the outer function.** Also multiply by the rate of the inner function.

- **Replacing $f' (g (x))$ by $f' (x)$.** The input received by the outer function is $g (x)$.

### Exercises and solutions

**1. Differentiate $(2x+1)^4$.**

Hint: The inner derivative is 2.

Answer: $8(2x+1)^3$.

- The outer derivative gives $4 (2 x + 1)^{3}$; the inner derivative gives 2.

**2. Differentiate $\frac{1}{1+x^2}$.**

Hint: Use the power −1.

Answer: $-\frac{2x}{(1+x^2)^2}$.

- Write it as $(1 + x^{2})^{- 1}$ and multiply the outer derivative by $2 x$.

**3. Find the derivative of $y=(x^2+1)^3$ at $x = 1$.**

Hint: First differentiate the complete expression.

Answer: $24$.

- $6 \times 1 \times (1 + 1)^{2} = 24$.

**4. Differentiate $x^2(1+x)^3$.**

Hint: Start with the outermost operation.

Answer: $2x(1+x)^3+3x^2(1+x)^2$.

- Apply the product rule first, then the chain rule to $(1 + x)^{3}$.

Prerequisites: Composition and Inverse Functions, Basic Differentiation Rules.

## 3.4 Derivatives of Trigonometric Functions

*Instantaneous change in periodic motion.*

### The idea

With radian inputs, the derivative of $\sin$ is $\cos$, and the derivative of $\cos$ is $- \sin$. A composite angle also contributes its inner derivative.

### Intuition

The angle in $\sin (3 x)$ changes three times as fast as in $\sin x$, so its derivative is $3 \cos (3 x)$. The factor 3 comes from the chain rule.

### Another explanation

Height and rate of change are different quantities. Sine's rate is cosine: the wave can be high while its instantaneous rate is near zero.

### Quick check

What is $(\cos x)'$?

A. $\sin x$
B. $- \sin x$
C. $- \cos x$

Answer: B. Near $x = \frac{\pi }{2}$, $\cos x$ decreases with slope −1. This matches $- \sin x$; the angle is in radians.

### Where does the sine derivative come from?

Expand $\sin (x + h)$ using the addition formula. In the quotient, $\frac{\sin h}{h} \to 1$ and $\frac{\cos h - 1}{h} \to 0$, leaving $\cos x$.

### Must you memorize every other formula?

The quotient and reciprocal rules recover $(\cot x)\prime=-\csc^2x$, $(\sec x)\prime=\sec x\tan x$, and $(\csc x)\prime=-\csc x\cot x$. Tangent and secant require $\cos x\ne0$; cotangent and cosecant require $\sin x\ne0$.

### Why are radians required?

An angle of $\theta$ degrees equals $\frac{\pi  \theta }{180}$ radians, so differentiation with respect to $\theta$ introduces $\frac{\pi }{180}$. The standard formulas assume radians. Remember the minus sign when differentiating $\cos$.

### Definition and conditions

Use radian inputs at points where the trigonometric function is defined.

$$
(\sin x)\prime=\cos x,\quad(\cos x)\prime=-\sin x,\quad(\tan x)\prime=\sec^2x
$$

- $\sec x = \frac{1}{\cos x}$ and $\csc x = \frac{1}{\sin x}$; their denominators must be nonzero.

### Derivation

Expand the sine difference quotient.

$$
\frac{\sin(x+h)-\sin x}{h}=\sin x\frac{\cos h-1}{h}+\cos x\frac{\sin h}{h}
$$

The two basic limits are 0 and 1, respectively.

$$
\lim_{h\to0}\frac{\cos h-1}{h}=0,\quad\lim_{h\to0}\frac{\sin h}{h}=1
$$

The remaining expression is $\cos x$.

$$
(\sin x)\prime=\cos x
$$

### Interactive diagram

What is the tangent slope at a maximum of $\sin x$? Check using $\cos (a)$.

Move $a$ along the sine curve. Its tangent slope is $\cos (a)$.

Online diagram: ?lang=en#/lesson/trig-derivatives?view=visual

### Guided experiment

1. **At a zero** Set the base point to 0 and the gap to 0.01.

Preset observation: $\sin0=0$, while the derivative is $\cos0=1$.

2. **Near a peak** Set the base point to 1.57.

Preset observation: The curve's height is near 1, but its slope is near 0.

3. **Crossing downward through zero** Set the base point to 3.14.

Preset observation: The height is near 0 and the slope near −1. These base points are decimal approximations in radians.

### Worked examples

#### Example 1: A shorter period, a faster rate

Differentiate $y=\sin(4x)$.

- The outer derivative gives $\cos (4 x)$.
- The inner derivative is 4. Multiply.

**Answer: $y\prime=4\cos(4x)$.**

#### Example 2: A product with a trigonometric function

Differentiate $y=x\cos x$.

- The product rule gives $1 \cdot \cos x + x \cdot (- \sin x)$.
- Keep the minus sign in the second term.

**Answer: $y\prime=\cos x-x\sin x$.**

### Common mistakes

- **Forgetting the minus sign when differentiating cosine.** $\cos$ decreases just to the right of zero; its derivative $- \sin$ agrees with that behavior.

- **Omitting a multiplier inside the angle.** A shorter period means faster change, so the chain-rule factor is essential.

### Exercises and solutions

**1. Differentiate $\cos(2x)$.**

Hint: Check both the minus sign and the chain-rule factor.

Answer: $-2\sin(2x)$.

- Differentiate cosine with its minus sign, then multiply by the inner derivative 2.

**2. Differentiate $\sin^2x$.**

Hint: This is a squared sine, not $\sin (x^{2})$.

Answer: $2\sin x\cos x$.

- Multiply the derivative of the outer square by the derivative of the inner sine.

**3. Find the derivative of $\tan x$ at 0.**

Hint: The quotient rule also works.

Answer: $1$.

- $\sec^{2} 0 = \frac{1}{\cos^{2} 0} = 1$.

**4. Differentiate $\sec x$.**

Hint: Express secant as the reciprocal of cosine.

Answer: $\sec x\tan x$.

- Write it as $(\cos x)^{- 1}$. Differentiation gives $\frac{\sin x}{\cos^{2} x}$.

Prerequisites: Trigonometric Functions and Radians, Limit Laws, The Chain Rule.

## 3.5 Implicit Differentiation

*Find a slope without first solving for $y$.*

### The idea

You can differentiate a relation without solving it for $y$. Treat $y$ as a function of $x$, and include $y'$ whenever the chain rule differentiates through $y$.

### Intuition

Differentiating $x^{2} + y^{2} = 1$ gives $2 x + 2 y \cdot y' = 0$. For $y \ne 0$, the slope is $\frac{- x}{y}$.

### Another explanation

You need not solve the whole curve as one function. Differentiate along the chosen branch, remembering that its vertical coordinate changes. The slope belongs to a specific point.

### Quick check

Treating $y$ as a function of $x$, what is $(y^{2})'$?

A. $2 y$
B. $2 y \cdot y'$
C. ${y'}^{2}$

Answer: B. $y^{2}$ composes an outer square with the inner function $y (x)$. Multiply by the inner derivative $y'$.

### How do you isolate $y'$?

Differentiate both sides with respect to $x$. Use the chain rule on terms involving $y$ and the product rule on $x y$. Collect the $y'$ terms, factor, and solve.

### Can the same $x$ have two slopes?

Yes. The slope depends on the specific point $(x , y)$ on the curve. If the denominator vanishes, do not divide: investigate a vertical tangent or another singularity.

### How do you find $y''$?

Differentiate $y'$ again, still including $y'$ when differentiating through $y$. Differentiate before substituting point coordinates; early substitution can erase variable dependence.

### Definition and conditions

Suppose the differentiable relation $F (x , y) = 0$ has a local differentiable branch $y = y (x)$ with $F_{y} \ne 0$. Differentiation with respect to $x$ determines its slope.

$$
F_x+F_y y\prime=0,\qquad y\prime=-\frac{F_x}{F_y}
$$

- Assume this differentiable branch exists. $F_{x}$ and $F_{y}$ mean differentiation with respect to $x$ and $y$, respectively, while holding the other variable fixed.
- Evaluate derivatives at the point $(x , y (x))$ on the curve. Dividing in the slope formula requires $F_{y} \ne 0$.

### Derivation

Differentiate both sides of the circle equation.

$$
x^2+y^2=4\quad\Rightarrow\quad2x+2yy\prime=0
$$

Solve for $y'$ where $y \ne 0$.

$$
y\prime=-\frac xy
$$

On the upper semicircle, the slope is negative for $x > 0$, agreeing with the graph.

### Interactive diagram

As you approach either endpoint of the upper semicircle, does the tangent become flatter or steeper?

Move $a$ along the upper semicircle of radius 2. The tangent becomes steeper near the endpoints.

Online diagram: ?lang=en#/lesson/implicit?view=visual

### Guided experiment

1. **Near the top of the circle** On the upper semicircle of radius 2, set the base point to 0.

Preset observation: The tangent at the top is horizontal; its exact slope is 0.

2. **Move along the right side** Change the base point to 1.

Preset observation: The height is $\sqrt3$, and the slope is $-\frac1{\sqrt3}$.

3. **Approach an endpoint** Set the base point to 1.9, keeping gap 0.01.

Preset observation: The height is smaller and the tangent steeper. At the endpoint, the nonzero-denominator formula cannot supply a finite slope.

### Worked examples

#### Example 1: A tangent to a circle

Find the tangent to $x^2+y^2=25$ at $(3,4)$.

- Implicit differentiation gives $y' = \frac{- x}{y}$.
- The line has slope $\frac{- 3}{4}$ and passes through $(3,4)$.

**Answer: $y-4=-\frac34(x-3)$.**

#### Example 2: A relation containing a product

Differentiate $xy+y^2=6$.

- $x y$ gives $y + x y'$; $y^{2}$ gives $2yy\prime$.
- Collect terms: $y + (x + 2 y) y' = 0$.

**Answer: $y\prime=-\frac{y}{x+2y}$, provided the denominator is nonzero.**

#### Example 3: Differentiate a second time

On the upper semicircle $x^2+y^2=25$, find $y\prime\prime$ at $(3,4)$.

- First $y\prime=-\frac{x}{y}$. On a branch with $y\ne0$, differentiate again: $y\prime\prime=\frac{-y+xy\prime}{y^2}$.
- Substitute $y\prime=-\frac{x}{y}$ to get $y\prime\prime=-\frac{x^2+y^2}{y^3}=-\frac{25}{y^3}$. Only then substitute $(3,4)$.

**Answer: $y\prime\prime=-\frac{25}{64}$; the upper semicircle is concave down there.**

### Common mistakes

- **Treating $y$ as a constant.** Along the curve, $y$ changes with $x$. Every differentiation through $y$ needs its chain-rule factor $y'$.

- **Calling the slope zero when the denominator is zero.** A zero denominator means this formula does not provide a finite slope.

### Exercises and solutions

**1. Find $y'$ from $x^2+y^2=1$.**

Hint: The radius does not affect this slope relation.

Answer: $-\frac{x}{y}$($y \ne 0$).

- Differentiate to obtain $2 x + 2 y y' = 0$, then solve.

**2. Find $y'$ from $y^3=x$.**

Hint: Differentiate the complete expression $y^{3}$ first.

Answer: $\frac{1}{3y^2}$($y \ne 0$).

- $3 y^{2} y' = 1$.

**3. Find the slope of $x^2+y^2=25$ at $(0,5)$.**

Hint: Substitute a point that lies on the circle.

Answer: $0$.

- $\frac{- x}{y} = \frac{- 0}{5} = 0$.

**4. Find $y'$ from $x+y+xy=3$.**

Hint: Use the product rule for $x y$.

Answer: $-\frac{1+y}{1+x}$($x \ne - 1$).

- $1 + y' + y + x y' = 0$. Collect the $y'$ terms.

**5. On the upper semicircle $x^2+y^2=4$, find $y\prime\prime$ at $(0,2)$.**

Hint: Differentiate the first differentiated equation again to avoid a quotient.

Answer: $-\frac12$.

- From $2x+2yy\prime=0$, differentiate again: $2+2(y\prime)^2+2yy\prime\prime=0$.
- Here $y\prime=0$, so $2+4y\prime\prime=0$, giving $y\prime\prime=-\frac12$.

Prerequisites: The Chain Rule, Basic Differentiation Rules.

## Chapter review

Try independently before reading the solutions.

**1. Differentiate $y=x^2\sin(x^3)$.**

Hint: The outer structure is a product; the sine term also needs the chain rule.

Answer: $2x\sin(x^3)+3x^4\cos(x^3)$.

- Use the product rule, then multiply the sine derivative by the inner derivative $3 x^{2}$.

**2. Find the tangent to $y=\frac{x+1}{x^2+1}$ at $x = 0$.**

Hint: A tangent needs both a point and a slope.

Answer: $y=x+1$.

- The function value is 1; the quotient rule gives derivative 1 at 0.

**3. For $x^2+xy+y^2=3$, find $y'$ and the slope at $(1,1)$.**

Hint: Use the product rule for $xy$ and chain rule for $y^2$.

Answer: $y\prime=-\frac{2x+y}{x+2y}$; the slope at the point is −1.

- Differentiate: $2 x + y + x y' + 2 y y' = 0$.
- Collect $y'$ terms and substitute the point.

# Chapter 4 · More derivatives and models of change

Exponential, logarithmic, and inverse trigonometric derivatives extend our tools. Related rates, linear approximation, and Newton's method put them to work.

Goals:
- Differentiate exponential, logarithmic, and inverse trig functions
- Set up related rates and linear approximations
- Apply Newton's method and recognize failures

## 4.1 Differentiating Exponentials and Logarithms

*What makes $e$ special?*

### The idea

$e^{x}$ is its own derivative, and the derivative of $\ln x$ is $\frac{1}{x}$. Other bases and composite inputs contribute extra factors.

### Intuition

For $y = e^{x^{2}}$, the outer derivative retains $e^{x^{2}}$ and the inner derivative contributes $2 x$, giving $2 x e^{x^{2}}$.

### Another explanation

Exponential growth has a rate proportional to the current amount. With the natural base, that proportionality factor is one: the curve's height equals its rate of change.

### Quick check

For $x > 0$, what is $(\ln (3 x))'$?

A. $\frac{1}{3 x}$
B. $\frac{3}{x}$
C. $\frac{1}{x}$

Answer: C. The chain rule gives $(\frac{1}{3 x}) \cdot 3 = \frac{1}{x}$. The real domain of $\ln (3 x)$ is $x > 0$.

### What if the base is not $e$?

Write $b^{x} = e^{x \ln b}$ to get derivative $b^{x} \ln b$, for $b > 0$. Use $\ln x$ only for $x > 0$; $\ln |x|$ has derivative $\frac{1}{x}$ for $x \ne 0$.

### How do you differentiate $\ln (g (x))$?

The result is $\frac{g' (x)}{g (x)}$, provided the original logarithm is defined. For $\ln |g (x)|$, require $g (x) \ne 0$.

### When should you use logarithmic differentiation?

When a variable occurs in both base and exponent, as in $x^{x}$ ($x > 0$), take $\ln$ first: $\ln y = x \ln x$. Differentiation gives $\frac{y'}{y} = \ln x + 1$; then multiply by $y$.

### Definition and conditions

The following formulas apply on their respective domains.

$$
(e^x)\prime=e^x,\quad(b^x)\prime=b^x\ln b,\quad(\ln x)\prime=\frac1x
$$

- Require $b > 0$; $\ln x$ requires $x > 0$. Every logarithm used in logarithmic differentiation must be defined.

### Derivation

Write the inverse relation $y = \ln x$.

$$
e^y=x
$$

Differentiate with respect to $x$, remembering that $y$ depends on $x$.

$$
e^y y\prime=1
$$

Substitute $e^{y} = x$.

$$
y\prime=\frac1x
$$

### Interactive diagram

Move the base point on $e^{x}$. How do its height and tangent slope compare?

Move $a$: the height $e^{a}$ equals the tangent slope.

Online diagram: ?lang=en#/lesson/exp-log-derivatives?view=visual

### Guided experiment

1. **Compare at zero** Set the base point to 0.

Preset observation: Both height and exact slope are 1.

2. **Move right** Set the base point to 1.

Preset observation: Both height and slope are approximately 2.71828.

3. **Move left** Set the base point to −1.

Preset observation: Both are approximately 0.36788. A negative input does not make an exponential output negative.

### Worked examples

#### Example 1: An exponential with an inner function

Differentiate $e^{3x^2}$.

- The outer derivative retains $e^{3 x^{2}}$.
- The inner function $3 x^{2}$ has derivative $6 x$.

**Answer: $6x e^{3x^2}$.**

#### Example 2: A variable base and exponent

Differentiate $x^x$ for $x > 0$.

- Set $y = x^{x}$ and take logarithms: $\ln y = x \ln x$.
- Differentiate to get $\frac{y'}{y} = \ln x + 1$, then multiply by $y$.

**Answer: $x^x(\ln x+1)$.**

### Common mistakes

- **Writing only $e^{u}$ as the derivative of $e^{u}$.** Also multiply by $u'$.

- **Applying the fixed-power rule directly to $x^{x}$.** The exponent $x$ changes too. Use logarithmic differentiation.

### Exercises and solutions

**1. Differentiate $\ln(1+x^2)$.**

Hint: Use the chain rule for $\ln u$.

Answer: $\frac{2x}{1+x^2}$.

- The outer derivative gives $\frac{1}{u}$ and the inner derivative gives $2 x$.

**2. Differentiate $2^x$.**

Hint: A base other than $e$ introduces a different multiplier.

Answer: $2^x\ln2$.

- Write it as $e^{x \ln 2}$ and differentiate.

**3. Find the derivative of $e^{x}$ at 0.**

Hint: The curve's height equals its slope.

Answer: $1$.

- The derivative is $e^{x}$, which equals 1 at 0.

**4. Differentiate $\ln|3x-1|$ and state its restriction.**

Hint: The absolute value permits both signs, but not zero.

Answer: $\frac{3}{3x-1}$, $x \ne \frac{1}{3}$.

- Use $\frac{u'}{u}$; the expression inside the absolute value must be nonzero.

Prerequisites: Exponential and Logarithmic Functions, Implicit Differentiation, The Chain Rule.

## 4.2 Inverse-Function and Inverse-Trigonometric Derivatives

*Invert the slope at the correct point and branch.*

### The idea

An inverse function's slope is the reciprocal of the original function's slope at the corresponding point, provided that original slope is nonzero.

### Intuition

The original function sends $x$ to $y$; its inverse sends $y$ back to $x$. Exchanging the coordinate roles changes $\frac{\mathrm{d}y}{\mathrm{d}x}$ into $\frac{\mathrm{d}x}{\mathrm{d}y}$.

### Another explanation

An inverse exchanges inputs and outputs, so its local scale factor is reciprocal. Find the corresponding point before inverting the derivative.

### Quick check

Does $\arcsin (\sin x) = x$ hold for every real $x$?

A. Yes
B. Only on the principal interval $[\frac{- \pi }{2} , \frac{\pi }{2}]$
C. Never

Answer: B. The output of $\arcsin$ is restricted to $[\frac{- \pi }{2} , \frac{\pi }{2}]$. Outside it, the original angle generally cannot be recovered.

### How do you differentiate an inverse?

Apply the chain rule to $f (f^{-1} (x)) = x$ to obtain $(f^{-1})' (x) = \frac{1}{f' (f^{-1} (x))}$. The chosen branch must be invertible and the denominator nonzero.

### Why choose branches for inverse trigonometric functions?

Trigonometric outputs repeat. Restricting the outputs of $\arcsin$ to $[\frac{- \pi }{2} , \frac{\pi }{2}]$, $\arccos$ to $[0 , \pi ]$, and $\arctan$ to $(\frac{- \pi }{2} , \frac{\pi }{2})$ makes each inverse unique.

### Where do these derivative formulas apply?

The derivatives of $\arcsin$ and $\arccos$ apply only for $|x| < 1$. The function $\arctan$ is differentiable on the whole real line. Check denominators before substituting endpoints.

### Definition and conditions

Inverse-trigonometric derivatives use the principal branches.

$$
(\arcsin x)\prime=\frac1{\sqrt{1-x^2}},\quad(\arccos x)\prime=-\frac1{\sqrt{1-x^2}},\quad(\arctan x)\prime=\frac1{1+x^2}
$$

- The first two formulas require $|x| < 1$. The function $\arctan$ is differentiable everywhere on the real line.
- The general inverse derivative formula requires a differentiable inverse on the chosen interval and a nonzero original derivative at the corresponding point.

### Derivation

Set $y = \arcsin x$. On the principal branch, $\cos y \ge 0$.

$$
\sin y=x\quad\Rightarrow\quad\cos y\,y\prime=1
$$

For $|x| < 1$, $\cos y$ is strictly positive.

$$
\cos y=\sqrt{1-\sin^2y}=\sqrt{1-x^2}
$$

Solve for the derivative.

$$
y\prime=\frac1{\sqrt{1-x^2}}
$$

### Interactive diagram

As the base point on $\arctan$ moves away from 0, does its slope increase or decrease? Check the formula.

The tangent slope of $\arctan$ is $\frac{1}{1 + a^{2}}$: positive everywhere and smaller farther from zero.

Online diagram: ?lang=en#/lesson/inverse-trig?view=visual

### Guided experiment

1. **The central slope** Set the arctangent base point to 0.

Preset observation: The exact slope is 1.

2. **Move one unit** Set the base point to 1.

Preset observation: The slope is $\frac12$. The curve still rises, but more slowly.

3. **Move farther away** Set the base point to 3.

Preset observation: The slope is $\frac1{10}$, still positive. The curve has not stopped rising.

### Worked examples

#### Example 1: An inner function too

Differentiate $\arctan(2x)$.

- The outer derivative gives $\frac{1}{1 + (2 x)^{2}}$.
- The inner derivative is 2.

**Answer: $\frac{2}{1+4x^2}$.**

#### Example 2: An inverse at a specified point

Suppose $f$ is continuously differentiable and one-to-one near 2, with $f(2)=5$ and $f\prime(2)=3$. Find $(f^{-1})\prime(5)$ for this inverse branch.

- The inverse sends input 5 to output 2.
- Take the reciprocal of the original derivative at 2.

**Answer: $\frac{1}{3}$.**

### Common mistakes

- **Confusing $\arcsin x$ with $\frac{1}{\sin x}$.** The former is an inverse function; the latter is $\csc x$.

- **Evaluating the original derivative at the wrong point.** First find the inverse output $y$, then evaluate $f' (y)$.

### Exercises and solutions

**1. Differentiate $\arcsin(\frac{x}{2})$.**

Hint: Check both the chain rule and the domain.

Answer: $\frac{1}{\sqrt{4-x^2}}$, $|x| < 2$.

- First obtain $\frac{\frac{1}{2}}{\sqrt{1 - \frac{x^{2}}{4}}}$, then simplify.

**2. Find the derivative of $\arctan x$ at 1.**

Hint: Use the principal-branch formula.

Answer: $\frac{1}{2}$.

- $\frac{1}{1 + 1^{2}} = \frac{1}{2}$.

**3. Find the derivative of $\arccos x$ at 0.**

Hint: The inverse cosine is decreasing.

Answer: $-1$.

- $\frac{- 1}{\sqrt{1 - 0}} = - 1$.

**4. Suppose $f$ is continuously differentiable and one-to-one near 1, with $f(1)=4$ and $f\prime(1)=2$. Find $(f^{-1})\prime(4)$ for this branch.**

Hint: First map 4 back to 1.

Answer: $\frac{1}{2}$.

- The original input is 1, so the reciprocal derivative is $\frac{1}{2}$.

Prerequisites: Composition and Inverse Functions, Implicit Differentiation.

## 4.3 Related Rates

*Write the relationship, then differentiate with respect to time.*

### The idea

When several quantities change with time, differentiate their relationship to connect their rates.

### Intuition

From $A = \pi  r^{2}$, a changing radius gives $\frac{\mathrm{d}A}{\mathrm{d}t} = \frac{2 \pi  r \cdot \mathrm{d}r}{\mathrm{d}t}$. The same radial growth rate produces faster area growth for a larger circle.

### Another explanation

Several quantities share a constraint. Keep them variable while differentiating with respect to time, then substitute the dimensions at the instant of interest.

### Quick check

A circle has area $A = \pi  r^{2}$ and time-dependent radius $r$. What is $\frac{\mathrm{d}A}{\mathrm{d}t}$?

A. $2 \pi  r$
B. $\frac{2 \pi  r \cdot \mathrm{d}r}{\mathrm{d}t}$
C. $\pi  (\frac{\mathrm{d}r}{\mathrm{d}t})^{2}$

Answer: B. Differentiate with respect to time: $\frac{\mathrm{d}A}{\mathrm{d}t} = \frac{2 \pi  r \cdot \mathrm{d}r}{\mathrm{d}t}$. Omitting $\frac{\mathrm{d}r}{\mathrm{d}t}$ ignores how fast the radius changes.

### Why substitute numerical values last?

Differentiate the relationship while its quantities can still change. Replacing $r$ by a number too early freezes it as a constant and loses $\frac{\mathrm{d}r}{\mathrm{d}t}$.

### How do you choose signs and units?

An increasing variable has a positive rate; a decreasing one has a negative rate, according to its definition. Length rates have length/time units; area rates have area/time units.

### Where does the relationship come from?

Use geometry or physics. A fixed-length ladder satisfies $x^{2} + y^{2} = L^{2}$. For water similar in shape to a conical tank, the fixed ratio $\frac{r}{h}$ eliminates one variable.

### Definition and conditions

Differentiate with respect to time $t$, applying the chain rule to every changing variable.

$$
A=\pi r^2\quad\Rightarrow\quad\frac{dA}{dt}=2\pi r\frac{dr}{dt}
$$

- The relationship must hold near the time in question. Differentiate before substituting instantaneous values.

### Derivation

A ladder of length 5 satisfies the Pythagorean relation.

$$
x^2+y^2=25
$$

Differentiate both sides with respect to time.

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0
$$

Solve for the velocity of the end against the wall.

$$
\frac{dy}{dt}=-\frac xy\frac{dx}{dt}
$$

### Interactive diagram

If the ladder's foot moves outward at constant speed, does its top descend at constant speed? Compare rates at different positions.

Move the ladder's foot $x$ and compare height $y = \sqrt{25 - x^{2}}$ with its downward rate of change.

Online diagram: ?lang=en#/lesson/related-rates?view=visual

### Guided experiment

1. **Record one instant** For a ladder of length 5, set the foot's distance to 3.

Preset observation: The height is 4. If the foot's speed is 1, the top's rate is $-\frac34$.

2. **Move farther out** Set the foot's distance to 4.

Preset observation: The height falls to 3 and the top's rate becomes $-\frac43$: a faster descent.

3. **Approach the horizontal position** Set the foot's distance to 4.8.

Preset observation: The top descends faster. Constant foot speed does not imply constant top speed. The model does not include the zero-height endpoint.

### Worked examples

#### Example 1: An expanding circle

A radius grows at $2\,\mathrm{cm}\,\mathrm{s}^{-1}$. Find the area rate when $r=3\,\mathrm{cm}$.

- $\frac{\mathrm{d}A}{\mathrm{d}t} = \frac{2 \pi  r \cdot \mathrm{d}r}{\mathrm{d}t}$.
- Substitute $r = 3$ and $\frac{\mathrm{d}r}{\mathrm{d}t} = 2$, retaining the units.

**Answer: $12\pi$ $\mathrm{cm}^{2}\,\mathrm{s}^{-1}$.**

#### Example 2: A sliding ladder

The foot of a $5\,\mathrm{m}$ ladder moves away from a wall at $1\,\mathrm{m}\,\mathrm{s}^{-1}$. How fast does the top descend when $x=3\,\mathrm{m}$?

- $y=\sqrt{25-9}=4\,\mathrm{m}$.
- $\frac{\mathrm{d}y}{\mathrm{d}t}=-\frac{3}{4}\times1=-0.75\,\mathrm{m}\,\mathrm{s}^{-1}$.

**Answer: The top moves downward at $0.75\,\mathrm{m}\,\mathrm{s}^{-1}$; the rate of change of $y$ is $-0.75\,\mathrm{m}\,\mathrm{s}^{-1}$.**

#### Example 3: Eliminate the radius using similarity

An inverted conical tank is $6\,\mathrm{m}$ high with top radius $3\,\mathrm{m}$. Water enters at $2\,\mathrm{m}^3\mathrm{s}^{-1}$. How fast does the surface rise at depth $2\,\mathrm{m}$?

- Similar triangles give $\frac rh=\frac36=\frac12$, so $V=\frac13\pi r^2h=\frac\pi{12}h^3$.
- Differentiate with respect to time: $\frac{\mathrm{d}V}{\mathrm{d}t}=\frac\pi4h^2\frac{\mathrm{d}h}{\mathrm{d}t}$. Only then substitute $h=2$ and inflow rate 2.

**Answer: $\frac{\mathrm{d}h}{\mathrm{d}t}=\frac2\pi\,\mathrm{m}\,\mathrm{s}^{-1}$. The radius changes too, so it cannot be held constant.**

### Common mistakes

- **Substituting instantaneous dimensions before differentiating.** That freezes variables as constants. Differentiate first.

- **Using positive $\frac{\mathrm{d}y}{\mathrm{d}t}$ for descent.** If $y$ measures height, its derivative is negative during descent.

### Exercises and solutions

**1. For a sphere $V = \frac{4 \pi  r^{3}}{3}$, with $r = 2$ and $\frac{\mathrm{d}r}{\mathrm{d}t} = 3$, find $\frac{\mathrm{d}V}{\mathrm{d}t}$.**

Hint: Differentiate with $r (t)$ still variable.

Answer: $48\pi$.

- $\frac{\mathrm{d}V}{\mathrm{d}t} = \frac{4 \pi  r^{2} \mathrm{d}r}{\mathrm{d}t} = 4 \pi  \times 4 \times 3$.

**2. For a $5\,\mathrm{m}$ ladder, $x = 4$ and $\frac{\mathrm{d}x}{\mathrm{d}t} = 0.5$. Find $\frac{\mathrm{d}y}{\mathrm{d}t}$.**

Hint: The negative sign reflects decreasing height.

Answer: $-\frac{2}{3}$ $\mathrm{m}\,\mathrm{s}^{-1}$.

- $y = 3$, $\frac{\mathrm{d}y}{\mathrm{d}t} = - (\frac{4}{3}) \times 0.5 = \frac{- 2}{3}$.

**3. A square's side grows at $0.2\,\mathrm{cm}\,\mathrm{s}^{-1}$. Find its area rate when the side is 5 cm.**

Hint: The area rate is not the square of the side's rate.

Answer: $2$ $\mathrm{cm}^{2}\,\mathrm{s}^{-1}$.

- $A = s^{2}$, $A' = 2 s s' = 2 \times 5 \times 0.2$.

**4. What sign does a circle's area rate have when its radius shrinks?**

Hint: Identify which variable decreases.

Answer: Negative.

- $2 \pi  r > 0$ and $\frac{\mathrm{d}r}{\mathrm{d}t} < 0$, so their product is negative.

**5. Water enters a downward-pointing conical tank at constant volume rate, with both depths below the top. As depth increases from $2\,\mathrm m$ to $4\,\mathrm m$, what fraction of its former value is the surface's rising rate?**

Hint: For similar cones, horizontal cross-sectional area is proportional to depth squared.

Answer: $\frac14$.

- Similar cones satisfy $r=ch$, so the cross-sectional area is $A=\pi c^2h^2$.
- For fixed volume rate $Q=A\,dh/dt$, doubling depth reduces the rising rate to $1/4$ of its former value.

Prerequisites: Implicit Differentiation, The Chain Rule.

## 4.4 Linear Approximation and Differentials

*Near a differentiable point, a curve is nearly straight.*

### The idea

Near a differentiable point, estimate a function value using its tangent: original value plus $\text{derivative}\times\text{input change}$.

### Intuition

$\sqrt{4.1}$ is close to $\sqrt{4} = 2$. The derivative at 4 is $\frac{1}{4}$, so $\sqrt{4.1} \approx 2 + (\frac{1}{4}) \times 0.1 = 2.025$.

### Another explanation

Estimate a nearby output with the tangent at a convenient point. It captures first-order change; farther away, check the error rather than replacing approximation by equality.

### Quick check

Which formula correctly approximates $f (x)$ near $a$?

A. $f (x) \approx f (a) + f' (a) (x - a)$
B. $f (x) = f' (a) x$ for every $x$
C. $f (x) \approx f (a) + f' (x)$

Answer: A. Start at $(a , f (a))$ and follow its tangent slope. Unless the function is already linear, this is generally an approximation, not an exact identity.

### Why does a line approximate the curve?

Differentiability means $f(a+h)=f(a)+f\prime(a)h+R(h)$ with $R(h)/h\to0$, written $R(h)=o(h)$. The remainder becomes small relative to the input displacement; it need not be zero for a finite displacement.

### Are $\mathrm{d}y$ and $\Delta  y$ the same?

$\mathrm{d}y = f' (a) \mathrm{d}x$ is an estimate, while $\Delta  y = f (a + \mathrm{d}x) - f (a)$ is the actual change. If $f (a) \ne 0$, $\frac{\mathrm{d}y}{f (a)}$ estimates relative change.

### How do you tell whether the estimate is high or low?

Where $f'' > 0$ nearby, the curve lies above its tangent, so the estimate is low. Where $f'' < 0$, it is high. A numerical error bound requires more information, such as a bound on the second derivative.

### Definition and conditions

The linearization centered at a differentiable point $a$.

$$
L(x)=f(a)+f\prime(a)(x-a),\qquad dy=f\prime(a)\,dx
$$

- This is an approximation near $a$. Differentiability alone gives no specified error bound at a fixed distance.

### Derivation

Use the square-root tangent at $a = 4$ as the local model.

$$
f(4)=2,\quad f\prime(4)=\frac14
$$

Convert input change 0.1 into an estimated output change.

$$
L(4.1)=2+\frac14(0.1)=2.025
$$

The square root is concave down, so its tangent overestimates.

$$
\sqrt{4.1}\approx2.025
$$

### Interactive diagram

Farther from the center, does the tangent estimate usually improve or worsen? Check the error reading.

Adjust $x$ and center $a$. Compare the true value, tangent estimate, and actual error.

Online diagram: ?lang=en#/lesson/linearization?view=visual

### Guided experiment

1. **At the center** Set both the square-root center and evaluation point to 4.

Preset observation: Both curve and tangent give 2, with zero error.

2. **Estimate nearby** Keep the center at 4 and evaluate at 4.1.

Preset observation: The tangent gives 2.025, slightly above the true square root.

3. **Move farther away** Change the evaluation point to 6.

Preset observation: The tangent gives 2.5, with a noticeably larger error. This is a local model.

### Worked examples

#### Example 1: A quick square-root estimate

Estimate $\sqrt{9.06}$.

- Near 9, $f (9) = 3$ and $f' (9) = \frac{1}{6}$.
- The input change is 0.06, so the estimated output increase is 0.01.

**Answer: About 3.01, slightly above the true value.**

#### Example 2: Radius measurement error

A sphere's radius is about 10 cm, with error about 0.1 cm. Estimate its relative volume error.

- $V = \frac{4 \pi  r^{3}}{3}$, $\frac{\mathrm{d}V}{V} = \frac{3 \mathrm{d}r}{r}$.
- $\frac{3 \times 0.1}{10} = 0.03$.

**Answer: About 3%, as a first-order estimate.**

### Common mistakes

- **Writing an approximation as an exact equality.** Keep $\approx$; assess the error separately.

- **Using one tangent at any distance from its center.** Linearization is local. The error can become substantial farther away.

### Exercises and solutions

**1. Use the linearization at $a = 1$ to estimate $\ln (1.02)$.**

Hint: Choose a nearby center where evaluation is easy.

Answer: $0.02$.

- $\ln 1 = 0$ and the derivative at 1 is 1. The estimated increase is 0.02.

**2. What is the linearization of $e^{x}$ at $a = 0$?**

Hint: Write the tangent in point-slope form.

Answer: $L(x)=1+x$.

- The function value and derivative value are both 1.

**3. A square's side has 1% relative measurement error. Estimate the relative area error.**

Hint: The area's power determines the first-order multiplier.

Answer: Approximately $2\%$, as a first-order estimate.

- $A = s^{2}$, $\frac{\mathrm{d}A}{A} = \frac{2 \mathrm{d}s}{s}$.

**4. Does a tangent usually overestimate or underestimate a square root near a positive input?**

Hint: Compare concavity with tangent position.

Answer: Overestimate.

- Since $f'' < 0$, the curve is concave down and the tangent lies above it.

Prerequisites: Derivatives: From Secants to Tangents, Differentiating Exponentials and Logarithms.

## 4.5 Newton's Method: Follow a Tangent to a Root

*Improve a guess using the local slope.*

### The idea

Newton's method draws a tangent at the current point and takes its intersection with the $x$-axis as the next guess.

### Intuition

Near a suitable root, a tangent often suggests a better guess. Every step requires a nonzero derivative.

### Another explanation

At each step, temporarily replace the curved function by its tangent and use that line's root as the next guess. An update is possible without necessarily being an improvement.

### Quick check

A Newton step encounters $f' (x_{n}) = 0$. What should you do?

A. Continue dividing by zero
B. The formula fails here; change the starting value or the method
C. Conclude that $x_{n}$ must be a root

Answer: B. The update divides by $f' (x_{n})$. A zero slope prevents this step, and the function value need not be zero.

### How do you find the next guess?

Set the current tangent's $y = 0$ to obtain $x_{n + 1} = x_{n} - \frac{f (x_{n})}{f' (x_{n})}$. A zero or very small denominator makes the step invalid or unreliable.

### When should you stop?

Check both step size and function residual, and impose an iteration limit. A tiny step alone need not mean a nearby root; finite precision or a very large derivative can also cause it.

### Does it always converge?

No. Convergence is often fast near a simple root and slower near a multiple root. For $x^{3} - 2 x + 2$, starting at 0 cycles between 0 and 1. Try a different initial guess or use bisection when it fails.

### Definition and conditions

The iteration obtained by finding a tangent's root.

$$
x_{n+1}=x_n-\frac{f(x_n)}{f\prime(x_n)}
$$

- Each derivative must be nonzero and each calculation finite. Convergence needs additional local conditions and a suitable starting value.

### Derivation

Set the current tangent's output to zero.

$$
0=f(x_n)+f\prime(x_n)(x_{n+1}-x_n)
$$

Solve for the next input to obtain the iteration.

$$
x_{n+1}=x_n-\frac{f(x_n)}{f\prime(x_n)}
$$

For $x^{2} - 2$, the formula becomes an average.

$$
x_{n+1}=\frac12\left(x_n+\frac2{x_n}\right)
$$

### Interactive diagram

Must changing the initial guess make convergence faster? Compare tangent intersections and residuals, then try initial value zero.

Starting from an initial guess, display successive tangent intersections. Change the starting value and watch the residual or a near-zero-derivative warning.

Online diagram: ?lang=en#/lesson/newton?view=visual

### Guided experiment

1. **Take one step** Start at 1 and perform one iteration.

Preset observation: For the square-minus-2 model, the next guess is 1.5.

2. **Keep checking** Start at 1 again and perform four iterations.

Preset observation: The approximation is close to the square root of 2, with a small residual.

3. **Try a failing point** Change the initial value to 0.

Preset observation: The derivative is zero. Division is invalid, and the demonstration should explain why it stops.

### Worked examples

#### Example 1: Approximating $\sqrt{2}$

For $x^{2} - 2$, start at $x_{0} = 1$ and take two steps.

- $x_{1} = \frac{1 + 2}{2} = 1.5$.
- $x_{2} = \frac{1.5 + \frac{2}{1.5}}{2} = \frac{17}{12} \approx 1.416667$.

**Answer: After two steps, approximately 1.416667, already close to $\sqrt{2}$.**

#### Example 2: An explicit cycle

For $f (x) = x^{3} - 2 x + 2$, what happens starting at $x_{0} = 0$?

- $f (0) = 2$ and $f' (0) = - 2$ give $x_{1} = 1$.
- $f (1) = 1$ and $f' (1) = 1$ give $x_{2} = 0$.

**Answer: It cycles between 0 and 1 without converging.**

### Common mistakes

- **Assuming every step moves closer to a root.** Newton's method can move away or cycle. Monitor its progress.

- **Continuing to divide when the derivative is zero.** Stop and report the issue, or change methods.

### Exercises and solutions

**1. For $x^{2} - 4$, take one step from $x_{0} = 3$.**

Hint: Use the current function value and derivative.

Answer: $\frac{13}{6}$.

- $3 - \frac{9 - 4}{6} = \frac{13}{6}$.

**2. For $f (x) = x^{2} - 2$, can the first step start at $x_{0} = 0$?**

Hint: Check the derivative first.

Answer: No.

- $f' (0) = 0$, so the iteration would divide by zero.

**3. For the linear function $2 x - 6$, where does one step take any initial guess?**

Hint: Every tangent is the original line.

Answer: $3$.

- $x - \frac{2 x - 6}{2} = 3$. The line is its own tangent.

**4. Does a small residual alone prove a small input error?**

Hint: Distinguish output error from root-location error.

Answer: Not in general.

- For a flat function, a large input error can produce a small residual. Additional information, such as a positive lower bound on derivative magnitude, is needed.

Prerequisites: Derivatives: From Secants to Tangents, Basic Differentiation Rules.

## Chapter review

Try independently before reading the solutions.

**1. Differentiate $\ln(\sin x)$ and state the domain condition.**

Hint: Check the logarithm's domain before differentiating.

Answer: $\cot x$, $\sin x > 0$.

- The chain rule gives $\frac{\cos x}{\sin x}$; the logarithm requires a positive input.

**2. A sphere's radius grows at $0.5\,\mathrm{cm}\,\mathrm{s}^{-1}$. How fast does its volume grow when the radius is 4 cm?**

Hint: Differentiate the volume relation with respect to time before inserting the radius.

Answer: $32\pi$ $\mathrm{cm}^{3}\,\mathrm{s}^{-1}$.

- $V' = 4 \pi  r^{2} r' = 4 \pi  \times 16 \times 0.5$.

**3. Use the linearization of $e^{x}$ at 0 to estimate $e^{0.03}$. Is it high or low?**

Hint: Write the tangent at 0 and use concavity to determine the error direction.

Answer: Approximately 1.03, an underestimate.

- $L = 1 + x$. Since the second derivative of $e^{x}$ is positive, the tangent lies below the curve.

# Chapter 5 · What derivatives reveal about a function

Local slopes help determine extrema, monotonicity, concavity, and optimal designs. Correct conclusions depend on the interval and hypotheses.

Goals:
- Find and verify extrema
- Understand the mean value theorem and curve shape
- Build optimization models and apply L'Hôpital's rule correctly

## 5.1 Extrema and Critical Points

*A zero derivative identifies a candidate.*

### The idea

To find the maximum and minimum on a closed interval, check interior critical points and both endpoints, then compare function values.

### Intuition

$f' = 0$ means the tangent is horizontal, not necessarily that an extremum occurs. For example, $x^{3}$ has derivative 0 at 0 but keeps increasing.

### Another explanation

A zero derivative is only a candidate. Check for a change from rising to falling or vice versa. For absolute extrema, compare endpoints too.

### Quick check

For $f (x) = x^{3}$, the derivative is zero at $x = 0$. Is this an extremum?

A. A local maximum
B. A local minimum
C. Neither

Answer: C. $x^{3}$ increases on both sides of zero. A zero derivative gives a candidate; examine nearby behavior before drawing a conclusion.

### Must a maximum and minimum exist?

A continuous function on a closed, bounded interval attains both. An open interval gives no such guarantee: $x$ has no maximum on $(0,1)$.

### Which points are candidates?

Interior domain points where $f' = 0$ or the derivative does not exist are critical points. On a closed interval, check endpoints too. A differentiable interior local extremum must satisfy $f' = 0$.

### How do you distinguish a maximum from a minimum?

If $f'$ changes from positive to negative, there is a local maximum; negative to positive gives a local minimum. At a point with $f' = 0$, $f'' > 0$ gives a minimum and $f'' < 0$ a maximum. If $f'' = 0$, investigate further.

### Definition and conditions

The closed-interval method: list candidates, evaluate the function, and compare.

$$
\text{Candidates}=\{a,b\}\cup\{c\in(a,b):f\prime(c)=0\text{ or undefined}\}
$$

- $f$ is continuous on $[a , b]$. Only interior points in the domain can be critical points.

### Derivation

For $f (x) = x^{3} - 3 x$, find the critical points.

$$
f\prime(x)=3(x^2-1)=0\Rightarrow x=\pm1
$$

On $[-2,2]$, include the endpoints and evaluate all candidates.

$$
f(-2)=-2,\quad f(-1)=2,\quad f(1)=-2,\quad f(2)=2
$$

Comparison gives maximum 2 and minimum −2. Each may occur at more than one point.

### Interactive diagram

How do slope signs change across a zero-derivative point? Compare a local maximum with a local minimum.

Move $a$ to $\pm 1$ to make the tangent horizontal, then check slope signs on either side.

Online diagram: ?lang=en#/lesson/extrema?view=visual

### Guided experiment

1. **Before the left candidate** Set the base point to −1.2 and the gap to 0.01.

Preset observation: The derivative is positive; the function is increasing.

2. **Past the candidate** Set the base point to −0.8.

Preset observation: The derivative is negative. Across −1 the function changes from increasing to decreasing, so −1 is a local maximum point.

3. **Check the other candidate** Set the base point to 1.

Preset observation: The exact derivative is zero. Nearby signs change from negative to positive, giving a local minimum.

### Worked examples

#### Example 1: Horizontal without an extremum

Does $x^3$ have an extremum at 0?

- $f' (0) = 0$.
- The derivative $3 x^{2}$ is positive on both sides of zero, so the function keeps increasing.

**Answer: No local extremum.**

#### Example 2: Include the endpoints

Find the absolute extrema of $f(x)=x^2$ on $[-1,2]$.

- The interior critical point is $x = 0$, with value 0.
- The endpoint values are 1 and 4.

**Answer: Minimum 0 at $x = 0$; maximum 4 at $x = 2$.**

### Common mistakes

- **Declaring an extremum whenever the derivative is zero.** Confirm it through a sign change, the second derivative test, or direct comparison.

- **Checking only the interior and omitting endpoints.** An absolute extremum on a closed interval may occur at an endpoint.

### Exercises and solutions

**1. Find the minimum of $x^2-4x$ on $[0,3]$.**

Hint: List critical points and endpoints.

Answer: $-4$.

- The equation $2 x - 4 = 0$ gives $x = 2$, with value −4.
- The endpoint values are 0 and −3. Compare to confirm the minimum.

**2. Does $|x|$ have an extremum at 0?**

Hint: An extremum need not have zero derivative.

Answer: Yes: a local and absolute minimum of 0.

- Every output is nonnegative. Zero is a nondifferentiable critical point.

**3. Does $\frac{1}{x}$ have an absolute minimum on $(0,1)$?**

Hint: The right endpoint 1 is not included.

Answer: No.

- Every output exceeds 1; the function approaches 1 without attaining it.

**4. If $f' (c) = 0$ and $f'' (c) = 0$, can you conclude an extremum occurs?**

Hint: Compare these two counterexamples.

Answer: No.

- $x^{4}$ has a minimum at 0, while $x^{3}$ has no extremum there.

Prerequisites: Basic Differentiation Rules, Continuity and the Intermediate Value Theorem.

## 5.2 Rolle's Theorem and the Mean Value Theorem

*An average rate occurs as an instantaneous rate somewhere.*

### The idea

If a function is continuous over an interval and differentiable inside it, at least one instantaneous rate equals the average rate over that interval.

### Intuition

If average driving speed is $60\,\mathrm{km}\,\mathrm{h}^{-1}$ and velocity varies continuously, it must equal $60\,\mathrm{km}\,\mathrm{h}^{-1}$ at some instant. Do not omit the mathematical assumptions.

### Another explanation

The average rate over an interval occurs as an instantaneous rate somewhere inside. Continuity over the whole interval and differentiability inside are essential. There may be several such points, none necessarily at the midpoint.

### Quick check

What does $c$ represent in the mean value theorem?

A. The interval midpoint
B. An interior point where the instantaneous slope equals the interval's average slope
C. The point where the maximum occurs

Answer: B. $f' (c) = \frac{f (b) - f (a)}{b - a}$. The point $c$ need not be a midpoint or unique; continuity and differentiability are required.

### What does Rolle's theorem say?

If $f$ is continuous on $[a , b]$, differentiable on $(a , b)$, and $f (a) = f (b)$, then $f' = 0$ somewhere inside. Equal endpoint heights force an interior horizontal tangent.

### What if the endpoint heights differ?

Subtract the line joining the endpoints and apply Rolle's theorem. Restoring the original function gives an interior derivative equal to $\frac{f (b) - f (a)}{b - a}$.

### What is the theorem useful for?

A strictly positive derivative implies increase on an interval; a derivative identically zero implies a constant. Cauchy's form connects the increments of two functions to their derivatives at one common point and helps prove L'Hôpital's rule.

### Definition and conditions

Under the continuity and differentiability assumptions, at least one interior point exists.

$$
f\prime(c)=\frac{f(b)-f(a)}{b-a},\qquad c\in(a,b)
$$

- $f$ is continuous on the closed interval $[a , b]$ and differentiable on the open interval $(a , b)$, with $a < b$.

### Derivation

Subtract the endpoint secant line to define an auxiliary function.

$$
g(x)=f(x)-\left[f(a)+\frac{f(b)-f(a)}{b-a}(x-a)\right]
$$

The auxiliary function is zero at both endpoints, so Rolle's theorem gives $g' (c) = 0$.

$$
g(a)=g(b)=0,\qquad g\prime(c)=0
$$

Rearrange to recover the original function: its tangent and secant slopes agree.

$$
f\prime(c)=\frac{f(b)-f(a)}{b-a}
$$

### Interactive diagram

As the right endpoint $b$ moves, where does a tangent parallel to the secant occur? Why is $c$ the midpoint in this model?

Change endpoint $b$. For $y = x^{2}$, the point $c = \frac{a + b}{2}$ has a tangent parallel to the endpoint secant.

Online diagram: ?lang=en#/lesson/mean-value?view=visual

### Guided experiment

1. **A short interval** Set the quadratic's right endpoint to 1.

Preset observation: The secant slope is 1, with a parallel tangent at 0.5.

2. **Widen the interval** Set the right endpoint to 2.

Preset observation: The shared slope is 2, at point 1.

3. **Widen it further** Set the right endpoint to 3.

Preset observation: The shared slope is 3, at point 1.5. The midpoint property belongs to this quadratic, not to the general theorem.

### Worked examples

#### Example 1: Find a guaranteed point

For $f(x)=x^2$ on $[1,3]$, find the point $c$ in the mean value theorem.

- The secant slope is $\frac{9 - 1}{3 - 1} = 4$.
- Solve $f' (c) = 2 c = 4$ to get $c = 2$, which lies inside the interval.

**Answer: $c = 2$.**

#### Example 2: A missing assumption matters

Why does Rolle's theorem not apply to $f(x)=|x|$ on $[-1,1]$?

- It is continuous and has equal endpoint values of 1.
- But it is not differentiable at 0. Elsewhere the derivative is only $\pm 1$, never zero.

**Answer: Differentiability throughout the open interval fails.**

### Common mistakes

- **Checking endpoints without checking interior differentiability.** A corner can invalidate the conclusion. The assumptions must cover the whole interval.

- **Assuming $c$ is always the midpoint.** That happens for a quadratic, not for every function.

### Exercises and solutions

**1. For $f (x) = x^{3}$ on $[0,1]$, find a point $c$ satisfying the mean value theorem.**

Hint: Differentiate, then solve the slope equation.

Answer: $\frac{1}{\sqrt{3}}$.

- The secant slope is 1. Solve $3 c^{2} = 1$ and take the positive root inside the interval.

**2. If $f' = 0$ throughout an interval, what follows about $f$?**

Hint: The fact that the domain is an interval matters.

Answer: It is constant on that interval.

- The mean value theorem makes the difference between any two function values zero.

**3. For $f (x) = 2 x + 1$ on $[0,4]$, which point $c$ works?**

Hint: The theorem does not guarantee uniqueness.

Answer: Every $c \in (0 , 4)$ works.

- Every derivative and every secant slope equals 2.

**4. If the derivative is strictly negative throughout an interval, how does the function change?**

Hint: Apply the theorem to any two points.

Answer: It is strictly decreasing.

- For any $x_{2} > x_{1}$, the difference in function values is a negative derivative times a positive interval length.

Prerequisites: Extrema and Critical Points, Derivatives: From Secants to Tangents.

## 5.3 Monotonicity, Concavity, and Curve Sketching

*Two derivatives describe two different features.*

### The idea

The sign of $f'$ tells whether the function rises or falls. The sign of $f''$ tells whether its slope increases or decreases.

### Intuition

$f' > 0$ means the curve rises; $f'' > 0$ means its slope increases. Increasing and concave up are different properties.

### Another explanation

First ask whether values rise or fall, then whether slopes grow or shrink. The first is monotonicity; the second is concavity.

### Quick check

If $f' > 0$ and $f'' < 0$, what does the graph do?

A. Falls and is concave down
B. Rises, with decreasing slope
C. Rises, with increasing slope

Answer: B. $f' > 0$ means the function rises; $f'' < 0$ means its slope decreases. Increasing does not mean increasing faster.

### How do you find intervals of increase and decrease?

Split at points where $f' = 0$ or does not exist, then check its sign in each interval. Positive means increasing; negative means decreasing. Do not join intervals across points outside the function's domain.

### Does $f'' = 0$ guarantee an inflection point?

No. An inflection point requires continuity and a change in concavity. For $x^{4}$, the second derivative is zero at 0 but the curve remains concave up on both sides.

### How do the pieces form a sketch?

Start with domain, intercepts, symmetry, and asymptotes. Then add monotonicity, extrema, concavity, and inflection points. A viewing window can hide features, so check formulas too.

### Definition and conditions

On differentiable intervals, derivative signs and concavity describe the graph's shape.

$$
f\prime>0\Rightarrow f\text{ increases},\qquad f\prime\prime>0\Rightarrow f\text{ is concave up}
$$

- Use second-derivative conclusions on intervals where the relevant derivatives exist. Check a change in concavity across a candidate inflection point.

### Derivation

Consider $x^{3} - 3 x$.

$$
f\prime=3(x^2-1),\qquad f\prime\prime=6x
$$

Its first-derivative signs are positive, negative, positive. Its second derivative is negative before zero and positive after it.

$$
(-\infty,-1):\uparrow,\quad(-1,1):\downarrow,\quad(1,\infty):\uparrow
$$

Local maximum $(-1,2)$, local minimum $(1,-2)$, inflection point $(0,0)$.

### Interactive diagram

Can the slope decrease while the function keeps increasing? Move the base point and track both value and slope.

Move the base point and compare value with slope. For $y = x^{3} - 3 x$, at $a = 0$ the slope changes from decreasing to increasing, indicating a change in concavity.

Online diagram: ?lang=en#/lesson/curve-sketching?view=visual

### Guided experiment

1. **Rising with decreasing slope** Set the base point to −2 and the gap to 0.01.

Preset observation: The exact slope is 9 and the second derivative is −12: increasing, but concave down.

2. **At the center** Set the base point to 0.

Preset observation: The slope is −3. The second derivative changes sign across zero, so concavity changes here.

3. **Rising on the other side** Set the base point to 2.

Preset observation: The slope is again 9, but the second derivative is 12: increasing and concave up.

### Worked examples

#### Example 1: Increasing at a decreasing rate

Describe the monotonicity and concavity of $f(x)=\ln x$ for $x > 0$.

- $f' = \frac{1}{x} > 0$, so the function increases.
- $f'' = \frac{- 1}{x^{2}} < 0$, so it is concave down.

**Answer: It increases, but its rate of increase gets smaller.**

#### Example 2: A candidate is not a conclusion

Does $x^4$ have an inflection point at 0?

- $f'' = 12 x^{2}$ is positive on both sides.
- Concavity does not change.

**Answer: No inflection point.**

### Common mistakes

- **Treating increasing and concave up as synonyms.** One concerns values, the other slopes. For example, $\ln x$ is increasing and concave down.

- **Declaring an inflection point wherever $f'' = 0$.** Check that concavity changes across the point.

### Exercises and solutions

**1. Where is $x^2$ decreasing?**

Hint: Make a derivative sign chart.

Answer: $(-\infty,0)$.

- $f' = 2 x$ is negative for $x < 0$.

**2. Where is the inflection point of $x^3$?**

Hint: Check the second derivative's sign.

Answer: $(0,0)$.

- $f'' = 6 x$ changes sign across 0, and the function is continuous there.

**3. Is $e^{x}$ concave up or down?**

Hint: Differentiate a second time.

Answer: Concave up.

- Its second derivative is still $e^{x}$, which is always positive.

**4. Find the local maximum value of $x^3-3x$.**

Hint: Give the function value, not just the coordinate $x$.

Answer: $2$.

- At $x = - 1$, the derivative changes from positive to negative and the function value is 2.

Prerequisites: Rolle's Theorem and the Mean Value Theorem, Extrema and Critical Points, Differentiating Exponentials and Logarithms.

## 5.4 Optimization: Turn the Problem into a Function

*The decisive step often comes before differentiation.*

### The idea

Write the objective as a function of one variable, then find and verify its largest or smallest value within the feasible domain.

### Intuition

For a rectangle with fixed perimeter, increasing the width forces the length to decrease. Use the perimeter constraint to eliminate one variable before maximizing area.

### Another explanation

Build the constraints into the model before comparing feasible choices. With fixed perimeter, lengthening one side shortens the other, so area cannot grow forever.

### Quick check

Which candidates must you compare for the global maximum of a continuous function on a closed interval?

A. Only zero-derivative points
B. Only endpoints
C. Interior critical points and endpoints

Answer: C. The maximum may occur at an endpoint. Include interior critical points where the derivative is zero or nonexistent, then compare function values.

### How do you form the objective function?

Define each variable, write the objective, eliminate other variables using constraints, and state the feasible interval. Check that the units match the objective.

### Are you finished after solving $f' = 0$?

No. Check endpoints or boundary behavior and verify the result with derivative signs, second derivatives, or value comparisons. On an open interval, the optimum may not be attained.

### How do you answer an applied problem?

Convert back to the requested dimensions and include units. Integer requirements, minimum dimensions, or other restrictions may require another feasibility check.

### Definition and conditions

Compare the objective on the feasible domain $D$, rather than merely solving a derivative equation.

$$
\max_{x\in D}F(x)\quad\text{or}\quad\min_{x\in D}F(x)
$$

- Constraints, units, and domain belong to the model. An interior zero derivative only gives a candidate.

### Derivation

For perimeter 24, the rectangle's sides $x$ and $y$ satisfy a constraint.

$$
2x+2y=24\Rightarrow y=12-x
$$

Express area using one variable and state its feasible domain.

$$
A(x)=x(12-x),\quad0<x<12
$$

At 6 the derivative changes from positive to negative, giving the maximum area.

$$
A\prime=12-2x,\quad x=y=6,\quad A_{\max}=36
$$

### Interactive diagram

With fixed perimeter, does area keep increasing as one side grows? Find where it turns around.

Adjust side length $x$. With perimeter fixed, the other side is $12 - x$; area is largest for a square.

Online diagram: ?lang=en#/lesson/optimization?view=visual

### Guided experiment

1. **A thin rectangle** Set one side to 2.

Preset observation: The other side is 10, giving area 20 and perimeter 24.

2. **Balanced dimensions** Set one side to 6.

Preset observation: The other side is also 6, and the area reaches 36.

3. **Keep lengthening** Set one side to 10.

Preset observation: The other becomes 2 and area returns to 20. Check the feasible interval and turning point.

### Worked examples

#### Example 1: A fence against a wall

Use $40\,\mathrm{m}$ of fencing for three sides of a rectangle against a wall. What is the largest area?

- Let $x$ be perpendicular to the wall and $y$ parallel to it. Then $2 x + y = 40$.
- $A = x (40 - 2 x)$ has derivative $40 - 4 x$, changing sign at $x = 10$.

**Answer: $x=10\,\mathrm{m}$, $y=20\,\mathrm{m}$, and maximum area $200\,\mathrm{m}^{2}$.**

#### Example 2: A minimum distance

Which point on $y = x$ is closest to $(2,0)$?

- The squared distance is $D^{2} = (x - 2)^{2} + x^{2}$. Distance and squared distance are minimized at the same point.
- Its derivative is $4 x - 4$, with unique zero $x = 1$ and second derivative $4 > 0$.

**Answer: Point $(1,1)$, at distance $\sqrt{2}$.**

### Common mistakes

- **Stopping as soon as the derivative is zero.** Check feasibility, endpoints, and the type of extremum.

- **Leaving variable constraints unstated.** Negative lengths or values exceeding available resources are not feasible solutions.

### Exercises and solutions

**1. What is the maximum area of a rectangle with perimeter 20?**

Hint: At the maximum the sides are equal.

Answer: $25$.

- The sides sum to 10. The area $A = x (10 - x)$ has its vertex at $x = 5$.

**2. Two positive numbers sum to 10. What is their largest product?**

Hint: Use the sum constraint to express the second number.

Answer: $25$.

- The product $x (10 - x)$ is largest at $x = 5$.

**3. Two positive numbers have product 16. What is their smallest sum?**

Hint: Use positivity to select the root.

Answer: $8$.

- $S = x + \frac{16}{x}$ for $x > 0$, with $S' = 1 - \frac{16}{x^{2}}$, negative before 4 and positive after it.

**4. Why is minimizing squared distance often easier than minimizing distance?**

Hint: Distances are nonnegative.

Answer: Squaring is strictly increasing on nonnegative numbers, so the minimizing point is unchanged and the square root disappears.

- The comparisons $d_{1} \le d_{2}$ and $d_{1}^{2} \le d_{2}^{2}$ are equivalent for distances.

Prerequisites: Extrema and Critical Points, Monotonicity, Concavity, and Curve Sketching.

## 5.5 L'Hôpital's Rule

*Compare rates within an indeterminate quotient.*

### The idea

For a $\frac{0}{0}$ or $\frac{\infty }{\infty }$ limit satisfying the hypotheses, differentiate numerator and denominator separately and find the limit of their ratio.

### Intuition

This is a rule for limits, not a formula for differentiating a quotient. Check the indeterminate form before use and recheck after every application.

### Another explanation

An indeterminate quotient compares two competing rates. L'Hôpital's rule uses their derivatives when its hypotheses hold; it is not a method for arbitrary quotients.

### Quick check

Substitution into a quotient gives $\frac{1}{0}$. Can you directly apply L'Hôpital's rule?

A. Yes: differentiate numerator and denominator separately
B. No: it is neither $\frac{0}{0}$ nor $\frac{\infty }{\infty }$
C. The answer must be 0

Answer: B. Check the indeterminate form and theorem assumptions first. $\frac{1}{0}$ is not a form handled by this rule; one-sided analysis is usually needed.

### What must you check first?

The original form is $\frac{0}{0}$ or $\frac{\infty }{\infty }$. On a punctured one-sided neighborhood, numerator and denominator are differentiable, the denominator's derivative is nonzero, and the derivative ratio has a limit, possibly $\pm \infty$.

### What about other indeterminate forms?

Rewrite $0 \cdot \infty$ as a quotient, combine fractions or use a conjugate for $\infty  - \infty$, and take logarithms for power forms. Then check the hypotheses again. If direct algebra works, differentiation is unnecessary.

### What if the derivative ratio has no limit?

That does not prove the original quotient lacks a limit. The rule gives a conclusion only when its hypotheses hold. Repeated use needs a fresh check at each step.

### Definition and conditions

Under the one-sided neighborhood assumptions above, a $\frac{0}{0}$ or $\frac{\infty }{\infty }$ limit can be obtained from the derivative ratio.

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f\prime(x)}{g\prime(x)}
$$

- $f , g$ are differentiable; $g' \ne 0$; the original form is $\frac{0}{0}$ or $\frac{\infty }{\infty }$; the derivative-ratio limit exists. A two-sided result requires agreement from both sides.

### Derivation

For $\frac{0}{0}$ at a finite endpoint, extend continuously by $f (a) = g (a) = 0$.

Cauchy's mean value theorem gives an interior point $c$. As $x$ approaches $a$, so does $c$.

$$
\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f\prime(c)}{g\prime(c)}
$$

If the derivative ratio tends to $L$, the original ratio also tends to $L$. Other forms require the corresponding extended arguments.

$$
\frac{f(x)}{g(x)}\to L
$$

### Interactive diagram

What does $\frac{e^{x} - 1}{x}$ approach near 0? Connect this difference quotient with the ratio after differentiation.

Observe $\frac{e^{x} - 1}{x}$ approaching 1. Its derivative ratio $\frac{e^{x}}{1}$ also approaches 1.

Online diagram: ?lang=en#/lesson/lhopital?view=visual

### Guided experiment

1. **Inspect the original quotient** Set the right-side distance to 0.1.

Preset observation: The quotient is approximately 1.05171. The original expression is undefined at zero.

2. **Approach zero** Reduce the right-side distance to 0.001.

Preset observation: The quotient is approximately 1.00050, close to 1.

3. **Check the left side** Use the same distance on the left.

Preset observation: The quotient is approximately 0.99950. The derivative ratio and hypotheses in the text establish the common limit 1.

### Worked examples

#### Example 1: Comparing two vanishing quantities

Find $\lim_{x\to0}\frac{e^x-1}{x}$.

- The form is $\frac{0}{0}$, and the denominator's derivative is 1.
- The derivative ratio is $e^{x}$, which tends to 1.

**Answer: The limit is 1.**

#### Example 2: Logarithmic versus linear growth

Find $\lim_{x\to\infty}\frac{\ln x}{x}$.

- The form is $\frac{\infty }{\infty }$, with derivative ratio $\frac{\frac{1}{x}}{1}$.
- That ratio tends to 0, and the hypotheses hold.

**Answer: The limit is 0: linear growth outpaces logarithmic growth.**

#### Example 3: An oscillating derivative ratio need not prevent the original limit

Find $\lim_{x\to\infty}\frac{x}{2x+\sin x}$. If the derivative ratio has no limit, must the original limit fail?

- Rewrite the original ratio as $\frac{1}{2+\frac{\sin x}{x}}$. Since $|\frac{\sin x}{x}|\le\frac1x$ for $x>0$, the inner term tends to 0.
- The derivative ratio is $\frac1{2+\cos x}$. Along $x=2n\pi$ and $x=(2n+1)\pi$ it equals $\frac13$ and 1, respectively, so it has no limit.

**Answer: The original limit is still $\frac12$. Failure of L'Hôpital's hypotheses only means that this method gives no conclusion.**

### Common mistakes

- **Differentiating separately when the quotient is not indeterminate.** For example, $\frac{x}{2}$ tends to 0 as $x \to 0$, but the denominator's derivative is zero, so the rule does not apply.

- **Confusing the derivative ratio with the derivative of the quotient.** $(\frac{f}{g})'$ uses the quotient rule; it is not $\frac{f'}{g'}$.

### Exercises and solutions

**1. Find $\lim_{x\to0}\frac{\ln(1+x)}{x}$.**

Hint: Check the logarithm's domain.

Answer: $1$.

- The form is $\frac{0}{0}$, and the derivative ratio $\frac{1}{1 + x}$ tends to 1.

**2. Find $\lim_{x\to0}\frac{1-\cos x}{x^2}$.**

Hint: Recheck the form before each application.

Answer: $\frac{1}{2}$.

- One application gives $\frac{\sin x}{2 x}$. Use the basic trigonometric limit, or apply the rule again after checking its conditions.

**3. Find $\lim_{x\to\infty}\frac{x}{e^x}$.**

Hint: Exponential growth is faster.

Answer: $0$.

- The form is $\frac{\infty }{\infty }$, with derivative ratio $\frac{1}{e^{x}} \to 0$.

**4. Find $\lim_{x\to0}\frac{x+1}{x+2}$. Is L'Hôpital's rule needed?**

Hint: Check the original limit's form first.

Answer: $\frac{1}{2}$. This is not an indeterminate form for L'Hôpital's rule.

- Substitute directly; the denominator is nonzero.

**5. Find $\lim_{x\to0^+}x\ln x$. Why not simply differentiate the factors separately?**

Hint: First form a quotient satisfying the hypotheses.

Answer: $0$.

- The original form is $0\cdot(-\infty)$. Rewrite it as $\frac{\ln x}{1/x}$.
- This quotient has an infinite-over-infinite form, with derivative ratio $\frac{1/x}{-1/x^2}=-x\to0$. The denominator's derivative is nonzero in the positive-side neighborhood.

Prerequisites: Differentiating Exponentials and Logarithms, Limit Laws, Rolle's Theorem and the Mean Value Theorem.

## Chapter review

Try independently before reading the solutions.

**1. Find the absolute maximum and minimum of $x^3-3x$ on $[-2,2]$.**

Hint: Evaluate both interior critical points and both endpoints.

Answer: Maximum 2; minimum −2.

- Check critical points $\pm 1$ and endpoints $\pm 2$. The four values are −2, 2, −2, and 2.

**2. Use the mean value theorem to prove $|\sin b - \sin a| \le |b - a|$.**

Hint: Apply the mean value theorem between the endpoints and bound the absolute cosine.

Answer: The inequality holds.

- For $a \ne b$, the difference is $\cos c \cdot (b - a)$ with $|\cos c| \le 1$. For $a = b$ it is immediate.

**3. A length-60 fence encloses three sides of a rectangle against a wall. Find the maximum area.**

Hint: Use the three-side constraint to express area in one variable.

Answer: 450.

- $2 x + y = 60$ and $A = x (60 - 2 x)$. The derivative changes from positive to negative at $x = 15$.
- Then $y = 30$ and the area is 450.

# Chapter 6 · Integrals: accumulation and antiderivatives

Differentiation asks how something changes now; integration asks how those changes accumulate. Define a definite integral through fine partitions, then connect it to antiderivatives with the fundamental theorem.

Goals:
- Distinguish antiderivatives from definite integrals
- Build Riemann sums and interpret signed area
- Use the fundamental theorem, basic formulas, and substitution

## 6.1 Antiderivatives and indefinite integrals

*Reverse differentiation*

### The idea

An antiderivative is a function whose derivative is $f$. On an interval, any two antiderivatives differ by a constant.

### Intuition

Both $\frac{x^{2}}{2}$ and $\frac{x^{2}}{2} + 3$ have derivative $x$. Differentiation loses constants, so integration restores $+ C$.

### Another explanation

Reading a derivative backward gives one antiderivative. Vertical shifts have the same derivative; the integration constant records the information still undetermined.

### Quick check

Why does $\int  2 x \mathrm{d}x$ need $C$?

A. Constants have derivative zero
B. Every integral is an approximation
C. $C$ must equal 1

Answer: A. $x^{2}$, $x^{2} + 3$, and other vertical shifts all have derivative $2 x$. The constant $C$ records this family on a single interval.

### Why keep $C$?

The difference of two antiderivatives has derivative 0, so it is constant on an interval. Separate components of a disconnected domain may have different constants.

### Which formula applies?

Match the integrand to a known derivative. The power rule excludes $n = - 1$: for $\int\frac{1}{x}\,\mathrm{d}x$, use $\ln |x| + C$. Apply each formula on an interval where it is defined.

### How do you determine and check the answer?

Substitute a known function value into $F (x) + C$ to find $C$. Differentiate to check. The integral of a product is not generally the product of the integrals.

### Which antiderivatives should you know?

Besides powers and logarithms, use $\int e^x\,\mathrm{d}x=e^x+C$, $\int\sin x\,\mathrm{d}x=-\cos x+C$, and $\int\cos x\,\mathrm{d}x=\sin x+C$. Check by differentiating; a composite input also requires its inner derivative.

### How do trig and inverse trig patterns fit?

$\int\sec^2x\,\mathrm{d}x=\tan x+C$, $\int\csc^2x\,\mathrm{d}x=-\cot x+C$, $\int\sec x\tan x\,\mathrm{d}x=\sec x+C$, and $\int\csc x\cot x\,\mathrm{d}x=-\csc x+C$. Inverse trig derivatives give $\int\frac{1}{1+x^2}\,\mathrm{d}x=\arctan x+C$ and $\int\frac{1}{\sqrt{1-x^2}}\,\mathrm{d}x=\arcsin x+C$. The first four require intervals avoiding undefined points; the last requires $|x|<1$.

### Definition and conditions

An indefinite integral denotes all antiderivatives.

$$
\int f(x)\,dx=F(x)+C\quad\text{if }F\prime(x)=f(x)
$$

- Work on an interval; the power formula excludes $n = - 1$, which uses a logarithm.

### Derivation

Read the power rule backward.

$$
\frac d{dx}x^{n+1}=(n+1)x^n
$$

Divide by $n + 1$ to obtain an antiderivative.

$$
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\ne-1)
$$

At $n = - 1$ the denominator vanishes, but $\ln |x|$ has derivative $\frac{1}{x}$.

$$
\int\frac1x\,dx=\ln|x|+C
$$

### Interactive diagram

Does changing $C$ change the slope? Compare the vertical shift with the derivative reading.

Change $C$: the antiderivative $\frac{x^{3}}{3} + C$ shifts vertically, while its derivative remains $x^{2}$.

Online diagram: ?lang=en#/lesson/antiderivatives?view=visual

### Guided experiment

1. **Start at zero** Set the integration constant to 0.

Preset observation: The antiderivative is $\frac{x^3}{3}$ and its derivative is $x^2$.

2. **Shift upward** Set the constant to 1.

Preset observation: The antiderivative moves upward; its derivative does not change.

3. **Shift downward** Set the constant to −1.

Preset observation: The curve moves, but the same derivative still gives its slope at every point.

### Worked examples

#### Example 1: Integrate term by term

Find $\int(3x^2-4x+2)\,dx$.

- The three antiderivatives are $x^{3}$, $- 2 x^{2}$, and $2 x$.
- Add one constant $C$ and differentiate to check.

**Answer: $x^3-2x^2+2x+C$.**

#### Example 2: Recover position from velocity

Given $v (t) = 2 t + 1$ and $s (0) = 3$, find $s (t)$.

- Integrate to get $s = t^{2} + t + C$.
- At $t = 0$, the condition gives $C = 3$.

**Answer: $s (t) = t^{2} + t + 3$.**

#### Example 3: Recognize each pattern

Find $\int\left(e^x+\frac{2}{1+x^2}-3\sin x\right)\,\mathrm{d}x$.

- The terms are derivatives of $e^x$, $2\arctan x$, and $3\cos x$.
- Check the sign: $(3\cos x)\prime=-3\sin x$.

**Answer: $e^x+2\arctan x+3\cos x+C$.**

### Common mistakes

- **Omitting the constant of integration.** An indefinite integral represents a family of antiderivatives. An initial condition selects the constant.

- **Using the ordinary power formula for $\frac{1}{x}$.** The exception $n = - 1$ gives $\ln |x| + C$.

### Exercises and solutions

**1. Find $\int x^4\,dx$.**

Hint: Differentiate your answer to check.

Answer: $\frac{x^5}{5}+C$.

- Increase the exponent by 1 and divide by the new exponent.

**2. Find $\int(\frac{2}{x})\,dx$.**

Hint: Do not divide the zeroth power of $x$ by zero.

Answer: $2\ln|x|+C$($x \ne 0$).

- Factor out 2 and use the logarithmic antiderivative.

**3. Find $\int\cos x\,dx$.**

Hint: Read the derivative formula backward.

Answer: $\sin x+C$.

- The derivative of $\sin$ is $\cos$.

**4. Given $F' (x) = 3 x^{2}$ and $F (1) = 5$, find $F (x)$.**

Hint: The initial value fixes the vertical shift.

Answer: $x^3+4$.

- $F = x^{3} + C$; $1 + C = 5$ gives $C = 4$.

**5. Find $\int(2\sec^2x-\cos x)\,\mathrm{d}x$ and state where the formula applies.**

Hint: Keep both the constant and the domain restrictions.

Answer: $2\tan x-\sin x+C$, on any interval avoiding $\cos x=0$.

- Integrate term by term using $(\tan x)\prime=\sec^2x$ and $(\sin x)\prime=\cos x$.
- Differentiation recovers the integrand. Do not extend one antiderivative across an undefined point of tangent.

**6. Find $\int\frac{1}{\sqrt{1-x^2}}\,\mathrm{d}x$. Is the integrand defined at $x=1$?**

Hint: Distinguish the antiderivative's value from the integrand's domain.

Answer: $\arcsin x+C$ for $|x|<1$; the integrand is undefined at $x=1$.

- The derivative of arcsine is $\frac{1}{\sqrt{1-x^2}}$.
- At the endpoint the denominator is zero. An improper integral requires a separate limit and is not an ordinary definite integral here.

Prerequisites: Rolle's Theorem and the Mean Value Theorem, Differentiating Exponentials and Logarithms, Inverse-Function and Inverse-Trigonometric Derivatives, Derivatives of Trigonometric Functions.

## 6.2 Riemann sums and numerical integration

*Make the rectangles narrower*

### The idea

Split an interval into pieces, estimate each contribution as $\text{height}\times\text{width}$, and add. As the largest width tends to 0, the sums approach the definite integral.

### Intuition

Rectangles estimate the area under a curve. Finer rectangles usually improve the estimate; the widest piece must shrink too.

### Another explanation

Approximate with finite pieces, then let the largest width tend to zero. Different sampling rules can approach the integral from different directions.

### Quick check

For an increasing function on the same equal partition, which sum is larger?

A. The left-endpoint sum
B. The right-endpoint sum
C. They are always equal

Answer: B. Each right endpoint has a function value at least as large as its left endpoint, so its rectangle is at least as tall.

### How do you choose a height?

Use a left endpoint, right endpoint, midpoint, or any sample point in each piece. Widths need not be equal, but the largest width must tend to 0. Merely increasing the number of pieces is not enough.

### Can every function be integrated this way?

Continuous functions on closed intervals can. Negative function values contribute negative amounts. Boundedness alone is insufficient: some everywhere-oscillating functions are not Riemann integrable.

### Is a finite sum exact?

Usually it is an approximation. The midpoint rule samples each midpoint; the trapezoidal rule joins endpoint heights. With suitable smoothness, both typically have error of order $\frac{1}{n^{2}}$.

### Definition and conditions

The definite integral is the limit of Riemann sums as the largest subinterval width tends to zero.

$$
\int_a^b f(x)\,dx=\lim_{\lVert P\rVert\to0}\sum_{i=1}^n f(\xi_i)\Delta x_i
$$

- The limit must be independent of partitions and sample points. Continuity on a closed interval guarantees this.

### Derivation

Use $n$ right-endpoint rectangles for $x^{2}$ on $[0,1]$.

$$
R_n=\frac1n\sum_{i=1}^n\left(\frac in\right)^2=\frac1{n^3}\sum_{i=1}^n i^2
$$

The sum-of-squares formula gives an explicit finite sum.

$$
R_n=\frac{n(n+1)(2n+1)}{6n^3}
$$

Take the limit to obtain $\frac{1}{3}$.

$$
\lim_{n\to\infty}R_n=\frac13
$$

### Interactive diagram

For the same partition, which is larger: the left or right sum? How do both change as $n$ increases?

Switch between left, right, midpoint, and trapezoidal estimates, then increase $n$. The exact integral of $x^{2}$ on $[0,1]$ is $\frac{1}{3}$.

Online diagram: ?lang=en#/lesson/riemann-sums?view=visual

### Guided experiment

1. **Two right rectangles** Set the count to 2 and choose right endpoints.

Preset observation: The right sum is $\frac58=0.625$, above the exact integral.

2. **Switch to left endpoints** Keep 2 pieces and choose left endpoints.

Preset observation: The left sum is $\frac18=0.125$, below the exact integral.

3. **Refine the partition** Use 60 right-endpoint rectangles.

Preset observation: The estimate is closer to $\frac13$, but still has finite error. Numerical samples are not a proof.

### Worked examples

#### Example 1: Two right-endpoint rectangles

Find the right sum for $x^{2}$ on $[0,1]$ with $n = 2$.

- The width is $\frac{1}{2}$ and the heights are $\frac{1}{4}$ and 1.
- Add the heights and multiply by the width: $(\frac{1}{2}) (\frac{1}{4} + 1)$.

**Answer: $R_{2} = \frac{5}{8} = 0.625$, above the exact value $\frac{1}{3}$.**

#### Example 2: Trapezoids are exact for a line

Estimate $\int_0^2(2x+1)dx$ using two trapezoids.

- The heights are 1, 3, and 5; each width is 1.
- $T = 1 [\frac{1 + 5}{2} + 3] = 6$.

**Answer: The result is exactly 6: each sloping top coincides with the line.**

### Common mistakes

- **Treating a finite rectangle sum as the integral's exact definition.** The definition uses a limit as the mesh size tends to zero. A finite sum is generally approximate.

- **Increasing $n$ while leaving one wide piece unchanged.** The largest width must tend to zero so the entire partition becomes fine.

### Exercises and solutions

**1. Find the left sum for $f (x) = x$ on $[0,1]$ with $n = 2$.**

Hint: Left endpoints give lower heights here.

Answer: $\frac{1}{4}$.

- The width is $\frac{1}{2}$ and the heights are 0 and $\frac{1}{2}$, giving $\frac{1}{4}$.

**2. Find the single-midpoint estimate for $x^{2}$ on $[0,1]$.**

Hint: Use $n = 1$.

Answer: $\frac{1}{4}$.

- At $x = \frac{1}{2}$ the height is $\frac{1}{4}$ and the width is 1.

**3. For a nonnegative increasing function, does a left sum overestimate or underestimate the integral?**

Hint: Draw one rectangle and compare.

Answer: Underestimate.

- The left height is no greater than any other height in its piece.

**4. What is any Riemann sum for the constant function 3 on $[0,2]$?**

Hint: A constant height produces no approximation error.

Answer: $6$.

- Every height is 3 and the widths total 2, so the sum is always 6.

Prerequisites: Limit Laws, Antiderivatives and indefinite integrals.

## 6.3 Definite integrals and signed area

*Contributions can cancel*

### The idea

A definite integral measures signed accumulation: positive above the $x$-axis, negative below. Geometric area counts both parts positively.

### Intuition

Integrating velocity gives displacement, so backward motion cancels forward motion. Integrating absolute velocity gives distance traveled, with no cancellation.

### Another explanation

Accumulation keeps track of signs. A zero total can result from cancellation; it does not imply zero change or zero area.

### Quick check

Does $\int _{0}^{2} (t - 1) \mathrm{d}t = 0$ mean there is no area between the curve and the axis?

A. Yes
B. No: positive and negative contributions cancel; the area is still 1
C. The geometric area is −1

Answer: B. The integral on $[0,1]$ is $\frac{- 1}{2}$ and on $[1,2]$ is $\frac{1}{2}$. Geometric area adds their positive magnitudes.

### What if the bounds are reversed?

The integral changes sign; equal bounds give 0. Integrals add over adjacent intervals and distribute over sums and constant multiples. Integral comparisons require the same interval and orientation.

### How do you find area and average value?

Area uses $\int  |f|$, often split at zeros. Average value is the integral divided by $b - a$, not generally the average of two endpoint values.

### What if no simple antiderivative exists?

For example, $e^{- x^{2}}$ has no elementary antiderivative but is still integrable on closed intervals because it is continuous. Numerical methods can evaluate its integral. The definition does not require an antiderivative formula.

### Must the function attain its average value?

A continuous function on $[a,b]$ with $a<b$ does. If its minimum and maximum are $m,M$, integral comparison gives $m\le f_{\mathrm{avg}}\le M$. The intermediate value theorem then gives $c\in[a,b]$ with $f(c)=f_{\mathrm{avg}}$. Integrability alone is insufficient: a jump can skip the average.

### Definition and conditions

Distinguish a signed integral from geometric area.

$$
A_{\mathrm{geometric}}=\int_a^b|f(x)|\,dx,\qquad f_{\mathrm{avg}}=\frac1{b-a}\int_a^b f(x)\,dx
$$

- Assume $a < b$ and the relevant functions are integrable.
- The integral mean value theorem also requires $f$ continuous throughout $[a,b]$: some $c\in[a,b]$ satisfies $f(c)=f_{\mathrm{avg}}$. The point need not be unique.

### Derivation

For $f (x) = x$, the two triangles have opposite signed areas.

$$
\int_{-1}^0 x\,dx=-\frac12,\qquad\int_0^1x\,dx=\frac12
$$

Their signed sum is zero; taking absolute values adds their areas.

$$
\int_{-1}^1x\,dx=0,\qquad\int_{-1}^1|x|\,dx=1
$$

A zero integral therefore does not imply the function is zero everywhere.

### Interactive diagram

Must an integral increase when its upper bound increases? Observe what happens where the integrand is negative.

Move the endpoint $b$. For $y = x$, shading on the negative half-axis contributes negatively and shading on the positive half-axis contributes positively.

Online diagram: ?lang=en#/lesson/definite-integral?view=visual

### Guided experiment

1. **Negative contribution only** Set the upper bound to −0.5.

Preset observation: From −1 to −0.5, the integral is $-\frac38$ and the area is $\frac38$.

2. **Cancellation** Set the upper bound to 1.

Preset observation: The integral is zero and the geometric area is 1.

3. **More positive contribution** Set the upper bound to 2.

Preset observation: The integral is $\frac32$ and the geometric area is $\frac52$.

### Worked examples

#### Example 1: Cancellation does not mean zero area

Find $\int_{-2}^2 x\,dx$ and the corresponding geometric area.

- The signed triangle areas are −2 and 2.
- For geometric area, add their positive magnitudes.

**Answer: The integral is 0; the geometric area is 4.**

#### Example 2: Average height

Find the average value of $f (x) = 2 x + 1$ on $[0,2]$.

- The trapezoid has integral 6.
- Divide by the interval length 2.

**Answer: The average value is 3.**

#### Example 3: The average is not the endpoint average

Find the average value of $f(x)=x^2$ on $[0,3]$. Where is it attained?

- Scale the previous right sum to $[0,3]$: $R_n=\frac{27}{n^3}\sum_{i=1}^ni^2\to9$. Divide by the interval length 3 to get an average of 3. The next lesson calculates this faster with an antiderivative.
- Solve $c^2=3$ and choose $c=\sqrt{3}$ in the interval. The endpoint average $\frac{0+9}{2}=4.5$ is different.

**Answer: The average value is 3, attained at $c=\sqrt{3}$. A rectangle of height 3 has the same integral as the curve.**

### Common mistakes

- **Treating a definite integral as total geometric area.** Negative values cancel positive values. Use absolute values for geometric area.

- **Adding $C$ to a definite integral.** A definite integral is a number or a function of parameters, not a family of antiderivatives.

- **Averaging only the two endpoint values.** The average depends on accumulation over the entire interval. Only certain functions, such as lines, equal their endpoint average.

### Exercises and solutions

**1. Given $\int_0^2f=5$, find $\int_2^0f$.**

Hint: An integral has orientation.

Answer: $-5$.

- Reversing the bounds changes the sign.

**2. Given $\int_0^1f=2$ and $\int_1^3f=4$, find $\int_0^3f$.**

Hint: Split at 1.

Answer: $6$.

- Add accumulation over adjacent intervals.

**3. Find the average value of $f (x) = x$ on $[0,4]$.**

Hint: Divide area by width.

Answer: $2$.

- The triangle has area 8; divide by length 4.

**4. What follows if a continuous nonnegative function has zero integral on a closed interval of positive length?**

Hint: Both nonnegativity and continuity matter.

Answer: The function is zero throughout the interval.

- If it were positive at a point, continuity would make it positive nearby, forcing a positive integral.

**5. A continuous function has integral 12 on $[1,5]$. What is its average value, and must it attain that value?**

Hint: Separate the numerical average from the existence conclusion.

Answer: The average is 3, and it must be attained.

- The average is $\frac{12}{5-1}=3$.
- Continuity and the integral mean value theorem guarantee a $c\in[1,5]$ with $f(c)=3$. The integral alone does not locate this point.

**6. Let $f(x)=0$ for $0\le x<1$ and $f(x)=2$ for $1\le x\le2$. Find its average. Is that value attained?**

Hint: Compute the average, then check the values the function actually takes.

Answer: The average is 1, but the function never equals 1.

- The integral is $0\times1+2\times1=2$, so the average is $\frac{2}{2}=1$.
- The function takes only 0 and 2. It is discontinuous at 1, so the integral mean value theorem does not apply.

Prerequisites: Riemann sums and numerical integration, Continuity and the Intermediate Value Theorem, Extrema and Critical Points.

## 6.4 The fundamental theorem of calculus

*Why change and accumulation undo each other*

### The idea

Integration accumulates; differentiation measures change. Differentiating the accumulation of a continuous function recovers the integrand. An antiderivative evaluates a definite integral through its endpoint difference.

### Intuition

Let $A (x) = \int _{a}^{x} f (t) \mathrm{d}t$. Moving $x$ by $h$ adds a thin strip. Its average height tends to $f (x)$, so $A' (x) = f (x)$.

### Another explanation

A small increase in the upper bound adds a thin strip. Its contribution divided by its width approaches the current height, so differentiating accumulation recovers the integrand.

### Quick check

If $f$ is continuous and $A (x) = \int _{0}^{x} f (t) \mathrm{d}t$, what is $A' (x)$?

A. $f (x)$
B. $\int _{0}^{x} f' (t) \mathrm{d}t$
C. $f (0)$

Answer: A. Increasing the upper bound by $h$ adds approximately $f (x) h$. Divide by $h$ and take the limit to recover $f (x)$.

### Why is the derivative $f (x)$?

The difference quotient is the average height of the new strip. If $f$ is continuous at $x$, all nearby heights approach $f (x)$, so their average does too.

### Why subtract $F (b) - F (a)$?

If $F' = f$, then $F$ and the accumulation function $A$ have the same derivative. On an interval they differ by a constant, which cancels when endpoint values are subtracted.

### What if the upper bound is $g (x)$?

Apply the chain rule: the derivative is $f (g (x)) g' (x)$. If both bounds vary, subtract the lower-bound contribution from the upper-bound contribution. The variable $t$ is only a dummy variable.

### Definition and conditions

The fundamental theorem connects continuous accumulation with differentiation.

$$
\frac d{dx}\int_a^x f(t)\,dt=f(x),\qquad\int_a^b f(x)\,dx=F(b)-F(a)
$$

- Assume $f$ is continuous on the relevant closed interval and $F$ is an antiderivative there. Interpret endpoints one-sidedly.

### Derivation

The change in accumulation is exactly the integral over the added small interval.

$$
\frac{A(x+h)-A(x)}h=\frac1h\int_x^{x+h}f(t)\,dt
$$

Its average height differs from $f (x)$ by at most the largest local deviation, which continuity makes tend to zero.

$$
\left|\frac1h\int_x^{x+h}(f(t)-f(x))dt\right|\le\sup_{t\text{ between }x,x+h}|f(t)-f(x)|
$$

Thus $A' = f$. Comparing $A$ with $F$ gives the endpoint formula.

$$
\int_a^b f=F(b)-F(a)
$$

### Interactive diagram

How does the slope of $A (x)$ relate to the height of $f (x)$? Move the upper bound to compare.

Move the upper bound $x$. The slope of $A (x) = \frac{x^{3}}{3}$ equals the strip height $f (x) = x^{2}$.

Online diagram: ?lang=en#/lesson/fundamental-theorem?view=visual

### Guided experiment

1. **Start at the origin** Set the upper bound to 0.

Preset observation: Both the accumulation and the current height are zero.

2. **Move halfway** Set the upper bound to 0.5.

Preset observation: The accumulation is $\frac1{24}$; the current height and the derivative of accumulation are both $\frac14$.

3. **Reach the endpoint** Set the upper bound to 1.

Preset observation: The accumulation is $\frac13$ and the current height is 1. An accumulated value and its rate are different quantities.

### Worked examples

#### Example 1: Replace infinitely many pieces with two values

Evaluate $\int_0^2 3x^2\,dx$.

- An antiderivative is $x^{3}$.
- Subtract the endpoint values: $2^{3} - 0^{3} = 8$.

**Answer: The result is 8.**

#### Example 2: A variable bound needs the chain rule

Differentiate $G(x)=\int_0^{x^2}\cos t\,dt$.

- The accumulation function has derivative $\cos(\text{upper bound})$ with respect to its upper bound.
- The upper bound $x^{2}$ has derivative $2 x$.

**Answer: $G\prime(x)=2x\cos(x^2)$.**

### Common mistakes

- **Writing $f(x)$ without checking the upper bound.** For upper bound $g (x)$, substitute it into the integrand and multiply by $g'$.

- **Subtracting the endpoint values in reverse order.** Use the upper value $F (b)$ minus the lower value $F (a)$.

### Exercises and solutions

**1. Evaluate $\int_1^3 2x\,dx$.**

Hint: Subtract the two endpoint values.

Answer: $8$.

- Use antiderivative $x^{2}$: $9 - 1 = 8$.

**2. Find $\frac d{dx}\int_1^x e^t dt$.**

Hint: A fixed lower bound contributes no derivative.

Answer: $e^x$.

- Evaluate the continuous integrand at the upper bound.

**3. Find $\frac d{dx}\int_x^{2x}t^2dt$.**

Hint: Differentiate each moving bound's contribution.

Answer: $7x^2$.

- The upper contribution is $(2 x)^{2} \times 2$; the lower contribution is $x^{2} \times 1$. Subtract to obtain $7 x^{2}$.

**4. Evaluate $\int_0^{\pi}\sin x\,dx$.**

Hint: Keep the minus sign in the antiderivative.

Answer: $2$.

- An antiderivative is $- \cos x$, giving $- \cos \pi  + \cos 0 = 2$.

Prerequisites: Antiderivatives and indefinite integrals, Definite integrals and signed area, Continuity and the Intermediate Value Theorem.

## 6.5 Integration by substitution

*The chain rule in reverse*

### The idea

Substitution reverses the chain rule: replace an inner function by $u$ and replace its derivative times $\mathrm{d}x$ by $\mathrm{d}u$.

### Intuition

In $\int  2 x (x^{2} + 1)^{3} \mathrm{d}x$, set $u = x^{2} + 1$ and $\mathrm{d}u = 2 x \mathrm{d}x$. The integral becomes $\int  u^{3} \mathrm{d}u$.

### Another explanation

Substitution changes widths as well as variable names. The inner derivative is the local scale factor relating the old and new widths.

### Quick check

For $\int _{0}^{1} 2 x (x^{2} + 1)^{3} \mathrm{d}x$, set $u = x^{2} + 1$. What are the new bounds?

A. 0 and 1
B. 1 and 2
C. 0 and 2

Answer: B. The bounds transform too: $x = 0$ gives $u = 1$ and $x = 1$ gives $u = 2$, with $\mathrm{d}u = 2 x \mathrm{d}x$.

### How do you choose $u$?

Look for an inner function $g (x)$ and check for its derivative $g' (x)$ in the integrand. A constant factor can be adjusted; a missing factor that varies with $x$ cannot be inserted freely.

### Must the bounds change too?

Yes: $x = a , b$ correspond to $u = g (a) , g (b)$. Alternatively, substitute back to $x$ before applying the original bounds. Never combine the new variable with the old bounds.

### How do you check a substitution?

Differentiate an indefinite-integral answer to recover the integrand. A nonmonotone substitution still works through the antiderivative endpoint formula. Geometric changes of variable require checking orientation and splitting where needed.

### Definition and conditions

Integrate the chain rule backward.

$$
\int f(g(x))g\prime(x)dx=F(g(x))+C,\qquad\int_a^b f(g(x))g\prime(x)dx=\int_{g(a)}^{g(b)}f(u)du
$$

- Assume $f$ is continuous on an interval containing $g ([a , b])$, $F' = f$, and $g$ is continuously differentiable on $[a , b]$.
- Use the transformed bounds $g (a)$ and $g (b)$. This antiderivative formula does not require $g$ to be monotone.

### Derivation

Set $u = x^{2} + 1$, so $\mathrm{d}u = 2 x \mathrm{d}x$.

$$
\int2x(x^2+1)^3dx=\int u^3du
$$

Integrate using the simple power rule.

$$
\int u^3du=\frac{u^4}{4}+C
$$

Substitute the original variable back for $u$.

$$
\frac{(x^2+1)^4}{4}+C
$$

### Interactive diagram

Do equal widths in $x$ become equal widths in $u = x^{2} + 1$? Compare $\frac{\mathrm{d}u}{\mathrm{d}x}$ at different values of $x$.

As $x$ runs from 0 to 1, $u = x^{2} + 1$ runs from 1 to 2. The factor $\frac{\mathrm{d}u}{\mathrm{d}x} = 2 x$ shows that widths change too.

Online diagram: ?lang=en#/lesson/substitution?view=visual

### Guided experiment

1. **Check the start** Set the input to 0.

Preset observation: The new variable is $u=1$ and the local factor $\frac{\mathrm{d}u}{\mathrm{d}x}=0$.

2. **Compare the midpoint** Set the input to 0.5.

Preset observation: The new variable is 1.25 and the local width factor is 1.

3. **Check the endpoint** Set the input to 1.

Preset observation: The new variable is 2 and the width factor is 2. Both bounds and widths must change consistently.

### Worked examples

#### Example 1: Recognize a logarithm

Find $\int \frac{2x}{1+x^2}dx$.

- Set $u = 1 + x^{2}$, so $\mathrm{d}u = 2 x \mathrm{d}x$.
- The integral becomes $\int\frac{1}{u}\,\mathrm{d}u$, with $u$ always positive.

**Answer: $\ln(1+x^2)+C$.**

#### Example 2: Transform the bounds directly

Evaluate $\int_0^1 2x e^{x^2}dx$.

- Set $u = x^{2}$ and $\mathrm{d}u = 2 x \mathrm{d}x$. The bounds 0 and 1 become 0 and 1.
- Evaluate $\int _{0}^{1} e^{u} \mathrm{d}u = e - 1$.

**Answer: $e-1$.**

#### Example 3: Equal new bounds can be correct

Evaluate $\int_{-1}^{1}2xe^{x^2}\,\mathrm{d}x$.

- Set $u=x^2$ and $\mathrm{d}u=2x\,\mathrm{d}x$. Both endpoints give $u=1$, so the transformed integral is $\int_1^1e^u\,\mathrm{d}u=0$.
- Or split at 0: $\int_1^0e^u\,\mathrm{d}u+\int_0^1e^u\,\mathrm{d}u=0$. The reverse and forward traversals cancel.

**Answer: The integral is 0. This is signed accumulation, not the sum of two positive geometric areas.**

### Common mistakes

- **Changing the variable name but not $\mathrm{d}x$ or the bounds.** Transform the variable, differential factor, and bounds together.

- **Applying the formula when $u'$ is missing.** In general, $\int  f (g (x)) \mathrm{d}x$ does not equal $F (g (x))$.

### Exercises and solutions

**1. Find $\int 3x^2\cos(x^3)dx$.**

Hint: The inner derivative is already present.

Answer: $\sin(x^3)+C$.

- Set $u = x^{3}$, so $\mathrm{d}u = 3 x^{2} \mathrm{d}x$ and the integral becomes $\int  \cos u \mathrm{d}u$.

**2. Evaluate $\int_0^1 2x(1+x^2)dx$.**

Hint: The new bounds are not 0 and 1.

Answer: $\frac{3}{2}$.

- Set $u = 1 + x^{2}$; the new bounds are 1 and 2. Then $\int _{1}^{2} u \mathrm{d}u = \frac{4 - 1}{2}$.

**3. Find $\int e^{2x}dx$.**

Hint: Divide out the inner scale factor when integrating.

Answer: $\frac{e^{2x}}{2}+C$.

- Set $u = 2 x$, so $\mathrm{d}u = 2 \mathrm{d}x$; include the factor $\frac{1}{2}$.

**4. Find $\int\sin x\cos x\,dx$.**

Hint: You can also choose $\cos x$; the answers differ only by a constant.

Answer: $\frac{\sin^2x}{2}+C$.

- $u = \sin x$, $\mathrm{d}u = \cos x \mathrm{d}x$.

**5. Evaluate $\int_{-2}^{2}2x(1+x^2)^3\,\mathrm{d}x$. Why is the nonmonotone substitution $u=1+x^2$ valid?**

Hint: Check with endpoint values or split the interval to track orientation.

Answer: The integral is 0. The formula follows from the chain rule and antiderivative endpoint differences; it does not require a one-to-one substitution.

- An antiderivative is $\frac{(1+x^2)^4}{4}$, with equal values at both endpoints.
- Splitting at 0 gives new bounds from 5 to 1, then 1 to 5. The contributions cancel.

Prerequisites: The Chain Rule, The fundamental theorem of calculus.

## Chapter review

Try independently before reading the solutions.

**1. Evaluate $\int_0^1 3x^2 e^{x^3}dx$.**

Hint: Choose the inner function $x^3$ and check both the differential and bounds.

Answer: $e-1$.

- Set $u = x^{3}$ and $\mathrm{d}u = 3 x^{2} \mathrm{d}x$. The bounds remain 0 and 1.

**2. Find $\frac d{dx}\int_{x^2}^{x^3}\sqrt{1+t^2}dt$.**

Hint: Subtract the lower-bound contribution from the upper; both need their inner derivatives.

Answer: $3x^2\sqrt{1+x^6}-2x\sqrt{1+x^4}$.

- Substitute $x^{3}$ and multiply by $3 x^{2}$ for the upper contribution. Subtract the lower contribution with $x^{2}$ and factor $2 x$.

**3. Explain why $\int_{-1}^1x^3dx=0$ does not mean zero geometric area.**

Hint: A zero integral can result from cancellation. Area requires absolute values.

Answer: The two signed contributions cancel; the geometric area is $\frac{1}{2}$.

- Symmetry makes the odd function's integral zero. The absolute-value integral is $2 \int _{0}^{1} x^{3} \mathrm{d}x = \frac{1}{2}$.

**4. A continuous function has integral 10 on $[0,4]$. Why must it equal $\frac52$ somewhere?**

Hint: The integral supplies the number; continuity guarantees attainment.

Answer: Its average is $\frac52$; the integral mean value theorem guarantees this value is attained.

- $f_{\mathrm{avg}}=\frac{10}{4}=\frac52$.
- Continuity places the average between the minimum and maximum; the intermediate value theorem gives the required point.

# Chapter 7 · Geometric and physical applications

Integral applications share one method: determine how a small element contributes, then accumulate over an interval. Area, volume, length, mass, and work use different elements.

Goals:
- Set up area and volume integrals
- Derive arc length and average value
- Distinguish displacement, distance, work, and mass

## 7.1 Area between curves

*How tall is each strip?*

### The idea

Add the areas of thin strips. Vertical strips use top minus bottom; horizontal strips use right minus left.

### Intuition

Between $y = x$ and $y = x^{2}$ on $[0,1]$, each vertical height is $x - x^{2}$. The area is $\int _{0}^{1} (x - x^{2}) \mathrm{d}x = \frac{1}{6}$.

### Another explanation

Find the strip height first, then accumulate its area. Use top minus bottom; if the curves exchange places, reverse the order by splitting the interval.

### Quick check

How do you find area when two curves cross inside the interval?

A. Always subtract the second curve from the first
B. Split at intersections and use top minus bottom on each piece
C. Use only the height difference at the intersection

Answer: B. Area cannot cancel by sign. Find intersections and curve order, then integrate piecewise, or integrate the absolute height difference.

### What comes first?

Find intersections, then determine which curve is above on each piece. Split wherever the order changes to prevent cancellation.

### When are horizontal strips easier?

Use $\int(\text{right}-\text{left})\,\mathrm{d}y$ when the curves are easily written as $x = g (y)$ or this direction needs fewer pieces. Identify each strip's left and right boundaries first.

### Can you use absolute values directly?

Write $\int  |f - g| \mathrm{d}x$. To evaluate it, usually split at intersections and remove the absolute values on each piece. Area is nonnegative, unlike signed accumulation.

### Definition and conditions

When $f$ lies above $g$, accumulate vertical strips to find the area.

$$
A=\int_a^b[f(x)-g(x)]dx
$$

- Assume $f \ge g$ and both functions are integrable on the interval. Split where their order changes.

### Derivation

On $[0,1]$, $x \ge x^{2}$, so the height is $x - x^{2}$.

$$
dA=(x-x^2)dx
$$

Integrate and substitute the endpoints.

$$
A=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1
$$

The result is a nonnegative area.

$$
A=\frac16
$$

### Interactive diagram

What is the height between $y = x$ and $y = x^{2}$? At which endpoints is it zero?

Highlight a strip between $y = x$ and $y = x^{2}$ on $[0,1]$: its height is $x - x^{2}$ and the total area is $\frac{1}{6}$.

Online diagram: ?lang=en#/lesson/area-between?view=visual

### Guided experiment

1. **Check one endpoint** Set the strip position to 0.

Preset observation: The curves meet, so the height is zero.

2. **Check the middle** Set the strip position to 0.5.

Preset observation: The top is $x$, the bottom is $x^2$, and the height is $\frac14$.

3. **Check the other endpoint** Set the position to 1.

Preset observation: The height is zero again. The integral accumulates all strips, not just the middle one.

### Worked examples

#### Example 1: A line and a parabola

Find the area enclosed by $y = x$ and $y = x^{2}$.

- The intersections are $x = 0$ and 1; the line is above between them.
- Integrating $x - x^{2}$ gives $\frac{1}{2} - \frac{1}{3}$.

**Answer: The area is $\frac{1}{6}$.**

#### Example 2: When the order changes

Find the area between $y = x$ and $y = - x$ on $[-1,1]$.

- Top minus bottom is $- 2 x$ on the left and $2 x$ on the right.
- Each triangle has area 1.

**Answer: The total area is 2. Integrating $2 x$ throughout would incorrectly cancel the pieces.**

### Common mistakes

- **Using the same subtraction order without checking intersections.** Split where top and bottom exchange, or use absolute values.

- **Calling a negative integral a geometric area.** First make sure every strip height is nonnegative.

### Exercises and solutions

**1. Find the area between $y = 2$ and $y = x$ on $[0,2]$.**

Hint: The horizontal line is above.

Answer: $2$.

- $\int _{0}^{2} (2 - x) \mathrm{d}x = 4 - 2$.

**2. Find the area between $y = x^{2}$ and the $x$-axis on $[-1,1]$.**

Hint: Use symmetry or an antiderivative's endpoint difference.

Answer: $\frac{2}{3}$.

- The function is nonnegative, and $\int _{-1}^{1} x^{2} \mathrm{d}x = \frac{2}{3}$.

**3. Find the area between $y = \sqrt{x}$ and $y = x$ on $[0,1]$.**

Hint: Compare the functions first.

Answer: $\frac{1}{6}$.

- Since $\sqrt{x} \ge x$, the integral is $\frac{2}{3} - \frac{1}{2} = \frac{1}{6}$.

**4. Do horizontal strips use top minus bottom?**

Hint: Check the direction of the strip's long side.

Answer: Use right minus left.

- The strip extends along $x$ and has thickness $\mathrm{d}y$.

Prerequisites: Integration by substitution, Definite integrals and signed area.

## 7.2 Volumes by cross sections: disks, washers, and more

*Accumulate cross-sectional area*

### The idea

Slice a solid along one direction. Its volume is the integral of cross-sectional area along that direction. Solids of revolution often have disk or washer cross sections.

### Intuition

Rotating around the $x$-axis turns height into radius. A solid disk has area $\pi  R^{2}$; a hole removes $\pi  r^{2}$. Multiply by slice thickness.

### Another explanation

A slice contributes its cross-sectional area times thickness. Use a disk area, a difference of disk areas, or the area formula for the actual shape.

### Quick check

What is the area of a washer with outer radius 2 and inner radius 1?

A. $\pi$
B. $3 \pi$
C. $9 \pi$

Answer: B. Subtract the inner disk from the outer: $\pi  \cdot 2^{2} - \pi  \cdot 1^{2} = 3 \pi$. Subtracting radii before squaring loses the geometry.

### Where do you measure the radius?

From the axis to the boundary. Around $y = k$, the radius is $|y - k|$. The outer radius reaches the boundary farther from the axis, which need not be the higher curve.

### Why not $\pi  (R - r)^{2}$?

A washer is a large disk minus a small disk, giving $\pi  (R^{2} - r^{2})$. Horizontal axes often use $\mathrm{d}x$; vertical axes often use $\mathrm{d}y$. Slices must be perpendicular to the axis.

### When are shells easier?

If washers require inverse functions or many pieces, try shells. If the axis passes through the region, check the actual swept solid; blindly subtracting top and bottom can fail.

### Can you use cross sections without rotation?

Yes. If the area perpendicular to the $x$ direction is $A(x)$, then $V=\int_a^b A(x)\,\mathrm{d}x$. Disks are the special case $A=\pi R^2$. Squares use side length squared; triangles use half base times height. Determine the shape before writing its area.

### Definition and conditions

For outer radius $R$ and inner radius $r$ with $R\ge r\ge0$:

$$
V=\pi\int_a^b\left[R(x)^2-r(x)^2\right]dx
$$

- Assume $a < b$, with $R$ and $r$ continuous on $[a , b]$ and $R \ge r \ge 0$.
- Slices are perpendicular to the axis and radii are distances from it. A disk has $r = 0$.
- More generally, if $A(x)$ is the solid's actual nonnegative continuous cross-sectional area, then $V=\int_a^b A(x)\,\mathrm{d}x$, whether or not the solid is formed by rotation.

### Derivation

Rotate the region bounded by $y = \sqrt{x}$, the $x$-axis, and $x = 1$ about the $x$-axis.

$$
R(x)=\sqrt x,\qquad A(x)=\pi x
$$

Accumulate thin disks along $x$.

$$
V=\pi\int_0^1x\,dx
$$

Use the endpoint values to evaluate the volume.

$$
V=\frac\pi2
$$

### Interactive diagram

If a disk's radius doubles, how does its area change? For a washer, why use $R^{2} - r^{2}$ rather than $(R - r)^{2}$?

The disk model uses $y = \sqrt{x}$; the washer model uses $R = 2$ and $r = 1$. Change the rotation angle and slice position to compare with the area formula.

Online diagram: ?lang=en#/lesson/disk-washer?view=visual

### Guided experiment

1. **Inspect one disk** Complete one revolution and set the slice position to 0.25.

Preset observation: The radius is 0.5 and the full cross-sectional area is $\frac\pi4$.

2. **Double the radius** In the same disk model, set the slice position to 1.

Preset observation: The radius is 1 and the area is $\pi$. Doubling the radius quadruples the area.

3. **Switch to a washer** Use outer radius 2 and inner radius 1.

Preset observation: The full area is $3\pi$, not $\pi(2-1)^2$.

### Worked examples

#### Example 1: A solid of revolution without a hole

Rotate the region below $y = x$, with $0 \le x \le 2$, about the $x$-axis. Find its volume.

- The disk radius is $x$, giving area $\pi  x^{2}$.
- Integrate $\pi  \int _{0}^{2} x^{2} \mathrm{d}x$.

**Answer: $\frac{8\pi}{3}$.**

#### Example 2: A solid with a hole

Rotate the region $0 \le x \le 1$, $1 \le y \le 2$ about the $x$-axis.

- The outer radius is 2 and the inner radius is 1.
- The constant area is $\pi  (4 - 1) = 3 \pi$ and the length is 1.

**Answer: $3\pi$.**

#### Example 3: A solid with square cross sections

The base is bounded by $y=0$ and $y=x(1-x)$ for $0\le x\le1$. Cross sections perpendicular to the $x$-axis are squares whose sides lie in the base. Find the volume.

- The side is $s=x(1-x)$, not a circle's radius. Its area is $A(x)=x^2(1-x)^2$.
- $V=\int_0^1(x^2-2x^3+x^4)\,\mathrm{d}x=\frac13-\frac12+\frac15=\frac1{30}$.

**Answer: The volume is $\frac1{30}$. There is no $\pi$ because the cross sections are squares.**

### Common mistakes

- **Using $\pi  (R - r)^{2}$ for a washer.** Subtract the disk areas: $\pi  (R^{2} - r^{2})$.

- **Using $y$ as the radius when rotating about $y = k$.** A radius is a distance from the axis, not necessarily a coordinate value.

- **Multiplying every cross-sectional volume by $\pi$.** Use the actual shape's area: circle area for a disk, side squared for a square. Integration supplies the thickness.

### Exercises and solutions

**1. Rotate the region below $y = x^{2}$ on $0 \le x \le 1$ about the $x$-axis. Find the volume.**

Hint: Square the radius first.

Answer: $\frac{\pi}{5}$.

- $\pi  \int _{0}^{1} (x^{2})^{2} \mathrm{d}x = \frac{\pi }{5}$.

**2. A constant washer has outer radius 3, inner radius 2, and length 4. Find the volume.**

Hint: A washer uses an area difference.

Answer: $20\pi$.

- The area is $\pi  (9 - 4) = 5 \pi$; multiply by length 4.

**3. Rotate a region between $y = 3$ and $y = 4$ about $y = 2$. What are the outer and inner radii?**

Hint: Subtract the axis height first.

Answer: Outer radius 2; inner radius 1.

- The distances from the axis are $4 - 2$ and $3 - 2$.

**4. Which method generally uses slices parallel to the rotation axis?**

Hint: Compare the slice direction with the axis.

Answer: The shell method.

- A parallel strip sweeps out a thin cylindrical shell, not a perpendicular disk.

**5. A solid on $0\le x\le2$ has square cross sections perpendicular to the $x$-axis with side length $x$. Find its volume.**

Hint: Integrate cross-sectional area, not side length.

Answer: $\frac83$.

- The area is $A(x)=x^2$.
- $V=\int_0^2x^2\,\mathrm{d}x=\frac83$, with no circular-area factor.

**6. On $0\le x\le1$, a solid has triangular cross sections with base $2x$ and height $x$. Find its volume.**

Hint: Write the triangle's area, then integrate along the slicing direction.

Answer: $\frac13$.

- The area is $A(x)=\frac12(2x)x=x^2$.
- Accumulate to get $V=\int_0^1x^2\,\mathrm{d}x=\frac13$.

Prerequisites: Area between curves.

## 7.3 Volumes by cylindrical shells

*How far does a strip travel?*

### The idea

A strip parallel to the rotation axis sweeps out a thin cylindrical shell. Its volume is approximately $\text{circumference}\times\text{height}\times\text{thickness}$.

### Intuition

Unroll a thin shell: it has length $2 \pi  r$, height $h$, and thickness $\mathrm{d}r$. Its contribution is approximately $2\pi rh\,\mathrm{d}r$.

### Another explanation

A strip parallel to the rotation axis forms a thin shell. Multiply circumference, height, and thickness; do not replace circumference with disk area.

### Quick check

Rotate $0 \le y \le x^{2}$, $0 \le x \le 1$ about the $y$-axis. What is the height of a shell of radius $x$?

A. $x$
B. $x^{2}$
C. $1 - x^{2}$

Answer: B. The strip runs from $y = 0$ to $y = x^{2}$, so its height is $x^{2}$. Its volume is approximately $2 \pi  x \cdot x^{2} \cdot \mathrm{d}x$.

### How do you find radius and height?

For a vertical strip rotating about the $y$-axis with nonnegative horizontal coordinate, $r = x$ and $h$ is top minus bottom. Around $x = k$, $r = |x - k|$. Each shell must represent a distinct radius to avoid double counting.

### Why can the thin-shell approximation be integrated?

An exact shell has volume $\pi  [(r + \Delta  r)^{2} - r^{2}] h$. Expanding gives $2 \pi  r h \Delta  r + \pi  h \Delta  r^{2}$. Under refinement, the total second-order error tends to zero, leaving the integral.

### How can you check the answer?

Washers for the same region must give the same volume. If the axis passes through the region, shells from opposite sides may overlap. Choose a description without repeated coverage.

### Definition and conditions

The cylindrical shell volume formula.

$$
V=2\pi\int_a^b r(x)h(x)dx
$$

- Assume $a < b$, with continuous nonnegative radius $r$ and height $h$ on $[a , b]$. Shells must not overlap in coverage.
- Slices are parallel to the axis; $x$ measures perpendicular distance so $\mathrm{d}x$ is radial thickness. For example, about the $y$-axis with $x \ge 0$, $r = x$.

### Derivation

Rotate $0 \le x \le 1$, $0 \le y \le x^{2}$ about the $y$-axis.

$$
r=x,\qquad h=x^2
$$

A thin shell contributes $2 \pi  x^{3} \mathrm{d}x$.

$$
V=2\pi\int_0^1x^3dx
$$

Integration gives $\frac{\pi }{2}$.

$$
V=\frac\pi2
$$

### Interactive diagram

Does height stay fixed as the shell radius increases? Identify $2 \pi  x$ and $x^{2}$ in the two-dimensional strip.

Move the vertical strip: its radius is $x$, height $x^{2}$, and circumference $2 \pi  x$. The strip and rotation views stay synchronized.

Online diagram: ?lang=en#/lesson/shells?view=visual

### Guided experiment

1. **Inspect a small radius** Complete one revolution and select radius 0.25.

Preset observation: The height is $\frac1{16}$ and the circumference is $\frac\pi2$.

2. **Double the radius** Select radius 0.5.

Preset observation: The height quadruples and the circumference doubles, so the contribution per unit thickness increases eightfold.

3. **Return to the strip** Set the two-dimensional position to 0.5.

Preset observation: The strip height is $x^2$ and the radius is $x$. Both appear separately in the integral.

### Worked examples

#### Example 1: Calculate with shells

Find the volume formed by rotating $0 \le x \le 2$, $0 \le y \le x$ about the $y$-axis.

- $r = x$ and $h = x$, so $V = 2 \pi  \int _{0}^{2} x^{2} \mathrm{d}x$.
- The result is $\frac{2 \pi  \times 8}{3}$.

**Answer: $\frac{16\pi}{3}$.**

#### Example 2: Check with washers

Rotate $0 \le x \le 1$, $0 \le y \le x^{2}$ about the $y$-axis. Verify the volume using washers.

- Slice horizontally for $y \in [0 , 1]$: the outer radius is 1 and the inner radius is $\sqrt{y}$.
- $V = \pi  \int _{0}^{1} (1 - y) \mathrm{d}y = \frac{\pi }{2}$.

**Answer: This agrees with the shell result $\frac{\pi}{2}$.**

### Common mistakes

- **Squaring the shell radius.** A shell uses circumference $2 \pi  r$. A disk uses area $\pi  r^{2}$.

- **Adding shells from both sides of an axis without checking overlap.** They may cover the same volume. Sketch the rotated solid first.

### Exercises and solutions

**1. Rotate $0 \le x \le 1$, $0 \le y \le 1$ about the $y$-axis. Find its volume.**

Hint: This is a cylinder of radius 1 and height 1.

Answer: $\pi$.

- The shell method gives $2 \pi  \int _{0}^{1} x \mathrm{d}x = \pi$.

**2. Find the volume below $y = x$ on $0 \le x \le 1$ rotated about the $y$-axis.**

Hint: Both radius and height are $x$.

Answer: $\frac{2\pi}{3}$.

- $2 \pi  \int _{0}^{1} x \cdot x \mathrm{d}x = \frac{2 \pi }{3}$.

**3. A vertical strip at $x \in [0 , 1]$ rotates about $x = 3$. What is its radius?**

Hint: A radius is nonnegative.

Answer: $3-x$.

- Its horizontal distance from the axis is $|x - 3| = 3 - x$.

**4. Can shell height and thickness be interchanged freely?**

Hint: Check their directions in three dimensions.

Answer: No.

- Height runs along the axis; thickness runs radially. Changing the slices changes the variable and boundaries.

Prerequisites: Volumes by cross sections: disks, washers, and more, Area between curves.

## 7.4 Arc length and surface area of revolution

*Add short lengths, not heights*

### The idea

Arc length adds the Pythagorean lengths of small segments. Surface area of revolution adds the narrow bands swept out by those segments.

### Intuition

A small segment moves horizontally by $\mathrm{d}x$ and vertically by about $f' \mathrm{d}x$, giving length $\sqrt{1 + {f'}^{2}} \mathrm{d}x$. Following the curve is longer than measuring its horizontal span.

### Another explanation

Length includes both horizontal and vertical change. Rotation sweeps this slant length into a band, so horizontal width alone is insufficient.

### Quick check

Which length multiplies circumference in a narrow band of a surface of revolution?

A. Horizontal width $\mathrm{d}x$
B. Slant length $\mathrm{d}s = \sqrt{1 + f' (x)^{2}} \mathrm{d}x$
C. Function height $f (x)$

Answer: B. The band follows the curve, so its width is arc length $\mathrm{d}s$. Using only $\mathrm{d}x$ omits the slant. This calculates lateral area only.

### How do you calculate arc length?

For continuously differentiable $f$ on $[a , b]$, integrate $\sqrt{1 + {f'}^{2}}$. Squaring the slope makes descending sections contribute positive length too. Arc length generally differs from the straight distance between endpoints.

### What if you cannot integrate the formula?

Use numerical methods or write $x = g (y)$ and integrate with respect to $y$. The absence of an elementary antiderivative does not make the length undefined.

### Why multiply by circumference for surface area?

When $f \ge 0$ rotates about the $x$-axis, a segment $\mathrm{d}s$ sweeps a band with circumference $2 \pi  f$ and area approximately $2 \pi  f \mathrm{d}s$. The integral counts the lateral surface only; add end caps separately. A different axis changes the radius.

### Definition and conditions

Arc length and lateral surface area about the $x$-axis.

$$
L=\int_a^b\sqrt{1+[f\prime(x)]^2}\,dx,\qquad S=2\pi\int_a^b f(x)\sqrt{1+[f\prime(x)]^2}\,dx
$$

- Assume $f$ is continuously differentiable on $[a , b]$. The surface formula here requires $f \ge 0$ and excludes end caps.

### Derivation

A horizontal change $\Delta  x$ and vertical change $\Delta  y$ form a right triangle.

$$
\Delta s=\sqrt{(\Delta x)^2+(\Delta y)^2}
$$

Divide out the horizontal scale; the segment slope tends to $f'$.

$$
ds=\sqrt{1+(f\prime)^2}\,dx
$$

Adding the segment lengths gives the arc length integral.

$$
L=\int_a^b ds
$$

### Interactive diagram

Why is a curve segment longer than its horizontal width? Refine the segments, then see how their slant length enters the rotated band area.

Increase the number of two-dimensional line segments and compare polygonal length with arc length. Rotate the same curve in three dimensions to see why band area uses $\mathrm{d}s$.

Online diagram: ?lang=en#/lesson/arc-length?view=visual

### Guided experiment

1. **Start with a few segments** Use 4 line segments in two dimensions.

Preset observation: The polygonal length approximates the curve but still has error.

2. **Refine further** Use 60 line segments.

Preset observation: The polygonal length moves closer to arc length. Each slant length exceeds its horizontal width.

3. **Inspect a rotated band** Switch to the three-dimensional surface and complete one revolution.

Preset observation: Lateral area multiplies rotation circumference by slant length. This model excludes end caps.

### Worked examples

#### Example 1: Length of a sloping line

Find the arc length of $y = 3 x + 1$ on $[0,2]$.

- The derivative is 3, so the length factor is $\sqrt{1 + 9} = \sqrt{10}$.
- Multiply by the horizontal span 2.

**Answer: $2\sqrt{10}$.**

#### Example 2: A directly integrable curve

Find the arc length of $y = (\frac{2}{3}) x^{\frac{3}{2}}$ on $[0,1]$.

- The derivative is $\sqrt{x}$, so the length is $\int _{0}^{1} \sqrt{1 + x} \mathrm{d}x$.
- An antiderivative is $(\frac{2}{3}) (1 + x)^{\frac{3}{2}}$.

**Answer: $\frac23(2\sqrt2-1)$.**

### Common mistakes

- **Using $\int  f (x) \mathrm{d}x$ for arc length.** That gives signed accumulation, usually interpreted as area. Arc length depends on slope.

- **Treating lateral surface area as total area of a closed solid.** Add the appropriate end caps when total surface area is requested.

### Exercises and solutions

**1. Find the arc length of $y = 4 x$ on $[0,1]$.**

Hint: Check with the Pythagorean theorem.

Answer: $\sqrt{17}$.

- The length factor is $\sqrt{1 + 16}$ and the interval width is 1.

**2. Find the arc length of the horizontal line $y = 2$ on $[0,3]$.**

Hint: A horizontal path equals its horizontal span.

Answer: $3$.

- The derivative is 0, so integrating 1 gives 3.

**3. Rotate $y = 2$, $0 \le x \le 3$, about the $x$-axis. Find the lateral surface area.**

Hint: Exclude the two circular end caps.

Answer: $12\pi$.

- Radius 2 and length 3 give $2 \pi  \times 2 \times 3$.

**4. Why is $f'$ squared in the arc length integrand?**

Hint: A descending segment still has positive length.

Answer: Length comes from the Pythagorean theorem and does not depend on the sign of direction.

- Add the squares of vertical and horizontal components.

Prerequisites: Integration by substitution, The Chain Rule.

## 7.5 Displacement, work, mass, and averages

*Accumulate local contributions*

### The idea

Write a small contribution before integrating: $\text{velocity}\times\text{time}$ gives displacement, $\text{force}\times\text{displacement}$ gives work, and $\text{linear density}\times\text{length}$ gives mass.

### Intuition

Units help identify the right factors: $\frac{\mathrm{m}}{\mathrm{s}}\times\mathrm{s}=\mathrm{m}$, $\mathrm{N}\times\mathrm{m}=\mathrm{J}$, and $\frac{\mathrm{kg}}{\mathrm{m}}\times\mathrm{m}=\mathrm{kg}$.

### Another explanation

Match each contribution with its units before integrating. Negative velocity tracks direction, weight times lift distance gives work, and density times volume gives mass.

### Quick check

If velocity $v (t)$ has both signs, what should you integrate for total distance?

A. $v (t)$
B. $|v (t)|$
C. $v' (t)$

Answer: B. Displacement integrates signed $v (t)$; distance integrates speed $|v (t)|$. Backtracking cancels displacement but never distance.

### How do displacement and distance differ?

Displacement is $\int  v \mathrm{d}t$; distance is $\int  |v| \mathrm{d}t$. Split where velocity changes sign. Add initial position to recover position. Average velocity is displacement divided by elapsed time.

### How do you calculate variable-force work?

The force component along motion contributes $\mathrm{d}W = F (x) \mathrm{d}x$. Stretching a spring requires external force $k x$, giving work $\int kx\,\mathrm{d}x$. The spring's restoring force points the other way.

### How do you find mass and center of mass?

Linear density $\lambda$ gives mass $m = \int  \lambda  \mathrm{d}x$. The first moment is $M = \int  x \lambda  \mathrm{d}x$, so the center of mass is $\frac{M}{m}$ for $m > 0$. Physical models such as fluid pressure also need assumptions about density and depth.

### Why does pumping water need varying lift distances?

With tank bottom $y=0$ and outlet height $H$, a layer at height $y$ has volume $A(y)\,\mathrm{d}y$ and must rise $H-y$. Thus $W=\int\rho gA(y)(H-y)\,\mathrm{d}y$ over the actual water layers. Assume constant density $\rho$ and gravity $g$, negligible losses, and negligible exit speed.

### How does water pressure accumulate into force?

Measure depth $h$ downward from the surface. Gauge pressure is $p=\rho gh$. A strip of width $w(h)$ and height $\mathrm{d}h$ receives force $\rho ghw(h)\,\mathrm{d}h$. Integrate over depth to find the resultant on one side of a vertical plate. If both sides are pressurized, use their pressure difference.

### Definition and conditions

Multiply each local contribution by the appropriate differential.

$$
\Delta s=\int v(t)dt,\quad W=\int F(x)dx,\quad m=\int\lambda(x)dx,\quad\bar x=\frac{\int x\lambda(x)dx}{m}
$$

- Bounds must match the time or position interval. Density is nonnegative and center of mass requires positive total mass. Use the force component along displacement.

### Derivation

For $v (t) = t - 1$ on $0 \le t \le 3$, first locate the change of direction.

$$
v(t)=0\Rightarrow t=1
$$

Signed accumulation gives displacement.

$$
\Delta s=\int_0^3(t-1)dt=\frac32
$$

For distance, reverse the first piece's sign to obtain a larger total length.

$$
D=-\int_0^1(t-1)dt+\int_1^3(t-1)dt=\frac52
$$

### Interactive diagram

When velocity changes from negative to positive, are displacement and distance equal? Compare the readings at upper bound 2.

For $v (t) = t - 1$, the negative section represents backward motion and the positive section forward motion. Compare displacement and total distance.

Online diagram: ?lang=en#/lesson/physical-integrals?view=visual

### Guided experiment

1. **Move backward** Set the velocity model's upper bound to 1.

Preset observation: Displacement is $-\frac12$ and distance is $\frac12$.

2. **Return to the starting point** Set the upper bound to 2.

Preset observation: Signed displacement cancels to zero, but distance is 1.

3. **Continue forward** Set the upper bound to 3.

Preset observation: Displacement is $\frac32$ and distance is $\frac52$. Identify the requested quantity before reading the number.

### Worked examples

#### Example 1: Stretching a spring

A spring has $k=100\,\mathrm{N}\,\mathrm{m}^{-1}$. Find the work to stretch it from its natural length to $0.2\,\mathrm{m}$.

- The external force is $F = 100 x$.
- $W = \int _{0}^{0.2} 100 x \mathrm{d}x = 50 \times 0.04$.

**Answer: $2\,\mathrm{J}$, assuming quasistatic stretching and negligible losses.**

#### Example 2: A nonuniform rod

A rod occupies $x \in [0 , 2]$ with linear density $\lambda  (x) = 1 + x$. Find its mass and center of mass.

- The mass is $[x + \frac{x^{2}}{2}]_{0}^{2} = 4$.
- The moment is $[\frac{x^{2}}{2} + \frac{x^{3}}{3}]_{0}^{2} = \frac{14}{3}$. Divide by the mass.

**Answer: Mass 4; center of mass $\frac{7}{6}$, shifted toward the denser right side.**

#### Example 3: Each water layer rises a different distance

A cylindrical tank has bottom $y=0$, radius $1\,\mathrm{m}$, water depth $2\,\mathrm{m}$, and outlet height $3\,\mathrm{m}$. With $\rho=1000\,\mathrm{kg}\,\mathrm{m}^{-3}$ and $g=9.8\,\mathrm{m}\,\mathrm{s}^{-2}$, find the work to empty it, neglecting losses.

- A layer at height $y$ has area $\pi\,\mathrm{m}^2$, weight $9800\pi\,\mathrm{d}y$, and lift distance $3-y$.
- $W=9800\pi\int_0^2(3-y)\,\mathrm{d}y=9800\pi[3y-\frac{y^2}{2}]_0^2$.

**Answer: $W=39200\pi\,\mathrm{J}$. Do not treat all the water as starting at the tank bottom.**

#### Example 4: Pressure increases with depth

A vertical rectangular gate is $2\,\mathrm{m}$ wide and $3\,\mathrm{m}$ high, with its top at the water surface. One side holds water and the other has the same atmospheric pressure. Use $\rho=1000\,\mathrm{kg}\,\mathrm{m}^{-3}$ and $g=9.8\,\mathrm{m}\,\mathrm{s}^{-2}$ to find the net hydrostatic force.

- At depth $h$, the pressure difference is $p=9800h$ and strip area is $2\,\mathrm{d}h$, so $\mathrm{d}F=19600h\,\mathrm{d}h$.
- $F=19600\int_0^3h\,\mathrm{d}h=19600\times\frac92$.

**Answer: $F=88200\,\mathrm{N}$. This is force, not work.**

### Common mistakes

- **Calling the integral of velocity total distance.** Negative velocity cancels positive velocity. Distance integrates absolute velocity.

- **Pairing the integrand with the wrong variable or units.** Force multiplies position change; flow rate multiplies time change. Check dimensions first.

### Exercises and solutions

**1. For $v (t) = 2 t$ on $0 \le t \le 2$, find displacement.**

Hint: Velocity is nonnegative throughout this interval.

Answer: $4$.

- The antiderivative is $t^{2}$; its endpoint difference is 4.

**2. A spring has $k=50\,\mathrm{N}\,\mathrm{m}^{-1}$. Find the external work to stretch it from 0 to $0.4\,\mathrm{m}$.**

Hint: The force grows from zero rather than staying constant.

Answer: $4\,\mathrm{J}$.

- $W = (\frac{1}{2}) \times 50 \times 0.4^{2} = 4$.

**3. A rod has density $\lambda  = 3$ and length 2. Find its mass.**

Hint: Multiply constant density by length.

Answer: $6$.

- $\int _{0}^{2} 3 \mathrm{d}x = 6$.

**4. For $v (t) = t - 1$ on $0 \le t \le 2$, find displacement and distance.**

Hint: Signed change and total length are different quantities.

Answer: Displacement 0; distance 1.

- Split at 1: the displacements $\frac{- 1}{2}$ and $\frac{1}{2}$ cancel.
- Their absolute values add to 1.

**5. A cylindrical tank has radius $1\,\mathrm m$, water depth $2\,\mathrm m$, and a fixed outlet $2\,\mathrm m$ above the bottom. With $\rho=1000\,\mathrm{kg/m^3}$ and $g=9.8\,\mathrm{m/s^2}$, find the work to empty it, neglecting losses.**

Hint: Only the lift distance changes; the water interval stays the same.

Answer: $19600\pi\,\mathrm{J}$.

- The lift distance is $2-y$, so $W=9800\pi\int_0^2(2-y)\,\mathrm{d}y$.
- The integral is 2, giving $19600\pi\,\mathrm{J}$. A layer at the outlet needs zero lift distance.

**6. A vertical rectangular gate is $2\,\mathrm m$ wide, with its top $1\,\mathrm m$ and bottom $4\,\mathrm m$ below water. One side holds water and the other has the same atmospheric pressure. Use $\rho=1000\,\mathrm{kg/m^3}$ and $g=9.8\,\mathrm{m/s^2}$ to find the net hydrostatic force.**

Hint: The variable is depth below the water surface.

Answer: $147000\,\mathrm{N}$.

- Integrate depth from 1 to 4: $F=19600\int_1^4h\,\mathrm{d}h$.
- $F=19600\times\frac{16-1}{2}=147000\,\mathrm{N}$.

**7. In a pumping integral, what does $\rho gA(y)\,\mathrm{d}y$ represent, and what changes after multiplying by $H-y$?**

Hint: Distinguish mass, force, and work in that order.

Answer: The first is the layer's weight, a force; the product is the work to lift it.

- Density times volume gives mass; multiplying by gravitational acceleration gives force.
- Force times lift distance gives work. Their units are $\mathrm{N}$ and $\mathrm{J}$, respectively.

Prerequisites: Definite integrals and signed area, Area between curves.

## Chapter review

Try independently before reading the solutions.

**1. Rotate the region below $y = x^{2}$ on $0 \le x \le 1$ about the $x$-axis and about the $y$-axis. Find both volumes.**

Hint: Use disks for one axis and shells for the other; the radii differ.

Answer: About the $x$-axis: $\frac{\pi}{5}$. About the $y$-axis: $\frac{\pi}{2}$.

- Disks give $\pi  \int  x^{4} \mathrm{d}x = \frac{\pi }{5}$ over the stated interval.
- Shells give $2 \pi  \int  x^{3} \mathrm{d}x = \frac{\pi }{2}$ over the stated interval.

**2. For $v (t) = 2 t - 2$ on $0 \le t \le 3$, find displacement and distance.**

Hint: Locate the sign change before accumulating signed displacement and total distance.

Answer: Displacement 3; distance 5.

- Displacement is $[t^{2} - 2 t]_{0}^{3} = 3$.
- Split at 1: the negative part has magnitude 1 and the positive part contributes 4.

**3. A length-2 rod has density $\lambda  = x + 2$. Find its mass and center of mass.**

Hint: Integrate mass and first moment separately, then divide.

Answer: Mass 6; center of mass $\frac{10}{9}$.

- $m = \int _{0}^{2} (x + 2) \mathrm{d}x = 6$.
- $M = \int _{0}^{2} (x^{2} + 2 x) \mathrm{d}x = \frac{20}{3}$. Divide by 6.

**4. A solid has square cross sections perpendicular to the $x$-axis with side $x(1-x)$ for $0\le x\le1$. Find its volume.**

Hint: The cross section is a square, not a disk.

Answer: $\frac1{30}$.

- $A(x)=x^2(1-x)^2$.
- $\int_0^1A(x)\,\mathrm{d}x=\frac13-\frac12+\frac15=\frac1{30}$.

**5. A tank has constant cross-sectional area $1\,\mathrm{m}^2$ and water on $0\le y\le2\,\mathrm{m}$. The outlet is at height $3\,\mathrm{m}$ and $\rho g=9800\,\mathrm{N}\,\mathrm{m}^{-3}$. Find the work to empty it, neglecting losses.**

Hint: Layer thickness and lift distance are different lengths.

Answer: $39200\,\mathrm{J}$.

- A layer weighs $9800\,\mathrm{d}y$ and rises $3-y$.
- $W=9800\int_0^2(3-y)\,\mathrm{d}y=39200\,\mathrm{J}$.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. Find the domain of $\ln(4-x^2)$.**

Hint: The logarithm's input must be strictly positive.

Answer: $(-2,2)$.

- Require $4 - x^{2} > 0$; exclude the endpoints.

**2. Evaluate $\lim_{x\to0}\frac{\sin(2x)}{5x}$.**

Hint: Match the denominator to the sine's angle and adjust the constant.

Answer: $\frac{2}{5}$.

- Rewrite as $\frac{(\frac{2}{5}) \sin (2 x)}{2 x}$.

**3. Evaluate $\lim_{x\to1}\frac{x^3-1}{x-1}$.**

Hint: Factor the difference of cubes; cancellation is valid away from the target.

Answer: $3$.

- Cancel to obtain $x^{2} + x + 1$, then substitute 1.

**4. Prove that $f(x)=4x-1$ tends to 7 at $a = 2$.**

Hint: Express the output error as a constant times the input error.

Answer: Choose $\delta=\frac{\varepsilon}{4}$.

- The output error is $|4 x - 1 - 7| = 4 |x - 2| < 4 \delta  = \varepsilon$.

**5. Differentiate $y=e^{x^2}\ln x$.**

Hint: Use the product rule first, then the chain rule for the exponential.

Answer: $e^{x^2}(2x\ln x+\frac{1}{x})$, $x > 0$.

- Use the product rule, apply the chain rule to the exponential, and factor common terms.

**6. Find the tangent to $x^2+y^2=10$ at $(1,3)$.**

Hint: Find the curve's slope, then use the given point to write the tangent.

Answer: $y-3=-\frac{x-1}{3}$.

- Implicit differentiation gives $y' = \frac{- x}{y}$, so the slope is $\frac{- 1}{3}$.

**7. A 10 m ladder's foot moves away from a wall at $0.5\,\mathrm{m}\,\mathrm{s}^{-1}$. Find the top's velocity when the foot is 6 m from the wall.**

Hint: Find the current height by the Pythagorean theorem, then substitute into the rate equation.

Answer: $-\frac{3}{8}\,\mathrm{m}\,\mathrm{s}^{-1}$.

- The height is 8, so $\frac{\mathrm{d}y}{\mathrm{d}t} = - (\frac{6}{8}) \times 0.5 = \frac{- 3}{8}$.

**8. Find the absolute extrema of $f(x)=x^3-3x^2$ on $[-1,3]$.**

Hint: List derivative zeros and both endpoints; compare every value.

Answer: Maximum 0 at $x = 0 , 3$; minimum −4 at $x = - 1 , 2$.

- The derivative is $3 x (x - 2)$. Check critical points 0 and 2 and endpoints −1 and 3.
- The four values are −4, 0, −4, and 0.

**9. Evaluate $\lim_{x\to\infty}\frac{x^2}{e^x}$.**

Hint: Recheck the indeterminate form before each application of L'Hôpital's rule.

Answer: $0$.

- The form is $\frac{\infty }{\infty }$. One differentiation gives $\frac{2 x}{e^{x}}$ and a second gives $\frac{2}{e^{x}}$, which tends to zero.

**10. Evaluate $\int_0^2 x\sqrt{1+x^2}dx$.**

Hint: Use the square root's inner expression; keep the constant in the differential.

Answer: $\frac{5\sqrt{5}-1}{3}$.

- Set $u = 1 + x^{2}$ and $\mathrm{d}u = 2 x \mathrm{d}x$. The new bounds are 1 and 5.
- Integrating $(\frac{1}{2}) u^{\frac{1}{2}}$ gives $\frac{u^{\frac{3}{2}}}{3}$.

**11. Find $\frac d{dx}\int_0^{\sin x}e^{t^2}dt$.**

Hint: Substitute the upper bound and apply the chain rule.

Answer: $e^{\sin^2x}\cos x$.

- Evaluate the integrand at the upper bound, then multiply by the upper bound's derivative.

**12. Find the area enclosed by $y = 2 x$ and $y = x^{2}$.**

Hint: Find both intersections and identify the upper curve.

Answer: $\frac{4}{3}$.

- The intersections are 0 and 2. Integrating $2 x - x^{2}$ gives $4 - \frac{8}{3}$.

**13. Rotate the region below $y = \sqrt{x}$ on $0 \le x \le 4$ about the $x$-axis. Find the volume.**

Hint: The cross-sectional area is the radius squared times the circular-area factor.

Answer: $8\pi$.

- The disk radius is $\sqrt{x}$, so $V = \pi  \int _{0}^{4} x \mathrm{d}x = 8 \pi$.

**14. For density $\lambda  (x) = 2 x$ on $0 \le x \le 1$, find mass and center of mass.**

Hint: Find total mass and first moment separately; the moment alone is not the center of mass.

Answer: Mass 1; center of mass $\frac{2}{3}$.

- Over this interval, $m = \int  2 x \mathrm{d}x = 1$ and $M = \int  2 x^{2} \mathrm{d}x = \frac{2}{3}$. Divide by mass.

# Glossary

- **Domain**: The set of allowed inputs.

- **Composition**: The output of one function becomes the input to another.

- **Inverse function**: A function that reverses a one-to-one input–output relation.

- **Radian**: Arc length divided by radius.

- **Limit**: The value approached by outputs as inputs approach a target.

- **Indeterminate form**: A form such as $\frac{0}{0}$ that does not by itself determine a limit.

- **Continuity**: The function value exists and equals the nearby limit.

- **Asymptote**: A line describing a graph's limiting behavior near a boundary or far away.

- **Difference quotient**: The average rate of change between two inputs.

- **Derivative**: The finite limit of a difference quotient as the input separation tends to zero.

- **Chain rule**: Multiply the rates of change through the layers of a composition.

- **Critical point**: A point in the domain where the derivative is zero or undefined.

- **Inflection point**: A point on a continuous curve where concavity changes.

- **Linearization**: A local first-order approximation built from a tangent.

- **Riemann sum**: A sum of sample heights times subinterval widths.

- **Antiderivative**: A function whose derivative is the given function.

- **Definite integral**: The signed limit of increasingly fine accumulated contributions.

- **Substitution**: A change of integration variable based on the chain rule in reverse.

- **Arc length**: The accumulated Pythagorean lengths of short curve segments.

- **Center of mass**: The mass-weighted average position.

- **Integral mean value theorem**: A continuous function on a closed interval of positive length attains its average value there.

- **Volume by cross sections**: Accumulate cross-sectional area along a slicing direction; rotation is not required.

- **Gauge pressure**: Pressure relative to surrounding atmospheric pressure; in a stationary fluid it increases with depth.

# Proof supplements and scope

## Proof supplement: basic trigonometric limits

On the unit circle, for $0 < h < \frac{\pi }{2}$, the inscribed triangle, sector, and circumscribed triangle have increasing areas, giving $\sin h < h < \tan h$. Divide by $\sin h$ and rearrange to obtain $\cos h < \frac{\sin h}{h} < 1$. Since $\cos h \to 1$, squeezing gives right limit 1. The identity $\frac{\sin (- h)}{- h} = \frac{\sin h}{h}$ gives the same left limit. Rationalizing $\frac{\cos h - 1}{h}$ gives $- [\frac{\sin h}{h}] [\frac{\sin h}{1 + \cos h}]$, whose limit is 0.

## Proof supplement: Cauchy's mean value theorem

Suppose $f , g$ are continuous on $[a , b]$ and differentiable inside. Define $H (x) = [f (b) - f (a)] [g (x) - g (a)] - [g (b) - g (a)] [f (x) - f (a)]$. Both endpoint values of $H$ are zero. Rolle's theorem gives $H' (c) = 0$, producing the cross-product identity. If $g'$ is nowhere zero inside, the mean value theorem also gives $g (b) \ne g (a)$, allowing division to equate the ratio of increments with a ratio of derivatives.

## Proof supplement: the sum of squares

Start with $(i + 1)^{3} - i^{3} = 3 i^{2} + 3 i + 1$ and sum over $i = 1 , … , n$. The left side telescopes. Use $\sum  i = \frac{n (n + 1)}{2}$ and rearrange to obtain $\sum  i^{2} = \frac{n (n + 1) (2 n + 1)}{6}$. This turns the right Riemann sum for $x^{2}$ into an explicit finite expression.

## Scope and the next volumes

This book covers single-variable Calculus I. Systematic integration by parts, partial fractions, trigonometric substitution, improper integrals, sequences, and Taylor series belong to Calculus II. Partial derivatives, multiple integrals, and vector calculus belong to Calculus III. Those volumes are complete books rather than placeholder chapters here.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [OpenStax · Calculus Volume 1](https://openstax.org/details/books/calculus-volume-1): Used to check scope and theorem hypotheses. Explanations, worked solutions, and interactive diagrams were independently written; source prose and images were not copied.

- [Active Calculus · Single Variable, Second Edition](https://activecalculus.org/acs2e/): Informed the organization around problems and activities. Source prose, activities, and questions were not copied.

- [IES · Organizing Instruction and Study to Improve Student Learning](https://ies.ed.gov/ncee/wwc/PracticeGuide/1): Informed the use of linked text and diagrams, interleaved examples and exercises, and spaced review. This does not establish the effectiveness of this textbook.

- [PhET · Research and Simulation Design](https://phet.colorado.edu/en/research): Informed the design of limited controls, immediate feedback, and multiple representations. Three-dimensional models and diagrams were independently implemented.

- [3Blue1Brown · Essence of Calculus](https://www.3blue1brown.com/lessons/essence-of-calculus/): Informed geometric explanations connecting limits, derivatives, and integrals. Video, images, and wording were not copied.

- [MIT OCW · 18.01SC Syllabus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/): Used as a reference for course goals and self-study organization. The MIT course also covers material beyond this volume.

- [Agarwal, Nunes & Blunt · Retrieval Practice (2021)](https://pdf.poojaagarwal.com/Agarwal_etal_2021_EDPR.pdf): Research reference for retrieval and feedback. The mathematics sample is limited; multiple-choice checks are not treated as complete retrieval practice.

- [CMU Eberly Center · Choosing an Appropriate Approach](https://www.cmu.edu/teaching/solveproblem/strat-cantapply/cantapply-04.html): Informed explanations of method selection and mixed exercises that check transfer.
