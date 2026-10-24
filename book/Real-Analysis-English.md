# AI University · Real Analysis

Turn intuition into proofs with explicit hypotheses

English edition 1 · source v0.1.1 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

Completeness of the reals, sequences and series, compactness and continuity, differentiation, Riemann integration, function sequences, and limit interchange. Each lesson includes proof strategies, hypotheses, counterexamples, full exercise solutions, and local interactions.

Scope: A complete first course on the real line in eight chapters and forty lessons. Starting from a complete ordered field, it rigorously develops single-variable calculus and uniform convergence. General metric spaces, measure and Lebesgue integration, functional analysis, and multivariable analysis belong to later courses.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Real numbers and completeness

- 1.1 Ordered fields and real arithmetic
- 1.2 Upper bounds, suprema, and completeness
- 1.3 The Archimedean property and density
- 1.4 Absolute value and error estimates
- 1.5 Constructing square roots from completeness

### Sequences and convergence

- 2.1 Quantifiers in sequence limits
- 2.2 Limit algebra, order, and squeezing
- 2.3 Monotone convergence and nested intervals
- 2.4 Subsequences and Bolzano–Weierstrass
- 2.5 The Cauchy condition and completeness

### Infinite series

- 3.1 A series is a limit of partial sums
- 3.2 Nonnegative series, comparison, and grouping
- 3.3 Ratio and root tests
- 3.4 Alternating series and remainder bounds
- 3.5 Absolute convergence and rearrangements

### Sets on the real line

- 4.1 Open sets, closed sets, and relative topology
- 4.2 Limit points, closure, and sequential criteria
- 4.3 Compactness and Heine–Borel
- 4.4 Connectedness and intervals
- 4.5 Countability, uncountability, and diagonals

### Continuity and uniform continuity

- 5.1 Function limits and continuity
- 5.2 Testing function limits with sequences
- 5.3 Continuous functions on compact sets and extrema
- 5.4 Intermediate values and connected images
- 5.5 Uniform continuity and Heine–Cantor

### Theory of differentiation

- 6.1 Derivatives and local linearity
- 6.2 Rolle's theorem and the mean value theorem
- 6.3 Derivatives may be discontinuous but cannot skip values
- 6.4 Taylor's theorem with controlled remainders
- 6.5 Convexity, tangents, and second derivatives

### Riemann integration

- 7.1 Partitions, upper sums, and lower sums
- 7.2 The Darboux integrability criterion
- 7.3 Integrability of continuous, monotone, and finite-jump functions
- 7.4 The derivative of an accumulation integral
- 7.5 Integral evaluation, substitution, and integration by parts

### Function sequences and limit interchange

- 8.1 Pointwise and uniform convergence
- 8.2 Uniform Cauchy convergence and the Weierstrass test
- 8.3 A uniform limit of continuous functions is continuous
- 8.4 Conditions for interchanging integrals and derivatives
- 8.5 Power series, convergence radii, and termwise operations

# Chapter 1 · Real numbers and completeness

A reliable number system for limits.

Goals:
- Prove basic inequalities from ordered-field axioms
- Distinguish upper bounds, maxima, and suprema
- Prove square-root existence from completeness

## 1.1 Ordered fields and real arithmetic

*Real numbers support arithmetic and comparison, but division, roots, and reciprocals have conditions.*

### The idea

Real numbers support arithmetic and comparison, but division, roots, and reciprocals have conditions.

### Intuition

Arithmetic laws follow from field axioms and order compatibility, not from a few plotted examples.

### Another explanation

Arithmetic laws follow from field axioms and order compatibility, not from a few plotted examples. Real square roots require a nonnegative radicand.

### Quick check

What happens to an inequality when multiplied by a negative number?

A. It is preserved
B. It reverses
C. It becomes equality

Answer: B. The difference becomes negative.

### Derive consequences of axioms

This book starts with the reals as a complete ordered field, rather than constructing them from decimals. Field axioms supply associative, commutative, and distributive laws, and inverses for nonzero elements.

### Handle inequalities

Adding the same number preserves order. Multiplying by a positive number preserves it; multiplying by a negative number reverses it. Considering signs proves squares nonnegative.

### Distinguish number systems

The rationals also form an ordered field, but some bounded-above subsets lack a least upper bound there. Completeness is the extra property needed for later limit theorems.

### Definition and conditions

In an ordered field, addition and multiplication of positive elements are compatible with order.

$$
a<b,\ c>0\implies ac<bc
$$

- Division is defined only for nonzero divisors.
- The real order is total and compatible with addition and multiplication.

### Derivation

Negative one is nonzero and its square is one.

$$
(-1)^2=1>0
$$

Express the difference of two ordered numbers as a positive number.

$$
b-a>0
$$

Positive multiplication keeps that difference positive; negative multiplication makes it negative.

$$
c(b-a)>0\ (c>0),\quad c(b-a)<0\ (c<0)
$$

### Interactive diagram

Change the multiplier's sign. How does the order of the two numbers change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-ordered-field?view=visual

### Guided experiment

1. **Multiplier: -3** Set the multiplier to $-3$. Compare the two points' order before and after multiplication.

Preset observation: Multiplier $-3$; resulting order: reversed.

2. **Multiplier: 0** Set the multiplier to $0$. Compare the two points' order before and after multiplication.

Preset observation: Multiplier $0$; resulting order: equal.

3. **Multiplier: 3** Set the multiplier to $3$. Compare the two points' order before and after multiplication.

Preset observation: Multiplier $3$; resulting order: preserved.

### Worked examples

#### Example 1: Multiplication by a negative number

Solve: negative two times a real number is less than six.

- For $-2x<6$, division by negative two reverses the inequality.
- $x>-3$; zero verifies the direction.

**Answer: $x>-3$.**

#### Example 2: Order of reciprocals

Compare reciprocals when $0<a<b$.

- Since $ab>0$, divide $a<b$ by $ab$.
- This gives $1/b<1/a$.

**Answer: $0<1/b<1/a$.**

### Common mistakes

- **Real square roots require no domain check** The radicand must be nonnegative.

- **Every ordered field is complete** The rationals are a counterexample.

### Exercises and solutions

**1. Does $x^2<0$ have a real solution?**

Hint: Consider positive, negative, and zero inputs.

Answer: No.

- Every real square is nonnegative.

**2. May an inequality be multiplied by a number of unknown sign without changing its direction?**

Hint: Its sign must be known.

Answer: No.

- Positive, negative, and zero multipliers have different effects.

**3. Are the rationals missing a division rule?**

Hint: A nonzero rational has a rational reciprocal.

Answer: No.

- They lack completeness, not field operations.

**4. Prove that $0<a<b$ implies $1/b<1/a$.**

Hint: Check the sign of the denominator product first.

Answer: Cancel to get $1/b<1/a$. Without first checking positivity, this step is not justified.

- $ab>0$, so multiplication by positive $1/(ab)$ preserves the inequality.
- From $a<b$, obtain $a/(ab)<b/(ab)$.
- Cancel to get $1/b<1/a$. Without first checking positivity, this step is not justified.

Prerequisites: Direct proofs, cases, and counterexamples, Contraposition and contradiction.

## 1.2 Upper bounds, suprema, and completeness

*A supremum is the least upper bound; it need not belong to the set.*

### The idea

A supremum is the least upper bound; it need not belong to the set.

### Intuition

Keeping every point to the left of a boundary is not enough. No smaller boundary may still bound the set.

### Another explanation

An upper boundary must be impossible to move left while remaining an upper bound. Upper bounds can increase indefinitely; the supremum is the least one.

### Quick check

What distinguishes a supremum from a maximum?

A. Whether it is the greatest upper bound
B. Whether it must belong to the set
C. Whether it is positive

Answer: B. A maximum must be a member.

### Distinguish a maximum from a supremum

A maximum belongs to the set and is at least every member. A supremum is the least of all upper bounds. An open interval may have a supremum without a maximum.

### Use the approximation property

Within every positive distance below a supremum lies a set member. Otherwise a smaller number would be an upper bound.

### State completeness

Every nonempty bounded-above real subset has a real supremum. Neither hypothesis may be dropped: the empty set has no least real upper bound.

### Definition and conditions

This book takes the least-upper-bound property as the completeness axiom.

$$
s=\sup A\iff\bigl[\forall a\in A:a\le s\bigr]\land\bigl[\forall\varepsilon>0\ \exists a\in A:s-\varepsilon<a\bigr]
$$

- The set is nonempty and bounded above in the reals.

### Derivation

A least upper bound is an upper bound.

$$
a\le s\quad(a\in A)
$$

Suppose some left neighborhood of the supremum contains no set member.

$$
\forall a\in A:\ a\le s-\varepsilon
$$

That gives a smaller upper bound, a contradiction.

$$
s-\varepsilon<s
$$

Conversely, if a smaller number were an upper bound, use their difference as the error to find a member above it.

$$
t<s,\ \varepsilon=s-t\implies\exists a\in A:a>t
$$

### Interactive diagram

Increase the displayed terms and reduce the error. How does the finite maximum differ from the supremum?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-supremum?view=visual

### Guided experiment

1. **Displayed terms: 1** Set the displayed term count to $1$. Compare the finite maximum with the supremum and check for a member in the error band.

Preset observation: Finite maximum $0$; full-set supremum $1$; gap $1$.

2. **Displayed terms: 50** Set the displayed term count to $50$. Compare the finite maximum with the supremum and check for a member in the error band.

Preset observation: Finite maximum $0.98$; full-set supremum $1$; gap $0.02$.

3. **Displayed terms: 100** Set the displayed term count to $100$. Compare the finite maximum with the supremum and check for a member in the error band.

Preset observation: Finite maximum $0.99$; full-set supremum $1$; gap $0.01$.

### Worked examples

#### Example 1: Open and half-closed intervals

Find the supremum and maximum of $(0,1)$ and $(0,1]$.

- Both sets are bounded by one and approach it arbitrarily closely.
- Only the second contains one.

**Answer: Both have supremum one; only the second has a maximum.**

#### Example 2: A discrete approach

Find the supremum of $A=\{1-1/n:n\ge1\}$.

- Every term is less than one.
- For a positive error, choose $n>1/\varepsilon$ to enter the left neighborhood of one.

**Answer: One; there is no maximum.**

### Common mistakes

- **The supremum is the greatest upper bound** Upper bounds can increase indefinitely; the supremum is the least one.

- **Boundedness suffices without nonemptiness** The empty set has no least real upper bound.

### Exercises and solutions

**1. Does an unbounded-above set have a real supremum?**

Hint: A real supremum must first be an upper bound.

Answer: No.

- Without a real upper bound there is no real supremum.

**2. Must a supremum belong to its set?**

Hint: Use an open interval.

Answer: Not necessarily.

- Its right endpoint is absent.

**3. What is the supremum of $\{2,5,7\}$?**

Hint: Find the finite set's maximum.

Answer: Seven.

- Seven belongs to the set and is its least upper bound.

**4. A nonempty bounded set $A$ has supremum $s$. Prove there are $a_n\in A$ with $a_n\to s$.**

Hint: Apply the supremum approximation property at reciprocal errors.

Answer: Given $\varepsilon>0$, take $N>1/\varepsilon$. All $n\ge N$ satisfy $|a_n-s|<\varepsilon$.

- For every $n\ge1$, choose a member with $s-1/n<a_n\le s$.
- Then $0\le s-a_n<1/n$.
- Given $\varepsilon>0$, take $N>1/\varepsilon$. All $n\ge N$ satisfy $|a_n-s|<\varepsilon$.

Prerequisites: Ordered fields and real arithmetic.

## 1.3 The Archimedean property and density

*Natural numbers exceed every real bound; every nonempty open interval contains a rational.*

### The idea

Natural numbers exceed every real bound; every nonempty open interval contains a rational.

### Intuition

Magnify the interval until its length exceeds one, fit an integer inside, then scale back.

### Another explanation

Scale an interval to length greater than one, place an integer inside, then scale back. A larger denominator gives a finer grid.

### Quick check

What does density describe?

A. A member in every nonempty open interval
B. Containing all limits
C. A finite number of elements

Answer: A. It is an approximation property, not completeness.

### Rule out infinitely large reals

If the natural numbers had a real upper bound, take their supremum. A natural number close enough to it has a successor above it, a contradiction.

### Find a rational

Between strictly ordered reals, choose a denominator making the scaled gap exceed one. The integer-part function then supplies an integer numerator strictly inside.

### Distinguish density and completeness

Rationals occur in every interval but do not fill the real line. Density gives local approximation, not closure under every limit.

### Definition and conditions

The natural numbers are unbounded in the reals, and the rationals are dense there.

$$
a<b\implies\exists m\in\mathbb Z,n\in\mathbb N:\ a<\frac mn<b
$$

- The denominator is a positive integer and the interval has strictly positive length.

### Derivation

Assume the natural numbers have a supremum.

$$
s=\sup\mathbb N
$$

Use approximation to choose a natural number close to it.

$$
s-1<n\le s
$$

Its successor exceeds the upper bound.

$$
n+1>s
$$

### Interactive diagram

Increase the denominator. How does the rational grid enter a fixed small interval?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-archimedes?view=visual

### Guided experiment

1. **Common denominator: 1** Set the common denominator to $1$. Check which grid points lie strictly inside the open interval.

Preset observation: Denominator $1$; numerators strictly inside $0$.

2. **Common denominator: 150** Set the common denominator to $150$. Check which grid points lie strictly inside the open interval.

Preset observation: Denominator $150$; numerators strictly inside $1$.

3. **Common denominator: 300** Set the common denominator to $300$. Check which grid points lie strictly inside the open interval.

Preset observation: Denominator $300$; numerators strictly inside $2$.

### Worked examples

#### Example 1: Between two numbers

Find a rational strictly between $1.41$ and $1.42$.

- Choose denominator one thousand.
- Numerator one thousand four hundred fifteen lies strictly inside the scaled interval.

**Answer: $1415/1000$.**

#### Example 2: Irrationals too

Does every nonempty open interval contain an irrational?

- Choose a rational $r$ in the interval's interior.
- Choose a sufficiently large positive integer $n$ so that $r+\sqrt2/n$ remains inside.
- A rational plus a nonzero irrational is irrational.

**Answer: Yes. Existence of the square root of two is proved later.**

### Common mistakes

- **A small decimal gap contains no rational** Choose a larger denominator.

- **No largest natural number already proves unboundedness** Lacking a maximum is not unboundedness; the full argument needs completeness.

### Exercises and solutions

**1. For every positive error, can a natural number have reciprocal smaller than it?**

Hint: Use the Archimedean property.

Answer: Yes.

- Take $n>1/\varepsilon$.

**2. Must a dense set equal the real line?**

Hint: Use the rationals as a counterexample.

Answer: No.

- They are dense but omit irrational numbers.

**3. Find a rational between zero and one tenth.**

Hint: Choose a larger denominator.

Answer: For example, $1/20$.

- $1/20=0.05$.

**4. Prove that every $a<b$ has a rational between them.**

Hint: Scale the interval, then find an integer inside.

Answer: Divide by positive $n$ to obtain $a<m/n<b$.

- Choose a positive integer $n$ with $n(b-a)>1$.
- Set $m=\lfloor na\rfloor+1$; then $na<m\le na+1<nb$.
- Divide by positive $n$ to obtain $a<m/n<b$.

Prerequisites: Upper bounds, suprema, and completeness.

## 1.4 Absolute value and error estimates

*Absolute value expresses distance in a form that can be bounded by adding errors.*

### The idea

Absolute value expresses distance in a form that can be bounded by adding errors.

### Intuition

A detour may be longer, but splits one difficult error into two manageable ones.

### Another explanation

A detour splits a difficult error into simpler ones. Square-root manipulations require the nonnegative root and absolute value.

### Quick check

What justifies splitting an error at an intermediate quantity?

A. The triangle inequality
B. A differentiation rule
C. Integer induction

Answer: A. Distance is bounded by the sum of the two detour lengths.

### Express neighborhoods

Absolute value less than a positive radius describes an open interval around the center. Do not silently replace strict inequality with non-strict inequality.

### Use the triangle inequality

Insert a shared intermediate quantity and budget the two errors separately. Limit and continuity proofs repeatedly use this method.

### Use the reverse triangle inequality

The difference between two distances is at most the distance between the points. Thus absolute value is continuous and amplifies errors by at most one.

### Definition and conditions

Real absolute value satisfies the triangle and reverse triangle inequalities.

$$
|x+y|\le|x|+|y|,\qquad\bigl||x|-|y|\bigr|\le|x-y|
$$

- The error radius is positive.

### Derivation

The absolute-value definition gives two-sided bounds.

$$
-|x|-|y|\le x+y\le|x|+|y|
$$

Obtain the triangle inequality.

$$
|x+y|\le|x|+|y|
$$

Insert an intermediate term, then interchange the two quantities.

$$
|x|\le|x-y|+|y|\implies\bigl||x|-|y|\bigr|\le|x-y|
$$

### Interactive diagram

Move the two points. Compare their direct distance with the route through zero.

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-absolute-value?view=visual

### Guided experiment

1. **Coordinate A: -3** Set coordinate A to $-3$. Compare direct distance with total distance through zero.

Preset observation: Direct distance $2$; distance through zero $4$.

2. **Coordinate A: 0** Set coordinate A to $0$. Compare direct distance with total distance through zero.

Preset observation: Direct distance $1$; distance through zero $1$.

3. **Coordinate A: 3** Set coordinate A to $3$. Compare direct distance with total distance through zero.

Preset observation: Direct distance $4$; distance through zero $4$.

### Worked examples

#### Example 1: Split an error

If $|x-a|<0.02,|y-b|<0.03$, how large is the sum's error?

- $|(x+y)-(a+b)|\le|x-a|+|y-b|$.
- The two budgets sum to strictly less than zero point zero five.

**Answer: Less than $0.05$.**

#### Example 2: Products need boundedness

For $x_n\to a,y_n\to b$, why must the product-limit proof also control magnitudes?

- $x_ny_n-ab=x_n(y_n-b)+b(x_n-a)$.
- The first error is multiplied by $|x_n|$; boundedness of a convergent sequence gives uniform control.

**Answer: A uniform magnitude bound is needed.**

### Common mistakes

- **After squaring, signs can be ignored when taking roots** Use the nonnegative square root and absolute value.

- **Product error is just the sum of the two errors** Magnitude factors also appear.

### Exercises and solutions

**1. Which interval does $|x-2|<1/2$ describe?**

Hint: Subtract and add the radius at the center.

Answer: $(3/2,5/2)$.

- $3/2<x<5/2$.

**2. Is the triangle inequality always an equality?**

Hint: Try numbers with opposite signs.

Answer: No.

- $|1+(-1)|=0<2$.

**3. Can the change in absolute value exceed the change in its input?**

Hint: Use the reverse triangle inequality.

Answer: No.

- $||x|-|y||\le|x-y|$.

**4. Prove that $|x-a|<\delta$ and $|y-b|<\delta$ imply $|(x+y)-(a+b)|<2\delta$.**

Hint: Split the total error into two parts.

Answer: Each term is less than $\delta$, so the total is strictly less than $2\delta$.

- Write $(x+y)-(a+b)=(x-a)+(y-b)$.
- The triangle inequality bounds its absolute value by $|x-a|+|y-b|$.
- Each term is less than $\delta$, so the total is strictly less than $2\delta$.

Prerequisites: Ordered fields and real arithmetic.

## 1.5 Constructing square roots from completeness

*A square root exists because a supremum fills the gap, not because curves seem to intersect.*

### The idea

A square root exists because a supremum fills the gap, not because curves seem to intersect.

### Intuition

Collect nonnegative numbers whose squares do not exceed the target, then prove the right boundary squares to that target.

### Another explanation

Collect numbers whose squares stay below the target, then identify the boundary. Do not use continuity or the intermediate value theorem before proving them.

### Quick check

Which property establishes square-root existence here?

A. Finite sampling
B. Least-upper-bound completeness
C. Many decimal digits

Answer: B. It ensures the candidate boundary is a real number.

### Construct the set

For $a>0$, set $A=\{x\ge0:x^2\le a\}$. If $a\ge1$, one belongs; if $0<a<1$, $a$ belongs. Thus there is a positive member. The bound $\max(1,a)$ gives a positive supremum $s$.

### Rule out a boundary that is too small

If the supremum's square is below the target, a sufficiently small positive increment still has square below the target, contradicting the upper bound.

### Rule out a boundary that is too large

If $s^2>a$, choose $0<h<\min(s,(s^2-a)/(2s))$; then $(s-h)^2>a$. Since squaring increases strictly on nonnegative numbers, every member is below $s-h$, a smaller upper bound than $s$. Hence $s^2=a$; strict increase also proves uniqueness of the positive root.

### Definition and conditions

Every positive real number has a unique positive square root.

$$
A=\{x\ge0:x^2\le a\},\quad s=\sup A\implies s^2=a
$$

- The target is strictly positive; zero separately has square root zero.

### Derivation

Boundedness gives a supremum, and the supremum is positive.

$$
0<s\le\max(1,a)
$$

If its square is too small, control the added square with a small increment.

$$
(s+h)^2-s^2=h(2s+h)<a-s^2
$$

If too large, a small decrement stays above the target and creates a smaller upper bound.

$$
s^2-(s-h)^2=h(2s-h)<s^2-a
$$

Both strict inequalities are impossible.

$$
s^2=a
$$

### Interactive diagram

Bisect repeatedly. How does bracket width give a provable error bound?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-square-root?view=visual

### Guided experiment

1. **Bisection steps: 0** Set the bisection count to $0$. Check the endpoint square inequalities and halving of interval width.

Preset observation: Left endpoint $1$; right endpoint $2$; width $1$; midpoint error bound $0.5$.

2. **Bisection steps: 12** Set the bisection count to $12$. Check the endpoint square inequalities and halving of interval width.

Preset observation: Left endpoint $1.414063$; right endpoint $1.414307$; width $0.0002441406$; midpoint error bound $0.0001220703$.

3. **Bisection steps: 24** Set the bisection count to $24$. Check the endpoint square inequalities and halving of interval width.

Preset observation: Left endpoint $1.414214$; right endpoint $1.414214$; width $5.960464\times10^{-8}$; midpoint error bound $2.980232\times10^{-8}$.

### Worked examples

#### Example 1: The square root of two

Why cannot the same construction be completed within the rational field?

- Rationals with square below two form a nonempty rationally bounded-above set.
- A rational supremum, perturbed by small rational increments and decrements, would square to two; that root is irrational.

**Answer: The rational supremum is missing.**

#### Example 2: Bisection brackets

Bracket the square root of two between one and two and bisect twice.

- The midpoint one point five has square above two; keep the left half.
- The next midpoint one point two five has square below two; keep the right half.

**Answer: The bracket is $[1.25,1.5]$.**

### Common mistakes

- **Continuity can be used without checking dependencies** Continuity and the intermediate value theorem have not yet been established here; avoid circularity.

- **A bisection picture proves existence** Completeness proves existence; finite diagrams illustrate the bracketing process.

### Exercises and solutions

**1. What ensures uniqueness of the positive square root?**

Hint: Compare squares of two nonnegative numbers.

Answer: Squaring is strictly increasing.

- $0\le x<y\implies y^2-x^2=(y-x)(y+x)>0$.

**2. What is the positive square root of nine?**

Hint: Square the candidate and check positivity.

Answer: Three.

- Three is positive and its square is nine.

**3. Does finitely many bisection steps always give an exact root?**

Hint: The remaining interval may still have positive width.

Answer: Not in general.

- Usually they give a bracket and an error bound.

**4. In the square-root construction, suppose $s>0$ and $s^2<a$. Give an explicit $h>0$ with $(s+h)^2<a$.**

Hint: Control both $h\le1$ and the linear error.

Answer: Thus $(s+h)^2\le s^2+d/2<a$, contradicting that $s$ is an upper bound.

- Let $d=a-s^2>0$ and choose $h=\min(1,d/[2(2s+1)])$.
- Since $h\le1$, $2sh+h^2\le(2s+1)h\le d/2$.
- Thus $(s+h)^2\le s^2+d/2<a$, contradicting that $s$ is an upper bound.

Prerequisites: Upper bounds, suprema, and completeness, Absolute value and error estimates.

## Chapter review

Try independently before reading the solutions.

**1. For nonempty bounded-above sets with $s=\sup A$ and $t=\sup B$, prove $\sup(A+B)=s+t$.**

Hint: First give an upper bound, then approximate it from each set.

Answer: $s+t$.

- Every sum is at most $s+t$.
- For a positive error choose $a>s-\varepsilon/2,b>t-\varepsilon/2$.
- Then $a+b>s+t-\varepsilon$.

**2. Why does density of the rationals not imply their completeness?**

Hint: Compare local approximation with membership of suprema.

Answer: The properties differ.

- Rationals approximate the square root of two arbitrarily closely.
- Their limit is irrational, and a supremum may lie outside the number system.

# Chapter 2 · Sequences and convergence

Express infinite approximation through precise conditions.

Goals:
- Order the quantifiers in limit definitions
- Prove monotone convergence and nested intervals
- Test convergence with subsequences and Cauchy conditions

