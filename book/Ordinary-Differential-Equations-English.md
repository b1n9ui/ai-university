# AI University · Ordinary Differential Equations

From local change to complete motion

English edition 1 · source v0.1.1 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

First-order equations, existence and uniqueness, linear and nonlinear systems, damping and resonance, Laplace transforms, series, and numerical methods. Explanations, derivations, worked examples, exercises, and interactive figures form a complete introductory course.

Scope: Eleven chapters and fifty-five lessons cover a complete undergraduate introduction: local theory, second- and higher-order linear equations, Laplace transforms, linear systems, basic nonlinear dynamics, series, and numerical methods. PDEs have a separate volume. Manifold dynamics, full distribution theory, and solver engineering are outside this scope. Fourier expansions and full Sturm-Liouville theory belong to the later PDE volume; here we introduce the simplest boundary eigenvalue problem.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Equations, solutions, and rates

- 1.1 What a differential equation describes
- 1.2 Order, linearity, and standard form
- 1.3 Initial values and solution intervals
- 1.4 Direction fields and solution curves

### Solving first-order equations

- 2.1 Separable equations
- 2.2 First-order linear equations and integrating factors
- 2.3 Growth, cooling, and mixing
- 2.4 Exact equations and potential functions
- 2.5 Homogeneous substitutions and integrating-factor tests
- 2.6 Bernoulli equations and the logistic model

### Existence, uniqueness, and continuation

- 3.1 Local existence and uniqueness
- 3.2 Integral equations and Picard iteration
- 3.3 Maximal intervals and finite-time blow-up
- 3.4 Continuous dependence and error growth

### Second-order linear equations

- 4.1 Superposition and second-order solution spaces
- 4.2 Wronskians and Abel's formula
- 4.3 Characteristic equations and distinct real roots
- 4.4 Complex roots and real oscillations
- 4.5 Repeated roots and reduction of order

### Forced equations and vibration

- 5.1 Undetermined coefficients and resonance corrections
- 5.2 Variation of parameters
- 5.3 Damped oscillation and critical damping
- 5.4 Forced oscillation and resonance
- 5.5 Frequency response, amplitude, and phase

### Higher-order linear equations

- 6.1 Higher-order constant-coefficient linear equations
- 6.2 Euler-Cauchy equations
- 6.3 First-order systems and state variables
- 6.4 Boundary conditions and eigenvalue problems

### Laplace transforms

- 7.1 Laplace transforms and convergence
- 7.2 Basic transforms, shifts, and inverses
- 7.3 Solving initial-value problems with Laplace transforms
- 7.4 Step inputs and time delay
- 7.5 Impulses and jump conditions
- 7.6 Convolution and general forcing responses

### Linear differential systems

- 8.1 Linear systems and fundamental matrices
- 8.2 Eigendirections, nodes, and saddles
- 8.3 Matrix exponentials and continuous evolution
- 8.4 Repeated-root systems and generalized eigendirections
- 8.5 Complex eigenvalues, rotation, and stability
- 8.6 Forced systems and variation of constants

### Nonlinear systems and qualitative analysis

- 9.1 Autonomous equations and phase lines
- 9.2 Jacobians and local linearization
- 9.3 Nullclines and predator-prey models
- 9.4 Energy, pendulums, and Lyapunov functions
- 9.5 Parameters and basic bifurcations

### Power series and Frobenius methods

- 10.1 Power-series solutions at ordinary points
- 10.2 Regular singular points and indicial equations
- 10.3 Repeated indicial roots and logarithmic solutions
- 10.4 From recurrences to special functions

### Numerical solutions, error, and stability

- 11.1 Euler's method
- 11.2 Midpoint and Heun second-order methods
- 11.3 Classical fourth-order Runge-Kutta
- 11.4 Local and global errors
- 11.5 Absolute stability and stiffness
- 11.6 Adaptive steps and the solving workflow

# Chapter 1 · Equations, solutions, and rates

Identify the constraint before choosing a solution method. A solution is a function on an interval satisfying conditions, not merely a formula.

Goals:
- Distinguish order and linearity
- Verify solutions and initial data
- Read direction fields

## 1.1 What a differential equation describes

*Given a rate, find the whole process*

### The idea

A differential equation constrains an unknown function and its derivatives. Solving means finding functions satisfying that constraint.

### Intuition

A change rule at each instant, together with a starting point, can determine the whole process.

### Another explanation

The equation specifies a rule at every point. A solution follows it along the whole path, rather than reaching just one correct position.

### Quick check

What is the most direct way to verify a solution?

A. Check only that its plot looks similar
B. Differentiate and substitute
C. Check only the initial value

Answer: B. The equation and initial condition require separate checks.

### What is unknown?

In $y'=2y$, the unknown is function $y(t)$. The slope at each point must equal twice its height.

### How do you test a solution?

Differentiate, substitute, and check that the function is defined on the interval. Agreement at one instant is not enough.

### What else does a model need?

Specify variables, units, parameters, initial data, and validity. Exponential growth idealizes a constant proportional growth rate.

### Definition and conditions

What a differential equation describes

