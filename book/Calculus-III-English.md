# AI University · Calculus III

From multivariable change to conservation in space

English edition 1 · source v0.1.2 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

A complete course in multivariable and vector calculus: spatial geometry, vector curves, partial derivatives and optimization, multiple integrals, line and surface integrals, Green's, Stokes' and divergence theorems, and conservation.

Scope: Nine complete chapters covering spatial motion, Jacobians, flux and integral theorems. Full linear algebra, torsion theory, differential forms, second-order equations and PDE solution methods belong to separate volumes.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Vectors and space

- 1.1 Spatial coordinates and vectors
- 1.2 Dot products and projections
- 1.3 Cross products, area and normals
- 1.4 Lines and planes in space
- 1.5 Quadric surfaces and cross-sections
- 1.6 Cylindrical and spherical coordinates

### Spatial curves and motion

- 2.1 Vector-valued functions and tangents
- 2.2 Velocity, acceleration and distance
- 2.3 Arc-length parameters and curvature

### Multivariable change and differentiation

- 3.1 Multivariable functions and level sets
- 3.2 Multivariable limits and continuity
- 3.3 Partial and higher-order derivatives
- 3.4 Differentiability, tangent planes and error
- 3.5 The multivariable chain rule and implicit functions
- 3.6 Directional derivatives and gradients

### Local models and optimization

- 4.1 Second-order Taylor models
- 4.2 Critical points and the second-derivative test
- 4.3 Global extrema on closed regions
- 4.4 Lagrange multipliers and constrained extrema

### Double integrals

- 5.1 Double integrals and Fubini's theorem
- 5.2 General regions and changing integration order
- 5.3 Double integrals in polar coordinates
- 5.4 Density, centers of mass and inertia

### Triple integrals and substitution

- 6.1 Triple integrals and spatial regions
- 6.2 Triple integrals in cylindrical coordinates
- 6.3 Triple integrals in spherical coordinates
- 6.4 General changes of variables and Jacobians

### Vector fields and line integrals

- 7.1 Vector fields and streamlines
- 7.2 Scalar line integrals
- 7.3 Work and vector line integrals
- 7.4 Potentials, path independence and holes
- 7.5 Green's theorem and planar flux

### Surfaces and flux

- 8.1 Parametric surfaces and orientation
- 8.2 Surface area and scalar surface integrals
- 8.3 Flux and oriented area
- 8.4 Divergence and curl

### From local change to boundaries

- 9.1 Stokes' theorem
- 9.2 The divergence theorem and closed surfaces
- 9.3 Choosing an integral theorem
- 9.4 Conservation and local-to-global balance

# Chapter 1 · Vectors and space

Separate position, direction and shape. Dot products measure alignment; cross products give normals. Lines, planes and coordinate systems prepare for spatial calculus.

Goals:
- Perform vector operations
- Write equations of lines and planes
- Read spatial surfaces and coordinates

## 1.1 Spatial coordinates and vectors

*Points give positions; vectors give displacements*

### The idea

A vector records direction and distance of motion. The same displacement can start at different positions.

### Intuition

Each coordinate measures travel along one perpendicular axis. Adding components joins two displacements end to end.

### Another explanation

Vector addition joins displacements; translating their starting point leaves the displacement unchanged.

### Quick check

Multiplying a nonzero vector by $-2$ changes its length how?

A. It becomes negative
B. It doubles
C. It stays unchanged

Answer: B. The sign reverses direction; magnitude scales by 2.

### Point or vector?

A point is a position. The vector from $A$ to $B$ is $B-A$; moving both endpoints equally leaves it unchanged.

### Computing length

Apply Pythagoras in three directions. Length is nonnegative and vanishes only for the zero vector. Distance is the length of the difference between points.

### Why use unit vectors?

Divide a nonzero vector by its length to retain direction alone. Negative scaling reverses direction; zero has no normalizable direction.

### Definition and conditions

Points give positions; vectors give displacements

$$
\mathbf v=\langle v_1,v_2,v_3\rangle,\quad\|\mathbf v\|=\sqrt{v_1^2+v_2^2+v_3^2},\quad\widehat{\mathbf v}=\frac{\mathbf v}{\|\mathbf v\|}
$$

- Use orthogonal Cartesian coordinates and Euclidean distance. Normalization requires $\mathbf v\ne\mathbf0$.

### Derivation

Subtract to find displacement.

$$
\overrightarrow{AB}=\langle B_1-A_1,B_2-A_2,B_3-A_3\rangle
$$

Join displacements end to end.

$$
\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}
$$

Scaling components scales length by the absolute factor.

$$
\|c\mathbf v\|=|c|\|\mathbf v\|
$$

### Interactive diagram

Does reversing a horizontal component make length negative?

Join $\mathbf u=\langle1,1,0\rangle$ and $\mathbf v=\langle c,0,1\rangle$ end to end. Dashed sides complete the parallelogram.

Online diagram: #/lesson/c3-vectors?view=visual

### Guided experiment

1. **Negative multiple** Set horizontal component $c$ to $-1$.

Preset observation: The second vector's horizontal component reverses; length stays nonnegative.

2. **Zero component** Set horizontal component $c$ to $0$.

Preset observation: The second vector keeps its vertical component; it is not zero.

3. **Positive multiple** Set horizontal component $c$ to $2$.

Preset observation: The sum's horizontal component increases while its vertical component stays fixed.

### Worked examples

#### Example 1: Displacement and distance

Given $A=(1,-1,2),B=(3,2,-4)$, find displacement and distance.

- Subtract coordinates to obtain $\langle2,3,-6\rangle$.
- Distance is $\sqrt{4+9+36}=7$.

**Answer: Displacement $\langle2,3,-6\rangle$; distance 7.**

#### Example 2: Keeping the direction

Find a length-2 vector in the direction of $\mathbf v=\langle0,3,4\rangle$.

- Its length is 5; first divide by 5.
- Multiply by 2 to obtain $\langle0,6/5,8/5\rangle$.

**Answer: $\langle0,\frac65,\frac85\rangle$.**

### Common mistakes

- **Vectors must start at the origin.** The origin is a convenient display choice; free vectors can be translated.

- **Negative multiples have negative length.** Length scales by the absolute factor; the sign reverses direction.

### Exercises and solutions

**1. Find $\|\langle2,-3,6\rangle\|$.**

Hint: Square components and add.

Answer: 7

- $4+9+36=49$; its square root is 7.

**2. Find the midpoint of $A=(0,2,1),B=(2,0,2)$.**

Hint: Average corresponding coordinates.

Answer: $(1,1,\frac32)$.

- $\frac12(A+B)=(1,1,\frac32)$.

**3. Given $\mathbf u=\langle1,0,1\rangle,\mathbf v=\langle-1,2,0\rangle$, find $2\mathbf u+\mathbf v$.**

Hint: Scale first, then add components.

Answer: $\langle1,2,2\rangle$.

- $2\mathbf u=\langle2,0,2\rangle$.
- The sum is $\langle1,2,2\rangle$.

**4. What is the zero vector's unit direction?**

Hint: Check the denominator.

Answer: Normalization gives no unit direction.

- Its length is zero; division cannot select a unique direction.

Prerequisites: Parametric equations and motion.

## 1.2 Dot products and projections

*Extract contribution along a direction*

### The idea

The dot product measures alignment. Projection gives the part pointing along a chosen direction.

### Intuition

Aligned motion contributes positively, perpendicular motion zero, and opposing motion negatively. The dot product summarizes this as a scalar.

### Another explanation

The dot product is one length times the other's signed directional component; negative means opposing contribution.

### Quick check

What does a negative dot product imply?

A. An obtuse angle between nonzero vectors
B. Perpendicularity
C. Negative vector length

Answer: A. Positive lengths leave the negative sign to the angle's cosine.

### Why is the dot product a scalar?

Multiply corresponding components and add. This equals one length times the other's signed component along it. The result has sign but no vector direction.

### Testing perpendicularity

Two nonzero vectors are perpendicular exactly when their dot product is zero. Zero dots to zero with everything, so exclude it when interpreting angles.

### Scalar versus vector projection

Scalar projection is a signed length. Vector projection multiplies it by a target unit vector. The residual is perpendicular to that target.

### Definition and conditions

Extract contribution along a direction

$$
\mathbf u\cdot\mathbf v=\sum_{i=1}^{3}u_iv_i=\|\mathbf u\|\|\mathbf v\|\cos\theta,\quad\operatorname{proj}_{\mathbf u}\mathbf v=\frac{\mathbf v\cdot\mathbf u}{\mathbf u\cdot\mathbf u}\mathbf u
$$

- Angles and projection directions require $\mathbf u\ne0$; angles also require $\mathbf v\ne0$; $0\le\theta\le\pi$.

### Derivation

Place vectors at one origin and apply the cosine law.

$$
\|\mathbf u-\mathbf v\|^2=\|\mathbf u\|^2+\|\mathbf v\|^2-2\|\mathbf u\|\|\mathbf v\|\cos\theta
$$

Expand squared components to obtain the dot product.

$$
\mathbf u\cdot\mathbf v=\|\mathbf u\|\|\mathbf v\|\cos\theta
$$

Require the projection residual perpendicular to the target.

$$
(\mathbf v-\lambda\mathbf u)\cdot\mathbf u=0
$$

### Interactive diagram

When vectors are perpendicular, where is the projection?

Fix $\mathbf u=\langle1.5,0,0\rangle$, rotate equal-length $\mathbf v$, and compare dot product and projection.

Online diagram: #/lesson/c3-dot?view=visual

### Guided experiment

1. **Aligned** Set angle $\theta$ to $0$.

Preset observation: The dot product is positive; projection points forward.

2. **Perpendicular** Set angle $\theta$ to $\frac\pi2$.

Preset observation: The dot product is numerically zero and the projection vanishes.

3. **Opposing** Set angle $\theta$ to $\pi$.

Preset observation: The dot product is negative; projection reverses.

### Worked examples

#### Example 1: Testing perpendicularity

Are $\mathbf u=\langle1,2,-1\rangle,\mathbf v=\langle2,0,2\rangle$ perpendicular?

- Their dot product is $2+0-2=0$.
- Both are nonzero, so the perpendicularity criterion applies.

**Answer: They are perpendicular.**

#### Example 2: Projection decomposition

Project $\langle3,1,0\rangle$ onto $\langle1,1,0\rangle$.

- The coefficient is $\frac{3+1}{1+1}=2$.
- Projection is $\langle2,2,0\rangle$; residual $\langle1,-1,0\rangle$ dots to zero with the target.

**Answer: Projection $\langle2,2,0\rangle$.**

### Common mistakes

- **A dot product is just the product of lengths.** Include the angle's cosine; opposing directions give a negative result.

- **Projection always preserves length.** Projection length cannot exceed the original length; perpendicular projection is zero.

### Exercises and solutions

**1. Find $\langle1,-2,3\rangle\cdot\langle4,1,-1\rangle$.**

Hint: Multiply corresponding components.

Answer: $-1$

- $4-2-3=-1$.

**2. Find the angle between $\langle2,2,0\rangle$ and the positive horizontal axis.**

Hint: Compute length, then cosine.

Answer: $\frac\pi4$.

- Length is $2\sqrt2$; cosine is $1/\sqrt2$.

**3. Project $\langle-3,4,0\rangle$ onto the positive horizontal axis. Find scalar projection.**

Hint: Take its signed horizontal component.

Answer: $-3$

- That component is $-3$; negative means opposite the positive axis.

**4. Is the angle between zero and another vector a right angle?**

Hint: What is the denominator in the cosine formula?

Answer: This angle is not defined for the zero vector.

- The dot product is zero, but so is the product of lengths.
- The angle formula is undefined.

Prerequisites: Spatial coordinates and vectors.

## 1.3 Cross products, area and normals

*Find area and perpendicular direction together*

### The idea

The cross product is perpendicular to both input vectors. Its length is their parallelogram's area.

### Intuition

Base times height gives magnitude; the right-hand rule gives direction. Swapping inputs preserves area and reverses the normal.

### Another explanation

Magnitude gives base times height; the right hand chooses direction. Keep area separate from orientation.

### Quick check

What does reversing cross-product order do?

A. Negates length
B. Reverses direction, preserving length
C. Changes nothing

Answer: B. The normal reverses; area stays nonnegative.

### How does it differ from the dot product?

The dot product is a scalar measuring alignment. The three-dimensional cross product is a vector describing perpendicular direction and spanned area.

### Why does order matter?

Turn from the first vector toward the second; the right hand chooses the positive normal. Reversing order changes sign.

### Using the triple product

Dot a cross product with a third vector for signed volume. Its absolute value is parallelepiped volume. Zero means the vectors are coplanar.

### Definition and conditions

Find area and perpendicular direction together

$$
\mathbf u\times\mathbf v=\langle u_2v_3-u_3v_2,u_3v_1-u_1v_3,u_1v_2-u_2v_1\rangle,\quad A=\|\mathbf u\times\mathbf v\|,\quad V=|\mathbf w\cdot(\mathbf u\times\mathbf v)|
$$

- Use three-dimensional right-handed Cartesian coordinates. A unit normal requires a nonzero cross product.

### Derivation

Choose a direction perpendicular to both vectors.

$$
(\mathbf u\times\mathbf v)\cdot\mathbf u=(\mathbf u\times\mathbf v)\cdot\mathbf v=0
$$

Base times height determines magnitude.

$$
\|\mathbf u\times\mathbf v\|=\|\mathbf u\|\|\mathbf v\|\sin\theta
$$

Take the third vector's signed height.

$$
V=|\mathbf w\cdot(\mathbf u\times\mathbf v)|
$$

### Interactive diagram

Do opposite parallel vectors span positive area?

Rotate the second vector in its plane and inspect the parallelogram and perpendicular cross product.

Online diagram: #/lesson/c3-cross?view=visual

### Guided experiment

1. **Parallel** Set angle $\theta$ to $0$.

Preset observation: The parallelogram collapses; the cross product is zero.

2. **Maximum area** Set angle $\theta$ to $\frac\pi2$.

Preset observation: Perpendicular inputs span maximum area.

3. **Collapsed again** Set angle $\theta$ to $\pi$.

Preset observation: Opposite parallel inputs still give zero area; the cross product cannot be normalized.

### Worked examples

#### Example 1: Triangle area

Find the triangle area spanned by $\mathbf u=\langle2,0,0\rangle,\mathbf v=\langle1,3,0\rangle$.

- The cross product is $\langle0,0,6\rangle$.
- The parallelogram area is 6; take half.

**Answer: 3.**

#### Example 2: Spatial volume

Find the parallelepiped volume for $\mathbf u=\langle1,0,1\rangle,\mathbf v=\langle0,2,0\rangle,\mathbf w=\langle0,0,3\rangle$.

- The cross product is $\langle-2,0,2\rangle$.
- Dotting with the third gives 6; take its absolute value.

**Answer: 6.**

### Common mistakes

- **Swapping cross-product inputs changes nothing.** The cross product is anticommutative; order determines orientation.

- **Parallel vectors give a unique unit normal.** Their cross product is zero; the perpendicular direction is not unique.

### Exercises and solutions

**1. Find $\mathbf i\times\mathbf k$.**

Hint: Use the right-hand order or components.

Answer: $-\mathbf j$.

- Swapping the third and first coordinate directions reverses sign.
- The result is $-\mathbf j$.

**2. Find the parallelogram area spanned by $\langle3,0,0\rangle$ and $\langle0,4,0\rangle$.**

Hint: Take the cross product's length.

Answer: 12

- The cross product is $\langle0,0,12\rangle$, with length 12.

**3. Does swapping two vectors in a triple product change volume?**

Hint: Distinguish signed from unsigned volume.

Answer: Geometric volume is unchanged.

- The signed triple product changes sign.
- Its absolute value, geometric volume, stays unchanged.

**4. Two nonzero vectors have zero cross product. What follows?**

Hint: What does zero area imply?

Answer: The vectors are parallel.

- $\sin\theta=0$; the angle is zero or $\pi$.
- They are parallel, either aligned or opposing.

Prerequisites: Dot products and projections.

## 1.4 Lines and planes in space

*Directions define lines; normals define planes*

### The idea

A line moves from one point in a fixed direction. Every displacement within a plane is perpendicular to its normal.

### Intuition

One direction controls a line; one perpendicular direction constrains all motion in a plane.

### Another explanation

Substituting a parametrized line into a plane reduces spatial intersection to one equation.

### Quick check

If line direction dots nontrivially with plane normal, how many intersections exist?

A. Zero
B. One
C. Infinitely many

Answer: B. Substitution gives a linear parameter equation with nonzero coefficient and one solution.

### Why parametrize a line?

One parameter controls three coordinates. Zero direction components are allowed; do not force a symmetric form that divides by zero.

### Deriving a plane equation

The displacement from a known plane point to any other plane point dots to zero with the normal. Cross two nonparallel in-plane directions to find a normal.

### Computing distance

Project displacement from a plane point onto its unit normal and take absolute value. Test line direction dotted with normal to analyze parallelism and intersections.

### Definition and conditions

Directions define lines; normals define planes

$$
\mathbf r(t)=\mathbf p+t\mathbf d,\quad\mathbf n\cdot(\mathbf r-\mathbf p)=0,\quad d(Q,\Pi)=\frac{|\mathbf n\cdot(Q-\mathbf p)|}{\|\mathbf n\|}
$$

- Line direction $\mathbf d\ne0$ and plane normal $\mathbf n\ne0$. Dot-product distances use Euclidean coordinates.

### Derivation

In-plane displacement has no normal component.

$$
\mathbf n\cdot(\mathbf r-\mathbf p)=0
$$

Substitute the line into the plane.

$$
\mathbf n\cdot(\mathbf p_0+t\mathbf d-\mathbf p)=0
$$

Convert the perpendicular component to distance.

$$
d=|\widehat{\mathbf n}\cdot(Q-\mathbf p)|
$$

### Interactive diagram

How does the line cross from one side of the plane to the other?

Plane $x+y+z=1$ and line $\mathbf r(t)=(0,0,1)+t(1,1,1)$.

Online diagram: #/lesson/c3-lines-planes?view=visual

### Guided experiment

1. **Below the plane** Set line parameter $t$ to $-1$.

Preset observation: The point is below the plane; the signed normal residual is negative.

2. **Crossing the plane** Set line parameter $t$ to $0$.

Preset observation: The line passes through the plane's center; signed residual is zero.

3. **Above the plane** Set line parameter $t$ to $1$.

Preset observation: The point is on the opposite side; the residual changes sign.

### Worked examples

#### Example 1: An intersection parameter

Where do line $(x,y,z)=(t,1-t,2t)$ and plane $x+y+z=3$ intersect?

- Substitution gives $1+2t=3$, hence $t=1$.
- Insert this into the line to obtain $(1,0,2)$.

**Answer: Intersection $(1,0,2)$.**

#### Example 2: Point-to-plane distance

Find the distance from $(0,0,0)$ to $x+2y+2z=6$.

- The normal has length $\sqrt{1+4+4}=3$.
- The plane equation's absolute residual at the origin is 6.

**Answer: Distance 2.**

### Common mistakes

- **Nonparallel spatial lines must intersect.** They can be skew. Check for a common point.

- **The equation's constant magnitude is the distance.** Divide by normal length and account for the chosen point.

### Exercises and solutions

**1. Write the line through the origin in direction $\langle1,0,2\rangle$.**

Hint: Use one parameter for displacement.

Answer: $(x,y,z)=(t,0,2t)$.

- $\mathbf r(t)=t\langle1,0,2\rangle$; its vertical coordinate in the horizontal plane stays zero.

**2. Find the plane through $(1,1,1)$ with normal $\langle1,-1,2\rangle$.**

Hint: Dot the normal with displacement.

Answer: $x-y+2z=2$.

- $(x-1)-(y-1)+2(z-1)=0$.
- Simplification gives $x-y+2z=2$.

**3. Does the horizontal axis in $z=0$ intersect line $(0,1,t)$?**

Hint: Compare all coordinates.

Answer: They neither intersect nor are parallel.

- The horizontal axis has second coordinate zero; the other line has second coordinate 1, so no intersection.
- Their directions are nonparallel, making them skew.

**4. Does $\mathbf n\cdot\mathbf d=0$ ensure the line is not contained in the plane?**

Hint: Check a point on the line too.

Answer: No.

- It only makes the direction parallel to the plane.
- If the starting point lies in the plane, so does the whole line.

Prerequisites: Cross products, area and normals.

## 1.5 Quadric surfaces and cross-sections

*Understand a surface by slicing it*

### The idea

Fix one coordinate to obtain a cross-section. Key slices are more reliable than memorized silhouettes.

### Intuition

Circles, ellipses, parabolas and hyperbolas in slices reveal the spatial shape.

### Another explanation

Fix one coordinate, inspect its slices, then assemble the spatial picture.

### Quick check

What does a missing first coordinate imply?

A. It must be a sphere
B. Translation invariance along the first axis
C. No spatial surface exists

Answer: B. The other coordinates satisfy the equation while the first is free.

### Recognizing an ellipsoid

Three same-sign squared terms equal a positive constant. Find axis intercepts. Fixing one coordinate usually gives an ellipse, possibly a point or empty set.

### Paraboloid versus hyperbolic paraboloid

For $z=x^2+y^2$, both coordinate slices open upward. For $z=x^2-y^2$, one opens up and the other down, producing a saddle.

### Must a cylinder be circular?

A missing coordinate means translation invariance in that direction. For example $z=x^2$ extends along the second axis and is a cylinder. Cross terms may require rotated axes; square-term signs alone do not classify them.

### Definition and conditions

Understand a surface by slicing it

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1,\quad z=x^2\pm y^2,\quad x^2+y^2-z^2=1
$$

- Ellipsoid semiaxes satisfy $a,b,c>0$. These examples use standard forms aligned with principal axes.

### Derivation

Fix height to obtain a plane curve.

$$
z=k\ \Longrightarrow\ x^2+y^2=k\quad(z=x^2+y^2)
$$

Compare perpendicular slices for bending direction.

$$
z(x,0)=x^2,\quad z(0,y)=\pm y^2
$$

An absent variable means translation invariance.

$$
z=x^2\quad\text{independent of }y
$$

### Interactive diagram

How does reversing one squared term's sign change the surface?

Vary a parameter in $z=x^2+c y^2$ to move from bowl through cylinder to saddle.

Online diagram: #/lesson/c3-quadrics?view=visual

### Guided experiment

1. **Bending upward** Set squared-term coefficient $c$ to $1$.

Preset observation: Both coordinate directions bend upward, forming an elliptic paraboloid.

2. **Cylinder** Set squared-term coefficient $c$ to $0$.

Preset observation: The second coordinate no longer affects height; the surface extends in that direction.

3. **Saddle** Set squared-term coefficient $c$ to $-1$.

Preset observation: The coordinate slices bend in opposite directions.

### Worked examples

#### Example 1: An ellipsoid slice

Find the slice of $\frac{x^2}4+y^2+\frac{z^2}9=1$ at $z=\frac32$.

- Substitution leaves $1-\frac14=\frac34$ on the right.
- This gives $\frac{x^2}3+\frac{y^2}{3/4}=1$.

**Answer: An ellipse with semiaxes $\sqrt3$ and $\frac{\sqrt3}2$.**

#### Example 2: Recognizing a saddle

Is the origin a minimum of $z=2x^2-y^2$?

- Along the horizontal axis, $z=2x^2\ge0$.
- Along the other axis, $z=-y^2\le0$; nearby values are both higher and lower.

**Answer: No; it is a saddle point.**

### Common mistakes

- **All level curves are circles.** Slices may be hyperbolas, lines, empty sets or other shapes.

- **A minimum along one direction is a local minimum.** A multivariable minimum requires no lower nearby values in any direction.

### Exercises and solutions

**1. Find the slice radius of $z=x^2+y^2$ at $z=4$.**

Hint: Insert the fixed height.

Answer: 2

- $x^2+y^2=4$; radius 2.

**2. Find the slice of $x^2+y^2-z^2=1$ at $z=0$.**

Hint: Set height to zero.

Answer: The unit circle.

- $x^2+y^2=1$, the unit circle.

**3. Is $y^2+z^2=9$ a sphere?**

Hint: Is the first coordinate restricted?