## 2.1 Quantifiers in sequence limits

*Convergence requires every term after some cutoff to meet any prescribed positive error.*

### The idea

Convergence requires every term after some cutoff to meet any prescribed positive error.

### Intuition

The error is given first; you then choose a cutoff. Selecting a few favorable terms is insufficient.

### Another explanation

The error comes first, then the cutoff. Every sufficiently late term must be controlled, not just selected terms.

### Quick check

What may a cutoff depend on?

A. The error
B. A subsequently selected term index
C. Nothing at all

Answer: A. First receive the error, then choose one cutoff controlling every later term.

### Order the quantifiers

The cutoff may depend on the error, not on a subsequently chosen term index. One fixed wide band does not prove convergence.

### Find a valid cutoff

For reciprocals, the index must strictly exceed the reciprocal error. Taking its floor plus one respects both strictness and integer indexing.

### Prove uniqueness

For two distinct proposed limits, use one third of their distance as the error. Enter both tails; the triangle inequality then makes their distance less than itself.

### Definition and conditions

Sequence indices start at one unless stated otherwise.

$$
a_n\to L\iff\forall\varepsilon>0\ \exists N\in\mathbb N\ \forall n\ge N:\ |a_n-L|<\varepsilon
$$

- The limit is a finite real number.
- Divergence to infinity is defined separately, not a finite real limit.

### Derivation

Rewrite the reciprocal error as an index constraint.

$$
|1/n-0|<\varepsilon\iff n>1/\varepsilon
$$

Choose a strictly larger integer.

$$
N=\lfloor1/\varepsilon\rfloor+1
$$

Every subsequent term then satisfies it.

$$
n\ge N\implies1/n\le1/N<\varepsilon
$$

### Interactive diagram

Narrow the error band. How does the analytically computed cutoff change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-sequence-limit?view=visual

### Guided experiment

1. **Final displayed index: 1** Set the final displayed index to $1$. Compare the analytic cutoff and last term; check all terms beyond the cutoff.

Preset observation: Analytic cutoff $11$; last displayed term $1$; cutoff reached: no.

2. **Final displayed index: 100** Set the final displayed index to $100$. Compare the analytic cutoff and last term; check all terms beyond the cutoff.

Preset observation: Analytic cutoff $11$; last displayed term $0.01$; cutoff reached: yes.

3. **Final displayed index: 200** Set the final displayed index to $200$. Compare the analytic cutoff and last term; check all terms beyond the cutoff.

Preset observation: Analytic cutoff $11$; last displayed term $0.005$; cutoff reached: yes.

### Worked examples

#### Example 1: A cutoff

For $a_n=1/n$ and error $0.1$, what is the smallest integer cutoff?

- We need $n>10$.
- Starting at eleven, every term is strictly less than one tenth.

**Answer: Eleven.**

#### Example 2: Nonconvergent oscillation

Why does $a_n=(-1)^n$ not converge?

- Even terms equal one; odd terms equal negative one.
- Convergence would give both subsequences the same limit. Alternatively, two tail terms distance two apart violate the Cauchy condition.

**Answer: The oscillation does not shrink as the index increases.**

### Common mistakes

- **Some nearby terms establish convergence** Every sufficiently late term must be nearby.

- **Equality with the error boundary meets the strict definition** The definition requires strictly less; choose a later cutoff.

### Exercises and solutions

**1. What is the smallest valid cutoff for $1/n$ with error $1/4$?**

Hint: The error must be strictly less than one quarter.

Answer: Five.

- The index must exceed four.

**2. May finitely many initial terms lie far from a sequence's limit?**

Hint: The definition restricts only a tail.

Answer: Yes.

- A finite prefix does not affect the limit.

**3. Do infinitely many terms within each error suffice?**

Hint: Other terms might remain outside forever.

Answer: No.

- This controls some subsequences, not the entire tail.

**4. Using the limit definition, prove that changing finitely many terms of $a_n\to L$ leaves the limit unchanged.**

Hint: Move the cutoff beyond every modified term.

Answer: Take $N=\max(N_0,M+1)$. Then $n\ge N$ gives $b_n=a_n$, with the same error bound.

- Suppose only the first $M$ terms change, giving $b_n$.
- Given $\varepsilon>0$, choose the original cutoff $N_0$ so $n\ge N_0$ implies $|a_n-L|<\varepsilon$.
- Take $N=\max(N_0,M+1)$. Then $n\ge N$ gives $b_n=a_n$, with the same error bound.

Prerequisites: The Archimedean property and density, Absolute value and error estimates.

## 2.2 Limit algebra, order, and squeezing

*Control individual errors before combining them. Reciprocals require denominators bounded away from zero.*

### The idea

Control individual errors before combining them. Reciprocals require denominators bounded away from zero.

### Intuition

Sum errors split into budgets; product errors also need a magnitude bound.

### Another explanation

Product estimates require magnitude bounds as well as small errors. Boundedness alone does not control tail behavior.

### Quick check

What key extra condition does the quotient law need?

A. A nonzero denominator limit
B. A positive numerator
C. Monotonicity of every term

Answer: A. It keeps tail denominators uniformly away from zero.

### Convergence implies boundedness

The tail lies within radius one of the limit. Combine its bound with a maximum over the finite prefix to bound the whole sequence.

### Prove product and quotient limits

Split the product difference into two terms and use boundedness to allocate errors. A nonzero denominator limit eventually bounds denominator magnitude below by half the limit's magnitude.

### Apply squeezing

If eventual lower and upper bounds approach the same limit, they also bound the middle error. Strict inequalities generally become only non-strict inequalities after taking limits.

### Definition and conditions

Finite real limits obey the algebraic and squeeze theorems.

$$
a_n\to a,\ b_n\to b\ne0\implies\frac{a_n}{b_n}\to\frac ab
$$

- Tail denominators in a quotient are nonzero; remove any finitely many undefined initial terms first.

### Derivation

The denominator is eventually bounded away from zero.

$$
|b_n-b|<|b|/2\implies|b_n|>|b|/2
$$

Express reciprocal error over a common denominator.

$$
\left|\frac1{b_n}-\frac1b\right|=\frac{|b_n-b|}{|b_n||b|}
$$

Use a uniform estimate, then the product theorem.

$$
\left|\frac1{b_n}-\frac1b\right|\le\frac{2|b_n-b|}{|b|^2}\to0
$$

### Interactive diagram

Why does an oscillating term between positive and negative reciprocals still converge?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-limit-algebra?view=visual

### Guided experiment

1. **Displayed terms: 2** Set the term count to $2$. Check that displayed points stay between the bounds and watch the bounds approach each other.

Preset observation: Last-term magnitude $0.4546487$; analytic upper bound $0.5$.

2. **Displayed terms: 41** Set the term count to $41$. Check that displayed points stay between the bounds and watch the bounds approach each other.

Preset observation: Last-term magnitude $0.003868846$; analytic upper bound $0.02439024$.

3. **Displayed terms: 80** Set the term count to $80$. Check that displayed points stay between the bounds and watch the bounds approach each other.

Preset observation: Last-term magnitude $0.01242361$; analytic upper bound $0.0125$.

### Worked examples

#### Example 1: Bounded oscillation times a vanishing factor

Find the limit of $\sin n/n$.

- $|\sin n|\le1$.
- $|\sin n/n|\le1/n\to0$.

**Answer: Zero.**

#### Example 2: Strict order need not survive

For $a_n=0,b_n=1/n$, the first is always smaller. Compare their limits.

- The first limit is zero.
- The second also tends to zero.

**Answer: The limits coincide; strict inequality need not remain.**

### Common mistakes

- **Bounded means convergent** Tail behavior still needs control.

- **Strict inequalities remain strict after limits** The gap may shrink to zero.

### Exercises and solutions

**1. Find the limit of $(2n+1)/(n+3)$.**

Hint: Divide numerator and denominator by the index.

Answer: Two.

- $(2+1/n)/(1+3/n)\to2$.

**2. Can the quotient law be applied directly when the denominator limit is zero?**

Hint: The crucial lower bound fails.

Answer: No.

- The result may be finite, divergent, or nonexistent.

**3. Must every bounded sequence converge?**

Hint: Consider alternating positive and negative one.

Answer: No.

- It is bounded but not convergent.

**4. If $a_n\to a$ and $b_n\to b$, prove $a_nb_n\to ab$.**

Hint: Use boundedness of a convergent sequence and split the product error.

Answer: Choose a common cutoff making each term less than $\varepsilon/2$. When $b=0$, the second term vanishes. The total is less than $\varepsilon$.

- Choose $M\ge1$ bounding all $|a_n|\le M$.
- $|a_nb_n-ab|\le M|b_n-b|+|b||a_n-a|$.
- Choose a common cutoff making each term less than $\varepsilon/2$. When $b=0$, the second term vanishes. The total is less than $\varepsilon$.

Prerequisites: Quantifiers in sequence limits.

## 2.3 Monotone convergence and nested intervals

*A bounded monotone real sequence converges to its appropriate supremum or infimum.*

### The idea

A bounded monotone real sequence converges to its appropriate supremum or infimum.

### Intuition

An increasing sequence never retreats and cannot pass its upper bound; its supremum describes where it settles.

### Another explanation

Monotonicity and a bound allow a supremum argument. Open intervals or no bounded initial interval may invalidate the nested-interval conclusion.

### Quick check

What underlies bounded monotone convergence?

A. Completeness
B. Finitely many plotted points
C. A zero derivative

Answer: A. The supremum or infimum supplies the real limit.

### Prove with the supremum

For an increasing bounded-above sequence, take the supremum of its terms. Once a term enters any left neighborhood, monotonicity keeps every later term there.

### Distinguish boundedness from monotonicity

Neither condition alone suffices: a monotone sequence may be unbounded, and a bounded one may oscillate. Negation gives the decreasing bounded-below case.

### Connect nested intervals

For nested nonempty closed bounded intervals, left endpoints increase and right endpoints decrease within the first interval. Completeness gives a common point; vanishing lengths make it unique.

### Definition and conditions

Nested closed bounded intervals have a common point, unique if their lengths tend to zero.

$$
a_n\uparrow,\ a_n\le M\implies a_n\to\sup\{a_n:n\ge1\}
$$

- The real sequence is monotone and bounded in the required direction.
- The intervals are nonempty, closed, bounded, and nested.

### Derivation

Take the supremum and find a term near it.

$$
s=\sup\{a_n\},\quad s-\varepsilon<a_N\le s
$$

Monotonicity controls the entire tail.

$$
n\ge N\implies s-\varepsilon<a_N\le a_n\le s
$$

The supremum of left endpoints gives a point in every nested interval.

$$
s=\sup_n l_n\implies l_n\le s\le r_n\quad\forall n
$$

### Interactive diagram

Shrink the closed intervals. What do their common point and lengths each tell you?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-monotone?view=visual

### Guided experiment

1. **Nesting depth: 0** Set the nesting depth to $0$. Check containment at each level and compare the last interval's length with the common point.

Preset observation: Last interval length $1$; unique point common to the entire infinite family $0$.

2. **Nesting depth: 7** Set the nesting depth to $7$. Check containment at each level and compare the last interval's length with the common point.

Preset observation: Last interval length $0.0078125$; unique point common to the entire infinite family $0$.

3. **Nesting depth: 15** Set the nesting depth to $15$. Check containment at each level and compare the last interval's length with the common point.

Preset observation: Last interval length $0.00003051758$; unique point common to the entire infinite family $0$.

### Worked examples

#### Example 1: A monotone approach

Use monotone convergence to find the limit of $a_n=1-1/n$.

- It increases and stays below one.
- One is the supremum of its terms, hence its limit.

**Answer: One.**

#### Example 2: Closedness matters

What is the intersection of the nested intervals $(0,1/n)$?

- Zero is excluded from all of them.
- Every positive number eventually lies outside.

**Answer: Empty; these intervals are not closed.**

### Common mistakes

- **Every nested interval family has a common point** Open intervals, or families lacking a bounded initial interval, may fail.

- **Constant interval length still gives uniqueness** Uniqueness needs an extra condition such as lengths tending to zero.

### Exercises and solutions

**1. What is the intersection of $[0,1/n]$?**

Hint: Meet all upper bounds simultaneously.

Answer: $\{0\}$.

- Only zero does so.

**2. Without lengths tending to zero, is the common point necessarily unique?**

Hint: Take every interval to be the same.

Answer: No.

- Their intersection can be a whole interval.

**3. Can an increasing sequence unbounded above have a finite limit?**

Hint: A finite limit implies boundedness.

Answer: No.

- That contradicts unboundedness.

**4. Give and prove an example of nested nonempty bounded intervals that are not closed and have empty intersection.**

Hint: Consider $(0,1/n)$.

Answer: Zero belongs to none, so the intersection is empty. Closedness cannot be omitted.

- Let $I_n=(0,1/n)$. Each is nonempty and bounded, with $I_{n+1}\subseteq I_n$.
- A common member $x$ would satisfy $x>0$. Choose $n>1/x$; then $1/n<x$, a contradiction.
- Zero belongs to none, so the intersection is empty. Closedness cannot be omitted.

Prerequisites: Upper bounds, suprema, and completeness, Quantifiers in sequence limits.

## 2.4 Subsequences and Bolzano–Weierstrass

*Every bounded real sequence has at least one convergent subsequence.*

### The idea

Every bounded real sequence has at least one convergent subsequence.

### Intuition

The sequence may jump around. Selecting later terms in successively smaller intervals finds a stable route through it.

### Another explanation

Selecting later terms in shrinking intervals yields a convergent subsequence. The theorem does not assert convergence of the entire sequence.

### Quick check

What condition must subsequence indices satisfy?

A. Strictly increasing
B. Repetitions allowed
C. Consecutive

Answer: A. Selections must keep moving to later terms.

### Select strictly later terms

Subsequence indices strictly increase: reusing one favorable term is not allowed. Every subsequence of a convergent sequence has the same limit.

### Bisect repeatedly

Bisect a closed interval containing the sequence. At least one half contains infinitely many terms. Retain it and repeat. Lengths tend to zero, so the nested-interval theorem gives one common point.

### Select approaching terms

In each retained interval choose a term later than the preceding selection. Infinitely many terms make this possible; interval length bounds the error.

### Definition and conditions

Bolzano–Weierstrass here concerns bounded real sequences.

$$
(a_n)\text{ bounded}\implies\exists n_1<n_2<\cdots:\ a_{n_k}\to L
$$

- Both boundedness and real completeness enter the proof.

### Derivation

At each stage keep a half containing infinitely many terms.

$$
I_{k+1}\subseteq I_k,\quad |I_k|=2^{-k}|I_0|
$$

The nested intervals have a unique common point.

$$
\bigcap_k I_k=\{L\}
$$

Choose increasing indices and bound errors by the interval lengths.

$$
a_{n_k}\in I_k\implies|a_{n_k}-L|\le|I_k|\to0
$$

### Interactive diagram

Highlight odd and even subsequences. Why does subsequence convergence not control the entire sequence?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-subsequences?view=visual

### Guided experiment

1. **Displayed terms: 4** Set the term count to $4$. Identify the highlighted subsequence and compare the odd and even limits.

Preset observation: Even-subsequence limit $1$; odd-subsequence limit $-1$.

2. **Displayed terms: 22** Set the term count to $22$. Identify the highlighted subsequence and compare the odd and even limits.

Preset observation: Even-subsequence limit $1$; odd-subsequence limit $-1$.

3. **Displayed terms: 40** Set the term count to $40$. Identify the highlighted subsequence and compare the odd and even limits.

Preset observation: Even-subsequence limit $1$; odd-subsequence limit $-1$.

### Worked examples

#### Example 1: Two subsequential limits

Which convergent subsequences are immediate for $(-1)^n$?

- The even-index subsequence is constantly one.
- The odd-index subsequence is constantly negative one.

**Answer: Two different subsequential limits rule out convergence of the original sequence.**

#### Example 2: Boundedness and one limit point

If a bounded real sequence has just one subsequential limit, must it converge to that limit?

- Otherwise infinitely many terms remain outside a fixed error band.
- This bounded bad subsequence has a convergent subsequence whose limit remains outside the band, contradicting uniqueness.

**Answer: Yes.**

### Common mistakes

- **Every bounded sequence itself converges** The theorem guarantees only a subsequence.

- **A subsequential limit must occur among the original terms** It need only belong to their closure.

### Exercises and solutions

**1. Does one convergent subsequence imply convergence of the whole sequence?**

Hint: Consider alternating positive and negative one.

Answer: No.

- Another subsequence may approach elsewhere.

**2. Does repeatedly choosing the same term form a subsequence?**

Hint: Check strict increase of indices.

Answer: No.

- Indices cannot repeat.

**3. Can an unbounded sequence have a convergent subsequence?**

Hint: Let odd terms be zero and even terms grow.

Answer: Yes.

- The zero subsequence converges while the whole sequence is unbounded.

**4. Prove that if $a_n\to L$, every subsequence $a_{n_k}$ also tends to $L$.**

Hint: What lower bound holds for strictly increasing positive integer indices?

Answer: When $k\ge N$, also $n_k\ge N$, so $|a_{n_k}-L|<\varepsilon$.

- Strict increase gives $n_k\ge k$.
- Given $\varepsilon>0$, choose a cutoff $N$ for the original sequence.
- When $k\ge N$, also $n_k\ge N$, so $|a_{n_k}-L|<\varepsilon$.

Prerequisites: Monotone convergence and nested intervals.

## 2.5 The Cauchy condition and completeness

*Closeness between tail terms tests convergence without knowing the limit beforehand.*

### The idea

Closeness between tail terms tests convergence without knowing the limit beforehand.

### Intuition

Convergence brings tail terms near one target; Cauchy brings all tail terms near each other.

### Another explanation

Cauchy brings all tail terms together rather than specifying a target. Small adjacent differences alone can still accumulate.

### Quick check

Which indices does Cauchy compare?

A. Only adjacent indices
B. Any two sufficiently late indices
C. Only even indices

Answer: B. This is stronger than vanishing adjacent differences.

### Control the entire tail

Cauchy controls any two sufficiently late indices, not just adjacent terms. Harmonic partial sums have adjacent differences tending to zero but still diverge.

### Prove boundedness and convergence

Use error one to bound the tail near one fixed term, hence bound the sequence. Bolzano–Weierstrass gives a convergent subsequence; Cauchy brings all other tail terms to the same limit.

### Check the number system

Rational Cauchy sequences approximating the square root of two lack a rational limit. Real completeness turns the Cauchy property into convergence.

### Definition and conditions

A real sequence converges exactly when it is Cauchy.

$$
\forall\varepsilon>0\ \exists N\ \forall m,n\ge N:\ |a_m-a_n|<\varepsilon
$$

- This equivalence requires a complete number system.

### Derivation

For a convergent sequence, allocate half the error to each tail term.

$$
|a_m-a_n|\le|a_m-L|+|a_n-L|<\varepsilon
$$

Conversely, first prove Cauchy implies boundedness, then select a convergent subsequence.

$$
a_{n_k}\to L
$$

For any tail term, choose a later suitable subsequence term and split the error.

$$
|a_n-L|\le|a_n-a_{n_k}|+|a_{n_k}-L|<\varepsilon
$$

### Interactive diagram

Compare doubled-index tail differences for reciprocals and harmonic partial sums. Which shrink uniformly?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-cauchy?view=visual

### Guided experiment

1. **First tail index: 1** Set the first tail index to $1$. Compare terms at doubled indices and decide whether their difference tends to zero.

Preset observation: Tail-term difference $0.5$; analytic bound: less than 1.

2. **First tail index: 40** Set the first tail index to $40$. Compare terms at doubled indices and decide whether their difference tends to zero.

Preset observation: Tail-term difference $0.0125$; analytic bound: less than 0.025.

3. **First tail index: 80** Set the first tail index to $80$. Compare terms at doubled indices and decide whether their difference tends to zero.

Preset observation: Tail-term difference $0.00625$; analytic bound: less than 0.0125.

### Worked examples

#### Example 1: Reciprocals are Cauchy

Prove $1/n$ is Cauchy without using its known limit.

- For $m,n\ge N$, $|1/m-1/n|\le1/N$.
- Choose $N>1/\varepsilon$.

**Answer: Every pair of tail terms meets the condition.**

#### Example 2: Adjacent differences do not suffice

Why are harmonic partial sums not Cauchy?

- Between indices $N$ and $2N$, the additional $N$ terms are each at least $1/(2N)$.
- The partial sums differ by at least one half.

**Answer: A fixed-size tail difference persists.**

### Common mistakes

- **Nearby adjacent terms cannot drift far apart** Many small differences can accumulate to a fixed distance.

- **A rational Cauchy sequence always has a rational limit** The rationals are not complete.

### Exercises and solutions

**1. Do vanishing adjacent differences imply the Cauchy property?**

Hint: Use harmonic partial sums as a counterexample.

Answer: No.

- Arbitrarily separated tail terms remain uncontrolled.

**2. Is every real Cauchy sequence bounded?**

Hint: Use error one, then include the finite prefix.

Answer: Yes.

- The tail is near one fixed term, and the prefix is finite.

**3. Does the Cauchy definition require a proposed limit?**

Hint: It compares only pairs of terms.

Answer: No.

- There is no target limit in the definition.

**4. Prove every real Cauchy sequence is bounded.**

Hint: First bound the tail around one fixed term.

Answer: Take the maximum of the finite prefix magnitudes and $|a_N|+1$ to bound the whole sequence.

- Choose a cutoff $N$ for error one, so $m,n\ge N$ implies $|a_m-a_n|<1$.
- Fix $n=N$ to obtain the tail bound $|a_m|\le|a_N|+1$.
- Take the maximum of the finite prefix magnitudes and $|a_N|+1$ to bound the whole sequence.

Prerequisites: Subsequences and Bolzano–Weierstrass, Limit algebra, order, and squeezing.

## Chapter review

Try independently before reading the solutions.

**1. Prove a convergent real sequence has only one limit.**

Hint: Divide the distance between proposed limits into thirds.

Answer: The limit is unique.

- If two distinct limits are distance $d>0$ apart, take error $d/3$.
- Enter both tails and use the triangle inequality to make their distance less than two thirds of itself, a contradiction.

**2. Give a bounded nonconvergent real sequence and identify two convergent subsequences.**

Hint: Use persistent oscillation.

Answer: Boundedness guarantees a convergent subsequence only.

- Take $(-1)^n$.
- Odd and even subsequences tend to negative one and one respectively.

# Chapter 3 · Infinite series

Study partial sums rather than treating infinity as ordinary addition.

Goals:
- Define series convergence through partial sums
- Choose comparison, ratio, root, or alternating tests
- Distinguish absolute and conditional convergence

## 3.1 A series is a limit of partial sums

*An infinite series converges when its finite partial sums approach a finite real number.*

### The idea

An infinite series converges when its finite partial sums approach a finite real number.

### Intuition

Small terms alone are insufficient. Their accumulated sum must stabilize too.

### Another explanation

Terms tending to zero are only necessary. The cumulative partial sums must stabilize as well.

### Quick check

Which sequence determines series convergence?

A. Original terms
B. Partial sums
C. Derivatives of terms

Answer: B. Finite approximations to the total accumulation must stabilize.

### Define partial sums

First define finite sums, then study their sequence limit. Infinite-series notation does not authorize unrestricted infinite algebra.

### Derive a necessary condition

If partial sums converge, their consecutive differences—the original terms—tend to zero. The harmonic series disproves the converse.

### Use the series Cauchy criterion

Every sufficiently late finite tail sum must be small. Absolute value surrounds the whole sum, unlike absolute convergence, which sums individual absolute values.

### Definition and conditions

Series convergence means that its partial-sum sequence has a finite limit.

$$
s_N=\sum_{n=1}^N a_n,\quad\sum_{n=1}^{\infty}a_n=S\iff s_N\to S
$$

- All terms are defined real numbers.
- Convergence and divergence refer to partial sums.

### Derivation

Multiply a geometric sum by its ratio and subtract.

$$
(1-r)\sum_{k=0}^N r^k=1-r^{N+1}
$$

Powers vanish when the ratio's magnitude is less than one.

$$
|r|<1\implies r^{N+1}\to0
$$

Obtain the sum and exact remainder.

$$
\sum_{k=0}^{\infty}r^k=\frac1{1-r},\quad\sum_{k=N+1}^{\infty}r^k=\frac{r^{N+1}}{1-r}
$$

### Interactive diagram

Increase the partial-sum length. How does the exact geometric remainder control the unseen tail?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-series-definition?view=visual

### Guided experiment

1. **Retained terms: 1** Set the retained term count to $1$. Compare the partial sum, exact remainder, and horizontal total-sum line.

Preset observation: Retained terms $1$; partial sum $1$; exact remainder $1$.

2. **Retained terms: 20** Set the retained term count to $20$. Compare the partial sum, exact remainder, and horizontal total-sum line.

Preset observation: Retained terms $20$; partial sum $1.999998$; exact remainder $0.000001907349$.