$$
F(t,y,y',\ldots,y^{(n)})=0
$$

- Time $t$ is usually the independent variable. A solution has the required derivatives on a specified open interval.

### Derivation

Assume the instantaneous growth rate is proportional to the current amount.

$$
y'=ky
$$

The exponential derivative preserves that proportion.

$$
\frac{d}{dt}(Ce^{kt})=kCe^{kt}
$$

Substitution verifies equality throughout the interval.

$$
y'-ky=0
$$

### Interactive diagram

How does the same positive initial state's trend change when the coefficient changes sign?

Adjust the coefficient and initial value. Gold shows the analytic solution; the bright point marks the current time.

Online diagram: #/lesson/ode-meaning?view=visual

### Guided experiment

1. **Growth** Set rate coefficient $k$ to $1$, initial value $y_0$ to $1$, and observation time $t$ to $1$.

Preset observation: A positive coefficient gives exponential growth from positive initial data.

2. **Decay** Set rate coefficient $k$ to $-1$, initial value $y_0$ to $1$, and observation time $t$ to $1$.

Preset observation: A negative coefficient makes positive initial data approach zero.

3. **Zero initial value** Set rate coefficient $k$ to $1$, initial value $y_0$ to $0$, and observation time $t$ to $2$.

Preset observation: The zero solution stays zero.

### Worked examples

#### Example 1: Test a solution

Does $y=3e^{2t}$ solve $y'=2y$?

- Differentiating gives $y'=6e^{2t}$.
- The right side is $2y=6e^{2t}$, so the sides agree.

**Answer: Yes, on the whole real line.**

#### Example 2: Model with units

An amount grows each hour at $0.1$ times its current value, starting at $20$. State the model and solution.

- Measure time in hours: $y'=0.1y,y(0)=20$.
- Substitution into the exponential family gives constant $20$.

**Answer: $y=20e^{0.1t}$, used for $t\ge0$.**

### Common mistakes

- **A differential equation's solution is a number.** A solution is usually a function; initial data specify its value at one time.

- **Passing through the correct point guarantees a solution.** The derivative relation must hold throughout the interval too.

### Exercises and solutions

**1. Which proportional-rate equation does $y=2e^{-t}$ satisfy?**

Hint: Differentiate first.

Answer: $y'=-y$.

- $y'=-2e^{-t}=-y$.

**2. Does $y=t^2$ solve $y'=2t$ on the real line?**

Hint: Compare both sides.

Answer: Yes.

- Its derivative is $2t$ at every real point.

**3. Does $y=t$ solve $y'=y$?**

Hint: Distinguish one point from an interval.

Answer: Not a solution on an interval.

- The derivative is $1$ and right side $t$; they agree only at $t=1$.

**4. In $y'=0.4y$, time is measured in days. What units does the parameter have?**

Hint: Both sides must have the same units.

Answer: $\mathrm{day}^{-1}$.

- The left side is amount per day, so the proportionality coefficient has units per day.

Prerequisites: Derivatives: From Secants to Tangents.

## 1.2 Order, linearity, and standard form

*Identify structure before choosing a method*

### The idea

The highest derivative determines order. First-power dependence on the unknown and its derivatives determines linearity.

### Intuition

A squared independent variable preserves linearity; a squared unknown changes the structure.

### Another explanation

Inspect how the unknown appears. Complicated time coefficients need not break linearity.

### Quick check

Which equation is linear?

A. $y'+t^2y=0$
B. $yy'=1$
C. $y'+y^2=0$

Answer: A. Linearity concerns the unknown function and its derivatives.

### How do you count order?

Use the highest derivative actually present. $y''+t^2y=0$ is second order; $y'+y^2=0$ is first order.

### Linear in what?

A linear equation has form $a_n(t)y^{(n)}+\cdots+a_0(t)y=g(t)$. Coefficients may depend on the independent variable, but not the unknown solution.

### Why can you not divide everywhere?

Dividing $ty'+y=1$ by $t$ is valid only on intervals excluding zero. Check the original equation separately at zero.

### Definition and conditions

Order, linearity, and standard form

$$
a_n(t)y^{(n)}+\cdots+a_1(t)y'+a_0(t)y=g(t)
$$

- Standard form requires $a_n(t)\ne0$ on the interval. Homogeneous linear equations also require $g=0$.

### Derivation

Identify the highest derivative.

$$
y''+t^2y=\sin t
$$

Separate coefficients from forcing.

$$
a_2=1,\quad a_0=t^2,\quad g=\sin t
$$

Divide by the leading coefficient only where it is nonzero.

$$
ty'+y=1\Rightarrow y'+\frac1t y=\frac1t\quad(t\ne0)
$$

### Interactive diagram

How does raising or lowering the initial value from one move the solution away from the line?

Segments show the direction field; the curve is the analytic initial-value solution. Segments are normalized, so read their slopes rather than lengths.

Online diagram: #/lesson/ode-classification?view=visual

### Guided experiment

1. **A straight-line solution** Set initial value $y_0$ to $1$ and observation time $t$ to $2$.

Preset observation: Initial value one gives a line following the field directions.

2. **Deviate upward** Set initial value $y_0$ to $1.5$ and observation time $t$ to $1$.

Preset observation: A higher initial value adds a positive exponential difference.

3. **Deviate downward** Set initial value $y_0$ to $0.5$ and observation time $t$ to $1$.

Preset observation: A lower initial value adds a negative exponential difference.

### Worked examples

#### Example 1: Squaring the independent variable

Classify $y''+t^2y=\sin t$.

- The highest derivative is second order.
- The unknown and derivatives occur to the first power; the right side is nonzero.

**Answer: Second-order nonhomogeneous linear equation.**

#### Example 2: Squaring a derivative

Classify $(y')^2+y=0$.

- The highest derivative is first order.
- Squaring that derivative makes the equation nonlinear.

**Answer: First-order nonlinear equation.**

### Common mistakes

- **Nonlinear-looking coefficients make the equation nonlinear.** Coefficients may be any prescribed time functions.

- **Dividing by a coefficient with a zero preserves equivalence on the whole original interval.** Division restricts the valid interval.

### Exercises and solutions

**1. What is the order of $y'''+e^ty=0$?**

Hint: Find the highest derivative.

Answer: $3$.

- A third derivative occurs and no higher one does.

**2. Is $y'+\sin y=0$ linear?**

Hint: Check what the sine acts on.

Answer: Nonlinear.

- Sine acts on the unknown, not as a time-dependent coefficient multiplying it.

**3. On which maximal open intervals is the standard form of $t^2y''+y=0$ valid?**

Hint: Avoid zeros of the leading coefficient.

Answer: $(-\infty,0)$ and $(0,\infty)$.

- Dividing by $t^2$ requires $t\ne0$.

**4. Is $y'+2y=5$ homogeneous?**

Hint: Inspect the right-hand side.

Answer: Nonhomogeneous.

- In standard linear form, the right-hand side is a nonzero constant.

Prerequisites: What a differential equation describes.

## 1.3 Initial values and solution intervals

*A formula alone is not a complete answer*

### The idea

Initial data select a member of a solution family. The answer must also state how far it extends.

### Intuition

A curve may become unbounded in finite time. Using the formula beyond its vertical asymptote does not continue the same solution.

### Another explanation

After finding the formula, move in both time directions to check for domain boundaries and blow-up.

### Quick check

What is the maximal interval for $y=1/(1-t)$ with initial value $y(0)=1$?

A. $(1,\infty)$
B. All real numbers except one
C. $(-\infty,1)$

Answer: C. Choose only a connected interval containing the initial time.

### What does an initial value specify?

A first-order equation usually specifies $y(t_0)=y_0$. Second order usually also needs an initial derivative, representing initial velocity.

### Why state the interval?

The solution of $y'=y^2,y(0)=1$ is $1/(1-t)$. Its maximal interval containing the initial time is $(-\infty,1)$.

### What about the formula beyond the pole?

On $t>1$, the expression describes another solution segment. It cannot continue through blow-up or include the original initial value.

### Definition and conditions

Initial values and solution intervals

$$
y'=f(t,y),\qquad y(t_0)=y_0
$$

- An initial-value solution satisfies the equation and initial condition on an interval containing $t_0$, remaining within the equation's domain during extension.

### Derivation

Separate the nonzero solution.

$$
\frac{dy}{y^2}=dt
$$

Integrate and apply the initial condition.

$$
-\frac1y=t+C,\quad C=-1
$$

Choose the connected interval containing the starting time.

$$
y=\frac1{1-t},\qquad -\infty<t<1
$$

### Interactive diagram

What happens to blow-up time when the positive initial value doubles?

The analytic solution is drawn only before blow-up. Drawing stops outside the viewport; no point is fabricated beyond blow-up.

Online diagram: #/lesson/ode-initial-values?view=visual

### Guided experiment

1. **Smaller initial value** Set positive initial value $y_0$ to $0.5$ and observation time $t$ to $1$.

Preset observation: Blow-up occurs at time two.

2. **Larger initial value** Set positive initial value $y_0$ to $1$ and observation time $t$ to $0.5$.

Preset observation: Blow-up moves to time one.

3. **Request beyond the endpoint** Set positive initial value $y_0$ to $1$ and observation time $t$ to $2$.

Preset observation: The display explicitly reports that the solution cannot extend to the requested time.

### Worked examples

#### Example 1: An exponential initial-value problem

Solve $y'=-2y,y(0)=3$.

- The general solution is $Ce^{-2t}$.
- The initial condition gives $C=3$; the exponential has no finite singularity.

**Answer: $y=3e^{-2t}$, on the whole real line.**

#### Example 2: Finite-time blow-up

Solve $y'=y^2,y(0)=2$.

- Integration gives $-1/y=t+C$.
- The initial condition gives $C=-1/2$; the first pole is $t=1/2$.

**Answer: $y=2/(1-2t)$, on $(-\infty,1/2)$.**

### Common mistakes

- **All points where the formula exists can be joined into one initial-value interval.** A solution interval is connected and contains the initial time.

- **Every first-order equation has a solution for all time.** Local existence does not guarantee global existence.

### Exercises and solutions

**1. Solve $y'=3y,y(0)=4$.**

Hint: Determine the exponential coefficient.

Answer: $y=4e^{3t}$.

- $y=Ce^{3t}$; the initial condition gives $C=4$.

**2. Find the maximal interval for $y'=y^2,y(0)=-1$.**

Hint: Write the denominator from the initial value.

Answer: $(-1,\infty)$.

- The solution is $y=-1/(1+t)$, with a pole at $-1$.

**3. Does specifying only $y(0)=1$ for $y''=-y$ determine a unique solution?**

Hint: Count the constants still free.

Answer: No; one more independent condition is needed.

- Every $y=\cos t+C\sin t$ satisfies that condition.

**4. Give one solution of $y'=y^2,y(0)=0$.**

Hint: Do not divide by the unknown first.

Answer: $y\equiv0$.

- The zero function has derivative zero and right-hand side zero.

Prerequisites: Order, linearity, and standard form.

## 1.4 Direction fields and solution curves

*Read trends without an explicit formula*

### The idea

A direction field draws the permitted slope at each point. A solution's tangent must match it.

### Intuition

Each segment is a local guide; the initial value chooses the starting location.

### Another explanation

Following a solution means reading the slope anew at every point and continuously obeying those local rules.

### Quick check

What must a solution curve satisfy at a point?

A. Cross every nearby segment
B. Its tangent slope equals the field slope there
C. Always move toward the horizontal axis

Answer: B. The field prescribes a derivative, not a fixed step length.

### What do the segments represent?

At $(t,y)$, $y'=f(t,y)$ prescribes the slope. Normalizing segment length changes only drawing length, not slope.

### What does zero slope mean?

$f(t,y)=0$ gives a horizontal tangent at that point, not necessarily a constant solution. A constant solution requires zero right-hand side for all times.

### How do you follow the field?

The model is $y'=y-t$ with exact solution $y=t+1+(y_0-1)e^t$. The curve follows the field, but joining plotted pieces does not prove the solution.

### Definition and conditions

Direction fields and solution curves

$$
\frac{dy}{dt}=f(t,y)
$$

- Draw only where $f$ is defined. The independent axis is $t$ and the vertical axis $y$.

### Derivation

Solve the linear equation.

$$
y'-y=-t
$$

Add a homogeneous term to a particular solution.

$$
y=t+1+Ce^t
$$

Use the starting point to fix the curve.

$$
y(0)=y_0\Rightarrow C=y_0-1
$$

### Interactive diagram

How does raising or lowering the initial value from one move the solution away from the line?

Segments show the direction field; the curve is the analytic initial-value solution. Segments are normalized, so read their slopes rather than lengths.

Online diagram: #/lesson/ode-direction-fields?view=visual

### Guided experiment

1. **A straight-line solution** Set initial value $y_0$ to $1$ and observation time $t$ to $2$.

Preset observation: Initial value one gives a line following the field directions.

2. **Deviate upward** Set initial value $y_0$ to $1.5$ and observation time $t$ to $1$.

Preset observation: A higher initial value adds a positive exponential difference.

3. **Deviate downward** Set initial value $y_0$ to $0.5$ and observation time $t$ to $1$.

Preset observation: A lower initial value adds a negative exponential difference.

### Worked examples

#### Example 1: Read a slope

For $y'=y-t$ at $(2,3)$, what is the slope?

- Substitute into the right-hand side.
- $3-2=1$, so the tangent rises to the right.

**Answer: $1$.**

#### Example 2: A horizontal tangent need not give a constant solution

$y'=t$ is horizontal along $t=0$. Is $y\equiv2$ a solution?

- A constant solution's derivative is zero everywhere.
- The right side is nonzero at nonzero times.

**Answer: No; the actual solution is $y=t^2/2+C$.**

### Common mistakes

- **The zero-slope locus is itself a solution.** Its own derivative must still match the prescribed field slope.

- **Longer segments mean steeper slopes.** Segments are normalized; their direction gives the slope.

### Exercises and solutions

**1. Find the slope of $y'=y-t$ at $(1,-1)$.**

Hint: Substitute the point's coordinates.

Answer: $-2$.

- $-1-1=-2$.

**2. Which curve consists of the zero-slope points?**

Hint: Set the right-hand side to zero.

Answer: The line $y=t$.

- $y-t=0$.

**3. Solve $y'=y-t,y(0)=1$.**

Hint: Use the solution family from the text.

Answer: $y=t+1$.

- The constant is $C=0$, giving $y=t+1$.

**4. Is line $y=t$ a solution of $y'=y-t$?**

Hint: Compare its derivative with the field slope.

Answer: No.

- The line's derivative is $1$, but the right-hand side is $0$.

Prerequisites: Initial values and solution intervals.

## Chapter review

Try independently before reading the solutions.

**1. Solve $y'=4y,y(0)=3$ and state its maximal interval.**

Hint: Match initial data in the exponential family.

Answer: $3e^{4t}$, on the real line.

- General solution $Ce^{4t}$ has constant $C=3$ and is defined at every finite time.

**2. Classify $y''+(y')^2=0$.**

Hint: Inspect the highest derivative and unknown-derivative powers.

Answer: Second-order nonlinear.

- The highest derivative is second order, but the first derivative is squared.

**3. Find the slope of $y'=t-y$ at $(2,5)$.**

Hint: Substitute into the right-hand side.

Answer: $-3$.

- $2-5=-3$.

# Chapter 2 · Solving first-order equations

Separation, integrating factors, and substitutions fit different structures. Check every division for lost solutions.

Goals:
- Separate variables and retain equilibria
- Use integrating factors
- Handle exact equations and substitutions

## 2.1 Separable equations

*Put the variables on separate sides*

### The idea

If the rate is a product of time and state factors, integrate the two variables separately.

### Intuition

Separation rewrites a differential relation along one solution. Save the state factor's zero solutions before dividing.

### Another explanation

Keep the stationary solutions, then divide and integrate the changing ones.

### Quick check

What should you check before separating variables?

A. Whether the divisor can vanish
B. Whether a three-dimensional plot is required
C. Whether the constant can be deleted

Answer: A. Zeros of the divisor may give equilibrium solutions.

### When can you separate?

If $y'=g(t)h(y)$, write $dy/h(y)=g(t)dt$ on a solution segment where $h(y)\ne0$.

### What about zeros?

Find $h(y_*)=0$ first. Constants $y=y_*$ solve the original equation and would be lost by division.

### How do you finish the answer?

The integrated relation may be implicit. Choose the initial-value branch and state singularities the solution cannot cross.

### Definition and conditions

Separable equations

$$
\int\frac{dy}{h(y)}=\int g(t)\,dt+C
$$

- Use the separated form where $h(y)\ne0$. Check equilibria separately and require continuous integrands on the interval used.

### Derivation

For $y'=ty$, retain the zero solution first.

$$
y\equiv0
$$

Divide nonzero solutions by the state variable.

$$
\frac{dy}{y}=t\,dt
$$

Integrate and absorb the sign into the constant.

$$
\ln\lvert y\rvert=\frac{t^2}{2}+C\Rightarrow y=Ke^{t^2/2}
$$

### Interactive diagram

Is the curve still a valid solution when the initial value is zero?

Select positive, negative, and zero initial values to compare the nonzero family with the zero solution that separation must retain.

Online diagram: #/lesson/ode-separable?view=visual

### Guided experiment

1. **Positive initial value** Set initial value $y_0$ to $1$ and observation time $t$ to $1$.

Preset observation: The positive solution grows.

2. **Negative initial value** Set initial value $y_0$ to $-1$ and observation time $t$ to $1$.

Preset observation: Negative solutions satisfy the same separable equation.

3. **Zero solution** Set initial value $y_0$ to $0$ and observation time $t$ to $2$.

Preset observation: The constant solution excluded by division really exists.

### Worked examples

#### Example 1: A rate increasing with time

Solve $y'=ty,y(0)=2$.

- For a nonzero solution, integration gives $y=Ke^{t^2/2}$.
- The initial value gives $K=2$.

**Answer: $y=2e^{t^2/2}$, valid on the real line.**

#### Example 2: Retain equilibria

Find the equilibria of $y'=y(1-y)$.

- Set the state factor to zero.
- $y(1-y)=0$ gives two constant values.

**Answer: $y\equiv0$ and $y\equiv1$.**

### Common mistakes

- **The nonzero separated family includes every solution.** Check zeros of the divided factor separately.

- **Always take the positive square root.** Initial conditions and continuity determine the branch.

### Exercises and solutions

**1. Solve $y'=2ty,y(0)=3$.**

Hint: Integrate the logarithmic derivative.

Answer: $y=3e^{t^2}$.

- $\ln\lvert y\rvert=t^2+C$; the initial condition gives coefficient $3$.

**2. Find the equilibria of $y'=y(y-2)$.**

Hint: Do not divide first.

Answer: $y\equiv0,2$.

- Zero right-hand side gives $y=0,2$.

**3. Solve $y'=t/y,y(0)=2$.**

Hint: Multiply by the unknown and integrate.

Answer: $y=\sqrt{t^2+4}$.

- $y^2=t^2+4$; the initial condition selects the positive branch.

**4. Which solution is lost by dividing $y'=y^2$ by $y^2$?**

Hint: Check where the divisor is zero.

Answer: $y\equiv0$.

- The zero function solves the original equation but does not permit this division.

Prerequisites: Direction fields and solution curves, Antiderivatives and indefinite integrals.

## 2.2 First-order linear equations and integrating factors

*Turn the left side into a product derivative*

### The idea

An integrating factor turns a first-order linear equation into a product derivative ready to integrate.

### Intuition

Choose a weight that combines the unknown and its derivative exactly.

### Another explanation

This does not guess a solution; it builds a product whose differentiation can be reversed by integration.

### Quick check

What is the integrating factor designed to do?

A. Make all coefficients one
B. Eliminate the right-hand side
C. Make the left side a product derivative

Answer: C. Its derivative must equal the coefficient times the factor.

### Write standard form first

The equation is $y'+p(t)y=q(t)$. Require continuous coefficients on the chosen interval.

### Why choose this factor?

Choose $\mu=e^{\int p(t)dt}$, giving $\mu'=p\mu$, so the left side becomes $(\mu y)'$.

### How do initial data enter?

A definite integral from the initial time keeps the initial value explicit without repeatedly rearranging constants.

### Definition and conditions

First-order linear equations and integrating factors

$$
y(t)=\frac{\mu(t_0)y_0+\int_{t_0}^t\mu(s)q(s)\,ds}{\mu(t)},\qquad \mu=e^{\int p(t)dt}
$$

- $p,q$ is continuous on the interval, and the integrating factor never vanishes.

### Derivation

Multiply by an unknown factor.

$$
\mu y'+\mu p y=\mu q
$$

Match coefficients in the product rule.

$$
\mu'=p\mu\Rightarrow (\mu y)'=\mu q
$$

Integrate and divide by the factor.

$$
\mu y=C+\int\mu q\,dt
$$

### Interactive diagram

How do initial values above and below the steady state approach it?

With steady state one, gold curves show first-order linear responses for different initial values. The cooling and mixing models differ only by scaling and translation.

Online diagram: #/lesson/ode-linear-first?view=visual

### Guided experiment

1. **Approach from below** Set initial value $y_0$ to $0$ and observation time $t$ to $3$.

Preset observation: The solution rises from zero toward steady state one.

2. **Approach from above** Set initial value $y_0$ to $2$ and observation time $t$ to $3$.

Preset observation: The solution falls from two toward steady state one.

3. **Steady state** Set initial value $y_0$ to $1$ and observation time $t$ to $3$.

Preset observation: Starting at the steady state keeps the solution fixed.

### Worked examples

#### Example 1: Constant input

Solve $y'+2y=6,y(0)=1$.

- The integrating factor is $e^{2t}$, giving $(e^{2t}y)'=6e^{2t}$.
- Integration gives $y=3+Ce^{-2t}$; the initial condition gives $C=-2$.

**Answer: $y=3-2e^{-2t}$.**

#### Example 2: A singular coefficient

Solve $y'+y/t=t$ on $t>0$.

- Choose integrating factor $t$.
- From $(ty)'=t^2$, integration gives $ty=t^3/3+C$.

**Answer: $y=t^2/3+C/t$, discussed only on the chosen positive interval.**

### Common mistakes

- **Multiply only the unknown-function term by the integrating factor.** Multiply the entire equation.

- **An arbitrary constant in the factor's exponent changes the solution family.** Its nonzero scale is absorbed by the integration constant.

### Exercises and solutions

**1. Solve $y'+y=4,y(0)=2$.**

Hint: Find the equilibrium first.

Answer: $y=4-2e^{-t}$.

- General solution $4+Ce^{-t}$ has initial-condition constant $C=-2$.

**2. Give one integrating factor for $y'+3ty=q(t)$.**

Hint: Integrate the time coefficient.

Answer: $e^{3t^2/2}$.

- $\int3t\,dt=3t^2/2$.

**3. Solve $y'-y=0,y(1)=2$.**

Hint: The initial time is not zero.

Answer: $y=2e^{t-1}$.

- $y=Ce^t$, $Ce=2$.

**4. After dividing $ty'+y=1$ by $t$, can the standard formula be declared valid at zero?**

Hint: Check the division.

Answer: No.

- The standard coefficients are undefined at zero; return to the original equation to check it separately.

Prerequisites: Separable equations.

## 2.3 Growth, cooling, and mixing

*Balance quantities before solving*

### The idea

Model inflow and outflow first. Units, initial conditions, and validity assumptions give the solution its physical meaning.

### Intuition

An amount's rate of change equals its inflow rate minus its outflow rate.

### Another explanation

List the actual amounts entering and leaving each minute before solving. Units help expose modeling mistakes.

### Quick check

What is the outflow concentration of a well-mixed tank?

A. Initial concentration
B. Current solute amount divided by current volume
C. Incoming concentration

Answer: B. The outlet removes the current mixture.

### A cooling model

For constant ambient temperature $T_a$, Newton's cooling model is $T'=-k(T-T_a)$ with $k>0$.

### A mixing model

With constant volume $V$, complete mixing, and equal volume flow rates $r$, the solute amount satisfies $S'=rc_{\rm in}-rS/V$. Outflow concentration is current amount divided by volume.

### When does the model fail?

Changing volume, incomplete mixing, or changing surroundings require a new equation. Negative solute amounts have no physical meaning merely because an algebraic formula permits them.

### Definition and conditions

Growth, cooling, and mixing

$$
S'=rc_{\rm in}-\frac rV S,\qquad S(t)=Vc_{\rm in}+(S_0-Vc_{\rm in})e^{-rt/V}
$$

- $V>0,r>0$ is constant, volumetric inflow equals outflow, and the tank is well mixed without overflowing.

### Derivation

Write the amount balance.

$$
S'=\text{solute inflow rate}-\text{solute outflow rate}
$$

Substitute concentrations and flow rates.

$$
S'=rc_{\rm in}-r\frac SV
$$

Subtract the steady state to obtain exponential decay.

$$
(S-Vc_{\rm in})'=-\frac rV(S-Vc_{\rm in})
$$

### Interactive diagram

How do initial values above and below the steady state approach it?

With steady state one, gold curves show first-order linear responses for different initial values. The cooling and mixing models differ only by scaling and translation.

Online diagram: #/lesson/ode-models?view=visual

### Guided experiment

1. **Approach from below** Set initial value $y_0$ to $0$ and observation time $t$ to $3$.

Preset observation: The solution rises from zero toward steady state one.

2. **Approach from above** Set initial value $y_0$ to $2$ and observation time $t$ to $3$.

Preset observation: The solution falls from two toward steady state one.

3. **Steady state** Set initial value $y_0$ to $1$ and observation time $t$ to $3$.

Preset observation: Starting at the steady state keeps the solution fixed.

### Worked examples

#### Example 1: Cooling

Ambient temperature is $20$ degrees, $k=1/2$, and initial temperature $80$ degrees. Find the temperature.

- Define temperature difference $u=T-20$; then $u'=-u/2$.
- Its initial value is $60$.

**Answer: $T=20+60e^{-t/2}$.**

#### Example 2: Freshwater flushing

A $10$-liter tank has equal freshwater inflow and outflow of $2$ liters per minute, with initial solute $5$ grams.

- Solute inflow is zero; outflow rate is $2S/10$.
- Solve $S'=-S/5,S(0)=5$.

**Answer: $S=5e^{-t/5}$ grams.**

### Common mistakes

- **Outflow concentration always equals initial concentration.** A well-mixed concentration changes with current amount.

- **Exponential models do not need time units.** The inverse parameter must have the corresponding time units.

### Exercises and solutions

**1. With ambient temperature $15$ degrees, what is the long-term temperature?**

Hint: Inspect the temperature difference.

Answer: $15$ degrees.

- A positive cooling coefficient makes the difference decay to zero.

**2. A constant $20$-liter tank has flow rate $4$ liters per minute. What is its flushing time scale in minutes?**

Hint: Divide volume by flow rate.

Answer: $5$ minutes.

- $V/r=20/4=5$.

**3. A constant $6$-liter tank has incoming concentration $3$ grams per liter. What steady solute amount results?**

Hint: Steady concentration equals incoming concentration.

Answer: $18$ grams.

- $S_*=Vc_{\rm in}=6\times3$.

**4. Why does faster inflow than outflow invalidate the constant-volume model?**

Hint: The outflow concentration denominator changes.

Answer: Include the changing volume.

- Volume increases with time; outflow concentration must be $S(t)/V(t)$.

Prerequisites: First-order linear equations and integrating factors.

## 2.4 Exact equations and potential functions

*Find a conserved quantity*

### The idea

An exact equation is a total differential along solutions, making each solution a level curve.

### Intuition

If the coefficients are partial derivatives of one landscape, solution directions follow its contours.

### Another explanation

Recognizing a total differential turns finding a solution curve into finding a level set.

### Quick check

What stays constant after solving an exact equation?

A. The potential value
B. Each coordinate separately
C. The slope at every point

Answer: A. A zero total differential means constant potential along the curve.

### What does exact mean?

If $M(t,y)dt+N(t,y)dy=0$ equals $d\Phi$, then $\Phi$ stays constant along a solution curve.

### How do you test exactness?

With continuous partial derivatives, $M_y=N_t$ is necessary. On a simply connected region such as a rectangle, it also ensures a potential exists. A partial derivative holds the other variable fixed.

### How do you find a potential?

Integrate in one variable, then use the other partial derivative to determine the missing single-variable function. A level set at $N=0$ may not be a graph over time.

### Definition and conditions

Exact equations and potential functions

$$
\Phi_t=M,\quad\Phi_y=N,\qquad\Phi(t,y)=C
$$

- On a simply connected open region, $M,N$ is continuously differentiable and $M_y=N_t$. Writing $y(t)$ additionally requires local $N\ne0$.

### Derivation

Consider the differential relation for a circle.

$$
2t\,dt+2y\,dy=0
$$

Integrate in time and include the missing single-variable term.

$$
\Phi=t^2+g(y),\quad g'(y)=2y
$$

Its total derivative along the curve is zero.

$$
\Phi=t^2+y^2=C
$$

### Interactive diagram

Can the entire level curve be written as a single-valued function of time?

This parameterizes an implicit solution curve. The full circle is not a globally single-valued time function, and moving the point does not continue the original equation through a vertical tangent.

Online diagram: #/lesson/ode-exact?view=visual

### Guided experiment

1. **Level curve** Set level radius $R$ to $1$ and trajectory angle $\theta$ to $0.5$.

Preset observation: The potential stays constant on the entire circle.

2. **Vertical tangent** Set level radius $R$ to $1$ and trajectory angle $\theta$ to $0$.

Preset observation: No finite state derivative represents this point.

3. **Another level curve** Set level radius $R$ to $2$ and trajectory angle $\theta$ to $1$.

Preset observation: Changing radius changes the potential constant.

### Worked examples

#### Example 1: A cross term

Solve $(2t+y)dt+(t+2y)dy=0$.

- Both cross partials equal $1$.
- Integration gives $\Phi=t^2+ty+y^2$, matching both partial derivatives.

**Answer: $t^2+ty+y^2=C$.**

#### Example 2: The upper semicircle

Solve $t+y y'=0,y(0)=2$.

- Choose potential $(t^2+y^2)/2$; the initial value gives $t^2+y^2=4$.
- Select the positive branch; derivatives cease to be finite at the endpoints.

**Answer: $y=\sqrt{4-t^2}$, on $(-2,2)$.**

### Common mistakes

- **Equal cross partials guarantee a global potential on every region.** Global existence also needs a domain condition; simple connectivity is a common sufficient one.

- **After finding a potential, initial-value branches need no checking.** An implicit curve can have multiple function branches.

### Exercises and solutions

**1. Is $M=y,N=t$ exact?**

Hint: Compare cross partials.

Answer: Yes: $ty=C$.

- $M_y=1=N_t$, with potential $ty$.

**2. Is $M=y,N=2t$ exact?**

Hint: Calculate the two partial derivatives.

Answer: No.

- $M_y=1$, whereas $N_t=2$.

**3. Give an implicit solution of $d(t^2+3y^2)=0$.**

Hint: Keep the potential relation directly.

Answer: $t^2+3y^2=C$.

- The potential is constant along the curve.

**4. Is a circular level set always globally single-valued?**

Hint: One time can correspond to two points.

Answer: No.

- There are generally upper and lower branches away from endpoints; choose using the initial value.

Prerequisites: First-order linear equations and integrating factors, Partial and higher-order derivatives.

## 2.5 Homogeneous substitutions and integrating-factor tests

*A substitution should reduce variable dependence*

### The idea

When the right side depends only on a ratio, a ratio substitution can make the first-order equation separable.

### Intuition

If slope depends only on height divided by time, use that ratio as the new unknown.

### Another explanation

A useful substitution simplifies the equation. Differentiate correctly before checking separability.

### Quick check

After setting $y=tv$, what is the first derivative?

A. $v'$
B. $tv'$
C. $v+tv'$

Answer: C. Both the independent variable and the new function vary with time.

### A ratio substitution

For $y'=F(y/t)$ on an interval with $t\ne0$, set $y=tv$ to obtain $t v'=F(v)-v$.

### Two meanings of homogeneous

Ratio homogeneity differs from homogeneous linearity. $y'=1+y/t$ has a ratio structure, but its standard linear right-hand side is nonzero.

### Another use of integrating factors

For a nonexact equation, if $(M_y-N_t)/N$ depends only on time, exponentiate its integral for a time integrating factor. If $(N_t-M_y)/M$ depends only on state, use a state integrating factor. Work where denominators are nonzero.

### Definition and conditions

Homogeneous substitutions and integrating-factor tests

$$
y=tv\Rightarrow y'=v+tv',\qquad tv'=F(v)-v
$$

- Assume $t\ne0$. Check zeros of $F(v)-v$ before division and verify substituted solutions in the original equation.

### Derivation

Substitute into $y'=1+y/t$.

$$
v+tv'=1+v
$$

Separate the new variable.

$$
v'=\frac1t\Rightarrow v=\ln\lvert t\rvert+C
$$

Return to the original unknown.

$$
y=t(\ln\lvert t\rvert+C)
$$

### Interactive diagram

How does changing the integration constant affect the value at time one?

Draw only on positive time and vary the integration constant to compare solutions of the same ratio equation.

Online diagram: #/lesson/ode-substitutions?view=visual

### Guided experiment

1. **Reference solution** Set integration constant $C$ to $0$ and positive time $t$ to $1$.

Preset observation: The solution passes through time one and value zero.

2. **Larger ratio** Set integration constant $C$ to $1$ and positive time $t$ to $1$.

Preset observation: Increasing the constant raises the initial ratio.

3. **Approach time zero** Set integration constant $C$ to $0$ and positive time $t$ to $0.25$.

Preset observation: Approach the boundary within positive time without including the singularity in standard form.

### Worked examples

#### Example 1: A ratio equation

Solve $y'=1+y/t,y(1)=0$.

- Set $y=tv$ to obtain $v'=1/t$.
- Integrate on positive time; the initial condition gives $C=0$.

**Answer: $y=t\ln t$, $t>0$.**

#### Example 2: Find an integrating factor

How can $2y\,dt+t\,dy=0$ become exact on $t>0$?

- $(M_y-N_t)/N=(2-1)/t=1/t$.
- The integrating factor is $t$ and new potential $t^2y$.

**Answer: $t^2y=C$.**

### Common mistakes

- **Ratio-homogeneous and homogeneous linear are the same classification.** They describe different structures.

- **Substituting a new variable lets you ignore the product rule.** Omitting a new-variable term changes the equation.

### Exercises and solutions

**1. Is the derivative of $y=tv$ equal to $tv'$?**

Hint: Apply the product rule.

Answer: $y'=v+tv'$.

- The term $v$ is also required.

**2. Solve $y'=2y/t$ on positive time.**

Hint: Separate variables or substitute the ratio.

Answer: $y=Ct^2$.

- $dy/y=2dt/t$, retaining the zero solution too.

**3. Can the ratio substitution for $y'=F(y/t)$ directly include time zero?**

Hint: Check where the ratio is defined.

Answer: No.

- $y/t$ is undefined at zero.

**4. If $(M_y-N_t)/N=2t$, give a time integrating factor.**

Hint: Integrate, then exponentiate.

Answer: $e^{t^2}$.

- $\mu=e^{\int2t dt}$.

Prerequisites: Exact equations and potential functions.

## 2.6 Bernoulli equations and the logistic model

*Turn a nonlinear power into a linear equation*

### The idea

A Bernoulli substitution linearizes a specific power nonlinearity while requiring separate checks for divided-out solutions.

### Intuition

The derivative of a power absorbs the nonlinear factor. The logistic equation is an important example.

### Another explanation

Some nonlinear equations become linear through a specific, justified substitution. Check that structure first.

### Quick check

How does a positive logistic solution initially change above carrying capacity?

A. Keep accelerating upward
B. Decrease
C. Jump instantly to capacity

Answer: B. The right-hand side is negative, so the solution decreases continuously.

### Which structure permits this?

For $y'+p y=q y^m$ with $m\ne0,1$, set $v=y^{1-m}$ on a valid nonzero branch.

### How does logistic growth arise?

$y'=r y(1-y/K)$ combines initial proportional growth with increasing inhibition. $K>0$ is the carrying capacity.

### Limits of the formula

Positive initial values stay positive. Above capacity, they decrease toward it. Nonphysical negative initial values may encounter finite singularities, so positive-population conclusions do not extend automatically.

### Definition and conditions

Bernoulli equations and the logistic model

$$
v'+(1-m)pv=(1-m)q,\qquad v=y^{1-m}
$$

- Use $m\ne0,1$ for this nonlinear substitution. For $m=0$ or $m=1$, the original equation is already linear.
- Powers must be differentiable on the chosen real branch, with $y\ne0$. Check zero and other excluded cases in the original equation. The logistic model uses $r,K>0$.

### Derivation

Expand the logistic equation and use the reciprocal variable.

$$
y'-ry=-\frac rK y^2,\qquad v=\frac1y
$$

Obtain a linear equation.

$$
v'+rv=\frac rK
$$

Apply the positive initial value, then take reciprocals.

$$
y(t)=\frac K{1+(K/y_0-1)e^{-rt}}
$$

### Interactive diagram

Does a population above capacity keep growing?

Capacity is one. Positive values below rise and those above fall. The dashed line marks equilibrium; the zero equilibrium is discussed separately in the text.

Online diagram: #/lesson/ode-bernoulli?view=visual

### Guided experiment

1. **Below capacity** Set initial value $y_0$ to $0.3$ and observation time $t$ to $5$.

Preset observation: The population rises without crossing equilibrium one.

2. **Above capacity** Set initial value $y_0$ to $1.8$ and observation time $t$ to $5$.

Preset observation: The population decreases toward one.

3. **Exactly at equilibrium** Set initial value $y_0$ to $1$ and observation time $t$ to $5$.

Preset observation: The equilibrium solution stays fixed.

### Worked examples

#### Example 1: Carrying capacity two

Solve $y'=y(1-y/2),y(0)=1$.

- Use $r=1,K=2$.
- The coefficient is $K/y_0-1=1$.

**Answer: $y=2/(1+e^{-t})$.**

#### Example 2: Another Bernoulli equation

Find the nonzero solutions of $y'+y=y^2$.

- Set $v=1/y$ to obtain $v'-v=-1$.
- Solve to get $v=1+Ce^t$, then invert.

**Answer: $y=1/(1+Ce^t)$; the zero solution also exists. Avoid denominator zeros in the solution interval.**

### Common mistakes

- **A reciprocal-substitution family always includes the zero solution.** Taking reciprocals has already excluded zero.

- **Carrying capacity is an upper bound that no solution can exceed at any time.** Initial values may exceed capacity; the model then makes them decrease.

### Exercises and solutions

**1. What positive equilibrium has logistic equation $y'=2y(1-y/5)$?**

Hint: Set the right-hand side to zero.

Answer: $5$.

- Its equilibria are zero and five.

**2. Under $0<y<K$, does the logistic solution increase or decrease?**

Hint: Inspect the three factor signs.

Answer: Increasing.

- Positive growth rate, population, and remaining-capacity factor give a positive derivative.

**3. Under $y>K$, does exponential explosion continue?**

Hint: Inspect the capacity factor.

Answer: No; it decreases toward carrying capacity.

- $1-y/K<0$, so the population decreases.

**4. For Bernoulli power $m=3$, which new variable is used?**

Hint: Calculate one minus the power.

Answer: $v=y^{-2}$ on a nonzero branch.

- $1-m=-2$.

Prerequisites: Homogeneous substitutions and integrating-factor tests.

## Chapter review

Try independently before reading the solutions.

**1. Solve $y'=3ty,y(0)=2$.**

Hint: Separate variables.

Answer: $2e^{3t^2/2}$.

- Logarithmic integration gives $3t^2/2+C$; apply the initial data.

**2. Solve $y'+2y=8,y(0)=7$.**

Hint: Its equilibrium is four.

Answer: $4+3e^{-2t}$.

- General solution $4+Ce^{-2t}$ has initial-data constant $C=3$.

**3. Find an implicit solution of $(3t^2+y)dt+(t+2y)dy=0$.**

Hint: Compare cross partials and find a potential.

Answer: $t^3+ty+y^2=C$.

- Both partials equal one; a potential is $t^3+ty+y^2$.

# Chapter 3 · Existence, uniqueness, and continuation

Distinguish existence, uniqueness, global extension, and continuous dependence. Do not extend local results into all-time guarantees.

Goals:
- Apply local existence and uniqueness hypotheses
- Recognize nonuniqueness and blow-up
- Understand initial-data sensitivity

## 3.1 Local existence and uniqueness

*Continuity alone does not ensure uniqueness*

### The idea

Continuity commonly ensures local existence. Local Lipschitz dependence on state further ensures uniqueness.

### Intuition

With insufficiently regular slopes, several valid curves can leave the same point.

### Another explanation

Existence asks whether a path is available; uniqueness asks whether the starting point allows only one.

### Quick check

What does a continuous state partial derivative usually ensure?

A. Local uniqueness
B. An elementary closed-form solution
C. Boundedness for all time

Answer: A. It supplies local Lipschitz regularity.

### Existence hypotheses

A continuous right-hand side on a rectangle around the initial point guarantees at least one local solution, not an all-time interval.

### Uniqueness hypotheses

Local Lipschitz dependence on the state gives a unique local solution. A continuous state partial derivative is a common sufficient condition.

### What if a hypothesis fails?

The theorem is unavailable; nonexistence or nonuniqueness does not automatically follow. Analyze the example. $y'=3\lvert y\rvert^{2/3}$ at zero does provide nonuniqueness.

### Definition and conditions

Local existence and uniqueness

$$
\lvert f(t,u)-f(t,v)\rvert\le L\lvert u-v\rvert
$$

- If $f$ is continuous on a rectangle near the initial point and the stated state-Lipschitz condition holds, the initial-value problem has a unique local solution.

### Derivation

The difference of two solutions satisfies an integral relation.

$$
y_1(t)-y_2(t)=\int_{t_0}^t[f(s,y_1(s))-f(s,y_2(s))]ds
$$

Bound the difference using a Lipschitz constant.

$$
\lvert y_1(t)-y_2(t)\rvert\le L\int_{t_0}^t\lvert y_1(s)-y_2(s)\rvert ds
$$

An integral inequality forces solutions with the same initial data to coincide.

$$
y_1(t_0)=y_2(t_0)\Rightarrow y_1=y_2
$$

### Interactive diagram

Can a solution from the same zero initial value wait before leaving?

Gold is a delayed-departure solution; blue is the zero solution. Both start at zero, with continuous derivatives at the join.

Online diagram: #/lesson/ode-existence?view=visual

### Guided experiment

1. **Leave immediately** Set waiting time $c$ to $0$ and observation time $t$ to $1$.

Preset observation: The cubic curve departs immediately from the starting point.

2. **Wait one unit** Set waiting time $c$ to $1$ and observation time $t$ to $2$.

Preset observation: Stay at zero first, then leave smoothly.

3. **Keep waiting** Set waiting time $c$ to $2$ and observation time $t$ to $1$.

Preset observation: The curve coincides with zero throughout the current time window.

### Worked examples

#### Example 1: A smooth right-hand side

Is $y'=t+y^2,y(0)=1$ locally unique?

- The polynomial right-hand side is continuous.
- Its state partial derivative $2y$ is continuous near the initial point.

**Answer: A unique local solution exists; this alone does not establish global existence.**

#### Example 2: Wait, then leave

Is $y'=3\lvert y\rvert^{2/3},y(0)=0$ unique?

- The zero function is a solution.
- For any $c\ge0$, use zero when $t\le c$ and $(t-c)^3$ when $t>c$. The derivative is zero at the joining point.

**Answer: Not unique.**

### Common mistakes

- **Continuity already guarantees uniqueness.** It gives a common existence guarantee only.

- **A failed sufficient hypothesis makes the conclusion false.** The theorem gives no conclusion; examine the case separately.

### Exercises and solutions

**1. Is $y'=\sin y,y(0)=2$ locally unique?**

Hint: Inspect the state partial derivative.

Answer: Yes.

- The partial derivative $\cos y$ is continuous and bounded.

**2. Does a continuous right-hand side ensure uniqueness?**

Hint: Recall the waiting solutions.

Answer: No.

- A continuous power-law right-hand side can still give multiple solutions from one initial value.

**3. Does local uniqueness for $y'=y^2$ imply global existence?**

Hint: Consider a positive initial value.

Answer: No.

- Positive initial values blow up in finite time.

**4. Does failure of the Lipschitz condition immediately prove nonuniqueness?**

Hint: A sufficient condition is not necessary.

Answer: No.

- If the theorem does not apply, further analysis is needed.

Prerequisites: Bernoulli equations and the logistic model.

## 3.2 Integral equations and Picard iteration

*Update a whole curve from the previous curve*

### The idea

Rewriting an initial-value problem as an integral equation lets successive curve substitutions construct a local solution.

### Intuition

Each iteration uses the previous state estimate to accumulate the corresponding rates again.

### Another explanation

The unknown is an entire curve, so the iteration acts between functions.

### Quick check

Which curve enters the Picard integral?

A. Only the endpoint value
B. The unknown new curve itself
C. The previous approximate curve

Answer: C. The previous iterate supplies the whole integrand.

### Why are the forms equivalent?

Integrating a continuous right-hand side recovers the initial condition. Differentiating the integral form recovers the equation. Both retain the starting point.

### How do you iterate?

Begin with constant function $y_0(t)=y_0$ and set $y_{n+1}=y_0+\int_{t_0}^t f(s,y_n(s))ds$.

### What ensures convergence?

On a suitable rectangle, require a continuous right-hand side, state Lipschitz regularity, and a time interval short enough to keep iterates inside and make the map a contraction. The argument is local.

### Definition and conditions

Integral equations and Picard iteration

$$
y(t)=y_0+\int_{t_0}^t f(s,y(s))\,ds
$$

- For a continuous right-hand side, the integral and differentiable initial-value forms are equivalent. The contraction argument also needs local Lipschitz regularity, iterates inside the rectangle, and $Lh<1$.

### Derivation

For $y'=y,y(0)=1$, begin with a constant.

$$
y_0(t)=1
$$

Substitute for the first and second iterations.

$$
y_1=1+t,\qquad y_2=1+t+\frac{t^2}{2}
$$

Continuing gives exponential partial sums.

$$
y_n=\sum_{k=0}^{n}\frac{t^k}{k!}\longrightarrow e^t
$$

### Interactive diagram

How does the whole approximate curve change as the iteration count increases?

Blue is the exact exponential; gold is a Picard partial sum. This iterates whole functions rather than stepping through time.

Online diagram: #/lesson/ode-picard?view=visual

### Guided experiment

1. **Start with a constant** Set iteration count $n$ to $0$ and observation time $t$ to $1$.

Preset observation: The zeroth iterate is just the initial-value constant.

2. **Two iterations** Set iteration count $n$ to $2$ and observation time $t$ to $1$.

Preset observation: The result is a quadratic partial sum.

3. **More iterations** Set iteration count $n$ to $8$ and observation time $t$ to $1$.

Preset observation: The approximation is closer to the exponential in this finite window.

### Worked examples

#### Example 1: The second iteration

For $y'=2y,y(0)=1$, calculate the second iterate starting from a constant.

- The first iterate is $1+2t$.
- Integrating $2(1+2s)$ gives $1+2t+2t^2$.

**Answer: $y_2=1+2t+2t^2$.**

#### Example 2: Explicit time dependence

Find the first Picard iterate for $y'=t,y(0)=3$.

- The right side does not depend on the approximate function.
- Integrate time directly.

**Answer: $y_1=3+t^2/2$, already the exact solution.**

### Common mistakes

- **Picard iteration updates only the next time point.** It updates an entire function. Euler's method instead advances by time steps.

- **Every time interval gives a contraction automatically.** The interval length must meet the relevant bounds.

### Exercises and solutions

**1. Find the first iterate for $y'=y,y(0)=2$.**

Hint: Start from constant two.

Answer: $2+2t$.

- $2+\int_0^t2ds$.

**2. For $y^\prime=y,y(0)=2$ starting at $y_0(t)\equiv2$, find the second Picard approximation.**

Hint: Substitute the first iterate again.

Answer: $2+2t+t^2$.

- $2+\int_0^t(2+2s)ds$.

**3. Which initial value corresponds to $y=4+\int_1^tf(s,y(s))ds$?**

Hint: Set the integral limits equal.

Answer: $y(1)=4$.

- At $t=1$, the integral is zero.

**4. With $L=2$, does half-interval length $h=1$ satisfy the contraction criterion?**

Hint: Check whether the product is strictly less than one.

Answer: It does not satisfy this sufficient condition.

- $Lh=2$.

Prerequisites: Local existence and uniqueness.

## 3.3 Maximal intervals and finite-time blow-up

*Local solvability need not last forever*

### The idea

Local solutions can be continued repeatedly. A finite maximal endpoint usually signals a domain boundary or unbounded state.

### Intuition

Identify the actual obstacle: the equation's domain ends, or the state becomes unbounded in finite time.

### Another explanation

The interval states how long the process can be predicted; it is part of the answer.

### Quick check

What does local existence and uniqueness directly guarantee?

A. Solutions for all time
B. A unique solution near the initial value
C. A solution always inside the viewport

Answer: B. Global continuation requires another argument.

### What is continuation?

Solve near an existing segment's endpoint and overlap consistently. Uniqueness lets neighboring segments join into one solution.

### Obstacles at finite endpoints

Under local existence and uniqueness, a solution remaining inside a compact subset of the equation's domain can continue past a finite endpoint. Failure of continuation requires at least one condition to fail.

### Two different obstacles

Positive data for $y'=y^2$ produce state blow-up. The coefficient in $y'=1/t$ is undefined at zero, so a solution starting at positive time cannot simply cross it.

### Definition and conditions

Maximal intervals and finite-time blow-up

$$
y'=y^2,\quad y(0)=a>0\Rightarrow y(t)=\frac a{1-at}
$$

- The maximal interval here is $(-\infty,1/a)$. General continuation assumes a continuous right-hand side on an open domain, locally Lipschitz in state.

### Derivation

Integrate for the solution family.

$$
-\frac1y=t+C
$$

Initial data determine the blow-up time.

$$
C=-\frac1a,\qquad T=\frac1a
$$

The solution is unbounded near the endpoint.

$$
\lim_{t\to T^-}\frac a{1-at}=+\infty
$$

### Interactive diagram

What happens to blow-up time when the positive initial value doubles?

The analytic solution is drawn only before blow-up. Drawing stops outside the viewport; no point is fabricated beyond blow-up.

Online diagram: #/lesson/ode-continuation?view=visual

### Guided experiment

1. **Smaller initial value** Set positive initial value $y_0$ to $0.5$ and observation time $t$ to $1$.

Preset observation: Blow-up occurs at time two.

2. **Larger initial value** Set positive initial value $y_0$ to $1$ and observation time $t$ to $0.5$.

Preset observation: Blow-up moves to time one.

3. **Request beyond the endpoint** Set positive initial value $y_0$ to $1$ and observation time $t$ to $2$.

Preset observation: The display explicitly reports that the solution cannot extend to the requested time.

### Worked examples

#### Example 1: Triple initial value

When does $y'=y^2,y(0)=3$ blow up?

- Its solution is $3/(1-3t)$.
- The first denominator zero is at $1/3$.

**Answer: Forward blow-up time $T=1/3$.**

#### Example 2: A coefficient boundary

Solve $y'=1/t,y(1)=0$.

- Integrating on positive time gives $\ln t+C$.
- The initial condition makes the constant zero; the right side is undefined at zero.

**Answer: $y=\ln t$, with maximal interval $(0,\infty)$.**

### Common mistakes

- **A curve too large for the screen has mathematically blown up.** The drawing range is finite; check analytic limits or continuation conditions separately.

- **A regular initial point lets the solution cross later coefficient singularities.** The entire solution interval must stay in the equation's domain.

### Exercises and solutions

**1. For positive initial value $1/4$ in the quadratic-growth model, when is blow-up?**

Hint: Take the positive initial value's reciprocal.

Answer: $4$.

- $T=1/(1/4)=4$.

**2. Does $y'=y$ blow up in finite time?**

Hint: Check the exponential at finite times.

Answer: No.

- It is finite at every finite time and extends over the real line.

**3. Does a curve leaving the screen prove blow-up?**

Hint: Distinguish a finite viewport from infinity.

Answer: No.

- A large finite value also leaves the viewport. Analytic or theoretical evidence is needed.

**4. Can the solution of $y'=1/(1-t)$ starting at zero continue through $t=1$ as a solution of the original equation?**

Hint: Check the right-hand side's domain.

Answer: Not as a classical solution on an interval containing that time.

- It is undefined at that time.

Prerequisites: Integral equations and Picard iteration.

## 3.4 Continuous dependence and error growth

*How far do nearby starting points separate?*

### The idea

Under Lipschitz hypotheses on a common existence interval, an exponential upper bound controls initial-data error.

### Intuition

Unique does not mean errors cannot grow. Their growth rate limits useful prediction time.

### Another explanation

Errors evolve too. Their equation determines how long a prediction remains reliable.

### Quick check

What must hold before applying continuous dependence?

A. A common existence interval and a region with uniform hypotheses
B. Elementary formulas for both solutions
C. Both plots fitting on one screen

Answer: A. Explicit formulas are unnecessary, but the theorem's hypotheses are essential.

### How do differences accumulate?

Two solutions with different initial data differ through both their starting error and later differences in rates.

### What does the exponential bound say?

With state Lipschitz constant $L$ on a common region, forward error is at most initial error times $e^{L(t-t_0)}$. This is an upper bound, not necessarily the exact error.

### Decay gives a sharper result

For $y'=-ky$, actual error decays by $e^{-k(t-t_0)}$. A coarse bound using a positive Lipschitz constant misses this stability.

### Definition and conditions

Continuous dependence and error growth

$$
\lvert y(t)-z(t)\rvert\le\lvert y(t_0)-z(t_0)\rvert e^{L(t-t_0)},\quad t\ge t_0
$$

- Both solutions solve the same equation in a common region and existence interval with uniform state Lipschitz constant $L$. Backward estimates use the absolute time difference.

### Derivation

Write the integral difference.

$$
d(t)\le d_0+L\int_{t_0}^td(s)ds
$$

Apply Gronwall's inequality.

$$
d(t)\le d_0e^{L(t-t_0)}
$$

A linear model gives the exact error directly.

$$
y'=ay\Rightarrow \Delta y(t)=e^{a(t-t_0)}\Delta y_0
$$

### Interactive diagram

How do positive and negative growth rates affect initial errors differently?

Compare exact solutions starting at one and one plus the error. Readouts show actual error, not a coarse bound.

Online diagram: #/lesson/ode-sensitivity?view=visual

### Guided experiment

1. **Error growth** Set growth rate $k$ to $1$, initial difference $\varepsilon$ to $0.1$, and observation time $t$ to $2$.

Preset observation: A positive rate amplifies the difference exponentially.

2. **Error decay** Set growth rate $k$ to $-1$, initial difference $\varepsilon$ to $0.1$, and observation time $t$ to $2$.

Preset observation: A negative rate decreases the difference.

3. **Neutral** Set growth rate $k$ to $0$, initial difference $\varepsilon$ to $0.1$, and observation time $t$ to $2$.

Preset observation: Zero growth keeps the original difference.

### Worked examples

#### Example 1: Error growth

In $y'=2y$, initial values differ by $0.01$. What is the difference after one time unit?

- The difference solves the same linear equation.
- The exact factor is $e^2$.

**Answer: $0.01e^2$.**

#### Example 2: Error decay

Two solutions of $y'=-3y$ have initial difference $2$.

- Subtract to obtain $d'=-3d$.
- Multiply the initial difference by the decaying exponential.

**Answer: The signed difference is $2e^{-3t}$.**

### Common mistakes

- **Continuous dependence guarantees accuracy for arbitrarily long times.** Exponential amplification can destroy long-term prediction accuracy.

- **A growing coarse bound proves instability.** The bound may not be sharp; analyze actual differences.

### Exercises and solutions

**1. By what factor does the initial error in $y'=y$ grow at $t=2$?**

Hint: Use the exact exponential.

Answer: $e^2$.

- The factor is $e^{1\times2}$.

**2. Does uniqueness guarantee low sensitivity to long-term initial errors?**

Hint: Consider a positive exponential model.

Answer: Not necessarily.

- Differences between unique solutions can still grow exponentially.

**3. Does the error bound equal actual error?**

Hint: A bound may have slack.

Answer: Not necessarily.

- The inequality limits the largest possible value.

**4. What does continuous dependence give for zero initial difference?**

Hint: Substitute zero error.

Answer: They agree on their common interval.

- The upper bound is zero, so the solutions coincide.

Prerequisites: Maximal intervals and finite-time blow-up.

## Chapter review

Try independently before reading the solutions.

**1. Is $y'=\sqrt{\lvert y\rvert},y(0)=0$ locally unique?**

Hint: Construct a delayed-departure solution.

Answer: Not unique.

- Zero is a solution. For any $c\ge0$, use zero when $t\le c$ and $(t-c)^2/4$ afterward; this also solves it.

**2. Find the maximal forward time for $y'=y^2,y(0)=5$.**

Hint: Locate the denominator zero.

Answer: $1/5$.

- $y=5/(1-5t)$ blows up at one fifth.

**3. Two solutions of $y'=-2y$ start $0.4$ apart. Find their absolute difference after two time units.**

Hint: Solve the exact difference equation.

Answer: $0.4e^{-4}$.

- The difference shrinks by $e^{-2t}$.

# Chapter 4 · Second-order linear equations

Build the solution space, then relate characteristic roots to exponentials, oscillations, and repeated-root solutions.

Goals:
- Use superposition and Wronskians
- Solve constant-coefficient homogeneous equations
- Handle complex roots, repeated roots, and reduction of order

## 4.1 Superposition and second-order solution spaces

*Two independent solutions generate every homogeneous solution*

### The idea

Every second-order homogeneous linear solution is a combination of two linearly independent solutions.

### Intuition

Initial position and velocity are independent parameters carried by a fundamental pair.

### Another explanation

A solution-space basis follows the vector-space idea: cover every solution without redundancy.

### Quick check

Which pair is needed for a second-order homogeneous general solution?

A. Any two nonzero solutions
B. Two differently written expressions
C. Two linearly independent solutions

Answer: C. Different expressions may still be scalar multiples.

### Why does superposition work?

A linear differential operator satisfies $L[c_1y_1+c_2y_2]=c_1L[y_1]+c_2L[y_2]$. Linear combinations of homogeneous solutions remain solutions.

### Why are there two parameters?

For a standard second-order linear equation with continuous coefficients, each initial position-velocity pair gives one solution. Its solution space therefore corresponds to two-dimensional initial data.

### What changes with forcing?

Fix one particular solution and add every homogeneous solution. Subtracting solutions with the same forcing cancels that forcing.

### Definition and conditions

Superposition and second-order solution spaces

$$
y''+p(t)y'+q(t)y=0\Rightarrow y=c_1y_1+c_2y_2
$$

- $p,q$ is continuous on the interval and $y_1,y_2$ are independent solutions there. A forced general solution also includes a particular solution.

### Derivation

Apply the linear operator to a combination.

$$
L[c_1y_1+c_2y_2]=0
$$

Initial data form a two-variable linear system.

$$
\begin{pmatrix}y_1(t_0)&y_2(t_0)\\y_1'(t_0)&y_2'(t_0)\end{pmatrix}\begin{pmatrix}c_1\\c_2\end{pmatrix}=\begin{pmatrix}y_0\\v_0\end{pmatrix}
$$

An invertible initial-data matrix covers every initial-value solution.

$$
\det\begin{pmatrix}y_1&y_2\\y_1'&y_2'\end{pmatrix}(t_0)\ne0
$$

### Interactive diagram

What happens to period and velocity amplitude when angular frequency doubles?

Plot displacement and velocity against time. Changing frequency changes both period and velocity amplitude.

Online diagram: #/lesson/ode-superposition?view=visual

### Guided experiment

1. **Unit angular frequency** Set angular frequency $\omega$ to $1$ and observation time $t$ to $1.57079633$.

Preset observation: Displacement is zero and velocity minus one.

2. **Higher frequency** Set angular frequency $\omega$ to $2$ and observation time $t$ to $1.57079633$.

Preset observation: At the same time, displacement is minus one and velocity zero.

3. **One cycle** Set angular frequency $\omega$ to $1$ and observation time $t$ to $6$.

Preset observation: Six time units nearly complete a cycle, but the exact period is twice pi.

### Worked examples

#### Example 1: Free oscillation

Solve $y''+y=0,y(0)=2,y'(0)=3$.

- The general solution is $c_1\cos t+c_2\sin t$.
- Data at zero give $c_1=2,c_2=3$.

**Answer: $y=2\cos t+3\sin t$.**

#### Example 2: Difference of forced solutions

Two functions satisfy $y''+y=5$. What does their difference satisfy?

- Subtract the equations.
- The forcing cancels and the left side stays linear.

**Answer: The difference satisfies $z''+z=0$.**

### Common mistakes

- **Superposition holds for every nonlinear equation.** Linearity is essential.

- **Any two solutions represent all solutions.** They must also be linearly independent.

### Exercises and solutions

**1. Find the general solution of $y''=0$.**

Hint: Integrate twice.

Answer: $y=c_1+c_2t$.

- The first integration gives a constant derivative; the second gives an affine function.

**2. Do $\cos t$ and $2\cos t$ form a complete fundamental pair?**

Hint: Check independence.

Answer: No.

- The second is a multiple of the first and cannot match arbitrary initial velocity.

**3. Solve $y''+y=0,y(0)=0,y'(0)=-2$.**

Hint: Match sine and cosine coefficients.

Answer: $y=-2\sin t$.

- The cosine coefficient is zero and the sine coefficient minus two.

**4. Must doubling a forced solution preserve the original forcing equation?**

Hint: The operator doubles the forcing too.

Answer: Not necessarily.

- A nonzero forcing becomes twice as large.

Prerequisites: Initial values and solution intervals, Linear independence and redundant directions.

## 4.2 Wronskians and Abel's formula

*Is the initial-data matrix invertible?*

### The idea

The Wronskian combines values and derivatives in a determinant. For solutions of one linear equation, it tests independent matching of initial data.

### Intuition

If two solutions supply only one direction of initial position and velocity, one degree of freedom is missing.

### Another explanation

A Wronskian checks independent initial-data variation, rather than whether two curves look similar.

### Quick check

Can Abel's exponential factor become zero?

A. Always in finite time
B. No, while the coefficient integral is finite
C. It depends on the initial sign

Answer: B. A real exponential is strictly positive.

### How is it defined?

In second order, use $W=y_1y_2'-y_2y_1'$: the determinant of the previous lesson's initial-data matrix.

### Why can one point suffice?

Two solutions of the same standard homogeneous linear equation satisfy Abel's formula. On a continuous-coefficient interval, their Wronskian is either always zero or never zero.

### Do not extend this test to arbitrary functions

For arbitrary differentiable functions, an identically zero Wronskian need not imply dependence. This equivalence uses solutions of the same linear equation.

### Definition and conditions

Wronskians and Abel's formula

$$
W(t)=W(t_0)\exp\left(-\int_{t_0}^t p(s)ds\right)
$$

- $y_1,y_2$ both solve $y''+py'+qy=0$, with $p,q$ continuous on the same interval.

### Derivation

Differentiate the determinant.

$$
W'=y_1y_2''-y_2y_1''
$$

Eliminate second derivatives using the equation.

$$
W'=-p(y_1y_2'-y_2y_1')=-pW
$$

Solve the resulting first-order equation.

$$
W=W(t_0)e^{-\int_{t_0}^t p(s)ds}
$$

### Interactive diagram

Can the Wronskian become zero while both fundamental solutions vary?

Compare the two fundamental solutions and their current data vectors. The Wronskian remains one at every time.

Online diagram: #/lesson/ode-wronskian?view=visual

### Guided experiment

1. **Starting point** Set observation time $t$ to $0$.

Preset observation: The initial-data matrix is the identity.

2. **Quarter-turn** Set observation time $t$ to $1.57079633$.

Preset observation: Values and derivatives exchange roles; the determinant stays one.

3. **Half-turn** Set observation time $t$ to $3.14159265$.

Preset observation: Both columns reverse while remaining independent.

### Worked examples

#### Example 1: Sine and cosine

Calculate $W(\cos t,\sin t)$.

- Substitute $y_1'=-\sin t,y_2'=\cos t$.
- This gives $\cos^2t+\sin^2t$.

**Answer: $W=1$, so the solutions are independent.**

#### Example 2: An exponential pair

Calculate $W(e^t,e^{2t})$.

- Their derivatives are $e^t,2e^{2t}$.
- Subtraction gives $2e^{3t}-e^{3t}$.

**Answer: $W=e^{3t}\ne0$.**

### Common mistakes

- **A zero Wronskian proves any functions dependent.** Additional hypotheses are needed; this test concerns solutions of the same linear equation.

- **A small Wronskian equals zero.** Distinguish numerical closeness from exact zero.

### Exercises and solutions

**1. What is $W(1,t)$?**

Hint: Substitute derivatives zero and one.

Answer: $1$.

- $1\times1-t\times0=1$.

**2. What is $W(e^t,3e^t)$?**

Hint: The two columns are proportional.

Answer: $0$.

- $3e^{2t}-3e^{2t}=0$.

**3. If the standard equation has $p=2$ and $W(0)=4$, find the Wronskian.**

Hint: Apply Abel's formula.

Answer: $W=4e^{-2t}$.

- Integrating the coefficient gives $2t$.

**4. Can the Wronskian of two solutions of the same continuous-coefficient second-order equation cross zero from positive to negative?**

Hint: Its exponential factor is strictly positive.

Answer: No.

- The initial Wronskian fixes its sign.

Prerequisites: Superposition and second-order solution spaces.

## 4.3 Characteristic equations and distinct real roots

*Turn differentiation into multiplication*

### The idea

Substituting exponentials into a constant-coefficient linear equation turns derivatives into an algebraic equation for growth rates.

### Intuition

Each exponential derivative adds a constant factor, separating the differential operator into algebra.

### Another explanation

Differentiate the exponential repeatedly to derive the characteristic rule, rather than treating it as an extra mnemonic.

### Quick check

What is the main benefit of an exponential trial solution?

A. Replace derivatives by multiplication involving the root
B. Prove every equation integrable
C. Remove the initial conditions

Answer: A. Constant coefficients allow this simplification.

### Why try an exponential?

For $y=e^{rt}$, its first derivative is $re^{rt}$ and second derivative $r^2e^{rt}$. Cancel the nonzero exponential factor.

### How do two real roots work?

Distinct real roots $r_1,r_2$ give independent $e^{r_1t},e^{r_2t}$; their combination is the general solution.

### Roots and long-term behavior

Positive roots permit growth and negative roots give decay. Initial data determine whether the corresponding coefficient is nonzero.

### Definition and conditions

Characteristic equations and distinct real roots

$$
ay''+by'+cy=0,\qquad ar^2+br+c=0
$$

- $a,b,c$ are real constants with $a\ne0$; the two characteristic roots here are distinct and real.

### Derivation

Substitute an exponential trial solution.

$$
a r^2e^{rt}+bre^{rt}+ce^{rt}=0
$$

Cancel its everywhere-nonzero factor.

$$
ar^2+br+c=0
$$

Distinct exponentials have nonzero Wronskian.

$$
W=(r_2-r_1)e^{(r_1+r_2)t}\ne0
$$

### Interactive diagram

When the roots merge, do these two exponentials remain an independent pair?

Two exponentials form an independent fundamental pair only for different roots. Coincident roots are explicitly marked as dependent, not as a complete basis.

Online diagram: #/lesson/ode-real-roots?view=visual

### Guided experiment

1. **Distinct negative roots** Set first real root $r_1$ to $-1$, second real root $r_2$ to $-2$, and observation time $t$ to $1$.

Preset observation: Both directions decay at different rates.

2. **One positive root** Set first real root $r_1$ to $1$, second real root $r_2$ to $-1$, and observation time $t$ to $1$.

Preset observation: One direction grows and the other decays.

3. **Coincident roots** Set first real root $r_1$ to $-1$, second real root $r_2$ to $-1$, and observation time $t$ to $1$.

Preset observation: The curves coincide; use the repeated-root method for another direction.

### Worked examples

#### Example 1: Two decay rates

Solve $y''+3y'+2y=0$.

- The characteristic polynomial is $(r+1)(r+2)=0$.
- Roots minus one and minus two give independent exponentials.

**Answer: $y=c_1e^{-t}+c_2e^{-2t}$.**

#### Example 2: Match initial data

Solve $y''-y=0,y(0)=1,y'(0)=0$.

- The general solution is $c_1e^t+c_2e^{-t}$.
- Initial data make the coefficient sum one and difference zero.

**Answer: $y=(e^t+e^{-t})/2$.**

### Common mistakes

- **The constant-coefficient characteristic method directly handles arbitrary variable coefficients.** With variable coefficients, an exponential generally cannot remove every time dependence.

- **One characteristic root gives only one fixed solution.** Its exponential can be multiplied by any constant.

### Exercises and solutions

**1. Find the two roots for $y''-3y'+2y=0$.**

Hint: Factor the quadratic.

Answer: $1,2$.

- $(r-1)(r-2)=0$.

**2. Find the general solution of $y''+4y'+3y=0$.**

Hint: The roots are minus one and minus three.

Answer: $c_1e^{-t}+c_2e^{-3t}$.

- Combine their exponentials.

**3. Does one positive root make every solution grow?**

Hint: Check its coefficient.

Answer: Not necessarily.

- The growing coefficient can vanish; zero is also a solution.

**4. Why may you divide by $e^{rt}$?**

Hint: Check for zeros.

Answer: The factor is nowhere zero.

- Real or complex exponentials never vanish at real times.

Prerequisites: Wronskians and Abel's formula.

## 4.4 Complex roots and real oscillations

*From complex exponentials to sine and cosine*

### The idea

A conjugate root pair produces real oscillations with growth or decay.

### Intuition

The real part controls the envelope; the imaginary part controls rotation rate.

### Another explanation

Complex notation organizes two real motions, sine and cosine, which together carry position and velocity data.

### Quick check

What does the real part of a conjugate root control?

A. Initial time
B. Angular frequency
C. Amplitude envelope

Answer: C. The imaginary part controls oscillation speed.

### Why do trigonometric functions appear?

Euler's formula splits $e^{i\beta t}$ into sine and cosine. Real and imaginary parts remain solutions for real-coefficient equations.

### How do you read the roots?

Roots $\alpha\pm i\beta$ give real solution $e^{\alpha t}(C\cos\beta t+D\sin\beta t)$, with $\beta>0$.

### Be careful with period

Pure oscillation has period $2\pi/\beta$. A nonzero real part usually makes the full function nonperiodic, even though oscillation spacing stays fixed.

### Definition and conditions

Complex roots and real oscillations

$$
r=\alpha\pm i\beta\Rightarrow y=e^{\alpha t}(C\cos\beta t+D\sin\beta t)
$$

- Use a real constant-coefficient second-order homogeneous equation with $\beta>0$. Angular frequency is radians per unit time.

### Derivation

Expand the complex exponential.

$$
e^{(\alpha+i\beta)t}=e^{\alpha t}(\cos\beta t+i\sin\beta t)
$$

Take real and imaginary parts as two real solutions.

$$
y_1=e^{\alpha t}\cos\beta t,\quad y_2=e^{\alpha t}\sin\beta t
$$

They supply two independent initial-data directions.

$$
W=\beta e^{2\alpha t}\ne0
$$

### Interactive diagram

What happens to period and velocity amplitude when angular frequency doubles?

Plot displacement and velocity against time. Changing frequency changes both period and velocity amplitude.

Online diagram: #/lesson/ode-complex-roots?view=visual

### Guided experiment

1. **Unit angular frequency** Set angular frequency $\omega$ to $1$ and observation time $t$ to $1.57079633$.

Preset observation: Displacement is zero and velocity minus one.

2. **Higher frequency** Set angular frequency $\omega$ to $2$ and observation time $t$ to $1.57079633$.

Preset observation: At the same time, displacement is minus one and velocity zero.

3. **Nearly one cycle** Set angular frequency $\omega$ to $1$ and observation time $t$ to $6$.

Preset observation: Six time units nearly complete a cycle, but the exact period is twice pi.

### Worked examples

#### Example 1: No damping

Solve $y''+4y=0,y(0)=1,y'(0)=2$.

- The roots are $\pm2i$.
- The general solution $C\cos2t+D\sin2t$ has initial coefficients $C=1,D=1$.

**Answer: $y=\cos2t+\sin2t$.**

#### Example 2: Decaying oscillation

Find the general solution of $y''+2y'+5y=0$.

- The characteristic roots are $-1\pm2i$.
- The real part gives $e^{-t}$, while the imaginary part gives angular frequency two.

**Answer: $y=e^{-t}(C\cos2t+D\sin2t)$.**

### Common mistakes

- **Complex roots permit only complex physical solutions.** Conjugate combinations give real sine-cosine solutions.

- **The imaginary part is frequency in cycles per second.** It is angular frequency; divide by $2\pi$ for ordinary frequency.

### Exercises and solutions

**1. Find the angular frequency of $y''+9y=0$.**

Hint: Take the positive imaginary part.

Answer: $3$.

- The roots are $\pm3i$.

**2. What is its fundamental period?**

Hint: Relate angular frequency to one full turn.

Answer: $2\pi/3$.

- $T=2\pi/3$.

**3. How does the envelope change for roots $-2\pm i$?**

Hint: Inspect the real part.

Answer: Exponential decay.

- The envelope is proportional to $e^{-2t}$.

**4. Is $e^{-t}\cos t$ periodic?**

Hint: Compare amplitudes one full oscillation apart.

Answer: No.

- Each cycle reduces amplitude, so the function does not repeat.

Prerequisites: Characteristic equations and distinct real roots.

## 4.5 Repeated roots and reduction of order

*Repeating one solution adds no freedom*

### The idea

A double root needs a time-times-exponential second solution. A known solution also permits reduction of order to find another.

### Intuition

Writing the same root twice repeats a direction and cannot match two independent initial conditions.

### Another explanation

Repeated roots lack an independent solution direction; the time factor supplies it.

### Quick check

What is the usual second independent solution for a double root?

A. A constant multiple of the same exponential
B. Time times that exponential
C. The square of the exponential

Answer: B. The time factor provides a new initial-data direction.

### How do you supply the missing solution?

For a double characteristic root $r$, the general solution is $(C+Dt)e^{rt}$.

### How does a known solution help?

In standard form, set $y=v y_1$. The known solution cancels one term, leaving a first-order equation for $v'$.

### Where does reduction of order apply?

Its formula contains $1/y_1^2$, so use subintervals where the known solution is nonzero. A zero does not necessarily prevent original solutions from existing.

### Definition and conditions

Repeated roots and reduction of order

$$
y_2=y_1\int\frac{e^{-\int p(t)dt}}{y_1^2}\,dt
$$

- Equation $y''+py'+qy=0$ has continuous coefficients, with known solution $y_1$ nonzero on the chosen subinterval.

### Derivation

Substitute $y=vy_1$ and cancel the known-solution terms.

$$
y_1v''+(2y_1'+py_1)v'=0
$$

Set $w=v'$, separate, and integrate.

$$
w=C\frac{e^{-\int pdt}}{y_1^2}
$$

For repeated roots, the integral leaves a time factor.

$$
p=-2r,\quad y_1=e^{rt}\Rightarrow y_2=te^{rt}
$$

### Interactive diagram

For a negative double root, does the time factor prevent eventual decay?

Compare the repeated exponential with its time-times-exponential companion. Their Wronskian is nonzero.

Online diagram: #/lesson/ode-repeated-roots?view=visual

### Guided experiment

1. **Negative root** Set repeated real root $r$ to $-1$ and observation time $t$ to $2$.

Preset observation: Both fundamental solutions eventually decay.

2. **Zero root** Set repeated real root $r$ to $0$ and observation time $t$ to $2$.

Preset observation: The fundamental solutions become one and time.

3. **Positive root** Set repeated real root $r$ to $0.5$ and observation time $t$ to $2$.

Preset observation: Both directions permit growth.

### Worked examples

#### Example 1: A decaying double root

Solve $y''+2y'+y=0,y(0)=1,y'(0)=0$.

- Root minus one gives general solution $(C+Dt)e^{-t}$.
- The initial conditions give $C=1,D-C=0$.

**Answer: $y=(1+t)e^{-t}$.**

#### Example 2: Reduce order from a constant solution

For $y''=0$ with known $y_1=1$, find another solution.

- The standard coefficient is $p=0$.
- The reduction integral is $\int1dt=t$.

**Answer: Choose $y_2=t$.**

### Common mistakes

- **A double root gives only one arbitrary constant.** Two independent solutions and two constants are still required.

- **Every zero of the known solution is a singularity of the original equation.** It may only invalidate this computational representation.

### Exercises and solutions

**1. Find the general solution of $y''-4y'+4y=0$.**

Hint: The characteristic polynomial is a perfect square.

Answer: $y=(C+Dt)e^{2t}$.

- Its double root is two.

**2. Can $e^t$ and $5e^t$ form a repeated-root fundamental pair?**

Hint: Check whether one is a multiple of the other.

Answer: No.

- They are dependent and add no degree of freedom.

**3. What is $W(e^{rt},te^{rt})$?**

Hint: Differentiate directly.

Answer: $e^{2rt}$.

- Subtraction leaves $e^{2rt}$.

**4. Can reduction of order divide directly at a zero of the known solution?**

Hint: Inspect the denominator.

Answer: No.

- The expression requires a nonzero known solution; change interval or fundamental solution.

Prerequisites: Complex roots and real oscillations.

## Chapter review

Try independently before reading the solutions.

**1. Solve $y''+6y'+9y=0$.**

Hint: The characteristic polynomial is a perfect square.

Answer: $(C+Dt)e^{-3t}$.

- A double root at minus three needs a time factor.

**2. Solve $y''+16y=0,y(0)=2,y'(0)=4$.**

Hint: Angular frequency is four.

Answer: $2\cos4t+\sin4t$.

- The cosine coefficient is two and sine coefficient one.

**3. In the same equation, $p=-1$ and $W(0)=2$. Find its Wronskian.**

Hint: Use Abel's formula.

Answer: $2e^t$.

- The negative integrated coefficient gives positive time.

# Chapter 5 · Forced equations and vibration

Construct particular solutions and interpret damping and resonance, while distinguishing transients, steady states, and driving frequencies.

Goals:
- Construct forced particular solutions
- Use variation of parameters
- Explain damping and resonance

## 5.1 Undetermined coefficients and resonance corrections

*Choose the form, then substitute for coefficients*

### The idea

For forcing closed under differentiation in finitely many forms, choose a trial family and solve for its coefficients.

### Intuition

Guess the shape, not the coefficients. Multiply by time factors when homogeneous overlap would make the trial redundant.

### Another explanation

This method turns finding a function into finding finitely many numbers. Substitution turns the trial into a verified answer.

### Quick check

What should you do when forcing overlaps a homogeneous solution?

A. Multiply by a suitable power of time
B. Delete the forcing
C. Keep the original trial

Answer: A. The associated root's multiplicity determines the time power.

### Which forcing terms allow this?

Use constant-coefficient linear equations forced by finite sums and products of polynomials, exponentials, sines, and cosines.

### Why include all companion terms?

Polynomial derivatives lower degree and trigonometric derivatives exchange sine with cosine. Include every needed lower power or trigonometric partner.

### What if the trial overlaps homogeneous solutions?

If the associated characteristic root has multiplicity $m$, multiply the whole usual trial by $t^m$. Repeating homogeneous terms cannot produce the forcing.

### Definition and conditions

Undetermined coefficients and resonance corrections

$$
y=y_h+y_p,\qquad L[y_p]=g
$$

- Use constant-coefficient linear operators and forcing in finite differentiation-closed families. Always substitute the final result to verify it.

### Derivation

Consider a resonant forcing.

$$
y''+y=\cos t
$$

Try a function outside the homogeneous solution space.

$$
y_p=At\sin t
$$

Substitute to determine its coefficient.

$$
y_p''+y_p=2A\cos t\Rightarrow A=\frac12
$$

### Interactive diagram

How does the response differ when driving and natural frequencies agree exactly?

Display the zero-initial-data analytic response and forcing. At frequency one, use the resonance-limit formula to avoid division by zero.

Online diagram: #/lesson/ode-undetermined?view=visual

### Guided experiment

1. **Low-frequency driving** Set forcing angular frequency $\omega$ to $0.5$ and observation time $t$ to $6$.

Preset observation: Forcing combines with natural oscillation.

2. **Exact resonance** Set forcing angular frequency $\omega$ to $1$ and observation time $t$ to $6$.

Preset observation: The response contains time times sine, with a growing envelope.

3. **Higher-frequency driving** Set forcing angular frequency $\omega$ to $2$ and observation time $t$ to $6$.

Preset observation: The nonresonant response is a difference of bounded cosines.

### Worked examples

#### Example 1: Exponential forcing

Find the general solution of $y''-y=e^{2t}$.

- Its homogeneous solution is $C e^t+D e^{-t}$.
- Trying $Ae^{2t}$ gives left side $3Ae^{2t}$, hence $A=1/3$.

**Answer: $y=Ce^t+De^{-t}+e^{2t}/3$.**

#### Example 2: Sinusoidal resonance

Find one particular solution of $y''+y=\cos t$.

- The ordinary trigonometric trial already lies in the homogeneous space.
- Instead try $At\sin t$; substitution gives $A=1/2$.

**Answer: $y_p=t\sin t/2$.**

### Common mistakes

- **Guessing a matching function finishes the solve.** Determine coefficients by substitution and handle homogeneous overlap.

- **A forced general solution contains only a particular solution.** Add the full homogeneous solution too.

### Exercises and solutions

**1. Find one particular solution of $y''+y=2$.**

Hint: Try a constant.

Answer: $y_p=2$.

- Its second derivative vanishes; choose two.

**2. How many time factors must the trial for $y''-2y'+y=e^t$ include?**

Hint: Root one has multiplicity two.

Answer: Try $At^2e^t$.

- The exponential forcing overlaps a double characteristic root.

**3. Give one particular solution of $y''+y=\sin2t$.**

Hint: Try a sine at the same frequency.

Answer: $y_p=-\sin2t/3$.

- Two derivatives multiply it by minus four, giving minus three times the trial on the left.

**4. Can undetermined coefficients directly handle arbitrary $\ln t$ forcing?**

Hint: Check whether derivatives stay in a finite trial space.

Answer: Use variation of parameters or another method.

- Logarithmic derivatives produce increasingly different negative powers, outside the usual rules here.

Prerequisites: Repeated roots and reduction of order.

## 5.2 Variation of parameters

*Let homogeneous coefficients vary with time*

### The idea

Replace constants multiplying homogeneous solutions by functions and determine their change through two linear conditions.

### Intuition

Keep the familiar fundamental solutions while allowing forcing to change their weights continuously.

### Another explanation

Forcing preserves the homogeneous structure but changes the response accumulated along its fundamental solutions.

### Quick check

What must be prepared for variation of parameters?

A. Every zero of the forcing
B. Any pair of functions
C. Independent solutions of the associated homogeneous equation

Answer: C. A fundamental pair and nonzero Wronskian underpin the calculation.

### Normalize first

For $a(t)y''+b(t)y'+c(t)y=g(t)$, divide by the leading coefficient only on an interval where $a\ne0$.

### An extra choice

Set $y_p=u_1y_1+u_2y_2$ and impose $u_1'y_1+u_2'y_2=0$ to simplify derivatives.

### Find the two coefficient derivatives

The second relation is $u_1'y_1'+u_2'y_2'=g$, using forcing from standard form. A nonzero Wronskian determines both weight derivatives.

### Definition and conditions

Variation of parameters

$$
y_p=-y_1\int\frac{y_2g}{W}dt+y_2\int\frac{y_1g}{W}dt
$$

- Use a standard second-order linear equation with independent fundamental solutions, continuous coefficients and forcing, and $W\ne0$. Integral constants only add homogeneous terms.

### Derivation

Impose the cancellation condition.

$$
u_1'y_1+u_2'y_2=0
$$

Substitute to obtain the forcing condition.

$$
u_1'y_1'+u_2'y_2'=g
$$

Solve the two-variable system.

$$
u_1'=-\frac{y_2g}{W},\qquad u_2'=\frac{y_1g}{W}
$$

### Interactive diagram

How does the particular solution's derivative change sign across time one?

Plot a variation-of-parameters particular solution and its first derivative, discussed only on positive time.

Online diagram: #/lesson/ode-variation?view=visual

### Guided experiment

1. **Below one** Set positive time $t$ to $0.5$.

Preset observation: The derivative is logarithmic and negative here.

2. **Stationary point** Set positive time $t$ to $1$.

Preset observation: The derivative is zero.

3. **Above one** Set positive time $t$ to $2$.

Preset observation: The derivative is positive and the second derivative remains positive.

### Worked examples

#### Example 1: Nonpolynomial forcing

Find one particular solution of $y''=1/t$ on $t>0$.

- Basis $1,t$ has Wronskian one and weight derivatives $-1,1/t$.
- Integration gives $-t+t\ln t$.

**Answer: $y_p=t\ln t-t$, with second derivative $1/t$.**

#### Example 2: Check a simple forcing

Use variation of parameters for one particular solution of $y''+y=1$.

- Choose cosine and sine, with Wronskian one.
- Choose integrals giving $u_1=\cos t,u_2=\sin t$.

**Answer: $y_p=\cos^2t+\sin^2t=1$.**

### Common mistakes

- **Variation formulas can directly use unnormalized forcing.** Divide forcing by the leading coefficient too.

- **The integral constants add new nonhomogeneous degrees of freedom.** They only repeat homogeneous terms already present.

### Exercises and solutions

**1. Which fundamental solutions fit standard form $y''+y=g$?**

Hint: Use the homogeneous equation.

Answer: $\cos t,\sin t$.

- Its homogeneous family is generated by cosine and sine.

**2. Why can you not choose dependent fundamental solutions?**

Hint: Check the coefficient-system determinant.

Answer: The initial-data matrix is singular.

- A zero Wronskian prevents independent recovery of the weights.

**3. What is the standard-form forcing of $2y''+2y=6$?**

Hint: Divide the entire equation by two.

Answer: $3$.

- Divide the right-hand side too.

**4. What kind of function separates two particular solutions?**

Hint: Subtract to cancel equal forcing.

Answer: A homogeneous solution.

- Their difference solves the homogeneous equation.

Prerequisites: Undetermined coefficients and resonance corrections.

## 5.3 Damped oscillation and critical damping

*Roots determine whether motion oscillates*

### The idea

Damping dissipates energy through velocity. Characteristic roots distinguish underdamped, critical, and overdamped motion.

### Intuition

The spring restores equilibrium while damping removes kinetic energy. Their balance determines the return pattern.

### Another explanation

Roots, motion, envelopes, and dissipation describe the same model from different perspectives.

### Quick check

Which roots correspond to critical damping?

A. A purely imaginary pair
B. A repeated negative real root
C. Two positive real roots

Answer: B. With positive mass and stiffness, the critical root is repeated, negative, and real.

### Form the motion equation

With mass $m>0$, damping $c\ge0$, and stiffness $k>0$, free motion satisfies $my''+cy'+ky=0$.

### Three cases

Compare $c^2$ with $4mk$. Below gives decaying oscillations; equality gives a repeated root; above gives two negative real roots.

### Why does energy decrease?

Mechanical energy is $E=(m(y')^2+ky^2)/2$. Differentiate and substitute to get $E'=-c(y')^2$.

### Definition and conditions

Damped oscillation and critical damping

$$
m y''+c y'+k y=0,\qquad E'=-c(y')^2\le0
$$

- Assume $m,k>0,c\ge0$, no forcing, and displacement measured from equilibrium. Underdamped angular frequency is $\sqrt{k/m-(c/2m)^2}$.

### Derivation

Write force balance.

$$
my''=-cy'-ky
$$

Substitute exponentials to find the roots.

$$
r=\frac{-c\pm\sqrt{c^2-4mk}}{2m}
$$

Only the dissipative term remains in the energy derivative.

$$
E'=y'(my''+ky)=-c(y')^2
$$

### Interactive diagram

How does the motion change from underdamped to overdamped?

Mass and stiffness are one, so critical damping is two. Time curves also show energy and dissipation rate.

Online diagram: #/lesson/ode-damping?view=visual

### Guided experiment

1. **Underdamped** Set damping coefficient $c$ to $0.5$ and observation time $t$ to $6$.

Preset observation: Amplitude decays while the motion still crosses equilibrium.

2. **Critically damped** Set damping coefficient $c$ to $2$ and observation time $t$ to $6$.

Preset observation: Use the repeated-real-root formula.

3. **Overdamped** Set damping coefficient $c$ to $4$ and observation time $t$ to $6$.

Preset observation: One of the two negative real roots gives a slower decay direction.

### Worked examples

#### Example 1: Underdamped

Classify $y''+2y'+5y=0$.

- The discriminant is $4-20=-16$.
- The roots are $-1\pm2i$.

**Answer: Underdamped, with envelope $e^{-t}$ and angular frequency two.**

#### Example 2: The critical value

For mass two and stiffness eight, find the critical damping coefficient.

- The critical condition is $c^2=4mk$.
- Take the nonnegative root $c=2\sqrt{16}$.

**Answer: $c=8$.**

### Common mistakes

- **More damping makes every settling process faster.** Overdamping can produce a slowly decaying direction.

- **Any damping eliminates oscillation.** Underdamped motion still oscillates with decreasing amplitude.

### Exercises and solutions

**1. Which damping regime describes $y''+6y'+4y=0$?**

Hint: Compare the damping square with four times stiffness.

Answer: Overdamped.

- $36>16$.

**2. With no damping or forcing, how does mechanical energy change?**

Hint: Set the dissipation coefficient to zero.

Answer: Conserved.

- The energy derivative is identically zero.

**3. Does increasing positive damping always shorten return time for every initial state?**

Hint: Overdamping can introduce a very slow root.

Answer: No universal conclusion.

- At large damping, one negative root approaches zero, allowing slower decay.

**4. What does negative damping do to the energy derivative?**

Hint: Inspect the dissipation sign.

Answer: Nondecreasing; this is negative damping.

- $-c(y')^2\ge0$: the system receives energy.

Prerequisites: Complex roots and real oscillations, Repeated roots and reduction of order.

## 5.4 Forced oscillation and resonance

*Forcing supplies energy continuously*

### The idea

An undamped system driven at its natural frequency can develop a growing resonant term.

### Intuition

Repeatedly synchronized forcing accumulates energy; damping changes this conclusion.

### Another explanation

Resonance means the old particular-solution structure fails and needs a growing time factor; it is more than a zero in a denominator.

### Quick check

Which conditions are essential for this unbounded resonant response?

A. No damping and forcing at the natural frequency
B. Merely a nonzero initial position
C. Any forcing and damping

Answer: A. Matching frequency together with no dissipation produces sustained accumulation.

### Away from resonance

For $y''+\omega_0^2y=F\cos\omega t$ with $\omega\ne\omega_0$, the same-frequency particular coefficient is $F/(\omega_0^2-\omega^2)$.

### Exact resonance

If $\omega=\omega_0>0$, the usual trial overlaps the homogeneous space. A particular solution is $Ft\sin(\omega_0t)/(2\omega_0)$.

### A small frequency difference

Nearby but unequal frequencies can produce beats: a slowly changing envelope. Finite-time growth alone is not exact resonance.

### Definition and conditions

Forced oscillation and resonance

$$
y''+\omega_0^2y=F\cos(\omega_0t)\implies y_p=\frac F{2\omega_0}t\sin(\omega_0t)
$$

- Assume no damping, constant coefficients, and $\omega_0>0$. This formula uses cosine forcing, with $F$ its amplitude in the normalized equation.
- For right side $F\sin(\omega_0t)$, choose $y_p=-Ft\cos(\omega_0t)/(2\omega_0)$. A forcing phase change also changes the particular solution.
- Nonzero forcing is required for this growth term. The next lesson covers positive-damping steady response.

### Derivation

Try the resonance-corrected form.

$$
y_p=A t\sin\omega_0t
$$

The second derivative and restoring term cancel the time-dependent part.

$$
y_p''+\omega_0^2y_p=2A\omega_0\cos\omega_0t
$$

Match the forcing coefficient.

$$
A=\frac F{2\omega_0}
$$

### Interactive diagram

How does the response differ when driving and natural frequencies agree exactly?

Display the zero-initial-data analytic response and forcing. At frequency one, use the resonance-limit formula to avoid division by zero.

Online diagram: #/lesson/ode-resonance?view=visual

### Guided experiment

1. **Low-frequency driving** Set forcing angular frequency $\omega$ to $0.5$ and observation time $t$ to $6$.

Preset observation: Forcing combines with natural oscillation.

2. **Exact resonance** Set forcing angular frequency $\omega$ to $1$ and observation time $t$ to $6$.

Preset observation: The response contains time times sine, with a growing envelope.

3. **Higher-frequency driving** Set forcing angular frequency $\omega$ to $2$ and observation time $t$ to $6$.

Preset observation: The nonresonant response is a difference of bounded cosines.

### Worked examples

#### Example 1: Unit-frequency resonance

Solve $y''+y=\cos t,y(0)=y'(0)=0$.

- Choose resonant particular solution $t\sin t/2$.
- Its initial value and derivative are zero, requiring no homogeneous correction.

**Answer: $y=t\sin t/2$.**

#### Example 2: Nonresonant zero initial data

Solve $y''+y=\cos2t$ with zero position and velocity.

- A particular solution is $-\cos2t/3$.
- Add $\cos t/3$ for zero initial position; the sine coefficient is zero.

**Answer: $y=(\cos t-\cos2t)/3$.**

### Common mistakes

- **Very close frequencies are exactly equal.** Nonresonance and exact resonance differ in long-term behavior.

- **Positive damping still always gives amplitude growing linearly in time.** Positive damping gives finite steady amplitude.

### Exercises and solutions

**1. Find the resonant angular frequency of $y''+4y=\cos\omega t$.**

Hint: Read the natural frequency.

Answer: $2$.

- $\omega_0^2=4$; choose the positive frequency.

**2. Give one particular solution of $y''+4y=\cos2t$.**

Hint: Use the resonance formula.

Answer: $t\sin2t/4$.

- $F=1,\omega_0=2$.

**3. Can homogeneous terms cancel long-term linear resonant growth for arbitrary initial data?**

Hint: Homogeneous terms are bounded.

Answer: No.

- Bounded sine-cosine terms cannot cancel a persistently growing envelope.

**4. Does zero forcing still produce this forced resonant growth?**

Hint: Check the forcing amplitude.

Answer: No.

- The resonant particular coefficient vanishes with the forcing.

Prerequisites: Undetermined coefficients and resonance corrections, Damped oscillation and critical damping.

## 5.5 Frequency response, amplitude, and phase

*How the steady state follows periodic forcing*

### The idea

A positively damped linear system eventually oscillates at the forcing frequency, with frequency-dependent amplitude and phase.

### Intuition

Driving the same system at different rates gives different amplification and delay.

### Another explanation

Separate startup from long-term response before comparing an amplitude curve with an individual initial-value trajectory.

### Quick check

With positive damping, what determines the long-term periodic-response frequency?

A. The real part of a homogeneous root
B. Initial velocity
C. Periodic forcing

Answer: C. The initial-data transient decays.

### What is the transient?

The homogeneous solution carries initial data. With positive mass, stiffness, and damping, it decays and describes startup.

### What is the steady state?

For sinusoidal forcing, write a particular solution as $A\cos(\omega t-\phi)$. Amplitude is nonnegative; phase requires the correct quadrant.

### Where does the peak occur?

If $c^2<2mk$, displacement amplitude peaks at $\sqrt{k/m-c^2/(2m^2)}$, not always at the natural frequency. Strong damping removes a positive-frequency peak.

### Definition and conditions

Frequency response, amplitude, and phase

$$
A(\omega)=\frac F{\sqrt{(k-m\omega^2)^2+c^2\omega^2}},\quad\phi=\operatorname{atan2}(c\omega,k-m\omega^2)
$$

- Assume $m,k,c>0,F\ge0,\omega\ge0$. Zero frequency means constant input with steady displacement $F/k$.

### Derivation

Use a complex trial solution.

$$
\widetilde y=H e^{i\omega t}
$$

Substitute to obtain the complex response.

$$
H=\frac F{k-m\omega^2+ic\omega}
$$

Its magnitude and argument give amplitude and lag.

$$
H=Ae^{-i\phi}\Rightarrow y_{ss}=A\cos(\omega t-\phi)
$$

### Interactive diagram

How do the amplitude peak's position and height change with damping?

Horizontal is driving angular frequency and vertical is steady displacement amplitude. The marker is not a time-evolution point. Phase readouts use the correct quadrant.

Online diagram: #/lesson/ode-frequency-response?view=visual

### Guided experiment

1. **Weak damping** Set driving angular frequency $\omega$ to $1$ and damping coefficient $c$ to $0.2$.

Preset observation: Response near natural frequency is large but finite.

2. **More damping** Set driving angular frequency $\omega$ to $1$ and damping coefficient $c$ to $1$.

Preset observation: The same-frequency amplitude decreases.

3. **Static** Set driving angular frequency $\omega$ to $0$ and damping coefficient $c$ to $1$.

Preset observation: Static displacement is one and lag zero.

### Worked examples

#### Example 1: Damped response at natural frequency

Set $m=k=c=F=1,\omega=1$.

- The denominator has zero real part and imaginary part one.
- Amplitude one, lag $\pi/2$.

**Answer: Steady response $y=\sin t$.**

#### Example 2: Static input

Set $m=1,k=4,c=2,F=8,\omega=0$.

- The forcing is constant eight.
- Steady derivatives vanish, so $4y=8$.

**Answer: Steady displacement is two.**

### Common mistakes

- **A damped peak always occurs at the natural frequency.** The displacement peak also depends on damping.

- **A steady-state formula automatically matches arbitrary initial data.** Add decaying homogeneous terms to match them.

### Exercises and solutions

**1. Find the steady amplitude for $m=k=1,c=2,F=1,\omega=1$.**

Hint: Only the damping term remains in the denominator.

Answer: $1/2$.

- The denominator is two.

**2. Does the long-term steady state retain initial-data dependence with positive damping?**

Hint: Check decay of homogeneous terms.

Answer: No lasting difference remains.

- Homogeneous roots have negative real parts, so initial responses disappear.

**3. Is ordinary arctangent enough without checking quadrants?**

Hint: The denominator's real part may be negative.

Answer: Use a quadrant-aware phase calculation.

- An arctangent of the ratio can lose the phase quadrant.

**4. Does $m=k=1,c=2$ have a positive-frequency displacement peak?**

Hint: Check the peak criterion.

Answer: No.

- $c^2=4>2mk$; amplitude decreases from its static value.

Prerequisites: Forced oscillation and resonance.

## Chapter review

Try independently before reading the solutions.

**1. Find a resonant particular solution of $y''+9y=3\cos3t$.**

Hint: Forcing matches the natural frequency.

Answer: $t\sin3t/2$.

- The coefficient is $F/(2\omega_0)=3/6$.

**2. Find critical damping for mass one and stiffness nine.**

Hint: Use the discriminant equality.

Answer: $6$.

- $c=2\sqrt{mk}=6$.

**3. Find the steady amplitude for $m=k=F=1,c=3,\omega=1$.**

Hint: The denominator's real part vanishes.

Answer: $1/3$.

- Amplitude is $1/(c\omega)$.

# Chapter 6 · Higher-order linear equations

Higher constant-coefficient order, Euler-Cauchy equations, and boundary conditions have distinct structures.

Goals:
- Handle higher root multiplicities
- Convert high-order equations into first-order systems
- Distinguish initial and boundary problems

## 6.1 Higher-order constant-coefficient linear equations

*Order counts the required degrees of freedom*

### The idea

Roots and multiplicities construct every independent homogeneous solution, with total count equal to the order.

### Intuition

Time powers supply repeated-root directions; conjugate roots combine into real oscillations.

### Another explanation

Higher order keeps the same ideas but requires more initial data and a larger solution space.

### Quick check

Which time powers accompany a triple real root?

A. Constant only
B. Powers zero, one, and two
C. Powers one, two, and three

Answer: B. Begin at power zero, giving three independent directions.

### How many constants are needed?

A standard order-$n$ linear equation with continuous coefficients needs $n$ initial data: the function through derivative order $n-1$.

### How are repeated roots organized?

A real root $r$ of multiplicity $m$ supplies $e^{rt},te^{rt},\ldots,t^{m-1}e^{rt}$.

### What about forcing?

Add one particular solution to every homogeneous solution. Undetermined coefficients and resonance corrections extend to higher constant-coefficient order. Write $D=d/dt$; polynomial $P(D)$ denotes the associated differential operator.

### Definition and conditions

Higher-order constant-coefficient linear equations

$$
P(r)=0,\quad r\text{ of multiplicity }m\Rightarrow t^j e^{rt},\quad j=0,\ldots,m-1
$$

- The constant-coefficient leading term is nonzero. Combine nonreal roots in conjugate pairs for real coefficients.

### Derivation

Write the differential operator as a polynomial.

$$
P(D)y=0
$$

Use the derivative eigenproperty of exponentials.

$$
P(D)e^{rt}=P(r)e^{rt}
$$

Repeated roots need additional generalized directions.

$$
(D-r)^m[t^j e^{rt}]=0\quad(j<m)
$$

### Interactive diagram

Does equal initial function value make the three solutions dependent?

Plot three independent fundamental solutions. Markers give their current values, not solutions of three different equations.

Online diagram: #/lesson/ode-higher-linear?view=visual

### Guided experiment

1. **Starting point** Set observation time $t$ to $0$.

Preset observation: All three function values are one, but their derivative data differ.

2. **Advance one time unit** Set observation time $t$ to $1$.

Preset observation: The constant direction stays fixed while the others separate.

3. **Longer time** Set observation time $t$ to $3$.

Preset observation: The growing direction expands visibly.

### Worked examples

#### Example 1: Three distinct roots

Solve $y'''-y'=0$.

- The characteristic polynomial is $r(r-1)(r+1)$.
- All three roots are distinct.

**Answer: $y=C_0+C_1e^t+C_2e^{-t}$.**

#### Example 2: A triple root

Solve $y'''=0$.

- Root zero has multiplicity three.
- Repeated integration also gives a quadratic polynomial.

**Answer: $y=C_0+C_1t+C_2t^2$.**

### Common mistakes

- **Repeat the same exponential once per root multiplicity.** Different powers of time are needed for independence.

- **Every higher-order equation is solved by a characteristic polynomial.** This method relies on constant-coefficient linear structure.

### Exercises and solutions

**1. Find the general solution of $(D-2)^3y=0$.**

Hint: Include three powers of time.

Answer: $e^{2t}(C_0+C_1t+C_2t^2)$.

- Root two has multiplicity three.

**2. How many initial data does a standard fourth-order linear problem usually need?**

Hint: Count through the third derivative.

Answer: $4$.

- The function and derivatives one through three give four data.

**3. Find the real general solution of $y''''+y''=0$.**

Hint: Factor $r^2(r^2+1)$.

Answer: $C_0+C_1t+C_2\cos t+C_3\sin t$.

- Zero is a double root, together with plus and minus the imaginary unit.

**4. What usually went wrong if a third-order general solution has only two constants?**

Hint: Compare solution-space dimension.

Answer: One independent solution is probably missing.

- A standard third-order homogeneous space needs three independent directions.

Prerequisites: Repeated roots and reduction of order.

## 6.2 Euler-Cauchy equations

*Use logarithmic time for power coefficients*

### The idea

Euler-Cauchy coefficients match derivative orders by powers, allowing power trials or logarithmic-time simplification.

### Intuition

Exponentials suit translation scales; powers suit multiplicative scales. A logarithm turns multiplication into addition.

### Another explanation

Choose a variable fitting the equation's scaling rather than forcing an inappropriate constant-coefficient formula.

### Quick check

Which logarithmic variable fits an Euler-Cauchy equation?

A. $s=\ln t$
B. $s=e^t$
C. $s=t^2$

Answer: A. Logarithms turn power scaling into a constant-coefficient relation.

### Which trial works?

For $t^2y''+aty'+by=0$ on positive time, try $t^r$ to obtain $r(r-1)+ar+b=0$.

### Why not the usual characteristic polynomial?

The second derivative contributes $r(r-1)$ rather than $r^2$ because powers differentiate using falling factors.

### Zero and repeated roots

The leading coefficient vanishes at zero. Separate positive and negative intervals. A repeated root adds $\ln t$; complex roots oscillate in logarithmic time.

### Definition and conditions

Euler-Cauchy equations

$$
r(r-1)+ar+b=0,\qquad t>0
$$

- $a,b$ are constants. We work on positive time. On negative intervals use $\lvert t\rvert$ and $\ln\lvert t\rvert$, without automatically crossing zero.

### Derivation

Set $s=\ln t$ and rename the function $Y(s)$.

$$
ty'=Y_s
$$

On differentiating again, retain the first-derivative term.

$$
t^2y''=Y_{ss}-Y_s
$$

The equation becomes constant coefficient.

$$
Y_{ss}+(a-1)Y_s+bY=0
$$

### Interactive diagram

How does changing the logarithmic coefficient affect the positive-time curve?

Compare constant-logarithmic combinations. Time zero is a coefficient singularity and is not crossed.

Online diagram: #/lesson/ode-euler-cauchy?view=visual

### Guided experiment

1. **A constant solution** Set logarithmic coefficient $D$ to $0$ and positive time $t$ to $1$.

Preset observation: Only the constant direction remains.

2. **Positive logarithmic direction** Set logarithmic coefficient $D$ to $1$ and positive time $t$ to $2$.

Preset observation: The function increases with positive time.

3. **Opposite direction** Set logarithmic coefficient $D$ to $-1$ and positive time $t$ to $2$.

Preset observation: Another initial direction for the same equation.

### Worked examples

#### Example 1: Distinct powers

Solve $t^2y''-2y=0$ for $t>0$.

- The indicial polynomial is $r(r-1)-2=(r-2)(r+1)$.
- Distinct powers give independent solutions.

**Answer: $y=Ct^2+D/t$.**

#### Example 2: A repeated logarithmic root

Solve $t^2y''+ty'=0$ for $t>0$.

- The indicial polynomial is $r^2=0$.
- A double zero root gives a constant and a logarithm.

**Answer: $y=C+D\ln t$.**

### Common mistakes

- **The indicial second-derivative term is always the root squared.** A power's second derivative gives a falling factorial.

- **Power solutions automatically cover all real times.** State branches and exclude singular points explicitly.

### Exercises and solutions

**1. Find the indicial roots of $t^2y''+3ty'+y=0$.**

Hint: Write $r(r-1)+3r+1$.

Answer: A double root at minus one.

- This becomes $(r+1)^2$.

**2. Find its general solution.**

Hint: Include a logarithmic factor for repetition.

Answer: $y=t^{-1}(C+D\ln t)$.

- The power is minus one.

**3. Find real solutions of $t^2y''+ty'+y=0$ on positive time.**

Hint: The indicial equation is $r^2+1$.

Answer: $C\cos(\ln t)+D\sin(\ln t)$.

- Use sine and cosine of logarithmic time.

**4. Can you directly extend the positive-time solution uniquely through zero?**

Hint: The leading coefficient vanishes at zero.

Answer: No direct conclusion.

- Standard linear existence and uniqueness fail there; analyze separately.

Prerequisites: Higher-order constant-coefficient linear equations.

## 6.3 First-order systems and state variables

*Put lower derivatives into the state*

### The idea

A higher-order equation becomes a first-order system using the function and lower derivatives as state.

### Intuition

Recording position and velocity together describes what happens next without second-order notation.

### Another explanation

A state records the information needed now. The equation gives its rate of change.

### Quick check

What does the state of second-order motion usually contain?

A. Two copies of position
B. Time and position
C. Position and velocity

Answer: C. Velocity supplies the additional information needed to predict motion.

### How does second order become first order?

Set $x_1=y,x_2=y'$. Then $x_1'=x_2$, and the original equation gives the other derivative.

### What about higher order?

Use $y,y',\ldots,y^{(n-1)}$. Earlier derivatives equal the next state component; the last uses the original equation.

### A state adds no physical constraint

This is the same problem rewritten. Initial derivatives become state components, providing a unified form for matrices and phase planes.

### Definition and conditions

First-order systems and state variables

$$
y''+cy'+ky=g(t)\Longleftrightarrow\begin{cases}x_1'=x_2,\\x_2'=-kx_1-cx_2+g(t).\end{cases}
$$

- The highest derivative has been isolated; initial data correspond to $x_1(t_0)=y_0,x_2(t_0)=v_0$.

### Derivation

Define the state.

$$
x_1=y,\quad x_2=y'
$$

The first relation follows from the definition.

$$
x_1'=x_2
$$

The second follows from the motion equation.

$$
\mathbf x'=\begin{pmatrix}0&1\\-k&-c\end{pmatrix}\mathbf x+\begin{pmatrix}0\\g(t)\end{pmatrix}
$$

### Interactive diagram

Do equal positions but different velocities lead to the same trajectory?

Horizontal is position and vertical velocity. The bright point moves along the phase trajectory with time, using the same oscillator as the time plot.

Online diagram: #/lesson/ode-system-reduction?view=visual

### Guided experiment

1. **Release from rest** Set initial position $x_0$ to $1$, initial velocity $v_0$ to $0$, and observation time $t$ to $1$.

Preset observation: Initial acceleration points toward negative position.

2. **Push from the origin** Set initial position $x_0$ to $0$, initial velocity $v_0$ to $1$, and observation time $t$ to $1$.

Preset observation: Equal initial positions with different velocities give different trajectories.

3. **Zero state** Set initial position $x_0$ to $0$, initial velocity $v_0$ to $0$, and observation time $t$ to $3$.

Preset observation: The origin stays at equilibrium.

### Worked examples

#### Example 1: An oscillator system

Write $y''+4y=0$ as a first-order system.

- Use position and velocity as the two states.
- Acceleration is minus four times position.

**Answer: $\mathbf x'=\begin{pmatrix}0&1\\-4&0\end{pmatrix}\mathbf x$.**

#### Example 2: A third-order system

Write $y'''+2y'=t$ as a first-order system.

- Set $x_1=y,x_2=y',x_3=y''$.
- Its last equation is $x_3'=t-2x_2$.

**Answer: $x_1'=x_2,x_2'=x_3,x_3'=t-2x_2$.**

### Common mistakes

- **Rewriting as a system changes the original solutions.** The state definition gives a one-to-one correspondence.

- **A phase-plane curve is the function's time graph.** Phase-plane axes are state components; time parameterizes the path.

### Exercises and solutions

**1. How many components does a second-order state usually need?**

Hint: Record the function and first derivative.

Answer: $2$.

- Two components.

**2. In $y''=-y$, find the velocity vector at state $(1,0)$.**

Hint: Substitute into both system components.

Answer: $(0,-1)$.

- $x_1'=0,x_2'=-1$.

**3. Is the phase plane's second coordinate time?**

Hint: Read the state definition.

Answer: No; it is velocity.

- It is the original function's derivative.

**4. Which state corresponds to initial data $y(0)=2,y'(0)=-3$?**

Hint: Follow the component order.

Answer: $\mathbf x(0)=(2,-3)^T$.

- Position first, velocity second.

Prerequisites: Higher-order constant-coefficient linear equations, Matrices, transposes, and multiplication.

## 6.4 Boundary conditions and eigenvalue problems

*Two endpoints differ from one initial point*

### The idea

Conditions at different locations can give no solution, multiple solutions, or nonzero solutions only for selected parameters.

### Intuition

A trajectory starting at one endpoint may miss the requirement at the other.

### Another explanation

Initial data fix a start at one point; boundary data constrain different locations. Their existence and uniqueness results cannot be interchanged.

### Quick check

What distinguishes a boundary-value problem?

A. No interval is needed
B. Conditions may be imposed at different endpoints
C. It has no derivatives

Answer: B. Distributed conditions change solvability and uniqueness.

### Why does uniqueness change?

The second-order initial-value theorem fixes position and velocity at one time. It does not directly apply to function values at two endpoints.

### A counterexample

$y''+y=0,y(0)=y(\pi)=0$ permits any multiple of sine, so infinitely many solutions exist.

### How do eigenparameters arise?

For $-y''=\lambda y$, zero endpoint values select allowed frequencies and discrete eigenvalues. This leads into PDE separation of variables later.

### Definition and conditions

Boundary conditions and eigenvalue problems

$$
-y''=\lambda y,\quad y(0)=y(L)=0\Rightarrow\lambda_n=(n\pi/L)^2,\quad y_n=\sin(n\pi t/L)
$$

- Assume $L>0$ and seek a nonzero classical solution with $n=1,2,\ldots$. Zero is not an eigenfunction.

### Derivation

For a positive parameter, write sine-cosine solutions.

$$
y=C\cos\sqrt\lambda t+D\sin\sqrt\lambda t
$$

The left condition removes cosine; the right restricts frequency.

$$
C=0,\quad D\sin(\sqrt\lambda L)=0
$$

A nonzero solution requires the sine factor to vanish. Zero and negative parameters give only zero solutions.

$$
\sqrt\lambda L=n\pi\Rightarrow\lambda_n=(n\pi/L)^2
$$

### Interactive diagram

How do interior zeros and eigenvalues change with mode number?

Fix length one and compare allowed nonzero boundary modes. Horizontal is position, not initial-value evolution time.

Online diagram: #/lesson/ode-boundary-values?view=visual

### Guided experiment

1. **First mode** Set mode number $n$ to $1$ and position $t$ to $0.5$.

Preset observation: One interior antinode.

2. **Second mode** Set mode number $n$ to $2$ and position $t$ to $0.5$.

Preset observation: The midpoint becomes an interior zero.

3. **Third mode** Set mode number $n$ to $3$ and position $t$ to $0.5$.

Preset observation: More spatial oscillation corresponds to a larger eigenvalue.

### Worked examples

#### Example 1: An interval of length one

Find the smallest eigenvalue of $-y''=\lambda y,y(0)=y(1)=0$.

- A nonzero solution requires $\sqrt\lambda=n\pi$.
- The smallest positive integer is one.

**Answer: $\lambda_1=\pi^2$.**

#### Example 2: Incompatible boundary data

Does $y''+y=0,y(0)=0,y(\pi)=1$ have a solution?

- The left condition forces the form $D\sin t$.
- Every such solution is zero at the right endpoint.

**Answer: No solution.**

### Common mistakes

- **Any two conditions make a second-order problem unique.** Their locations and structure matter too.

- **Zero can be an eigenfunction for any parameter.** Eigenfunctions are nonzero.

### Exercises and solutions

**1. Solve $y''=0,y(0)=1,y(2)=3$.**

Hint: Write an affine function.

Answer: $y=1+t$.

- Its intercept and slope are both one.

**2. Why exclude the zero function in an eigenvalue problem?**

Hint: Zero satisfies every parameter value.

Answer: Eigenfunctions are nonzero by definition.

- Allowing it would select no parameter.

**3. If interval length doubles, by what factor does the smallest Dirichlet eigenvalue change?**

Hint: Eigenvalues scale inversely with length squared.

Answer: $1/4$.

- $(L/(2L))^2=1/4$.

**4. With zero endpoints, does $\lambda=0$ have a nonzero eigenfunction?**

Hint: Apply the conditions to an affine solution.

Answer: No.

- Both coefficients must vanish.

Prerequisites: First-order systems and state variables.

## Chapter review

Try independently before reading the solutions.

**1. Solve $y''''=0$.**

Hint: Integrate four times.

Answer: $C_0+C_1t+C_2t^2+C_3t^3$.

- Four free coefficients give a cubic polynomial.

**2. Solve $t^2y''-ty'=0$ on positive time.**

Hint: Its indicial equation is $r(r-2)$.

Answer: $C+Dt^2$.

- The roots are zero and two.

**3. With $-y''=\lambda y$ and zero endpoints on length two, find the smallest eigenvalue.**

Hint: Apply the Dirichlet formula.

Answer: $\pi^2/4$.

- Use mode one and length two.

# Chapter 7 · Laplace transforms

Start from the integral definition and progressively handle derivatives, switched inputs, impulses, and convolution.

Goals:
- Calculate transforms and inverses
- Handle switches and impulses
- Represent general responses by convolution

## 7.1 Laplace transforms and convergence

*Weight the future exponentially*

### The idea

A Laplace transform integrates the future against a decaying exponential, turning a time function into a function of a transform variable.

### Intuition

Exponential weighting suppresses distant contributions; it must be strong enough for convergence.

### Another explanation

The transform is first an integral. Tables and algebra must respect its convergence conditions.

### Quick check

What does a convergence domain specify?

A. Parameters for which the integral converges
B. The function has only one frequency
C. The time domain

Answer: A. Read the transform expression together with convergence information.

### What is the definition?

We use the one-sided transform, integrating from zero to infinity. It records initial values and causal inputs naturally.

### When does it exist?

Piecewise continuity and exponential order are common sufficient conditions. If eventual growth is bounded by $Me^{at}$, convergence holds for $\operatorname{Re}s>a$.

### Not every function qualifies

For example, $e^{t^2}$ grows faster than any linear exponential on positive time, fails this sufficient condition, and its usual real-parameter transform integral diverges.

### Definition and conditions

Laplace transforms and convergence

$$
\mathcal L\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt
$$

- Define the transform where the integral converges absolutely. We first calculate with real $s$ and then state the corresponding complex half-plane.

### Derivation

Substitute an exponential function.

$$
\mathcal L\{e^{at}\}=\int_0^\infty e^{-(s-a)t}dt
$$

Convergence requires decay rather than growth.

$$
\operatorname{Re}s>a
$$

Evaluate the endpoints.

$$
\mathcal L\{e^{at}\}=\frac1{s-a}
$$

### Interactive diagram

Does the integral converge when the weighting decay rate is no greater than signal growth?

Display the integrand and truncated integral. The infinite transform converges only when the real parameter exceeds the signal growth rate; a finite integral is not the full transform.

Online diagram: #/lesson/ode-laplace-definition?view=visual

### Guided experiment

1. **Convergent region** Set signal exponent $a$ to $0.5$, real transform parameter $s$ to $2$, and truncation limit $T$ to $6$.

Preset observation: The kernel decays and the truncated integral approaches the transform.

2. **Threshold** Set signal exponent $a$ to $1$, real transform parameter $s$ to $1$, and truncation limit $T$ to $6$.

Preset observation: The integrand is one and its integral grows linearly with the upper limit.

3. **Divergent region** Set signal exponent $a$ to $1$, real transform parameter $s$ to $0.5$, and truncation limit $T$ to $6$.

Preset observation: The integrand grows. A finite truncated value is not the infinite integral.

### Worked examples

#### Example 1: A constant function

Find the transform of constant one.

- Integrate $e^{-st}$.
- For positive real parameters the upper-end contribution vanishes.

**Answer: $1/s$, with complex domain $\operatorname{Re}s>0$.**

#### Example 2: Exponential derivatives

Find the transform of $e^{-2t}$.

- The integrand's exponential is $e^{-(s+2)t}$.
- Integration gives a reciprocal, requiring real part greater than minus two.

**Answer: $1/(s+2)$, $\operatorname{Re}s>-2$.**

### Common mistakes

- **If the algebraic expression exists, the transform integral converges.** Retain the convergence domain too.

- **No growing function has a transform.** Exponential growth can converge under a sufficiently strong weight.

### Exercises and solutions

**1. Find the transform and convergence domain of $e^{3t}$.**

Hint: Subtract the growth rate from the parameter.

Answer: $1/(s-3),\operatorname{Re}s>3$.

- The integral is $1/(s-3)$, requiring real part greater than three.

**2. Find the transform of $2+e^{-t}$.**

Hint: Use linearity.

Answer: $2/s+1/(s+1)$, on common domain $\operatorname{Re}s>0$.

- The two terms give $2/s$ and $1/(s+1)$.

**3. Can the algebraic value of $1/(s-3)$ at $s=0$ be called the transform integral?**

Hint: Check convergence.

Answer: No.

- The integral diverges there; algebraic continuation is not the original integral.

**4. Which time interval does the one-sided transform integrate?**

Hint: Read its definition.

Answer: $[0,\infty)$.

- Zero to positive infinity.

Prerequisites: Boundary conditions and eigenvalue problems.

## 7.2 Basic transforms, shifts, and inverses

*Split expressions into recognizable parts*

### The idea

Linearity, exponential shifts, and partial fractions reduce many inversions to basic functions.

### Intuition

Identify the denominator structure before deciding between exponential and oscillatory behavior.

### Another explanation

Read each inverse-transform term as a familiar time behavior and combine them.

### Quick check

Replacing $s$ by $s-a$ in transform space corresponds to which time operation?

A. Differentiate
B. Delay until a later time
C. Multiply by $e^{at}$

Answer: C. Combining exponential weights derives the rule directly.

### Where does the table come from?

The definition or integration by parts gives $\mathcal L\{t^n\}=n!/s^{n+1}$ and the sine-cosine transforms.

### Exponential shifting

Multiplication by $e^{at}$ replaces the transform parameter by $s-a$ and shifts the convergence domain too.

### How do you invert?

Decompose rational expressions into simple poles, repeated poles, or irreducible quadratics. Divide polynomials first when needed; our classical-function inversions mainly use proper fractions.

### Definition and conditions

Basic transforms, shifts, and inverses

$$
\mathcal L\{e^{at}f(t)\}=F(s-a),\quad\mathcal L\{\sin\omega t\}=\frac\omega{s^2+\omega^2}
$$

- Apply rules in their convergence domains. In the piecewise-continuous exponential-order class, the inverse is unique apart from values at jumps.

### Derivation

Combine the exponential with the kernel.

$$
e^{-st}e^{at}=e^{-(s-a)t}
$$

Split into simple fractions.

$$
\frac1{(s+1)(s+2)}=\frac1{s+1}-\frac1{s+2}
$$

Invert term by term.

$$
\mathcal L^{-1}\left\{\frac1{(s+1)(s+2)}\right\}=e^{-t}-e^{-2t}
$$

### Interactive diagram

Does the integral converge when the weighting decay rate is no greater than signal growth?

Display the integrand and truncated integral. The infinite transform converges only when the real parameter exceeds the signal growth rate; a finite integral is not the full transform.

Online diagram: #/lesson/ode-laplace-rules?view=visual

### Guided experiment

1. **Convergent region** Set signal exponent $a$ to $0.5$, real transform parameter $s$ to $2$, and truncation limit $T$ to $6$.

Preset observation: The kernel decays and the truncated integral approaches the transform.

2. **Threshold** Set signal exponent $a$ to $1$, real transform parameter $s$ to $1$, and truncation limit $T$ to $6$.

Preset observation: The integrand is one and its integral grows linearly with the upper limit.

3. **Divergent region** Set signal exponent $a$ to $1$, real transform parameter $s$ to $0.5$, and truncation limit $T$ to $6$.

Preset observation: The integrand grows. A finite truncated value is not the infinite integral.

### Worked examples

#### Example 1: A shifted sine

Invert $2/((s+1)^2+4)$.

- Numerator two matches angular frequency two.
- Shifting the parameter by plus one gives time factor $e^{-t}$.

**Answer: $e^{-t}\sin2t$.**

#### Example 2: A repeated pole

Invert $3/(s-2)^2$.

- $1/s^2$ corresponds to the time function.
- Shift the parameter right by two and multiply by three.

**Answer: $3te^{2t}$.**

### Common mistakes

- **Shifting a denominator only translates the time function horizontally.** Parameter shifts multiply by exponentials. Time delay follows a different rule.

- **The sine-transform numerator may omit its frequency.** That factor determines amplitude.

### Exercises and solutions

**1. Find the transform of $\cos3t$.**

Hint: A cosine's numerator is the parameter.

Answer: $s/(s^2+9)$, $\operatorname{Re}s>0$.

- The basic formula is $s/(s^2+\omega^2)$.

**2. Find the transform of $t^2$.**

Hint: Use the factorial formula.

Answer: $2/s^3$, $\operatorname{Re}s>0$.

- Two factorial equals two.

**3. Invert $1/(s+4)$.**

Hint: Recognize an exponential pole.

Answer: $e^{-4t}$.

- The exponent rate is minus four.

**4. Invert $s/(s^2+4)$.**

Hint: Match the cosine formula.

Answer: $\cos2t$.

- Its angular frequency is two.

Prerequisites: Laplace transforms and convergence.

## 7.3 Solving initial-value problems with Laplace transforms

*Initial data enter the algebraic equation*

### The idea

Derivative transforms retain initial data as algebraic terms, turning the differential solve into a transform-space algebraic solve.

### Intuition

Integration by parts records the starting point in endpoint terms.

### Another explanation

Laplace methods organize the solve into algebra while endpoint terms retain control of the starting state.

### Quick check

Which initial data appear in a second-derivative transform?

A. Only function value
B. Function value and first derivative
C. First and second derivatives

Answer: B. Both initial data needed for second order enter the algebraic expression.

### The derivative rule

With $Y=\mathcal L\{y\}$, we have $\mathcal L\{y'\}=sY-y(0^+)$.

### Second order retains another initial value

Applying the rule again gives $\mathcal L\{y''\}=s^2Y-sy(0^+)-y'(0^+)$.

### How do you check the result?

After inversion, check both initial data and the original equation. For switched forcing, check continuity conditions at each switch too.

### Definition and conditions

Solving initial-value problems with Laplace transforms

$$
\mathcal L\{y^{(n)}\}=s^nY-\sum_{j=0}^{n-1}s^{n-1-j}y^{(j)}(0^+)
$$

- Derivatives need appropriate piecewise continuity and exponential growth control. Endpoint values are right limits; impulses require a separate distributional interpretation.

### Derivation

Integrate the first derivative by parts.

$$
\int_0^\infty e^{-st}y'dt=[e^{-st}y]_0^\infty+sY
$$

The infinite boundary term vanishes in a suitable convergence half-plane.

$$
\mathcal L\{y'\}=sY-y(0^+)
$$

Apply the rule once more.

$$
\mathcal L\{y''\}=s(sY-y(0^+))-y'(0^+)
$$

### Interactive diagram

Does a response starting from zero immediately equal the input?

Blue is constant input; gold is the analytic response with zero initial data. Compare transform expression $Y=1/[s(s+1)]$.

Online diagram: #/lesson/ode-laplace-ivp?view=visual

### Guided experiment

1. **Starting point** Set observation time $t$ to $0$.

Preset observation: The output satisfies zero initial data.

2. **One time unit** Set observation time $t$ to $1$.

Preset observation: Output has risen but has not reached steady state.

3. **Later** Set observation time $t$ to $4$.

Preset observation: Output continues approaching one.

### Worked examples

#### Example 1: First order with constant input

Solve $y'+y=1,y(0)=0$.

- Transforming gives $(s+1)Y=1/s$.
- Partial fractions give $Y=1/s-1/(s+1)$.

**Answer: $y=1-e^{-t}$.**

#### Example 2: Second-order free motion

Solve $y''+4y=0,y(0)=0,y'(0)=3$.

- Transforming gives $(s^2+4)Y=3$.
- Match the sine formula.

**Answer: $y=3\sin2t/2$.**

### Common mistakes

- **Transforming a derivative only multiplies by the parameter.** A one-sided transform also contains initial-data endpoint terms.

- **The minus sign on initial velocity is optional.** It changes the entire initial response.

### Exercises and solutions

**1. With initial value two, what is the transform of $y'$?**

Hint: Keep the endpoint term.

Answer: $sY-2$.

- A derivative transforms to parameter times transform minus initial value.

**2. Given $y(0)=1,y'(0)=-1$, find the second-derivative transform.**

Hint: Substitute each term.

Answer: $s^2Y-s+1$.

- $s^2Y-s\cdot1-(-1)$.

**3. Solve $y'+2y=0,y(0)=5$.**

Hint: Write its transform equation first.

Answer: $y=5e^{-2t}$.

- $(s+2)Y=5$ inverts to an exponential.

**4. Should initial values be checked after transforming?**

Hint: Algebra mistakes can omit endpoint terms.

Answer: Yes.

- Evaluate and differentiate the result for an independent check.

Prerequisites: Basic transforms, shifts, and inverses.

## 7.4 Step inputs and time delay

*When does the switch turn on?*

### The idea

Steps record when an input begins. The delay rule moves both the switch and the function's internal clock.

### Intuition

A switched response is the entire zero-starting process shifted later.

### Another explanation

Measure elapsed time since switching and express the function in that variable to avoid shift mistakes.

### Quick check

What is the standard time form of the second shifting theorem?

A. $H(t-a)f(t-a)$
B. $f(t)-a$
C. $H(t-a)f(t)$

Answer: A. Delay the switch and internal time together.

### The step function

$H(t-a)$ is zero before switching and one afterward. Its single-point value does not affect the ordinary transform integral.

### The delay rule

$H(t-a)f(t-a)$ transforms to $e^{-as}F(s)$. If the expression is $H(t-a)f(t)$, first rewrite it using elapsed time after the delay.

### What happens at a switch?

Bounded step forcing usually keeps second-order position and velocity continuous while acceleration may jump. A first-order state stays continuous while its derivative may jump.

### Definition and conditions

Step inputs and time delay

$$
\mathcal L\{H(t-a)f(t-a)\}=e^{-as}F(s)
$$

- Assume $a\ge0$ and causal delay. Interpret switches piecewise; equalities do not depend on the step value at a single point.

### Derivation

Before switching, the integral contributes zero.

$$
\int_a^\infty e^{-st}f(t-a)dt
$$

Introduce elapsed time after the delay.

$$
u=t-a
$$

Pull out the constant factor.

$$
e^{-as}\int_0^\infty e^{-su}f(u)du=e^{-as}F(s)
$$

### Interactive diagram

Does delaying the switch delay the whole response too?

Before switching the response is zero; afterward it is the delayed first-order response. Disconnected input segments represent the jump without drawing a false ramp.

Online diagram: #/lesson/ode-step-input?view=visual

### Guided experiment

1. **Before switching** Set switch time $a$ to $2$ and observation time $t$ to $1$.

Preset observation: Input and response are both zero.

2. **Just switched on** Set switch time $a$ to $1$ and observation time $t$ to $1$.

Preset observation: Output remains continuously zero while its right derivative starts changing.

3. **After switching** Set switch time $a$ to $1$ and observation time $t$ to $3$.

Preset observation: Output grows according to the two elapsed time units.

### Worked examples

#### Example 1: A delayed ramp

Find the transform of $H(t-2)(t-2)$.

- Recognize a ramp starting at time two.
- The unshifted function transforms to $1/s^2$.

**Answer: $e^{-2s}/s^2$.**

#### Example 2: Switched driving

Solve $y'+y=H(t-1),y(0)=0$.

- The unit-step response starting at zero is $1-e^{-t}$.
- Delay by one unit and set earlier values to zero.

**Answer: $y=H(t-1)(1-e^{-(t-1)})$.**

### Common mistakes

- **Multiplying by a step lets any function use the delay rule directly.** The internal function must use the delayed time variable.

- **Steps and impulses are the same input.** A step has finite height; an impulse represents concentrated area.

### Exercises and solutions

**1. Find the transform of $H(t-3)$.**

Hint: Use delayed constant input.

Answer: $e^{-3s}/s$.

- Constant one transforms to $1/s$.

**2. Can $H(t-2)t$ directly be written as $e^{-2s}/s^2$?**

Hint: After switching, time has not restarted at zero in the given expression.

Answer: No; its transform is $e^{-2s}(1/s^2+2/s)$.

- $t=(t-2)+2$.

**3. Does bounded step forcing make a mass's position jump instantly?**

Hint: Integrating continuous velocity gives no position jump.

Answer: No.

- A finite step changes piecewise acceleration values only.

**4. How do you write a unit pulse turning on at $t=1$ and off at $t=4$?**

Hint: Subtract the two switches.

Answer: $H(t-1)-H(t-4)$.

- The first turns it on and the second off.

Prerequisites: Solving initial-value problems with Laplace transforms.

## 7.5 Impulses and jump conditions

*Brief action with finite total impulse*

### The idea

An impulse is an ideal concentrated input defined through its integral action, not an ordinary infinitely tall function.

### Intuition

Shorten the action time while preserving total area; a finite velocity jump can remain.

### Another explanation

Integrating across the impulse isolates the finite change that survives.

### Quick check

Which quantity jumps when a standard mass-spring model receives finite impulse?

A. Mass
B. Position
C. Velocity

Answer: C. Velocity change equals impulse divided by mass.

### How is it defined?

A Dirac impulse integrates against a test function to select its value at one point. It is not an ordinary function for pointwise substitution.

### What jumps in a mass system?

For $my''+cy'+ky=J\delta(t-a)$, position is continuous and velocity jumps by $J/m$. Interpret these statements distributionally or by integration across the impulse.

### Our convention

Take impulse time $a>0$ and give initial data immediately right of time zero, avoiding ambiguity between an initial impulse and initial-state conventions.

### Definition and conditions

Impulses and jump conditions

$$
\int_{a-\varepsilon}^{a+\varepsilon}\delta(t-a)dt=1,\quad m[y']_{a^-}^{a^+}=J,\quad[y]_{a^-}^{a^+}=0
$$

- Use a positive mass and finite constant-coefficient second-order model with an impulse at $a>0$. Solutions are causal distributions; the nonimpulsive forcing is locally bounded.

### Derivation

Integrate the equation across a small impulse neighborhood.

$$
m[y']+c[y]+k\int ydt=J
$$

A position jump would introduce an unprescribed derivative of an impulse in the second derivative, so position stays continuous.

$$
[y]=0
$$

Shrink the interval to obtain the velocity jump.

$$
[y']=J/m
$$

### Interactive diagram

When impulse sign reverses, what happens to position and velocity jumps?

An arrow marks impulse time; its height is a drawing symbol, not a pointwise impulse value. Displacement is continuous and velocity jumps.

Online diagram: #/lesson/ode-impulse?view=visual

### Guided experiment

1. **Before impact** Set impulse time $a$ to $2$, impulse $J$ to $1$, and observation time $t$ to $1$.

Preset observation: The system is still at rest.

2. **After impact** Set impulse time $a$ to $1$, impulse $J$ to $1$, and observation time $t$ to $2$.

Preset observation: Positive impulse starts oscillation without a position jump.

3. **Reverse impulse** Set impulse time $a$ to $1$, impulse $J$ to $-1$, and observation time $t$ to $2$.

Preset observation: The velocity jump and subsequent displacement reverse sign.

### Worked examples

#### Example 1: An impulse on a unit oscillator

Solve $y''+y=\delta(t-2)$ with zero initial position and velocity.

- The unit causal response is $H(t)\sin t$.
- Delay until time two; velocity jumps by one.

**Answer: $y=H(t-2)\sin(t-2)$.**

#### Example 2: A specified impulse

A mass-two system receives impulse six. What is the velocity jump?

- Integrating across impact gives mass times velocity change equal to impulse.
- $2\Delta v=6$.

**Answer: $\Delta v=3$.**

### Common mistakes

- **An impulse is an ordinary function equal to infinity at one point.** It is a generalized function interpreted through integrals.

- **An impulse instantly jumps the mass's position.** An ideal finite impulse changes velocity while position stays continuous.

### Exercises and solutions

**1. Find the one-sided transform of $\delta(t-3)$.**

Hint: Evaluate the exponential kernel at the impulse time.

Answer: $e^{-3s}$.

- Evaluate $e^{-st}$ at time three.

**2. For impulse minus two and mass four, find the velocity jump.**

Hint: Divide signed impulse by mass.

Answer: $-1/2$.

- $-2/4=-1/2$.

**3. As a finite pulse narrows, why hold area rather than height fixed?**

Hint: Total impulse is its integral.

Answer: Fixed area retains a finite total action.

- Fixed height with vanishing width gives vanishing total action.

**4. Can an impulse's height at one point be substituted as an ordinary real number?**

Hint: Return to the definition.

Answer: No.

- An impulse is defined by integration, not pointwise values.

Prerequisites: Step inputs and time delay.

## 7.6 Convolution and general forcing responses

*Add the responses to all earlier input pieces*

### The idea

A linear time-invariant system's zero-state response is the convolution of its input with the causal impulse response.

### Intuition

Each input instant starts its own response; current output accumulates the contributions of all past inputs.

### Another explanation

Convolution accumulates the effect of each small push into the total response.

### Quick check

Why is current time the convolution's upper limit?

A. To save computation
B. A causal system depends only on past inputs
C. The function has no later definition

Answer: B. Future inputs cannot affect the current causal response.

### What is convolution?

$(f*g)(t)=\int_0^tf(\tau)g(t-\tau)d\tau$. The second factor records time elapsed since the input occurred.

### Why is its transform useful?

When convergence permits exchanging integrals, time convolution becomes multiplication of transforms.

### Where do initial data belong?

Nonzero initial data add a homogeneous response. A convolution alone usually supplies only the zero-initial-data part.

### Definition and conditions

Convolution and general forcing responses

$$
y(t)=\int_0^t h(t-\tau)g(\tau)d\tau,\qquad\mathcal L\{f*g\}=FG
$$

- Assume a causal constant-coefficient linear system with zero initial data and piecewise-continuous exponential-order inputs, making the integral exchanges and transforms valid.

### Derivation

Write the zero-state oscillator relation in transform space.

$$
(s^2+\omega_0^2)Y=G
$$

Invert the transfer factor.

$$
h(t)=\frac{\sin\omega_0t}{\omega_0}\quad(t\ge0)
$$

Turn the transform product into an integral.

$$
y(t)=\int_0^t\frac{\sin(\omega_0(t-\tau))}{\omega_0}g(\tau)d\tau
$$

### Interactive diagram

How do past-input contributions redistribute as current time advances?

Horizontal is past input time. Gold is the current convolution integrand; shaded area equals the zero-state response.

Online diagram: #/lesson/ode-convolution?view=visual

### Guided experiment

1. **Earlier** Set current time $t$ to $0.5$.

Preset observation: Only a short input history has accumulated.

2. **Later** Set current time $t$ to $2$.

Preset observation: Earlier inputs have had more time to decay.

3. **Near the steady state** Set current time $t$ to $5$.

Preset observation: The accumulated area approaches one but remains below it.

### Worked examples

#### Example 1: Constant driving of an oscillator

Find the zero-initial-data response of $y''+y=1$.

- Its convolution is $\int_0^t\sin(t-\tau)d\tau$.
- Integrate using the remaining-time variable.

**Answer: $y=1-\cos t$.**

#### Example 2: A first-order exponential kernel

Find the zero-initial-data response of $y'+y=1$.

- Its impulse response on positive time is $e^{-t}$.
- Integrate $\int_0^te^{-(t-\tau)}d\tau$.

**Answer: $y=1-e^{-t}$.**

### Common mistakes

- **Convolution includes future inputs in the current output.** A causal integral includes only past and current inputs.

- **Convolution is ordinary pointwise multiplication.** One accumulates an integral; the other multiplies values at the same time.

### Exercises and solutions

**1. What is the convolution of constant one with itself?**

Hint: Use the integration interval's length.

Answer: $t$.

- $\int_0^t1d\tau=t$.

**2. What does $t-\tau$ mean in a convolution?**

Hint: Compare current time with input time.

Answer: The age of the response.

- It is elapsed time since the input occurred.

**3. What is $e^{-t}*e^{-t}$?**

Hint: Combine the exponentials.

Answer: $te^{-t}$.

- The integrand is constant $e^{-t}$; multiply by the interval length.

**4. Can a zero-state convolution alone give a full solution for nonzero initial data?**

Hint: A convolution usually starts at zero.

Answer: No.

- Add the initial-data response.

Prerequisites: Impulses and jump conditions.

## Chapter review

Try independently before reading the solutions.

**1. Invert $1/((s+2)(s+3))$.**

Hint: Split into two simple poles.

Answer: $e^{-2t}-e^{-3t}$.

- It equals $1/(s+2)-1/(s+3)$.

**2. Write forcing of height three active from time two to five.**

Hint: Subtract the two switches.

Answer: $3[H(t-2)-H(t-5)]$.

- Switch on three at time two and subtract three at time five.

**3. A mass-three oscillator receives impulse minus six at positive time. How do position and velocity change?**

Hint: Integrate across impact.

Answer: No position jump; velocity jumps by $-2$.

- Position is continuous; velocity change is minus six divided by three.

# Chapter 8 · Linear differential systems

Put linear-algebra eigendirections into continuous time, including repeated roots, complex roots, and forced systems.

Goals:
- Construct matrix exponentials
- Read phase portraits from eigenstructure
- Calculate forced system responses

## 8.1 Linear systems and fundamental matrices

*Each column is an independent solution*

### The idea

A fundamental matrix collects independent solution columns and maps initial states to later states.

### Intuition

Study each independent starting direction, then combine them linearly to obtain all motions.

### Another explanation

A fundamental matrix gathers a complete set of initial-state experiments. Linearity reconstructs every other initial motion.

### Quick check

What are fundamental-matrix columns?

A. Independent homogeneous solution vectors
B. Arbitrary initial numbers
C. Equation coefficients

Answer: A. They collect independent motions.

### General form

A linear system is $\mathbf x'=A(t)\mathbf x+\mathbf b(t)$; homogeneous means the forcing vector is zero.

### Fundamental matrices

Put independent homogeneous solutions in columns of $\Phi$. It satisfies $\Phi'=A\Phi$ and is invertible.

### Initial-value solutions

A homogeneous initial-value solution is $\Phi(t)\Phi(t_0)^{-1}\mathbf x_0$. A phase plane plots state coordinates, not time as an axis.

### Definition and conditions

Linear systems and fundamental matrices

$$
\mathbf x(t)=\Phi(t)\Phi(t_0)^{-1}\mathbf x_0
$$

- Matrix coefficients are continuous on the interval and the fundamental matrix remains invertible. Increasing time specifies trajectory orientation.

### Derivation

Combine the column equations into matrix form.

$$
\Phi'=A\Phi
$$

Constant-vector combinations remain solutions.

$$
\mathbf x=\Phi\mathbf c
$$

Initial data determine the combination.

$$
\mathbf c=\Phi(t_0)^{-1}\mathbf x_0
$$

### Interactive diagram

What happens to a node when one negative eigenvalue becomes positive?

Draw the analytic trajectory from $(1,1)$ and a normalized direction field. Vary parameters to compare nodes and saddles. One trajectory does not represent every initial state.

Online diagram: #/lesson/ode-linear-systems?view=visual

### Guided experiment

1. **An attracting node** Set first exponent rate $\lambda_1$ to $-1$, second exponent rate $\lambda_2$ to $-0.5$, and observation time $t$ to $3$.

Preset observation: Both components decay.

2. **A saddle** Set first exponent rate $\lambda_1$ to $1$, second exponent rate $\lambda_2$ to $-1$, and observation time $t$ to $2$.

Preset observation: One direction grows and the other decays.

3. **Repelling node** Set first exponent rate $\lambda_1$ to $0.5$, second exponent rate $\lambda_2$ to $1$, and observation time $t$ to $2$.

Preset observation: Both directions grow.

### Worked examples

#### Example 1: A diagonal system

Solve $x'=x,y'=-2y$ with initial state $(2,3)$.

- The components evolve exponentially and independently.
- Initial values give the exponential coefficients.

**Answer: $(x,y)=(2e^t,3e^{-2t})$.**

#### Example 2: Test a fundamental matrix

For $A=\operatorname{diag}(1,-1)$, is $\Phi=\operatorname{diag}(e^t,e^{-t})$ a fundamental matrix?

- Columnwise differentiation gives $\Phi'=A\Phi$.
- Its determinant is always one.

**Answer: Yes.**

### Common mistakes

- **Any two solutions form a fundamental matrix.** Its columns must be independent.

- **A phase plane's horizontal axis is always time.** Both axes are state components.

### Exercises and solutions

**1. What solves a homogeneous linear system with zero initial state?**

Hint: Use uniqueness and linearity.

Answer: The zero solution.

- Zero satisfies the equation and initial data.

**2. If a fundamental matrix is not initially the identity, does its coefficient vector equal the initial state?**

Hint: Convert using its inverse.

Answer: Generally not.

- It is $\Phi(t_0)^{-1}\mathbf x_0$.

**3. Give a fundamental matrix for $x'=2x,y'=3y$.**

Hint: Each column supplies one direction.

Answer: $\operatorname{diag}(e^{2t},e^{3t})$.

- Use a diagonal exponential matrix.

**4. Can a fundamental matrix suddenly become singular within its interval?**

Hint: Independence persists for continuous linear systems.

Answer: No.

- An invertible initial matrix retains nonzero determinant by Liouville's formula.

Prerequisites: First-order systems and state variables, Diagonalization and similar matrices.

## 8.2 Eigendirections, nodes, and saddles

*How a matrix determines continuous-time trajectories*

### The idea

Constant-system eigenvectors give straight motion directions; eigenvalues give their exponential rates.

### Intuition

Split the initial state into eigencomponents, then grow or decay each independently.

### Another explanation

Eigenvectors locate directions, eigenvalues set rates, and initial coordinates give their weights.

### Quick check

What characterizes saddle eigenvalues?

A. Both zero
B. Both negative
C. Real with opposite signs

Answer: C. Contraction and expansion coexist.

### How does one direction evolve?

If $A\mathbf v=\lambda\mathbf v$, then $e^{\lambda t}\mathbf v$ solves the system.

### Nodes and saddles

Two negative real eigenvalues give an attracting node; two positive ones a repelling node. Opposite signs give a saddle with only some stable directions.

### Special initial states

A saddle trajectory exactly on its stable eigenline approaches the origin. This does not make the whole equilibrium stable.

### Definition and conditions

Eigendirections, nodes, and saddles

$$
\mathbf x=\sum_i c_i e^{\lambda_i t}\mathbf v_i
$$

- Use a constant matrix with a complete eigenbasis. Stability concerns forward time; the homogeneous equilibrium is the origin.

### Derivation

Try an exponential along an eigenvector.

$$
\mathbf x'=\lambda e^{\lambda t}\mathbf v
$$

Both sides agree.

$$
A\mathbf x=e^{\lambda t}A\mathbf v=\lambda e^{\lambda t}\mathbf v
$$

Combine directions to match initial state.

$$
\mathbf x_0=\sum_i c_i\mathbf v_i
$$

### Interactive diagram

What happens to a node when one negative eigenvalue becomes positive?

Draw the analytic trajectory from $(1,1)$ and a normalized direction field. Vary parameters to compare nodes and saddles. One trajectory does not represent every initial state.

Online diagram: #/lesson/ode-eigen-systems?view=visual

### Guided experiment

1. **An attracting node** Set first exponent rate $\lambda_1$ to $-1$, second exponent rate $\lambda_2$ to $-0.5$, and observation time $t$ to $3$.

Preset observation: Both components decay.

2. **A saddle** Set first exponent rate $\lambda_1$ to $1$, second exponent rate $\lambda_2$ to $-1$, and observation time $t$ to $2$.

Preset observation: One direction grows and the other decays.

3. **Repelling node** Set first exponent rate $\lambda_1$ to $0.5$, second exponent rate $\lambda_2$ to $1$, and observation time $t$ to $2$.

Preset observation: Both directions grow.

### Worked examples

#### Example 1: An attracting node

What is the long-term behavior of $A=\operatorname{diag}(-1,-3)$?

- Both directions decay.
- Every initial state approaches the origin.

**Answer: The origin is asymptotically stable.**

#### Example 2: A saddle

For $A=\operatorname{diag}(1,-1)$, which initial states approach the origin?

- The components are $x_0e^t$ and $y_0e^{-t}$.
- Decay requires the first initial component to be zero.

**Answer: Only stable axis $x_0=0$.**

### Common mistakes

- **One negative eigenvalue makes the system stable.** Check every direction.

- **Eigenvalues specify initial coefficients.** Coefficients come from initial coordinates in the eigenbasis.

### Exercises and solutions

**1. With a complete real eigenbasis and eigenvalues $2,4$, classify the system.**

Hint: Both directions grow.

Answer: An unstable node.

- The origin repels.

**2. Classify the equilibrium with eigenvalues $-2,3$.**

Hint: Their signs differ.

Answer: A saddle.

- One direction contracts and one expands.

**3. Does multiplying an eigenvector by three add a motion direction?**

Hint: Compare their lines.

Answer: No new independent direction.

- It only rescales the same line.

**4. Does a saddle's decaying trajectory establish stability?**

Hint: Stability requires all sufficiently nearby initial states to stay nearby.

Answer: No.

- Other nearby directions leave.

Prerequisites: Linear systems and fundamental matrices.

## 8.3 Matrix exponentials and continuous evolution

*Define a solution without diagonalization*

### The idea

Matrix exponentials generalize scalar exponential evolution to linear systems, including nondiagonalizable matrices.

### Intuition

Starting from the identity state map, accumulate successive matrix actions to obtain time evolution.

### Another explanation

Diagonalization helps calculate a matrix exponential; it is not needed to define one.

### Quick check

Which matrix begins the exponential series?

A. The zero matrix
B. The identity matrix
C. The entrywise exponential of the original matrix

Answer: B. The evolution must preserve the initial state at time zero.

### How is it defined?

Define $e^{At}=I+At+(At)^2/2!+\cdots$ by its power series, convergent for finite matrices at every finite time.

### How do you obtain the initial-value solution?

Termwise differentiation gives derivative $Ae^{At}$, and the initial matrix is the identity, so the solution is $e^{A(t-t_0)}\mathbf x_0$.

### Product rules need hypotheses

Time advances for the same matrix compose. Exponentials of different matrices combine into the exponential of their sum only with additional conditions such as commutation.

### Definition and conditions

Matrix exponentials and continuous evolution

$$
e^{At}=\sum_{n=0}^\infty\frac{A^nt^n}{n!},\quad\mathbf x(t)=e^{A(t-t_0)}\mathbf x_0
$$

- $A$ is a finite-dimensional constant square matrix. Exponentiation is not entrywise. If $AB=BA$, then $e^{A+B}=e^Ae^B$.

### Derivation

Differentiate term by term.

$$
\frac d{dt}e^{At}=A\sum_{n=0}^\infty\frac{A^nt^n}{n!}=Ae^{At}
$$

Check the initial value.

$$
e^{A\cdot0}=I
$$

With diagonalization, calculate each direction separately.

$$
A=SDS^{-1}\Rightarrow e^{At}=Se^{Dt}S^{-1}
$$

### Interactive diagram

If the second initial component is zero, does shear produce motion?

For a square-zero matrix the series truncates exactly. The phase plane shows horizontal shear; the matrix readout changes with observation time.

Online diagram: #/lesson/ode-matrix-exponential?view=visual

### Guided experiment

1. **Unit second direction** Set initial first component $x_0$ to $0$, initial second component $y_0$ to $1$, and observation time $t$ to $2$.

Preset observation: The second component stays fixed and the first grows linearly.

2. **First direction** Set initial first component $x_0$ to $1$, initial second component $y_0$ to $0$, and observation time $t$ to $2$.

Preset observation: Every point on the first axis is an equilibrium.

3. **Opposite direction** Set initial first component $x_0$ to $0$, initial second component $y_0$ to $-1$, and observation time $t$ to $2$.

Preset observation: A negative second component moves left.

### Worked examples

#### Example 1: A square-zero matrix

Find the exponential of $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$.

- $A^2=0$, so terms of order two and higher vanish.
- Keep the identity and first-order term.

**Answer: $e^{At}=\begin{pmatrix}1&t\\0&1\end{pmatrix}$.**

#### Example 2: A scalar matrix

Find the exponential of $A=-2I$.

- Each power is a scalar power times the identity.
- The series reduces to a scalar exponential.

**Answer: $e^{At}=e^{-2t}I$.**

### Common mistakes

- **Matrix exponentials exponentiate each entry separately.** Their definition uses matrix powers and the identity.

- **Without diagonalization there is no exponential solution.** The series defines an exponential for every square matrix.

### Exercises and solutions

**1. What is every matrix exponential at time zero?**

Hint: Read the series' constant term.

Answer: The identity matrix.

- Every positive time power vanishes.

**2. Is a matrix exponential invertible?**

Hint: Use negative-time advancement.

Answer: Yes, with inverse $e^{-At}$.

- $e^{At}e^{-At}=I$.

**3. Find the exponential of diagonal $\operatorname{diag}(1,2)$.**

Hint: Each diagonal direction acts independently.

Answer: $\operatorname{diag}(e^t,e^{2t})$.

- Off-diagonal entries stay zero.

**4. Does $e^{A+B}=e^Ae^B$ always hold?**

Hint: Matrices need not commute.

Answer: No; extra conditions are needed.

- It generally fails without commutation.

Prerequisites: Eigendirections, nodes, and saddles.

## 8.4 Repeated-root systems and generalized eigendirections

*Shear creates time factors*

### The idea

When eigenvectors are missing, the nilpotent part creates time polynomials in the exponential, supplying independent solutions.

### Intuition

A repeated eigenvalue can accompany shear, so scalar exponential scaling is incomplete.

### Another explanation

With repeated roots, inspect the matrix's shear structure as well as the eigenvalue numbers.

### Quick check

Why does a nontrivial two-by-two Jordan block create a time factor?

A. The nilpotent exponential contains a first-order term
B. The initial state must change
C. Forcing must grow with time

Answer: A. The time factor comes from homogeneous shear in the matrix itself.

### A minimal model

$A=\lambda I+N$, where $N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ satisfies $N^2=0$.

### How do you exponentiate it?

The scalar and nilpotent parts commute, so $e^{At}=e^{\lambda t}(I+tN)$.

### Growth and decay

If $\lambda<0$, time times exponential still tends to zero. If $\lambda=0$, shear can cause linear growth, so zero eigenvalues alone do not establish stability.

### Definition and conditions

Repeated-root systems and generalized eigendirections

$$
\mathbf x(t)=e^{\lambda t}\begin{pmatrix}1&t\\0&1\end{pmatrix}\mathbf x_0
$$

- We use a two-by-two Jordan block. For general coordinates, transform back using the invertible basis change.

### Derivation

Separate the commuting parts.

$$
e^{(\lambda I+N)t}=e^{\lambda t}e^{Nt}
$$

Truncate using nilpotence.

$$
e^{Nt}=I+tN
$$

The second initial direction generates the shear term.

$$
e^{At}\begin{pmatrix}0\\1\end{pmatrix}=e^{\lambda t}\begin{pmatrix}t\\1\end{pmatrix}
$$

### Interactive diagram

When the repeated eigenvalue reaches zero, does the shear term still decay?

Start from the second basis direction and compare phase trajectories for negative and zero repeated roots, retaining the shear time factor.

Online diagram: #/lesson/ode-defective-systems?view=visual

### Guided experiment

1. **Negative root** Set repeated eigenvalue $\lambda$ to $-1$ and observation time $t$ to $3$.

Preset observation: Exponential decay eventually dominates the time factor.

2. **Weak decay** Set repeated eigenvalue $\lambda$ to $-0.2$ and observation time $t$ to $3$.

Preset observation: Shear stretching is more visible in the same window.

3. **Zero root** Set repeated eigenvalue $\lambda$ to $0$ and observation time $t$ to $3$.

Preset observation: With no decay, the first component grows linearly.

### Worked examples

#### Example 1: A negative double root

Solve $x'=-x+y,y'=-y$ with initial state $(0,1)$.

- The second component is $e^{-t}$.
- An integrating factor gives first component $te^{-t}$.

**Answer: $(x,y)=(te^{-t},e^{-t})$.**

#### Example 2: A zero double root

Solve $x'=y,y'=0$ with initial state $(1,2)$.

- The second component stays two.
- The first grows at constant rate two.

**Answer: $(x,y)=(1+2t,2)$.**

### Common mistakes

- **Repeated eigenvalues always lack eigenvectors.** Check eigenspace dimensions.

- **Nonpositive eigenvalues guarantee stability.** Zero real parts require checking nontrivial Jordan blocks.

### Exercises and solutions

**1. If $N^2=0$, what is $e^{Nt}$?**

Hint: Higher terms vanish.

Answer: $I+tN$.

- Keep only degree zero and degree one.

**2. What is the limit of $te^{-t}$ as time tends to infinity?**

Hint: Exponential decay dominates polynomial growth.

Answer: $0$.

- One use of L'Hopital or a standard exponential limit gives zero.

**3. Are two zero eigenvalues enough to determine stability?**

Hint: Compare the zero matrix with a nonzero nilpotent matrix.

Answer: Insufficient.

- One stays fixed; the other can grow by shear.

**4. Does a repeated system eigenvalue always prevent diagonalization?**

Hint: Consider a scalar matrix.

Answer: Not necessarily.

- A scalar matrix has a complete eigenbasis.

Prerequisites: Matrix exponentials and continuous evolution.

## 8.5 Complex eigenvalues, rotation, and stability

*A rotating trajectory can also contract*

### The idea

Complex real parts control radial trends and imaginary parts rotation. A linear center is not asymptotically stable.

### Intuition

Rotation and dilation can coexist, producing spirals.

### Another explanation

Orbiting and moving farther from the origin are separate effects. Read angle and radius independently.

### Quick check

Which sign must an attracting spiral's eigenvalue real part have?

A. Zero
B. Positive
C. Negative

Answer: C. A negative real part gives exponential decay.

### The standard rotation block

$A=\begin{pmatrix}\alpha&-\beta\\\beta&\alpha\end{pmatrix}$ combines scaling $e^{\alpha t}$ with rotation at angular velocity $\beta$.

### Three long-term regimes

Negative real part gives an attracting spiral, positive gives a repelling spiral, and zero real part with nonzero imaginary part gives a center, orbiting without tending to zero.

### The general linear conclusion

Strictly negative real parts for all eigenvalues give asymptotic stability. A positive real part gives instability. Zero real parts require examining Jordan structure.

### Definition and conditions

Complex eigenvalues, rotation, and stability

$$
\mathbf x(t)=e^{\alpha t}\begin{pmatrix}\cos\beta t&-\sin\beta t\\\sin\beta t&\cos\beta t\end{pmatrix}\mathbf x_0
$$

- This expression applies to the stated standard block. A general similarity change turns circles into ellipses while preserving frequency and exponential trends.

### Derivation

Split the matrix into scaling and rotation generators.

$$
A=\alpha I+\beta J,\quad J^2=-I
$$

Sum even and odd powers separately.

$$
e^{\beta Jt}=I\cos\beta t+J\sin\beta t
$$

Radius and angle evolve separately.

$$
r(t)=r_0e^{\alpha t},\quad\theta(t)=\theta_0+\beta t
$$

### Interactive diagram

What occurs between contraction and expansion as the real part crosses zero?

Draw the exact trajectory from $(1,0)$. Real part controls radius; angular-velocity sign controls rotation direction.

Online diagram: #/lesson/ode-spirals?view=visual

### Guided experiment

1. **Attracting spiral** Set radial exponent rate $\alpha$ to $-0.5$, angular velocity $\beta$ to $1$, and observation time $t$ to $4$.

Preset observation: Radius shrinks during counterclockwise rotation.

2. **Center** Set radial exponent rate $\alpha$ to $0$, angular velocity $\beta$ to $1$, and observation time $t$ to $4$.

Preset observation: Radius stays one and does not tend to zero.

3. **Reverse and repel** Set radial exponent rate $\alpha$ to $0.3$, angular velocity $\beta$ to $-1$, and observation time $t$ to $3$.

Preset observation: Clockwise rotation with growing radius.

### Worked examples

#### Example 1: Attracting spiral

Solve $A=\begin{pmatrix}-1&-2\\2&-1\end{pmatrix}$ with initial state $(1,0)$.

- Its real part is minus one and angular velocity two.
- Rotate and scale using the standard block.

**Answer: $e^{-t}(\cos2t,\sin2t)^T$.**

#### Example 2: Center

Do solutions of $x'=-y,y'=x$ tend to zero?

- The squared-radius derivative is $2x(-y)+2yx=0$.
- A nonzero initial state keeps a nonzero radius.

**Answer: Stable but not asymptotically stable.**

### Common mistakes

- **Every stable equilibrium attracts nearby trajectories.** A center is stable without attracting.

- **Complex eigenvalues imply instability.** The real-part sign determines scaling.

### Exercises and solutions

**1. What behavior corresponds to conjugate roots with real part $-2$?**

Hint: Read the radius factor.

Answer: An attracting spiral.

- Radius decays by $e^{-2t}$.

**2. With $\beta<0$ in the standard block, which way is rotation?**

Hint: Inspect the initial velocity at a point on the positive horizontal axis.

Answer: Clockwise.

- Vertical velocity is negative, turning downward.

**3. Do all nonzero center trajectories approach the origin?**

Hint: Radius is preserved.

Answer: No.

- A nonzero starting radius does not disappear.

**4. Must a center remain circular after a general similarity change?**

Hint: A basis change need not be orthogonal.

Answer: Not necessarily.

- A circle can become an ellipse.

Prerequisites: Repeated-root systems and generalized eigendirections.

## 8.6 Forced systems and variation of constants

*Propagate past inputs to the present*

### The idea

A forced linear solution has initial-state propagation and accumulated forcing propagation.

### Intuition

Each input enters the state, then the system advances it to the current time.

### Another explanation

This is the state-vector form of convolution: receive input, then evolve by the system's rules.

### Quick check

What does the forcing integral represent?

A. All future inputs
B. Past inputs propagated to the present and accumulated
C. Only an initial-value correction

Answer: B. The kernel assigns each input time its own remaining propagation time.

### Begin with a fundamental matrix

Set $\mathbf x=\Phi\mathbf c(t)$, differentiate the product, and cancel homogeneous terms to obtain $\mathbf c'=\Phi^{-1}\mathbf b$.

### Constant-coefficient form

Propagator $e^{A(t-\tau)}$ advances each past forcing contribution to the present.

### Check dimensions

A propagation matrix multiplies a column-vector input, so the integral remains a state column. Do not omit nonzero initial-data terms.

### Definition and conditions

Forced systems and variation of constants

$$
\mathbf x(t)=e^{A(t-t_0)}\mathbf x_0+\int_{t_0}^t e^{A(t-\tau)}\mathbf b(\tau)d\tau
$$

- $A$ is constant and forcing continuous or handled piecewise continuously. Variable-coefficient forms use a fundamental matrix.

### Derivation

Differentiate the product and cancel terms.

$$
\Phi'\mathbf c+\Phi\mathbf c'=A\Phi\mathbf c+\mathbf b
$$

Find the coefficient-vector rate.

$$
\mathbf c'=\Phi^{-1}\mathbf b
$$

Integrate and substitute back.

$$
\mathbf x=\Phi(t)\left[\Phi(t_0)^{-1}\mathbf x_0+\int_{t_0}^t\Phi(\tau)^{-1}\mathbf b(\tau)d\tau\right]
$$

### Interactive diagram

Does changing initial data change the long-term steady state?

Phase trajectories approach steady state $(1,1)$. The two directions decay at different rates; initial values can vary freely.

Online diagram: #/lesson/ode-system-forcing?view=visual

### Guided experiment

1. **Zero initial value** Set initial first component $x_0$ to $0$, initial second component $y_0$ to $0$, and observation time $t$ to $3$.

Preset observation: Both states rise toward steady state.

2. **Start at steady state** Set initial first component $x_0$ to $1$, initial second component $y_0$ to $1$, and observation time $t$ to $3$.

Preset observation: The state stays fixed.

3. **Start on another side** Set initial first component $x_0$ to $2$, initial second component $y_0$ to $-1$, and observation time $t$ to $3$.

Preset observation: One component falls and the other rises toward the same equilibrium.

### Worked examples

#### Example 1: Two independent inputs

Solve $x'=-x+1,y'=-2y+2$ with zero initial state.

- Apply the first-order constant-input formula separately.
- Both steady values are one, with decay rates one and two.

**Answer: $(x,y)=(1-e^{-t},1-e^{-2t})$.**

#### Example 2: A pure integration system

$A=0,\mathbf b=(t,1)^T,\mathbf x(0)=0$.

- The propagation matrix is the identity.
- Integrate input components separately.

**Answer: $\mathbf x=(t^2/2,t)^T$.**

### Common mistakes

- **Every input propagates for the full current time.** Later inputs propagate for less time.

- **Replace scalar denominators by matrices to obtain every formula.** Matrix operations have order and invertibility requirements; arbitrary division is invalid.

### Exercises and solutions

**1. What remains when forcing is zero?**

Hint: The integral disappears.

Answer: $e^{A(t-t_0)}\mathbf x_0$.

- Only initial-state propagation remains.

**2. What condition defines equilibrium under constant forcing?**

Hint: Set the state derivative to zero.

Answer: Solve that algebraic system.

- $A\mathbf x_*+\mathbf b=0$.

**3. Find the equilibrium of $x'=-2x+6$.**

Hint: Set the derivative to zero.

Answer: $3$.

- $-2x+6=0$.

**4. Why does the kernel use $t-\tau$ rather than just $t$?**

Hint: Inputs occur at different times.

Answer: Different inputs propagate for different lengths of time.

- Each contribution propagates only from its occurrence to the present.

Prerequisites: Complex eigenvalues, rotation, and stability, Convolution and general forcing responses.

## Chapter review

Try independently before reading the solutions.

**1. Solve $x'=-2x,y'=3y$ with initial state $(1,2)$.**

Hint: Use componentwise exponentials.

Answer: $(e^{-2t},2e^{3t})$.

- Each initial component supplies its exponential coefficient.

**2. Find the exponential of $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$.**

Hint: Split into a scalar matrix and a square-zero part.

Answer: $e^t\begin{pmatrix}1&2t\\0&1\end{pmatrix}$.

- The nilpotent exponential is $I+tN$.

**3. A linear system has eigenvalues $-1\pm3i$. Classify the origin.**

Hint: Inspect the real part.

Answer: An asymptotically stable spiral.

- Strictly negative real parts give contracting rotation.

# Chapter 9 · Nonlinear systems and qualitative analysis

Move from scalar phase lines to planar linearization, energy, and bifurcations, stating local scope and failure cases.

Goals:
- Classify equilibria and local stability
- Use phase lines and nullclines
- Explain energy and basic bifurcations

## 9.1 Autonomous equations and phase lines

*State alone determines the next direction*

### The idea

Signs of a scalar autonomous field determine increase and decrease; equilibria divide the state axis into intervals.

### Intuition

Each interval's arrow reveals the motion without first solving explicitly.

### Another explanation

Find stationary points, then read the directions between them to understand scalar long-term trends.

### Quick check

What do phase-line arrows directly represent?

A. Whether state increases or decreases
B. All solutions have constant speed
C. Exact time values of solutions

Answer: A. The right-hand side's sign supplies the arrows.

### Where are equilibria?

For $y'=f(y)$, solve $f(y_*)=0$. Equilibrium solutions are constant functions.

### How do you determine arrows?

Test the sign between neighboring zeros. Positive means increasing state; negative means decreasing state.

### A local derivative test

If $f'(y_*)<0$, equilibrium is locally asymptotically stable. A positive derivative gives instability; zero needs higher-order or sign analysis.

### Definition and conditions

Autonomous equations and phase lines

$$
f'(y_*)<0\Rightarrow y_*\text{ locally asymptotically stable}
$$

- $f$ is continuously differentiable near equilibrium. A zero derivative cannot classify stability using only the linear term.

### Derivation

Write the displacement from equilibrium.

$$
u=y-y_*,\quad u'=f(y_*+u)
$$

Expand the first-order term.

$$
u'=f'(y_*)u+o(u)
$$

A nonzero linear term determines nearby arrows.

$$
f'(y_*)<0\Rightarrow u\,u'<0\quad(0<\lvert u\rvert\ll1)
$$

### Interactive diagram

Does a population above capacity keep growing?

Capacity is one. Positive values below rise and those above fall. The dashed line marks equilibrium; the zero equilibrium is discussed separately in the text.

Online diagram: #/lesson/ode-phase-line?view=visual

### Guided experiment

1. **Below capacity** Set initial value $y_0$ to $0.3$ and observation time $t$ to $5$.

Preset observation: The population rises without crossing equilibrium one.

2. **Above capacity** Set initial value $y_0$ to $1.8$ and observation time $t$ to $5$.

Preset observation: The population decreases toward one.

3. **Exactly at equilibrium** Set initial value $y_0$ to $1$ and observation time $t$ to $5$.

Preset observation: The equilibrium solution stays fixed.

### Worked examples

#### Example 1: Logistic equilibria

Classify equilibria of $y'=y(1-y)$.

- Its zeros are zero and one.
- The derivative $1-2y$ is positive at zero and negative at one.

**Answer: Zero is unstable; one is locally asymptotically stable.**

#### Example 2: Attraction from one side

Classify zero for $y'=y^2$.

- Rates on both sides are nonnegative.
- Negative states approach zero; positive states move away to the right.

**Answer: One-sided attraction, but unstable overall; often called semistable.**

### Common mistakes

- **A zero equilibrium derivative prevents further study.** Use signs or higher-order terms instead.

- **Attraction from one side implies full stability.** Stability must control all sufficiently close states on both sides.

### Exercises and solutions

**1. Is zero stable for $y'=-y^3$?**

Hint: With zero derivative, inspect signs on both sides.

Answer: Asymptotically stable.

- Positive states decrease and negative states increase, both toward zero.

**2. Classify zero for $y'=y^3$.**

Hint: Both sides point outward.

Answer: Unstable.

- Positive states rise and negative states fall.

**3. Under local uniqueness, can a one-dimensional autonomous solution cross an equilibrium and leave it?**

Hint: Compare it with the constant equilibrium solution.

Answer: No.

- Passing through the same initial state would violate uniqueness.

**4. Does $f'(y_*)=0$ guarantee stability?**

Hint: Compare positive and negative cubic fields.

Answer: Inconclusive.

- The same zero derivative permits opposite stabilities.

Prerequisites: Local existence and uniqueness, Continuous dependence and error growth.

## 9.2 Jacobians and local linearization

*Retain first-order change near equilibrium*

### The idea

The Jacobian gives a nonlinear system's first-order model near equilibrium. Hyperbolic stability types can be classified by that linearization.

### Intuition

Magnify the neighborhood and ask whether its first-order change already determines the trend.

### Another explanation

Linearization magnifies a neighborhood; it does not replace the entire nonlinear system everywhere with a matrix.

### Quick check

If all Jacobian eigenvalues have strictly negative real parts, what follows?

A. Every nearby solution is a line
B. Every state globally tends to zero
C. Local asymptotic stability

Answer: C. This is a local result with hypotheses.

### Find equilibria first

For $\mathbf x'=\mathbf f(\mathbf x)$, solve $\mathbf f(\mathbf x_*)=0$ before applying equilibrium tests. An arbitrary point is not an equilibrium.

### The first-order matrix

In displacement coordinates, $\mathbf u'=J\mathbf u+\mathbf r(\mathbf u)$, with remainder small relative to displacement. $J$ is the derivative matrix at equilibrium.

### Which conclusions are reliable?

Strictly negative real parts give local asymptotic stability; a positive real part gives instability. Zero real parts can make linearization inconclusive, especially near a center.

### Definition and conditions

Jacobians and local linearization

$$
J=D\mathbf f(\mathbf x_*),\quad\mathbf u'=J\mathbf u+o(\lVert\mathbf u\rVert)
$$

- The right-hand side is continuously differentiable near equilibrium. An equilibrium without zero-real-part eigenvalues is hyperbolic. Conclusions are local, not automatically global.

### Derivation

Translate equilibrium to the origin.

$$
\mathbf x=\mathbf x_*+\mathbf u
$$

Use the multivariable first-order expansion.

$$
\mathbf f(\mathbf x_*+\mathbf u)=J\mathbf u+\mathbf r(\mathbf u)
$$

For hyperbolic cases, sufficiently small higher-order terms do not overturn the linear trend.

$$
\frac{\lVert\mathbf r(\mathbf u)\rVert}{\lVert\mathbf u\rVert}\to0
$$

### Interactive diagram

Does the near-origin conclusion extend to the other side of the threshold?

Compare nonlinear and local-linear phase trajectories. The origin attracts only locally; beyond first-component threshold one, trajectories may escape and blow up.

Online diagram: #/lesson/ode-linearization-systems?view=visual

### Guided experiment

1. **Near the origin** Set initial first component $x_0$ to $0.2$, initial second component $y_0$ to $0.5$, and observation time $t$ to $3$.

Preset observation: The two trajectories remain close and approach zero.

2. **Farther away, below the threshold** Set initial first component $x_0$ to $0.8$, initial second component $y_0$ to $1$, and observation time $t$ to $3$.

Preset observation: Nonlinear effects are stronger, but the solution still tends to zero.

3. **Beyond the threshold** Set initial first component $x_0$ to $1.5$, initial second component $y_0$ to $0$, and observation time $t$ to $3$.

Preset observation: A finite window or solution endpoint is reported; local stability cannot establish global attraction.

### Worked examples

#### Example 1: A locally stable model

Classify the origin of $x'=-x+x^2,y'=-2y$.

- Its Jacobian at zero is $\operatorname{diag}(-1,-2)$.
- Both real parts are strictly negative.

**Answer: Locally asymptotically stable, without claiming global attraction.**

#### Example 2: Zero roots are inconclusive

Compare zero equilibria of $x'=-x^3$ and $x'=x^3$.

- Both linearizations vanish.
- The first points inward on both sides and the second outward.

**Answer: Identical linearization, opposite nonlinear stability.**

### Common mistakes

- **Use the Jacobian at any point to classify an equilibrium.** Verify it is an equilibrium first.

- **A linearized center guarantees a nonlinear center.** Higher-order terms can determine stability with zero real parts.

### Exercises and solutions

**1. Find the Jacobian of $x'=2x+xy,y'=-y$ at the origin.**

Hint: Differentiate each component.

Answer: $\operatorname{diag}(2,-1)$.

- Cross terms have no first-order contribution at zero.

**2. Classify the origin for $x^\prime=2x+xy,y^\prime=-y$.**

Hint: The eigenvalues have opposite signs.

Answer: An unstable saddle.

- An expanding direction exists.

**3. Do purely imaginary linear roots prove a nonlinear center?**

Hint: Higher terms can change radius.

Answer: No.

- The linear part only rotates; higher-order radial effects may matter.

**4. Does local asymptotic stability mean every distant initial state converges there?**

Hint: Local restricts the starting neighborhood.

Answer: No.

- Other equilibria or escaping trajectories may exist.

Prerequisites: Autonomous equations and phase lines, Complex eigenvalues, rotation, and stability.

## 9.3 Nullclines and predator-prey models

*One stationary component need not mean a stationary state*

### The idea

Nullclines divide phase space into component-increase and decrease regions; their intersections are equilibria.

### Intuition

A nullcline can pause one component while the other continues moving.

### Another explanation

Use nullclines to divide the plane, then read the signs within regions before interpreting trajectories.

### Quick check

How are equilibria related to the two nullcline families?

A. Their union
B. Their intersections
C. Any point on either

Answer: B. Every state component must be stationary together.

### Define two nullcline families

In planar system $x'=f,y'=g$, $f=0$ is the horizontal-component nullcline and $g=0$ the vertical-component nullcline.

### An idealized model

Use $x'=x(1-y),y'=y(x-1)$. Positive states represent two populations coupled by encounter rates; resource limits and other realistic mechanisms are absent.

### What does the picture show?

In the first quadrant, thresholds at one determine directions. Nullclines are generally not trajectories. A numerically closed curve does not prove periodic solutions for general models.

### Definition and conditions

Nullclines and predator-prey models

$$
x'=x(1-y),\quad y'=y(x-1)
$$

- Population meaning uses $x,y>0$. The axes are invariant; numerical methods should check for accidental escape from the positive region.

### Derivation

Set the two components to zero separately.

$$
x'=0\Rightarrow x=0\ \text{or}\ y=1
$$

The other component gives the other family.

$$
y'=0\Rightarrow y=0\ \text{or}\ x=1
$$

Simultaneous zeros give equilibria.

$$
(x,y)=(0,0),(1,1)
$$

### Interactive diagram

Does every point on a nullcline remain stationary?

The phase plane shows nullclines, a direction field, and an RK4 approximation in the positive region. A finite numerical trajectory is not a proof of periodicity.

Online diagram: #/lesson/ode-nullclines?view=visual

### Guided experiment

1. **Positive equilibrium** Set initial population $x_0$ to $1$, initial population $y_0$ to $1$, and observation time $t$ to $5$.

Preset observation: Both populations stay fixed.

2. **Away from equilibrium** Set initial population $x_0$ to $1.5$, initial population $y_0$ to $0.5$, and observation time $t$ to $5$.

Preset observation: Motion crosses regions with different signs.

3. **Another starting state** Set initial population $x_0$ to $0.5$, initial population $y_0$ to $1.5$, and observation time $t$ to $5$.

Preset observation: Nullcline regions explain initial decline and later turning.

### Worked examples

#### Example 1: Read directions

At state $(2,1/2)$, which way does motion go?

- Horizontal rate is $2(1-1/2)=1$.
- Vertical rate is $(1/2)(2-1)=1/2$.

**Answer: Both populations increase.**

#### Example 2: A nullcline point need not be equilibrium

Is state $(2,1)$ an equilibrium?

- Its horizontal derivative is zero.
- Its vertical derivative is one, so motion continues upward.

**Answer: Not an equilibrium.**

### Common mistakes

- **One component's zero derivative means equilibrium.** Every component must vanish simultaneously.

- **An ideal predator-prey model directly predicts every real ecosystem.** Parameters and missing mechanisms limit its scope.

### Exercises and solutions

**1. What are the two non-axis nullclines in the positive quadrant?**

Hint: Inspect each threshold.

Answer: $y=1,x=1$.

- The horizontal-component nullcline is horizontal at one; the vertical-component nullcline is vertical at one.

**2. At $(1/2,2)$, does each component increase or decrease?**

Hint: Substitute into each sign.

Answer: Both decrease.

- The horizontal factor and vertical threshold difference are negative.

**3. Where is the positive equilibrium?**

Hint: Intersect the two non-axis lines.

Answer: $(1,1)$.

- Both coordinates are one.

**4. Must an entire nullcline be a solution trajectory?**

Hint: The other component can move the state off the line.

Answer: Not necessarily.

- One vanishing derivative is not enough to stay there.

Prerequisites: Jacobians and local linearization.

## 9.4 Energy, pendulums, and Lyapunov functions

*Find a quantity that cannot increase*

### The idea

Energy or a Lyapunov function controls a whole state using one scalar without solving every trajectory.

### Intuition

A positive measure of distance from equilibrium that cannot increase restricts how far trajectories can move away.

### Another explanation

Energy compares two-dimensional motion with one quantity. Staying close and eventually stopping still need distinct proofs.

### Quick check

How does undamped pendulum energy change?

A. It stays constant
B. It rises each cycle
C. It decays exponentially

Answer: A. Kinetic and potential energy exchange while their sum is conserved.

### The pendulum state equation

With dimensionless time, use $\theta'=v,v'=-\sin\theta-cv$. A small-angle linearization cannot replace large-angle motion.

### How does energy evolve?

Choose $E=v^2/2+1-\cos\theta$ to obtain $E'=-cv^2$. Energy is conserved without damping and nonincreasing with damping.

### Nonincrease does not yet prove convergence

Zero derivative may occur on a whole set. To prove asymptotic convergence, analyze the invariant motions possible within it. A nonpositive derivative alone is insufficient.

### Definition and conditions

Energy, pendulums, and Lyapunov functions

$$
E(\theta,v)=\frac{v^2}{2}+1-\cos\theta,\quad E'=-cv^2
$$

- Assume $c\ge0$. Energy is positive definite near the bottom equilibrium. Physical angles are modulo $2\pi$; top equilibria and high-energy rotations need separate analysis.

### Derivation

Differentiate along a solution.

$$
E'=vv'+\sin\theta\,\theta'
$$

Substitute both state equations.

$$
E'=v(-\sin\theta-cv)+\sin\theta\,v
$$

The restoring-force terms cancel.

$$
E'=-cv^2
$$

### Interactive diagram

How do energy and phase trajectories change when damping is removed?

Phase angle is not wrapped and initial velocity is zero. Readouts give RK4 state and energy; analytic dissipation establishes the energy trend.

Online diagram: #/lesson/ode-energy?view=visual

### Guided experiment

1. **No damping** Set initial angle $\theta_0$ to $1.5$, damping coefficient $c$ to $0$, and observation time $t$ to $6$.

Preset observation: Numerical energy is approximately conserved; theoretical energy is exactly conserved.

2. **With damping** Set initial angle $\theta_0$ to $1.5$, damping coefficient $c$ to $0.5$, and observation time $t$ to $6$.

Preset observation: Trajectories contract and energy is nonincreasing.

3. **Small angle** Set initial angle $\theta_0$ to $0.2$, damping coefficient $c$ to $0.2$, and observation time $t$ to $6$.

Preset observation: Local motion approximates a linear oscillator.

### Worked examples

#### Example 1: An undamped pendulum

With $c=0$ starting at $(\theta,v)=(0,1)$, find the energy.

- Potential energy is zero.
- Kinetic energy is half the squared speed.

**Answer: $E=1/2$, conserved along the trajectory.**

#### Example 2: Dissipation rate

For $c=2,v=3$, find the energy derivative.

- Substitute into the dissipation formula.
- $-2\times9=-18$.

**Answer: $E'=-18$.**

### Common mistakes

- **Nonincreasing energy means it strictly decreases immediately everywhere.** At zero velocity, its instantaneous derivative can vanish.

- **Small-angle approximation exactly describes full rotations.** The sine approximation needs sufficiently small angles.

### Exercises and solutions

**1. What is the energy at the stationary bottom equilibrium?**

Hint: Both angle and velocity are zero.

Answer: $0$.

- Both terms vanish.

**2. Does nonzero small oscillation eventually stop without damping?**

Hint: Positive energy remains constant.

Answer: No.

- It cannot approach the zero-energy bottom state.

**3. What energy does a stationary pendulum at the top have?**

Hint: Its angle is pi.

Answer: $2$.

- $1-\cos\pi=2$.

**4. Does a nonpositive Lyapunov derivative automatically prove asymptotic stability?**

Hint: Its zero-derivative set may support continuing motion.

Answer: No.

- The undamped oscillator is a counterexample.

Prerequisites: Nullclines and predator-prey models, Damped oscillation and critical damping.

## 9.5 Parameters and basic bifurcations

*Continuous parameter changes can alter equilibria*

### The idea

A bifurcation is a change in equilibrium count or stability structure as a parameter crosses a critical value.

### Intuition

It reorganizes a family of nearby motions, rather than merely changing one curve's appearance.

### Another explanation

Fix a parameter and study that system before comparing parameter values. This separates bifurcation from time evolution.

### Quick check

Which change concerns bifurcation?

A. Changing an integration constant's sign
B. Changing plot color
C. A parameter changes equilibrium or stability structure

Answer: C. Structural change is the key.

### A saddle-node model

$y'=\mu-y^2$ has no equilibrium for negative parameter, a double equilibrium at zero, and two equilibria for positive parameter, one stable and one unstable.

### A pitchfork model

$y'=\mu y-y^3$ always has the zero equilibrium. Positive parameters create two stable nonzero equilibria while the origin becomes unstable.

### A parameter is not time

A bifurcation diagram compares systems with different fixed parameters. Automatically sweeping a slider compares models; it does not solve an equation with time-varying parameters.

### Definition and conditions

Parameters and basic bifurcations

$$
y'=\mu-y^2,\quad y_*=\pm\sqrt\mu\ (\mu>0)
$$

- The parameter is fixed and real. The positive root has negative derivative, the negative root positive derivative. At zero, use signs rather than only linear derivatives.

### Derivation

Find the equilibrium condition.

$$
\mu-y^2=0
$$

Positive parameters give two roots; negative ones no real roots.

$$
y_*=\pm\sqrt\mu
$$

Classify using the state derivative.

$$
f_y=-2y\Rightarrow +\sqrt\mu\text{ stable},\ -\sqrt\mu\text{ unstable}
$$

### Interactive diagram

How many equilibria appear when the fixed parameter changes from negative to positive?

Horizontal is time, showing a fixed-parameter solution and equilibrium lines when present. Automatic sweeping compares different systems, rather than solving time-varying parameter dynamics.

Online diagram: #/lesson/ode-bifurcations?view=visual

### Guided experiment

1. **Negative parameter** Set fixed parameter $\mu$ to $-1$, initial value $y_0$ to $0$, and observation time $t$ to $1$.

Preset observation: No real equilibrium; state decreases.

2. **Threshold** Set fixed parameter $\mu$ to $0$, initial value $y_0$ to $0$, and observation time $t$ to $1$.

Preset observation: Zero initial data stay at the double equilibrium.

3. **Positive parameter** Set fixed parameter $\mu$ to $1$, initial value $y_0$ to $0$, and observation time $t$ to $2$.

Preset observation: Zero initial data approach stable equilibrium one.

### Worked examples

#### Example 1: Saddle-node parameter four

Classify equilibria of $y'=4-y^2$.

- The equilibria are plus and minus two.
- The state derivative is negative at plus two and positive at minus two.

**Answer: Plus two is stable; minus two unstable.**

#### Example 2: Pitchfork parameter one

Classify equilibria of $y'=y-y^3$.

- The roots are zero and plus and minus one.
- The derivative is $1-3y^2$.

**Answer: Zero is unstable; plus and minus one are asymptotically stable.**

### Common mistakes

- **A repeated equilibrium determines stability by itself.** A zero linear term needs further analysis.

- **A bifurcation diagram is one initial-value trajectory over time.** It records equilibrium structures at fixed parameter values.

### Exercises and solutions

**1. Does $y'=-1-y^2$ have real equilibria?**

Hint: Set the right-hand side to zero.

Answer: No.

- It would require a square equal to minus one, which is impossible.

**2. How do the sides of zero behave in $y'=-y^2$?**

Hint: The right side is negative on both sides.

Answer: One-sided attraction but overall instability.

- Positive states approach zero; negative states leave.

**3. How does the pitchfork origin behave for negative parameters?**

Hint: The linear derivative equals the parameter.

Answer: Stable.

- A negative derivative gives local asymptotic stability.

**4. Can a parameter-sweep animation be treated as a nonautonomous solution?**

Hint: Every frame uses another fixed-parameter system.

Answer: No.

- Actual time dependence of a parameter must be put into the equation and solved.

Prerequisites: Energy, pendulums, and Lyapunov functions.

## Chapter review

Try independently before reading the solutions.

**1. Classify equilibria of $y'=y(2-y)$.**

Hint: Find zeros and test derivatives.

Answer: Zero is unstable and two asymptotically stable.

- The zeros are zero and two; derivative $2-2y$.

**2. Can the origin of $x'=-x^3,y'=-y$ be classified using only its Jacobian?**

Hint: Check for a zero eigenvalue.

Answer: Linearization alone is insufficient.

- Jacobian eigenvalues zero and minus one make linearization inconclusive. A sum-of-squares argument can give more information.

**3. For $y'=\mu y-y^3$ at $\mu=4$, find the stable nonzero equilibria.**

Hint: Find nonzero roots.

Answer: $y=\pm2$.

- $y^2=4$; both derivatives are minus eight.

# Chapter 10 · Power series and Frobenius methods

Use coefficient recurrences for local solutions, distinguishing ordinary points, regular singular points, and convergence domains.

Goals:
- Derive series recurrences
- Distinguish ordinary from regular singular points
- Handle indicial roots and logarithmic solutions

## 10.1 Power-series solutions at ordinary points

*Turn a function into a coefficient sequence*

### The idea

Near an ordinary point, substitute a power series and compare like powers to derive a recurrence.

### Intuition

Initial data fix the first coefficients; the equation supplies later ones in order.

### Another explanation

Series methods complete the solution through coefficients rather than through successive function values.

### Quick check

Which initial coefficients determine a second-order ordinary-point solution?

A. Every coefficient is arbitrary
B. The constant and linear coefficients
C. Only the highest-degree coefficient

Answer: B. They represent initial value and initial derivative.

### What is an ordinary point?

If the standard second-order coefficients are analytic near the expansion point, it is ordinary and solutions have local Taylor series.

### How do you align powers?

After differentiation, shift indices to express every sum in the same power. Check lowest terms separately rather than dropping them.

### Truncations are not exact solutions

A finite partial sum usually satisfies the equation only approximately. Coefficient analyticity supplies a lower bound for convergence radius; a particular solution may extend farther.

### Definition and conditions

Power-series solutions at ordinary points

$$
y=\sum_{n=0}^\infty a_nt^n,\quad y''=\sum_{n=0}^\infty(n+2)(n+1)a_{n+2}t^n
$$

- In standard homogeneous $y^{\prime\prime}+P(t)y^\prime+Q(t)y=0$, coefficients $P,Q$ are analytic near the expansion point. Continuity alone does not guarantee analytic solutions.
- Differentiate termwise within the convergence disk. We expand at ordinary point zero; shift the variable for another center.

### Derivation

Substitute $y''+y=0$.

$$
\sum_{n=0}^\infty[(n+2)(n+1)a_{n+2}+a_n]t^n=0
$$

Every coefficient must vanish.

$$
a_{n+2}=-\frac{a_n}{(n+2)(n+1)}
$$

Initial data fix the even and odd chains.

$$
a_0=y(0),\quad a_1=y'(0)
$$

### Interactive diagram

How do function error and equation residual change with truncation degree?

Gold retains terms up to the chosen degree; blue is exact cosine. Compare function error and equation residual.

Online diagram: #/lesson/ode-power-series?view=visual

### Guided experiment

1. **Degree-two truncation** Set truncation degree $n$ to $2$ and observation time $t$ to $1$.

Preset observation: Only constant and quadratic terms remain.

2. **Degree-six truncation** Set truncation degree $n$ to $6$ and observation time $t$ to $2$.

Preset observation: Error is smaller in the same window.

3. **Degree-twelve truncation** Set truncation degree $n$ to $12$ and observation time $t$ to $3$.

Preset observation: More terms improve the fit, but it remains a finite approximation.

### Worked examples

#### Example 1: The cosine series

For $y''+y=0,y(0)=1,y'(0)=0$, calculate through degree four.

- The recurrence gives $a_2=-1/2,a_3=0,a_4=1/24$.
- Every odd coefficient is zero.

**Answer: $y=1-t^2/2+t^4/24+\cdots$.**

#### Example 2: A variable-coefficient recurrence

For $y''=ty,y(0)=1,y'(0)=0$, calculate through degree three.

- The constant coefficient gives $a_2=0$.
- The linear coefficient gives $6a_3=a_0=1$.

**Answer: $y=1+t^3/6+\cdots$.**

### Common mistakes

- **Index shifts need no check of starting terms.** The lowest summation terms may need separate treatment.

- **Agreement after plotting more terms proves convergence.** Convergence requires analytic theory or an independent estimate.

### Exercises and solutions

**1. In the recurrence for $y''+y=0$, how are $a_4$ and $a_2$ related?**

Hint: Set the recurrence index to two.

Answer: $a_4=-a_2/12$.

- $a_4=-a_2/(4\times3)$.

**2. Which familiar solution matches $a_0=0,a_1=1$?**

Hint: The odd chain alternates signs.

Answer: $\sin t$.

- The result is $t-t^3/6+\cdots$.

**3. Does a finite series truncation usually solve the equation exactly?**

Hint: Higher-degree residuals remain.

Answer: Usually not.

- Exactness occurs only in special terminating cases.

**4. Why does the constant term of $y''=ty$ give $a_2=0$?**

Hint: Multiplication by time leaves no constant on the right.

Answer: Compare constant coefficients.

- The left constant is $2a_2$.

Prerequisites: Parameters and basic bifurcations, Taylor polynomials.

## 10.2 Regular singular points and indicial equations

*Let a solution begin with a fractional power*

### The idea

Near a regular singular point, a solution may need a power prefactor. Frobenius uses lowest-order balance to determine that exponent.

### Intuition

Ordinary Taylor series start at integer power zero; singularities may require a different initial scale.

### Another explanation

Determine the singularity's strength before choosing a starting power rather than assuming an ordinary polynomial.

### Quick check

Which quantities are checked for a regular singular point?

A. Analyticity of $tP$ and $t^2Q$
B. Only the highest derivative order
C. Only whether the forcing vanishes

Answer: A. These scaled coefficients measure singularity strength.

### Check the singularity type first

For $y''+P(t)y'+Q(t)y=0$, if $tP(t)$ and $t^2Q(t)$ are analytic at zero, zero is a regular singular point.

### Trial form

On positive time, use $y=t^r\sum a_nt^n$ with $a_0\ne0$. The lowest-power term yields the indicial equation.

### What do the roots determine?

Indicial roots give possible starting powers. A noninteger root difference usually gives two Frobenius solutions; integer differences and repeated roots need further analysis and may introduce logarithms.

### Definition and conditions

Regular singular points and indicial equations

$$
r(r-1)+p_0r+q_0=0,\quad p_0=\lim_{t\to0}tP(t),\quad q_0=\lim_{t\to0}t^2Q(t)
$$

- $tP,t^2Q$ is analytic at zero. Construct solutions in the punctured neighborhood $t>0$, without claiming smooth passage through the singularity.

### Derivation

Write the lowest-order terms.

$$
y\sim a_0t^r,\quad y'\sim ra_0t^{r-1},\quad y''\sim r(r-1)a_0t^{r-2}
$$

Retain the coefficient of the smallest power.

$$
a_0[r(r-1)+p_0r+q_0]t^{r-2}=0
$$

A nonzero leading coefficient forces the bracket to vanish.

$$
a_0\ne0\Rightarrow r(r-1)+p_0r+q_0=0
$$

### Interactive diagram

How do negative, fractional, and integer starting powers differ near zero?

Compare near-zero shapes for different starting powers. Changing this parameter also changes the equation. Only one solution is plotted, not a second-order general solution.

Online diagram: #/lesson/ode-frobenius?view=visual

### Guided experiment

1. **Negative power** Set starting power $r$ to $-1$ and positive time $t$ to $0.25$.

Preset observation: It grows near zero.

2. **Fractional power** Set starting power $r$ to $0.5$ and positive time $t$ to $0.25$.

Preset observation: The function tends to zero while its derivative may grow.

3. **Integer power** Set starting power $r$ to $2$ and positive time $t$ to $1$.

Preset observation: Ordinary polynomials are special starting scales too.

### Worked examples

#### Example 1: Distinct indicial roots

Find the indicial roots of $t^2y''+ty'-y=0$.

- $p_0=1,q_0=-1$.
- The indicial equation is $r^2-1$.

**Answer: $r=1,-1$; in this example the solutions are $Ct+D/t$.**

#### Example 2: Test regularity

Classify zero for $y''+y'/t+y/t^2=0$.

- Both $tP=1,t^2Q=1$ are analytic.
- The indicial equation is $r^2+1$.

**Answer: A regular singular point; real positive-time solutions are sine and cosine of logarithmic time.**

### Common mistakes

- **Indicial roots are eigenvalues unrelated to starting powers.** They come from balancing the lowest powers.

- **Every solution stays finite at a regular singular point.** Negative powers or logarithms may diverge there.

### Exercises and solutions

**1. Is zero a regular singular point for $y''+y/t^3=0$?**

Hint: Check time squared times the coefficient.

Answer: No; it is irregular singular.

- $t^2Q=1/t$ is not analytic at zero.

**2. Why must the leading Frobenius coefficient be nonzero?**

Hint: Otherwise the stated starting power is not the lowest one.

Answer: It identifies the actual starting exponent.

- A zero leading term can be absorbed into a higher starting exponent.

**3. Find the indicial roots of $t^2y''+2ty'=0$.**

Hint: Simplify $r(r-1)+2r$.

Answer: $0,-1$.

- The indicial equation is $r(r+1)$.

**4. Can ordinary series and Frobenius be chosen without checking coefficients?**

Hint: Their hypotheses differ.

Answer: No.

- Analyze the expansion point's singularity first.

Prerequisites: Power-series solutions at ordinary points, Euler-Cauchy equations.

## 10.3 Repeated indicial roots and logarithmic solutions

*One series is not every solution*

### The idea

Repeated or integer-separated roots may need a logarithmic second solution rather than two mechanically written power series.

### Intuition

When starting directions coincide, another form supplies the missing degree of freedom.

### Another explanation

The indicial equation finds the starting exponent; the recurrence determines the full solution. Do not stop at the starting point.

### Quick check

What should you do when indicial roots differ by an integer?

A. Write two identical solutions
B. Delete the smaller root immediately
C. Inspect the recurrence or use reduction of order

Answer: C. An integer difference signals additional analysis.

### Noninteger root differences

For the usual real-root regular-singular case, a noninteger difference allows two independent Frobenius constructions.

### What about repeated roots?

Usually find one solution, then obtain the second by reduction of order. A logarithmic term may appear.

### Integer difference does not force a logarithm

Some equations already have two pure-power solutions; others need logarithms. Inspect the recurrence or reduce order before asserting a form.

### Definition and conditions

Repeated indicial roots and logarithmic solutions

$$
t^2y''+ty'=0\Rightarrow y=C+D\ln t\quad(t>0)
$$

- This example has a double zero indicial root. In general integer-difference cases the logarithmic coefficient can vanish.

### Derivation

Take constant one as a known solution.

$$
y_1=1,\quad P(t)=1/t
$$

The reduction-of-order exponential factor is reciprocal time.

$$
e^{-\int Pdt}=t^{-1}
$$

Integration gives an independent logarithmic solution.

$$
y_2=\int t^{-1}dt=\ln t
$$

### Interactive diagram

Which independent direction disappears when the logarithmic term is removed?

Use a repeated-root Euler-Cauchy example to compare constant and logarithmic directions.

Online diagram: #/lesson/ode-frobenius-roots?view=visual

### Guided experiment

1. **Constant direction** Set logarithmic coefficient $D$ to $0$ and positive time $t$ to $2$.

Preset observation: Only the first solution remains.

2. **Logarithmic direction** Set logarithmic coefficient $D$ to $1$ and positive time $t$ to $2$.

Preset observation: The second direction adds independent variation.

3. **Near the singularity** Set logarithmic coefficient $D$ to $1$ and positive time $t$ to $0.25$.

Preset observation: The logarithmic term reveals the near-singular change.

### Worked examples

#### Example 1: Logarithmic independence

Verify independence of $1,\ln t$ on positive time.

- Their Wronskian is $1/t$.
- It is nowhere zero on the positive interval.

**Answer: They form a complete fundamental pair.**

#### Example 2: Integer difference without a logarithm

For $t^2y''-2y=0$, the roots differ by three. Is a logarithm required?

- The roots are two and minus one.
- The powers $t^2,t^{-1}$ are already independent.

**Answer: No logarithm is needed.**

### Common mistakes

- **A repeated indicial root supplies only one solution.** Second order still needs another independent solution.

- **Integer root differences automatically specify one logarithmic formula.** The actual recurrence or reduction determines the logarithmic term.

### Exercises and solutions

**1. Does writing the same Frobenius solution twice work for a repeated root?**

Hint: Check independence.

Answer: Invalid.

- Repetition supplies only one direction.

**2. Does an integer root difference always give a nonzero logarithmic term?**

Hint: Consider the Euler-Cauchy counterexample.

Answer: Not necessarily.

- Distinct powers may already form the full solution.

**3. Differentiate $\ln t$.**

Hint: Work on positive time.

Answer: $1/t$.

- Differentiate directly.

**4. Does a logarithm diverging at zero contradict regular singularity?**

Hint: Regularity constrains scaled coefficients, not finiteness of every solution.

Answer: No contradiction.

- The definition permits this weak singularity.

Prerequisites: Regular singular points and indicial equations.

## 10.4 From recurrences to special functions

*Precise definitions without elementary formulas*

### The idea

Special functions are often defined by differential equations and normalization; recurrences make them computable and checkable.

### Intuition

No elementary formula does not mean no precise answer. Equations, conditions, and convergent series can uniquely specify a function.

### Another explanation

A function can be defined by its rule before receiving a name. What matters is being able to calculate and verify it.

### Quick check

Without an elementary expression, what can still give an exact answer?

A. Only a screenshot
B. A convergent series with explicit conditions
C. Any polynomial fit

Answer: B. A convergent infinite series is a definition, not a finite fit.

### An important equation

The order-zero Bessel equation is $t^2y''+ty'+t^2y=0$, with a regular singular point at zero.

### How is its regular solution defined?

Choose the analytic solution finite at zero and normalized to one, called $J_0$. It is one solution; the second independent solution has a logarithmic singularity near zero.

### Calculation and proof are separate

The recurrence supplies partial sums to any desired accuracy. A ratio test proves this series converges everywhere, while finite truncations remain approximate.

### Definition and conditions

From recurrences to special functions

$$
J_0(t)=\sum_{k=0}^\infty\frac{(-1)^k}{(k!)^2}\left(\frac{t^2}{4}\right)^k
$$

- We construct only the regular order-zero solution. Use $J_0(0)=1,J_0'(0)=0$ as normalization, without treating the singular point as ordinary for the standard initial-value theorem.

### Derivation

Substitute an ordinary power series into this special case.

$$
n^2a_n+a_{n-2}=0\quad(n\ge2),\quad a_1=0
$$

Normalize the constant coefficient to one.

$$
a_{2k}=\frac{(-1)^k}{4^k(k!)^2},\quad a_{2k+1}=0
$$

The term ratio tends to zero, giving convergence at every finite argument.

$$
\left\lvert\frac{u_{k+1}}{u_k}\right\rvert=\frac{t^2}{4(k+1)^2}\to0
$$

### Interactive diagram

How does keeping only the constant differ from retaining more recurrence terms?

Gold is the selected partial sum. Blue uses more convergent terms as a numerical reference, with no external service.

Online diagram: #/lesson/ode-special-functions?view=visual

### Guided experiment

1. **One term** Set retained series terms $n$ to $1$ and observation time $t$ to $2$.

Preset observation: Only normalization constant one remains.

2. **Four terms** Set retained series terms $n$ to $4$ and observation time $t$ to $2$.

Preset observation: The recurrence includes terms through degree six.

3. **More terms** Set retained series terms $n$ to $12$ and observation time $t$ to $4$.

Preset observation: The partial sum approaches the reference within this finite window.

### Worked examples

#### Example 1: Initial terms

Write $J_0$ through degree four.

- The quadratic coefficient is minus one quarter.
- The quartic coefficient is one sixty-fourth.

**Answer: $1-t^2/4+t^4/64+\cdots$.**

#### Example 2: Degree-six coefficient

Find the degree-six coefficient of $J_0$.

- Use series index three.
- The denominator is $4^3(3!)^2=2304$ and the sign negative.

**Answer: $-1/2304$.**

### Common mistakes

- **A special function is just an unexplained name.** Its equation, normalization, and series explicitly construct it.

- **Ordinary-point theorems can be applied at singularities without comment.** Here a series and normalization provide a separate construction.

### Exercises and solutions

**1. What is $J_0(0)$?**

Hint: Only the constant term remains.

Answer: $1$.

- Its normalization value is one.

**2. What is $J_0'(0)$?**

Hint: The series has only even powers.

Answer: $0$.

- Every differentiated term vanishes at zero.

**3. What is its convergence radius?**

Hint: For every fixed argument, the term ratio tends to zero.

Answer: Infinite.

- It converges at every finite real or complex argument.

**4. Why does $J_0$ alone not give the second-order general solution?**

Hint: Two independent solutions are needed.

Answer: The regular normalization selects only one solution.

- An independent singular solution also exists.

Prerequisites: Repeated indicial roots and logarithmic solutions.

## Chapter review

Try independently before reading the solutions.

**1. Find the fourth-degree Taylor truncation for $y''+2y=0,y(0)=1,y'(0)=0$.**

Hint: Use its coefficient recurrence.

Answer: $1-t^2+t^4/6$.

- The quadratic coefficient is minus one and quartic one sixth.

**2. Find the indicial roots of $t^2y''+ty'-4y=0$.**

Hint: Form the indicial equation.

Answer: $\pm2$.

- $r^2-4=0$.

**3. Why is the quartic coefficient of $J_0$ equal to $1/64$?**

Hint: Set the series index to two.

Answer: The recurrence and normalization determine it.

- $4^2(2!)^2=64$, with positive sign.

# Chapter 11 · Numerical solutions, error, and stability

Compare Euler, second-order, and fourth-order methods, then analyze stability, stiffness, and adaptive steps.

Goals:
- Implement basic time stepping
- Distinguish local and global errors
- Check stability and error control

## 11.1 Euler's method

*Take a short step along the current tangent*

### The idea

Euler predicts the next state from the current slope, approximating continuous change with short tangent steps.

### Intuition

Each step treats the slope as temporarily constant. Larger steps usually increase the cost of ignoring its change.

### Another explanation

Euler makes each step and its source of error visible.

### Quick check

Which slope does Euler use at each step?

A. The slope at the current numerical node
B. The average slope over the whole interval
C. The exact slope at the next point

Answer: A. It is an explicit local tangent prediction.

### How is one step calculated?

At node $(t_n,y_n)$, calculate $f(t_n,y_n)$ and take time step $h$.

### What do the line segments mean?

Lines between nodes are numerical interpolation, not exact piecewise-linear motion. Field directions change with location.

### When does it converge?

On a fixed finite interval with sufficient smoothness and state Lipschitz conditions, Euler has first-order global error as step size tends to zero. Do not cross singularities arbitrarily.

### Definition and conditions

Euler's method

$$
t_{n+1}=t_n+h,\qquad y_{n+1}=y_n+h f(t_n,y_n)
$$

- This is explicit Euler with $h>0$ and nodes inside the equation's domain. Error-order claims require a common finite interval and sufficient regularity.

### Derivation

Taylor-expand the exact solution once.

$$
y(t+h)=y(t)+hy'(t)+O(h^2)
$$

Replace its derivative using the equation.

$$
y(t+h)=y(t)+hf(t,y(t))+O(h^2)
$$

Drop the one-step second-order remainder to obtain the update.

$$
y_{n+1}=y_n+hf(t_n,y_n)
$$

### Interactive diagram

With endpoint fixed, how does Euler error change as the mesh is refined?

Compare explicit Euler, Heun, RK4, and the analytic exponential at one endpoint. Segments only connect numerical nodes.

Online diagram: #/lesson/ode-euler?view=visual

### Guided experiment

1. **Coarse mesh** Set equal step count $N$ to $2$ and target time $T$ to $2$.

Preset observation: Methods have different errors at the same endpoint.

2. **Refine the mesh** Set equal step count $N$ to $8$ and target time $T$ to $2$.

Preset observation: Step size is one quarter of its previous value.

3. **Finer mesh** Set equal step count $N$ to $32$ and target time $T$ to $2$.

Preset observation: Compare order-dependent error reduction; finite precision still imposes a floor.

### Worked examples

#### Example 1: One growth step

For $y'=y,y_0=1,h=1/2$, calculate one step.

- The current slope is one.
- The increment is one half.

**Answer: $y_1=3/2$.**

#### Example 2: Two growth steps

Take one more step in the same problem.

- The new slope is $3/2$.
- The added increment is $3/4$.

**Answer: $y_2=9/4$ at time one; the exact value is $e$.**

### Common mistakes

- **Use the very first slope at every step.** Recalculate at the current numerical node.

- **Node-joining lines give the exact solution.** They are numerical interpolation.

### Exercises and solutions

**1. For $y'=-2y,y_0=3,h=0.1$, find one Euler step.**

Hint: The current slope is minus six.

Answer: $2.4$.

- $3+0.1(-6)=2.4$.

**2. For $y'=t,y(0)=1,h=1$, find one Euler step.**

Hint: The starting time is zero.

Answer: $1$; the exact value is $3/2$.

- Its initial slope is zero, so the first increment vanishes.

**3. Roughly what happens to first-order global error when the step is halved?**

Hint: Keep the same endpoint and use the asymptotic regime.

Answer: Approximately one half.

- The leading error is proportional to step size.

**4. If finite numerical nodes cross blow-up time, does that continue the classical solution?**

Hint: A numerical recurrence is not the original solution.

Answer: No.

- The algorithm may output numbers after the differential solution has ceased to extend.

Prerequisites: From recurrences to special functions, Direction fields and solution curves.

## 11.2 Midpoint and Heun second-order methods

*Evaluate another slope to reduce step error*

### The idea

Second-order methods add a slope evaluation and use a midpoint or averaged endpoint slope to improve the step.

### Intuition

Make a rough prediction, then step with a more representative slope.

### Another explanation

Predicting and correcting improves accuracy, while step size and stability still need checking.

### Quick check

Which slope does Heun use in its final update?

A. Only the original initial-value slope
B. Only the starting slope
C. The average of starting and predicted-endpoint slopes

Answer: C. The second evaluation corrects the initial prediction.

### Explicit midpoint

Predict the midpoint with a half Euler step, then use its slope for the full step.

### Heun's method

Predict the endpoint, then average slopes at the start and predicted endpoint. Unlike implicit trapezoidal stepping, it needs no equation solve.

### What order means

With suitable smoothness, both have third-order one-step error and second-order global error. They generally differ on nonlinear problems.

### Definition and conditions

Midpoint and Heun second-order methods

$$
k_1=f(t_n,y_n),\ k_2=f(t_n+h,y_n+hk_1),\ y_{n+1}=y_n+\frac h2(k_1+k_2)
$$

- This is explicit Heun. Midpoint instead uses a half-step prediction. Second-order convergence needs smoothness and stable error propagation.

### Derivation

Predict the endpoint with the current slope.

$$
y_*=y_n+hk_1
$$

Reevaluate the slope at that prediction.

$$
k_2=f(t_n+h,y_*)
$$

Average the two slopes for the accepted update.

$$
y_{n+1}=y_n+\frac h2(k_1+k_2)
$$

### Interactive diagram

For the same step count, how much can another slope evaluation improve the result?

Compare explicit Euler, Heun, RK4, and the analytic exponential at one endpoint. Segments only connect numerical nodes.

Online diagram: #/lesson/ode-second-order-numerics?view=visual

### Guided experiment

1. **Coarse mesh** Set equal step count $N$ to $2$ and target time $T$ to $2$.

Preset observation: Methods have different errors at the same endpoint.

2. **Refine the mesh** Set equal step count $N$ to $8$ and target time $T$ to $2$.

Preset observation: Step size is one quarter of its previous value.

3. **Finer mesh** Set equal step count $N$ to $32$ and target time $T$ to $2$.

Preset observation: Compare order-dependent error reduction; finite precision still imposes a floor.

### Worked examples

#### Example 1: One Heun step

$y'=y,y_0=1,h=1$.

- $k_1=1$ gives predicted value two.
- $k_2=2$ gives increment $3/2$.

**Answer: $y_1=5/2$.**

#### Example 2: One midpoint step

Apply explicit midpoint to the same problem.

- The midpoint prediction is $3/2$.
- Multiply its slope by the full step.

**Answer: $y_1=5/2$; agreement in this example does not imply identical methods.**

### Common mistakes

- **One extra slope evaluation makes every step exact.** It raises error order under regularity assumptions only.

- **Heun's second slope comes from the true future.** It comes from a computable prediction.

### Exercises and solutions

**1. By what factor does second-order leading global error change when the step is halved?**

Hint: Error is proportional to the step squared.

Answer: About $1/4$.

- Squaring gives one quarter.

**2. Does Heun evaluate its endpoint slope at the exact endpoint state?**

Hint: That exact state is unknown.

Answer: No; at the predicted value.

- It uses the Euler prediction.

**3. For $y'=t,y(0)=0,h=1$, find one Heun step.**

Hint: Start and endpoint slopes are zero and one.

Answer: $1/2$, exactly correct in this example.

- Their average times step one gives the increment.

**4. Is explicit Heun identical to implicit trapezoidal stepping?**

Hint: One endpoint state is predicted; the other must be solved for.

Answer: Different.

- The implicit method uses the unknown new state and requires solving an equation.

Prerequisites: Euler's method.

## 11.3 Classical fourth-order Runge-Kutta

*Combine four slope evaluations into one step*

### The idea

Classical RK4 combines four carefully placed slope evaluations for fourth-order global accuracy under smoothness hypotheses.

### Intuition

Evaluate two midpoints and an endpoint, then combine with the appropriate weights.

### Another explanation

RK4 accuracy comes from stage locations and weights working together, rather than repeated unweighted averaging.

### Quick check

What does fourth order mean?

A. Always four significant digits
B. Leading global error scales with the fourth power of step size under suitable conditions
C. It applies only to fourth-order differential equations

Answer: B. Method order and differential-equation order are different notions.

### Where are the evaluations?

At the start, first predicted midpoint, second predicted midpoint, and predicted endpoint. Each stage uses the previous slope.

### What are the weights?

Use one, two, two, one, divided by six, rather than a simple four-slope average.

### Higher order still has limits

Smooth solutions on fixed finite intervals give fourth-order global accuracy. Stiffness, jumps, and singularities can defeat that advantage. Split steps at known jumps.

### Definition and conditions

Classical fourth-order Runge-Kutta

$$
k_1=f(t,y),\ k_2=f(t+h/2,y+hk_1/2),\ k_3=f(t+h/2,y+hk_2/2),\ k_4=f(t+h,y+hk_3),\quad y_+=y+\frac h6(k_1+2k_2+2k_3+k_4)
$$

- Stages here are slopes, not already multiplied by step size. Fourth-order convergence needs sufficient smoothness, solution existence, and stable error propagation.

### Derivation

Calculate the four stages for test equation $y'=y$.

$$
k_1=y,\ k_2=y(1+h/2),\ k_3=y(1+h/2+h^2/4),\ k_4=y(1+h+h^2/2+h^3/4)
$$

Their weighted update matches the exponential through degree four.

$$
y_+=y\left(1+h+\frac{h^2}{2}+\frac{h^3}{6}+\frac{h^4}{24}\right)
$$

The difference begins at degree five.

$$
e^h-R(h)=O(h^5)
$$

### Interactive diagram

As the mesh is refined, how does RK4 error compare with lower-order methods?

Compare explicit Euler, Heun, RK4, and the analytic exponential at one endpoint. Segments only connect numerical nodes.

Online diagram: #/lesson/ode-rk4?view=visual

### Guided experiment

1. **Coarse mesh** Set equal step count $N$ to $2$ and target time $T$ to $2$.

Preset observation: Methods have different errors at the same endpoint.

2. **Refine the mesh** Set equal step count $N$ to $8$ and target time $T$ to $2$.

Preset observation: Step size is one quarter of its previous value.

3. **Finer mesh** Set equal step count $N$ to $32$ and target time $T$ to $2$.

Preset observation: Compare order-dependent error reduction; finite precision still imposes a floor.

### Worked examples

#### Example 1: A unit step

Apply RK4 to $y'=y,y_0=1,h=1$.

- The stages are $1,3/2,7/4,11/4$.
- The weighted increment is $41/24$.

**Answer: $y_1=65/24\approx2.708333$.**

#### Example 2: Constant slope

Take one RK4 step for $y'=3,y_0=2,h=1/2$.

- All four slopes are three.
- Weights sum to six, giving increment $3/2$.

**Answer: $y_1=7/2$, exact in this case.**

### Common mistakes

- **Fourth order means only the fourth decimal place can be wrong.** Order describes error scaling as step size tends to zero.

- **Four stages repeat sampling at the same position.** Stage locations differ and depend on earlier stages.

### Exercises and solutions

**1. How many right-hand-side evaluations does one usual RK4 step use?**

Hint: Count the stages.

Answer: $4$.

- One for each of four stages.

**2. In the asymptotic regime, how does fourth-order global error change when step size halves?**

Hint: Error is proportional to the fourth power.

Answer: About $1/16$.

- It shrinks to one sixteenth.

**3. Can RK4 stably solve decay with arbitrarily large steps?**

Hint: Accuracy order is not unconditional stability.

Answer: No.

- Its amplification factor can leave the unit disk for large negative arguments.

**4. Why place a node at a known step discontinuity?**

Hint: Crossing nonsmooth forcing breaks the order assumptions.

Answer: Avoid crossing the jump in one step.

- Split into smooth segments for the error analysis.

Prerequisites: Midpoint and Heun second-order methods.

## 11.4 Local and global errors

*Step errors also propagate*

### The idea

Local error measures one update from a correct start. Global error also includes previous error propagation and accumulation.

### Intuition

Each step can deviate, and the next step starts from that already perturbed location.

### Another explanation

Compare errors at the same endpoint to compare the same problem.

### Quick check

Why is global error usually one order lower than local step error?

A. A fixed interval requires roughly inverse-step-size many updates
B. Global error is always more accurate
C. The formula is wrong

Answer: A. Step count and propagation both influence total error.

### Our local-error convention

One-step local error compares an update from the exact starting state with the exact endpoint, without dividing by step size. Other books may normalize it, changing the stated power by one.

### How do orders relate?

On a smooth finite interval with stable error propagation, an order-$p$ method usually has one-step error $O(h^{p+1})$ and global error $O(h^p)$.

### How do you check a calculation?

Compare step sizes at the same endpoint. Theoretical error ratios suggest the asymptotic regime, but two close approximations may share bias and do not prove exactness.

### Definition and conditions

Local and global errors

$$
e_n=y(t_n)-y_n,\quad\text{one step }O(h^{p+1}),\quad\text{global }O(h^p)
$$

- Assume a fixed finite interval, sufficient regularity, and stable propagation. Our local error is not divided by step size.

### Derivation

Split endpoint error into new error and propagated error.

$$
e_{n+1}=\text{new local error}+\text{propagated old error}
$$

On a fixed interval, step count is inversely proportional to step size.

$$
N\approx T/h
$$

Stable accumulation leaves one less power in global error.

$$
N\,O(h^{p+1})=O(h^p)
$$

### Interactive diagram

Why does endpoint error depend on more than the last step?

Compare explicit Euler, Heun, RK4, and the analytic exponential at one endpoint. Segments only connect numerical nodes.

Online diagram: #/lesson/ode-error-control?view=visual

### Guided experiment

1. **Coarse mesh** Set equal step count $N$ to $2$ and target time $T$ to $2$.

Preset observation: Methods have different errors at the same endpoint.

2. **Refine the mesh** Set equal step count $N$ to $8$ and target time $T$ to $2$.

Preset observation: Step size is one quarter of its previous value.

3. **Finer mesh** Set equal step count $N$ to $32$ and target time $T$ to $2$.

Preset observation: Compare order-dependent error reduction; finite precision still imposes a floor.

### Worked examples

#### Example 1: Estimate order from an error ratio

Error falls from $0.04$ to $0.01$ when the step halves. Estimate the order.

- The error ratio is four.
- $2^p=4$.

**Answer: Approximately second order, assuming the leading-error regime.**

#### Example 2: Euler local error

For $y'=y$, start at exact value one and take step $h$.

- Euler gives $1+h$ versus exact $e^h$.
- Their difference begins at the quadratic term.

**Answer: One-step error $h^2/2+O(h^3)$.**

### Common mistakes

- **One step's local error equals final global error.** Earlier errors also propagate.

- **Smaller steps always reduce error at the theoretical order.** Rounding, singularities, and nonsmoothness can change the trend.

### Exercises and solutions

**1. What is RK4's usual one-step local-error order?**

Hint: One greater than global order.

Answer: $O(h^5)$.

- Fifth order under this book's convention without dividing by step size.

**2. Does halving error once prove first-order convergence?**

Hint: Rule out cancellation and other coincidences.

Answer: A single comparison is insufficient proof.

- Use a refinement sequence and supported hypotheses.

**3. Should global-error comparisons fix endpoint or step count?**

Hint: Compare the same problem at the same time.

Answer: Fix the endpoint.

- Fix the endpoint and change step count with step size.

**4. Must two nearby approximations be close to the exact solution?**

Hint: They may share a systematic bias.

Answer: Not necessarily.

- Use a reliable error estimate or independent reference too.

Prerequisites: Classical fourth-order Runge-Kutta.

## 11.5 Absolute stability and stiffness

*Exact decay can become numerical growth*

### The idea

Numerical methods have their own dynamics. Excessive steps can make a decaying problem oscillate or explode numerically.

### Intuition

Exact stability does not guarantee discrete stability.

### Another explanation

Inspect each step's error amplification before interpreting a numerical curve.

### Quick check

What is explicit Euler's stability condition on the negative-real test equation?

A. $h\lambda>2$
B. $h\lambda<0$ alone is sufficient
C. $-2<h\lambda<0$

Answer: C. Magnitude below one restricts the allowed step.

### The test equation

For $y'=\lambda y$, an update has form $y_{n+1}=R(h\lambda)y_n$. Decay requires an amplification-factor magnitude below one.

### Euler's restriction

Explicit Euler has $R(z)=1+z$. Its negative-real stability interval is $-2<h\lambda<0$. Boundary magnitudes equal one and do not reproduce decay.

### What is stiffness?

Rapidly decaying modes can force explicit steps far smaller than slow-process accuracy requires. Implicit Euler's negative-real-axis stability removes this restriction, but accuracy still needs control.

### Definition and conditions

Absolute stability and stiffness

$$
R_{\rm EE}(z)=1+z,\quad R_{\rm IE}(z)=\frac1{1-z},\quad \lvert R(z)\rvert<1
$$

- Use $\operatorname{Re}\lambda<0$ for the test equation. A stability region describes a method, not unconditional correctness for every nonlinear problem.

### Derivation

Apply explicit Euler to the test equation.

$$
y_{n+1}=(1+h\lambda)y_n
$$

On negative real roots, keep the factor strictly between minus one and one.

$$
-1<1+h\lambda<1\Rightarrow -2<h\lambda<0
$$

Implicit Euler evaluates the right side at the new state.

$$
y_{n+1}=y_n+h\lambda y_{n+1}\Rightarrow y_{n+1}=\frac{y_n}{1-h\lambda}
$$

### Interactive diagram

Can explicit Euler keep growing even when the exact solution decays?

The exact solution decays; each Euler curve follows its own amplification factor. Excessive numerical states stop being drawn with an explicit explanation.

Online diagram: #/lesson/ode-stability-stiffness?view=visual

### Guided experiment

1. **Explicitly stable** Set negative rate $\lambda$ to $-4$, step size $h$ to $0.2$, and step count $N$ to $8$.

Preset observation: The explicit factor is zero point two, giving decay.

2. **Boundary** Set negative rate $\lambda$ to $-4$, step size $h$ to $0.5$, and step count $N$ to $8$.

Preset observation: The explicit factor is minus one: alternating signs without amplitude decay.

3. **Explicitly unstable** Set negative rate $\lambda$ to $-4$, step size $h$ to $0.8$, and step count $N$ to $8$.

Preset observation: The explicit factor exceeds one in magnitude while the implicit factor still decays.

### Worked examples

#### Example 1: Spurious growth

Apply explicit Euler to $y'=-10y$ with step $0.3$.

- Its factor is $1-3=-2$.
- Magnitude exceeds one, producing alternating growth.

**Answer: Numerically unstable despite exact decay.**

#### Example 2: Implicit decay

Apply implicit Euler to the same problem.

- Its factor is $1/(1+3)=1/4$.
- Each step decays, though not necessarily accurately.

**Answer: Stable, with factor $1/4$.**

### Common mistakes

- **A stable exact solution makes every discretization stable.** Discrete amplification factors differ.

- **A stable implicit method needs no error check.** Control stability and accuracy separately.

### Exercises and solutions

**1. For $\lambda=-4$, which positive steps make explicit Euler stable?**

Hint: Solve $-2<-4h<0$.

Answer: $(0,1/2)$.

- This gives $0<h<1/2$.

**2. Does boundary choice $h\lambda=-2$ reproduce decay?**

Hint: Its factor is minus one.

Answer: No.

- Magnitude stays fixed while signs alternate.

**3. Does stability mean the error is small enough?**

Hint: A large implicit step can still be inaccurate.

Answer: No.

- Stability controls amplification, not exact tracking.

**4. Why do stiff fast modes affect slow-process computation?**

Hint: Explicit stability is limited by the largest negative-root magnitude.

Answer: Stability demands a smaller step.

- Even a rapidly disappearing mode can constrain every step.

Prerequisites: Local and global errors.

## 11.6 Adaptive steps and the solving workflow

*Use error estimates to choose the next step*

### The idea

Adaptive methods accept or reject steps using local estimates and adjust their length, instead of always using the smallest step.

### Intuition

Take larger steps in smooth regions and smaller ones where error estimates demand them.

### Another explanation

Numerical credibility comes from explained stopping criteria, error estimates, and recalculation, rather than a smooth-looking curve.

### Quick check

What follows when a step exceeds tolerance?

A. Accept it and warn later
B. Reject, reduce the step, and recompute
C. Simply display a smaller error

Answer: B. Never advance from an unaccepted state.

### How is error estimated?

From the same start, compare one step $h$ with two steps $h/2$. For order $p$ in the asymptotic regime, fine-step local error is approximately their difference divided by $2^p-1$.

### How is a step accepted?

Compare estimated error with combined absolute and relative tolerances. If too large, reduce the step and retry. Rejected states are not completed progress.

### A complete workflow

Check domain, events, and known jumps, then choose method and tolerances. Record accepted steps and estimates, and verify through refinement or independent calculation. Report minimum-step or maximum-step stops rather than claiming success.

### Definition and conditions

Adaptive steps and the solving workflow

$$
\widehat e\approx\frac{y_{h/2,h/2}-y_h}{2^p-1},\qquad h_{\rm new}=\eta h\left(\frac{\mathrm{tol}}{\lvert\widehat e\rvert}\right)^{1/(p+1)}
$$

- Use the same starting and ending points, smoothness, and an asymptotic error expansion, with $0<\eta<1$. Bound scale changes and maximum step size. This local estimate is not a global-error guarantee.

### Derivation

Let the coarse leading local error be $Ch^{p+1}$.

$$
e_{\rm coarse}\approx Ch^{p+1}
$$

Two half steps reduce the leading error by factor $2^p$.

$$
e_{\rm fine}\approx\frac{Ch^{p+1}}{2^p}
$$

Divide the difference by the scale-ratio difference to estimate fine-step error.

$$
e_{\rm fine}\approx\frac{y_{\rm fine}-y_{\rm coarse}}{2^p-1}
$$

### Interactive diagram

How do accepted step count and endpoint error change when local tolerance tightens?

Heun step doubling estimates fine-step local error. Actual accepted nodes and rejected attempts are shown. Tolerance is not a global-error promise.

Online diagram: #/lesson/ode-adaptive?view=visual

### Guided experiment

1. **Loose tolerance** Set local absolute tolerance $\mathrm{tol}$ to $0.01$ and target time $T$ to $2$.

Preset observation: Larger accepted steps are allowed.

2. **Tighten tolerance** Set local absolute tolerance $\mathrm{tol}$ to $0.001$ and target time $T$ to $2$.

Preset observation: Usually more accepted nodes are needed.

3. **Stricter still** Set local absolute tolerance $\mathrm{tol}$ to $1e-05$ and target time $T$ to $2$.

Preset observation: Continue controlling local estimates while reporting endpoint global error.

### Worked examples

#### Example 1: A second-order estimate

Fine and coarse results differ by $0.003$. Estimate fine-step local error magnitude.

- At order two, the denominator is $4-1=3$.
- Divide the absolute difference by three.

**Answer: About $0.001$.**

#### Example 2: After rejection

Estimated error is $0.02$ and tolerance $0.001$. Can the step be accepted?

- The estimate is twenty times tolerance.
- Reduce the step and recompute from the last accepted state.

**Answer: Reject it; do not advance from it.**

### Common mistakes

- **Adaptive stepping means always reducing the step.** Smooth regions should also allow suitable increases.

- **Returning numbers proves the target interval was covered.** Verify actual endpoint completion and check failures or domain escapes.

### Exercises and solutions

**1. What denominator is used for fourth-order step doubling?**

Hint: Calculate two to the fourth minus one.

Answer: $15$.

- $16-1=15$.

**2. Why is relative tolerance insufficient near zero?**

Hint: Its allowed absolute error would also approach zero.

Answer: Combine it with absolute tolerance.

- Add absolute tolerance for a reasonable near-zero scale.

**3. Does passing local estimates prove global error stays below that tolerance?**

Hint: Local errors propagate and accumulate.

Answer: No proof.

- Global analysis or independent verification is still needed.

**4. What should a solver report if minimum step size still fails tolerance?**

Hint: Do not pretend success.

Answer: Stop explicitly and report.

- Report stopping location and reason, retaining the accepted interval.

Prerequisites: Absolute stability and stiffness.

## Chapter review

Try independently before reading the solutions.

**1. For $y'=-3y,y_0=2,h=1/3$, find one Euler step.**

Hint: Calculate the amplification factor.

Answer: $0$, not exact tracking.

- $1+h\lambda=0$ makes the numerical value zero, while the exact value remains $2/e$.

**2. Halving a step reduces observed error by about eight. Estimate the order.**

Hint: Solve $2^p=8$.

Answer: About third order.

- This gives third order, assuming the asymptotic regime.

**3. For $y'=-20y$, find the explicit Euler stability interval.**

Hint: Use negative-real-axis stability.

Answer: $0<h<1/10$.

- $-2<-20h<0$.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. Solve $y'=5y,y(0)=-2$.**

Hint: Exponential solutions also allow negative initial values.

Answer: $-2e^{5t}$.

- The initial condition gives constant minus two.

**2. Find the maximal interval for $y'=y^2,y(0)=1/3$.**

Hint: Locate the first denominator zero.

Answer: $(-\infty,3)$.

- $y=1/(3-t)$; the initial time zero lies left of the pole.

**3. Solve $y'+3y=9,y(0)=0$.**

Hint: Subtract equilibrium three.

Answer: $3(1-e^{-3t})$.

- The difference decays by $e^{-3t}$, starting at minus three.

**4. In logistic model $y'=3y(1-y/4)$, how does initial value four evolve?**

Hint: It is exactly equilibrium.

Answer: $y\equiv4$.

- The right side stays zero.

**5. Does $y'=\lvert y\rvert$ satisfy a local state Lipschitz condition?**

Hint: Apply the triangle inequality for absolute values.

Answer: Yes, with constant one, despite nondifferentiability at zero.

- $\lvert\lvert u\rvert-\lvert v\rvert\rvert\le\lvert u-v\rvert$.

**6. Solve $y''-4y=0,y(0)=0,y'(0)=4$.**

Hint: The roots are plus and minus two.

Answer: $e^{2t}-e^{-2t}$.

- Coefficient sum is zero and difference two.

**7. Solve $y''+4y'+4y=0,y(0)=0,y'(0)=1$.**

Hint: A double root at minus two.

Answer: $te^{-2t}$.

- General solution $(C+Dt)e^{-2t}$ has initial coefficients zero and one.

**8. Find a resonant particular solution of $y''+4y=2\cos2t$.**

Hint: Divide forcing amplitude by twice the natural frequency.

Answer: $t\sin2t/2$.

- $2/(2\times2)=1/2$.

**9. Classify damping in $m=1,k=4,c=1$.**

Hint: Compare one with sixteen.

Answer: Underdamped.

- The discriminant is negative.

**10. Solve $t^2y''+2ty'-2y=0$ on positive time.**

Hint: Its indicial equation is $r^2+r-2$.

Answer: $Ct+Dt^{-2}$.

- Roots are one and minus two.

**11. Is $y''+y=0,y(0)=y(2\pi)=0$ unique?**

Hint: Retain the sine direction.

Answer: Not unique.

- Every scalar multiple of sine satisfies it.

**12. Invert $4/((s+2)^2+16)$.**

Hint: Recognize a shifted sine.

Answer: $e^{-2t}\sin4t$.

- Angular frequency four and decay rate two.

**13. Solve $y'+y=H(t-3)$ with zero initial data.**

Hint: Delay the unit-step response.

Answer: $H(t-3)(1-e^{-(t-3)})$.

- Before switching it is zero; afterward $1-e^{-(t-3)}$.

**14. Find the convolution of constant one with the time function.**

Hint: Integrate $t-\tau$.

Answer: $t^2/2$.

- $\int_0^t(t-\tau)d\tau=t^2/2$.

**15. For $x'=-x,y'=y$, which initial states tend to zero forward in time?**

Hint: Remove the growing direction.

Answer: $y_0=0$.

- The second initial component must vanish; the first is arbitrary.

**16. Find the exponential of matrix $\begin{pmatrix}0&-2\\2&0\end{pmatrix}$.**

Hint: It is the standard rotation block.

Answer: $\begin{pmatrix}\cos2t&-\sin2t\\\sin2t&\cos2t\end{pmatrix}$.

- Angular velocity two, without radial scaling.

**17. Is zero stable for $y'=y^2(1-y)$?**

Hint: Inspect signs on both sides.

Answer: Unstable overall, with one-sided attraction.

- Near zero the right side is positive on both sides: negative states approach and positive states leave.

**18. An undamped pendulum starts at $(0,2)$. Find its energy.**

Hint: Only kinetic energy contributes.

Answer: $2$, on the separatrix energy level.

- Half the squared velocity equals two.

**19. Find the degree-five truncation for $y''+y=0,y(0)=0,y'(0)=2$.**

Hint: Use twice the sine Taylor series.

Answer: $2t-t^3/3+t^5/60$.

- Odd coefficients are two, minus one third, and one sixtieth.

**20. Which two coefficients are free in a second-order ordinary-point series?**

Hint: Read the function value and derivative.

Answer: $a_0=y(0),a_1=y'(0)$.

- The constant and linear coefficients respectively.

**21. For $y'=-8y$, is explicit Euler with step $1/2$ stable?**

Hint: Inspect its amplification factor.

Answer: Unstable.

- $1-4=-3$ has magnitude greater than one.

**22. In RK4 step doubling, fine and coarse results differ by $0.015$. Estimate local error magnitude.**

Hint: Divide by fifteen.

Answer: About $0.001$.

- $0.015/15=0.001$, only a local asymptotic estimate.

# Glossary

- **What a differential equation describes**: A differential equation constrains an unknown function and its derivatives. Solving means finding functions satisfying that constraint.

- **Order, linearity, and standard form**: The highest derivative determines order. First-power dependence on the unknown and its derivatives determines linearity.

- **Initial values and solution intervals**: Initial data select a member of a solution family. The answer must also state how far it extends.

- **Direction fields and solution curves**: A direction field draws the permitted slope at each point. A solution's tangent must match it.

- **Separable equations**: If the rate is a product of time and state factors, integrate the two variables separately.

- **First-order linear equations and integrating factors**: An integrating factor turns a first-order linear equation into a product derivative ready to integrate.

- **Growth, cooling, and mixing**: Model inflow and outflow first. Units, initial conditions, and validity assumptions give the solution its physical meaning.

- **Exact equations and potential functions**: An exact equation is a total differential along solutions, making each solution a level curve.

- **Homogeneous substitutions and integrating-factor tests**: When the right side depends only on a ratio, a ratio substitution can make the first-order equation separable.

- **Bernoulli equations and the logistic model**: A Bernoulli substitution linearizes a specific power nonlinearity while requiring separate checks for divided-out solutions.

- **Local existence and uniqueness**: Continuity commonly ensures local existence. Local Lipschitz dependence on state further ensures uniqueness.

- **Integral equations and Picard iteration**: Rewriting an initial-value problem as an integral equation lets successive curve substitutions construct a local solution.

- **Maximal intervals and finite-time blow-up**: Local solutions can be continued repeatedly. A finite maximal endpoint usually signals a domain boundary or unbounded state.

- **Continuous dependence and error growth**: Under Lipschitz hypotheses on a common existence interval, an exponential upper bound controls initial-data error.

- **Superposition and second-order solution spaces**: Every second-order homogeneous linear solution is a combination of two linearly independent solutions.

- **Wronskians and Abel's formula**: The Wronskian combines values and derivatives in a determinant. For solutions of one linear equation, it tests independent matching of initial data.

- **Characteristic equations and distinct real roots**: Substituting exponentials into a constant-coefficient linear equation turns derivatives into an algebraic equation for growth rates.

- **Complex roots and real oscillations**: A conjugate root pair produces real oscillations with growth or decay.

- **Repeated roots and reduction of order**: A double root needs a time-times-exponential second solution. A known solution also permits reduction of order to find another.

- **Undetermined coefficients and resonance corrections**: For forcing closed under differentiation in finitely many forms, choose a trial family and solve for its coefficients.

- **Variation of parameters**: Replace constants multiplying homogeneous solutions by functions and determine their change through two linear conditions.

- **Damped oscillation and critical damping**: Damping dissipates energy through velocity. Characteristic roots distinguish underdamped, critical, and overdamped motion.

- **Forced oscillation and resonance**: An undamped system driven at its natural frequency can develop a growing resonant term.

- **Frequency response, amplitude, and phase**: A positively damped linear system eventually oscillates at the forcing frequency, with frequency-dependent amplitude and phase.

- **Higher-order constant-coefficient linear equations**: Roots and multiplicities construct every independent homogeneous solution, with total count equal to the order.

- **Euler-Cauchy equations**: Euler-Cauchy coefficients match derivative orders by powers, allowing power trials or logarithmic-time simplification.

- **First-order systems and state variables**: A higher-order equation becomes a first-order system using the function and lower derivatives as state.

- **Boundary conditions and eigenvalue problems**: Conditions at different locations can give no solution, multiple solutions, or nonzero solutions only for selected parameters.

- **Laplace transforms and convergence**: A Laplace transform integrates the future against a decaying exponential, turning a time function into a function of a transform variable.

- **Basic transforms, shifts, and inverses**: Linearity, exponential shifts, and partial fractions reduce many inversions to basic functions.

- **Solving initial-value problems with Laplace transforms**: Derivative transforms retain initial data as algebraic terms, turning the differential solve into a transform-space algebraic solve.

- **Step inputs and time delay**: Steps record when an input begins. The delay rule moves both the switch and the function's internal clock.

- **Impulses and jump conditions**: An impulse is an ideal concentrated input defined through its integral action, not an ordinary infinitely tall function.

- **Convolution and general forcing responses**: A linear time-invariant system's zero-state response is the convolution of its input with the causal impulse response.

- **Linear systems and fundamental matrices**: A fundamental matrix collects independent solution columns and maps initial states to later states.

- **Eigendirections, nodes, and saddles**: Constant-system eigenvectors give straight motion directions; eigenvalues give their exponential rates.

- **Matrix exponentials and continuous evolution**: Matrix exponentials generalize scalar exponential evolution to linear systems, including nondiagonalizable matrices.

- **Repeated-root systems and generalized eigendirections**: When eigenvectors are missing, the nilpotent part creates time polynomials in the exponential, supplying independent solutions.

- **Complex eigenvalues, rotation, and stability**: Complex real parts control radial trends and imaginary parts rotation. A linear center is not asymptotically stable.

- **Forced systems and variation of constants**: A forced linear solution has initial-state propagation and accumulated forcing propagation.

- **Autonomous equations and phase lines**: Signs of a scalar autonomous field determine increase and decrease; equilibria divide the state axis into intervals.

- **Jacobians and local linearization**: The Jacobian gives a nonlinear system's first-order model near equilibrium. Hyperbolic stability types can be classified by that linearization.

- **Nullclines and predator-prey models**: Nullclines divide phase space into component-increase and decrease regions; their intersections are equilibria.

- **Energy, pendulums, and Lyapunov functions**: Energy or a Lyapunov function controls a whole state using one scalar without solving every trajectory.

- **Parameters and basic bifurcations**: A bifurcation is a change in equilibrium count or stability structure as a parameter crosses a critical value.

- **Power-series solutions at ordinary points**: Near an ordinary point, substitute a power series and compare like powers to derive a recurrence.

- **Regular singular points and indicial equations**: Near a regular singular point, a solution may need a power prefactor. Frobenius uses lowest-order balance to determine that exponent.

- **Repeated indicial roots and logarithmic solutions**: Repeated or integer-separated roots may need a logarithmic second solution rather than two mechanically written power series.

- **From recurrences to special functions**: Special functions are often defined by differential equations and normalization; recurrences make them computable and checkable.

- **Euler's method**: Euler predicts the next state from the current slope, approximating continuous change with short tangent steps.

- **Midpoint and Heun second-order methods**: Second-order methods add a slope evaluation and use a midpoint or averaged endpoint slope to improve the step.

- **Classical fourth-order Runge-Kutta**: Classical RK4 combines four carefully placed slope evaluations for fourth-order global accuracy under smoothness hypotheses.

- **Local and global errors**: Local error measures one update from a correct start. Global error also includes previous error propagation and accumulation.

- **Absolute stability and stiffness**: Numerical methods have their own dynamics. Excessive steps can make a decaying problem oscillate or explode numerically.

- **Adaptive steps and the solving workflow**: Adaptive methods accept or reject steps using local estimates and adjust their length, instead of always using the smallest step.

# Proof supplements and scope

## Starting knowledge and prerequisites

The first half needs single-variable differentiation, integration, exponentials, and trigonometry. Series chapters need Taylor expansions and convergence. Exact equations use only local partial derivatives, with the required rule explained in the text. Linear systems need matrix multiplication, eigenvalues, and bases, linked directly to Linear Algebra; completing all of Calculus III first is unnecessary.

## Scope of existence, uniqueness, and integral-inequality proofs

Local existence and uniqueness use Picard-Lindelof: restrict the initial rectangle's time interval so the integral map stays inside and is a contraction. The contraction theorem on a complete function space is cited without its real-analysis proof. Peano's theorem supplies existence for continuous right-hand sides. Gronwall follows by applying an exponential integrating factor to an upper-bound function. None of these alone guarantees extension beyond finite time.

## Linear solution spaces and fundamental matrices

A standard continuous-coefficient linear initial-value problem has a unique solution. Initial data and solutions correspond linearly and bijectively, making solution-space dimension equal to order. A fundamental determinant satisfies $\det\Phi(t)=\det\Phi(t_0)\exp(\int_{t_0}^t\operatorname{tr}A(s)ds)$, derived by differentiating its columns. Independent initial solutions therefore cannot suddenly lose independence on a regular interval.

## Transform, impulse, and jump conventions

We use one-sided causal Laplace transforms with ordinary initial data taken as right limits at zero. Strictly positive-time impulses are generalized functions and transform into exponential delay factors. Full distribution theory and engineering conventions for impulses at zero are outside the derivation. Single-point values of ordinary piecewise functions do not affect transforms. Classical differential equalities hold separately on each side of jumps, with distributional jump conditions where needed.

## Scope of stability results

Stability means all sufficiently close initial states stay close; asymptotic stability also requires convergence to equilibrium. Nonlinear linearization assumes continuous differentiability near equilibrium. Hyperbolic cases use the linearized stability theorem, while pure-imaginary or zero roots need further study. A nonpositive Lyapunov derivative directly gives a nonincrease estimate; attraction requires examining invariant motions within the zero-derivative set. We do not prove Hartman-Grobman or general invariance principles here.

## Evidence for series and numerical methods

Ordinary-point analyticity and Frobenius existence are used as standard local theorems, with recurrences calculated independently in each lesson. Numerical-order claims require smoothness, a fixed finite interval, and stable error propagation. Test-equation stability regions are diagnostic tools. Step doubling estimates local asymptotic error rather than guaranteeing global error. Finite grids, fixed steps, and finite visual windows are not theorem proofs.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [MIT OCW · 18.03SC Differential Equations](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/syllabus/syllabus/): Used to check undergraduate scope for linear equations, oscillation, transforms, and systems. Text, worked examples, exercises, and figures are independently authored.

- [Jiří Lebl · Notes on Diffy Qs](https://www.jirka.org/diffyqs/): Used to check scope for first-order equations, systems, Laplace transforms, series, and nonlinear topics. Source text, problems, and illustrations are not copied.