Answer: No; a cylinder.

- The first coordinate is arbitrary.
- This is a radius-3 cylinder extending along the first axis.

**4. Find the slice of $z=x^2-y^2$ at $z=0$.**

Hint: Factor the difference of squares.

Answer: Two intersecting lines.

- $(x-y)(x+y)=0$.
- Two lines: $y=x$ and $y=-x$.

Prerequisites: Lines and planes in space.

## 1.6 Cylindrical and spherical coordinates

*Match coordinates to geometry*

### The idea

Cylindrical coordinates suit axial shapes; spherical coordinates suit shapes naturally described by distance from the origin.

### Intuition

Cylindrical coordinates add height to polar coordinates. Spherical coordinates use distance, azimuth and inclination from the positive vertical axis.

### Another explanation

Cylindrical radius measures distance to the axis; spherical radius to the origin. Inclination starts at the positive vertical axis.

### Quick check

At zero inclination, where is the point under this convention?

A. On the positive vertical axis or at the origin
B. On the equator
C. On the negative first axis

Answer: A. Inclination is measured from the positive vertical axis.

### Where are angles measured from?

Azimuth $\theta$ is measured in the horizontal plane from the positive first axis. Inclination $\phi$ is measured downward from the positive vertical axis, from zero to $\pi$.

### Are coordinates unique?

Adding a full turn changes no point. Azimuth is undefined on the vertical axis, and all angles are nonunique at the origin. These are coordinate degeneracies, not different spatial points.

### Position formulas or volume elements first?

Understand position geometrically first. Multiple integrals will derive area and volume factors; multiplying three coordinate differentials alone does not give actual volume.

### Definition and conditions

Match coordinates to geometry

$$
x=r\cos\theta,\ y=r\sin\theta;\quad x=\rho\sin\phi\cos\theta,\ y=\rho\sin\phi\sin\theta,\ z=\rho\cos\phi
$$

- Cylindrical $r\ge0$; spherical $\rho\ge0,0\le\phi\le\pi$. Azimuths differing by full turns are equivalent. Use radians.

### Derivation

Project onto the horizontal plane.

$$
r=\sqrt{x^2+y^2}
$$

Use distance from the origin and inclination.

$$
\rho=\sqrt{r^2+z^2},\quad r=\rho\sin\phi
$$

Resolve the horizontal radius into components.

$$
x=r\cos\theta,\quad y=r\sin\theta
$$

### Interactive diagram

Near a pole, does the same azimuth change cover the same distance as at the equator?

Fix spherical radius $\rho=1.5$ and vary inclination and azimuth. Dashed lines show horizontal projection and origin distance.

Online diagram: #/lesson/c3-coordinates?view=visual

### Guided experiment

1. **North pole** Set inclination $\phi$ to $0$.

Preset observation: The point lies on the positive vertical axis; azimuth does not change it.

2. **Equator** Set inclination $\phi$ to $\frac\pi2$.

Preset observation: Height is zero; horizontal radius equals spherical radius.

3. **South pole** Set inclination $\phi$ to $\pi$.

Preset observation: The point lies on the negative vertical axis; horizontal radius is zero again.

### Worked examples

#### Example 1: Reading spherical coordinates

Find spherical coordinates of $(x,y,z)=(1,1,\sqrt2)$.

- Distance $\rho=2$; horizontal radius $r=\sqrt2$.
- The first quadrant gives $\theta=\frac\pi4$, $\cos\phi=\frac{\sqrt2}2$.

**Answer: $(\rho,\theta,\phi)=(2,\frac\pi4,\frac\pi4)$.**

#### Example 2: A coordinate surface

What does spherical equation $\phi=\frac\pi3$ describe?

- $z=\rho/2\ge0$, $r=\sqrt3\rho/2$.
- Eliminate distance to obtain $z=r/\sqrt3$.

**Answer: A cone in the upper half-space, including its vertex.**

### Common mistakes

- **Every book uses the same symbols for spherical angles.** Check conventions. Here inclination is measured from the positive vertical axis.

- **Cylindrical radius is distance from the origin.** It is distance from the vertical axis; these agree only at zero height.

### Exercises and solutions

**1. Convert cylindrical $(r,\theta,z)=(2,\frac\pi2,-1)$ to Cartesian coordinates.**

Hint: Use sine and cosine.

Answer: $(0,2,-1)$.

- $x=0,y=2$; height remains $-1$.

**2. What surface is spherical equation $\rho=3$?**

Hint: Distance is fixed.

Answer: A radius-3 sphere.

- Every point is distance 3 from the origin.

**3. Is the azimuth of $(0,0,2)$ unique?**

Hint: Inspect the horizontal projection.

Answer: No.

- Horizontal radius is zero; every azimuth gives the same point.

**4. Which inclination gives the spherical equator?**

Hint: Set height zero and distance nonzero.

Answer: $\frac\pi2$.

- $\cos\phi=0$, hence $\phi=\frac\pi2$.

Prerequisites: Quadric surfaces and cross-sections, Polar coordinates and curves.

## Chapter review

Try independently before reading the solutions.

**1. Find the plane through $A=(1,0,0),B=(0,2,0),C=(0,0,3)$.**

Hint: Cross two edges to find a normal.

Answer: $6x+3y+2z=6$.

- Edges $(-1,2,0),(-1,0,3)$ have cross product $(6,3,2)$.
- Substituting a point gives $6x+3y+2z=6$.

**2. Given $\mathbf u=(1,2,2)$, find scalar projection of vector $(3,0,0)$ in that direction.**

Hint: Find the direction's unit vector first.

Answer: 1

- Direction length is 3; dot product is 3.
- Divide the dot product by direction length to get 1.

**3. Parametrize the intersection of sphere $x^2+y^2+z^2=4$ and plane $z=1$.**

Hint: Find the horizontal slice radius.

Answer: $\mathbf r(t)=(\sqrt3\cos t,\sqrt3\sin t,1)$.

- The slice is $x^2+y^2=3$.
- Choose $(\sqrt3\cos t,\sqrt3\sin t,1)$, from zero through one turn.

# Chapter 2 · Spatial curves and motion

Differentiate components, then interpret geometrically. Velocity is tangent; acceleration changes speed or direction.

Goals:
- Find spatial velocity and acceleration
- Compute arc length
- Separate tangential and normal change

## 2.1 Vector-valued functions and tangents

*One parameter controls a spatial path*

### The idea

A vector-valued function gives position. Its derivative is instantaneous velocity, pointing along the path.

### Intuition

Three single-variable coordinate functions share one parameter. Differentiate components to obtain spatial velocity.

### Another explanation

Differentiate position's three components and combine them into velocity.

### Quick check

Where does velocity point at a regular curve point?

A. Along the normal
B. Along the tangent
C. Always toward the origin

Answer: B. Velocity is the limit of displacement quotients.

### Computing vector limits

In finite dimensions, compute limits, continuity and derivatives componentwise. Failure in one component prevents the corresponding vector property.

### Why does the derivative give a tangent?

Displacement divided by elapsed parameter tends to velocity. Nonzero velocity defines a tangent; zero velocity needs separate analysis.

### What does integration give?

Integrating velocity gives displacement. Add initial position to obtain position; each component has its own constant.

### Definition and conditions

One parameter controls a spatial path

$$
\mathbf r\prime(t)=\langle x\prime(t),y\prime(t),z\prime(t)\rangle,\quad\ell(s)=\mathbf r(t_0)+s\mathbf r\prime(t_0)
$$

- The tangent formula requires differentiability and nonzero velocity. Integrate components over their stated interval.

### Derivation

Expand the displacement quotient componentwise.

$$
\frac{\mathbf r(t+h)-\mathbf r(t)}h=\left\langle\frac{x(t+h)-x(t)}h,\frac{y(t+h)-y(t)}h,\frac{z(t+h)-z(t)}h\right\rangle
$$

Take limits to obtain velocity.

$$
\mathbf v(t)=\mathbf r\prime(t)
$$

Use position and nonzero velocity to write the tangent.

$$
\ell(s)=\mathbf r(t_0)+s\mathbf v(t_0)
$$

### Interactive diagram

After one revolution, does the spatial point return to its start?

$\mathbf r(t)=(\cos t,\sin t,0.2t)$; arrows show the actual derivative direction. A closed horizontal projection does not make the spatial curve closed.

Online diagram: #/lesson/c3-vector-curves?view=visual

### Guided experiment

1. **Starting point** Set path parameter $t$ to $0$.

Preset observation: At the helix's start, the tangent has both horizontal and vertical components.

2. **Half a revolution** Set path parameter $t$ to $\pi$.

Preset observation: The point rotates half a turn and rises; its tangent rotates too.

3. **One revolution** Set path parameter $t$ to $2\pi$.

Preset observation: Horizontal position returns, but height increases, so the spatial path does not close.

### Worked examples

#### Example 1: A helix tangent

Find the tangent of $\mathbf r(t)=\langle\cos t,\sin t,t\rangle$ at time zero.

- Position is $(1,0,0)$.
- Velocity $\langle-\sin t,\cos t,1\rangle$ becomes $\langle0,1,1\rangle$ at zero.

**Answer: $\ell(s)=(1,s,s)$.**

#### Example 2: Recovering position

$\mathbf v(t)=\langle2t,1,-2\rangle,\mathbf r(0)=(1,0,3)$.

- Componentwise integration gives $\langle t^2+C_1,t+C_2,-2t+C_3\rangle$.
- Initial position selects the three constants.

**Answer: $\mathbf r(t)=\langle1+t^2,t,3-2t\rangle$.**

### Common mistakes

- **Every spatial curve must be a height graph.** Closed circles and helices suit parameterization and need not be single-coordinate graphs.

- **Zero velocity always means no tangent.** For example $\mathbf r(t)=(t^3,0,0)$ still lies along the first axis at zero; use an additional limiting argument.

### Exercises and solutions

**1. Find the velocity of $\langle t,t^2,t^3\rangle$ at $t=1$.**

Hint: Differentiate components.

Answer: $\langle1,2,3\rangle$.

- Velocity is $\langle1,2t,3t^2\rangle$.
- Substitution gives $\langle1,2,3\rangle$.

**2. Find the speed of $\mathbf r(t)=(2\cos t,2\sin t,0)$.**

Hint: Take velocity's length.

Answer: 2

- Velocity $\langle-2\sin t,2\cos t,0\rangle$ has constant length 2.

**3. For $\mathbf r(t)=(t^2,t^2,0)$ at zero, can its derivative be used as a nonzero tangent direction?**

Hint: Check velocity.

Answer: The nonzero-velocity formula cannot be used directly.

- Velocity vanishes at zero, giving no direction.
- The curve lies on line $y=x,z=0$; a separate argument gives the tangent.

**4. Is the integration constant in position a scalar?**

Hint: Count the components.

Answer: A constant vector.

- Each component has one constant.
- Together they form a constant vector.

Prerequisites: Spatial coordinates and vectors, Tangents and arc length of parametric curves.

## 2.2 Velocity, acceleration and distance

*Velocity has direction; speed does not*

### The idea

Velocity is position's rate of change. Speed is its length. Integrating speed gives distance; integrating velocity gives displacement.

### Intuition

A full circle returns to the start but covers nonzero distance. Vector contributions cancel; lengths do not.

### Another explanation

Integrating velocity gives displacement; integrating its length gives distance without cancellation.

### Quick check

What is acceleration in uniform circular motion?

A. Always zero
B. Perpendicular to velocity and toward the center
C. Aligned with velocity

Answer: B. Tangential acceleration is zero; the normal component turns the path.

### Does acceleration always increase speed?

Only its component along velocity directly changes speed. Perpendicular acceleration changes direction; uniform circular motion still accelerates.

### Recovering a trajectory

Integrate acceleration and use initial velocity. Then integrate velocity and use initial position. Both sets of data matter.

### Why does length integrate speed?

A short travel length is approximately speed times elapsed time. Accumulate it along a piecewise smooth curve; retracing counts again.

### Definition and conditions

Velocity has direction; speed does not

$$
\mathbf v=\mathbf r\prime,\quad\mathbf a=\mathbf r^{\prime\prime},\quad L=\int_\alpha^\beta\|\mathbf r\prime(t)\|dt,\quad\Delta\mathbf r=\int_\alpha^\beta\mathbf v(t)dt
$$

- Arc length uses a piecewise continuously differentiable path. Acceleration requires a second derivative. Compare displacement and distance over the same interval.

### Derivation

Approximate short displacement by velocity times time.

$$
\Delta\mathbf r\approx\mathbf v\Delta t
$$

Take lengths and accumulate distance.

$$
L=\int\|\mathbf v\|dt
$$

Differentiate speed squared to analyze acceleration's effect.

$$
\frac d{dt}\|\mathbf v\|^2=2\mathbf v\cdot\mathbf a
$$

### Interactive diagram

Why is acceleration nonzero when speed is constant?

$\mathbf r(t)=(\cos t,\sin t,0)$; green denotes velocity, blue acceleration.

Online diagram: #/lesson/c3-motion?view=visual

### Guided experiment

1. **Start moving** Set path parameter $t$ to $0$.

Preset observation: Velocity is tangent to the circle; acceleration points inward.

2. **A quarter revolution** Set path parameter $t$ to $\frac\pi2$.

Preset observation: Velocity rotates while retaining its length.

3. **A full revolution** Set path parameter $t$ to $2\pi$.

Preset observation: Displacement is zero, while distance equals the circumference.

### Worked examples

#### Example 1: Distance along a helix

Find the distance covered by $\mathbf r(t)=(2\cos t,2\sin t,3t)$ over one revolution.

- Speed is $\sqrt{4+9}=\sqrt{13}$.
- The time interval has length $2\pi$; integrate the constant speed.

**Answer: $2\pi\sqrt{13}$.**

#### Example 2: Projectile position

$\mathbf a=(0,0,-2),\mathbf v(0)=(1,2,3),\mathbf r(0)=(0,0,1)$.

- Integrating acceleration gives $\mathbf v=(1,2,3-2t)$.
- Integrate again and use initial position to obtain $(t,2t,1+3t-t^2)$.

**Answer: $\mathbf r(t)=(t,2t,1+3t-t^2)$; interpret only while the model is valid.**

### Common mistakes

- **Nonzero acceleration always increases speed.** It may change direction alone.

- **Distance equals displacement magnitude.** Distance is generally larger; changes of direction cause displacement cancellation.

### Exercises and solutions

**1. A radius-3 circle is traversed at one radian per unit time. Find speed.**

Hint: Take the parametric derivative's length.

Answer: 3

- The derivative of $\mathbf r=(3\cos t,3\sin t,0)$ has length 3.

**2. Find displacement and distance over one unit-circle revolution.**

Hint: Integrate the vector and its length separately.

Answer: Displacement $\mathbf0$; distance $2\pi$.

- Matching endpoints give zero displacement.
- Speed is 1; distance is $2\pi$.

**3. Given $\mathbf v\cdot\mathbf a=0$ and nonzero velocity, find the instantaneous derivative of speed.**

Hint: Differentiate speed squared.

Answer: 0

- $2v v\prime=2\mathbf v\cdot\mathbf a=0$; since $v>0$, obtain $v\prime=0$.

**4. Are zero velocity and constant speed equivalent?**

Hint: Use uniform circular motion as a counterexample.

Answer: No.

- It has positive constant speed while velocity's direction changes.

Prerequisites: Vector-valued functions and tangents.

## 2.3 Arc-length parameters and curvature

*Separate turning from travel speed*

### The idea

Curvature measures tangent-direction change per unit distance. It describes the curve's shape.

### Intuition

The same bend is equally curved at any travel speed. Measuring tangent change by arc length removes speed's effect.

### Another explanation

Tangent turning per distance gives curvature independently of speed.

### Quick check

If the same path is traveled at twice the speed, how does curvature change?

A. Doubles
B. Quadruples
C. Unchanged

Answer: C. Curvature depends on shape and has units of reciprocal length.

### The unit tangent

Normalize nonzero velocity to obtain $\mathbf T$. The length of its derivative with respect to arc length is curvature.

### Decomposing acceleration

Tangential acceleration changes speed; normal acceleration has magnitude curvature times speed squared. Nonzero curvature defines principal normal and binormal.

### Is torsion required here?

This volume focuses on length and curvature. Torsion measures departure from the osculating plane and belongs to differential geometry; it is unnecessary for these integral theorems.

### Definition and conditions

Separate turning from travel speed

$$
\mathbf T=\frac{\mathbf r\prime}{\|\mathbf r\prime\|},\quad\kappa=\left\|\frac{d\mathbf T}{ds}\right\|=\frac{\|\mathbf r\prime\times\mathbf r^{\prime\prime}\|}{\|\mathbf r\prime\|^3},\quad\mathbf a=v\prime\mathbf T+v^2\kappa\mathbf N
$$

- The curve is twice continuously differentiable with nonzero velocity. $\mathbf N$ also requires nonzero curvature. Arc length is monotone on a regular interval.

### Derivation

Arc length changes at the speed.

$$
\frac{ds}{dt}=v
$$

Changes in unit tangent are perpendicular to it.

$$
\mathbf T\cdot\mathbf T=1\ \Longrightarrow\ \mathbf T\cdot\mathbf T\prime=0
$$

Differentiate velocity's magnitude and direction separately.

$$
\frac d{dt}(v\mathbf T)=v\prime\mathbf T+v\mathbf T\prime
$$

### Interactive diagram

Does a larger radius turn more or less per unit distance?

Vary the radius to compare unit tangent, principal normal and curvature, with equal coordinate scaling.

Online diagram: #/lesson/c3-curvature?view=visual

### Guided experiment

1. **Small radius** Set circle radius $R$ to $0.5$.

Preset observation: The circle is tighter; curvature is 2.

2. **Unit radius** Set circle radius $R$ to $1$.

Preset observation: Curvature is 1.

3. **Large radius** Set circle radius $R$ to $2$.

Preset observation: The bend is gentler; curvature is one-half.

### Worked examples

#### Example 1: Curvature of a circle

Find the curvature of a radius-4 circle.

- Unit arc length produces angular change $1/4$.
- The velocity-acceleration cross-product formula gives the same result.

**Answer: $\kappa=\frac14$.**

#### Example 2: Helix curvature

Find the curvature of $\mathbf r(t)=(2\cos t,2\sin t,t)$.

- Velocity length is $\sqrt5$; acceleration length is 2, and they are perpendicular.
- The cross-product length is $2\sqrt5$; divide by $5\sqrt5$.

**Answer: $\kappa=\frac25$.**

### Common mistakes

- **Faster travel means larger curvature.** Regular reparameterization preserves curvature. Normal acceleration, instead, scales with speed squared.

- **A straight line's principal normal is uniquely given by the formula.** A straight line has zero curvature, so this normalization does not define a principal normal.

### Exercises and solutions

**1. Find the curvature of a radius-2 circle.**

Hint: Use reciprocal radius.

Answer: $\frac12$

- Arc length $ds$ produces turn angle $ds/2$.

**2. Find the curvature of $\mathbf r(t)=(t,0,0)$.**

Hint: Acceleration is zero.

Answer: 0

- The cross product vanishes and speed is 1, so curvature is zero.

**3. If speed doubles on the same circle, what happens to normal acceleration?**

Hint: Keep curvature unchanged.

Answer: Four times

- By $a_N=\kappa v^2$, it quadruples.

**4. Can the cross-product formula be used directly when $\mathbf r\prime(t_0)=0$?**

Hint: Check its denominator.

Answer: No.

- The speed-cubed denominator is zero.
- Choose a regular parameter or analyze separately; division is invalid.

Prerequisites: Cross products, area and normals, Velocity, acceleration and distance.

## Chapter review

Try independently before reading the solutions.

**1. Find the arc length of $\mathbf r(t)=(3t,4t,0)$ from zero to 2.**

Hint: Speed is constant.

Answer: 10

- Speed 5 times time 2 gives 10.

**2. A radius-2 circle is traveled at speed 3. Find normal acceleration magnitude.**

Hint: Compute curvature first.

Answer: $\frac92$

- Curvature $1/2$ times speed squared 9.

**3. Find curvature of trajectory $(\cos(2t),\sin(2t),t)$.**

Hint: Find velocity and acceleration, then use perpendicularity.

Answer: $\frac45$

- Velocity length is $\sqrt5$; acceleration length is 4; their dot product is zero.
- Cross-product length $4\sqrt5$, divided by $5\sqrt5$.

# Chapter 3 · Multivariable change and differentiation

Partials inspect coordinate directions. Differentiability requires one linear model for every small displacement. Gradients and the chain rule put that model to work.

Goals:
- Check multivariable limits
- Distinguish existing partials from differentiability
- Predict directional change with gradients

## 3.1 Multivariable functions and level sets

*Assign one value to each input position*

### The idea

A two-variable function assigns height to each allowed planar position. A contour joins positions with the same height.

### Intuition

Color maps and contours encode heights. A surface shows shape; contours make directions easier to read.

### Another explanation

The domain lies in the input plane; the graph raises output into height, while contours retain equal-height positions.

### Quick check

Is $x^2+y^2=0$ a circular curve?

A. An ordinary circle
B. A single point
C. The empty set

Answer: B. Only the origin satisfies it. Level sets need not be regular curves.

### Finding the domain

Require nonnegative radicands, positive logarithm arguments and nonzero denominators. Intersect the conditions to find a planar or spatial region.

### Graph versus contour

A graph displays output as height. A contour stays in the input plane with output fixed. Contours of different values cannot intersect.

### Displaying three-variable functions

Three input coordinates already fill space. Use level surfaces or slices for output; the four-dimensional graph is not an ordinary spatial surface.

### Definition and conditions

Assign one value to each input position

$$
G_f=\{(x,y,f(x,y)):(x,y)\in D\},\quad L_c=\{(x,y)\in D:f(x,y)=c\}
$$

- The function is single-valued on its domain. Level sets may be empty, points, curves or regions, and need not be smooth.

### Derivation

Specify allowed inputs.

$$
D\subseteq\mathbb R^2
$$

Fix the output to obtain a level set.

$$
f(x,y)=c
$$

Use coordinate slices to inspect height changes.

$$
g(x)=f(x,y_0)
$$

### Interactive diagram

When moving in the plane, which coordinates are inputs and which is output?

Surface $z=x^2+y^2$ with a fixed-first-coordinate slice; the projection marks corresponding inputs.

Online diagram: #/lesson/c3-surfaces?view=visual

### Guided experiment

1. **Central slice** Set fixed coordinate $x$ to $0$.

Preset observation: The slice passes through the bowl's bottom, with minimum height zero.

2. **Shift the slice** Set fixed coordinate $x$ to $0.5$.

Preset observation: The entire slice rises.

3. **A farther slice** Set fixed coordinate $x$ to $1$.

Preset observation: The minimum height is 1.

### Worked examples

#### Example 1: A radical's domain

Find the domain of $f(x,y)=\sqrt{9-x^2-y^2}$.

- The radicand must be nonnegative, giving $x^2+y^2\le9$.
- Zero radicand is allowed on the boundary.

**Answer: The closed radius-3 disk.**

#### Example 2: A contour

Find the height-4 contour of $f(x,y)=x^2+4y^2$.

- Set the output to 4.
- Rewrite as $x^2/4+y^2=1$.

**Answer: An ellipse with semiaxes 2 and 1.**

### Common mistakes

- **The graph of a two-variable function is a planar region.** The planar region is its domain; the graph is usually a spatial surface.

- **Dense contours always mean high elevation.** With equal contour intervals and scale, density indicates rapid change, not absolute height.

### Exercises and solutions

**1. Find the domain of $\ln(y-x^2)$.**

Hint: The logarithm's input must be strictly positive.

Answer: $y>x^2$.

- $y-x^2>0$; exclude the boundary parabola.

**2. Find the zero-level set of $x^2+y^2$.**

Hint: Squares are nonnegative.

Answer: The origin.

- Both coordinates must vanish.

**3. Can contours of different heights intersect?**

Hint: Is a function's output unique?

Answer: No.

- An intersection would assign two different outputs to one input.

**4. What does a level surface of a three-variable temperature function represent?**

Hint: Fix temperature, keeping spatial locations.

Answer: The set of positions with the same temperature.

- It contains every point at the specified temperature.