3. **Retained terms: 40** Set the retained term count to $40$. Compare the partial sum, exact remainder, and horizontal total-sum line.

Preset observation: Retained terms $40$; partial sum $2$; exact remainder $1.818989\times10^{-12}$.

### Worked examples

#### Example 1: A geometric sum

Find the sum of $\sum_{n=1}^{\infty}2^{-n}$.

- Starting at index zero gives total two.
- Subtract the zero-power term one.

**Answer: One.**

#### Example 2: Terms not tending to zero

Does $1-1+1-1+\cdots$ converge in the ordinary sense?

- Partial sums alternate between one and zero.
- The terms do not tend to zero either.

**Answer: No. Other summation conventions are not ordinary convergence in this book.**

### Common mistakes

- **Vanishing terms establish series convergence** They are only a necessary condition.

- **All finite algebra transfers freely to infinite sums** Check convergence and interchange conditions.

### Exercises and solutions

**1. Find the sum of $\sum_{k=0}^{\infty}(1/3)^k$.**

Hint: Check the geometric-series condition.

Answer: $3/2$.

- $1/(1-1/3)=3/2$.

**2. Does convergence of a series imply its terms tend to zero?**

Hint: Take consecutive partial-sum differences.

Answer: Yes.

- Both partial sums tend to the same sum.

**3. Do terms tending to zero imply series convergence?**

Hint: Consider the harmonic series.

Answer: No.

- Small terms can still accumulate into unbounded partial sums.

**4. Prove series convergence implies $a_n\to0$, and give a counterexample to the converse.**

Hint: Express a term as a consecutive partial-sum difference.

Answer: Each doubling block contributes at least $1/2$, making the partial sums unbounded and the series divergent.

- Let $S_n=\sum_{k=1}^n a_k$. If $S_n\to S$, then $a_n=S_n-S_{n-1}\to S-S=0$.
- For the converse, take $a_n=1/n$, whose terms tend to zero.
- Each doubling block contributes at least $1/2$, making the partial sums unbounded and the series divergent.

Prerequisites: The Cauchy condition and completeness.

## 3.2 Nonnegative series, comparison, and grouping

*Nonnegative terms make partial sums increasing. Convergence is then equivalent to boundedness above.*

### The idea

Nonnegative terms make partial sums increasing. Convergence is then equivalent to boundedness above.

### Intuition

Comparison must control every tail term or partial sum, not merely compare two drawn curves.

### Another explanation

Comparison needs control of all relevant terms. Larger convergence controls smaller series; smaller divergence controls larger series.

### Quick check

If a larger nonnegative series converges, what follows for a smaller one?

A. Convergence
B. Divergence
C. Undetermined

Answer: A. The larger partial sums give a uniform upper bound.

### Apply comparison

A larger convergent nonnegative series controls a smaller one. A smaller divergent series forces a larger one to diverge. The directions cannot be reversed.

### Explain harmonic divergence

Group indices between powers of two. Each block has twice as many smaller terms, yet contributes at least one half. Thus partial sums are unbounded.

### Compare power series in the index

For nonincreasing nonnegative terms, dyadic grouping compares the series with weighted terms at doubling indices. This proves that reciprocal-power series converge exactly when the exponent exceeds one.

### Definition and conditions

A nonnegative series converges exactly when its partial sums are bounded above.

$$
0\le a_n\le b_n,\quad\sum b_n<\infty\implies\sum a_n<\infty
$$

- Comparison need only hold eventually.
- The compared terms are nonnegative.

### Derivation

Each doubling block has a specified number of terms.

$$
2^{k-1}<n\le2^k
$$

Bound the harmonic terms below within that block.

$$
\sum_{n=2^{k-1}+1}^{2^k}\frac1n\ge2^{k-1}\frac1{2^k}=\frac12
$$

Arbitrarily many blocks force unbounded partial sums.

$$
H_{2^K}\ge1+K/2\to\infty
$$

### Interactive diagram

Group terms in dyadic intervals. Does every block retain a fixed contribution?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-positive-series?view=visual

### Guided experiment

1. **Doubling blocks: 1** Set the block count to $1$. Compare block contributions row by row and check the one-half lower bound.

Preset observation: Lower bound per block $0.5$; final index $2$.

2. **Doubling blocks: 6** Set the block count to $6$. Compare block contributions row by row and check the one-half lower bound.

Preset observation: Lower bound per block $0.5$; final index $64$.

3. **Doubling blocks: 12** Set the block count to $12$. Compare block contributions row by row and check the one-half lower bound.

Preset observation: Lower bound per block $0.5$; final index $4096$.

### Worked examples

#### Example 1: Convergence of reciprocal squares

Prove $\sum_{n=1}^{\infty}1/n^2$ converges.

- For $n\ge2$, $1/n^2\le1/[n(n-1)]$.
- Since $1/[n(n-1)]=1/(n-1)-1/n$, tail partial sums telescope and are at most one.

**Answer: The partial sums are bounded, hence converge.**

#### Example 2: The wrong direction

Harmonic terms exceed reciprocal squares. Does convergence of reciprocal squares prove harmonic convergence?

- A smaller convergent quantity does not control a larger one.
- Harmonic block lower bounds prove divergence.

**Answer: No.**

### Common mistakes

- **Comparison directions may be reversed freely** Larger convergence gives smaller convergence; smaller divergence gives larger divergence.

- **Small harmonic terms must have a finite sum** Every doubling block still contributes a fixed amount.

### Exercises and solutions

**1. When does $\sum 1/n^p$ converge?**

Hint: Compare dyadic blocks with a geometric series.

Answer: $p>1$.

- Blocks have order $2^{k(1-p)}$, converging exactly when $p>1$.

**2. Can nonnegative partial sums be bounded but oscillate without convergence?**

Hint: Partial sums are automatically monotone.

Answer: No.

- Bounded monotone sequences converge.

**3. May comparison ignore a finite prefix?**

Hint: Finitely many terms only change a constant.

Answer: Yes.

- An eventual comparison suffices.

**4. Use dyadic grouping to prove $\sum_{n=1}^{\infty}n^{-p}$ converges for $p>1$.**

Hint: Bound each block by its term count times its largest term.

Answer: Since $2^{1-p}<1$, the block bounds form a convergent geometric series. All nonnegative partial sums are bounded, so the original series converges.

- For $2^k\le n<2^{k+1}$, $n^{-p}\le2^{-kp}$.
- There are $2^k$ terms, so the block sum is at most $2^{k(1-p)}$.
- Since $2^{1-p}<1$, the block bounds form a convergent geometric series. All nonnegative partial sums are bounded, so the original series converges.

Prerequisites: A series is a limit of partial sums, Monotone convergence and nested intervals.

## 3.3 Ratio and root tests

*An eventual bound by a convergent geometric series establishes absolute convergence.*

### The idea

An eventual bound by a convergent geometric series establishes absolute convergence.

### Intuition

At the critical value one, geometric control fails and another test is needed.

### Another explanation

At value one, switch tests. A useful ratio estimate must control the entire tail uniformly.

### Quick check

What does the critical value one mean?

A. Always convergent
B. Always divergent
C. This test does not decide

Answer: C. Different series at this value have different outcomes.

### Get a geometric bound from ratios

If absolute ratios are eventually bounded by one fixed constant strictly below one, repeated multiplication bounds the terms by a geometric tail.

### Use roots

If the root limsup is below one, every sufficiently late absolute term is bounded by a geometric power. The appendix defines limsup and its properties.

### Recognize the critical case

Ratio or root value one permits either convergence or divergence. A ratio limit above one prevents terms tending to zero; root limsup above one likewise gives a subsequence not tending to zero.

### Definition and conditions

The ratio test needs nonzero tail terms; the root test permits zeros.

$$
\lim\left|\frac{a_{n+1}}{a_n}\right|<1\quad\text{or}\quad\limsup |a_n|^{1/n}<1\implies\sum|a_n|<\infty
$$

- The ratio is defined eventually.
- At value one, this test gives no conclusion.

### Derivation

Choose a number strictly between the ratio limit and one.

$$
L<q<1
$$

Uniformly bound all tail ratios by it.

$$
|a_{n+1}|\le q|a_n|\quad(n\ge N)
$$

Iterate and sum the geometric bound.

$$
|a_{N+k}|\le |a_N|q^k
$$

### Interactive diagram

Compare consecutive ratios for factorial, harmonic, and reciprocal-square terms. Why is value one insufficient?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-ratio-root?view=visual

### Guided experiment

1. **Final displayed index: 2** Set the final displayed index to $2$. Inspect ratios and roots separately and check whether they stay away from one.

Preset observation: Current case: factorial denominator; absolute convergence.

2. **Final displayed index: 21** Set the final displayed index to $21$. Inspect ratios and roots separately and check whether they stay away from one.

Preset observation: Current case: factorial denominator; absolute convergence.

3. **Final displayed index: 40** Set the final displayed index to $40$. Inspect ratios and roots separately and check whether they stay away from one.

Preset observation: Current case: factorial denominator; absolute convergence.

### Worked examples

#### Example 1: A factorial denominator

Does $\sum 2^n/n!$ converge?

- The absolute consecutive ratio is $2/(n+1)$.
- Its limit is zero, below one.

**Answer: It converges absolutely.**

#### Example 2: Compare critical cases

What are the ratio limits for harmonic and reciprocal-square series?

- They are $n/(n+1)$ and $n^2/(n+1)^2$.
- Both tend to one, although one series diverges and the other converges.

**Answer: The critical value one is inconclusive.**

### Common mistakes

- **One ratio below one suffices** A uniform eventual bound is required.

- **Root values are unrelated to term magnitudes** An eventual root bound is exactly a geometric-power bound.

### Exercises and solutions

**1. What root value does $\sum (3/4)^n$ have?**

Hint: Take the index-th root of each term.

Answer: $3/4$.

- It is constantly three quarters.

**2. Does ratio limit one imply divergence?**

Hint: Reciprocal squares are a counterexample.

Answer: No.

- Use another test.

**3. Can ratios always be taken when infinitely many terms are zero?**

Hint: A denominator may vanish.

Answer: No.

- Ratios may be undefined; use roots or comparison instead.

**4. Use the ratio test to prove $\sum_{n\ge1}n/2^n$ converges, with an explicit geometric tail bound.**

Hint: Bound successive ratios by three quarters in the tail.

Answer: A convergent geometric series bounds the tail, giving absolute convergence.

- Let $a_n=n/2^n$; then $a_{n+1}/a_n=(n+1)/(2n)$.
- For $n\ge2$, the ratio is at most $3/4$, so $a_{2+k}\le a_2(3/4)^k$.
- A convergent geometric series bounds the tail, giving absolute convergence.

Prerequisites: Nonnegative series, comparison, and grouping.

## 3.4 Alternating series and remainder bounds

*When magnitudes decrease to zero, alternating cancellation bounds the remainder by the next term.*

### The idea

When magnitudes decrease to zero, alternating cancellation bounds the remainder by the next term.

### Intuition

Odd partial sums descend and even ones rise. Their gap is the next term's magnitude.

### Another explanation

Odd and even partial sums form narrowing brackets. This requires the stated magnitude conditions, not merely alternating signs.

### Quick check

Which term magnitude bounds the remainder?

A. Last retained term
B. First term
C. First omitted term

Answer: C. It is the distance between consecutive partial sums.

### Check both conditions

Magnitudes must be nonnegative, tend to zero, and be nonincreasing throughout the tail where the bound is used. Alternating signs alone are insufficient.

### Prove the partial-sum squeeze

Even partial sums increase, odd ones decrease, and they bound each other. Their adjacent gap vanishes, giving the same limit.

### Locate the remainder

The sum lies between consecutive partial sums, so the approximation error is at most the next term's magnitude. Do not apply the bound before eventual monotonicity begins.

### Definition and conditions

Starting with a positive term, the alternating test gives signed upper and lower bounds.

$$
S_{2k}\le S\le S_{2k+1},\qquad |S-S_N|\le b_{N+1}
$$

- Nonnegative magnitudes are nonincreasing and tend to zero.
- If conditions hold only eventually, keep the earlier finite prefix separately.

### Derivation

Even partial sums increase by a difference of a term pair.

$$
S_{2k+2}-S_{2k}=b_{2k+1}-b_{2k+2}\ge0
$$

Odd partial sums decrease by a difference of a term pair.

$$
S_{2k+3}-S_{2k+1}=-b_{2k+2}+b_{2k+3}\le0
$$

The bounding gap vanishes and contains the sum.

$$
S_{2k+1}-S_{2k}=b_{2k+1}\to0
$$

### Interactive diagram

Increase the term count. How do the odd–even brackets and next-term error bounds shrink?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-alternating?view=visual

### Guided experiment

1. **Retained terms: 1** Set the retained term count to $1$. Inspect the odd–even bracket and the next-term error bound.

Preset observation: Partial sum $1$; sum lower bound $0.5$; sum upper bound $1$; remainder bound $0.5$.

2. **Retained terms: 50** Set the retained term count to $50$. Inspect the odd–even bracket and the next-term error bound.

Preset observation: Partial sum $0.6832472$; sum lower bound $0.6832472$; sum upper bound $0.702855$; remainder bound $0.01960784$.

3. **Retained terms: 100** Set the retained term count to $100$. Inspect the odd–even bracket and the next-term error bound.

Preset observation: Partial sum $0.6881722$; sum lower bound $0.6881722$; sum upper bound $0.6980732$; remainder bound $0.00990099$.

### Worked examples

#### Example 1: Alternating harmonic error

Using ninety-nine alternating harmonic terms, how large can the remainder be?

- Reciprocal magnitudes decrease to zero.
- The next magnitude is one hundredth.

**Answer: At most $0.01$.**

#### Example 2: Alternating but not vanishing

Does the test apply to $1-1+1-1+\cdots$?

- The magnitude stays one rather than tending to zero.
- The upper–lower gap persists.

**Answer: No.**

### Common mistakes

- **Alternating signs guarantee convergence** Magnitude conditions are also needed.

- **Eventual decrease gives the same bound for any prefix** Use the bound only on a tail satisfying its hypotheses.

### Exercises and solutions

**1. What is the error bound after nine alternating harmonic terms?**

Hint: The next term is the tenth.

Answer: $0.1$.

- The bound is one tenth.

**2. Must a convergent alternating series converge absolutely?**

Hint: Consider the alternating harmonic series.

Answer: No.

- Absolute values give the divergent harmonic series.

**3. If magnitudes become monotone only at term ten, does the next-term bound apply to a one-term approximation?**

Hint: The entire omitted tail must satisfy the conditions.

Answer: Not directly.

- The tail after term one does not yet meet them.

**4. Find a sufficient $N$ giving absolute error less than $10^{-3}$ after $N$ alternating harmonic terms.**

Hint: The target is a strict inequality.

Answer: $N=1000$ suffices. For $N=999$, this bound gives only a non-strict inequality, not that strict guarantee.

- The remainder satisfies $|S-S_N|\le1/(N+1)$.
- To guarantee strictly less than $10^{-3}$ from this bound, require $N+1>1000$.
- $N=1000$ suffices. For $N=999$, this bound gives only a non-strict inequality, not that strict guarantee.

Prerequisites: A series is a limit of partial sums, Monotone convergence and nested intervals.

## 3.5 Absolute convergence and rearrangements

*Absolute convergence preserves the sum under rearrangement. Conditional convergence does not grant that freedom.*

### The idea

Absolute convergence preserves the sum under rearrangement. Conditional convergence does not grant that freedom.

### Intuition

An absolute tail sum is a total error budget, regardless of the order of its terms.

### Another explanation

An absolute-tail budget controls every ordering of the tail. Conditional convergence can instead change the sum.

### Quick check

What must a valid rearrangement preserve?

A. Each term exactly once
B. Positive terms only
C. Arbitrary deletion of finitely many terms

Answer: A. A bijection preserves every original term and its multiplicity.

### Absolute convergence implies convergence

The absolute value of a finite tail sum is bounded by the sum of absolute values. Small absolute tails therefore establish the series Cauchy criterion.

### Capture a finite prefix

Choose a small absolute-tail budget. A rearrangement eventually includes the entire important original prefix. All omitted and extra terms then come from the small tail.

### Conditional sums can change

Alternating harmonic positive terms sum to positive infinity and negative terms to negative infinity. Repeatedly take enough positives to cross a target and enough negatives to go below it. Overshoots vanish, yielding a rearrangement to any specified real sum.

### Definition and conditions

A rearrangement is a bijection of natural-number indices, using each term exactly once.

$$
\sum|a_n|<\infty\implies\sum a_{\pi(n)}=\sum a_n
$$

- Rearrangement cannot delete, repeat, or change terms.
- Products and exchanges of double sums need their own convergence conditions.

### Derivation

Choose a small absolute-tail budget.

$$
\sum_{n>N}|a_n|<\varepsilon
$$

A sufficiently long rearranged prefix contains the key original prefix.

$$
\{1,\ldots,N\}\subseteq\{\pi(1),\ldots,\pi(M)\}
$$

The difference from the original sum is controlled entirely by its tail.

$$
\left|\sum_{j=1}^M a_{\pi(j)}-S\right|\le\sum_{n>N}|a_n|<\varepsilon
$$

### Interactive diagram

Compare rearrangements of absolutely convergent and alternating harmonic series. Which guarantees follow from the absolute-tail budget?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-absolute-rearrangement?view=visual

### Guided experiment

1. **Retained terms: 3** Set the retained term count to $3$. Compare two orders at the same length, distinguishing finite differences from changes of the infinite sum.

Preset observation: Original-order partial sum $0.375$; rearranged partial sum $0.375$; absolute-convergence guarantee: applicable.

2. **Retained terms: 41** Set the retained term count to $41$. Compare two orders at the same length, distinguishing finite differences from changes of the infinite sum.

Preset observation: Original-order partial sum $0.3333333$; rearranged partial sum $0.3333333$; absolute-convergence guarantee: applicable.

3. **Retained terms: 80** Set the retained term count to $80$. Compare two orders at the same length, distinguishing finite differences from changes of the infinite sum.

Preset observation: Original-order partial sum $0.3333333$; rearranged partial sum $0.3333333$; absolute-convergence guarantee: applicable.

### Worked examples

#### Example 1: Safe rearrangement

May $\sum (-1)^{n-1}/2^n$ be rearranged arbitrarily?

- Its absolute-value series is geometric and convergent.
- Every bijective rearrangement preserves the sum.

**Answer: Yes.**

#### Example 2: Keeping only positive terms

Is retaining only the positive alternating harmonic terms a rearrangement?

- Every original negative term is deleted.
- A rearrangement uses every term once.

**Answer: No; it is a different series.**

### Common mistakes

- **Infinite sums allow the same exchanges as finite sums** Conditional convergence may change the result.

- **Grouping and rearrangement are identical** Grouping first changes which partial sums are observed.

### Exercises and solutions

**1. Does absolute convergence imply ordinary convergence?**

Hint: Use the triangle inequality and Cauchy criterion.

Answer: Yes.

- The absolute-tail budget controls the original tail sum.

**2. Does ordinary convergence imply absolute convergence?**

Hint: The alternating harmonic series is a counterexample.

Answer: No.

- Its absolute-value series diverges.

**3. May a rearrangement repeat one term?**

Hint: Use the bijection requirement.

Answer: No.

- Each original index occurs exactly once.

**4. Give a series whose grouped partial sums converge while its original partial sums do not.**

Hint: Pairwise cancellation can hide intermediate partial sums.

Answer: Original odd partial sums are one and even ones zero, so no common limit exists and the series diverges.

- Take $1-1+1-1+\cdots$.
- Grouping consecutive pairs gives zero groups and constantly zero grouped partial sums.
- Original odd partial sums are one and even ones zero, so no common limit exists and the series diverges.

Prerequisites: The Cauchy condition and completeness, Alternating series and remainder bounds.

## Chapter review

Try independently before reading the solutions.

**1. Prove convergence of $\sum_{n=1}^{\infty}1/[n(n+1)]$ and find its sum.**

Hint: Split into differences of adjacent reciprocals.

Answer: One.

- $1/[n(n+1)]=1/n-1/(n+1)$.
- Partial sums satisfy $1-1/(N+1)\to1$.

**2. Can ratio limit one decide convergence? Give contrasting examples.**

Hint: Use two reciprocal-power series.

Answer: No.

- The harmonic series diverges; reciprocal squares converge.
- Both have ratio limit one.

# Chapter 4 · Sets on the real line

Organize local information with neighborhoods, compactness, and connectedness.

Goals:
- Use neighborhoods to identify open sets, closed sets, and limit points
- Prove compactness equivalent to closedness and boundedness
- Distinguish connectedness, countability, and uncountability

## 4.1 Open sets, closed sets, and relative topology

*Every point of an open set has a neighborhood inside it. A closed set contains all its limit points.*

### The idea

Every point of an open set has a neighborhood inside it. A closed set contains all its limit points.

### Intuition

Open and closed are not opposite labels: a set may be both or neither.

### Another explanation

A set may be open, closed, both, or neither. Closedness means its complement is open, not that every nonclosed set is open.

### Quick check

Does “not closed” mean “open”?

A. Yes
B. No
C. Only on the real line

Answer: B. A half-open interval is neither.

### Define openness by neighborhoods

A real subset is open when every member has a positive-radius interval inside it. Both the empty set and the whole line are open.

### Define closedness by complements

A set is closed if its complement is open. Finite intersections and arbitrary unions of open sets are open; infinite intersections may fail. Complements and De Morgan's laws give the dual closed-set rules.

### Specify the ambient space

A relatively open subset of a closed interval is the intersection of a real open set with that interval. At an endpoint, only points within the domain matter.

### Definition and conditions

The ambient space is the real line unless stated otherwise.

$$
U\text{ open}\iff\forall x\in U\ \exists r>0:\ (x-r,x+r)\subseteq U
$$

- Relative openness and closedness require a specified ambient set.

### Derivation

A point in two open sets has a radius in each.

$$
x\in U\cap V,\quad r_U,r_V>0
$$

Take the smaller radius.

$$
r=\min(r_U,r_V)>0
$$

Its neighborhood lies in both sets.

$$
(x-r,x+r)\subseteq U\cap V
$$

### Interactive diagram

Move the center toward an endpoint. Can a neighborhood stay wholly inside the set?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-open-closed?view=visual

### Guided experiment

1. **Current input: -0.2** Set the input to $-0.2$. Check membership of the center and containment of the whole open neighborhood.

Preset observation: Center belongs: no; whole current neighborhood contained: no.

2. **Current input: 0.5** Set the input to $0.5$. Check membership of the center and containment of the whole open neighborhood.

Preset observation: Center belongs: yes; whole current neighborhood contained: yes.

3. **Current input: 1.2** Set the input to $1.2$. Check membership of the center and containment of the whole open neighborhood.

Preset observation: Center belongs: no; whole current neighborhood contained: no.

### Worked examples

#### Example 1: An infinite intersection loses openness

What is $\bigcap_{n\ge1}(-1/n,1/n)$? Is it open?

- Only zero belongs to every interval.
- Every positive-radius neighborhood of zero contains nonzero points.

**Answer: A singleton: closed but not open.**

#### Example 2: Relative openness

Is $[0,1/2)$ relatively open in $[0,1]$?

- It equals $(-1,1/2)\cap[0,1]$.
- At zero, check only the direction within the interval.

**Answer: Relatively open, but not open in the real line.**

### Common mistakes

- **Open and closed are complementary labels** The complement of a closed set is open; a nonclosed set need not itself be open.

- **Relative openness needs no ambient space** Relative properties depend on the chosen space.

### Exercises and solutions

**1. Is the empty set both open and closed?**

Hint: Check the pointwise condition and its complement.

Answer: Yes.

- There are no members to check; its complement, the real line, is open.

**2. Is an arbitrary union of open sets open?**

Hint: A union member lies in at least one of the open sets.

Answer: Yes.

- Use that set's neighborhood.

**3. Is a finite union of closed sets closed?**

Hint: Its complement is a finite intersection of open sets.

Answer: Yes.

- The complement is open, so the union is closed.

**4. Prove an arbitrary union of open sets is open.**

Hint: For a union member, find one containing open set.

Answer: This neighborhood also lies in the whole union. Every union member therefore has an interior neighborhood, proving openness.

- If $x\in\bigcup_{\alpha}U_\alpha$, choose an index with $x\in U_{\alpha_0}$.
- Openness gives $r>0$ with $(x-r,x+r)\subseteq U_{\alpha_0}$.
- This neighborhood also lies in the whole union. Every union member therefore has an interior neighborhood, proving openness.

Prerequisites: Set operations and power sets, Absolute value and error estimates.

## 4.2 Limit points, closure, and sequential criteria

*The closure contains every point whose arbitrarily small neighborhoods meet the original set.*

### The idea

The closure contains every point whose arbitrarily small neighborhoods meet the original set.

### Intuition

Closure allows meeting the point itself; a limit point requires other set members nearby.

### Another explanation

A limit point needs other members nearby; closure may meet the center itself and includes missing limit points.

### Quick check

What distinguishes limit points from closure points?