Prerequisites: Quadric surfaces and cross-sections.

## 3.2 Multivariable limits and continuity

*Every approach must lead to the same value*

### The idea

A multivariable limit controls every approach within the domain. Two conflicting paths disprove it; finitely many agreeing paths do not prove it.

### Intuition

Approach one junction by different roads. Conflicting limiting heights prevent a common limit.

### Another explanation

Two conflicting paths disprove a limit; proving one requires an estimate valid in all directions.

### Quick check

Two path limits differ. What follows?

A. The limit does not exist
B. Average the two limits
C. Only nondifferentiability

Answer: A. One limit must apply along every legitimate path.

### What becomes small?

Euclidean input distance becomes small, forcing output error small. The chosen radius must work for all allowed directions.

### What can path tests establish?

Two legitimate paths with different limits disprove existence. Finitely many agreeing paths do not suffice; even all straight lines may miss a curved-path failure.

### Proving existence

Bound output error by a quantity depending only on distance and tending to zero. Continuity additionally requires agreement with the value at the point.

### Definition and conditions

Every approach must lead to the same value

$$
\forall\varepsilon>0\ \exists\delta>0:\quad0<\|\mathbf x-\mathbf a\|<\delta\ \Longrightarrow\ |f(\mathbf x)-L|<\varepsilon
$$

- Approach within the domain toward an accumulation point. Continuity also requires the target in the domain and $L=f(\mathbf a)$.

### Derivation

Vary straight-line slope to inspect path values.

$$
f(x,y)=\frac{xy}{x^2+y^2},\quad f(t,mt)=\frac m{1+m^2}
$$

Two conflicting path limits give a contradiction.

$$
m=0\Rightarrow0,\quad m=1\Rightarrow\frac12
$$

A uniform estimate proves the limit in another example.

$$
\left|\frac{x^2y}{x^2+y^2}\right|\le|y|\le\sqrt{x^2+y^2}
$$

### Interactive diagram

As distance shrinks, do values from different directions merge?

$f(x,y)=\frac{xy}{x^2+y^2}$ approaches the origin at direction angle $\theta$. Finite paths illustrate a counterexample, not existence.

Online diagram: #/lesson/c3-multivariable-limits?view=visual

### Guided experiment

1. **Along the first axis** Set direction angle $\theta$ to $0$.

Preset observation: The path height is always zero.

2. **Along the diagonal** Set direction angle $\theta$ to $\frac\pi4$.

Preset observation: Height is one-half, unlike on the axis.

3. **Look closer** Set origin distance $h$ to $0.0001$.

Preset observation: The directional difference remains even at small distance; zooming does not remove it.

### Worked examples

#### Example 1: Conflicting paths

Does $\frac{xy}{x^2+y^2}$ have a limit at the origin?

- Along the first axis, the function is zero.
- Along $y=x$, it equals $1/2$; the limits conflict.

**Answer: No limit.**

#### Example 2: A uniform squeeze

Find the origin limit of $\frac{x^2y}{x^2+y^2}$.

- Its magnitude is at most $|y|$.
- Also $|y|\le\sqrt{x^2+y^2}\to0$, valid for every approach.

**Answer: 0.**

### Common mistakes

- **Matching limits on both axes prove existence.** Only two paths were checked; control every direction together.

- **A limit requires a defined value at the point.** Limits concern nearby values; the target itself may be outside the domain.

### Exercises and solutions

**1. Does $\frac{x^2-y^2}{x^2+y^2}$ have a limit at the origin?**

Hint: Compare coordinate axes.

Answer: No.

- The first gives 1; the second gives $-1$, a contradiction.

**2. Prove $x^2y\to0$.**

Hint: Control both coordinates by distance.

Answer: The limit is 0.

- Set $r=\sqrt{x^2+y^2}$; then $|x^2y|\le r^3$.
- Let $r\to0$; the right side tends to zero.

**3. If every straight-line limit is zero, must the full limit be zero?**

Hint: Try a curved path.

Answer: No.

- $\frac{x^2y}{x^4+y^2}$ tends to zero along each line through the origin.
- But along $y=x^2$, it is constantly $1/2$.

**4. Can assigning an origin value make $\frac{xy}{x^2+y^2}$ continuous?**

Hint: Would that alter nearby paths?

Answer: No.

- The path conflict is independent of the origin's value.
- No assigned value can repair a missing limit.

Prerequisites: Multivariable functions and level sets, $\varepsilon$–$\delta$: Making Closeness Precise.

## 3.3 Partial and higher-order derivatives

*Change one input at a time*

### The idea

A partial derivative measures instantaneous change in one variable while all others stay fixed.

### Intuition

Slice a surface in a coordinate direction and differentiate that single-variable curve. Different directions may have different slopes.

### Another explanation

A partial derivative changes one input alone; the other is fixed for that calculation.

### Quick check

When differentiating $x^2y$ in its first variable, how is the second treated?

A. It varies with the first
B. It is constant
C. It must be zero

Answer: B. Partial differentiation fixes all other independent variables.

### What happens to other variables?

Hold the second variable constant when differentiating in the first, then reverse roles. A partial derivative describes one slice, not a uniform approximation in every direction.

### Can mixed derivatives be exchanged?

Continuity of the second mixed derivatives nearby is sufficient. Without suitable conditions, do not interchange the order by notation alone.

### Do existing partials imply smoothness?

They need not even imply continuity, let alone differentiability. Normal axis slices can hide diagonal anomalies.

### Definition and conditions

Change one input at a time

$$
f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}h,\quad f_{xy}=\frac\partial{\partial y}(f_x)
$$

- Difference quotients stay within the domain. Continuous second mixed partials near the point suffice to interchange them.

### Derivation

Fix one variable.

$$
g(x)=f(x,b)
$$

Differentiate the resulting one-variable slice.

$$
g\prime(a)=f_x(a,b)
$$

Differentiate that partial-derivative function again.

$$
f_{xy}=\frac\partial{\partial y}\left(\frac{\partial f}{\partial x}\right)
$$

### Interactive diagram

Does the first-direction slope stay the same at different points?

Surface $z=x^2+y^2$ at $(a,b,a^2+b^2)$, with coordinate slices and tangents. Gold follows the first direction, blue the second; slopes are $2a$, $2b$.

Online diagram: #/lesson/c3-partials?view=visual

### Guided experiment

1. **First direction** Use $a=-1,b=0$ and inspect the gold tangent.

Preset observation: The first partial is $-2$, the second zero. They belong to distinct slices.

2. **Change the second coordinate only** Keep $a=-1$ and change $b$ to $1$.

Preset observation: The first partial stays $-2$, while the second becomes $2$; it is not always zero.

3. **Compare at one point** Use $a=0.5,b=-0.5$ and compare both tangents.

Preset observation: At this point the first slope is $1$, the second $-1$. Each requires holding the other variable fixed.

### Worked examples

#### Example 1: Separate derivatives

Find both partials of $f=x^2y+\sin y$.

- Fixing the second variable gives $f_x=2xy$.
- Fixing the first gives $f_y=x^2+\cos y$.

**Answer: $f_x=2xy,f_y=x^2+\cos y$.**

#### Example 2: Checking mixed derivatives

Find both mixed partials of $f=x^2y^3$.

- $f_x=2xy^3$; differentiating in the second variable gives $6xy^2$.
- Reverse order also gives $6xy^2$. Polynomial smoothness meets the continuity condition.

**Answer: Both equal $6xy^2$.**

### Common mistakes

- **The other variable has derivative one.** It is fixed here, so its derivative is zero.

- **Existing partial derivatives imply continuity.** Axis checks are insufficient; the multivariable limit may fail.

### Exercises and solutions

**1. Find $f_x$ for $f=e^{xy}$.**

Hint: The inner first-variable derivative is the second variable.

Answer: $ye^{xy}$.

- The chain rule gives $f_x=ye^{xy}$.

**2. For $f=x^2+3xy+y^2$ at $(1,2)$, find $f_y$.**

Hint: Differentiate first, then substitute the point.

Answer: 7

- $f_y=3x+2y$.
- Substitution gives 7.

**3. For $g=\frac{xy}{x^2+y^2}$, extended by zero at the origin, find both origin partials.**

Hint: Use axis difference quotients.

Answer: Both partials are zero, yet the function is discontinuous.

- The function vanishes on both axes, so both quotients are zero.
- Its diagonal values do not tend to zero, so continuity fails.

**4. Can mixed partials always be interchanged?**

Hint: State the hypotheses.

Answer: Not unconditionally.

- Continuous second mixed partials nearby suffice.
- Otherwise calculate both orders or give another justification.

Prerequisites: Multivariable functions and level sets, Basic Differentiation Rules.

## 3.4 Differentiability, tangent planes and error

*Can one plane predict every small displacement?*

### The idea

Differentiability means one linear expression explains the increment, with remainder negligible relative to displacement length.

### Intuition

A tangent plane must approximate all nearby directions, not merely match two coordinate tangents.

### Another explanation

Subtract the linear prediction and divide by displacement length. Differentiability means this ratio tends to zero.

### Quick check

For a differentiable function, what does remainder divided by displacement length approach?

A. Zero
B. One
C. Any constant

Answer: A. The error beyond the linear term must be negligible compared with distance.

### What goes beyond partial derivatives?

Partials test coordinate directions. Differentiability requires uniformly smaller-than-first-order error in every direction. It implies continuity; partials alone do not.

### A practical sufficient condition

Continuous partial derivatives in a neighborhood guarantee differentiability. This is not necessary, so failure does not prove nondifferentiability.

### Approximation versus equality

The tangent plane gives first-order approximation. Bound actual error separately; do not assume accuracy far from the center.

### Definition and conditions

Can one plane predict every small displacement?

$$
f(a+h,b+k)=f(a,b)+f_x(a,b)h+f_y(a,b)k+o(\sqrt{h^2+k^2})
$$

- Little $o$ means remainder divided by displacement length tends to zero. Tangent-plane approximation requires differentiability, guaranteed by continuous partials nearby.

### Derivation

Define the linear model's remainder.

$$
R=f(a+h,b+k)-f(a,b)-f_xh-f_yk
$$

Compare it with displacement length.

$$
\lim_{(h,k)\to(0,0)}\frac{R}{\sqrt{h^2+k^2}}=0
$$

Expand the sum of squares directly to check.

$$
(a+h)^2+(b+k)^2=a^2+b^2+2ah+2bk+h^2+k^2
$$

### Interactive diagram

If displacement shrinks tenfold, about how much does quadratic error shrink?

The tangent plane of $f=x^2+y^2$ at $(0.5,0.5)$; along diagonal displacement $(h,h)$, compare exact and normalized errors.

Online diagram: #/lesson/c3-differentiability?view=visual

### Guided experiment

1. **Larger displacement** Set diagonal displacement $h$ to $1$.

Preset observation: A visible quadratic error separates bowl and tangent plane.

2. **Reduce displacement** Set diagonal displacement $h$ to $0.2$.

Preset observation: Error shrinks faster than distance.

3. **Approach the center** Set diagonal displacement $h$ to $0.0001$.

Preset observation: The remainder-to-distance ratio keeps approaching zero; calculations retain finite precision.

### Worked examples

#### Example 1: A tangent plane

Find the tangent plane of $f=x^2+y^2$ at $(1,-1)$.

- Value is 2 and gradient $(2,-2)$.
- The linear model is $2+2(x-1)-2(y+1)$.

**Answer: $z=2x-2y-2$.**

#### Example 2: Approximation and error

Use origin linearization to approximate $f(0.1,0.2)$, with $f=1+x+y+x^2+y^2$.

- The linear model gives $1+0.1+0.2=1.3$.
- The actual value is $1.35$; error $0.05$ is exactly the sum of squares.

**Answer: Approximation 1.3; actual error 0.05.**

### Common mistakes

- **Existing partials guarantee a tangent-plane approximation.** Establish differentiability first; partials only suggest a candidate linear model.

- **A remainder tending to zero proves differentiability.** It must tend to zero after division by displacement length, a stronger requirement than continuity.

### Exercises and solutions

**1. What is the linearization error for $f=3x-2y+1$?**

Hint: The function is already a plane.

Answer: 0

- The linear model equals the function exactly.

**2. For $f=x^2+y^2$ at the origin, find remainder divided by distance.**

Hint: Set distance to $r$.

Answer: $r=\sqrt{x^2+y^2}$.

- Remainder $r^2$ divided by $r>0$ gives $r$.
- This tends to zero, proving differentiability.

**3. Is $f=\sqrt{x^2+y^2}$ differentiable at the origin?**

Hint: Inspect the first-axis partial.

Answer: Not differentiable.

- The slice is $|x|$, without an origin derivative.
- Therefore the original function is not differentiable.

**4. Do discontinuous partials always imply nondifferentiability?**

Hint: Separate sufficient from necessary conditions.

Answer: Not necessarily.

- Continuous partials are sufficient.
- If that condition fails, the remainder definition may still apply; do not reject differentiability automatically.

Prerequisites: Partial and higher-order derivatives, Linear Approximation and Differentials.

## 3.5 The multivariable chain rule and implicit functions

*Add contributions from every changing input*

### The idea

When a quantity depends on several intermediate variables, sum the products of local rates along every dependency path.

### Intuition

Along a mountain path, both eastward and northward motion change height. Add their contributions.

### Another explanation

Find how each intermediate variable changes, then add its contribution.

### Quick check

What is the rate when moving along a contour?

A. Always positive
B. Zero
C. Equal to distance traveled

Answer: B. Constant function value makes the chain-rule sum zero.

### Why add contributions?

The linear increment is a sum of coordinate contributions. Substitute each coordinate's parameter change into that sum.

### Several input parameters

Track each input's paths separately, forming a derivative matrix. Matrix multiplication organizes these sums.

### Implicit differentiation

If $F(x,y)=0$ and $F_y\ne0$, continuous partials nearby allow the second coordinate locally as a differentiable function of the first. Differentiate the identity. Do not use the quotient when its denominator vanishes.

### Definition and conditions

Add contributions from every changing input

$$
\frac{d}{dt}f(x(t),y(t))=f_x\,x\prime+f_y\,y\prime,\quad\frac{dy}{dx}=-\frac{F_x}{F_y}
$$

- The outer function is differentiable at the path point and inner functions differentiable. The implicit-function conclusion requires $F$ continuously differentiable nearby and $F_y\ne0$.

### Derivation

Write the outer function's linear increment.

$$
df=f_xdx+f_ydy
$$

Divide by the time increment and take limits.

$$
\frac{df}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}
$$

Differentiate the implicit identity.

$$
F_x+F_y y\prime=0
$$

### Interactive diagram

Can the total rate vanish when both partials are nonzero?

Move on the unit circle on bowl $z=x^2+y^2$; observe the two coordinate contributions cancel.

Online diagram: #/lesson/c3-chain?view=visual

### Guided experiment

1. **Path start** Set path parameter $t$ to $0$.

Preset observation: Start at $(1,0)$, at height 1.

2. **Path midpoint** Set path parameter $t$ to $\frac\pi4$.

Preset observation: Height stays 1 along the unit circle.

3. **Path endpoint** Set path parameter $t$ to $\frac\pi2$.

Preset observation: Position and direction change while the total height rate remains zero.

### Worked examples

#### Example 1: Differentiating along a path

Given $f=x^2y,x=t,y=t^2$, find the derivative along the path.

- The chain rule gives $2xy\cdot1+x^2\cdot2t$.
- Substitution gives $4t^3$; check by substituting $f=t^4$ first.

**Answer: $4t^3$.**

#### Example 2: An implicit slope

Find the slope of ellipse $x^2+4y^2=8$ at $(2,1)$.

- $F_x=2x,F_y=8y$; the denominator is 8 at that point.
- The slope is $-4/8$.

**Answer: $-\frac12$.**

### Common mistakes

- **Only one changing direction contributes to the chain rule.** Every input varying with the parameter contributes.

- **A zero implicit denominator means the derivative is infinity.** The formula fails; inspect vertical tangency or more serious degeneracy.

### Exercises and solutions

**1. Given $f=x+y,x=t^2,y=\sin t$, find the rate at time zero.**

Hint: Differentiate along both dependency paths.

Answer: 1

- $2t+\cos t$ equals 1 at zero.

**2. Find the rate of $f=x^2+y^2$ along $x=\cos t,y=\sin t$.**

Hint: Check the identity first.

Answer: 0

- The function is constantly 1 along the path, so its derivative is zero.
- The two chain-rule contributions cancel.

**3. For $x^2+y^2=1$ at $(1,0)$, can you use $-x/y$?**

Hint: Check the denominator and tangent.

Answer: No.

- The denominator vanishes; the second coordinate is not locally differentiable as a function of the first here.
- The circle has a vertical tangent.

**4. Given $F(x,y,z)=0,F_z\ne0$, find local $z_x$.**

Hint: Fix the second variable and differentiate the identity in the first.

Answer: $-\frac{F_x}{F_z}$.

- $F_x+F_z z_x=0$.
- This gives $z_x=-F_x/F_z$.

Prerequisites: Differentiability, tangent planes and error, The Chain Rule.

## 3.6 Directional derivatives and gradients

*Find the steepest ascent direction*

### The idea

For a differentiable function, the gradient encodes every directional first-order rate in one vector.

### Intuition

The gradient points steepest uphill. Perpendicular directions have zero first-order height change and lie tangent to contours.

### Another explanation

Project the gradient onto a unit direction to obtain that direction's first-order rate.

### Quick check

A unit direction is perpendicular to the gradient. What is its directional derivative?

A. The gradient length
B. Zero
C. Undefined

Answer: B. The dot product is zero, but second-order changes may remain.

### Why normalize the direction?

Directional derivatives measure change per unit distance. Nonunit vectors mix in travel speed; time-path derivatives instead use the actual velocity.

### How steep is the steepest ascent?

A dot product is at most the product of lengths. A unit direction aligned with the gradient gives its length; the opposite gives its negative.

### Why normal to a level surface?

A tangent movement preserves function value, so its dot product with the gradient vanishes. A zero gradient cannot specify a unique normal.

### Definition and conditions

Find the steepest ascent direction

$$
D_{\mathbf u}f=\nabla f\cdot\mathbf u,\quad\|\mathbf u\|=1,\quad\nabla f=\langle f_x,f_y,f_z\rangle
$$

- The dot-product formula requires differentiability. Unit directions give change per unit distance. A regular level-surface normal requires nonzero gradient.

### Derivation

Apply the chain rule along a straight path.

$$
\mathbf r(t)=\mathbf a+t\mathbf u
$$

Its velocity is the unit direction.

$$
\frac d{dt}f(\mathbf r(t))\big|_{t=0}=\nabla f(\mathbf a)\cdot\mathbf u
$$

Bound the dot product to find steepest ascent.

$$
-\|\nabla f\|\le D_{\mathbf u}f\le\|\nabla f\|
$$

### Interactive diagram

What angle separates steepest ascent from zero first-order change?

At $(1,0,1)$, the bowl's gradient points along the positive first axis. Rotate a unit direction and compare slopes.

Online diagram: #/lesson/c3-gradient?view=visual

### Guided experiment

1. **Aligned** Set angle to gradient $\theta$ to $0$.

Preset observation: Alignment gives the maximum directional derivative.

2. **Perpendicular** Set angle to gradient $\theta$ to $\frac\pi2$.

Preset observation: The directional derivative vanishes; only the first-order rate is zero.

3. **Opposing** Set angle to gradient $\theta$ to $\pi$.

Preset observation: The derivative is negative, giving steepest descent.

### Worked examples

#### Example 1: A specified direction

For $f=x^2+2y^2$ at $(1,1)$, find the derivative along $\langle3,4\rangle$.

- The gradient is $\langle2,4\rangle$; normalize the direction to $\langle3/5,4/5\rangle$.
- Their dot product is $6/5+16/5=22/5$.

**Answer: $\frac{22}5$.**

#### Example 2: A level-surface normal

Find the tangent plane of $x^2+y^2+z^2=9$ at $(1,2,2)$.

- The normal is gradient $\langle2,4,4\rangle$.
- The point-normal form simplifies to $x+2y+2z=9$.

**Answer: $x+2y+2z=9$.**

### Common mistakes

- **Directions need no normalization.** Change per unit distance requires a unit vector.

- **Zero gradient means no higher-order change.** First-order rates vanish, but second- or higher-order change may remain.

### Exercises and solutions

**1. Find the maximum directional derivative of $f=3x+4y$.**

Hint: Take the gradient's length.

Answer: 5

- Gradient $(3,4)$ has length 5.

**2. For $f=x^2+y^2$ at $(1,0)$, find the derivative in the positive second-axis direction.**

Hint: Take a gradient dot product.

Answer: 0

- Gradient $(2,0)$ dotted with $(0,1)$ is zero.

**3. A contour-tangent directional derivative vanishes. Is the function constant along that whole straight line?**

Hint: Is first-order information a global statement?

Answer: Not guaranteed.

- Only the first-order rate at that point is zero.
- On a bowl at $(1,0)$, a straight move along the second direction still increases height quadratically.

**4. Does the zero origin gradient of $f=x^2-y^2$ prove a minimum?**

Hint: Compare axes.

Answer: No minimum.

- Values on the first axis are nonnegative; on the second, nonpositive.
- Nearby values lie both above and below, making a saddle.

Prerequisites: The multivariable chain rule and implicit functions, Dot products and projections.

## Chapter review

Try independently before reading the solutions.

**1. Find the derivative of $f=x^2+xy+3y^2$ at $(1,-1)$ along $(1,1)$.**

Hint: Normalize the direction first.

Answer: $-2\sqrt2$.

- Gradient $(1,-5)$ dotted with $(1,1)/\sqrt2$.
- This gives $-4/\sqrt2=-2\sqrt2$.

**2. Find the tangent plane of $z=e^{xy}$ at $(0,1)$.**

Hint: Evaluate value and both partials at the center.

Answer: $z=1+x$.

- Value one; first partial one; second partial zero.
- Tangent plane $z=1+x$.

**3. For $f=\frac{x^2y^2}{x^2+y^2}$, extended by zero at the origin, is it differentiable?**

Hint: Bound the remainder uniformly by distance.

Answer: Differentiable, with zero gradient.

- Both axis partials are zero, and $x^2y^2\le(x^2+y^2)^2/4$.
- Magnitude is at most one-quarter distance squared; division by distance tends to zero.

# Chapter 4 · Local models and optimization

Second-order terms describe bending. Global extrema also require boundary checks. Constraints restrict feasible directions to curves or surfaces.

Goals:
- Classify points with quadratic models
- Check boundaries and degenerate points
- Apply Lagrange multipliers correctly

## 4.1 Second-order Taylor models

*Add the bending a tangent plane misses*

### The idea

Second-order Taylor polynomials record directional curvature and interactions beyond the tangent plane.

### Intuition

Linear terms describe slope; quadratic terms describe bowls, saddles and mixed-direction coupling.

### Another explanation

Join the center to the target by a line and apply single-variable Taylor along it.

### Quick check

Where does a second-order mixed term come from?

A. Interaction between both variables
B. An arbitrary correction
C. It is always zero

Answer: A. Each chain-rule differentiation order contributes.

### What is the Hessian?

The matrix of second partial derivatives. It is symmetric when those derivatives are continuous. Multiplying by displacement on both sides produces a scalar quadratic form.

### Why do mixed terms appear twice?

The two differentiation orders contribute separately; the overall one-half compensates. Do not omit a contribution again.

### Controlling the remainder

Continuous second derivatives give a remainder negligible relative to squared distance. Bounded third derivatives near the connecting segment give a cubic bound via one-variable Taylor.

### Definition and conditions

Add the bending a tangent plane misses

$$
T_2=f+f_xh+f_yk+\frac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2),\quad R=o(h^2+k^2)
$$

- Evaluate coefficients at the center. The function is twice continuously differentiable nearby; explicit cubic bounds require third-order hypotheses.

### Derivation

Restrict the function to the displacement line segment.

$$
g(t)=f(a+th,b+tk)
$$

Apply the chain rule twice to obtain the quadratic form.

$$
g^{\prime\prime}(0)=f_{xx}h^2+2f_{xy}hk+f_{yy}k^2
$$

Apply one-variable Taylor to the segment parameter.

$$
g(1)=g(0)+g\prime(0)+\frac12g^{\prime\prime}(0)+R
$$

### Interactive diagram

Must the second-order model be exact away from its center?

Model $f=e^{x+y}$ to second order at zero; compare exact and approximate heights along $(h,h)$.

Online diagram: #/lesson/c3-taylor?view=visual

### Guided experiment

1. **Larger displacement** Set equal-coordinate displacement $h$ to $0.5$.

Preset observation: The quadratic approximation still has visible remainder.

2. **Small displacement** Set equal-coordinate displacement $h$ to $0.1$.

Preset observation: The quadratic model lies closer than the tangent plane to the exponential surface.

3. **Smaller displacement** Set equal-coordinate displacement $h$ to $0.01$.

Preset observation: The cubic bound decreases further; exact equality still needs a remainder.

### Worked examples

#### Example 1: An exponential model

Find the second-order polynomial of $f=e^{x+y}$ at the origin.

- Constant 1; linear term $x+y$.
- Quadratic term $(x+y)^2/2=x^2/2+xy+y^2/2$.

**Answer: $1+x+y+\frac{x^2}2+xy+\frac{y^2}2$.**

#### Example 2: An explicit error

Use this model for $e^{0.1+0.1}$, with a bound.

- The polynomial gives $1+0.2+0.02=1.22$.
- The exponential remainder along the segment is at most $e^{0.2}(0.2)^3/6<0.00163$.

**Answer: Approximation 1.22; error below 0.00163.**

### Common mistakes

- **Second-order terms contain only pure squares.** Mixed terms matter and can change diagonal bending.

- **The Taylor polynomial equals the original function.** It is usually a local approximation; retain the remainder in exact equalities.

### Exercises and solutions

**1. Find the origin Hessian of $x^2+3xy+2y^2$.**

Hint: Differentiate again in both variables.

Answer: $\begin{pmatrix}2&3\\3&4\end{pmatrix}$.

- Pure second partials are 2 and 4; mixed partials are 3.

**2. Find the second-order origin polynomial of $\sin(x+y)$.**

Hint: Sine's second derivative at zero vanishes.

Answer: $x+y$.

- Constant zero; linear term $x+y$; every quadratic term vanishes.

**3. In the origin second-order expansion of $e^{x+y}$, what is the coefficient of $xy$?**

Hint: Expand the square or count both contributions.

Answer: 1

- $\frac12(2xy)=xy$; coefficient 1.

**4. Do second partials existing at one point suffice for this remainder theorem?**

Hint: Check neighborhood hypotheses.

Answer: Not enough to apply it directly.

- The theorem requires twice continuous differentiability nearby.
- Values at a single point do not establish that sufficient condition.

Prerequisites: The multivariable chain rule and implicit functions, Differentiability, tangent planes and error, Taylor remainders and error bounds.

## 4.2 Critical points and the second-derivative test

*After zero gradient, inspect bending*

### The idea

A differentiable interior extremum must have zero gradient. Second-order shape distinguishes a bowl bottom, top or saddle.

### Intuition

Zero slope looks flat to first order. Inspect whether nearby directions all rise, all fall or do both.

### Another explanation

Zero gradient selects candidates. Opposite quadratic signs in different directions give a saddle.

### Quick check

What does $D=0$ imply?

A. A saddle for certain
B. No extremum for certain
C. This test is inconclusive

Answer: C. Higher-order terms or direct comparison may decide.

### What counts as a critical point?

Candidates include domain points where the gradient vanishes or does not exist. The second-order test applies only to sufficiently smooth stationary points.

### What does the determinant test?

A positive-definite Hessian bends up in every direction; negative-definite bends down; indefinite gives a saddle. The two-variable discriminant is its determinant.

### What if the determinant is zero?

The quadratic term may be insufficient. Inspect higher terms or use the definition; do not declare a saddle automatically.

### Definition and conditions

After zero gradient, inspect bending

$$
D=f_{xx}f_{yy}-f_{xy}^2:\quad D>0,f_{xx}>0\Rightarrow\min;\quad D>0,f_{xx}<0\Rightarrow\max;\quad D<0\Rightarrow\text{saddle}
$$

- The function is twice continuously differentiable near a zero-gradient point. The conclusions give strict local extrema; $D=0$ is inconclusive.

### Derivation

An interior extremum restricts to an extremum on each coordinate line.

$$
f_x=f_y=0
$$

The quadratic model controls signs of sufficiently small displacements.

$$
f(a+h,b+k)-f(a,b)=\frac12\begin{pmatrix}h&k\end{pmatrix}H\binom hk+o(h^2+k^2)
$$

Completing the square gives the two-dimensional criterion.

$$
f_{xx}h^2+2f_{xy}hk+f_{yy}k^2=f_{xx}\left(h+\frac{f_{xy}}{f_{xx}}k\right)^2+\frac D{f_{xx}}k^2
$$

### Interactive diagram

Why can the origin change from minimum to saddle while its gradient stays zero?

Vary one Hessian coefficient in $f=x^2+c y^2$ to see a bowl, degenerate valley and saddle.

Online diagram: #/lesson/c3-critical-points?view=visual

### Guided experiment

1. **Positive definite** Set second-direction quadratic coefficient $c$ to $1$.

Preset observation: Both directions rise; the origin is a bowl bottom.

2. **Degenerate** Set second-direction quadratic coefficient $c$ to $0$.

Preset observation: The second direction is flat; the test gives no strict minimum.

3. **Indefinite** Set second-direction quadratic coefficient $c$ to $-1$.

Preset observation: The second direction falls; the origin is a saddle.

### Worked examples

#### Example 1: A bowl with a mixed term

Classify the origin of $f=x^2+xy+y^2$.

- Its origin gradient vanishes.
- $D=2\cdot2-1=3>0$ and $f_{xx}=2>0$.

**Answer: A strict local minimum, also the global minimum.**

#### Example 2: A degenerate minimum

Classify the origin of $f=x^4+y^4$.

- All origin second partials vanish; the test is inconclusive.
- The function is nonnegative and vanishes only at the origin.

**Answer: A strict global minimum.**

### Common mistakes

- **Zero gradient always implies a minimum.** Maxima and saddles can also have zero gradient.

- **Zero determinant rules out an extremum.** It only makes this test inconclusive.

### Exercises and solutions

**1. Classify the origin of $f=-x^2-2y^2$.**

Hint: Inspect quadratic signs.

Answer: A strict maximum.

- Every nearby nonorigin value is negative; the origin is zero.

**2. Classify the origin of $f=xy$.**

Hint: Compare the diagonals.

Answer: A saddle point.

- Along $y=x$, the value is $x^2$; along $y=-x$, it is $-x^2$.

**3. The origin Hessian of $f=x^4-y^4$ is zero. Classify it.**

Hint: Use higher-order terms.

Answer: A saddle point.

- Values rise along the first axis and fall along the second.

**4. Can the second-derivative test directly classify boundary extrema?**

Hint: Are all directions still allowed?

Answer: No.

- Boundary constraints may invalidate even the zero-gradient necessary condition.
- Analyze the boundary separately.

Prerequisites: Second-order Taylor models, Directional derivatives and gradients.

## 4.3 Global extrema on closed regions

*Check interior, boundary and corners*

### The idea

A continuous function on a nonempty closed bounded region attains its maximum and minimum. Compare all candidates.

### Intuition

A room's highest point may be in the interior, along a wall or at a corner. Interior stationary points alone miss the edges.

### Another explanation

Establish attainment, then compare interior, boundary and corner candidates together.

### Quick check

Should global-extremum candidates include the boundary?

A. Only where gradient vanishes
B. Yes, including corners and endpoints
C. No

Answer: B. Interior necessary conditions cannot replace boundary checks.

### What guarantees attainment?

A nonempty closed bounded subset of Euclidean space is compact. Continuous functions on it attain extrema. Missing hypotheses require another argument.

### Analyzing boundaries

Parametrize each boundary piece as a one-variable problem. Include endpoints, corners and nondifferentiable points, then compare with interior candidates.

### Unbounded regions

Growth at infinity sometimes reduces the problem to a bounded region. Sometimes a supremum or infimum is never attained. Distinguish a maximum from an upper bound.

### Definition and conditions

Check interior, boundary and corners

$$
\min_D f,\max_D f\in f(D)\quad\text{if }D\ne\varnothing\text{ is compact and }f\text{ is continuous}
$$

- Existence here requires a nonempty closed bounded domain and continuity. Calculations must also handle boundary pieces and nondifferentiable points.

### Derivation

Smooth interior candidates have zero gradient.

$$
\nabla f=0
$$

Restrict each boundary piece to one variable.

$$
g(t)=f(\mathbf r(t))
$$

Compare all feasible candidate values.

$$
\min\{f(p_i)\},\quad\max\{f(p_i)\}
$$

### Interactive diagram

Must the boundary minimum be the disk's global minimum?

Compare values at target $(1,0)$ inside the disk and at a moving boundary point.

Online diagram: #/lesson/c3-closed-domains?view=visual

### Guided experiment

1. **Nearest boundary point** Set direction angle $\theta$ to $0$.

Preset observation: The radius-2 boundary point is squared distance 1 from $(1,0)$.

2. **Side boundary** Set direction angle $\theta$ to $\frac\pi2$.

Preset observation: Its function value is 5.

3. **Farthest boundary point** Set direction angle $\theta$ to $\pi$.

Preset observation: The boundary value reaches 9; the global minimum remains inside.

### Worked examples

#### Example 1: Squared distance on a disk

Find extrema of $f=(x-1)^2+y^2$ on $x^2+y^2\le4$.

- Interior point $(1,0)$ gives zero.
- On the boundary set $(x,y)=(2\cos t,2\sin t)$; the function is $5-4\cos t$, with maximum 9.

**Answer: Minimum 0; maximum 9.**

#### Example 2: An open-domain warning

Does $f=x+y$ have a maximum and minimum on $0<x<1,0<y<1$?

- Values lie strictly between zero and 2.
- They approach endpoint values without attaining them.

**Answer: Neither is attained; infimum 0, supremum 2.**

### Common mistakes

- **Continuity guarantees extrema on every domain.** Domain hypotheses or another argument are needed.

- **Stop after finding interior stationary points.** Global extrema may occur on boundaries or corners.

### Exercises and solutions

**1. Find the maximum of $f=x+y$ on the closed unit square.**

Hint: Check allowed coordinate endpoints.

Answer: 2

- Both coordinates equal 1, giving 2.

**2. Find the minimum of $f=x^2+y^2$ on the closed radius-3 disk.**

Hint: Is the origin allowed?

Answer: 0

- It is in the domain and the function is nonnegative.

**3. Does $f=x$ have a maximum over the plane?**

Hint: Travel outward along the positive first axis.

Answer: No.

- The first coordinate and function value are unbounded.

**4. Must an extremal corner on a closed region have zero gradient?**

Hint: Compare with a one-variable endpoint.

Answer: No.

- Allowed directions at a corner are restricted; interior Fermat conditions do not apply directly.
- Include corners separately.

Prerequisites: Critical points and the second-derivative test, Parametric equations and motion.

## 4.4 Lagrange multipliers and constrained extrema

*At an optimum, feasible directions have zero first-order change*

### The idea

On a smooth equality constraint, an extremal objective gradient is normally parallel to the constraint gradient. Multipliers express that alignment.

### Intuition

If the objective gradient has a feasible tangent component, moving one way still increases the objective. At a regular extremal candidate, normals align.

### Another explanation

At an extremum, feasible tangents cannot increase the objective to first order; its gradient lies in the constraint-normal direction.

### Quick check

What follows solving the multiplier equations?

A. Declare a maximum immediately
B. Compare values and check singularities, boundaries and existence
C. Ignore the constraint

Answer: B. Multipliers give necessary conditions, not automatic optimality.

### Why not set the objective gradient to zero?

The constraint restricts directions. The objective can rise in forbidden directions while no allowed direction increases it.

### What points may be missed?

A zero constraint gradient can invalidate the multiplier condition. Check singular points separately, as well as boundaries, inequalities and escape to infinity.

### Multiple constraints

With independent constraint gradients, the objective gradient is their linear combination. Otherwise inspect degeneracy and potentially missed candidates.

### Definition and conditions

At an optimum, feasible directions have zero first-order change

$$
\nabla f=\lambda\nabla g,\quad g=c;\qquad \nabla f=\lambda\nabla g+\mu\nabla h
$$

- Functions and constraints are continuously differentiable nearby. A single constraint needs nonzero gradient; multiple constraints need independent gradients. Solutions are only candidates: compare them and check omissions.

### Derivation

Feasible tangents are perpendicular to the constraint gradient.

$$
\nabla g\cdot\mathbf v=0
$$

An extremum has zero first-order change along every feasible tangent.

$$
\nabla f\cdot\mathbf v=0
$$

The two normals are therefore parallel.

$$
\nabla f=\lambda\nabla g
$$

### Interactive diagram

Must parallel gradients indicate a maximum?

Move on the unit circle with objective $f=2x+y$; compare objective and constraint gradients.

Online diagram: #/lesson/c3-lagrange?view=visual

### Guided experiment

1. **Aligned candidate** Set direction angle $\theta$ to $0.463648$.

Preset observation: Position aligns with $(2,1)$; the linear objective is maximal.

2. **Perpendicular direction** Set direction angle $\theta$ to $2.03444$.

Preset observation: The objective is zero, neither maximum nor minimum here.

3. **Opposing candidate** Set direction angle $\theta$ to $3.60524$.

Preset observation: Position opposes the objective gradient, giving the minimum.

### Worked examples

#### Example 1: A linear objective on a circle

Find extrema of $f=2x+y$ subject to $x^2+y^2=5$.

- $(2,1)=\lambda(2x,2y)$, so $(x,y)$ and $(2,1)$ are parallel.
- The constraint gives $(2,1)$ and $(-2,-1)$, with objective values plus and minus 5.

**Answer: Maximum 5; minimum $-5$.**

#### Example 2: A product on a sphere

Maximize $xy$ subject to $x^2+y^2+z^2=2$.

- $2xy\le x^2+y^2\le2$, hence $xy\le1$.
- Equality occurs at $(1,1,0)$ and $(-1,-1,0)$, checking the multiplier candidates.

**Answer: Maximum 1.**

### Common mistakes

- **Every multiplier solution is an extremum.** It is only a candidate and may not be optimal.

- **A zero constraint gradient rules out extrema.** It invalidates regularity, not optimality. Check singular points separately.

### Exercises and solutions

**1. Find the maximum of $x+y$ on the unit circle.**

Hint: Use parallel gradients or a dot-product bound.

Answer: $\sqrt2$.

- $(1,1)\cdot(x,y)\le\sqrt2$.
- Equality occurs at $(1/\sqrt2,1/\sqrt2)$.

**2. Minimize $x^2+y^2$ on line $x+y=4$.**

Hint: Eliminate one variable.

Answer: 8

- $x^2+(4-x)^2=2(x-2)^2+8$.

**3. For constraint $x^2+y^2=0$, minimize $f=x$. Do ordinary multiplier equations find a candidate?**

Hint: The feasible set is a single point.

Answer: No; inspect the singular point separately.

- The origin is necessarily the optimum, but the constraint gradient is zero.
- The objective gradient is nonzero, so the ordinary equations cannot hold.

**4. When may two-constraint multiplier necessary conditions be applied directly?**

Hint: Check independence of normals.

Answer: Under smoothness and independent constraint gradients.

- All functions must be continuously differentiable and both constraint gradients independent there.

Prerequisites: Directional derivatives and gradients, Global extrema on closed regions.

## Chapter review

Try independently before reading the solutions.

**1. Find the global minimum of $f=x^2+4y^2-2x+8y$.**

Hint: Complete squares rather than just solving for stationary points.

Answer: $-5$

- $f=(x-1)^2+4(y+1)^2-5$.
- The squared terms are nonnegative, with equality at $(1,-1)$.

**2. Find maximum and minimum of $f=xy$ on $x^2+y^2\le2$.**

Hint: Bound the product above and below, then find equality points.

Answer: Maximum 1; minimum $-1$.

- $(x-y)^2\ge0$ gives $xy\le1$; $(x+y)^2\ge0$ gives $xy\ge-1$.
- The bounds are attained at $(1,1)$ and $(1,-1)$ respectively.

**3. Find the second-order origin model of $f=e^{x-y}$.**

Hint: Apply the one-variable exponential expansion to the difference.

Answer: $1+x-y+\frac{x^2}2-xy+\frac{y^2}2$.

- $1+(x-y)+(x-y)^2/2$.
- The mixed coefficient is minus one.

# Chapter 5 · Double integrals

Multiply each small area by height or density and sum. Drawing the region guides order and coordinate choices.

Goals:
- Build double integrals from patches
- Reverse integration order
- Use polar coordinates and density models

## 5.1 Double integrals and Fubini's theorem

*Multiply height by small area and add*

### The idea

A double integral accumulates density or signed height over a planar region into one number.

### Intuition

Single integrals sum strips; double integrals sum small patches, each contributing height times area.

### Another explanation

Each height multiplies actual area. Accumulate each strip, then all strips.

### Quick check

Integrating constant one over a planar region gives what?

A. Region area
B. Boundary length
C. Surface area

Answer: A. Each piece contributes its area.

### Volume or signed accumulation?

Nonnegative height gives volume beneath the surface. Negative values cancel positives. For geometric volume, specify upper and lower surfaces or integrate absolute height.

### Why can integration be repeated?

A continuous function on a rectangle can be integrated in either coordinate order with equal results. More general cases need integrability hypotheses.

### Computing an average

Divide the total integral by region area: the area-weighted average output, not merely center height.

### Definition and conditions

Multiply height by small area and add

$$
\iint_R f\,dA=\lim\sum f(x_i^*,y_i^*)\Delta A_i=\int_a^b\int_c^d f(x,y)\,dy\,dx,\quad f_{\rm avg}=\frac{\iint_R f\,dA}{\operatorname{area}(R)}
$$

- Here Fubini uses continuity on a closed rectangle. Riemann grid diameters tend to zero. Averages require finite positive area.

### Derivation

Fix the first coordinate and accumulate a strip.

$$
A(x)=\int_c^d f(x,y)\,dy
$$

Sum strips across the first direction.

$$
\iint_Rf\,dA=\int_a^b A(x)\,dx
$$

Use constant density to check units.

$$
\iint_R1\,dA=(b-a)(d-c)
$$

### Interactive diagram

Why does refining the grid leave the region unchanged?

Midpoint columns for $f=1+x+y$ on the unit square; compare the finite sum with the exact integral.

Online diagram: #/lesson/c3-double-integrals?view=visual

### Guided experiment

1. **Coarse grid** Set per-direction count $n$ to $2$.

Preset observation: Midpoint heights form columns: a finite sum.

2. **Finer grid** Set per-direction count $n$ to $6$.

Preset observation: Columns narrow over the same region.

3. **Fine grid** Set per-direction count $n$ to $16$.

Preset observation: For this linear function, the midpoint sum is exact. That does not hold for every function.

### Worked examples

#### Example 1: An integral over a rectangle

Integrate $x+y$ over $0\le x\le2,0\le y\le1$.

- The inner integral is $x+\frac12$.
- The outer integral is $\int_0^2(x+\frac12)dx=3$.

**Answer: 3.**

#### Example 2: Average height

Find the average of $f=x+y$ on that rectangle.

- Area is 2 and total integral 3.
- Their quotient is $3/2$; averaging each coordinate separately agrees.

**Answer: $\frac32$.**

### Common mistakes

- **A double integral merely repeats the integral symbol.** Specify region, area element and integration order.

- **Every function permits arbitrary order exchange.** Continuity or other adequate integrability hypotheses matter, especially near singularities.

### Exercises and solutions

**1. Find $\iint 2\,dA$ on the unit square.**

Hint: Multiply the constant by area.

Answer: 2

- Area 1 gives integral 2.

**2. Find $\iint xy\,dA$ on the unit square.**

Hint: Separate the independent variables.

Answer: $\frac14$

- $\int_0^1x\,dx\int_0^1y\,dy=\frac14$.

**3. Is $\iint x\,dA$ over $[-1,1]^2$ geometric volume?**

Hint: How do negative heights accumulate?

Answer: The signed integral is zero, unlike absolute-height volume.

- Odd symmetry gives zero signed integral.
- For absolute-height volume to the plane, integrate $|x|$, giving 2.

**4. Can integration order be exchanged for a continuous function on a rectangle?**

Hint: State the sufficient condition.

Answer: Yes.

- Continuity on a closed rectangle gives integrability, and Fubini equates the orders.

Prerequisites: Multivariable functions and level sets, Riemann sums and numerical integration, The fundamental theorem of calculus.

## 5.2 General regions and changing integration order

*Draw the region before choosing inner limits*

### The idea

Limits describe a region. Changing integration order requires reading its boundaries afresh.

### Intuition

Vertical and horizontal sweeps cover the same land, but their slice endpoints differ.

### Another explanation

Change the sweep without adding or losing any part of the region.

### Quick check

What comes first when changing order?

A. Swap differentials
B. Write inequalities or draw the region
C. Delete the bounds

Answer: B. Ensure the sweep covers exactly the original region.

### Which variables may inner bounds depend on?

Only the fixed outer variables. The inner variable cannot appear in its own bounds.

### When must the region be split?

Split where a slice's boundary formula changes, or where holes produce disjoint intervals.

### Why choose an order?

It may simplify a difficult inner integral. Preserve the region and density rather than mechanically swapping differentials.

### Definition and conditions

Draw the region before choosing inner limits

$$
D=\{a\le x\le b,\ g_1(x)\le y\le g_2(x)\},\quad\iint_D f\,dA=\int_a^b\int_{g_1(x)}^{g_2(x)}f\,dy\,dx
$$

- A bounded closed region with piecewise smooth boundary and continuous integrand suffices here. Preserve the region, splitting as needed.

### Derivation

Write bounds as inequalities.

$$
0\le x\le1,\quad x\le y\le1
$$

Solve for horizontal slice bounds.

$$
0\le y\le1,\quad0\le x\le y
$$

The new limits describe the same triangle.

$$
\int_0^1\int_x^1 f\,dy\,dx=\int_0^1\int_0^y f\,dx\,dy
$$

### Interactive diagram

Does changing scan direction alter area?

Move a vertical slice through $0\le x\le1,x\le y\le1$; the top view shows the reverse-order boundaries.

Online diagram: #/lesson/c3-regions-order?view=visual

### Guided experiment

1. **Left slice** Set slice coordinate $x$ to $0$.

Preset observation: The triangular slice has height 1.

2. **Middle slice** Set slice coordinate $x$ to $0.5$.

Preset observation: The slice runs from one-half to 1, with height one-half.

3. **Right slice** Set slice coordinate $x$ to $1$.

Preset observation: The slice collapses to a point of zero height.

### Worked examples

#### Example 1: Simplifying a nonelementary inner integral

Evaluate $\int_0^1\int_x^1 e^{y^2}dy\,dx$.

- Changing order gives region $0\le y\le1,0\le x\le y$.
- Integrating the first coordinate first gives $\int_0^1ye^{y^2}dy=(e-1)/2$.

**Answer: $\frac{e-1}2$.**

#### Example 2: A curved region

Find the area of $0\le x\le1,x^2\le y\le x$.

- Vertical-slice height is $x-x^2$.
- Its integral is $1/2-1/3=1/6$; horizontal slices $y\le x\le\sqrt y$ give the same result.

**Answer: $\frac16$.**

### Common mistakes

- **Only swap the differential symbols.** Rebuild the limits too.

- **Outer bounds may depend on the inner variable.** Choose the independent outer range, then specify each inner slice.

### Exercises and solutions

**1. Reverse the order in $\int_0^2\int_0^{2-x}f\,dy\,dx$.**

Hint: Draw the axes and sloping line.

Answer: $\int_0^2\int_0^{2-y}f\,dx\,dy$.

- The region is a first-quadrant triangle.
- Horizontal slices satisfy $0\le y\le2,0\le x\le2-y$.

**2. Find the area of triangle $0\le x\le2,\ 0\le y\le2-x$.**

Hint: Use half base times height.

Answer: 2

- Base and height are both 2, giving area 2.