A. Whether punctured neighborhoods must still meet the set
B. Whether the point is positive
C. Whether it has a decimal representation

Answer: A. An isolated member meets only the closure condition.

### Distinguish closure and limit points

A closure point has every neighborhood meeting the set. A limit point has every punctured neighborhood meeting it. Thus isolated members are closure points but not limit points.

### Establish a sequential criterion

At a closure point, select a set member within each reciprocal radius to form a convergent sequence. Conversely, convergence ensures every neighborhood meets the set.

### Characterize closed sets by limits

A closed set contains limits of all convergent sequences from itself. If not closed, a missing closure point supplies a contradicting sequence by the same construction.

### Definition and conditions

The closure is the union of the set and all its limit points.

$$
x\in\overline A\iff\exists(a_n)\subseteq A:\ a_n\to x
$$

- These sequential criteria hold for reals and metric spaces.

### Derivation

Every small neighborhood contains a set member.

$$
B(x,1/n)\cap A\ne\varnothing
$$

Select members successively.

$$
a_n\in A,\quad |a_n-x|<1/n
$$

Errors vanish, giving a sequence approaching the closure point.

$$
a_n\to x
$$

### Interactive diagram

Show more reciprocal terms. Why is zero a limit point without being an original member?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-closure?view=visual

### Guided experiment

1. **Displayed reciprocal terms: 1** Set the reciprocal term count to $1$. Watch the points accumulate at zero and distinguish the set from its closure.

Preset observation: Finite displayed terms $1$; zero belongs to the full closure: yes.

2. **Displayed reciprocal terms: 50** Set the reciprocal term count to $50$. Watch the points accumulate at zero and distinguish the set from its closure.

Preset observation: Finite displayed terms $50$; zero belongs to the full closure: yes.

3. **Displayed reciprocal terms: 100** Set the reciprocal term count to $100$. Watch the points accumulate at zero and distinguish the set from its closure.

Preset observation: Finite displayed terms $100$; zero belongs to the full closure: yes.

### Worked examples

#### Example 1: The reciprocal set

Find the closure of $A=\{1/n:n\ge1\}$.

- Every original member belongs, and zero is a limit point.
- Every other point has a small neighborhood avoiding the set.

**Answer: $A\cup\{0\}$.**

#### Example 2: Closure of the rationals

What is the closure of the rationals in the real line?

- Every nonempty neighborhood of every real contains a rational.
- Thus every real is included.

**Answer: The whole real line.**

### Common mistakes

- **Closure contains only original members** It also adds missing limit points.

- **Every member is a limit point** Isolated points are counterexamples.

### Exercises and solutions

**1. Does an isolated member belong to the closure?**

Hint: A set is contained in its closure.

Answer: Yes.

- Yes, although it need not be a limit point.

**2. Does a singleton have a limit point?**

Hint: Use punctured neighborhoods.

Answer: No.

- After removing the center there are no other members.

**3. Can a convergent sequence in a closed set have its limit outside?**

Hint: Use the sequential criterion for closedness.

Answer: No.

- No.

**4. Show that an isolated closure point need not be a limit point, using the smallest example.**

Hint: Compare neighborhoods containing the center with punctured neighborhoods.

Answer: Thus zero is a closure point but not a limit point. The closure definition permits meeting the center itself.

- Take $A=\{0\}$. Every neighborhood of zero meets $A$, so $0\in\overline A$.
- But $( -r,r)\setminus\{0\}$ does not meet $A$.
- Thus zero is a closure point but not a limit point. The closure definition permits meeting the center itself.

Prerequisites: Open sets, closed sets, and relative topology, Quantifiers in sequence limits.

## 4.3 Compactness and Heine–Borel

*On the real line, compact means closed and bounded. Every open cover can then be reduced to finitely many members.*

### The idea

On the real line, compact means closed and bounded. Every open cover can then be reduced to finitely many members.

### Intuition

Closedness prevents missing boundary limits; boundedness prevents escape to infinity.

### Another explanation

Boundedness prevents escape, and closedness prevents missing boundary limits. Open bounded intervals are not compact.

### Quick check

What does compactness require of open covers?

A. The original cover is finite
B. A finite subcover exists
C. At most three open sets

Answer: B. The initial cover may be arbitrarily large.

### Define finite subcovers

An open cover covers every point at least once. Compactness requires a finite subfamily still covering the set, for every possible open cover.

### Compactness implies closed and bounded

Integer-radius intervals cover the line; a finite subcover forces boundedness. For a point outside the set, neighborhoods based on distances to members, reduced to finitely many, leave a safe neighborhood around that outside point. Thus the set is closed.

### Prove closed intervals compact

If an interval's open cover has no finite subcover, bisect and retain a half still lacking one. Nested shrinking intervals give a common point. An open set containing it eventually covers the whole retained interval, a contradiction. Closed subsets inherit compactness.

### Definition and conditions

Heine–Borel here uses the usual topology on the real line.

$$
K\subseteq\mathbb R\text{ compact}\iff K\text{ closed and bounded}
$$

- Closed and bounded need not mean compact in an arbitrary metric space.

### Derivation

Assume an open cover of a closed interval has no finite subcover, then bisect repeatedly.

$$
I_{n+1}\subseteq I_n,\quad |I_n|\to0
$$

Its common point belongs to a covering open set, hence has a positive-radius neighborhood there.

$$
x\in U,\quad (x-r,x+r)\subseteq U
$$

A sufficiently small retained interval lies wholly in that open set, a finite subcover and a contradiction.

$$
|I_n|<r\implies I_n\subseteq U
$$

### Interactive diagram

Observe the gaps near an open interval's endpoint. Why does every finite subfamily leave a gap?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-compactness?view=visual

### Guided experiment

1. **Retained covering sets: 1** Set the retained cover count to $1$. Find an explicit point still missed by this finite family.

Preset observation: Smallest left endpoint $0.5$; one missed point $0.25$.

2. **Retained covering sets: 10** Set the retained cover count to $10$. Find an explicit point still missed by this finite family.

Preset observation: Smallest left endpoint $0.09090909$; one missed point $0.04545455$.

3. **Retained covering sets: 20** Set the retained cover count to $20$. Find an explicit point still missed by this finite family.

Preset observation: Smallest left endpoint $0.04761905$; one missed point $0.02380952$.

### Worked examples

#### Example 1: An open interval is not compact

Exhibit an open cover proving $K=(0,1)$ noncompact.

- The sets $(1/n,1)$ for $n\ge2$ cover it.
- Any finite subfamily has a positive smallest left endpoint and misses points nearer zero.

**Answer: There is no finite subcover.**

#### Example 2: Finite sets

Why is a finite real set compact?

- Choose one covering open set for each point.
- Finitely many points require only finitely many chosen sets.

**Answer: It is compact.**

### Common mistakes

- **Boundedness alone gives compactness** Closedness is also needed; an open interval is a counterexample.

- **A finite grid checks every open cover** The definition quantifies over all open covers; a finite image illustrates only selected examples.

### Exercises and solutions

**1. Is a closed bounded interval compact?**

Hint: Apply Heine–Borel.

Answer: Yes.

- It is closed and bounded.

**2. The integers are closed in the real line. Are they compact?**

Hint: Also check boundedness.

Answer: No.

- They are unbounded, hence noncompact.

**3. Does compactness require every given cover to be finite?**

Hint: The original cover may be infinite.

Answer: No.

- Only a finite subcover must exist.

**4. Prove a compact real set $K$ is bounded.**

Hint: Use a specific countable open cover.

Answer: Its union lies in $(-M,M)$, so $K\subseteq(-M,M)$. The empty set is bounded too.

- Intervals $(-n,n)$, $n\ge1$, cover the real line and hence $K$.
- Compactness gives a finite subcover. Let $M$ be the largest selected radius.
- Its union lies in $(-M,M)$, so $K\subseteq(-M,M)$. The empty set is bounded too.

Prerequisites: Monotone convergence and nested intervals, Open sets, closed sets, and relative topology.

## 4.4 Connectedness and intervals

*A real subset is connected exactly when it omits no point between two of its members.*

### The idea

A real subset is connected exactly when it omits no point between two of its members.

### Intuition

A missing middle point separates the left and right parts.

### Another explanation

A missing middle point separates the sides. Connectedness and boundedness are independent.

### Quick check

What characterizes connected real subsets?

A. Finiteness
B. No missing intermediate points
C. Closedness

Answer: B. This is precisely the interval property.

### Define a separation

A separation divides a set into two nonempty, disjoint, relatively open parts. Relative openness, rather than openness in the whole line, is essential.

### Connected sets cannot skip points

A missing point between two members separates the set using intersections with the open half-lines on either side.

### Intervals admit no separation

Suppose an interval is separated. Choose one point in each part and take the supremum of one side between them. Relative openness of either part leads to a contradiction whichever part contains the boundary.

### Definition and conditions

The empty set and singletons are connected by convention.

$$
A\subseteq\mathbb R\text{ connected}\iff x<z<y,\ x,y\in A\implies z\in A
$$

- Intervals may be open, closed, half-open, or unbounded.

### Derivation

A missing middle point gives separation by open half-lines.

$$
A=(A\cap(-\infty,z))\cup(A\cap(z,\infty))
$$

For a supposed interval separation, take a boundary supremum between two selected members.

$$
c=\sup(U\cap[a,b])
$$

Whichever relatively open part contains the boundary either permits extending it or excludes the required approach, a contradiction.

$$
c\in U\ \text{or}\ c\in V
$$

### Interactive diagram

Remove an interior point of an interval. How do the two sides form a separation?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-connectedness?view=visual

### Guided experiment

1. **Whole interval** Select “Whole interval” and check the conditions and readouts. Look for a missing point between two members.

Preset observation: Connected: yes.

2. **Remove zero** Select “Remove zero” and check the conditions and readouts. Look for a missing point between two members.

Preset observation: Connected: no.

3. **Remove an interval** Select “Remove an interval” and check the conditions and readouts. Look for a missing point between two members.

Preset observation: Connected: no.

### Worked examples

#### Example 1: Two separated intervals

Is $[0,1]\cup[2,3]$ connected?

- Points between one and two are missing.
- Separate using the two sides of one point five.

**Answer: No.**

#### Example 2: An unbounded interval

Is the whole real line connected?

- Every point between two reals is still real.
- It has the interval property; boundedness is unnecessary.

**Answer: Connected but not compact.**

### Common mistakes

- **Connected means bounded** These are independent properties.

- **A continuous-looking drawing needs no proof** Check that no intermediate points are missing.

### Exercises and solutions

**1. Is an open interval connected?**

Hint: Does it skip any internal point?

Answer: Yes.

- It does not, so it is connected.

**2. Is a set of two distinct points connected?**

Hint: A point between them is missing.

Answer: No.

- The two sides separate it.

**3. Must a compact set be connected?**

Hint: Two distinct points form a compact set.

Answer: No.

- Finite sets are compact but may be disconnected.

**4. Prove $\mathbb Q$ is disconnected in the relative topology of the real line.**

Hint: Separate it at the irrational $\sqrt2$.

Answer: They form a separation, so $\mathbb Q$ is disconnected. Density does not imply connectedness.

- Let $U=\mathbb Q\cap(-\infty,\sqrt2)$ and $V=\mathbb Q\cap(\sqrt2,\infty)$.
- Both are relatively open, disjoint, and nonempty. Since $\sqrt2\notin\mathbb Q$, their union is $\mathbb Q$.
- They form a separation, so $\mathbb Q$ is disconnected. Density does not imply connectedness.

Prerequisites: Upper bounds, suprema, and completeness, Open sets, closed sets, and relative topology.

## 4.5 Countability, uncountability, and diagonals

*Countable means listable by natural-number indices, not sparsely distributed.*

### The idea

Countable means listable by natural-number indices, not sparsely distributed.

### Intuition

The rationals are countable and dense. Reals are more numerous because every proposed list misses something, not because decimal expansions are long.

### Another explanation

The rationals are countable and dense. Uncountability means every proposed complete list fails, not that representations are long.

### Quick check

Why is the diagonal object absent from the list?

A. It is longer
B. It has a corresponding differing position for every row
C. It is numerically greater

Answer: B. The argument does not depend on size or listing order.

### Enumerate rationals

Arrange integer numerators and positive integer denominators in finite layers by size. Skip repeated fractions to list every rational.

### Use a diagonal argument

Given any list of infinite binary sequences, construct a new sequence whose index-th bit differs from the index-th listed sequence's bit there. It differs from every row somewhere and is absent from the list.

### Transfer to real numbers

Map binary bits to ternary zeroes and twos to inject into a real interval. The first differing digit outweighs every possible later cancellation, avoiding representation ambiguity. Thus the interval is uncountable.

### Definition and conditions

Countable means finite or in bijection with the naturals. The set of infinite binary sequences is uncountable.

$$
b_n=1-a_{nn}\implies (b_n)\ne(a_{kn})_{n\ge1}\quad\forall k
$$

- The diagonal argument refutes any purported complete infinite list.
- A finite display is not an infinite proof.

### Derivation

Assume a list contains every infinite binary sequence.

$$
A=(a_{kn})_{k,n\ge1}
$$

Flip each diagonal bit.

$$
b_n=1-a_{nn}
$$

The new sequence differs from row number at that position, so the list is incomplete.

$$
b_k\ne a_{kk}\quad\forall k
$$

### Interactive diagram

Inspect each row's differing position. Why can the new sequence equal no row?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-countability?view=visual

### Guided experiment

1. **Displayed rows and columns: 2** Set the displayed dimension to $2$. Check the new sequence's differing diagonal bit in each row.

Preset observation: Rows with a guaranteed difference $2$.

2. **Displayed rows and columns: 6** Set the displayed dimension to $6$. Check the new sequence's differing diagonal bit in each row.

Preset observation: Rows with a guaranteed difference $6$.

3. **Displayed rows and columns: 10** Set the displayed dimension to $10$. Check the new sequence's differing diagonal bit in each row.

Preset observation: Rows with a guaranteed difference $10$.

### Worked examples

#### Example 1: Equally many even integers

Give a bijection from positive integers to positive even integers.

- Map $n\mapsto2n$.
- Every positive even integer has exactly one preimage.

**Answer: A proper subset can have the same cardinality.**

#### Example 2: Countable yet dense rationals

Why does density not mean uncountability?

- Density says every open interval contains a member.
- Countability concerns enumeration; the properties address different questions.

**Answer: The rationals have both properties.**

### Common mistakes

- **A countable set cannot be dense** The rationals are a counterexample.

- **All infinite sets have the same size** Diagonalization establishes a larger cardinality.

### Exercises and solutions

**1. Is a finite union of countable sets countable?**

Hint: Interleave their lists and remove repetitions.

Answer: Yes.

- Every member eventually appears.

**2. Would changing only the first digit suffice in the real diagonal argument?**

Hint: Every row must be excluded.

Answer: No.

- Each row needs its own guaranteed differing position.

**3. Must a proper subset of the naturals be smaller in cardinality?**

Hint: Use the positive-even bijection.

Answer: No.

- Infinite sets need not follow finite-set intuition.

**4. Prove $T(b)=\sum_{n\ge1}2b_n/3^n$ injects infinite zero–one sequences into $[0,1]$.**

Hint: Find the first differing position of two sequences.

Answer: Their images differ in magnitude by at least $1/3^k>0$. Combined with binary-sequence uncountability, this proves the interval uncountable.

- Terms are nonnegative with total at most $\sum2/3^n=1$, so the map is defined and lands in $[0,1]$.
- If the first difference is at $k$, its magnitude is $2/3^k$; later differences total at most $\sum_{n>k}2/3^n=1/3^k$.
- Their images differ in magnitude by at least $1/3^k>0$. Combined with binary-sequence uncountability, this proves the interval uncountable.

Prerequisites: Functions, injections, and surjections, The sum and product rules.

## Chapter review

Try independently before reading the solutions.

**1. For the reciprocal set together with zero, determine openness, closedness, boundedness, compactness, and connectedness.**

Hint: Identify every limit point, then check for gaps.

Answer: Closed, bounded, compact; not open or connected.

- It is closed and bounded, hence compact.
- It is not open; it skips intermediate points between separated members, so is disconnected.

**2. Why can finite cover diagrams not directly verify compactness?**

Hint: The definition quantifies over every open cover.

Answer: Finite examples do not replace a universal proof.

- A diagram checks only one cover.
- A general finite-subcover argument or the proved Heine–Borel criterion is needed.

# Chapter 5 · Continuity and uniform continuity

Translate input error into output error.

Goals:
- Distinguish a function limit from its center value
- Prove continuous images preserve compactness and connectedness
- Distinguish continuity from uniform continuity

## 5.1 Function limits and continuity

*A function limit controls nearby inputs. Continuity additionally makes that limit equal the value at the center.*

### The idea

A function limit controls nearby inputs. Continuity additionally makes that limit equal the value at the center.

### Intuition

Receive the output error, then choose an input radius. Limits exclude the center; continuity checks its value.

### Another explanation

Choose an input radius after receiving the output error. Continuity also requires a defined center value equal to the limit.

### Quick check

Why does a punctured limit not determine the center value?

A. The input condition excludes the center
B. The function has no domain
C. The error must be fixed

Answer: A. Continuity connects the limit to the function value.

### Specify the limit point and domain

Discuss a function limit at a limit point of its domain. Inputs must be in the domain and differ from the center. Relative endpoints use the available one-sided approach.

### Separate limits from function values

Changing only the center value preserves a punctured limit but may break continuity. At an isolated domain point, every function is automatically continuous.

### Work backward to a radius

For a square function at a fixed center, factor output error into input difference and a magnitude factor. First restrict the radius below one, then obtain a uniform estimate.

### Definition and conditions

Continuity at a domain point means outputs at all sufficiently nearby domain inputs approach the value there.

$$
\forall\varepsilon>0\ \exists\delta>0:\ x\in D,\ |x-a|<\delta\implies|f(x)-f(a)|<\varepsilon
$$

- A function limit additionally requires the center to be a domain limit point and uses punctured neighborhoods.
- For continuity, the center belongs to the domain.

### Derivation

First restrict inputs to within one of the center.

$$
|x-a|<1\implies|x+a|\le2|a|+1
$$

Factor the square error.

$$
|x^2-a^2|=|x-a||x+a|
$$

Choose a radius meeting both requirements.

$$
\delta=\min\left(1,\frac{\varepsilon}{2|a|+1}\right)
$$

### Interactive diagram

Move the center and output error. How does the conservative radius guarantee all nearby inputs qualify?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-function-limit?view=visual

### Guided experiment

1. **Output error: 1** Set the output error to $1$. Compare input radius and output band, checking the analytic guarantee.

Preset observation: Guaranteed radius $0.3333333$; worst closed-boundary error $0.7777778$.

2. **Output error: 0.505** Set the output error to $0.505$. Compare input radius and output band, checking the analytic guarantee.

Preset observation: Guaranteed radius $0.1683333$; worst closed-boundary error $0.3650028$.

3. **Output error: 0.01** Set the output error to $0.01$. Compare input radius and output band, checking the analytic guarantee.

Preset observation: Guaranteed radius $0.003333333$; worst closed-boundary error $0.006677778$.

### Worked examples

#### Example 1: An incorrect center value

Let $f(x)=x$ for nonzero inputs and $f(0)=1$. Find the limit and continuity at zero.

- Punctured inputs still approach zero under the identity rule.
- The value at the center is one.

**Answer: Limit zero; discontinuous.**

#### Example 2: A linear radius

For $f(x)=3x+1$, which input radius gives output error less than $0.06$?

- $|f(x)-f(a)|=3|x-a|$.
- Use radius zero point zero two. Strictly interior inputs give strictly bounded output error.

**Answer: $0.02$.**

### Common mistakes

- **A limit guarantees continuity** The center must also be defined with the same value.

- **Choose a separate radius after each input is known** One radius must first control every nearby input.

### Exercises and solutions

**1. Can changing a single value alter the punctured limit there?**

Hint: The limit excludes the center input.

Answer: No.

- Other domain values stay unchanged, so the limit is unchanged.

**2. Does continuity at an isolated point require other nearby inputs?**

Hint: Choose a radius containing only the point itself.

Answer: No.

- The condition is automatic.

**3. For $f(x)=x^2$ at center one, what radius does this lesson's conservative formula give for error $0.3$?**

Hint: Use twice the center magnitude plus one.

Answer: $0.1$.

- $\delta=\min(1,0.3/3)=0.1$.

**4. Prove directly that $f(x)=x^2$ is continuous at every $a\in\mathbb R$.**

Hint: Require the input error to be below both one and the needed proportional bound.

Answer: Thus $|x^2-a^2|=|x-a||x+a|<\delta(2|a|+1)\le\varepsilon$.

- Given $\varepsilon>0$, take $\delta=\min(1,\varepsilon/(2|a|+1))$.
- If $|x-a|<\delta$, then $|x+a|\le|x-a|+2|a|<2|a|+1$.
- Thus $|x^2-a^2|=|x-a||x+a|<\delta(2|a|+1)\le\varepsilon$.

Prerequisites: Limit algebra, order, and squeezing, Absolute value and error estimates.

## 5.2 Testing function limits with sequences

*A real function has a limit only if every admissible input sequence approaching the center gives the same output limit.*

### The idea

A real function has a limit only if every admissible input sequence approaching the center gives the same output limit.

### Intuition

One bad sequence refutes a candidate limit. One successful sequence cannot cover every approach.

### Another explanation

One bad sequence can refute a limit; one good sequence cannot establish every approach, even in one dimension.

### Quick check

What can one bad input sequence do?

A. Refute a candidate limit
B. Prove all inputs work
C. Replace the domain

Answer: A. One counterexample refutes a universal statement.

### From a function limit to sequences

Given an output error, the function limit gives an input radius. The input sequence eventually enters that radius, so outputs enter the error band.

### Build a bad sequence from failure

Failure gives one fixed output error violated by some input in every radius. Choose such inputs at reciprocal radii to approach the center while outputs fail to approach the target.

### Detect jumps

If two input sequences approach the same point but have different output limits, no common function limit exists. Continuity sequences may include the center; punctured-limit sequences must exclude it.

### Definition and conditions

The real sequential limit criterion quantifies over all admissible punctured input sequences.

$$
\lim_{x\to a}f(x)=L\iff\forall x_n\in D\setminus\{a\},\ x_n\to a:\ f(x_n)\to L
$$

- The center is a limit point of the domain.

### Derivation

Negate the function-limit error statement.

$$
\exists\varepsilon_0>0\ \forall\delta>0\ \exists x:\ 0<|x-a|<\delta,\ |f(x)-L|\ge\varepsilon_0
$$

Choose a violating input at each reciprocal radius.

$$
0<|x_n-a|<1/n
$$

Inputs approach the center while outputs keep violating the bound.

$$
x_n\to a,\quad|f(x_n)-L|\ge\varepsilon_0
$$

### Interactive diagram

Compare inputs approaching from left and right. Can their outputs have one common limit?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-sequential-continuity?view=visual

### Guided experiment

1. **Displayed terms: 2** Set the term count to $2$. Compare outputs from both input sequences rather than only one.

Preset observation: First output limit $1$; second output limit $-1$.

2. **Displayed terms: 16** Set the term count to $16$. Compare outputs from both input sequences rather than only one.

Preset observation: First output limit $1$; second output limit $-1$.

3. **Displayed terms: 30** Set the term count to $30$. Compare outputs from both input sequences rather than only one.

Preset observation: First output limit $1$; second output limit $-1$.

### Worked examples

#### Example 1: A sign jump

For nonzero inputs, output positive or negative one according to sign. Is there a limit at zero?

- For $x_n=1/n$, outputs are constantly one.
- For $y_n=-1/n$, outputs are constantly negative one.

**Answer: No limit.**

#### Example 2: A dense discontinuity

A function is one on rationals and zero on irrationals. Is it continuous at any real point?

- Both sets are dense, providing sequences of each type approaching any point.
- Their output sequences have different limits.

**Answer: It is nowhere continuous.**

### Common mistakes

- **One straight-line approach suffices** Even one-dimensional limits have left, right, and other input sequences.

- **A shrinking violating output error suffices to refute convergence** A fixed positive error must persist, or output limits must differ.

### Exercises and solutions

**1. Does one successful input sequence prove a function limit?**

Hint: Every admissible sequence is required.

Answer: No.

- Other approaches remain unchecked.

**2. Must every input sequence be checked to refute a candidate limit?**

Hint: One bad sequence suffices.

Answer: No.

- Give a sequence approaching the center whose outputs do not approach the target.

**3. May the punctured-limit criterion use the constant sequence equal to the center?**

Hint: Inputs must exclude the center.

Answer: No.

- That sequence is inadmissible.

**4. Use two input sequences tending to zero to prove that the rational-indicator function has no limit at zero.**

Hint: Do not use only one sequence.

Answer: If the function limit existed, both output limits would coincide by the sequential criterion, contradicting one being different from zero.

- Take $x_n=1/n\in\mathbb Q$ and $y_n=\sqrt2/n\notin\mathbb Q$, both nonzero and tending to zero.
- The first output sequence is constantly one and the second constantly zero.
- If the function limit existed, both output limits would coincide by the sequential criterion, contradicting one being different from zero.