**3. After reversing $0\le x\le1,0\le y\le x^2$, what is the first-coordinate range?**

Hint: Solve $y\le x^2$ with nonnegative first coordinate.

Answer: $\sqrt y\le x\le1$.

- Fix $0\le y\le1$; then $\sqrt y\le x\le1$.

**4. If a horizontal line meets two disjoint intervals, may one integral span from the far left to far right?**

Hint: Would that include a gap?

Answer: Not in general.

- It would include extra blank area.
- Use two inner integrals or subdivide the region.

Prerequisites: Double integrals and Fubini's theorem.

## 5.3 Double integrals in polar coordinates

*Sector area needs a radius factor*

### The idea

Polar coordinates simplify circular boundaries, but actual patch area is radius times radial width times angular width.

### Intuition

For the same small angle, a more distant arc is longer, making outer grid cells larger.

### Another explanation

Fixed angle widths sweep longer edges outward, producing the radius factor.

### Quick check

What is the polar area element?

A. $dr\,d\theta$
B. $r\,dr\,d\theta$
C. $r^2\,dr\,d\theta$

Answer: B. Angular side length equals radius times angle width.

### Why the radius factor?

A sector's radial side is the radial increment; its angular side is approximately radius times angle increment. Their product gives area scaling.

### When is polar simpler?

Disks, annuli, sectors and radially symmetric functions. Translate first if the circle's center is elsewhere.

### Can coverage repeat?

Angles repeat after full turns. Use nonnegative radius and a range covering the region once. Boundary overlaps of zero area are harmless.

### Definition and conditions

Sector area needs a radius factor

$$
\iint_D f(x,y)dA=\iint_{D^*}f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta
$$

- Radius is nonnegative; the smooth transformation is one-to-one except on negligible degenerate sets. The function is integrable; do not cover positive-area portions repeatedly.

### Derivation

Find the radial side length.

$$
ds_r=dr
$$

Find the angular side length.

$$
ds_\theta\approx r\,d\theta
$$

Their perpendicular product gives the area element.

$$
dA=r\,dr\,d\theta
$$

### Interactive diagram

Why is the same parameter cell larger at greater radius?

Keep radial and angular increments fixed while moving a small polar sector outward.

Online diagram: #/lesson/c3-polar-integrals?view=visual

### Guided experiment

1. **Small radius** Set sector starting radius $r$ to $0.5$.

Preset observation: Its angular side is short at this radius.

2. **Unit radius** Set sector starting radius $r$ to $1$.

Preset observation: Angular side length equals the numerical angle increment times unit length.

3. **Larger radius** Set sector starting radius $r$ to $2$.

Preset observation: For equal angle width, the small patch area roughly doubles.

### Worked examples

#### Example 1: A disk integral

Integrate $x^2+y^2$ over the radius-2 disk.

- The integrand becomes $r^2$; the area element supplies another $r$.
- $\int_0^{2\pi}\int_0^2r^3drd\theta=8\pi$.

**Answer: $8\pi$.**

#### Example 2: An annulus

Find the area of $1\le x^2+y^2\le4$.

- Radial bounds are $1\le r\le2$.
- Integrate $\int_0^{2\pi}\int_1^2r\,drd\theta=3\pi$.

**Answer: $3\pi$.**

### Common mistakes

- **Replacing the coordinates finishes the substitution.** Transform the area element, including its radius.

- **Sweeping two turns is just an alternative notation.** It counts positive-area regions twice, doubling the integral.

### Exercises and solutions

**1. Find the area of a radius-3 disk.**

Hint: Integrate one, keeping the radius factor.

Answer: $9\pi$.

- $\int_0^{2\pi}\int_0^3r\,drd\theta=9\pi$.

**2. Find $\iint(x^2+y^2)dA$ over the unit disk.**

Hint: The area factor adds one radial power.

Answer: $\frac\pi2$.

- $\int_0^{2\pi}\int_0^1r^3drd\theta=\pi/2$.

**3. Find the area of a radius-2 sector of angular width $\pi/3$.**

Hint: Integrate radially, then multiply by angle width.

Answer: $\frac{2\pi}3$.

- $\frac{2^2}2\cdot\frac\pi3=\frac{2\pi}3$.

**4. What happens if the unit disk is integrated over angles zero to $4\pi$?**

Hint: Count the covering multiplicity.

Answer: Double counting.

- Every interior nonorigin point is covered twice, giving twice the actual value.

Prerequisites: Double integrals and Fubini's theorem, Cylindrical and spherical coordinates.

## 5.4 Density, centers of mass and inertia

*Define each patch's contribution first*

### The idea

Density times area gives mass; multiplying by position gives first moment; multiplying by squared axis distance gives moment of inertia.

### Intuition

Equal-area patches may have different mass. Equal masses farther from an axis resist rotation more, so distance is squared.

### Another explanation

Center of mass averages positions by mass; inertia totals squared axis distances by mass.

### Quick check

Doubling all density changes the center of mass how?

A. Move right
B. Unchanged
C. It doubles

Answer: B. Weighted totals and total mass scale equally.

### Is center of mass an ordinary coordinate average?

It is a mass-weighted average. Geometric symmetry identifies it directly only when the mass distribution has that symmetry.

### Which axis defines inertia?

About the first axis use the second coordinate squared; about the second use the first squared; about the perpendicular origin axis use their sum.

### Connection to probability

A nonnegative density integrating to one can be a probability density. Region probabilities and expectations use the same weighted integrals.

### Definition and conditions

Define each patch's contribution first

$$
M=\iint_D\sigma\,dA,\quad\bar x=\frac{\iint_Dx\sigma\,dA}M,\quad\bar y=\frac{\iint_Dy\sigma\,dA}M,\quad I_z=\iint_D(x^2+y^2)\sigma\,dA
$$

- Density is nonnegative and integrable. Center of mass needs finite positive mass; inertia needs finite corresponding second moments. Use consistent length units.

### Derivation

Local density determines patch mass.

$$
dm=\sigma\,dA
$$

Divide weighted positions by total mass.

$$
\bar x=\frac{\int x\,dm}{\int dm}
$$

Squared distance to the vertical axis determines inertia.

$$
I_z=\int r^2\,dm
$$

### Interactive diagram

As density on the right increases, where does the center move?

Unit-square density $\sigma=1+cx$; column heights show density and the bright point marks its mass-weighted center.

Online diagram: #/lesson/c3-double-applications?view=visual

### Guided experiment

1. **Uniform density** Set density-variation coefficient $c$ to $0$.

Preset observation: The center of mass is at the square's center.

2. **Slightly heavier on the right** Set density-variation coefficient $c$ to $1$.

Preset observation: Density $1+x$ shifts the center rightward.

3. **Heavier on the right** Set density-variation coefficient $c$ to $3$.

Preset observation: With density $1+3x$, the first center coordinate moves farther right; the second stays fixed.

### Worked examples

#### Example 1: A nonuniform lamina

On the unit square with density $\sigma=2x$, find mass and center of mass.

- Mass is $\int_0^1\int_0^12x\,dy\,dx=1$.
- First-coordinate moment is $2/3$; second-coordinate moment is $1/2$. Divide by mass.

**Answer: $M=1,(\bar x,\bar y)=(\frac23,\frac12)$.**

#### Example 2: Disk inertia

A radius-2 disk has uniform area density 3. Find inertia about its central perpendicular axis.

- Polar coordinates give $I_z=3\int_0^{2\pi}\int_0^2r^3drd\theta=24\pi$.
- Mass is $12\pi$; the inertia also equals $\frac12MR^2$.

**Answer: $24\pi$, with units mass times length squared.**

### Common mistakes

- **Center of mass is always the geometric center.** Uneven density shifts it toward heavier material.

- **Every moment of inertia uses the same distance.** Use perpendicular distance to the specified rotation axis.

### Exercises and solutions

**1. Find the mass of the unit square at uniform density 4.**

Hint: Multiply constant density by area.

Answer: 4

- Area 1 gives mass 4.

**2. Find inertia about the first axis of a unit square at density one.**

Hint: Distance to that axis is absolute second coordinate.

Answer: $\frac13$.

- $\int_0^1\int_0^1y^2dy\,dx=1/3$.

**3. If all density is multiplied by 5, does the center of mass change?**

Hint: Cancel the common numerator and denominator factor.

Answer: Unchanged.

- Mass and first moments all multiply by 5, leaving ratios unchanged.

**4. What must a valid probability density satisfy?**

Hint: Consider sign and total amount.

Answer: Nonnegative, with total integral 1.

- It is nonnegative and integrates to one over the full sample region.

Prerequisites: General regions and changing integration order, Double integrals in polar coordinates.

## Chapter review

Try independently before reading the solutions.

**1. Integrate $y$ over region $0\le y\le x\le2$.**

Hint: Integrate the second coordinate, then the first.

Answer: $\frac43$.

- $\int_0^2\int_0^x y\,dy\,dx=\int_0^2x^2/2\,dx$.

**2. Find the center of mass of the unit disk with area density $\sigma=1+x$.**

Hint: Cancel odd moments and evaluate the squared-coordinate integral.

Answer: $(\frac14,0)$.

- Mass is $\pi$; the second-coordinate moment is zero.
- The first-coordinate moment is the disk integral of $x^2$, equal to $\pi/4$.

**3. Reverse and evaluate $\int_0^1\int_y^1 \cos(x^2)\,dxdy$.**

Hint: The region has second coordinate below the first.

Answer: $\frac{\sin1}2$.

- Rewrite as $\int_0^1\int_0^x\cos(x^2)\,dydx$.
- The result is $\int_0^1x\cos(x^2)dx=\sin1/2$.

# Chapter 6 · Triple integrals and substitution

Project to find the base, then bound height. Cylindrical, spherical and general substitutions must account for actual volume scaling.

Goals:
- Set spatial integration bounds
- Choose cylindrical or spherical coordinates
- Explain the Jacobian's absolute value

## 6.1 Triple integrals and spatial regions

*Count every small volume once*

### The idea

Triple integrals accumulate spatial density. Integrating one gives volume.

### Intuition

Slice the solid into thin vertical columns, accumulate density in each, then sum the columns. Three integrals describe three coordinate sweeps.

### Another explanation

Find each column's height, then accumulate over the base.

### Quick check

Integrating one over a spatial region gives what?

A. Volume
B. Surface area
C. Boundary length

Answer: A. Each contribution is a small volume.

### Building limits

Draw the projection, then specify each point's allowed height interval. Split regions that cannot be described by one column, or change direction.

### Mass versus volume

Integrating one gives volume; integrating volume density gives mass. Volume and area densities have different units.

### Changing order

Continuous functions on bounded regular regions allow different orders, but each requires a fresh description of the same region. Other cases need integrability checks.

### Definition and conditions

Count every small volume once

$$
\iiint_E f\,dV=\iint_D\int_{g_1(x,y)}^{g_2(x,y)}f(x,y,z)\,dz\,dA
$$

- Here the region is bounded, piecewise smooth and describable between graphs, with continuous integrand. More general regions may be subdivided.

### Derivation

Fix planar position and integrate a column.

$$
A(x,y)=\int_{g_1}^{g_2}f(x,y,z)dz
$$

Accumulate over its projection.

$$
\iiint_E f\,dV=\iint_D A(x,y)dA
$$

Use integrand one to check upper and lower surfaces.

$$
V=\iint_D(g_2-g_1)dA
$$

### Interactive diagram

If slice edge lengths halve, does area merely halve?

Move a horizontal slice through the first-octant tetrahedron $x+y+z\le1$.

Online diagram: #/lesson/c3-triple-integrals?view=visual

### Guided experiment

1. **Low slice** Set relative slice height to $0$.

Preset observation: The bottom horizontal slice is largest.

2. **Middle slice** Set relative slice height to $0.5$.

Preset observation: Edge lengths halve, so area becomes one-quarter.

3. **Top slice** Set relative slice height to $1$.

Preset observation: The slice collapses to a point; the solid's integral remains valid.

### Worked examples

#### Example 1: Tetrahedron volume

Find the first-octant volume $x+y+z\le2$.

- One choice of limits is $0\le x\le2,0\le y\le2-x,0\le z\le2-x-y$.
- Integrate height, then the triangle, giving $\int_0^2(2-x)^2/2\,dx=4/3$.

**Answer: $\frac43$.**

#### Example 2: Mass in a box

Find the mass of $0\le x,y,z\le1$ with volume density $\rho=1+z$.

- Integrating height first gives $3/2$.
- The base has area 1, leaving mass $3/2$.

**Answer: $\frac32$.**

### Common mistakes

- **All triple-integral bounds must be constants.** Curved regions generally need bounds depending on outer variables.

- **Triple integrals compute surface area.** Volume elements accumulate spatial quantities; surface area needs a surface integral.

### Exercises and solutions

**1. Find the volume of a side-2 cube.**

Hint: Integrate one.

Answer: 8

- Multiply three side lengths to obtain 8.

**2. Find $\iiint xyz\,dV$ over the unit cube.**

Hint: Multiply three independent integrals.

Answer: $\frac18$

- Each is $1/2$; their product is $1/8$.

**3. For region $0\le z\le1-x-y$, what must its projection satisfy?**

Hint: The upper height cannot be below the lower height.

Answer: The first-quadrant unit right triangle.

- With nonnegative planar coordinates, require $x+y\le1$ too.

**4. Does changing integration order change density units?**

Hint: Does the region or physical quantity change?

Answer: No.

- Only the sweep changes; density remains mass per volume.

Prerequisites: General regions and changing integration order.

## 6.2 Triple integrals in cylindrical coordinates

*A polar base plus height*

### The idea

Cylindrical coordinates retain height and use polar coordinates horizontally. The volume element keeps one radial factor.

### Intuition

A small volume is a polar patch times height. Adding a dimension does not introduce another radial factor.

### Another explanation

The horizontal patch is polar; vertical extension just multiplies its area by height.

### Quick check

Why is there one radius factor in cylindrical volume?

A. Horizontal polar area scaling
B. Height scaling
C. To cancel pi

Answer: A. Angular increments correspond to arc lengths, requiring radius.

### Suitable regions

Cylinders, cones, axial paraboloids and solids projecting to disks often simplify.

### Writing height limits

Replace horizontal squared-distance expressions by radius and identify the upper surface. For a cone, height is proportional to radius.

### What about the cone's vertex?

Angle degeneracy on the axis occupies zero volume and is usually harmless. A singular density still requires a convergence check.

### Definition and conditions

A polar base plus height

$$
dV=r\,dr\,d\theta\,dz,\quad x=r\cos\theta,\ y=r\sin\theta
$$

- Use nonnegative radius and avoid repeated angular coverage. The integrand is integrable; outside degenerate sets the map is smooth and one-to-one.

### Derivation

The horizontal patch uses the polar area element.

$$
dA=r\,dr\,d\theta
$$

Height introduces no further scaling.

$$
dz=dz
$$

Volume is area times height.

$$
dV=r\,dr\,d\theta\,dz
$$

### Interactive diagram

Does height introduce another radial factor?

A radius-1, height-2 cylinder with a horizontal polar grid. Slice area is always $\pi$.

Online diagram: #/lesson/c3-cylindrical?view=visual

### Guided experiment

1. **Bottom** Set relative slice height to $0$.

Preset observation: Display the bottom horizontal cross-section.

2. **Middle** Set relative slice height to $0.5$.

Preset observation: Shape and area match the bottom slice.

3. **Top** Set relative slice height to $1$.

Preset observation: Height varies while radius stays fixed; constant slice area accumulates volume.

### Worked examples

#### Example 1: Volume beneath a paraboloid

Find the volume of $x^2+y^2\le z\le4$.

- In cylindrical coordinates, $0\le r\le2,r^2\le z\le4$.
- $V=2\pi\int_0^2(4-r^2)r\,dr=8\pi$.

**Answer: $8\pi$.**

#### Example 2: Squared distance inside a cylinder

Integrate $x^2+y^2$ over the radius-1, height-2 cylinder.

- The integrand is $r^2$; the volume element contributes $r$.
- $\int_0^2dz\int_0^{2\pi}d\theta\int_0^1r^3dr=\pi$.

**Answer: $\pi$.**

### Common mistakes

- **Cylindrical volume uses radius squared.** Only the horizontal polar area contributes radius; height has no extra scaling.

- **For a circular projection, change only bounds.** Transform the integrand and volume element too.

### Exercises and solutions

**1. Find the volume of a radius-2, height-3 cylinder.**

Hint: Check with base area times height.

Answer: $12\pi$.

- $V=4\pi\cdot3=12\pi$.

**2. What radial limits describe the conical region between $z=r$ and $z=2$?**

Hint: Require ordered lower and upper heights.

Answer: $0\le r\le2$.

- $r\le2$ requires $0\le r\le2$.

**3. Why is the angle nonunique on the cylindrical axis?**

Hint: Horizontal radius is zero.

Answer: This coordinate degeneracy is usually harmless to volume integration.

- Both horizontal components vanish for every angle.

**4. Does $\iiint r\,dr\,d\theta\,dz$ represent density one or density equal to radius?**

Hint: Identify the volume-element factor.

Answer: Constant density one.

- The final radius comes from the volume element; density is one.

Prerequisites: Triple integrals and spatial regions, Double integrals in polar coordinates.

## 6.3 Triple integrals in spherical coordinates

*Account for all three edge scales*

### The idea

The spherical volume element contains distance squared and sine of inclination, arising from two different angular arcs.

### Intuition

Farther out, equal angle widths span more area. Near a pole, the azimuthal circle shrinks.

### Another explanation

Two angular edges supply distance squared; the latitude edge supplies an extra sine.

### Quick check

What is the approximate actual length of a spherical azimuthal edge?

A. $\rho\,d\theta$
B. $\rho\sin\phi\,d\theta$
C. $d\theta$

Answer: B. It follows a latitude circle whose radius is horizontal projection length.

### Why distance squared?

The radial edge is the distance increment. Each angular edge contributes one distance factor, giving its square.

### Why a sine factor?

The azimuthal arc follows a horizontal circle of radius distance times sine of inclination. It shrinks to zero at a pole.

### Checking bounds

Check radial distance, azimuth and inclination. A cone fixes inclination; planes or off-center spheres can give angle-dependent radial bounds.

### Definition and conditions

Account for all three edge scales

$$
dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta,\quad0\le\phi\le\pi
$$

- Inclination is measured from the positive vertical axis. Avoid repeated positive-volume coverage, require integrability and use radians.

### Derivation

The radial edge has no scaling.

$$
ds_\rho=d\rho
$$

The inclination edge follows a meridian.

$$
ds_\phi=\rho\,d\phi
$$

The azimuthal edge follows a latitude circle.

$$
ds_\theta=\rho\sin\phi\,d\theta
$$

### Interactive diagram

Are equal angular patches equal in area at pole and equator?

Keep spherical radius and angular widths fixed while moving a small grid patch across latitudes.

Online diagram: #/lesson/c3-spherical?view=visual

### Guided experiment

1. **Near the north pole** Set inclination $\phi$ to $0.1$.

Preset observation: Equal angle width gives a very short latitude edge.

2. **Midlatitude** Set inclination $\phi$ to $\frac\pi4$.

Preset observation: The latitude radius increases.

3. **Equator** Set inclination $\phi$ to $\frac\pi2$.

Preset observation: The azimuthal edge is longest; its sine factor is one.

### Worked examples

#### Example 1: Ball volume

Find the volume of a radius-2 ball.

- Integrate $\int_0^{2\pi}\int_0^\pi\int_0^2\rho^2\sin\phi\,d\rho d\phi d\theta$.
- The three factors are $2\pi,2,8/3$.

**Answer: $\frac{32\pi}3$.**

#### Example 2: Squared distance inside a ball

Integrate $x^2+y^2+z^2$ over the unit ball.

- Density is $\rho^2$; multiplying by volume element gives $\rho^4\sin\phi$.
- The radial integral is $1/5$; the angular integral is $4\pi$.

**Answer: $\frac{4\pi}5$.**

### Common mistakes

- **Spherical coordinates only add one radius beyond cylindrical coordinates.** They also need sine of inclination to account for latitude-circle length.

- **Sweep inclination through a full turn.** This repeats coverage and reverses orientation. Standard nonnegative volume uses zero to $\pi$.

### Exercises and solutions

**1. Find the unit upper-half-ball volume.**

Hint: Inclination covers the northern half only.

Answer: $\frac{2\pi}3$.

- Take half of the full volume $4\pi/3$.

**2. Which inclination describes cone $z=r$?**

Hint: Compare cosine and sine.

Answer: $\frac\pi4$.

- $\cos\phi=\sin\phi$ in the upper half-space, hence $\phi=\pi/4$.

**3. Why are azimuthal arcs short near a pole?**

Hint: Inspect latitude-circle radius.

Answer: The circle about the axis becomes small.

- It is $\rho\sin\phi$; the sine vanishes at the pole.

**4. When integrating squared distance, what is the radial power?**

Hint: Density's square times volume's square factor.

Answer: Fourth power

- $\rho^2\cdot\rho^2=\rho^4$.

Prerequisites: Triple integrals in cylindrical coordinates, Cylindrical and spherical coordinates.

## 6.4 General changes of variables and Jacobians

*Measure local area or volume scaling*

### The idea

A Jacobian determinant gives a smooth coordinate map's local area or volume scaling. Integration uses its absolute value.

### Intuition

A parameter square becomes a small parallelogram. Two derivative vectors determine area; three determine volume.

### Another explanation

Derivatives map a small square to a parallelogram; its determinant measures the local expansion.

### Quick check

What if the Jacobian is negative in an area integral?

A. Take its absolute value
B. Discard the region
C. Mass becomes negative

Answer: A. Unoriented area is nonnegative; the sign records orientation.

### The Jacobian matrix

Arrange each output coordinate's partial derivatives by input parameter. In two dimensions its determinant is signed area scaling from the two derivative vectors.

### Why the absolute value?

A negative determinant means orientation reversal, not negative area or volume. Oriented surface integrals have separate direction rules.

### When is direct substitution invalid?

A nonzero local determinant does not ensure no global overlap. Check one-to-one coverage; folded maps require branches and multiplicity accounting.

### Definition and conditions

Measure local area or volume scaling

$$
J=\frac{\partial(x,y)}{\partial(u,v)}=x_uy_v-x_vy_u,\quad\iint_D f\,dxdy=\iint_U f(T(u,v))|J|\,dudv
$$

- Use a continuously differentiable map one-to-one in the interior with nonzero interior Jacobian. Boundary degeneracies are negligible; require integrability. In three dimensions use a third-order determinant.

### Derivation

Partial-derivative vectors map small parameter edges.

$$
d\mathbf r_u=\mathbf r_u du,\quad d\mathbf r_v=\mathbf r_v dv
$$

Their parallelogram area is the absolute determinant.

$$
dA=|x_uy_v-x_vy_u|\,dudv
$$

Transform the function and region together.

$$
f(x,y)=f(x(u,v),y(u,v))
$$

### Interactive diagram

Why cannot one local factor multiply the whole parameter area when scaling varies?

The unit parameter square maps by $x=u,y=(1+cu)v$ to a trapezoid. Move $u$ and compare local factor $J=1+cu$ with total area $1+c/2$.

Online diagram: #/lesson/c3-change-variables?view=visual

### Guided experiment

1. **No deformation** First choose $c=0,u=0.5$.

Preset observation: The map is the identity; local factor and total area are both $1$.

2. **Near the left** Choose $c=1,u=0$.

Preset observation: The left local factor is $1$, while total image area is $3/2$. Local and global factors differ.

3. **Move right** Keep $c=1$ and move $u$ to $1$.

Preset observation: The right local factor is $2$, while total area stays $3/2$; integration accumulates the varying factors.

### Worked examples

#### Example 1: Ellipse area

Map the unit disk by $x=3u,y=2v$. Find image area.

- The Jacobian is $3\cdot2=6$.
- The original disk has area $\pi$; area scales sixfold.

**Answer: $6\pi$.**

#### Example 2: A skew grid

For $x=u+v,y=u-v$, find the image area of the parameter unit square.

- The determinant is $-2$.
- Use absolute factor 2 times parameter area one.

**Answer: 2; the sign indicates orientation reversal only.**

#### Example 3: Position-dependent scaling

Let $x=u,y=(1+u)v$, $0\le u,v\le1$. Find image area and its integral $\iint_D y\,dA$.

- The inverse is $u=x,v=y/(1+x)$, so the image is $0\le x\le1,0\le y\le1+x$ and coverage is one-to-one.
- $J=1+u>0$; area is $\int_0^1\int_0^1(1+u)\,dv\,du=3/2$. One point's factor is not a global constant.
- Transform the integrand too: $y=(1+u)v$. Thus the integral is $\int_0^1\int_0^1(1+u)^2v\,dv\,du=\frac12\int_0^1(1+u)^2du=7/6$.

**Answer: Area $3/2$; $\iint_Dy\,dA=7/6$.**

### Common mistakes

- **A negative determinant gives negative mass.** An unoriented area element uses the absolute determinant.

- **Nonzero determinant guarantees global one-to-one coverage.** It gives local information; global injectivity needs a separate check.

### Exercises and solutions

**1. Find the area factor for $x=2u,y=5v$.**

Hint: Take the diagonal matrix determinant.

Answer: 10

- $|2\cdot5|=10$.

**2. Find area scaling and orientation for $x=v,y=u$.**

Hint: Exchange the coordinates.

Answer: Area is unchanged and orientation reversed.

- The determinant is $-1$; absolute area factor is 1.

**3. Is $x=u^2,y=v$ one-to-one on $-1\le u\le1$ for direct substitution?**

Hint: Compare opposite parameters.

Answer: No.

- Positive and negative parameters give the same first coordinate, duplicating interior coverage.
- Split branches; do not treat both as one coverage.

**4. Find the volume factor for spatial scaling $x=2u,y=3v,z=4w$.**

Hint: Multiply the three independent factors.

Answer: 24

- The absolute determinant is $2\cdot3\cdot4=24$.

Prerequisites: Cross products, area and normals, Double integrals in polar coordinates.

## Chapter review

Try independently before reading the solutions.

**1. Find mean squared origin distance inside a radius-2 ball.**

Hint: Divide the squared-distance integral by volume.

Answer: $\frac{12}5$

- The integral is $4\pi\cdot2^5/5=128\pi/5$.
- Divide by volume $32\pi/3$ to obtain $12/5$.

**2. Write spherical bounds for the first-octant unit ball.**

Hint: Bound azimuth, inclination and radial distance.

Answer: $0\le\rho\le1,0\le\phi\le\pi/2,0\le\theta\le\pi/2$.

- Nonnegative coordinates give both angles from zero to $\pi/2$; radial distance from zero to one.

**3. Find the area of the image of the unit square under $x=2u+v,y=u+2v$.**

Hint: Compute the determinant.

Answer: 3

- Jacobian $4-1=3$; invertibility gives area scaling by three.

# Chapter 7 · Vector fields and line integrals

Scalar integrals weight by length; work dots force with displacement. Potentials and Green's theorem replace paths by endpoint or region calculations.

Goals:
- Distinguish scalar integrals from work
- Find potentials and check domains
- Apply Green's theorem correctly

## 7.1 Vector fields and streamlines

*An arrow at every position*

### The idea

A vector field assigns a vector to each point. A streamline's tangent follows the field at each point.

### Intuition

A wind map describes local velocities, not one trajectory. An initial position selects a particle's path.

### Another explanation

Specify the velocity rule at all positions, then an initial point, to determine motion.

### Quick check

How are a vector field and one trajectory related?

A. The field gives local velocity; an initial value selects a trajectory
B. The field defines only one point
C. They are identical

Answer: A. A position rule and a time-dependent path are different objects.

### What does arrow length mean?

It represents field magnitude. Display arrows may share a shortening factor to avoid overlap; state that factor. Normalized arrows do not preserve magnitudes.

### Field versus trajectory

A field maps position to vector; a trajectory maps time to position. In an autonomous field, particle velocity equals the field at its current position.

### Checking a streamline

Substitute the path into the field and compare with its derivative. Parallel vectors with a different factor may describe the same geometric streamline under reparameterization.

### Definition and conditions

An arrow at every position

$$
\mathbf F:\mathbb R^n\supset D\to\mathbb R^n,\quad\mathbf r\prime(t)=\mathbf F(\mathbf r(t))
$$

- Existence and uniqueness need continuity and local Lipschitz conditions. Continuous first partials suffice in the usual examples. Do not cross undefined field points.

### Derivation

Read the vector at the current position.

$$
\mathbf v=\mathbf F(\mathbf r)
$$

Express velocity as the path derivative.

$$
\mathbf r\prime=\mathbf F(\mathbf r)
$$

The rotational field preserves squared radius.

$$
\mathbf F=(-y,x,0)\Rightarrow\frac d{dt}(x^2+y^2)=0
$$

### Interactive diagram

After adding radial flow, is the circle still a streamline?

Field $\mathbf F=(-y+cx,x+cy,0)$; arrows use a common factor 0.22, preserving magnitude ratios.

Online diagram: #/lesson/c3-fields?view=visual

### Guided experiment

1. **Pure rotation** Set radial coefficient $c$ to $0$.

Preset observation: Arrows are tangent to circles; radial contribution is zero.

2. **Rotation with outflow** Set radial coefficient $c$ to $0.5$.

Preset observation: Arrows now have tangential and radial components.

3. **Stronger outflow** Set radial coefficient $c$ to $1$.

Preset observation: The outward component grows. The circle is a reference, no longer a streamline.

### Worked examples

#### Example 1: A circular streamline

For $\mathbf F=(-y,x,0)$, is $\mathbf r(t)=(2\cos t,2\sin t,0)$ a streamline?

- Its derivative is $(-2\sin t,2\cos t,0)$.
- Substitution into the field gives the same vector.

**Answer: Yes; speed is 2.**

#### Example 2: Radial growth

For $\mathbf F=(x,y,z)$ with initial point $(1,0,1)$, find the trajectory.

- Solve $x\prime=x,y\prime=y,z\prime=z$ componentwise.
- Initial values give $(e^t,0,e^t)$.

**Answer: $\mathbf r(t)=(e^t,0,e^t)$.**

### Common mistakes

- **Each arrow is a complete trajectory.** An arrow gives only local direction and magnitude.

- **Equal arrow directions imply equal magnitudes.** Parallel arrows can have different lengths; check formulas and scale.

### Exercises and solutions

**1. Find field $(x,y,0)$ at $(2,-1,3)$.**

Hint: Substitute only the relevant components.

Answer: $\langle2,-1,0\rangle$.

- This gives $(2,-1,0)$.

**2. Where does field $(-y,x,0)$ point at $(1,0,0)$?**

Hint: Substitute directly.

Answer: Along the positive second axis.

- The vector is $(0,1,0)$, along the positive second axis.

**3. For constant field $(1,0,0)$ and initial point $(0,2,3)$, find the trajectory.**

Hint: Integrate constant velocity.

Answer: $(t,2,3)$.

- $\mathbf r=(t,2,3)$; the other coordinates stay fixed.

**4. On the unit circle, how are field $(-y,x,0)$ and radial field $(x,y,0)$ related?**

Hint: Compute their dot product.

Answer: They are perpendicular.

- $-xy+xy=0$; both are nonzero on the circle.

Prerequisites: Velocity, acceleration and distance, Differential equations and direction fields.

## 7.2 Scalar line integrals

*Accumulate along actual length*

### The idea

A scalar line integral weights a wire's density by arc length. Reversing direction leaves it unchanged.

### Intuition

Divide a curve into short segments. Each contributes density times length; faster parameter motion gives a longer segment per time increment.

### Another explanation

Speed compensates for parameter rate; direction never makes length negative.

### Quick check

What happens to a scalar arc-length integral after reversal?

A. It changes sign
B. Unchanged
C. It becomes zero

Answer: B. Length has no travel direction.

### Why multiply by speed?

A parameter increment is not length. Arc length is speed times that increment. Omitting speed makes the result depend on parameterization.

### Does reversal change the sign?

Not for scalar arc-length integration, since length is nonnegative. A signed integrand can still give a signed result.

### A wire's center of mass

Integrate position times line density against arc length, then divide by mass. Repeated tracing accumulates repeatedly; it does not automatically describe one physical wire.

### Definition and conditions

Accumulate along actual length

$$
\int_C f\,ds=\int_a^b f(\mathbf r(t))\|\mathbf r\prime(t)\|dt
$$

- The path is piecewise smooth and the function continuous along it. Avoid repeated tracing for a wire. Regular monotone reparameterization preserves the integral regardless of speed or direction.

### Derivation

Approximate arc length by short segments.

$$
\Delta s\approx\|\mathbf r\prime(t)\|\Delta t
$$

Multiply each length by density.

$$
\Delta m\approx f(\mathbf r(t))\Delta s
$$

Sum and take a mesh limit.

$$
\int_Cf\,ds=\int_a^b f(\mathbf r(t))\|\mathbf r\prime(t)\|dt
$$

### Interactive diagram

Does reversing the path make a wire's mass negative?

Accumulate density one along a unit circle; the bright arc marks travel.

Online diagram: #/lesson/c3-line-scalar?view=visual

### Guided experiment

1. **A short arc** Set path parameter $t$ to $\frac\pi2$.

Preset observation: The integral of density one is the quarter-circle length.

2. **A semicircle** Set path parameter $t$ to $\pi$.

Preset observation: The integral increases with path length.

3. **A full turn** Set path parameter $t$ to $2\pi$.

Preset observation: The full circumference is $2\pi$.

### Worked examples

#### Example 1: A circular wire

Find mass of a radius-2 circle at line density 3.

- Choose $\mathbf r=(2\cos t,2\sin t,0)$, with speed 2.
- Integrate $3\cdot2\cdot2\pi=12\pi$.

**Answer: $12\pi$.**

#### Example 2: Density along a diagonal

A segment runs from $(0,0,0)$ to $(1,1,0)$, with density $x+y$. Find mass.

- Use $(t,t,0)$ from zero to one; density is $2t$, speed $\sqrt2$.
- Integrate $\int_0^12t\sqrt2dt=\sqrt2$.

**Answer: $\sqrt2$.**

### Common mistakes

- **The parameter differential is the arc-length element.** Multiply by speed unless the parameter already is arc length.

- **Reversing a path negates every line integral.** Scalar arc-length integrals stay unchanged; work integrals reverse sign.

### Exercises and solutions

**1. Find mass of a length-4 segment at density 2.**

Hint: Multiply line density by length.

Answer: 8

- $2\cdot4=8$.

**2. Integrate one over a unit semicircle.**

Hint: This is its arc length.

Answer: $\pi$.

- A radius-1 semicircle has length $\pi$.

**3. Reverse a unit semicircle. Does scalar integral $\int_C1\,ds$ change?**

Hint: Is arc length oriented?

Answer: Unchanged.

- Length does not change sign, so the value remains $\pi$.

**4. What happens if a circular wire's mass integral traces it twice?**

Hint: Count coverage.

Answer: It doubles; use one traversal for the wire.

- Each segment contributes twice, giving twice the physical single-loop mass.

Prerequisites: Vector fields and streamlines, Arc-length parameters and curvature.

## 7.3 Work and vector line integrals

*Keep force along directed displacement*

### The idea

A work integral dots force with each directed displacement. Reversing the path reverses its sign.

### Intuition

Pushing along motion gives positive work; opposing motion gives negative work; perpendicular force contributes none.

### Another explanation

Only force along each displacement contributes; perpendicular force does no local work.

### Quick check

How does reversing the path change work?

A. Unchanged
B. Negates it
C. Takes its absolute value

Answer: B. Work accumulates directed displacement.

### Connection to arc-length integrals

Directed displacement is unit tangent times arc length. Thus work integrates tangential force against length.

### Must the path be straight?

Any piecewise smooth path can be parameterized. Evaluate the field along it and dot with velocity; endpoint forces alone do not suffice.

### Does a closed path force zero work?

No. A continuously tangential force can do positive work around a circle. Conservative-field hypotheses give zero closed-loop work.

### Definition and conditions

Keep force along directed displacement

$$
\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r\prime(t)dt=\int_C\mathbf F\cdot\mathbf T\,ds
$$

- The field is continuous along an oriented piecewise smooth path. Reversal changes orientation. Unit tangents are defined on regular pieces.

### Derivation

A short-step work contribution is force dotted with displacement.

$$
\Delta W\approx\mathbf F\cdot\Delta\mathbf r
$$

Write displacement using parameter velocity.

$$
d\mathbf r=\mathbf r\prime(t)dt
$$

Reversal negates directed displacement.

$$
\int_{-C}\mathbf F\cdot d\mathbf r=-\int_C\mathbf F\cdot d\mathbf r
$$

### Interactive diagram

How can work be nonzero when start and finish agree?

Counterclockwise unit-circle motion in field $\mathbf F=(-y,x,0)$; tangential force does positive work.

Online diagram: #/lesson/c3-line-work?view=visual

### Guided experiment

1. **Counterclockwise motion** Set path parameter $t$ to $\frac\pi2$.

Preset observation: The rotational field pushes along the path, accumulating positive work.

2. **Half a revolution** Set path parameter $t$ to $\pi$.

Preset observation: The local dot product stays one, so work keeps growing.

3. **Complete loop** Set path parameter $t$ to $2\pi$.

Preset observation: The path closes, but work is $2\pi$; it does not cancel.

### Worked examples

#### Example 1: Pushing around a circle

Find work of $\mathbf F=(-y,x,0)$ around a radius-2 counterclockwise circle.

- Choose $\mathbf r=(2\cos t,2\sin t,0)$; velocity equals the field.
- The dot product is 4; integration gives $8\pi$.

**Answer: $8\pi$.**

#### Example 2: Radial force on a circle

Find work of $\mathbf F=(x,y,0)$ along the same circle.

- Radial field and tangential velocity are perpendicular.
- Every local contribution is zero, hence the full loop's work is zero.

**Answer: 0.**

### Common mistakes

- **Integrating force magnitude gives work.** Take the signed component along displacement.

- **Every closed path has zero work.** A rotational field is a counterexample.

### Exercises and solutions

**1. Find work of constant force $(2,0,0)$ along a straight path from the origin to $(3,1,0)$.**

Hint: Dot constant force with total displacement.

Answer: 6

- $2\cdot3=6$.

**2. For constant force $(2,0,0)$, find work along the straight return from $(3,1,0)$ to the origin.**

Hint: Reverse the directed displacement.

Answer: $-6$

- The return displacement is $(-3,-1,0)$, giving work $-6$.

**3. Find work when force is always perpendicular to velocity.**

Hint: Inspect every dot product.

Answer: 0

- Every contribution is zero, so is the integral.

**4. Find work around the unit circle clockwise in field $(-y,x,0)$.**

Hint: Calculate counterclockwise first, then reverse.

Answer: $-2\pi$.

- Counterclockwise work is $2\pi$.
- Reversal gives $-2\pi$.

Prerequisites: Scalar line integrals, Dot products and projections.

## 7.4 Potentials, path independence and holes

*When are endpoints enough?*

### The idea

For a field equal to the gradient of a single-valued function, work is final potential minus initial potential.

### Intuition

Each step's work is an increment of one function. Intermediate increments cancel, leaving endpoints.

### Another explanation

For a single-valued gradient field, work sums potential increments and leaves only endpoint difference.

### Quick check

When a global potential exists, what determines work?

A. Endpoints alone
B. Length alone
C. Speed alone

Answer: A. The chain rule and fundamental theorem cancel intermediate increments.

### Finding a potential

Integrate one field component, allowing the constant to depend on remaining variables. Match other components, then verify the full gradient.

### Are equal cross partials enough?

On a simply connected open domain, a continuously differentiable curl-free field has a potential. Simply connected means every loop can contract to a point within the domain.

### Why do holes matter?

Local zero curl can coexist with nonzero work around a hole. A global potential must be single-valued; a branched angle is insufficient.

### Definition and conditions

When are endpoints enough?

$$
\mathbf F=\nabla\varphi\ \Longrightarrow\ \int_C\mathbf F\cdot d\mathbf r=\varphi(B)-\varphi(A)
$$

- The potential is continuously differentiable on an open domain containing the piecewise smooth path. Inferring conservativeness from zero curl also requires a simply connected open domain and continuously differentiable field.

### Derivation

Apply the chain rule to potential along the path.

$$
\frac d{dt}\varphi(\mathbf r(t))=\nabla\varphi\cdot\mathbf r\prime
$$

Use the single-variable fundamental theorem.

$$
\int_a^b\frac d{dt}\varphi(\mathbf r(t))dt=\varphi(B)-\varphi(A)
$$

A loop has matching endpoints, giving zero difference.

$$
\oint_C\nabla\varphi\cdot d\mathbf r=0
$$

### Interactive diagram

Which field property supports zero closed-loop work?

Field $\nabla(\frac12(x^2+y^2))=(x,y)$ does zero work around the unit circle; compare with the preceding rotational field.

Online diagram: #/lesson/c3-potential?view=visual

### Guided experiment

1. **Path start** Set path parameter $t$ to $0$.

Preset observation: The radial gradient field has potential one here.

2. **Midway** Set path parameter $t$ to $\pi$.

Preset observation: Potential stays one on the unit circle; accumulated work is zero.

3. **Return to start** Set path parameter $t$ to $2\pi$.

Preset observation: Zero loop work follows from a global potential, not closure alone.

### Worked examples

#### Example 1: Finding a potential

For $\mathbf F=(2xy,x^2+2y,0)$, find work from the origin to $(1,2,0)$.

- Integrating the first component gives $\varphi=x^2y+g(y)$.
- The second gives $g\prime=2y$; thus $\varphi=x^2y+y^2$, with endpoint value 6.

**Answer: 6, for any path staying in the domain.**

#### Example 2: A hole counterexample

On the plane without the origin, find work of $\mathbf F=(-y/r^2,x/r^2)$ around the unit circle.

- The field equals unit tangent on the circle, giving $2\pi$.
- Local cross partials agree, but the hole prevents a single-valued global potential.

**Answer: $2\pi$; the field is not conservative.**

### Common mistakes

- **Matching cross partials make the domain irrelevant.** A hole can support nonzero loop integrals.

- **Integrating any one component automatically gives a potential.** Match every component and verify the gradient.

### Exercises and solutions

**1. Find a potential for $(2x,2y,2z)$.**

Hint: Look for the gradient of a sum of squares.

Answer: $x^2+y^2+z^2$.

- $\nabla(x^2+y^2+z^2)=(2x,2y,2z)$.

**2. Find work of $(2x,2y,2z)$ from the origin to $(1,2,2)$.**

Hint: Use endpoint potential difference.

Answer: 9

- Final value $1+4+4=9$; initial value zero.

**3. How can two potentials differ on a connected domain?**

Hint: Their gradient difference is zero.

Answer: By a constant.

- Their difference stays constant along connecting paths.

**4. On the punctured plane, does zero curl automatically imply zero loop work?**

Hint: Use an angular-field counterexample.

Answer: No.

- A unit circle around the hole can give $2\pi$.
- Local zero curl does not eliminate global circulation around holes.

Prerequisites: Work and vector line integrals, The multivariable chain rule and implicit functions.

## 7.5 Green's theorem and planar flux

*Replace boundary circulation by interior rotation*

### The idea

Green's theorem converts positive boundary circulation to an integral of local rotation. A second form computes outward planar flux.

### Intuition

Split the region into cells. Shared edges have opposite directions and cancel, leaving the overall boundary.

### Another explanation

Shared cell edges cancel, leaving the positively oriented outer boundary.

### Quick check

How is an inner boundary oriented?

A. Counterclockwise
B. Clockwise
C. Either direction

Answer: B. The actual region stays on the left.

### Choosing positive orientation

Keep the region on your left: counterclockwise outer boundaries and clockwise hole boundaries. Include every inner boundary.

### Circulation versus flux

Circulation accumulates tangential components; flux accumulates outward normal components. They use different derivative combinations.

### When is the theorem unavailable?

The field must be continuously differentiable on an open neighborhood of the whole region. Excise undefined interior points and include the added boundaries.

### Definition and conditions

Replace boundary circulation by interior rotation

$$
\oint_{\partial D}Pdx+Qdy=\iint_D(Q_x-P_y)dA,\quad\oint_{\partial D}Pdy-Qdx=\iint_D(P_x+Q_y)dA
$$

- The bounded region has finitely many piecewise smooth simple closed boundary curves, oriented with the region left. The field is continuously differentiable on an open neighborhood of the closed region.

### Derivation

Apply the fundamental theorem to opposite rectangle edges.

$$
\int(P_{\rm bottom}-P_{\rm top})dx=-\iint P_y\,dA
$$

Combine the other pair.

$$
\int(Q_{\rm right}-Q_{\rm left})dy=\iint Q_x\,dA
$$

Subdivision cancels shared edges, leaving the boundary.

$$
\oint_{\partial D}Pdx+Qdy=\iint_D(Q_x-P_y)dA
$$

### Interactive diagram

Does doubling radius double or quadruple circulation?

Field $(-y,x)$ over a variable-radius disk. Circulation is constant rotation density two times area.

Online diagram: #/lesson/c3-green?view=visual

### Guided experiment

1. **Small circle** Set disk radius $R$ to $0.5$.

Preset observation: Rotation density stays two; circulation follows area.

2. **Unit circle** Set disk radius $R$ to $1$.

Preset observation: Circulation is $2\pi$.

3. **Large circle** Set disk radius $R$ to $2$.

Preset observation: Doubling radius quadruples both area and circulation.

### Worked examples

#### Example 1: Elliptical circulation

Find circulation of $\mathbf F=(-y,x)$ around the semiaxis-2 and semiaxis-1 ellipse counterclockwise.

- Rotation density is $Q_x-P_y=2$.
- Ellipse area is $2\pi$; multiply by 2.

**Answer: $4\pi$.**

#### Example 2: Outward planar flux

Find outward flux of $\mathbf F=(x,y)$ across the radius-3 circle.

- Divergence is $P_x+Q_y=2$.
- Multiply by disk area $9\pi$.

**Answer: $18\pi$.**

### Common mistakes

- **Positive boundaries are always counterclockwise.** Outer boundaries are counterclockwise; hole boundaries clockwise.

- **Smoothness on the boundary alone suffices.** The hypotheses cover the interior and an open neighborhood too. Do not ignore singularities.

### Exercises and solutions

**1. Evaluate $\oint x\,dy$ around the positively oriented unit square.**

Hint: Choose $P=0,Q=x$.

Answer: 1

- Rotation density and area are both 1.

**2. Evaluate $\oint_C x\,dy$ clockwise around the unit square.**

Hint: Orientation reverses sign.

Answer: $-1$

- The reversed integral is $-1$.

**3. For radial field $(x,y)$, find total outward flux from an annulus of radii 1 and 2.**

Hint: Multiply area by divergence, including the inner boundary.

Answer: $6\pi$.

- Area $3\pi$ times divergence 2 gives $6\pi$.

**4. If the field has a central singularity, can zero rotation density establish zero circulation?**

Hint: Which set must satisfy the hypotheses?

Answer: No.

- The interior hypothesis fails.
- Excise a small region around the singularity and include its boundary contribution.

Prerequisites: Potentials, path independence and holes, Double integrals and Fubini's theorem.

## Chapter review

Try independently before reading the solutions.

**1. Find work of $(y,x,0)$ along any path from $(1,0,0)$ to $(2,3,0)$.**

Hint: Find a product potential.

Answer: 6

- Potential $xy$ has endpoint difference $6-0$.

**2. Evaluate $\oint -2y\,dx+2x\,dy$ around a radius-2 counterclockwise circle.**

Hint: Use Green to compute rotation density.

Answer: $16\pi$.

- Rotation density is 4; area is $4\pi$.

**3. Find work of $(-y/(x^2+y^2),x/(x^2+y^2))$ around a radius-2 counterclockwise circle.**

Hint: Parametrize the circle; radius factors cancel.

Answer: $2\pi$; changing radius does not remove circulation around the hole.

- The field is $(-\sin t/2,\cos t/2)$; velocity is $(-2\sin t,2\cos t)$.
- Their dot product is one; integrate through one turn.

# Chapter 8 · Surfaces and flux

Two parameters generate a surface. Tangent cross products supply area scaling and normals, reducing surface integrals to double integrals.