Prerequisites: Function limits and continuity, Quantifiers in sequence limits.

## 5.3 Continuous functions on compact sets and extrema

*Continuous functions map compact sets to compact sets, ensuring both extrema are attained.*

### The idea

Continuous functions map compact sets to compact sets, ensuring both extrema are attained.

### Intuition

Boundedness prevents infinite outputs. Attainment also needs points approaching an extremum to remain within the domain.

### Another explanation

Boundedness rules out infinite outputs, not an unattained supremum. The limiting input must remain in the domain too.

### Quick check

Must a continuous bounded function attain a maximum?

A. Yes
B. Appropriate domain conditions are also needed
C. Yes, if positive

Answer: B. The identity on an open interval is bounded but does not attain its supremum.

### Prove continuous images compact

Pull back an arbitrary open cover of the image under the continuous map. It gives a relatively open cover of the domain. Select finitely many by compactness, then map back.

### Obtain bounds and extrema

A compact real image is closed and bounded. Approach its supremum by image members; closedness keeps that supremum in the image, giving a maximum. Similarly for a minimum.

### Check missing hypotheses

The identity on an open interval is bounded but misses endpoint extrema. A discontinuous function on a closed bounded interval can be unbounded. The word “interval” alone is insufficient.

### Definition and conditions

A continuous real-valued function on a nonempty compact domain attains its maximum and minimum.

$$
\exists x_m,x_M\in K:\ f(x_m)\le f(x)\le f(x_M)\quad\forall x\in K
$$

- The domain is nonempty and compact; the function is continuous and real-valued.

### Derivation

Take the image supremum and choose inputs whose values approach it.

$$
f(x_n)>M-1/n,\quad M=\sup f(K)
$$

Compactness gives a convergent input subsequence with limit still in the domain.

$$
x_{n_k}\to x_*\in K
$$

Continuity transfers the limit to the outputs.

$$
f(x_*)=\lim_k f(x_{n_k})=M
$$

### Interactive diagram

Compare closed-interval, open-interval, and discontinuous cases. Which extremum hypotheses fail?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-extreme-values?view=visual

### Guided experiment

1. **Continuous on a closed interval** Select “Continuous on a closed interval” and check the readouts. Inspect endpoint membership and distinguish the supremum from an attained maximum.

Preset observation: Supremum $1$; maximum attained: yes; minimum $0$.

2. **Continuous on an open interval** Select “Continuous on an open interval” and check the readouts. Inspect endpoint membership and distinguish the supremum from an attained maximum.

Preset observation: Supremum $1$; maximum attained: no; minimum $0$.

3. **Discontinuous on a closed interval** Select “Discontinuous on a closed interval” and check the readouts. Inspect endpoint membership and distinguish the supremum from an attained maximum.

Preset observation: Current output $1$; bounded: no.

### Worked examples

#### Example 1: Attained extrema

Find extrema of $f(x)=x^2$ on $[-1,2]$.

- The function is continuous on a closed bounded interval.
- Zero gives minimum zero; the right endpoint two gives maximum four.

**Answer: Minimum zero; maximum four.**

#### Example 2: Without continuity

Let $f(0)=0,f(x)=1/x$ for $0<x\le1$. Is it bounded on $[0,1]$?

- Reciprocal inputs tend to zero.
- Their outputs are the natural numbers.

**Answer: Unbounded; continuity at zero fails.**

### Common mistakes

- **Bounded means attaining the bound** The supremum need not lie in the image.

- **A closed interval gives boundedness without continuity** Discontinuous examples can grow without bound near an endpoint.

### Exercises and solutions

**1. Does compactness of a continuous image require differentiability?**

Hint: The proof uses only open preimages or sequential continuity.

Answer: No.

- Differentiability is unnecessary.

**2. Must a continuous function on an open interval attain a maximum?**

Hint: Use the identity.

Answer: No.

- The upper endpoint is omitted.

**3. Is a continuous function on a compact set bounded?**

Hint: Its image is compact.

Answer: Yes.

- Compact real subsets are bounded.

**4. Prove a continuous real-valued function on a nonempty compact set attains a minimum too.**

Hint: Apply the maximum theorem to which function?

Answer: Multiply by negative one to get $f(x_*)\le f(x)$, so $f$ attains its minimum at $x_*$.

- If $f$ is continuous, so is $g=-f$.
- The maximum theorem gives $x_*\in K$ with $-f(x)\le-f(x_*)$ for all $x\in K$.
- Multiply by negative one to get $f(x_*)\le f(x)$, so $f$ attains its minimum at $x_*$.

Prerequisites: Compactness and Heine–Borel, Testing function limits with sequences.

## 5.4 Intermediate values and connected images

*A continuous function cannot pass between two values while skipping a value between them.*

### The idea

A continuous function cannot pass between two values while skipping a value between them.

### Intuition

An interval of inputs has no split in its output image. The function need not be monotone.

### Another explanation

Continuous interval images stay connected without requiring monotonicity. Same-sign endpoint outputs still permit interior roots.

### Quick check

What does the intermediate value theorem directly guarantee?

A. Existence of an intermediate output
B. A unique input
C. Monotonicity

Answer: A. It gives existence only.

### Keep the interval and continuity hypotheses

The domain must contain the entire interval between the two inputs, with continuity throughout. A target between endpoint outputs is attained by an intermediate input.

### Locate a boundary with a supremum

When the left value is below the target and the right above, take the supremum of inputs whose outputs are below it. Continuity rules out the boundary output being either too low or too high.

### Separate existence from uniqueness

The theorem establishes existence only. Uniqueness needs extra information such as strict monotonicity. Bisection likewise does not show that all roots are unique.

### Definition and conditions

A continuous image of an interval is an interval.

$$
f(a)<y<f(b)\implies\exists c\in(a,b):f(c)=y
$$

- The function is continuous on the closed interval; reversed endpoint-value order is handled similarly.

### Derivation

Take the supremum of inputs with output below the target.

$$
c=\sup\{x\in[a,b]:f(x)<y\}
$$

If its output is too low, continuity permits moving farther right while remaining below.

$$
f(c)<y\implies\exists h>0:f(c+h)<y
$$

If too high, continuity excludes arbitrarily close lower-output inputs on the left.

$$
f(c)>y\implies\exists h>0:\ f(x)>y\ (|x-c|<h)
$$

Both contradict the supremum, so the output equals the target.

$$
f(c)=y
$$

### Interactive diagram

Move the input to locate a target. Which conclusions give existence, and which remain unproved?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-intermediate-values?view=visual

### Guided experiment

1. **Root-bracketing bisections: 0** Set the bisection count to $0$. Compare the current output with zero and watch the root bracket shrink.

Preset observation: Current output $0.875$; bracket left endpoint $1$; right endpoint $2$.

2. **Root-bracketing bisections: 10** Set the bisection count to $10$. Compare the current output with zero and watch the root bracket shrink.

Preset observation: Current output $0.875$; bracket left endpoint $1.324219$; right endpoint $1.325195$.

3. **Root-bracketing bisections: 20** Set the bisection count to $20$. Compare the current output with zero and watch the root bracket shrink.

Preset observation: Current output $0.875$; bracket left endpoint $1.324718$; right endpoint $1.324718$.

### Worked examples

#### Example 1: Existence of a root

Does $f(x)=x^3-x-1$ have a root between one and two?

- The polynomial is continuous; endpoint values are negative one and five.
- Zero lies between them, so the intermediate value theorem gives a root.

**Answer: Yes; this theorem alone does not give uniqueness.**

#### Example 2: A missing input interval

The identity on $\{-1,1\}$ is continuous. Must it attain zero?

- It is continuous relative to that domain.
- The domain is disconnected and omits the intervening interval.

**Answer: It does not attain zero.**

### Common mistakes

- **Same-sign endpoints rule out roots** The function may still cross zero inside.

- **Continuity on an arbitrary discrete domain gives intermediate values** The domain needs the connecting-interval property.

### Exercises and solutions

**1. If a continuous function attains two outputs, must it attain every intermediate output?**

Hint: Check that the domain contains their connecting interval.

Answer: An interval or other appropriate connectedness condition is needed.

- Yes for an interval domain, but not in general.

**2. Does the intermediate value theorem guarantee a unique root?**

Hint: A continuous oscillation may cross zero repeatedly.

Answer: No.

- It guarantees at least one root only.

**3. Do same-sign endpoint values exclude roots?**

Hint: The function may cross below zero in between.

Answer: No.

- $x^2-1$ can have positive endpoints and negative middle values while still having roots.

**4. Prove $x^3-x-1=0$ has exactly one root in $(1,2)$.**

Hint: Prove existence and uniqueness separately.

Answer: The function is strictly increasing there, so two roots are impossible. This algebraic uniqueness proof needs no mean value theorem.

- The polynomial is continuous, with $f(1)=-1$ and $f(2)=5$; the intermediate value theorem gives an interior root.
- If $1\le u<v\le2$, then $f(v)-f(u)=(v-u)(v^2+uv+u^2-1)>0$.
- The function is strictly increasing there, so two roots are impossible. This algebraic uniqueness proof needs no mean value theorem.

Prerequisites: Connectedness and intervals, Function limits and continuity.

## 5.5 Uniform continuity and Heine–Cantor

*Uniform continuity uses one input radius across the entire domain, independently of the center.*

### The idea

Uniform continuity uses one input radius across the entire domain, independently of the center.

### Intuition

Local control at every point need not give one shared scale. Compactness makes continuous local control uniform.

### Another explanation

One local radius at each point need not give a shared radius. Noncompact domains can defeat uniform continuity.

### Quick check

Which inputs does a uniform-continuity radius control?

A. One center
B. Every pair in the domain
C. Finite-grid points

Answer: B. Its quantifiers give domain-wide control.

### Move the quantifiers

Ordinary continuity allows the radius to depend on the center and error. Uniform continuity chooses a radius after the error that works for every input pair.

### Argue using bad input pairs

Failure on a compact set gives pairs with vanishing input gaps but a fixed positive output gap. A convergent subsequence of the first inputs forces the second to the same limit. Continuity makes the output gap vanish, a contradiction.

### Find noncompact counterexamples

The square function is continuous but not uniformly continuous on the real line. Growing inputs differing by a reciprocal still have output gaps near two. A noncompact domain may also support uniform continuity, as the identity shows.

### Definition and conditions

A continuous function on a compact set is uniformly continuous.

$$
\forall\varepsilon>0\ \exists\delta>0\ \forall x,y\in D:\ |x-y|<\delta\implies|f(x)-f(y)|<\varepsilon
$$

- Heine–Cantor requires a compact domain and a continuous function.
- Compactness is sufficient, not necessary, for uniform continuity.

### Derivation

Failure of uniform continuity supplies bad input pairs.

$$
|x_n-y_n|<1/n,\quad|f(x_n)-f(y_n)|\ge\varepsilon_0
$$

Compactness gives a subsequence whose two inputs approach the same point.

$$
x_{n_k}\to x,\quad y_{n_k}\to x
$$

Continuity makes their output gap vanish, contradicting its fixed lower bound.

$$
|f(x_{n_k})-f(y_{n_k})|\to0
$$

### Interactive diagram

Move inputs farther out while bringing them closer together. Can the output gap stay bounded below?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-uniform-continuity?view=visual

### Guided experiment

1. **Outward input index: 1** Set the outward index to $1$. Compare input and output gaps and check whether both shrink.

Preset observation: Input gap $1$; output gap $3$.

2. **Outward input index: 50** Set the outward index to $50$. Compare input and output gaps and check whether both shrink.

Preset observation: Input gap $0.02$; output gap $2.0004$.

3. **Outward input index: 100** Set the outward index to $100$. Compare input and output gaps and check whether both shrink.

Preset observation: Input gap $0.01$; output gap $2.0001$.

### Worked examples

#### Example 1: The square-function counterexample

For $x_n=n,y_n=n+1/n$, compare input distance and square difference.

- $|x_n-y_n|=1/n\to0$.
- $y_n^2-x_n^2=2+1/n^2\to2$.

**Answer: The square function is not uniformly continuous on the whole real line.**

#### Example 2: Compactness is not necessary

Is the identity uniformly continuous on the real line?

- $|f(x)-f(y)|=|x-y|$.
- For every error, choose the same input radius.

**Answer: Uniformly continuous despite a noncompact domain.**

### Common mistakes

- **Continuity automatically implies uniform continuity** Noncompact domains give counterexamples.

- **A noncompact domain cannot support uniform continuity** The identity is a counterexample.

### Exercises and solutions

**1. Is squaring uniformly continuous on the closed interval from zero to one?**

Hint: Use compactness and continuity, or a direct factor bound.

Answer: Yes.

- $|x^2-y^2|\le2|x-y|$.

**2. May a uniform-continuity radius depend on the selected center?**

Hint: The radius precedes the arbitrary input pair.

Answer: It may not.

- No.

**3. Is sine uniformly continuous on the real line?**

Hint: Use a slope bound or trigonometric estimate.

Answer: Yes.

- $|\sin x-\sin y|\le|x-y|$.

**4. Prove $f(x)=x^2$ is not uniformly continuous on the real line.**

Hint: Find vanishing input gaps with nonvanishing output gaps.

Answer: A common $\delta>0$ for output error one would fail at $n>1/\delta$: input gap below $\delta$, output gap above one.

- Take $x_n=n$, $y_n=n+1/n$, so $|x_n-y_n|=1/n\to0$.
- But $|f(y_n)-f(x_n)|=2+1/n^2>2$.
- A common $\delta>0$ for output error one would fail at $n>1/\delta$: input gap below $\delta$, output gap above one.

Prerequisites: Compactness and Heine–Borel, Testing function limits with sequences.

## Chapter review

Try independently before reading the solutions.

**1. Prove squaring uniformly continuous on each fixed closed bounded interval, and explain why the full real line differs.**

Hint: Bound the product factor.

Answer: Bounded domains give a uniform factor bound; the whole line does not.

- On $[-M,M]$, $|x^2-y^2|\le2M|x-y|$; the case $M=0$ is trivial.
- On the whole line choose $n,n+1/n$: input gaps vanish while output gaps tend to two.

**2. A continuous function on a compact interval attains extrema and intermediate values. Which hypotheses serve each conclusion?**

Hint: Distinguish compactness from interval connectedness.

Answer: The hypotheses have distinct roles.

- Compactness and continuity give extrema.
- Interval connectedness and continuity give intermediate values.

# Chapter 6 · Theory of differentiation

From local linearity to global bounds.

Goals:
- Express differentiability as local linear approximation
- State hypotheses for the mean value and Darboux theorems
- Estimate functions with Taylor remainders and second derivatives

## 6.1 Derivatives and local linearity

*Differentiability writes the change as a linear main term plus a remainder smaller than the input change.*

### The idea

Differentiability writes the change as a linear main term plus a remainder smaller than the input change.

### Intuition

Continuity brings values close; differentiability also requires one consistent first-order slope.

### Another explanation

A derivative requires a consistent first-order slope. Check differentiability separately from continuity.

### Quick check

What does differentiability add to continuity?

A. One consistent local first-order slope
B. Monotonicity
C. Continuity of the derivative

Answer: A. The derivative itself may be discontinuous.

### Rewrite the quotient as a remainder

A derivative exists exactly when the increment equals derivative times input increment plus a remainder whose ratio to the increment vanishes. This immediately implies continuity.

### Check agreement from both sides

Absolute value is continuous at zero, but its right quotient is one and its left quotient negative one. No common derivative exists.

### Prove the composition rule

Insert the inner increment into the outer function's local linear expansion. Inner differentiability bounds its increment by a constant times the original input change, leaving a smaller-order remainder.

### Definition and conditions

Interior differentiability uses a two-sided difference-quotient limit.

$$
f(a+h)=f(a)+f'(a)h+o(h)
$$

- The center is an interior domain point; one-sided endpoint derivatives may be defined separately.
- A little-o remainder divided by the input increment tends to zero.

### Derivation

Write the error in the quotient limit as a vanishing function.

$$
\frac{f(a+h)-f(a)}h=f'(a)+\eta(h),\quad\eta(h)\to0
$$

Multiply by the input increment.

$$
f(a+h)-f(a)=f'(a)h+h\eta(h)
$$

Both increment terms vanish, proving continuity.

$$
f(a+h)\to f(a)
$$

### Interactive diagram

Shrink the increment. How does the square-function remainder divided by that increment change?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-derivative?view=visual

### Guided experiment

1. **Increment magnitude: 0.4** Set the increment magnitude to $0.4$. Compare secant and tangent, then switch sides to test agreement of the quotients.

Preset observation: Current quotient $0.4$; center derivative $0$; remainder divided by increment $0.4$.

2. **Increment magnitude: 0.2001** Set the increment magnitude to $0.2001$. Compare secant and tangent, then switch sides to test agreement of the quotients.

Preset observation: Current quotient $0.2001$; center derivative $0$; remainder divided by increment $0.2001$.

3. **Increment magnitude: 0.0001** Set the increment magnitude to $0.0001$. Compare secant and tangent, then switch sides to test agreement of the quotients.

Preset observation: Current quotient $0.0001$; center derivative $0$; remainder divided by increment $0.0001$.

### Worked examples

#### Example 1: The square-function remainder

For $f(x)=x^2$ at center $a$, identify the linear term and remainder.

- $(a+h)^2-a^2=2ah+h^2$.
- $h^2/h=h\to0$.

**Answer: Main term $2ah$; remainder $h^2$.**

#### Example 2: Continuous but not differentiable

What are the difference quotients of $|x|$ at zero?

- Positive increments give one.
- Negative increments give negative one.

**Answer: The sides differ, so no derivative exists.**

### Common mistakes

- **A large difference quotient proves discontinuity of the function** Differentiability and continuity need separate checks.

- **A small remainder only needs to vanish by itself** It must be smaller in order than the input change.

### Exercises and solutions

**1. Does differentiability imply continuity?**

Hint: Use the local linear decomposition.

Answer: Yes.

- The linear term and smaller-order remainder both vanish.

**2. Does continuity imply differentiability?**

Hint: Consider absolute value at zero.

Answer: Not necessarily.

- The counterexample disproves the converse.

**3. Is $h^2$ an $o(h)$ remainder?**

Hint: Divide and take the limit.

Answer: Yes.

- $h^2/h=h\to0$.

**4. Prove directly that $|x|$ is not differentiable at zero.**

Hint: Compute the positive and negative difference quotients.

Answer: The one-sided limits differ, so the two-sided quotient has no limit. The function remains continuous at zero.

- For $h>0$, $(|h|-0)/h=1$.
- For $h<0$, $(|h|-0)/h=-1$.
- The one-sided limits differ, so the two-sided quotient has no limit. The function remains continuous at zero.

Prerequisites: Function limits and continuity.

## 6.2 Rolle's theorem and the mean value theorem

*Continuity on a closed interval and differentiability inside connect the average change to a derivative somewhere.*

### The idea

Continuity on a closed interval and differentiability inside connect the average change to a derivative somewhere.

### Intuition

Subtract the endpoint secant line to equalize endpoint values. An interior extremum then gives a horizontal tangent.

### Another explanation

Subtracting the secant gives equal endpoints and an interior horizontal tangent. A missing corner can invalidate the required derivative.

### Quick check

What gives an interior extremum in Rolle's proof?

A. The extreme value theorem and equal endpoint values
B. Plot sampling
C. A continuous derivative

Answer: A. Continuity on a closed interval guarantees attained extrema.

### Prove Rolle's theorem first

For a nonconstant function with equal endpoint values, the extreme value theorem gives an interior extremum. There, opposite signs of one-sided quotients force the derivative to zero.

### Subtract the secant

Subtracting the endpoint secant from a general function creates Rolle's hypotheses. Its zero derivative becomes the original derivative equal to average slope.

### Turn a local bound into a global bound

A uniform bound on derivative magnitude lets the mean value theorem bound every output difference by that constant times input distance. Derivatives existing everywhere need not have a uniform bound.

### Definition and conditions

The mean value theorem does not require a continuous derivative.

$$
\exists c\in(a,b):\quad f'(c)=\frac{f(b)-f(a)}{b-a}
$$

- The endpoints are strictly ordered; the function is continuous on the closed interval and differentiable inside.

### Derivation

Subtract the line with the average slope.

$$
g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a)
$$

The endpoint values match, so Rolle gives an interior zero derivative.

$$
g(a)=g(b),\quad g'(c)=0
$$

Rearrange to recover the result.

$$
f'(c)=\frac{f(b)-f(a)}{b-a}
$$

### Interactive diagram

Change the interval. How does its secant slope match the tangent at the mean value point?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-mean-value?view=visual

### Guided experiment

1. **Left endpoint: -2** Set the left endpoint to $-2$. Compare secant and tangent slopes and check that the mean value point lies between endpoints.

Preset observation: Secant slope $0$; mean value point $0$.

2. **Left endpoint: -0.5** Set the left endpoint to $-0.5$. Compare secant and tangent slopes and check that the mean value point lies between endpoints.

Preset observation: Secant slope $1.5$; mean value point $0.75$.

3. **Left endpoint: 1** Set the left endpoint to $1$. Compare secant and tangent slopes and check that the mean value point lies between endpoints.

Preset observation: Secant slope $3$; mean value point $1.5$.

### Worked examples

#### Example 1: A square-function mean value point

Find the mean value point for $x^2$ from zero to two.

- The average slope is four divided by two, or two.
- $2c=2$, so $c=1$.

**Answer: One.**

#### Example 2: A missing differentiability condition

For $|x|$ from negative one to one, average slope is zero. Is any derivative zero?

- It is not differentiable at zero.
- Elsewhere the derivative is positive or negative one.

**Answer: No; the mean value theorem does not apply.**

### Common mistakes

- **One missing corner point does not affect the theorem** That point may be exactly the required mean value point.

- **Zero derivative gives one constant on every disconnected domain** The conclusion holds separately on each interval component.

### Exercises and solutions

**1. If the derivative is zero throughout an interval, what is the function?**

Hint: Apply the mean value theorem between any two points.

Answer: Constant.

- Their output difference is zero.

**2. Does a nonnegative derivative imply a nondecreasing function on an interval?**

Hint: Use the mean value theorem and the sign of the input difference.

Answer: Yes.

- Every later input has at least the earlier output.

**3. Does the mean value theorem need a continuous derivative?**

Hint: Check its hypotheses.

Answer: No.

- Only interior differentiability is needed.

**4. Suppose $f$ is differentiable on an interval and $|f'|\le M$. Prove $|f(x)-f(y)|\le M|x-y|$.**

Hint: Apply the mean value theorem on the segment between the inputs.

Answer: Take absolute values and apply the derivative bound. The resulting inequality also proves uniform continuity.

- The case $x=y$ is immediate. Otherwise assume $x<y$; differentiability gives continuity on this closed segment.
- Some $c\in(x,y)$ satisfies $f(y)-f(x)=f'(c)(y-x)$.
- Take absolute values and apply the derivative bound. The resulting inequality also proves uniform continuity.

Prerequisites: Continuous functions on compact sets and extrema, Derivatives and local linearity.

## 6.3 Derivatives may be discontinuous but cannot skip values

*A derivative may oscillate discontinuously while still having the intermediate value property.*

### The idea

A derivative may oscillate discontinuously while still having the intermediate value property.

### Intuition

Slopes need not vary continuously, but cannot jump over every intermediate slope.

### Another explanation

Derivatives cannot skip intermediate values, but may oscillate discontinuously. Continuous differentiability is stronger than differentiability.

### Quick check

What does Darboux rule out for derivatives?

A. Every discontinuity
B. Skipping intermediate values
C. Negative values

Answer: B. Oscillatory discontinuity remains possible.

### Construct a discontinuous derivative

Define zero at zero and elsewhere the square times the sine of the reciprocal. The quotient at zero vanishes, giving derivative zero, but nearby derivatives contain a nonvanishing reciprocal-cosine oscillation.

### Prove the derivative's intermediate value property

Subtract a line with the target slope. If endpoint derivatives are negative and positive, neither endpoint can minimize the resulting continuous function. Its interior minimum has zero derivative.

### Distinguish intermediate values from continuity

The intermediate value property allows discontinuity. Darboux excludes skipped-value jumps in derivatives, not every possible discontinuity.

### Definition and conditions

If a function is differentiable on an open interval containing two points, its derivative takes every value between its endpoint derivatives.

$$
f'(a)<\lambda<f'(b)\implies\exists c\in(a,b):f'(c)=\lambda
$$

- The function is differentiable on an open interval containing the closed segment.
- Reversed ordering of the derivative values is handled similarly.

### Derivation

Subtract the target slope.

$$
g(x)=f(x)-\lambda x,\quad g'(a)<0<g'(b)
$$

Endpoint derivative signs exclude endpoint minima.

$$
g(a+h)<g(a),\quad g(b-h)<g(b)\quad\text{for sufficiently small }h>0
$$

Continuity gives an interior minimum; differentiability makes its derivative zero.

$$
g'(c)=0\implies f'(c)=\lambda
$$