Goals:
- Build regular surface parameterizations
- Compute surface area and scalar integrals
- Compute oriented flux, divergence and curl

## 8.1 Parametric surfaces and orientation

*Two parameter directions span a surface*

### The idea

Two parameters generate a spatial surface. Their independent tangent vectors have a cross product giving the local normal.

### Intuition

A parameter mesh may tilt and stretch in space. Its tangent cross product gives both normal direction and area scaling.

### Another explanation

Two parameter directions span the local tangent plane; their cross product records normal and area scaling.

### Quick check

How does swapping parameter order change the normal?

A. Unchanged
B. Opposing
C. It automatically vanishes

Answer: B. The cross product is anticommutative.

### Regularity

The two partial-derivative vectors must not be parallel: their cross product is nonzero. At parameter poles, change charts or handle negligible boundary degeneracies.

### Why use multiple charts?

A sphere has no single ordinary rectangular chart that is regular everywhere and nonrepeating. Use pieces without positive-area overlap.

### Orientation

Choose a normal side continuously across the surface. Swapping parameter order reverses it. A Möbius strip has no global continuous unit normal.

### Definition and conditions

Two parameter directions span a surface

$$
\mathbf r(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle,\quad\mathbf n=\frac{\mathbf r_u\times\mathbf r_v}{\|\mathbf r_u\times\mathbf r_v\|}
$$

- Charts are continuously differentiable with nonzero interior cross product, avoiding repeated positive-area coverage. Global flux needs an orientable surface with consistent piece orientations.

### Derivation

Fix one parameter to obtain a curve family.

$$
u\mapsto\mathbf r(u,v_0),\quad v\mapsto\mathbf r(u_0,v)
$$

The curve derivatives span the tangent plane.

$$
\mathbf r_u,\ \mathbf r_v
$$

Cross them for a normal; normalize for a unit normal.

$$
\mathbf n=\pm\frac{\mathbf r_u\times\mathbf r_v}{\|\mathbf r_u\times\mathbf r_v\|}
$$

### Interactive diagram

When do projected and actual mesh areas agree?

Parameter plane $\mathbf r(u,v)=(u,v,cu)$, showing both tangent vectors and upward unit normal.

Online diagram: #/lesson/c3-parametric-surfaces?view=visual

### Guided experiment

1. **Flat surface** Set plane slope $c$ to $0$.

Preset observation: The tangent plane is horizontal and the normal upward.

2. **Gentle tilt** Set plane slope $c$ to $0.5$.

Preset observation: The plane tilts; cross-product length exceeds one.

3. **Steeper tilt** Set plane slope $c$ to $1$.

Preset observation: The actual area per parameter area increases further.

### Worked examples

#### Example 1: Normal to a graph

Find the upward normal of surface $\mathbf r(u,v)=(u,v,u^2+v^2)$.

- The tangent vectors are $(1,0,2u)$ and $(0,1,2v)$.
- Their cross product is $(-2u,-2v,1)$, with positive vertical component.

**Answer: Unit normal $\frac{(-2u,-2v,1)}{\sqrt{1+4u^2+4v^2}}$.**

#### Example 2: Orienting a cylinder

Orient the side of a radius-2 cylinder outward.

- Choose $\mathbf r(\theta,z)=(2\cos\theta,2\sin\theta,z)$.
- Cross azimuth derivative with height derivative to get outward $(2\cos\theta,2\sin\theta,0)$.

**Answer: Unit normal $(\cos\theta,\sin\theta,0)$.**

### Common mistakes

- **The two parameter derivatives' cross product is a unit normal.** It generally also contains area scaling and is not normalized.

- **Swapping parameters only changes notation.** It reverses orientation and therefore flux sign.

### Exercises and solutions

**1. Find a unit normal for plane parameterization $(u,v,0)$.**

Hint: Cross the coordinate basis vectors.

Answer: The upward unit vector.

- $(1,0,0)\times(0,1,0)=(0,0,1)$.

**2. For $\mathbf r(u,v)=(u,0,v)$, find the normal in the stated order.**

Hint: Cross the first and third basis directions.

Answer: The negative second-axis direction.

- $(1,0,0)\times(0,0,1)=(0,-1,0)$.

**3. Can a zero cross product be normalized?**

Hint: Check the divisor.

Answer: No.

- Its length is zero. Change parameters or analyze the degeneracy.

**4. Do degenerate poles in a spherical chart mean the sphere is nonsmooth?**

Hint: Separate chart properties from geometry.

Answer: No.

- Only the angular chart degenerates; other local charts describe the smooth sphere.

Prerequisites: Cross products, area and normals, General changes of variables and Jacobians.

## 8.2 Surface area and scalar surface integrals

*Measure actual parallelogram area*

### The idea

A surface element is the length of the tangent cross product times parameter area. Scalar surface integrals add a weight.

### Intuition

A sloping roof exceeds its horizontal shadow. Cross-product length measures the local enlargement.

### Another explanation

Actual patch area equals parameter area times tangent cross-product length, including tilt.

### Quick check

Which part of a cross product gives the surface area element?

A. Its length
B. Any component
C. Its negative sign

Answer: A. It measures actual area spanned by local edges.

### A height graph

Using horizontal coordinates as parameters gives the square root of one plus the squared partial derivatives as area factor.

### Does orientation change area?

No. Cross-product length survives reversal, as does a scalar surface integral.

### Which density?

A membrane uses density per actual surface area, not projected area. Divide by actual area for surface averages too.

### Definition and conditions

Measure actual parallelogram area

$$
\iint_S f\,dS=\iint_U f(\mathbf r(u,v))\|\mathbf r_u\times\mathbf r_v\|dudv,\quad dS=\sqrt{1+g_x^2+g_y^2}\,dxdy
$$

- Use piecewise regular charts without repeated positive-area coverage, with continuous integrand. The graph formula needs a continuously differentiable height function.

### Derivation

Map small parameter edges to tangent vectors.

$$
d\mathbf r_1=\mathbf r_u du,\quad d\mathbf r_2=\mathbf r_v dv
$$

Take their parallelogram area.

$$
dS=\|\mathbf r_u\times\mathbf r_v\|dudv
$$

For a graph, cross-product length yields the radical factor.

$$
\|(-g_x,-g_y,1)\|=\sqrt{1+g_x^2+g_y^2}
$$

### Interactive diagram

As the roof steepens over a fixed base, how does area change?

A unit parameter square on plane $z=cx$; compare projection and actual area.

Online diagram: #/lesson/c3-surface-area?view=visual

### Guided experiment

1. **Horizontal** Set plane slope $c$ to $0$.

Preset observation: Actual and parameter-square areas agree.

2. **Tilted** Set plane slope $c$ to $1$.

Preset observation: The area factor is $\sqrt2$.

3. **Steeper** Set plane slope $c$ to $2$.

Preset observation: Projection stays fixed while actual area factor becomes $\sqrt5$.

### Worked examples

#### Example 1: A sloping roof

Find the area of $z=2x+y$ above the unit square.

- Partials are 2 and 1.
- The area factor is $\sqrt{1+4+1}=\sqrt6$; multiply by base area one.

**Answer: $\sqrt6$.**

#### Example 2: Paraboloid area

Find the area of $z=\frac12(x^2+y^2)$ over the unit disk.

- The factor is $\sqrt{1+r^2}$.
- $A=2\pi\int_0^1r\sqrt{1+r^2}dr=\frac{2\pi}3(2\sqrt2-1)$.

**Answer: $\frac{2\pi}3(2\sqrt2-1)$.**

### Common mistakes

- **Surface area equals projected area.** Include local tilt enlargement.

- **Downward orientation makes a scalar surface integral negative.** Its area element is unoriented; orientation does not negate it.

### Exercises and solutions

**1. Find the area of $z=x$ over the unit square.**

Hint: Use the square root of one plus squared slopes.

Answer: $\sqrt2$.

- Factor $\sqrt2$ times base area one.

**2. A membrane has area 5 and uniform area density 3. Find mass.**

Hint: Multiply actual area by density.

Answer: 15

- $5\cdot3=15$.

**3. Does reversing orientation change $\iint_S1\,dS$?**

Hint: Can length reverse sign?

Answer: Unchanged.

- Cross-product length is unchanged, so is area.

**4. Does small horizontal projection imply small actual area?**

Hint: Consider steep or vertical surfaces.

Answer: Not necessarily.

- Tilt factors may be large; a vertical surface is not a graph over that horizontal plane.

Prerequisites: Parametric surfaces and orientation.

## 8.3 Flux and oriented area

*Accumulate only what crosses the surface*

### The idea

Flux integrates the field's component along a chosen normal. Tangential flow does not cross the surface.

### Intuition

A field crossing a net head-on contributes most; flow along it contributes none. Reversing its front side reverses the sign.

### Another explanation

Multiply the normal component by actual area; a parameter cross product already combines them.

### Quick check

How does reversing surface orientation change flux?

A. Unchanged
B. Negates it
C. Turns it into area

Answer: B. The chosen normal determines flux sign.

### Unit normal or cross product?

A unit normal needs the actual area element. The unnormalized parameter cross product already includes area scaling: do not multiply it again.

### Outward on a closed surface

Normals point away from the enclosed material. On a cavity boundary they point into the cavity, not necessarily away from the origin.

### Does zero flux imply no flow?

Tangential flow or cancellation of inward and outward flow can give zero net flux. Net flow differs from total crossing magnitude.

### Definition and conditions

Accumulate only what crosses the surface

$$
\iint_S\mathbf F\cdot\mathbf n\,dS=\iint_U\mathbf F(\mathbf r)\cdot(\mathbf r_u\times\mathbf r_v)\,dudv
$$

- The surface is orientable and piecewise regular; the field is continuous on it. The parameter cross product must match the chosen normal; otherwise negate it.

### Derivation

Take the normal component.

$$
F_n=\mathbf F\cdot\mathbf n
$$

Multiply by actual patch area.

$$
d\Phi=F_n\,dS
$$

Combine unit normal and area scaling.

$$
\mathbf n\,dS=(\mathbf r_u\times\mathbf r_v)dudv
$$

### Interactive diagram

Must vertical flux increase as the tilted surface's area grows?

Vertical field $(0,0,1)$ through upward patch $z=cx$; show unit normal and area factor together.

Online diagram: #/lesson/c3-flux?view=visual

### Guided experiment

1. **Horizontal patch** Set plane slope $c$ to $0$.

Preset observation: The field crosses head-on; unit-parameter-patch flux is 1.

2. **Tilted patch** Set plane slope $c$ to $1$.

Preset observation: The normal component decreases while area grows; they compensate.

3. **Steeper patch** Set plane slope $c$ to $2$.

Preset observation: For fixed horizontal projection, flux stays 1 while actual area grows.

### Worked examples

#### Example 1: Flux through a tilted plane

Find upward flux of $\mathbf F=(0,0,2)$ across $z=x$ above the unit square.

- The oriented area vector is $(-1,0,1)dxdy$.
- The dot product is constantly 2, so flux is 2. Tilt scaling is already included.

**Answer: 2.**

#### Example 2: Radial field on a sphere

Find outward flux of $\mathbf F=(x,y,z)$ through the radius-2 sphere.

- The unit normal is position divided by 2, so the normal field component is 2.
- Sphere area is $16\pi$; multiplication gives $32\pi$.

**Answer: $32\pi$.**

### Common mistakes

- **After using a parameter cross product, multiply by area scaling again.** The cross product already contains that factor.

- **Zero net flux means the field vanishes everywhere.** Tangential flow or balanced crossing can give zero net flux.

### Exercises and solutions

**1. Find flux of constant field $(0,0,3)$ through an upward horizontal patch of area 2.**

Hint: Multiply the normal component by area.

Answer: 6

- $3\cdot2=6$.

**2. Find flux of constant field $(0,0,3)$ through a downward horizontal patch of area $2$.**

Hint: Reverse the normal.

Answer: $-6$

- The value changes from 6 to $-6$.

**3. Find flux of a horizontal field through a horizontal surface.**

Hint: Dot it with the vertical normal.

Answer: 0

- Every dot product is zero.

**4. When using an unnormalized cross product for flux, must $\sqrt{1+g_x^2+g_y^2}$ be included separately?**

Hint: Is the area factor already present?

Answer: No.

- The cross product supplies direction and area scaling; another radical duplicates it.

Prerequisites: Surface area and scalar surface integrals, Vector fields and streamlines.

## 8.4 Divergence and curl

*Measure net outflow and local rotation separately*

### The idea

Divergence measures net outflow per unit volume. Curl's normal component measures local circulation per unit area.

### Intuition

A tiny box measures excess outflow; a tiny paddle detects rotation. A field may have either, both or neither.

### Another explanation

Divergence examines box outflow; curl examines loop circulation. They measure different things.

### Quick check

Does zero divergence exclude local rotation?

A. Yes
B. No
C. The field must vanish

Answer: B. A pure rotation has zero divergence but nonzero curl.

### Why is divergence a scalar?

Compare flow across three opposite face pairs, divide by volume, and sum the three directional expansion rates.

### Why is curl a vector?

Rotation can occur about different axes. Its components describe circulation densities on the three oriented coordinate planes.

### Hypotheses for the identities

For sufficient smoothness, gradients have zero curl and curls have zero divergence. Mixed-derivative cancellation requires continuity and cannot be extended across singularities.

### Definition and conditions

Measure net outflow and local rotation separately

$$
\nabla\cdot\mathbf F=P_x+Q_y+R_z,\quad\nabla\times\mathbf F=(R_y-Q_z,P_z-R_x,Q_x-P_y)
$$

- Use continuously differentiable fields for the formulas and local interpretations. Identities need the relevant continuous second partials. These are classical derivatives, not distributional singularities.

### Derivation

Opposite-face flow differences use partial derivatives.

$$
\Phi_{\rm net}\approx(P_x+Q_y+R_z)\Delta V
$$

Small-loop circulation differences use cross partials.

$$
\Gamma_{xy}\approx(Q_x-P_y)\Delta A
$$

Continuous second mixed partials cancel.

$$
\nabla\times\nabla f=0,\quad\nabla\cdot(\nabla\times\mathbf F)=0
$$

### Interactive diagram

Can one field expand outward while rotating?

A horizontal slice of spatial field $(-y+cx,x+cy,0)$; planar expansion gives divergence $2c$ and curl $(0,0,2)$.

Online diagram: #/lesson/c3-div-curl?view=visual

### Guided experiment

1. **Pure rotation** Set radial coefficient $c$ to $0$.

Preset observation: Vertical curl is two; divergence zero.

2. **Add expansion** Set radial coefficient $c$ to $0.5$.

Preset observation: A planar radial component adds positive divergence without changing curl.

3. **Stronger expansion** Set radial coefficient $c$ to $1$.

Preset observation: Net outflow increases while rotation density stays two.

### Worked examples

#### Example 1: A radial field

Find divergence and curl of $\mathbf F=(2x,2y,2z)$.

- The three pure partials are each 2, so divergence is 6.
- Cross partials vanish, giving zero curl.

**Answer: Divergence 6; curl $\mathbf0$.**

#### Example 2: A rotational field

Find divergence and curl of $\mathbf F=(-3y,3x,0)$.

- Divergence is zero.
- The vertical curl component is $3-(-3)=6$; the others vanish.

**Answer: Divergence 0; curl $(0,0,6)$.**

### Common mistakes

- **Curved field arrows imply nonzero curl.** Curl measures local circulation density, not streamline shape alone.

- **Zero divergence means no motion.** Strong rotation or balanced flow may have zero local net outflow.

### Exercises and solutions

**1. Find divergence of $\mathbf F=(x^2,y,z)$.**

Hint: Differentiate each component in its own coordinate.

Answer: $2x+2$.

- $2x+1+1=2x+2$.

**2. Find curl of $\mathbf F=(y,0,0)$.**

Hint: Take cross partials in the specified order.

Answer: $(0,0,-1)$.

- The vertical component is $Q_x-P_y=0-1=-1$.

**3. Find the curl of a smooth gradient field.**

Hint: Mixed partials cancel.

Answer: $\mathbf0$.

- Each component subtracts equal mixed partials; continuous second derivatives give zero.

**4. Can a singular radial field be assigned zero divergence at its singularity using its outside formula?**

Hint: Are derivatives defined there?

Answer: No.

- An undefined field has no classical divergence there. An outside formula cannot fill the singularity.

Prerequisites: Green's theorem and planar flux, Flux and oriented area, Partial and higher-order derivatives.

## Chapter review

Try independently before reading the solutions.

**1. Find the area of $z=3x$ over a square of side 2.**

Hint: The area factor is constant.

Answer: $4\sqrt{10}$.

- Factor $\sqrt{10}$ times base area 4.

**2. Find upward flux of $(0,0,4)$ through $z=x+y$ over the unit square.**

Hint: Use the oriented area vector directly.

Answer: 4

- The cross product is $(-1,-1,1)$; its field dot product is 4.
- The base area is one.

**3. Find divergence and curl of $(z,x,y)$.**

Hint: Apply each definition separately.

Answer: Divergence 0; curl $(1,1,1)$.

- All pure partials vanish, giving zero divergence.
- All three curl components equal one.

# Chapter 9 · From local change to boundaries

Shared internal edges or faces cancel, connecting local change with total boundary behavior. Check smoothness, closure and orientation before choosing a calculation.

Goals:
- Match boundary and normal orientations
- Apply Stokes' and divergence theorems
- Connect local change with conservation

## 9.1 Stokes' theorem

*Keep the boundary and choose an easier surface*

### The idea

Stokes' theorem connects boundary circulation with curl flux through a surface.

### Intuition

Subdivide an open surface. Internal edges run in opposite directions and cancel, leaving the surface boundary.

### Another explanation

Use a more convenient surface with the same oriented boundary, provided field smoothness holds.

### Quick check

What can replace a difficult surface in Stokes' theorem?

A. Any equal-area surface
B. A surface with the same oriented boundary and required field smoothness
C. Any sphere

Answer: B. Preserve the boundary and check smoothness; do not cross invalid regions.

### Matching boundary direction

Point your right thumb along the positive normal; curled fingers give positive boundary direction. Walking with your head along that normal keeps the surface on your left.

### Replacing the surface

The replacement needs the same oriented boundary and a smooth field on the required neighborhoods. Do not cross singularities or invalid domains.

### Does a closed surface have a boundary curve?

Its curve boundary is empty, so smooth curl fields have zero total flux through it. A visible silhouette is not a boundary curve.

### Definition and conditions

Keep the boundary and choose an easier surface

$$
\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS
$$

- The surface is piecewise smooth and orientable, with compatible piecewise smooth boundary orientation. The field is continuously differentiable on an open neighborhood of the surface. Include all boundary components.

### Derivation

Pull each small-patch line integral into the parameter plane.

$$
P\,dx+Q\,dy+R\,dz=A\,du+B\,dv
$$

Apply Green's theorem and simplify by the chain rule.

$$
B_u-A_v=(\nabla\times\mathbf F)\cdot(\mathbf r_u\times\mathbf r_v)
$$

Cancel shared edges to obtain the full formula.

$$
\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS
$$

### Interactive diagram

Why is circulation unchanged when the interior bulges and area grows?

Field $(-y,x,0)$ on surface $z=c(1-x^2-y^2)$ above a unit disk, keeping boundary and upward orientation fixed.

Online diagram: #/lesson/c3-stokes?view=visual

### Guided experiment

1. **Flat disk** Set bulge height $c$ to $0$.

Preset observation: The surface is a disk; curl flux is $2\pi$.

2. **Raise the interior** Set bulge height $c$ to $0.5$.

Preset observation: The interior rises; boundary and curl flux stay unchanged.

3. **Higher surface** Set bulge height $c$ to $1$.

Preset observation: Actual area increases, but curl flux remains $2\pi$.

### Worked examples

#### Example 1: Replace a hemisphere by a disk

For $\mathbf F=(-y,x,0)$, find circulation around the unit upper hemisphere boundary counterclockwise from above.

- The boundary is a horizontal unit circle; use an upward disk.
- Curl is $(0,0,2)$; its flux is $2\pi$.

**Answer: $2\pi$.**

#### Example 2: A tilted triangular plane

For $\mathbf F=(0,x,0)$, take the first-octant triangle in plane $x+y+z=1$, with normal's vertical component positive.

- Curl is $(0,0,1)$.
- Flux equals its horizontal projected triangle area $1/2$.

**Answer: $\frac12$.**

### Common mistakes

- **Matching boundary shape is enough; ignore direction.** Reversing orientation negates both circulation and curl flux.

- **Every surface flux can use Stokes' theorem.** The theorem concerns curl flux, not arbitrary field flux.

### Exercises and solutions

**1. Find closed-loop circulation of a constant field.**

Hint: Its curl is zero and it is smooth everywhere.

Answer: 0

- Stokes, or constant force dotted with total displacement, gives zero.

**2. Find circulation of $(-y,x,0)$ around a horizontal radius-3 counterclockwise circle.**

Hint: Multiply curl two by disk area.

Answer: $18\pi$.

- $2\cdot9\pi=18\pi$.

**3. Can the compatible-orientation formula be used after reversing the normal alone?**

Hint: Do the orientations still match?

Answer: Not unchanged.

- The right-hand rule fails. Reverse the boundary or negate one side.

**4. Find total flux of a smooth field's curl through a closed sphere.**

Hint: The sphere has no boundary curve.

Answer: 0

- Stokes gives circulation over an empty boundary, hence zero.

Prerequisites: Divergence and curl, Parametric surfaces and orientation.

## 9.2 The divergence theorem and closed surfaces

*Replace outward boundary flux by interior net outflow*

### The idea

The divergence theorem equates outward flux through a closed surface with the integral of divergence over its enclosed volume.

### Intuition

Split a solid into boxes. Shared faces have opposite outward normals and cancel, leaving the exterior shell.

### Another explanation

The shell's net outflow equals total net outflow of interior boxes; common-face contributions cancel.

### Quick check

To which surface does the divergence theorem apply directly?

A. Any surface patch
B. The full outward boundary of a volume
C. Only a disk

Answer: B. Open surfaces require adding and subtracting missing pieces.

### Must the surface be closed?

The theorem needs the whole volume boundary. Add a missing cap, compute the closed flux, then subtract the cap's flux.

### Cavity normals

Point outward from the actual material. On inner boundaries this means into the cavity, not always away from the origin.

### Singularities

The field must be continuously differentiable on an open neighborhood of the solid. A point-source field undefined at the origin cannot have enclosing flux declared zero from its outside divergence.

### Definition and conditions

Replace outward boundary flux by interior net outflow

$$
\iint_{\partial E}\mathbf F\cdot\mathbf n_{\rm out}dS=\iiint_E\nabla\cdot\mathbf F\,dV
$$

- The solid is bounded with piecewise smooth outward-oriented boundary. The field is continuously differentiable on an open neighborhood including solid and boundary. Include cavity boundaries.

### Derivation

Apply the fundamental theorem to opposite box faces.

$$
\Phi_x=\iiint_E P_x\,dV
$$

Add all three coordinate contributions.

$$
\Phi=\iiint_E(P_x+Q_y+R_z)dV
$$

Subdivision cancels oppositely oriented common faces.

$$
\sum\Phi_{\rm interior}=0
$$

### Interactive diagram

If radius doubles, why does flux grow by more than area's factor four?

Radial field $\mathbf F=(x,y,z)$ through a variable-radius sphere. Arrows use common scale 0.22.

Online diagram: #/lesson/c3-divergence?view=visual

### Guided experiment

1. **Small sphere** Set sphere radius $R$ to $0.5$.

Preset observation: Radial flux scales as radius cubed.

2. **Unit sphere** Set sphere radius $R$ to $1$.

Preset observation: Outward flux is $4\pi$.

3. **Large sphere** Set sphere radius $R$ to $2$.

Preset observation: Doubling radius multiplies flux by eight; boundary field strength also increases.

### Worked examples

#### Example 1: Radial flux through a sphere

Find outward flux of $\mathbf F=(x,y,z)$ through the radius-2 sphere.

- Divergence is 3.
- Multiply by volume $32\pi/3$, giving $32\pi$, matching direct calculation.

**Answer: $32\pi$.**

#### Example 2: Adding a base

Find outward flux of $\mathbf F=(0,0,z+1)$ through the unit upper hemisphere.

- Add its base disk. Divergence one gives total closed flux $2\pi/3$.
- The base points down and the vertical field component is one, giving base flux $-\pi$.
- Subtract base flux from closed flux to obtain $5\pi/3$.

**Answer: $\frac{5\pi}3$.**

### Common mistakes

- **An open-surface flux directly equals a volume divergence integral.** Close the surface first, then remove the added flux.

- **A one-point singularity can be ignored.** It may invalidate derivative hypotheses while retaining nonzero flux.

### Exercises and solutions

**1. Find outward flux of $(2x,2y,2z)$ through the unit sphere.**

Hint: Multiply divergence six by ball volume.

Answer: $8\pi$.

- $6\cdot4\pi/3=8\pi$.

**2. Find net flux of a constant field through any regular closed surface.**

Hint: Its divergence vanishes.

Answer: 0

- The field is smooth everywhere; its divergence integral is zero.

**3. What happens to radial-field flux if a sphere is oriented inward?**

Hint: Reverse the normal.

Answer: It changes sign.

- Magnitude is unchanged and sign reversed.

**4. Where does a spherical shell's inner outward normal point?**

Hint: Out of the shell's material.

Answer: Into the cavity.

- The inner surface borders the cavity, so its normal points toward the center.

Prerequisites: Divergence and curl, Triple integrals in spherical coordinates.

## 9.3 Choosing an integral theorem

*Identify the integral, hypotheses and orientation*

### The idea

Path work, curl flux and closed-surface flux are different objects. Identify dimension, direction and field before choosing a theorem.

### Intuition

Are you traveling along a line or crossing a surface? Does the surface have a boundary or close a volume? These questions eliminate unsuitable tools.

### Another explanation

Identify line versus surface, boundary versus closure and available potentials before choosing a theorem.

### Quick check

Which theorem turns spatial closed-loop work into a surface integral?

A. The divergence theorem
B. Stokes' theorem
C. Taylor's theorem

Answer: B. Boundary circulation corresponds to curl flux.

### When are endpoints simplest?

For a global potential field, use endpoint differences on open or closed paths. Otherwise inspect the path or another applicable theorem.

### Green or Stokes?

Green concerns planar-region boundaries; Stokes concerns spatial-surface boundaries. Both connect circulation and local rotation, agreeing in the planar case.

### What does divergence handle?

The full outward flux of a closed volume boundary. It integrates divergence, not curl. Close open surfaces with consistently oriented added pieces.

### Definition and conditions

Identify the integral, hypotheses and orientation

$$
\nabla\varphi\ \longleftrightarrow\ \text{endpoint difference};\quad \nabla\times\mathbf F\ \longleftrightarrow\ \text{boundary circulation};\quad\nabla\cdot\mathbf F\ \longleftrightarrow\ \text{outward closed-surface flux}
$$

- Each conversion requires its own domain, smoothness, geometry and orientation hypotheses. No formula removes these requirements.

### Derivation

The chain rule links potential to endpoints.

$$
\int_C\nabla\varphi\cdot d\mathbf r=\varphi(B)-\varphi(A)
$$

An oriented surface links curl to circulation.

$$
\int_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS
$$

A complete boundary links divergence to volume.

$$
\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS=\iiint_E\nabla\cdot\mathbf F\,dV
$$

### Interactive diagram

If a fixed boundary keeps circulation unchanged, must closed-surface flux also stay unchanged?

Field $(-y/2,x/2,z)$; surface $z=c(1-r^2)$ and its base enclose a solid. Compare boundary circulation with full outward flux.

Online diagram: #/lesson/c3-choosing-theorem?view=visual

### Guided experiment

1. **Flat** Set bulge height $c$ to $0$.

Preset observation: The unit-circle circulation is $\pi$; the enclosed solid degenerates to volume zero.

2. **Bulging** Set bulge height $c$ to $0.5$.

Preset observation: Circulation is unchanged; added-base volume and closed flux are $\pi/4$.

3. **Higher** Set bulge height $c$ to $1$.

Preset observation: Circulation stays $\pi$, while closed flux increases to $\pi/2$.

### Worked examples

#### Example 1: One field, two integrals

For $\mathbf F=(-y/2,x/2,z)$, find positive circulation around the unit horizontal circle and outward flux through the unit sphere.

- Curl is $(0,0,1)$, giving circle circulation $\pi$.
- Divergence is 1, giving sphere flux equal to volume $4\pi/3$.

**Answer: Results $\pi$ and $\frac{4\pi}3$ answer different questions.**

#### Example 2: Choosing endpoints

Find work of field $(2x,2y,2z)$ along any path from the origin to $(1,1,1)$.

- Recognize potential $x^2+y^2+z^2$.
- Subtract endpoint values to get 3; no surface is needed.

**Answer: 3.**

### Common mistakes

- **Use Stokes for every surface integral.** Only curl flux corresponds to boundary circulation; arbitrary flux does not.

- **Divergence and curl are interchangeable.** They describe net outflow and local rotation, with different types and geometric objects.

### Exercises and solutions

**1. Which planar-region theorem suits boundary integral $Pdx+Qdy$?**

Hint: The integral follows the boundary tangent.

Answer: Green's theorem.

- Use Green's circulation form if the field covers the region and orientation matches.

**2. Which theorem suits outward flux through an entire sphere?**

Hint: The object is a full closed surface.

Answer: The divergence theorem.

- Use divergence if the field is continuously differentiable across the ball.

**3. Must a conservative-field path be closed before computing work?**

Hint: What does a potential already give?

Answer: No.

- Endpoint potential difference gives work directly.

**4. May a replacement surface cross a field singularity?**

Hint: Do its hypotheses hold on the new surface?

Answer: Not directly.

- Check the required neighborhood's smoothness; do not cross invalid regions blindly.

Prerequisites: Stokes' theorem, The divergence theorem and closed surfaces.

## 9.4 Conservation and local-to-global balance

*Net boundary outflow reduces the interior total*

### The idea

The continuity equation connects local density change with divergence of flux. Integrating gives mass balance on a fixed region.

### Intuition

Mass loss from a fixed container equals net boundary outflow. Shrinking the container yields the same balance locally.

### Another explanation

Account for missing interior mass through boundary outflow or internal sources.

### Quick check

Does decreasing mass in a fixed container violate conservation?

A. Always
B. Not necessarily; there may be net outflow
C. Density must be negative

Answer: B. Conservation includes boundary exchange.

### Is the flux field velocity?

Mass flux is density times velocity. Velocity flux gives volume flow; varying density makes the distinction essential.

### Connecting differentiation and integration

With sufficient smoothness, interchange time differentiation and volume integration on a fixed region. Then convert boundary outflow using divergence.

### How do the volume's tools connect?

Gradient describes local scalar change; divergence local net outflow; volume integrals accumulate interiors; surface integrals accumulate boundaries. Solving the resulting PDE belongs to a later volume.

### Definition and conditions

Net boundary outflow reduces the interior total

$$
\frac d{dt}\iiint_E\rho\,dV=-\iint_{\partial E}\rho\mathbf v\cdot\mathbf n\,dS,\quad\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf v)=0
$$