### Interactive diagram

Zoom near zero in the function and its slopes. Which settles while the other keeps oscillating?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-darboux?view=visual

### Guided experiment

1. **Zoom index: 1** Set the zoom index to $1$. Compare shrinking function values with persistent derivative-subsequence oscillation near zero.

Preset observation: Derivative at zero $0$; selected derivative subsequences: negative one and positive one.

2. **Zoom index: 25** Set the zoom index to $25$. Compare shrinking function values with persistent derivative-subsequence oscillation near zero.

Preset observation: Derivative at zero $0$; selected derivative subsequences: negative one and positive one.

3. **Zoom index: 50** Set the zoom index to $50$. Compare shrinking function values with persistent derivative-subsequence oscillation near zero.

Preset observation: Derivative at zero $0$; selected derivative subsequences: negative one and positive one.

### Worked examples

#### Example 1: An oscillating derivative

For $f(x)=x^2\sin(1/x)$ away from zero and zero at zero, find the derivative at zero.

- $f(h)/h=h\sin(1/h)$.
- Its magnitude is at most $|h|$, hence tends to zero.

**Answer: Zero, although nearby derivatives need not tend to zero.**

#### Example 2: A step cannot be a derivative

A function equals negative one on the left and one on the right, with one center value added. Could it be the derivative of an everywhere differentiable function?

- It skips many values between negative one and one.
- That violates the intermediate value property of derivatives.

**Answer: No.**

### Common mistakes

- **Differentiable means continuously differentiable** The latter is stronger.

- **Intermediate values alone justify arbitrary limit exchanges** Specific continuity or uniform control is still needed.

### Exercises and solutions

**1. Must a differentiable function's derivative be continuous?**

Hint: Use the oscillating example.

Answer: Not necessarily.

- No.

**2. Can a derivative have a jump discontinuity?**

Hint: Apply Darboux's theorem.

Answer: No.

- A jump would skip intermediate values.

**3. Is the intermediate value property equivalent to continuity?**

Hint: Use the oscillating derivative.

Answer: No.

- Intermediate values permit oscillatory discontinuities.

**4. Prove the function zero at zero and $x^2\sin(1/x)$ elsewhere is differentiable, with derivative discontinuous at zero.**

Hint: Compute the zero quotient, then inspect two derivative subsequences.

Answer: For $x_n=1/(2\pi n)$ the derivative is negative one; for $y_n=1/((2n+1)\pi)$ it is one. Both input sequences tend to zero, so the derivative is discontinuous.

- The quotient at zero is $h\sin(1/h)$, bounded in magnitude by $|h|$, so $f'(0)=0$.
- For nonzero inputs, $f'(x)=2x\sin(1/x)-\cos(1/x)$.
- For $x_n=1/(2\pi n)$ the derivative is negative one; for $y_n=1/((2n+1)\pi)$ it is one. Both input sequences tend to zero, so the derivative is discontinuous.

Prerequisites: Continuous functions on compact sets and extrema, Derivatives and local linearity.

## 6.4 Taylor's theorem with controlled remainders

*A Taylor polynomial approximates a function only when its remainder is genuinely small.*

### The idea

A Taylor polynomial approximates a function only when its remainder is genuinely small.

### Intuition

Higher differentiability supplies a conditional error formula, not automatic equality with an infinite Taylor series.

### Another explanation

Higher differentiability yields a remainder formula, not equality with the full series. Flat functions are counterexamples.

### Quick check

What guarantees polynomial approximation accuracy?

A. The plots look identical
B. A remainder estimate
C. Writing many terms

Answer: C. Prove the remainder is below the desired error.

### State smoothness conditions

Use a strong, clear hypothesis: the specified derivatives are continuous on an open interval containing both points. Repeated Rolle then proves the remainder formula directly.

### Create zeros with an auxiliary function

Subtract the Taylor polynomial and an adjustable higher-power term, making the endpoint error zero. Repeated Rolle forces the auxiliary higher derivative to vanish somewhere between.

### Replace an unknown point by a bound

A uniform bound on the highest derivative gives a computable error estimate. Whether it tends to zero with degree depends on that bound, the factorial, and the distance together.

### Definition and conditions

Continuous derivatives through the next order suffice for the Lagrange remainder used here.

$$
f(x)=\sum_{k=0}^m\frac{f^{(k)}(a)}{k!}(x-a)^k+\frac{f^{(m+1)}(\xi)}{(m+1)!}(x-a)^{m+1}
$$

- The function belongs to the required continuously differentiable class on an open interval containing the segment.
- The intermediate point lies between the two inputs; equal inputs give zero remainder.

### Derivation

Choose a coefficient imposing multiple-zero conditions on the auxiliary function.

$$
g(t)=f(t)-T_m(t)-C(t-a)^{m+1},\quad g(x)=0
$$

Its lower derivatives vanish at the center; apply Rolle repeatedly.

$$
g(a)=g'(a)=\cdots=g^{(m)}(a)=0
$$

An intermediate higher derivative vanishes; solve for the coefficient.

$$
0=f^{(m+1)}(\xi)-(m+1)!C
$$

### Interactive diagram

Increase degree and move the input. Does the analytic error bound reflect both changes?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-taylor?view=visual

### Guided experiment

1. **Polynomial degree: 0** Set the degree to $0$. Compare the polynomial, true function, and analytic remainder bound.

Preset observation: Approximation $1$; floating-point absolute error $0.6487213$; analytic error bound $0.8243606$.

2. **Polynomial degree: 6** Set the degree to $6$. Compare the polynomial, true function, and analytic remainder bound.

Preset observation: Approximation $1.64872$; floating-point absolute error $0.000001652645$; analytic error bound $0.000002555682$.

3. **Polynomial degree: 12** Set the degree to $12$. Compare the polynomial, true function, and analytic remainder bound.

Preset observation: Approximation $1.648721$; floating-point absolute error $2.065015\times10^{-14}$; analytic error bound $3.232042\times10^{-14}$.

### Worked examples

#### Example 1: A quadratic exponential approximation

Approximate $e^{0.1}$ quadratically, using third-derivative bound two from zero to zero point one.

- $T_2=1+0.1+0.1^2/2=1.105$.
- The error is at most $2(0.1)^3/6=1/3000$.

**Answer: $1.105$, with error at most $1/3000$.**

#### Example 2: Smooth but not analytic

What does $f(0)=0,f(x)=e^{-1/x^2}$ for nonzero inputs demonstrate?

- All derivatives at zero vanish; the appendix proves this using exponential domination of powers.
- Its Taylor series about zero is identically zero, yet the function is positive elsewhere.

**Answer: Smoothness does not imply equality with the Taylor series.**

### Common mistakes

- **Infinitely differentiable implies analytic** A flat function is a counterexample.

- **The remainder derivative may always be replaced by the center derivative** Use a uniform interval bound or the actual intermediate-point value.

### Exercises and solutions

**1. Is the remainder's intermediate point usually known?**

Hint: The theorem gives existence.

Answer: Usually not.

- Usually only its location within the interval is known.

**2. Does increasing the degree always make the error vanish at every input?**

Hint: Check how derivative bounds grow with order.

Answer: No guarantee.

- Degree alone is insufficient.

**3. With third-derivative bound six and distance one tenth, what is the quadratic-approximation error bound?**

Hint: Divide by the third factorial.

Answer: $0.001$.

- $6\cdot0.1^3/6=0.001$.

**4. Give a quadratic estimate of $e^{0.1}$ with a strict error bound.**

Hint: Bound the third derivative on $[0,0.1]$.

Answer: Thus absolute remainder is less than $2\cdot0.1^3/6=1/3000$. The true value lies within this distance of $1.105$.

- The quadratic approximation is $1+0.1+0.1^2/2=1.105$.
- The third derivative is still exponential, bounded there by $e^{0.1}<2$.
- Thus absolute remainder is less than $2\cdot0.1^3/6=1/3000$. The true value lies within this distance of $1.105$.

Prerequisites: Rolle's theorem and the mean value theorem.

## 6.5 Convexity, tangents, and second derivatives

*A convex graph lies below its chords and, when differentiable, above every tangent.*

### The idea

A convex graph lies below its chords and, when differentiable, above every tangent.

### Intuition

Nondecreasing secant slopes translate geometric curvature into comparable quantities.

### Another explanation

Convexity orders secant slopes. Remember the direction: the graph lies below chords and above tangents.

### Quick check

What does a nonnegative second derivative ensure?

A. Convexity
B. Strict convexity everywhere
C. Every point is an extremum

Answer: A. Strictness requires additional information.

### Define convexity by chords

At a weighted average of two inputs, the output is no greater than the same weighted average of their outputs. Weights lie from zero to one, and the domain is an interval.

### Connect it to monotone derivatives

Compare three-point secants and bring adjacent points together to obtain a nondecreasing derivative. Conversely, a nondecreasing derivative and the mean value theorem order the secants and imply convexity.

### Use a second-derivative sufficient condition

A nonnegative second derivative makes the first derivative nondecreasing by the mean value theorem, hence gives convexity. A zero second derivative at one point need not preclude strict convexity or imply an inflection.

### Definition and conditions

Tangents to a differentiable convex function give global lower bounds.

$$
f((1-t)x+ty)\le(1-t)f(x)+tf(y),\quad t\in[0,1]
$$

- The domain is an interval.
- The second-derivative criterion requires the stated twice-differentiability assumptions.

### Derivation

Compare adjacent secants at three ordered points.

$$
\frac{f(y)-f(x)}{y-x}\le\frac{f(z)-f(x)}{z-x}\le\frac{f(z)-f(y)}{z-y}
$$

Move one point to the other to obtain a tangent lower bound.

$$
f(y)\ge f(x)+f'(x)(y-x)
$$

A nonnegative second derivative gives a nondecreasing first derivative by the mean value theorem.

$$
f''\ge0\implies f'\text{ nondecreasing}\implies f\text{ convex}
$$

### Interactive diagram

Move the tangent point. How do the graph, tangent, and chord positions express convexity?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-convexity?view=visual

### Guided experiment

1. **Current input: -1** Set the input to $-1$. Compare the graph with the lower tangent and upper chord between the endpoints.

Preset observation: Tangent slope $-2$; chord height above the tangent point $0$.

2. **Current input: 0** Set the input to $0$. Compare the graph with the lower tangent and upper chord between the endpoints.

Preset observation: Tangent slope $0$; chord height above the tangent point $1$.

3. **Current input: 1** Set the input to $1$. Compare the graph with the lower tangent and upper chord between the endpoints.

Preset observation: Tangent slope $2$; chord height above the tangent point $0$.

### Worked examples

#### Example 1: Convexity of squaring

Verify the convexity definition directly for the square function.

- $(1-t)x^2+ty^2-[(1-t)x+ty]^2=t(1-t)(x-y)^2$.
- The right side is nonnegative.

**Answer: Convex; strict for distinct inputs and interior weights.**

#### Example 2: Zero second derivative with strict convexity

Does the zero second derivative of $x^4$ at zero prevent strict convexity?

- Its derivative $4x^3$ is strictly increasing.
- Thus the function is strictly convex and zero is not an inflection point.

**Answer: No.**

### Common mistakes

- **A convex graph lies above its chords** The direction is reversed.

- **Every zero of the second derivative is an inflection** Check whether convexity changes on the two sides.

### Exercises and solutions

**1. Where is a convex graph relative to its chords?**

Hint: Use the weighted-average definition.

Answer: Below.

- Below or on them.

**2. Where is a differentiable convex graph relative to its tangents?**

Hint: Use the tangent lower bound.

Answer: Above.

- Above or on them.

**3. Does a zero second derivative imply an inflection point?**

Hint: Consider a quartic.

Answer: Not necessarily.

- Convexity need not change there.

**4. Use a tangent bound to prove $\log x\le x-1$ for every positive $x$.**

Hint: Take the tangent to convex $-\log x$ at one.

Answer: Multiply by negative one to get $\log x\le x-1$. The elementary logarithm derivative is used as a calculus prerequisite.

- Let $g(x)=-\log x$. Since $g''(x)=1/x^2>0$, it is convex on the positive half-line.
- At one, $g(1)=0$ and $g'(1)=-1$. The tangent bound gives $-\log x\ge-(x-1)$.
- Multiply by negative one to get $\log x\le x-1$. The elementary logarithm derivative is used as a calculus prerequisite.

Prerequisites: Rolle's theorem and the mean value theorem.

## Chapter review

Try independently before reading the solutions.

**1. Prove zero derivative on an interval implies a constant function, and explain the disconnected-domain exception.**

Hint: Apply the mean value theorem between arbitrary inputs.

Answer: The conclusion holds on each interval component.

- Their output difference is a derivative times the input difference, hence zero.
- Two separated intervals can carry different constants while every derivative stays zero.

**2. For $f(0)=0$, $f(x)=x^2\sin(1/x)$ when $x\ne0$, prove differentiability at zero and discontinuity of its derivative there.**

Hint: Compare the difference quotient with the nonzero-point derivative.

Answer: Differentiability does not guarantee derivative continuity.

- $f(h)/h=h\sin(1/h)\to0$.
- Away from zero, the derivative $2x\sin(1/x)-\cos(1/x)$ keeps oscillating.

# Chapter 7 · Riemann integration

Bring upper and lower estimates to the same number.

Goals:
- Define integrals through upper and lower sums and test integrability
- Prove continuous and monotone functions integrable
- Apply the fundamental theorem under its hypotheses

## 7.1 Partitions, upper sums, and lower sums

*Bound the function throughout each subinterval, then add the bounding rectangle areas.*

### The idea

Bound the function throughout each subinterval, then add the bounding rectangle areas.

### Intuition

Upper and lower heights are true bounds on all values, not maxima and minima of sampled points.

### Another explanation

Use bounds on the entire subinterval. Finite sampling may miss arbitrarily narrow peaks.

### Quick check

What height belongs in an upper-sum rectangle?

A. The largest finite sample
B. The supremum on the whole subinterval
C. The midpoint value

Answer: B. Otherwise it may fail to bound all function values.

### Define partitions and oscillation

A partition is a finite strictly increasing endpoint list. Take the infimum and supremum on each closed subinterval. Boundedness ensures these are finite.

### Refinement tightens bounds

Splitting an interval cannot increase either subinterval's supremum, so the upper sum does not increase. Infima cannot decrease, so the lower sum does not decrease.

### Compare different partitions

Combine any two partitions into a common refinement. This shows every lower sum is at most every upper sum, allowing lower and upper integrals.

### Definition and conditions

Darboux sums use subinterval infima and suprema, which need not be attained.

$$
L(f,P)=\sum_i m_i\Delta x_i,\quad U(f,P)=\sum_i M_i\Delta x_i
$$

- The function is bounded on a fixed closed bounded interval.
- Every partition subinterval has positive length.

### Derivation

Each refined upper height is no greater than the original height.

$$
M_{\mathrm{left}},M_{\mathrm{right}}\le M
$$

Multiply by the respective widths and add.

$$
M_{\mathrm{left}}\Delta x_{\mathrm{left}}+M_{\mathrm{right}}\Delta x_{\mathrm{right}}\le M\Delta x
$$

Sum over all refined pieces.

$$
P\subseteq Q\implies L(f,P)\le L(f,Q)\le U(f,Q)\le U(f,P)
$$

### Interactive diagram

Refine the partition. How do exact upper and lower sums tighten?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-darboux-sums?view=visual

### Guided experiment

1. **Equal subintervals: 1** Set the subinterval count to $1$. Compare analytic upper and lower rectangles, including heights when a jump meets a partition endpoint.

Preset observation: Lower sum $0$; upper sum $1$; gap $1$; integral $0.3333333$.

2. **Equal subintervals: 20** Set the subinterval count to $20$. Compare analytic upper and lower rectangles, including heights when a jump meets a partition endpoint.

Preset observation: Lower sum $0.30875$; upper sum $0.35875$; gap $0.05$; integral $0.3333333$.

3. **Equal subintervals: 40** Set the subinterval count to $40$. Compare analytic upper and lower rectangles, including heights when a jump meets a partition endpoint.

Preset observation: Lower sum $0.3209375$; upper sum $0.3459375$; gap $0.025$; integral $0.3333333$.

### Worked examples

#### Example 1: A linear function

For $f(x)=x$ on zero to one split into two equal parts, find lower and upper sums.

- Each width is one half; lower heights are zero and one half, and upper heights one half and one.
- $L=1/4,U=3/4$.

**Answer: $1/4$ and $3/4$.**

#### Example 2: Dense oscillation

For the function one on rationals and zero on irrationals, what bounds hold on every positive-length subinterval?

- Both input types are dense.
- The supremum is one and infimum zero, independently of sampling density.

**Answer: Refinement cannot shrink the total gap.**

### Common mistakes

- **Many samples establish a rigorous upper bound** An arbitrarily narrow peak can still be missed.

- **Refinement decreases the lower sum** A smaller interval's infimum can only increase or stay unchanged.

### Exercises and solutions

**1. Can adding partition points increase the upper sum?**

Hint: Refined upper heights cannot be greater.

Answer: No.

- No.

**2. Must an infimum be an attained function value?**

Hint: An extremal bound need not be attained.

Answer: No.

- No.

**3. For constant two on zero to one, what are both sums for any partition?**

Hint: All heights are two and widths sum to one.

Answer: Two.

- Both sums equal two.

**4. For $f(x)=x^2$ on $[0,1]$ split into $n$ equal parts, find both sums and their gap.**

Hint: Squaring increases on this interval.

Answer: Subtract to get $U_n-L_n=1/n$. Both tend to $1/3$.

- Lower sum: $L_n=n^{-3}\sum_{i=0}^{n-1}i^2=(n-1)(2n-1)/(6n^2)$.
- Upper sum: $U_n=n^{-3}\sum_{i=1}^{n}i^2=(n+1)(2n+1)/(6n^2)$.
- Subtract to get $U_n-L_n=1/n$. Both tend to $1/3$.

Prerequisites: Upper bounds, suprema, and completeness.

## 7.2 The Darboux integrability criterion

*Integrability requires a partition with upper–lower gap below every prescribed positive error.*

### The idea

Integrability requires a partition with upper–lower gap below every prescribed positive error.

### Intuition

The uncertain area must be reducible arbitrarily, not merely look small in one display.

### Another explanation

A small gap once is insufficient. Give a construction making the uncertainty smaller than any prescribed positive error.

### Quick check

What is the integrability criterion's quantifier order?

A. One error for all partitions
B. For every error, some partition
C. For each partition, any target value

Answer: B. The partition may depend on the error.

### Define lower and upper integrals

The lower integral is the supremum of lower sums; the upper integral the infimum of upper sums. Equality defines Riemann integrability and their common value the integral.

### Prove the equivalent criterion

Small partition gaps bound the integral gap. Conversely, approximate the common integral separately by a lower and upper sum, then take a common refinement to obtain one small-gap partition.

### Prove nonintegrability

A fixed positive lower bound on every partition gap refutes the criterion. The densely oscillating zero–one function has gap one on the unit interval.

### Definition and conditions

This book uses the Darboux construction, equivalent to the Riemann definition.

$$
f\text{ integrable}\iff\forall\varepsilon>0\ \exists P:\ U(f,P)-L(f,P)<\varepsilon
$$

- The function is bounded on a fixed closed bounded interval.

### Derivation

A small partition gap controls the lower–upper integral gap.

$$
0\le\overline I-\underline I\le U(f,P)-L(f,P)
$$

If the integrals agree, find sums approaching both.

$$
U(f,P_1)<I+\varepsilon/2,\quad L(f,P_2)>I-\varepsilon/2
$$

A common refinement improves both bounds simultaneously.

$$
P=P_1\cup P_2\implies U(f,P)-L(f,P)<\varepsilon
$$

### Interactive diagram

Compare squaring, a step, and dense oscillation. Which gaps truly tend to zero?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-integrability?view=visual

### Guided experiment

1. **Equal subintervals: 1** Set the subinterval count to $1$. Compare both sums and their gap; switch examples to see whether refinement removes it.

Preset observation: Lower sum $0$; upper sum $1$; gap $1$; integral $0.3333333$.

2. **Equal subintervals: 20** Set the subinterval count to $20$. Compare both sums and their gap; switch examples to see whether refinement removes it.

Preset observation: Lower sum $0.30875$; upper sum $0.35875$; gap $0.05$; integral $0.3333333$.

3. **Equal subintervals: 40** Set the subinterval count to $40$. Compare both sums and their gap; switch examples to see whether refinement removes it.

Preset observation: Lower sum $0.3209375$; upper sum $0.3459375$; gap $0.025$; integral $0.3333333$.

### Worked examples

#### Example 1: The square-function gap

For squaring on zero to one with $n$ equal subintervals, what is the upper–lower gap?

- Each height difference is $(i/n)^2-((i-1)/n)^2$.
- Multiply by the common width and telescope; the total is the reciprocal count.

**Answer: $1/n$.**

#### Example 2: The Dirichlet counterexample

Is the rational-indicator function integrable on zero to one?

- Every partition gives upper sum one and lower sum zero.
- Its gap cannot be less than one half.

**Answer: Not Riemann integrable.**

### Common mistakes

- **One fine plot proves integrability** Construct a partition for every prescribed error.

- **Every discontinuous function is nonintegrable** Many discontinuous functions, including finite-jump examples, remain integrable.

### Exercises and solutions

**1. Must every partition have a small gap for integrability?**

Hint: The criterion requires a suitable partition to exist.

Answer: No.

- One partition for each prescribed error suffices.

**2. Does one gap of one tenth establish integrability?**

Hint: Every arbitrarily small error is required.

Answer: No.

- A fixed error is insufficient.

**3. What is the square-function gap with twenty equal subintervals?**

Hint: Use the reciprocal formula.

Answer: $0.05$.

- $1/20=0.05$.

**4. Prove the function one on rationals and zero on irrationals is not Riemann integrable on $[0,1]$.**

Hint: Every positive-length subinterval contains both types of numbers.

Answer: The gap stays one, never below error $1/2$, violating the Darboux criterion.

- Every partition subinterval therefore has supremum one and infimum zero.
- However fine the partition, its upper sum is one and lower sum zero.
- The gap stays one, never below error $1/2$, violating the Darboux criterion.

Prerequisites: Partitions, upper sums, and lower sums.

## 7.3 Integrability of continuous, monotone, and finite-jump functions

*Continuous and monotone functions on closed bounded intervals are integrable, for different reasons.*

### The idea

Continuous and monotone functions on closed bounded intervals are integrable, for different reasons.

### Intuition

Continuity gives uniformly small oscillation; monotonicity gives telescoping increments.

### Another explanation

Uniform small oscillations handle continuity; telescoping increments handle monotonicity. Continuity is sufficient, not necessary.

### Quick check

What drives the monotone integrability bound?

A. Telescoping endpoint differences
B. Existence of a derivative
C. Continuity everywhere

Answer: A. Jumps fit within the total-increment budget too.

### Continuous functions

Continuity on a closed interval gives boundedness by the extreme value theorem and uniformly small subinterval oscillations by uniform continuity. Fine mesh bounds the gap by small oscillation times total width.

### Monotone functions

Even with jumps, endpoint differences control each subinterval's oscillation. The total gap is at most maximum mesh width times the full function increment.

### Finitely many exceptional points

Cover finitely many discontinuities by intervals of arbitrarily small total length, controlling their contribution by the global magnitude bound. Use uniform continuity on the remaining closed pieces. Changing finitely many values therefore leaves the integral unchanged.

### Definition and conditions

Continuous and monotone functions on closed bounded intervals are Riemann integrable.

$$
U(f,P)-L(f,P)\le\|P\|\,[f(b)-f(a)]\quad\text{if }f\text{ is nondecreasing}
$$

- A monotone function defined on the closed interval is bounded.
- The finite-exception result still requires global boundedness.

### Derivation

For a nondecreasing function, subinterval oscillation equals its endpoint difference.

$$
M_i-m_i=f(x_i)-f(x_{i-1})
$$

Every width is at most the mesh size.

$$
\sum_i(M_i-m_i)\Delta x_i\le\|P\|\sum_i[f(x_i)-f(x_{i-1})]
$$

Endpoint differences telescope; vanishing mesh makes the gap vanish.

$$
U-L\le\|P\|[f(b)-f(a)]\to0
$$

### Interactive diagram

Compare a continuous curve and a single jump. Why can refinement shrink uncertain area in both?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-integrable-classes?view=visual

### Guided experiment

1. **Equal subintervals: 1** Set the count to $1$. Switch among continuous, jump, and dense zero–one examples and compare whether their gaps vanish.

Preset observation: Lower sum $0$; upper sum $1$; gap $1$; integral $0.5$.

2. **Equal subintervals: 20** Set the count to $20$. Switch among continuous, jump, and dense zero–one examples and compare whether their gaps vanish.

Preset observation: Lower sum $0.5$; upper sum $0.55$; gap $0.05$; integral $0.5$.

3. **Equal subintervals: 40** Set the count to $40$. Switch among continuous, jump, and dense zero–one examples and compare whether their gaps vanish.