- The region is fixed with piecewise smooth boundary, without volume sources. Density and velocity have required continuous partials and permit differentiation under the integral. Moving boundaries or sources need extra terms.

### Derivation

Total mass derivative equals negative net boundary outflow.

$$
M\prime(t)=-\iint_{\partial E}\rho\mathbf v\cdot\mathbf n\,dS
$$

Use divergence to convert to a volume integral.

$$
M\prime(t)=-\iiint_E\nabla\cdot(\rho\mathbf v)dV
$$

Validity on arbitrary small fixed regions gives local balance.

$$
\rho_t+\nabla\cdot(\rho\mathbf v)=0
$$

### Interactive diagram

As mass decreases, must the outward flow rate remain constant?

Fixed unit ball, velocity $(x,y,z)$, density $e^{-3t}$. Compare interior mass derivative with outward mass flux.

Online diagram: #/lesson/c3-conservation?view=visual

### Guided experiment

1. **Initial time** Set time $t$ to $0$.

Preset observation: Density is one; mass and outward flow are positive.

2. **Later** Set time $t$ to $0.5$.

Preset observation: Uniform density decays exponentially, reducing outward mass flow too.

3. **Final displayed time** Set time $t$ to $1$.

Preset observation: Mass keeps falling; its derivative remains the negative of outward flow.

### Worked examples

#### Example 1: Uniform expansion

For velocity $\mathbf v=(x,y,z)$, spatially uniform density and initial density one, find a conserving density.

- Divergence is 3; spatial uniformity gives $\nabla\rho=0$.
- The equation becomes $\rho\prime+3\rho=0$; initial data give $e^{-3t}$.

**Answer: $\rho(t)=e^{-3t}$.**

#### Example 2: Mass change in a fixed ball

For that model, find mass and outward mass flow in the unit ball.

- Mass $M=(4\pi/3)e^{-3t}$; derivative $-4\pi e^{-3t}$.
- The boundary normal velocity is one, giving flux $4\pi e^{-3t}$.

**Answer: Mass derivative and outward flow have opposite signs and equal magnitudes.**

### Common mistakes

- **Velocity itself is mass flux.** Multiply by density; their units differ.

- **Conservation means mass in every fixed region is constant.** Boundary exchange can change interior mass. Conservation is the full balance.

### Exercises and solutions

**1. A source-free fixed region has outward mass flow 5. Find its mass derivative.**

Hint: What sign does outflow have for interior mass?

Answer: $-5$

- Mass decreases, giving derivative $-5$.

**2. With constant velocity and density uniform in space and time, does continuity hold?**

Hint: Inspect time change and divergence separately.

Answer: The inequality holds.

- Density's time derivative and constant-flux divergence are both zero.

**3. For divergence-free velocity and spatially uniform density, can source-free density vary arbitrarily in time?**

Hint: Insert into local balance.

Answer: No; it must be constant in time.

- Zero spatial gradient and zero velocity divergence force zero time derivative of density.

**4. An internal source creates mass at rate 2 while outward flow is 5. Find the mass derivative.**

Hint: Include the source in the balance.

Answer: $-3$

- Production minus outflow is $2-5=-3$.

Prerequisites: Choosing an integral theorem, First-order linear equations.

## Chapter review

Try independently before reading the solutions.

**1. Find positive circulation of $(-y/2,x/2,z)$ around a horizontal radius-2 circle.**

Hint: The vertical curl component is one.

Answer: $4\pi$.

- Disk area is $4\pi$; Stokes gives circulation $4\pi$.

**2. Find inward flux of $(x,2y,3z)$ through the unit sphere.**

Hint: Compute outward flux, then reverse.

Answer: $-8\pi$.

- Divergence is 6; outward flux $8\pi$.
- Negate for inward flux.

**3. A fixed container receives mass 7, loses 4 and produces 1 per unit time. Find mass derivative.**

Hint: Net inflow plus source.

Answer: 4

- $7-4+1=4$.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. Find distance from point $(1,2,2)$ to plane $2x-y+2z=1$.**

Hint: Divide absolute residual by normal length.

Answer: 1

- Residual is $2-2+4-1=3$.
- Normal length 3 gives distance one.

**2. Find triangle area with vertices at the origin, $(1,1,0)$, $(0,1,1)$.**

Hint: Take half the cross-product length.

Answer: $\frac{\sqrt3}2$.

- Cross product $(1,-1,1)$ has length $\sqrt3$.

**3. Find distance traveled by $(\cos t,\sin t,2t)$ from zero to $\pi$.**

Hint: Speed is constant.

Answer: $\pi\sqrt5$.

- Multiply speed $\sqrt5$ by time $\pi$.

**4. Find the gradient and steepest rate of $f=x^2y+y^2$ at $(2,1)$.**

Hint: Compute both partials and gradient length.

Answer: Gradient $(4,6)$; maximum rate $2\sqrt{13}$.

- Gradient $(4,6)$.
- Maximum directional derivative $\sqrt{16+36}=2\sqrt{13}$.

**5. For $f=\frac{xy^2}{x^2+y^2}$, extended by zero at the origin, check continuity and differentiability.**

Hint: Squeeze first, then inspect diagonal linearization error.

Answer: Continuous but not differentiable.

- Magnitude is at most $|x|$, giving continuity; both partials are zero.
- Along $x=y=t$, the function is $t/2$. Its absolute error-to-distance ratio is $1/(2\sqrt2)$, not tending to zero.

**6. Classify the origin of $3x^2+2xy+3y^2$.**

Hint: Use the second-derivative test or complete squares.

Answer: A strict global minimum.

- $D=6\cdot6-2^2=32>0$; the first pure second partial is positive.

**7. Find the maximum of $x+2y+2z$ on the unit sphere.**

Hint: Dot the constant objective gradient with a unit position.

Answer: 3

- Gradient length 3 gives upper bound 3.
- Equality occurs at $(1/3,2/3,2/3)$.

**8. Integrate $x+y$ over $0\le x\le1,0\le y\le1-x$.**

Hint: Evaluate the inner integral or use the triangle's centroid.

Answer: $\frac13$.

- The inner integral is $x(1-x)+(1-x)^2/2$.
- Integrate the first coordinate from zero to one to get $1/3$.

**9. Integrate $1/r$ over annulus $1\le r\le3$.**

Hint: The radial area factor cancels the density denominator.

Answer: $4\pi$.

- $\int_0^{2\pi}\int_1^3 1\,drd\theta=4\pi$.

**10. Find mass in the unit ball with volume density $\rho=x^2+y^2+z^2$.**

Hint: Use spherical coordinates.

Answer: $\frac{4\pi}5$.

- Squared radial density times squared radial volume factor gives radial integral $1/5$.
- The angular factor is $4\pi$.

**11. Find work of field $(2xy,x^2,1)$ from $(0,0,0)$ to $(2,1,3)$.**

Hint: A potential must match all three components.

Answer: 7

- Potential $x^2y+z$.
- Endpoint difference $4+3=7$.

**12. Find work of $(-y,x,0)$ around the unit circle clockwise twice.**

Hint: Compute one turn, then account for orientation and repetition.

Answer: $-4\pi$.

- One counterclockwise turn gives $2\pi$; two reversed turns give $-4\pi$.

**13. Find the upward unit normal of $z=2x-y$ over the unit square.**

Hint: Normalize the cross product.

Answer: $\frac{(-2,1,1)}{\sqrt6}$.

- The unnormalized normal is $(-2,1,1)$, with length $\sqrt6$.

**14. Find outward flux of $(x,y,z)$ through the entire boundary of shell $1\le r\le2$.**

Hint: Multiply divergence by shell volume, or handle inner and outer orientations separately.

Answer: $28\pi$.

- Volume is $28\pi/3$; divergence 3.
- The inner normal points toward the center, giving total flux $32\pi-4\pi=28\pi$.

**15. Find work of $(0,0,x)$ around the positive unit-circle boundary in plane $z=0$.**

Hint: The displacement has no vertical component.

Answer: 0

- The direct dot product is zero everywhere.
- Curl $(0,-1,0)$ also dots to zero with the upward disk normal.

**16. For density $\rho=e^{-2t}$ and velocity $(x,y,0)$ in a fixed region, does source-free conservation hold?**

Hint: Compute time derivative and mass-flux divergence.

Answer: The source-free continuity equation holds.

- The time derivative is $-2e^{-2t}$; divergence is $2e^{-2t}$.
- Their sum is zero, satisfying continuity.

# Glossary

- **Spatial coordinates and vectors**: A vector records direction and distance of motion. The same displacement can start at different positions.

- **Dot products and projections**: The dot product measures alignment. Projection gives the part pointing along a chosen direction.

- **Cross products, area and normals**: The cross product is perpendicular to both input vectors. Its length is their parallelogram's area.

- **Lines and planes in space**: A line moves from one point in a fixed direction. Every displacement within a plane is perpendicular to its normal.

- **Quadric surfaces and cross-sections**: Fix one coordinate to obtain a cross-section. Key slices are more reliable than memorized silhouettes.

- **Cylindrical and spherical coordinates**: Cylindrical coordinates suit axial shapes; spherical coordinates suit shapes naturally described by distance from the origin.

- **Vector-valued functions and tangents**: A vector-valued function gives position. Its derivative is instantaneous velocity, pointing along the path.

- **Velocity, acceleration and distance**: Velocity is position's rate of change. Speed is its length. Integrating speed gives distance; integrating velocity gives displacement.

- **Arc-length parameters and curvature**: Curvature measures tangent-direction change per unit distance. It describes the curve's shape.

- **Multivariable functions and level sets**: A two-variable function assigns height to each allowed planar position. A contour joins positions with the same height.

- **Multivariable limits and continuity**: A multivariable limit controls every approach within the domain. Two conflicting paths disprove it; finitely many agreeing paths do not prove it.

- **Partial and higher-order derivatives**: A partial derivative measures instantaneous change in one variable while all others stay fixed.

- **Differentiability, tangent planes and error**: Differentiability means one linear expression explains the increment, with remainder negligible relative to displacement length.

- **The multivariable chain rule and implicit functions**: When a quantity depends on several intermediate variables, sum the products of local rates along every dependency path.

- **Directional derivatives and gradients**: For a differentiable function, the gradient encodes every directional first-order rate in one vector.

- **Second-order Taylor models**: Second-order Taylor polynomials record directional curvature and interactions beyond the tangent plane.

- **Critical points and the second-derivative test**: A differentiable interior extremum must have zero gradient. Second-order shape distinguishes a bowl bottom, top or saddle.

- **Global extrema on closed regions**: A continuous function on a nonempty closed bounded region attains its maximum and minimum. Compare all candidates.

- **Lagrange multipliers and constrained extrema**: On a smooth equality constraint, an extremal objective gradient is normally parallel to the constraint gradient. Multipliers express that alignment.

- **Double integrals and Fubini's theorem**: A double integral accumulates density or signed height over a planar region into one number.

- **General regions and changing integration order**: Limits describe a region. Changing integration order requires reading its boundaries afresh.

- **Double integrals in polar coordinates**: Polar coordinates simplify circular boundaries, but actual patch area is radius times radial width times angular width.

- **Density, centers of mass and inertia**: Density times area gives mass; multiplying by position gives first moment; multiplying by squared axis distance gives moment of inertia.

- **Triple integrals and spatial regions**: Triple integrals accumulate spatial density. Integrating one gives volume.

- **Triple integrals in cylindrical coordinates**: Cylindrical coordinates retain height and use polar coordinates horizontally. The volume element keeps one radial factor.

- **Triple integrals in spherical coordinates**: The spherical volume element contains distance squared and sine of inclination, arising from two different angular arcs.

- **General changes of variables and Jacobians**: A Jacobian determinant gives a smooth coordinate map's local area or volume scaling. Integration uses its absolute value.

- **Vector fields and streamlines**: A vector field assigns a vector to each point. A streamline's tangent follows the field at each point.

- **Scalar line integrals**: A scalar line integral weights a wire's density by arc length. Reversing direction leaves it unchanged.

- **Work and vector line integrals**: A work integral dots force with each directed displacement. Reversing the path reverses its sign.

- **Potentials, path independence and holes**: For a field equal to the gradient of a single-valued function, work is final potential minus initial potential.

- **Green's theorem and planar flux**: Green's theorem converts positive boundary circulation to an integral of local rotation. A second form computes outward planar flux.

- **Parametric surfaces and orientation**: Two parameters generate a spatial surface. Their independent tangent vectors have a cross product giving the local normal.

- **Surface area and scalar surface integrals**: A surface element is the length of the tangent cross product times parameter area. Scalar surface integrals add a weight.

- **Flux and oriented area**: Flux integrates the field's component along a chosen normal. Tangential flow does not cross the surface.

- **Divergence and curl**: Divergence measures net outflow per unit volume. Curl's normal component measures local circulation per unit area.

- **Stokes' theorem**: Stokes' theorem connects boundary circulation with curl flux through a surface.

- **The divergence theorem and closed surfaces**: The divergence theorem equates outward flux through a closed surface with the integral of divergence over its enclosed volume.

- **Choosing an integral theorem**: Path work, curl flux and closed-surface flux are different objects. Identify dimension, direction and field before choosing a theorem.

- **Conservation and local-to-global balance**: The continuity equation connects local density change with divergence of flux. Integrating gives mass balance on a fixed region.

- **Little-$o$ notation**: $R(\mathbf h)=o(\|\mathbf h\|^p)$ means the remainder divided by distance to power $p$ tends to zero.

- **Hessian**: The matrix of all second partials; symmetric under continuous second partial derivatives.

- **Regular point**: A nondegenerate point: nonzero curve velocity, nonzero parameter-surface cross product, or nonzero level-constraint gradient, as appropriate.

- **Simply connected**: A connected domain in which every loop contracts continuously to a point within the domain. Planar regions with holes generally fail this.

- **Compact set**: In finite-dimensional Euclidean space, a closed bounded set. Continuous functions attain extrema on nonempty compact sets.

- **Flux**: Accumulate a field's chosen unit-normal component over actual area. Reversing the normal reverses its sign.

# Proof supplements and scope

## Determinants, Jacobians and derivative matrices

The determinant of matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ is $ad-bc$. Expanding a three-dimensional determinant by its first row gives $a(ei-fh)-b(di-fg)+c(dh-eg)$. Each matrix-product entry is a row-column dot product; derivative-matrix multiplication sums over intermediate variables in the chain rule. These local tools do not replace a full linear-algebra course.

## The scope of mixed-partial, implicit-function and Taylor results

This volume cites interchange of continuous mixed partials, local implicit functions at regular points and multivariable Taylor's theorem. Restriction to segment $g(t)=f(\mathbf a+t\mathbf h)$ reduces Taylor to one variable; the chain rule generates mixed terms. If that parameter function's third derivative is bounded by $M$, its remainder is at most $M/6$. This $M$ already includes the displacement vector; do not multiply by distance cubed again.

## Green's proof on rectangles and extension limits

For rectangle $[a,b]\times[c,d]$, horizontal sides contribute $\int_a^b[P(x,c)-P(x,d)]dx=-\iint P_y\,dA$, vertical sides $\int_c^d[Q(b,y)-Q(a,y)]dy=\iint Q_x\,dA$. Adding yields Green's theorem. Shared edges cancel across pieces. General piecewise smooth boundaries additionally need suitable approximation and integrability arguments; a drawn mesh is not a complete general proof.

## Why graph-surface Stokes reduces to Green

For graph $\mathbf r(u,v)=(u,v,g(u,v))$, pullback line-integral coefficients are $A=P+Rg_u,B=Q+Rg_v$, with field components evaluated on the surface. For a twice continuously differentiable graph, expanding $B_u-A_v$ and applying the chain rule yields $(\nabla\times\mathbf F)\cdot(\mathbf r_u\times\mathbf r_v)$, with mixed second partials cancelling. Apply Green on the parameter domain. The general theorem for piecewise regular surfaces also needs compatible coverage and orientation; that form is cited here.

## Divergence, singularities and point sources

For a box, pair its six face fluxes with the single-variable fundamental theorem. Across pieces, internal faces cancel. General boundaries require approximation arguments. Field $\mathbf F=\mathbf r/\|\mathbf r\|^3$ has zero divergence away from the origin; on a radius-$R$ sphere its normal component is $1/R^2$ and flux $4\pi$. It is undefined at the origin, so a containing ball fails the classical theorem's hypotheses. A zero-volume singularity cannot simply be deleted from those hypotheses.

## What numerical visuals can and cannot establish

Figures use finite meshes and floating-point numbers. Midpoint sums for linear functions may be exact; polygonal sphere areas are usually approximate. A model's analytic formulas supply readouts labeled exact. Animations reach stated control endpoints; parameters approaching zero retain positive lower bounds. No finite operation completes an infinite limit. Three-dimensional projection preserves equal axis scales; top view loses height, recoverable by rotation.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [MIT OCW · 18.02SC Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/): Used to check public course scope and concept order. Explanations, examples, exercises, solutions and visuals are independently authored; no lecture text or problem banks were copied.

- [OpenStax · Calculus Volume 3](https://openstax.org/books/calculus-volume-3/pages/preface): Used to check definitions and hypotheses, especially substitution, Stokes' and divergence theorems. No passages, examples or images were copied. Source licensing does not extend to unrelated project assets.