Preset observation: Lower sum $0.5$; upper sum $0.525$; gap $0.025$; integral $0.5$.

### Worked examples

#### Example 1: A single jump

On zero to one, output zero below one half and one otherwise. Is the function integrable?

- It is bounded and nondecreasing.
- Only intervals meeting the jump contribute uncertain area, and their widths can be arbitrarily small.

**Answer: Integrable, with integral one half.**

#### Example 2: Change one point

If squaring is changed to one hundred at one point, does its integral change?

- The function stays bounded, with one added exceptional point.
- Enclose that point in an arbitrarily short interval.

**Answer: No change.**

### Common mistakes

- **Integrable means continuous** Continuity is only sufficient.

- **Finitely many exceptional points may be ignored without boundedness** Unbounded peaks defeat finite-height control.

### Exercises and solutions

**1. Must a monotone function be continuous to be integrable?**

Hint: The monotone proof does not use continuity.

Answer: No.

- No.

**2. Can this result apply to an unbounded function with finitely many discontinuities?**

Hint: Global boundedness is a hypothesis.

Answer: No.

- It cannot be omitted.

**3. For the identity on zero to one with mesh at most one hundredth, what is the largest guaranteed gap?**

Hint: The total increment is one.

Answer: $0.01$.

- $0.01\cdot1=0.01$.

**4. Use uniform continuity to prove continuous functions on closed intervals are integrable.**

Hint: Uniformly bound each oscillation and multiply by the total width.

Answer: Hence $U-L\le(b-a)\varepsilon/[2(b-a)]=\varepsilon/2<\varepsilon$. A degenerate interval has integral zero directly.

- Let $a<b$. The continuous function is bounded and uniformly continuous on $[a,b]$. Given $\varepsilon>0$, choose $\delta>0$ so inputs less than $\delta$ apart have output difference less than $\varepsilon/[2(b-a)]$.
- Take a partition of mesh below $\delta$. Every subinterval oscillation is at most that error bound.
- Hence $U-L\le(b-a)\varepsilon/[2(b-a)]=\varepsilon/2<\varepsilon$. A degenerate interval has integral zero directly.

Prerequisites: The Darboux integrability criterion, Uniform continuity and Heine–Cantor.

## 7.4 The derivative of an accumulation integral

*At a continuity point of the integrand, local averages approach its value, giving the accumulation function that derivative.*

### The idea

At a continuity point of the integrand, local averages approach its value, giving the accumulation function that derivative.

### Intuition

A short integral divided by its length is a local average. Continuity makes every value in that short segment close to the center value.

### Another explanation

A local integral divided by length is an average. Continuity controls all nearby values; at jumps the derivative conclusion may fail.

### Quick check

Why does the accumulation quotient approach the center value?

A. Continuity uniformly shrinks the local average error
B. There are many sample points
C. Integrals are always positive

Answer: A. Every value in the short segment must be near the center value.

### Define accumulation first

A bounded integrable function is integrable on each subinterval, defining its integral from a fixed endpoint to a variable one. The appendix proves additivity and the absolute integral bound.

### Control the difference quotient

Subtract the center integrand value from the accumulation quotient. Its magnitude is at most the largest deviation over the small segment. Continuity at the center makes this vanish.

### Continuity is a local hypothesis

An integrand need not be continuous everywhere to define accumulation. The derivative conclusion is guaranteed at continuous interior points; a jump can create a corner in accumulation.

### Definition and conditions

If an integrable function is continuous at an interior point, its accumulation integral is differentiable there.

$$
F(x)=\int_a^x f(t)\,dt,\quad f\text{ continuous at }c\text{}\implies F'(c)=f(c)
$$

- The integrand is bounded and Riemann integrable on the whole closed interval.
- The point is interior; endpoints admit one-sided versions.

### Derivation

Use integral additivity to express the quotient.

$$
\frac{F(c+h)-F(c)}h=\frac1h\int_c^{c+h}f(t)\,dt
$$

Subtract the average of the center value.

$$
\frac{F(c+h)-F(c)}h-f(c)=\frac1h\int_c^{c+h}[f(t)-f(c)]\,dt
$$

Continuity makes every error over the short segment small.

$$
\left|\frac1h\int_c^{c+h}[f(t)-f(c)]\,dt\right|\le\sup_{t\text{ in the segment}}|f(t)-f(c)|\to0
$$

### Interactive diagram

Shrink the segment. How does the average approach the center value, and why do jumps differ?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-ftc-derivative?view=visual

### Guided experiment

1. **Increment magnitude: 0.4** Set the increment magnitude to $0.4$. Compare local average and center value; switch approach directions at a jump.

Preset observation: Quotient / local average $0.8$; center integrand value $0.6$; derivative guaranteed at center: yes.

2. **Increment magnitude: 0.2001** Set the increment magnitude to $0.2001$. Compare local average and center value; switch approach directions at a jump.

Preset observation: Quotient / local average $0.70005$; center integrand value $0.6$; derivative guaranteed at center: yes.

3. **Increment magnitude: 0.0001** Set the increment magnitude to $0.0001$. Compare local average and center value; switch approach directions at a jump.

Preset observation: Quotient / local average $0.60005$; center integrand value $0.6$; derivative guaranteed at center: yes.

### Worked examples

#### Example 1: Linear accumulation

For $f(t)=t$ accumulated from zero, what is the derivative?

- $F(x)=x^2/2$.
- The derivative is $x$, the integrand value.

**Answer: $F'(x)=x$.**

#### Example 2: Accumulating a step

If the integrand jumps from zero to one at one half, is accumulation differentiable there?

- On the left, accumulation is constant zero, with slope zero.
- On the right it grows linearly, with slope one.

**Answer: Not at that point.**

### Common mistakes

- **Integrability guarantees the derivative identity everywhere** It may fail at jumps.

- **Continuous accumulation requires a continuous integrand everywhere** Bounded integrability already gives a Lipschitz bound.

### Exercises and solutions

**1. Does continuity only at the point suffice for this local conclusion?**

Hint: Global integrability is still needed.

Answer: Yes.

- Integrability plus continuity at that point suffices.

**2. Is the accumulation of a bounded integrable function always continuous?**

Hint: Use the absolute integral bound.

Answer: Yes; it is even Lipschitz.

- $|F(y)-F(x)|\le M|y-x|$.

**3. Does differentiable accumulation imply the integrand is continuous everywhere?**

Hint: This theorem makes no such converse claim.

Answer: It does not follow.

- Changing one value preserves the integral but may destroy continuity.

**4. Suppose $|f|\le M$ and $f$ is integrable on $[a,b]$. Prove $F(x)=\int_a^x f$ is Lipschitz continuous.**

Hint: Use additivity and the absolute bound, without pointwise continuity everywhere.

Answer: Interchanging the inputs gives $|F(y)-F(x)|\le M|y-x|$, so $F$ is uniformly continuous.

- For $x<y$, additivity gives $F(y)-F(x)=\int_x^y f(t)\,dt$.
- Since $-M\le f\le M$, $|F(y)-F(x)|\le M(y-x)$.
- Interchanging the inputs gives $|F(y)-F(x)|\le M|y-x|$, so $F$ is uniformly continuous.

Prerequisites: Integrability of continuous, monotone, and finite-jump functions, Function limits and continuity.

## 7.5 Integral evaluation, substitution, and integration by parts

*An antiderivative's endpoint difference computes an integral only when the antiderivative and integrability hypotheses hold.*

### The idea

An antiderivative's endpoint difference computes an integral only when the antiderivative and integrability hypotheses hold.

### Intuition

The mean value theorem turns each endpoint increment into a tagged Riemann-sum contribution.

### Another explanation

The mean value theorem turns endpoint increments into tagged sums. This Riemann argument still needs derivative integrability.

### Quick check

What is still needed after applying the mean value theorem in the endpoint proof?

A. Integrability of the derivative to make tagged sums converge
B. Identical tags in every interval
C. A monotone function

Answer: A. Otherwise the finite-sum limit cannot be identified with the integral.

### Prove the endpoint formula

If an antiderivative is continuous, differentiable inside, and has integrable derivative, apply the mean value theorem on each piece. Increments telescope; the tagged derivative sums converge to the integral as mesh vanishes.

### State substitution conditions

Assume a continuously differentiable inner function and an outer integrand continuous on an interval containing its image. Take an integral antiderivative, then apply the chain rule and endpoint formula. The inner function need not be monotone.

### Integration by parts

Integrate the product rule for two continuously differentiable functions and rearrange. The hypotheses make all terms integrable.

### Definition and conditions

This Riemann version gives sufficient conditions for the Newton–Leibniz formula.

$$
F\in C([a,b]),\ F'=f\text{ on }(a,b),\ f\text{ Riemann integrable}\implies\int_a^bf=F(b)-F(a)
$$

- Assigning arbitrary finite endpoint values to the derivative does not change its integral.
- Derivative existence alone does not guarantee Riemann integrability.

### Derivation

Apply the mean value theorem on each subinterval.

$$
F(x_i)-F(x_{i-1})=f(\xi_i)\Delta x_i
$$

Endpoint increments telescope.

$$
F(b)-F(a)=\sum_i f(\xi_i)\Delta x_i
$$

Integrability ensures fine tagged sums approach the integral.

$$
\|P\|\to0\implies\sum_i f(\xi_i)\Delta x_i\to\int_a^bf
$$

### Interactive diagram

Compare antiderivative endpoint increments with the derivative's Riemann sums. How do they correspond?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-ftc-evaluation?view=visual

### Guided experiment

1. **Partition intervals: 1** Set the partition count to $1$. Compare increments and areas row by row, then verify the endpoint difference.

Preset observation: Antiderivative endpoint difference $0.3333333$; mean-value tagged sum (identity) $0.3333333$; midpoint sum (approximation) $0.25$.

2. **Partition intervals: 20** Set the partition count to $20$. Compare increments and areas row by row, then verify the endpoint difference.

Preset observation: Antiderivative endpoint difference $0.3333333$; mean-value tagged sum (identity) $0.3333333$; midpoint sum (approximation) $0.333125$.

3. **Partition intervals: 40** Set the partition count to $40$. Compare increments and areas row by row, then verify the endpoint difference.

Preset observation: Antiderivative endpoint difference $0.3333333$; mean-value tagged sum (identity) $0.3333333$; midpoint sum (approximation) $0.3332813$.

### Worked examples

#### Example 1: Substitution

Integrate $2x e^{x^2}$ from zero to one.

- Take $u=x^2$, which is continuously differentiable.
- An antiderivative is $e^{x^2}$, whose endpoint difference is $e-1$.

**Answer: $e-1$.**

#### Example 2: Integration by parts

Integrate $xe^x$ from zero to one.

- The product $xe^x$ has derivative $e^x+xe^x$.
- $\int_0^1xe^x dx=[xe^x]_0^1-\int_0^1e^x dx=e-(e-1)$.

**Answer: One.**

### Common mistakes

- **An antiderivative makes derivative-integrability checks unnecessary** This Riemann version still requires its hypotheses.

- **A substitution that reverses direction is invalid** With sufficient smoothness, oriented integrals cancel automatically.

### Exercises and solutions

**1. Must a continuously differentiable substitution be monotone?**

Hint: The antiderivative chain rule handles reversals directly.

Answer: Not necessarily.

- No; oriented endpoint differences account for them.

**2. Is every derivative Riemann integrable?**

Hint: A derivative may be unbounded or fail integrability conditions.

Answer: Not necessarily.

- Existence alone is insufficient.

**3. Find $\int_0^2 2x\,dx$.**

Hint: Use the square antiderivative.

Answer: Four.

- $2^2-0^2=4$.

**4. For $u,v\in C^1([a,b])$, prove integration by parts.**

Hint: Integrate the product rule and justify integrability.

Answer: Rearrange to $\int_a^b uv'=[uv]_a^b-\int_a^b u'v$.

- The product is continuously differentiable, with $(uv)'=u'v+uv'$. Each term is continuous, hence Riemann integrable.
- The fundamental theorem gives $u(b)v(b)-u(a)v(a)=\int_a^b u'v+\int_a^b uv'$.
- Rearrange to $\int_a^b uv'=[uv]_a^b-\int_a^b u'v$.

Prerequisites: Rolle's theorem and the mean value theorem, The Darboux integrability criterion, The derivative of an accumulation integral.

## Chapter review

Try independently before reading the solutions.

**1. Prove that changing finitely many values of a Riemann-integrable function to finite values preserves integrability and the integral.**

Hint: Enclose exceptional points in intervals of arbitrarily small total width.

Answer: The new function is integrable with the same integral.

- Outside those intervals, sums agree or are controlled by the original integrability.
- Extra uncertainty is at most a uniform height bound times their total length, hence can be arbitrarily small.

**2. Why is derivative existence everywhere insufficient for this book's endpoint integral formula?**

Hint: Check the function being integrated.

Answer: The required integrability must also hold.

- A derivative need not be bounded or Riemann integrable.
- The formula's derivative-integrability hypothesis cannot be omitted.

# Chapter 8 · Function sequences and limit interchange

Check whether one error bound controls the whole domain.

Goals:
- Distinguish pointwise and uniform convergence
- Control tails with uniform Cauchy estimates and the M-test
- Check conditions for passing limits through continuity, integration, and differentiation

## 8.1 Pointwise and uniform convergence

*Pointwise convergence allows different waiting times for each input; uniform convergence uses one cutoff for the whole domain.*

### The idea

Pointwise convergence allows different waiting times for each input; uniform convergence uses one cutoff for the whole domain.

### Intuition

Measure error over the entire domain to detect bad points moving toward an endpoint.

### Another explanation

Domain-wide supremum error detects points hiding near endpoints, even if one endpoint is removed.

### Quick check

May a uniform-convergence cutoff vary with the input?

A. Yes
B. No
C. Only at endpoints

Answer: B. It must control the entire domain at once.

### Compare quantifiers

Pointwise convergence fixes the input before choosing a cutoff. Uniform convergence chooses the cutoff from the error before allowing any input. Their permitted dependencies differ.

### Use the supremum error

When the absolute error has finite supremum, uniform convergence is equivalent to that domain-wide error tending to zero. The supremum need not be attained.

### Check boundary layers

Powers on the closed unit interval tend to zero except at the right endpoint, where they stay one. Bad inputs can move toward that endpoint, giving pointwise but not uniform convergence.

### Definition and conditions

Uniform convergence compares functions on the same domain to a real-valued target function.

$$
\forall\varepsilon>0\ \exists N\ \forall n\ge N\ \forall x\in D:\ |f_n(x)-f(x)|<\varepsilon
$$

- Pointwise cutoffs may depend on the input; uniform cutoffs may not.

### Derivation

Uniform control immediately controls each fixed input.

$$
\text{uniform}\implies\text{pointwise}
$$

For powers, choose an input moving with the index.

$$
x_n=2^{-1/n}\in[0,1),\quad x_n^n=1/2
$$

The limit function there is zero, while the error stays at least one half.

$$
|f_n(x_n)-f(x_n)|=1/2
$$

### Interactive diagram

Follow a moving bad point. Does error remain that fixed-input inspection misses?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-pointwise-uniform?view=visual

### Guided experiment

1. **Function index: 2** Set the index to $2$. Follow the moving point and compare its error with the supremum error.

Preset observation: Analytic supremum error $1$; error at the selected point $0.5$; uniform convergence: no.

2. **Function index: 41** Set the index to $41$. Follow the moving point and compare its error with the supremum error.

Preset observation: Analytic supremum error $1$; error at the selected point $0.5$; uniform convergence: no.

3. **Function index: 80** Set the index to $80$. Follow the moving point and compare its error with the supremum error.

Preset observation: Analytic supremum error $1$; error at the selected point $0.5$; uniform convergence: no.

### Worked examples

#### Example 1: Genuinely uniform

How does $f_n(x)=x/n$ converge on $[0,1]$?

- It tends pointwise to zero.
- $\sup_{[0,1]}|x/n|=1/n\to0$.

**Answer: Uniformly to zero.**

#### Example 2: Removing the endpoint is insufficient

Does $x^n$ tend uniformly to zero on $[0,1)$?

- Every fixed input tends to zero.
- Each domain-wide supremum remains one, though unattained.

**Answer: Not uniformly; deleting one endpoint leaves the boundary layer.**

### Common mistakes

- **Removing a bad endpoint always gives uniform convergence** Bad inputs may persist near the endpoint.

- **An unattained maximum error means zero error** Use the supremum, not just an attained maximum.

### Exercises and solutions

**1. Does uniform convergence imply pointwise convergence?**

Hint: Fix any input.

Answer: Yes.

- Yes.

**2. May pointwise convergence use an input-dependent cutoff?**

Hint: The input is fixed before the cutoff.

Answer: Yes.

- Yes.

**3. What happens to $x^n$ on $[0,r]$ for fixed $0<r<1$?**

Hint: The right endpoint is the worst input.

Answer: Uniform convergence to zero.

- The supremum error is $r^n\to0$.

**4. Prove $f_n(x)=x^n$ tends uniformly to zero on $[0,r]$ for fixed $0<r<1$.**

Hint: Bound the error on the entire domain.

Answer: Given an error, one $N$ with $r^N<\varepsilon$ controls every input simultaneously.

- For all $x\in[0,r]$, $0\le x^n\le r^n$, with equality at $x=r$.
- Thus $\sup_{[0,r]}|f_n|=r^n\to0$.
- Given an error, one $N$ with $r^N<\varepsilon$ controls every input simultaneously.

Prerequisites: Quantifiers in sequence limits, Function limits and continuity.

## 8.2 Uniform Cauchy convergence and the Weierstrass test

*Control function differences by one uniform tail budget to prove uniform convergence of a sequence or function series.*

### The idea

Control function differences by one uniform tail budget to prove uniform convergence of a sequence or function series.

### Intuition

One budget for every input prevents the limit from becoming uncontrolled elsewhere.

### Another explanation

A shared budget controls every input, but the majorants must have a convergent series, not merely vanish.

### Quick check

What numerical condition does the M-test require?

A. The sum of majorants converges
B. Majorants merely tend to zero
C. Any bounded sequence

Answer: A. Small individual terms do not control cumulative tails.

### Uniform Cauchy sequences

Every sufficiently late function pair must differ little at all inputs simultaneously. Real completeness first gives a limit at each fixed input; then pass the uniform estimate to that limit.

### Prove the M-test

Bound each absolute function term by a nonnegative numerical term whose series converges. Every finite function tail sum is bounded by the same numerical tail.

### Sufficient, not necessary

The M-test is convenient but not necessary. A uniformly convergent series need not have summable termwise uniform bounds; alternating constant functions can converge uniformly without absolute convergence.

### Definition and conditions

For real-valued function sequences, uniform Cauchy convergence is equivalent to uniform convergence.

$$
|g_n(x)|\le M_n,\ \sum M_n<\infty\implies\sum g_n\text{ converges uniformly and pointwise absolutely}
$$

- The same bounding term works throughout the domain.
- The nonnegative bounding series converges.

### Derivation

Use the triangle inequality on tail sums.

$$
\left|\sum_{k=p}^qg_k(x)\right|\le\sum_{k=p}^qM_k
$$

Numerical Cauchy convergence gives an input-independent cutoff.

$$
p,q\ge N\implies\sum_{k=p}^qM_k<\varepsilon/2
$$

Take pointwise limits while retaining a uniform bound to obtain uniform convergence.

$$
\sup_x|S_q(x)-S(x)|\le\varepsilon/2<\varepsilon
$$

### Interactive diagram

Use geometric tails to control every input. How does the budget fall as more terms are retained?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-uniform-cauchy?view=visual

### Guided experiment

1. **Retained terms: 1** Set the retained term count to $1$. Compare finite and limiting sums and check that the tail bound covers all inputs.

Preset observation: Uniform tail bound $0.5$; actual error at one input $0.5$.

2. **Retained terms: 20** Set the retained term count to $20$. Compare finite and limiting sums and check that the tail bound covers all inputs.

Preset observation: Uniform tail bound $9.536743\times10^{-7}$; actual error at one input $9.536743\times10^{-7}$.

3. **Retained terms: 40** Set the retained term count to $40$. Compare finite and limiting sums and check that the tail bound covers all inputs.

Preset observation: Uniform tail bound $9.094947\times10^{-13}$; actual error at one input $9.094947\times10^{-13}$.

### Worked examples

#### Example 1: A uniform geometric budget

How does $\sum_{n=1}^{\infty}x^n/2^n$ converge on $[0,1]$?

- Each absolute term is at most $2^{-n}$.
- The bounding geometric series converges.

**Answer: Uniformly and absolutely, with a geometric tail bound.**

#### Example 2: The test is not necessary

Treat alternating harmonic terms as constant functions. Does the function series converge uniformly?

- Error is independent of input, equal to the numerical partial-sum error.
- The alternating harmonic series converges, but every absolute termwise majorant has divergent sum.

**Answer: Uniform convergence holds, although no summable termwise majorant makes the M-test applicable.**

### Common mistakes

- **Vanishing majorants suffice** Their series must also converge.

- **Failure of a sufficient test means the conclusion fails** Uniform Cauchy estimates or cancellation may establish it instead.

### Exercises and solutions

**1. May the M-test's bound vary with the input?**

Hint: It must cover the entire domain uniformly.

Answer: No.

- No.

**2. Where does real completeness enter the uniform Cauchy proof?**

Hint: Fix each input first.

Answer: It establishes the pointwise limit.

- Every real Cauchy value sequence then has a limit.

**3. For $\sum x^n/3^n$ on $[0,1]$, what bounds the tail after two terms?**

Hint: Sum the majorant starting at index three.

Answer: $1/18$.

- $\sum_{n=3}^{\infty}3^{-n}=1/18$.

**4. Prove $\sum_{k=1}^{\infty}x^k/3^k$ converges uniformly on $[0,1]$ and bound its tail after two terms.**

Hint: Use input-independent geometric bounds.

Answer: The remaining tail is at most $\sum_{k=3}^{\infty}3^{-k}=(1/27)/(1-1/3)=1/18$, attained at $x=1$.

- For all inputs, $|x^k/3^k|\le3^{-k}$; the numerical geometric series converges.
- The M-test gives uniform convergence.
- The remaining tail is at most $\sum_{k=3}^{\infty}3^{-k}=(1/27)/(1-1/3)=1/18$, attained at $x=1$.

Prerequisites: The Cauchy condition and completeness, Nonnegative series, comparison, and grouping, Pointwise and uniform convergence.

## 8.3 A uniform limit of continuous functions is continuous

*Split the error into three parts, transferring change in the limit to one continuous approximating function.*

### The idea

Split the error into three parts, transferring change in the limit to one continuous approximating function.

### Intuition

Choose a sufficiently good approximation first, then its local radius. The order matters.

### Another explanation

Choose the approximation before its local radius. Moving spikes show why continuity of the limit alone cannot establish uniform convergence.

### Quick check

What is the correct proof order?

A. Choose one uniform approximation, then a local radius
B. Choose an input first and freely switch approximations
C. A matching plot suffices

Answer: A. Use the same approximation at both ends.

### Allocate three error budgets

Compare both limit-function values to the same approximation. Its continuity controls the middle difference.

### Explain uniformity's role

The same approximation index must control errors at both ends for every nearby input. Uniform convergence provides this; pointwise convergence generally does not.

### Use the contrapositive

If continuous functions have a discontinuous pointwise limit, convergence cannot be uniform there. A continuous limit alone, however, does not establish uniform convergence.

### Definition and conditions

A uniformly convergent sequence of continuous functions on the same real domain has a continuous limit.

$$
|f(x)-f(a)|\le|f(x)-f_N(x)|+|f_N(x)-f_N(a)|+|f_N(a)-f(a)|
$$

- Each function is continuous on that domain.
- Convergence is uniform on the whole domain being considered.

### Derivation

Choose one uniform approximation index from the error.

$$
\sup_x|f(x)-f_N(x)|<\varepsilon/3
$$

Then choose a radius at the center for that continuous approximation.

$$
|x-a|<\delta\implies|f_N(x)-f_N(a)|<\varepsilon/3
$$

Combine three errors using the triangle inequality.

$$
|f(x)-f(a)|<\varepsilon
$$

### Interactive diagram

Compare endpoint jumps and moving spikes. What can continuity of the limit actually rule out?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-uniform-continuous-limit?view=visual

### Guided experiment

1. **Function index: 2** Set the index to $2$. Check each function's continuity, the pointwise limit's continuity, and uniform convergence separately.

Preset observation: Analytic supremum error $1$; selected-point error $0.5$; uniform convergence: no; pointwise limit continuous: no.

2. **Function index: 41** Set the index to $41$. Check each function's continuity, the pointwise limit's continuity, and uniform convergence separately.

Preset observation: Analytic supremum error $1$; selected-point error $0.5$; uniform convergence: no; pointwise limit continuous: no.

3. **Function index: 80** Set the index to $80$. Check each function's continuity, the pointwise limit's continuity, and uniform convergence separately.

Preset observation: Analytic supremum error $1$; selected-point error $0.5$; uniform convergence: no; pointwise limit continuous: no.

### Worked examples

#### Example 1: A continuous uniform limit

Is the limit of $f_n(x)=x/n$ on the closed unit interval continuous?

- Its supremum error is a vanishing reciprocal, so convergence is uniform.
- The limit is the continuous zero function.

**Answer: Yes.**

#### Example 2: A continuous limit without uniform convergence

Continuous triangular spikes have center at the reciprocal index, support from zero to twice that reciprocal, and height one. How do they converge on zero to one?

- For each fixed positive input the spike eventually moves away; the value at zero is always zero.
- The pointwise limit is continuously zero, but every supremum error is one.

**Answer: Not uniformly; continuity of the limit is insufficient.**

### Common mistakes

- **A continuous limit proves uniform convergence** Moving spikes give a counterexample.

- **Separate approximations for the two inputs suffice for continuity** The middle comparison needs one and the same function.

### Exercises and solutions

**1. Must a pointwise limit of continuous functions be continuous?**

Hint: Use powers on an interval including its right endpoint.

Answer: No.

- The limit jumps at the endpoint.

**2. Must each of the three error budgets be exactly one third?**

Hint: Only their total must be below the target.

Answer: No.

- Other positive allocations work.

**3. After fixing an approximation index, may its local radius depend on that index?**

Hint: That index is already fixed.

Answer: Yes.

- Yes.

**4. Does pointwise convergence of continuous functions to a continuous function imply uniform convergence? Give a counterexample on $[0,1]$.**

Hint: Use height-one triangular spikes moving toward zero.

Answer: But $f_n(1/n)=1$, so the supremum error remains one and convergence is not uniform.

- Let $f_n(x)=\max(0,1-|nx-1|)$ for $n\ge2$. Each function is continuous and zero at zero.
- For fixed $x>0$, once $n>2/x$, $nx>2$ and all later values are zero. The pointwise limit is the continuous zero function.
- But $f_n(1/n)=1$, so the supremum error remains one and convergence is not uniform.

Prerequisites: Pointwise and uniform convergence, Function limits and continuity.

## 8.4 Conditions for interchanging integrals and derivatives

*Uniform convergence passes integrals on finite intervals, but alone does not pass derivatives.*

### The idea

Uniform convergence passes integrals on finite intervals, but alone does not pass derivatives.

### Intuition

Area error is bounded by total width times uniform height error. Slopes can stay large despite small oscillation amplitudes.

### Another explanation

Uniform height error controls finite-interval area, while slopes can remain large. Differentiation requires stronger information.

### Quick check

What does uniform function convergence directly preserve under the stated hypotheses?

A. Integrals of integrable functions on finite intervals
B. Derivatives of arbitrary functions
C. Integrals on arbitrary infinite intervals

Answer: A. Interval length and integrability enter the error estimate.

### Interchange integration and limits

If integrable approximations converge uniformly, first use small-gap partitions to prove the limit integrable. Then bound integral error by interval width times uniform function error.

### Sufficient conditions for derivative interchange

If each function is continuously differentiable, derivatives converge uniformly to a continuous limit, and function values converge at one input, integral accumulation proves uniform convergence of the functions and differentiability of the limit.

### Identify insufficient conditions

High-frequency sine divided by frequency tends uniformly to zero, but derivatives are high-frequency cosines. At zero, each derivative is one while the limiting function's derivative is zero.

### Definition and conditions

Integration and differentiation need different sufficient hypotheses.

$$
\left|\int_a^b(f_n-f)\right|\le(b-a)\|f_n-f\|_\infty
$$

- Integration: a finite closed interval, each function Riemann integrable, and uniform convergence.
- Differentiation: each function continuously differentiable, derivatives uniformly convergent, and function values convergent at one point.

### Derivation

Uniform error first establishes integrability of the limit, then controls integral differences.

$$
U(f,P)-L(f,P)\le U(f_n,P)-L(f_n,P)+2(b-a)\|f_n-f\|_\infty
$$

For derivatives, write every function using its integral representation.

$$
f_n(x)=f_n(x_0)+\int_{x_0}^x f_n'(t)\,dt
$$

Uniform derivative error and the anchored value error together control the functions.

$$
\|f_n-f\|_\infty\le|f_n(x_0)-\ell|+(b-a)\|f_n'-g\|_\infty
$$

A continuous limit and the fundamental theorem identify the derivative.

$$
f(x)=\ell+\int_{x_0}^xg(t)\,dt\implies f'=g
$$

### Interactive diagram

Compare high-frequency oscillations and moving spikes. Why do amplitude, slope, and area behave differently?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-interchange?view=visual

### Guided experiment

1. **Function index: 2** Set the index to $2$. Compare amplitude, derivative, and integral separately rather than assuming all vanish together.

Preset observation: Uniform function-error bound $0.5$; approximation derivative at zero $1$; limit derivative $0$; current integral $0.3540367$.

2. **Function index: 31** Set the index to $31$. Compare amplitude, derivative, and integral separately rather than assuming all vanish together.

Preset observation: Uniform function-error bound $0.03225806$; approximation derivative at zero $1$; limit derivative $0$; current integral $0.00008871763$.

3. **Function index: 60** Set the index to $60$. Compare amplitude, derivative, and integral separately rather than assuming all vanish together.

Preset observation: Uniform function-error bound $0.01666667$; approximation derivative at zero $1$; limit derivative $0$; current integral $0.0005423369$.

### Worked examples

#### Example 1: Pointwise convergence is insufficient for integrals

Triangular spikes have support zero to twice the reciprocal index, height equal to the index, and index at least two. What are their integrals?

- Every fixed input eventually lies outside the support, so values tend pointwise to zero.
- Half the base times the height gives integral one for every spike.

**Answer: Integral limits are one, unlike the zero function's integral.**

#### Example 2: Uniform function convergence is insufficient for derivatives

Let $f_n(x)=\sin(nx)/n$ converge uniformly on $[0,1]$. Each function is differentiable on the real line. Can derivatives at zero pass to the limit?

- Function magnitude is at most $1/n$, so convergence to zero is uniform.
- $f_n'(0)=1$, but the zero function's derivative is zero.

**Answer: Differentiation cannot be interchanged here.**

### Common mistakes

- **Every limit operation shares one condition** Differentiation needs stronger control than integration.

- **Derivative control needs no anchored value** Constant offsets may drift indefinitely.

### Exercises and solutions

**1. What controls integral error on the unit interval?**

Hint: The total width is one.

Answer: The uniform error.

- It is at most the uniform function error.

**2. Does uniform function convergence automatically give derivative convergence?**

Hint: Use high-frequency sine.

Answer: Not automatically.

- No.

**3. Can uniformly convergent derivatives coexist with divergent functions if no value is anchored?**

Hint: Take growing constant functions.

Answer: Yes.

- All derivatives are zero, while each function may equal its index.

**4. Construct continuous functions on $[0,1]$ tending pointwise to zero with every integral equal to one, and prove both facts.**

Hint: Raise the moving triangular spike's height to its index.

Answer: The triangle has base $2/n$ and height $n$, hence integral one. The zero limit has integral zero, so limit and integration cannot be exchanged here.

- Let $f_n(x)=n\max(0,1-|nx-1|)$ for $n\ge2$. Its support is $[0,2/n]$ and peak at $1/n$.
- At zero it vanishes; every fixed positive input is eventually outside the support, giving pointwise convergence to zero.
- The triangle has base $2/n$ and height $n$, hence integral one. The zero limit has integral zero, so limit and integration cannot be exchanged here.

Prerequisites: A uniform limit of continuous functions is continuous, Integral evaluation, substitution, and integration by parts, The derivative of an accumulation integral.

## 8.5 Power series, convergence radii, and termwise operations

*On smaller closed intervals inside the convergence radius, both the power series and its derivative series have uniform bounds.*

### The idea

On smaller closed intervals inside the convergence radius, both the power series and its derivative series have uniform bounds.

### Intuition

Interior intervals leave a safe margin. Check boundary points separately; the radius alone does not decide them.

### Another explanation

Interior intervals leave a geometric margin. Boundary points can lose it and require separate convergence tests.

### Quick check

Does the radius determine endpoint convergence?

A. Yes
B. No; check each endpoint
C. Only the left endpoint

Answer: B. Equal radii can have different boundary behavior.

### Define the radius

Take the limsup of index-th roots of coefficient magnitudes; its reciprocal is the radius, with extended zero and infinity conventions. Inside, convergence is absolute; outside, terms fail to tend to zero.

### Restrict to an interior closed interval

Choose a slightly larger radius still inside convergence. Root or comparison estimates give geometric bounds. Extra index factors in derivative coefficients do not change exponential growth, so derivative series also have uniform control.

### Differentiate and integrate termwise

Both function and derivative series converge uniformly on that closed interval, allowing the previous interchange theorems. Power-series coefficients are center derivatives divided by factorials. Conversely, an arbitrary smooth function still needs vanishing Taylor remainders to equal its series.

### Definition and conditions

Power series converge locally uniformly inside their radius and may be differentiated and integrated termwise there.

$$
R=\frac1{\limsup_{n\to\infty}|a_n|^{1/n}},\quad\sum_{n=0}^{\infty}a_n(x-c)^n
$$

- Use reciprocal zero equals infinity and reciprocal infinity equals zero.
- Check convergence at boundary points separately.

### Derivation

Fix a closed-subinterval radius smaller than the convergence radius.

$$
0<r<\rho<R
$$

Control coefficients at a larger radius; the smaller radius absorbs derivative index factors.

$$
n(r/\rho)^{n-1}\quad\text{has a summable majorant}
$$

Apply the M-test and limit-interchange theorem.

$$
\left(\sum a_n(x-c)^n\right)'=\sum_{n\ge1}na_n(x-c)^{n-1}\quad(|x-c|<R)
$$

### Interactive diagram

Push the closed-interval radius toward the boundary. Why does the uniform tail budget grow so quickly?

Finite examples illustrate and check particular cases. General results depend on the proofs and hypotheses in the text.

Online diagram: #/lesson/ra-power-series?view=visual

### Guided experiment

1. **Closed-interval radius: 0.1** Set the interval radius to $0.1$. Compare supremum tail bounds, especially as the radius approaches one.

Preset observation: Closed-interval radius $0.1$; retained through index $8$; exact uniform tail bound $1.111111\times10^{-9}$.

2. **Closed-interval radius: 0.545** Set the interval radius to $0.545$. Compare supremum tail bounds, especially as the radius approaches one.

Preset observation: Closed-interval radius $0.545$; retained through index $8$; exact uniform tail bound $0.009323031$.

3. **Closed-interval radius: 0.99** Set the interval radius to $0.99$. Compare supremum tail bounds, especially as the radius approaches one.

Preset observation: Closed-interval radius $0.99$; retained through index $8$; exact uniform tail bound $91.35172$.

### Worked examples

#### Example 1: The geometric power series

Find the radius and endpoint behavior of $\sum_{n=0}^{\infty}x^n$.

- All coefficients are one, giving radius one.
- At the right endpoint all terms are one; at the left they alternate positive and negative one. Neither series converges.

**Answer: Its sum is $1/(1-x)$ on $(-1,1)$; both endpoints diverge.**

#### Example 2: Different endpoint behavior

What happens at both endpoints for $\sum_{n=1}^{\infty}x^n/n$?

- The root test gives radius one.
- The right endpoint is harmonic and divergent; the left is negative alternating harmonic and conditionally convergent.

**Answer: One radius does not imply equal endpoint behavior.**

### Common mistakes

- **Interior results apply directly at the boundary** The geometric margin may vanish there.

- **Smooth means representable by a power series** Analyticity or a vanishing remainder still needs proof.

### Exercises and solutions

**1. Is convergence uniform on every closed subinterval strictly inside the radius?**

Hint: Leave a positive margin to the boundary.

Answer: Yes.

- The M-test gives a uniform majorant.

**2. Is convergence necessarily uniform on the entire open convergence interval?**

Hint: Inspect geometric-series tails near the boundary.

Answer: No.

- Domain-wide uniform control may fail.

**3. Does multiplying coefficients by the index change the derivative series' radius?**

Hint: The index-th root of the index tends to one.

Answer: No.

- The radius remains unchanged.

**4. Find the radius and full real convergence interval of $\sum_{n=1}^{\infty}x^n/n$.**

Hint: Use roots for the interior and check each endpoint.

Answer: For $|x|>1$, terms fail to vanish, so the series diverges. The real convergence set is $[-1,1)$.

- The coefficient root satisfies $n^{-1/n}\to1$, giving radius one. For $|x|<1$, convergence is absolute.
- At $x=1$ the harmonic series diverges; at $x=-1$ the negative alternating harmonic series converges conditionally.
- For $|x|>1$, terms fail to vanish, so the series diverges. The real convergence set is $[-1,1)$.

Prerequisites: Uniform Cauchy convergence and the Weierstrass test, Conditions for interchanging integrals and derivatives, Ratio and root tests.

## Chapter review

Try independently before reading the solutions.

**1. Prove $x^n$ tends uniformly to zero on $[0,r]$ for fixed $0<r<1$, but not on $[0,1)$.**

Hint: Compare supremum errors.

Answer: Domain boundaries change uniform error control.

- The first domain has supremum error $r^n\to0$.
- The second has supremum one at every index, or moving points with error one half.

**2. Why does uniform function convergence to zero not suffice for interchanging derivatives?**

Hint: Use a small-amplitude high-frequency sine.

Answer: Function-amplitude control does not control derivatives.

- $\sin(nx)/n$ has magnitude at most the reciprocal index.
- Its derivative at zero stays one; the limiting zero function has derivative zero.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. In the square-root construction, how does a supremum whose square is too small lead to a contradiction?**

Hint: Choose a sufficiently small positive increment.

Answer: This rules out being too small; a smaller upper bound similarly rules out being too large.

- Keep $h(2s+h)<a-s^2$ so the new square remains below the target.
- The new number exceeds the supremum yet belongs to the candidate set, a contradiction.

**2. A bounded real sequence has the same limit for every convergent subsequence. Prove the whole sequence converges.**

Hint: Assume infinitely many terms lie outside one fixed error band.

Answer: Boundedness is essential to the argument.

- The bad subsequence is bounded and has a convergent subsequence.
- Its limit stays outside the band, contradicting uniqueness of the subsequential limit.

**3. Prove harmonic divergence with doubling blocks, then explain why vanishing adjacent differences do not suffice.**

Hint: Compare partial sums at doubled indices.

Answer: The partial sums are not Cauchy.

- Each block contributes at least one half.
- Adjacent reciprocal differences vanish, but distant tail partial sums remain separated.

**4. Give a compact disconnected set and a connected noncompact set.**

Hint: Use a finite set and an unbounded interval.

Answer: The properties are independent.

- Two distinct points form a compact disconnected set.
- The real line is connected but unbounded, hence noncompact.

**5. A real-line function has a uniformly bounded derivative magnitude. Prove uniform continuity.**

Hint: Apply the mean value theorem.

Answer: Lipschitz control implies uniform continuity.

- $|f(x)-f(y)|\le M|x-y|$.
- For a positive bound, take radius equal to error divided by the bound. For zero bound, the function is constant.

**6. For squaring on zero to one with equal subdivisions, write both sums and find the integral.**

Hint: Use the sum-of-squares formula.

Answer: $1/3$.

- $L_n=(n-1)n(2n-1)/(6n^3)$.
- $U_n=n(n+1)(2n+1)/(6n^3)$.
- Both tend to one third.

**7. Construct continuous functions tending pointwise to zero with every integral one.**

Hint: Use narrowing, growing triangular spikes.

Answer: Pointwise convergence does not suffice for integral interchange.

- For indices at least two, use support $[0,2/n]$, center $1/n$, and height $n$.
- Every fixed positive point eventually lies outside the support, and zero always has value zero; each triangular area is one.

**8. Explain why uniformly convergent derivatives still need convergent function values at one point, giving a counterexample without that condition.**

Hint: Derivatives cannot detect constant offsets.

Answer: An anchor prevents drifting constants.

- Constant functions $f_n(x)=n$ have identically zero, uniformly convergent derivatives.
- The functions diverge everywhere, failing the anchor condition.

# Glossary

- **Ordered fields and real arithmetic**: Real numbers support arithmetic and comparison, but division, roots, and reciprocals have conditions.

- **Upper bounds, suprema, and completeness**: A supremum is the least upper bound; it need not belong to the set.

- **The Archimedean property and density**: Natural numbers exceed every real bound; every nonempty open interval contains a rational.

- **Absolute value and error estimates**: Absolute value expresses distance in a form that can be bounded by adding errors.

- **Constructing square roots from completeness**: A square root exists because a supremum fills the gap, not because curves seem to intersect.

- **Quantifiers in sequence limits**: Convergence requires every term after some cutoff to meet any prescribed positive error.

- **Limit algebra, order, and squeezing**: Control individual errors before combining them. Reciprocals require denominators bounded away from zero.

- **Monotone convergence and nested intervals**: A bounded monotone real sequence converges to its appropriate supremum or infimum.

- **Subsequences and Bolzano–Weierstrass**: Every bounded real sequence has at least one convergent subsequence.

- **The Cauchy condition and completeness**: Closeness between tail terms tests convergence without knowing the limit beforehand.

- **A series is a limit of partial sums**: An infinite series converges when its finite partial sums approach a finite real number.

- **Nonnegative series, comparison, and grouping**: Nonnegative terms make partial sums increasing. Convergence is then equivalent to boundedness above.

- **Ratio and root tests**: An eventual bound by a convergent geometric series establishes absolute convergence.

- **Alternating series and remainder bounds**: When magnitudes decrease to zero, alternating cancellation bounds the remainder by the next term.

- **Absolute convergence and rearrangements**: Absolute convergence preserves the sum under rearrangement. Conditional convergence does not grant that freedom.

- **Open sets, closed sets, and relative topology**: Every point of an open set has a neighborhood inside it. A closed set contains all its limit points.

- **Limit points, closure, and sequential criteria**: The closure contains every point whose arbitrarily small neighborhoods meet the original set.

- **Compactness and Heine–Borel**: On the real line, compact means closed and bounded. Every open cover can then be reduced to finitely many members.

- **Connectedness and intervals**: A real subset is connected exactly when it omits no point between two of its members.

- **Countability, uncountability, and diagonals**: Countable means listable by natural-number indices, not sparsely distributed.

- **Function limits and continuity**: A function limit controls nearby inputs. Continuity additionally makes that limit equal the value at the center.

- **Testing function limits with sequences**: A real function has a limit only if every admissible input sequence approaching the center gives the same output limit.

- **Continuous functions on compact sets and extrema**: Continuous functions map compact sets to compact sets, ensuring both extrema are attained.

- **Intermediate values and connected images**: A continuous function cannot pass between two values while skipping a value between them.

- **Uniform continuity and Heine–Cantor**: Uniform continuity uses one input radius across the entire domain, independently of the center.

- **Derivatives and local linearity**: Differentiability writes the change as a linear main term plus a remainder smaller than the input change.

- **Rolle's theorem and the mean value theorem**: Continuity on a closed interval and differentiability inside connect the average change to a derivative somewhere.

- **Derivatives may be discontinuous but cannot skip values**: A derivative may oscillate discontinuously while still having the intermediate value property.

- **Taylor's theorem with controlled remainders**: A Taylor polynomial approximates a function only when its remainder is genuinely small.

- **Convexity, tangents, and second derivatives**: A convex graph lies below its chords and, when differentiable, above every tangent.

- **Partitions, upper sums, and lower sums**: Bound the function throughout each subinterval, then add the bounding rectangle areas.

- **The Darboux integrability criterion**: Integrability requires a partition with upper–lower gap below every prescribed positive error.

- **Integrability of continuous, monotone, and finite-jump functions**: Continuous and monotone functions on closed bounded intervals are integrable, for different reasons.

- **The derivative of an accumulation integral**: At a continuity point of the integrand, local averages approach its value, giving the accumulation function that derivative.

- **Integral evaluation, substitution, and integration by parts**: An antiderivative's endpoint difference computes an integral only when the antiderivative and integrability hypotheses hold.

- **Pointwise and uniform convergence**: Pointwise convergence allows different waiting times for each input; uniform convergence uses one cutoff for the whole domain.

- **Uniform Cauchy convergence and the Weierstrass test**: Control function differences by one uniform tail budget to prove uniform convergence of a sequence or function series.

- **A uniform limit of continuous functions is continuous**: Split the error into three parts, transferring change in the limit to one continuous approximating function.

- **Conditions for interchanging integrals and derivatives**: Uniform convergence passes integrals on finite intervals, but alone does not pass derivatives.

- **Power series, convergence radii, and termwise operations**: On smaller closed intervals inside the convergence radius, both the power series and its derivative series have uniform bounds.

# Proof supplements and scope

## Limsup, liminf, and the root test

For a bounded sequence, tail suprema form a nonincreasing sequence whose limit is the limsup; tail infima similarly define liminf. A limsup strictly below a number means every sufficiently late term is below it; a limsup strictly above a number means infinitely many terms exceed it. Apply these facts to index-th roots of absolute terms for the root test. Unbounded cases permit extended real values.

## Compactness, closed boundedness, and sequential compactness

For boundedness, cover a compact set with integer-radius intervals and choose a finite subcover. For closedness, take an outside point and neighborhoods around each member of radius one third their distance apart. A finite subcover and the minimum of its radii give a neighborhood of the outside point avoiding the set. Closed bounded sets lie in a closed interval, whose compactness follows by bisection; a closed subset inherits compactness by adding its open complement to a cover. Bolzano–Weierstrass and closedness give convergent subsequences with limits in the set. Conversely, unboundedness supplies a sequence with growing magnitude, and nonclosedness one approaching a missing closure point; both violate that subsequence property.

## Integral linearity, additivity, and tagged sums

A common refinement lets two functions use one partition. The triangle bound on oscillation proves integrability of linear combinations; taking limits of common tagged sums gives linearity. Splitting the interval and joining partitions proves interval additivity. A function bounded in magnitude by a constant has every tagged sum, and hence integral, bounded by that constant times the width. The Darboux criterion is equivalent to all sufficiently fine tagged sums being close to the integral: fix a small-gap partition, then an arbitrary fine mesh needs extra error only in pieces crossing its finitely many partition points. Their total width vanishes with the mesh; remaining pieces are controlled by the original sums.

## Finite exceptions versus dense discontinuity

Finitely many exceptional points fit in intervals of arbitrarily small total length. Boundedness then makes their upper–lower contribution arbitrarily small. In contrast, the rational-indicator function has oscillation one on every positive-length interval, so every partition gap equals the full interval length. Finite sampling cannot establish density; exact bounds follow from proofs that rationals and irrationals are both dense.

## Smooth does not mean analytic: a flat function

Set the value at zero to zero and elsewhere use the exponential of negative reciprocal square. Every nonzero-point derivative is a polynomial in the reciprocal times that exponential. With reciprocal square as a new variable, positive-term lower bounds for the exponential series show exponential growth dominates every fixed power. Thus all those polynomial-times-decay expressions vanish. Induction on difference quotients gives every derivative at zero as zero, continuously. Yet values at nonzero inputs are positive, so the zero Taylor series does not equal the function.

## Differentiability of a one-variable inverse

Suppose a function is continuously differentiable near a point with nonzero derivative. Derivative continuity preserves its sign in a smaller neighborhood, and the mean value theorem gives strict monotonicity. A continuous inverse exists on the image interval. Its difference quotient is the reciprocal of the corresponding original quotient, whose limit is nonzero, so the reciprocal limit applies. Keep the branch restriction and do not apply the result at a zero derivative.

## Improper integrals and numerical series

Define an integral on an infinite interval as a limit of finite-endpoint integrals, not by treating infinity as an ordinary endpoint. For a nonnegative nonincreasing function, integrals on unit intervals lie between neighboring integer-point values. Summing proves the integral test under those hypotheses. The finite-interval uniform convergence theorem cannot transfer unconditionally to infinite intervals: its total-length error bound fails.

## Proof dependencies and later analysis

This book starts from the real complete ordered field. Exponential, logarithmic, and trigonometric functions use familiar single-variable-calculus definitions and properties. A construction of logarithms by integration, then exponentials by inversion, belongs after the fundamental theorem and one-variable inverse theorem. General metric spaces, measure, Lebesgue integration, functional analysis, and multivariable real analysis are later independent courses. Finite diagrams and automatic tests do not replace general proofs.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [MIT 18.100A · Real Analysis](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/pages/lecture-notes-and-readings/): Used to check first-course scope and prerequisite relations among completeness, convergence, continuity, differentiation, integration, and uniformity. Text and problems were independently written.

- [Jiří Lebl · Basic Analysis I](https://www.jirka.org/ra/html/ra.html): Used to check scope against an openly published author textbook; no text, figures, or exercises were copied.

- [Basic Analysis · Interchange of limits](https://www.jirka.org/ra/html/sec_liminter.html): Used to check sufficient conditions for integral and derivative limit interchange.

- [Basic Analysis · Fundamental theorem of calculus](https://www.jirka.org/ra/html/sec_ftc.html): Used to check the Riemann-integral hypotheses of the fundamental theorem.
