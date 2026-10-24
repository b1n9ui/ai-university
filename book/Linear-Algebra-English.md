# AI University · Linear Algebra

From systems to spaces, projections, and factorizations

English edition 1 · source v0.1.1 · AI-authored · CC0 text / MIT code · Not individually human-reviewed

A complete finite-dimensional introduction: systems, matrices and maps, vector spaces, the four fundamental subspaces, determinants, eigenvalues, orthogonality, least squares, symmetric matrices, SVD, networks, and data applications.

Scope: Ten chapters and fifty lessons form a complete introductory course in finite-dimensional real vector spaces and matrices, including complex eigenvalues, pseudoinverses, low-rank approximation, conditioning, and PCA. Full Jordan theory, abstract duality, tensors, and infinite-dimensional analysis are left to later volumes.

Read the intuition, check the conditions, follow the derivations and examples, then try the exercises. Interactive diagrams are available online; finite sampling is not a mathematical proof.

## Contents

### Vectors and linear systems

- 1.1 Vectors and linear combinations
- 1.2 Row and column views of a system
- 1.3 Gaussian elimination and row operations
- 1.4 Pivots, consistency, and free variables
- 1.5 Parametric form and the full solution set

### Matrices and linear maps

- 2.1 Matrices, transposes, and multiplication
- 2.2 Linear maps and standard matrices
- 2.3 Composition, rotations, and shears
- 2.4 Inverses and the invertible matrix theorem
- 2.5 LU factorization and repeated solves

### Vector spaces, bases, and coordinates

- 3.1 Vector spaces and subspaces
- 3.2 Span and spanning sets
- 3.3 Linear independence and redundant directions
- 3.4 Bases and unique representation
- 3.5 Dimension, extension, and basis size
- 3.6 Basis coordinates and change of basis

### Null spaces, images, and rank

- 4.1 Kernel and null space
- 4.2 Column space and row space
- 4.3 Rank-nullity, injectivity, and surjectivity
- 4.4 The four fundamental subspaces

### Determinants

- 5.1 Determinants and oriented volume
- 5.2 Determinant rules
- 5.3 Cofactor expansion and the determinant
- 5.4 Determinants, inverses, and Cramer's rule

### Eigenvalues and diagonalization

- 6.1 Eigenvectors and eigenspaces
- 6.2 Characteristic polynomials, trace, and determinant
- 6.3 Repeated roots and eigenspace dimension
- 6.4 Diagonalization and similar matrices
- 6.5 Complex eigenvalues and planar rotation

### Orthogonality, projection, and least squares

- 7.1 Inner products, lengths, and angles
- 7.2 Vector projection and nearest points
- 7.3 Orthogonal complements and decompositions
- 7.4 Gram-Schmidt orthogonalization
- 7.5 QR factorization
- 7.6 Least squares and normal equations

### Symmetric matrices and quadratic forms

- 8.1 Real symmetric matrices and the spectral theorem
- 8.2 Quadratic forms and principal axes
- 8.3 Positive definite and semidefinite matrices
- 8.4 Cholesky factorization and completing squares
- 8.5 Rayleigh quotients and extrema on the unit sphere

### Singular value decomposition and numerical stability

- 9.1 Singular values and length scaling
- 9.2 Singular value decomposition
- 9.3 Pseudoinverses and minimum-norm solutions
- 9.4 Truncated SVD and optimal low-rank approximation
- 9.5 Condition numbers and error amplification

### Iteration, networks, and data analysis

- 10.1 Markov matrices and steady states
- 10.2 Matrix powers and linear recurrences
- 10.3 Graphs, incidence matrices, and flow conservation
- 10.4 Principal component analysis and centering
- 10.5 Choosing a linear algebra tool

# Chapter 1 · Vectors and linear systems

Read matrix equations through vector addition, then use elimination to determine existence and uniqueness.

Goals:
- Form linear combinations
- Perform reversible row operations
- Describe the entire solution set

## 1.1 Vectors and linear combinations

*Directions and coefficients*

### The idea

A linear combination scales and adds fixed vectors to form a new vector.

### Intuition

A vector is an ordered list of numbers and can represent displacement. Addition joins displacements; scaling changes magnitude or direction.

### Another explanation

A linear combination chooses coefficients for given directions. What matters is the component sum, rather than where the arrows are drawn.

### Quick check

How can you represent the zero vector?

A. You must use no vectors
B. Set every coefficient to zero
C. You must use negative coefficients

Answer: B. Zero coefficients make every term zero.

### What does a vector record?

A vector in $\mathbb R^n$ has $n$ real components. Add only vectors of the same dimension, component by component. This book uses column vectors.

### What do coefficients control?

In $a\mathbf u+b\mathbf v$, scale each direction by a signed coefficient, then add. Negative coefficients reverse direction; zero leaves a vector out.

### How do you check a representation?

Check each component. Looking close in a diagram does not establish equality. A vector may have several linear-combination representations.

### Definition and conditions

Vectors and linear combinations

$$
\mathbf w=\sum_{j=1}^k c_j\mathbf v_j,\qquad (u+v)_i=u_i+v_i
$$

- All vectors belong to the same real coordinate space; coefficients are real.

### Derivation

Scale each component.

$$
a\binom{u_1}{u_2}=\binom{au_1}{au_2}
$$

Then add.

$$
a\mathbf u+b\mathbf v=\binom{au_1+bv_1}{au_2+bv_2}
$$

Compare corresponding components.

$$
a\mathbf u+b\mathbf v=\mathbf w\iff au_i+bv_i=w_i\quad(1\le i\le n)
$$

### Interactive diagram

How far must you move in each direction to reach the target?

Fix $u=(1,0),v=(1,1)$ and adjust coefficients. Compare $au$, $bv$, and their sum.

Online diagram: #/lesson/la-vectors?view=visual

### Guided experiment

1. **Use only the first direction** Set $a=1,b=0$.

Preset observation: The sum is $(1,0)$.

2. **Add the second direction** Set $a=1,b=1$.

Preset observation: The sum is $(2,1)$; join the arrows head to tail.

3. **Use a negative coefficient** Set $a=-1,b=1$.

Preset observation: The horizontal components cancel, giving $(0,1)$.

### Worked examples

#### Example 1: From coefficients to a vector

Given $\mathbf u=(1,2),\mathbf v=(2,-1)$, find $2\mathbf u-\mathbf v$.

- $2\mathbf u=(2,4)$.
- Subtract to get $(0,5)$.

**Answer: $(0,5)$.**

#### Example 2: From a vector to coefficients

Express $(5,1)$ as a linear combination of $(1,1)$ and $(1,-1)$.

- The coefficients satisfy $a+b=5,a-b=1$.
- Adding gives $a=3$, then $b=2$.

**Answer: $(5,1)=3(1,1)+2(1,-1)$.**

### Common mistakes

- **Adding vectors means adding their lengths.** Different directions can cancel; add components instead.

- **Coefficients must be nonnegative.** Real linear combinations allow any real coefficients.

### Exercises and solutions

**1. Find $3(1,-1)+(0,2)$.**

Hint: Compute each coordinate separately.

Answer: $(3,-1)$.

- $(3,-3)+(0,2)=(3,-1)$.

**2. Find $(2,0,1)-(1,3,-2)$.**

Hint: Subtracting a negative adds it.

Answer: $(1,-3,3)$.

- Componentwise subtraction gives $(1,-3,3)$.

**3. If $a(1,0)+b(1,1)=(4,3)$, find $a$.**

Hint: Read the second component first.

Answer: 1

- $b=3$; then $a+b=4$ gives $a=1$.

**4. Is $(1,0)$ a scalar multiple of $(0,1)$?**

Hint: Check the first component.

Answer: No.

- Every $c(0,1)$ has first component zero.

Prerequisites: Elementary algebra.

## 1.2 Row and column views of a system

*Two views of the same constraints*

### The idea

A system describes both an intersection of geometric constraints and a linear combination.

### Intuition

The row view asks whether a point lies on every line. The column view asks whether the columns can combine to produce the right-hand side.

### Another explanation

Solving a system is finding a recipe: columns are ingredients and unknowns specify how much of each to use.

### Quick check

In the column view of $A\mathbf x=\mathbf b$, what does $\mathbf x$ represent?

A. A target position
B. Coefficients of the column vectors
C. The number of matrix rows

Answer: B. Each unknown multiplies its corresponding column.

### What makes an equation linear?

Unknowns appear only to the first power, with known coefficients. Neither $xy=1$ nor $x^2+y=0$ is linear.

### What does the row view show?

A nondegenerate equation in two variables describes a line. Common points solve the system. Distinct parallel lines have no solution; coincident lines share every point. A degenerate equation may describe the whole plane or the empty set.

### How does the column view match?

Treat unknowns as coefficients of column vectors. In $A\mathbf x=\mathbf b$, their linear combination equals the right-hand side.

### Definition and conditions

Row and column views of a system

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}\binom xy=\binom pq\iff x\binom ac+y\binom bd=\binom pq
$$

- Each matrix row represents an equation. The row count must match the length of the right-hand side.

### Derivation

Expand by rows.

$$
ax+by=p,\quad cx+dy=q
$$

Collect terms for each unknown.

$$
x(a,c)+y(b,d)=(p,q)
$$

Both forms impose the same equalities.

$$
\{\mathbf x:A\mathbf x=\mathbf b\}=\text{intersection of the equation solution sets}
$$

### Interactive diagram

When do the lines intersect, coincide, or run parallel?

The constraints are $x+y=2$ and $x+cy=b$. For a singular matrix, distinguish coincident lines from distinct parallel lines.

Online diagram: #/lesson/la-equations?view=visual

### Guided experiment

1. **One intersection** Set $c=2,b=3$.

Preset observation: The solution is $(1,1)$; the determinant is one.

2. **Repeated constraints** Set $c=1,b=2$.

Preset observation: The lines coincide. The coefficient rank is one, with infinitely many solutions.

3. **Conflicting constraints** Keep $c=1$ and change $b$ to $3$.

Preset observation: Distinct parallel lines never meet. The augmented rank exceeds the coefficient rank.

### Worked examples

#### Example 1: Two lines meet at one point

Solve $x+y=3,x-y=1$.

- Adding gives $2x=4$.
- From $x=2$ we get $y=1$, satisfying both equations.

**Answer: $(2,1)$.**

#### Example 2: Conflicting constraints

Does $x+y=1,2x+2y=3$ have a solution?

- Doubling the first equation requires $2x+2y=2$.
- It cannot also equal $3$.

**Answer: No solution.**

### Common mistakes

- **Two equations always have exactly one solution.** Equations can repeat or conflict.

- **A plotted intersection is accurate enough by itself.** A diagram helps identify the situation; substitute exact coordinates to verify the solution.

### Exercises and solutions

**1. Does $(1,2)$ satisfy $x+2y=5$?**

Hint: Substitute on the left.

Answer: Yes.

- $1+2\cdot2=5$.

**2. How many solutions does $x+y=2,2x+2y=4$ have?**

Hint: Does the second equation add a constraint?

Answer: Infinitely many: $(t,2-t)$.

- The second equation is twice the first.

**3. In $x+y=2,x+2y=3$, what is $y$?**

Hint: Subtract the equations.

Answer: 1

- $y=1$, followed by $x=1$.

**4. If $A$ has $3$ rows and $2$ columns, how many unknowns occur in $A\mathbf x=\mathbf b$?**

Hint: Each column corresponds to one unknown.

Answer: 2

- $\mathbf x\in\mathbb R^2$.

Prerequisites: Vectors and linear combinations.

## 1.3 Gaussian elimination and row operations

*Rewrite constraints without changing solutions*

### The idea

Elimination removes unknowns step by step while preserving the entire solution set.

### Intuition

Subtracting a multiple of one row from another rewrites a constraint using known information. The operation is reversible, so no solution is lost.

### Another explanation

Elimination rewrites the same constraints in an easier form. Each step should be reversible.

### Quick check

Which operation can discard an original constraint?

A. Swap two rows
B. Multiply an entire row by zero
C. Add twice another row

Answer: B. Multiplication by zero turns a constraint into an identity.

### Which row operations are valid?

Swap two rows, multiply a row by a nonzero scalar, or add a multiple of another row. Each is reversible.

### How do you use an augmented matrix?

Write coefficients and the right-hand side together as $[A\mid\mathbf b]$. Apply each operation to the whole row, including the right-hand side.

### When do you back substitute?

After reaching echelon form, solve upward from the last nonzero equation. Continue clearing above pivots and scaling them to one to obtain reduced echelon form.

### Definition and conditions

Gaussian elimination and row operations

$$
R_i\leftarrow R_i+cR_j\quad(i\ne j),\qquad [A\mid b]\sim[U\mid d]
$$

- A row scale factor must be nonzero. Row operations preserve solutions but generally change the matrix as a linear map.

### Derivation

Choose a nonzero pivot.

$$
\left[\begin{array}{cc|c}1&1&3\\2&3&8\end{array}\right]
$$

Eliminate the entries below it.

$$
R_2-2R_1:\quad\left[\begin{array}{cc|c}1&1&3\\0&1&2\end{array}\right]
$$

Back substitute or continue eliminating.

$$
R_1-R_2:\quad\left[\begin{array}{cc|c}1&0&1\\0&1&2\end{array}\right]
$$

### Interactive diagram

Does eliminating a coefficient change the intersection?

Fix $x+y=3,2x+3y=8$. View the original system, eliminate the first entry of row two, then the second entry of row one.

Online diagram: #/lesson/la-elimination?view=visual

### Guided experiment

1. **Original system** Select the original system.

Preset observation: The lines intersect at $(1,2)$.

2. **Eliminate below** Select the second step.

Preset observation: The second constraint becomes $y=2$; the intersection stays fixed.

3. **Finish elimination** Select the third step.

Preset observation: The constraints are $x=1,y=2$; the solution set is unchanged.

### Worked examples

#### Example 1: Solve in two steps

Solve $x+y=3,2x+3y=8$.

- Subtract twice the first equation from the second to get $y=2$.
- Substitute into the first equation to get $x=1$.

**Answer: $(1,2)$.**

#### Example 2: A row swap is needed

Solve $2y=4,x+y=3$.

- Swap rows to place a nonzero pivot in the first column.
- First obtain $y=2$, then $x=1$.

**Answer: $(1,2)$. A zero first coefficient does not imply inconsistency.**

### Common mistakes

- **Multiplying an entire row by zero preserves solutions.** It discards an original constraint.

- **The right-hand side is excluded from elimination.** Both sides must change together.

### Exercises and solutions

**1. What results from dividing the augmented row $(2,4\mid6)$ by $2$?**

Hint: Include the right-hand side.

Answer: $(1,2\mid3)$.

- $(1,2\mid3)$.

**2. What reverses $R_2\leftarrow R_2-3R_1$?**

Hint: Add back the quantity that was subtracted.

Answer: $R_2\leftarrow R_2+3R_1$.

- $R_2\leftarrow R_2+3R_1$.

**3. In $x+2y=5,y=2$, find $x$.**

Hint: Back substitute from bottom to top.

Answer: 1

- $x=5-4=1$.

**4. After swapping columns for two unknowns, can you read the solution using the original variable labels?**

Hint: Column positions identify variables.

Answer: No.

- A column swap reorders variables; record the label change too.

Prerequisites: Row and column views of a system.

## 1.4 Pivots, consistency, and free variables

*Check contradictions before counting free variables*

### The idea

Pivots identify independent constraints on variables. A contradiction row signals no solution.

### Intuition

Some equations repeat earlier constraints. Nonzero rows left after elimination reveal how many independent constraints remain.

### Another explanation

First check for conflicting constraints, then count what remains free. The number of equations alone answers neither question.

### Quick check

How many real solutions does a consistent system with a free variable have?

A. One solution
B. No solution
C. Infinitely many solutions

Answer: C. A free variable ranges continuously over real values.

### Where are the pivots?

In echelon form, each nonzero row begins with a pivot. Successive pivots lie strictly farther right; zero rows appear at the bottom.

### How do you recognize inconsistency?

An augmented row $[0\ \cdots\ 0\mid d]$ with $d\ne0$ states $0=d$, so no solution exists.

### How do you classify a consistent system?

Without contradiction rows, nonpivot columns correspond to free variables. No free variables gives one solution; at least one gives infinitely many real solutions.

### Definition and conditions

Pivots, consistency, and free variables

$$
A\mathbf x=b\text{ is consistent}\iff\operatorname{rank}A=\operatorname{rank}[A\mid b]
$$

- Rank counts pivots in echelon form. Count only coefficient columns when identifying free variables.

### Derivation

The coefficient pivot count is the rank.

$$
r=\#\{\text{coefficient pivots}\}
$$

Each nonpivot unknown can be chosen freely.

$$
\#\{\text{free variables}\}=n-r
$$

First check whether the augmented column adds a pivot.

$$
\operatorname{rank}[A\mid b]>r\Rightarrow\text{no solution}
$$

### Interactive diagram

After changing the right-hand side, must coefficient rank and the existence of a solution change together?

The constraints are $x+y=2$ and $x+cy=b$. For a singular matrix, distinguish coincident lines from distinct parallel lines.

Online diagram: #/lesson/la-pivots?view=visual

### Guided experiment

1. **One intersection** Set $c=2,b=3$.

Preset observation: The solution is $(1,1)$; the determinant is one.

2. **Repeated constraints** Set $c=1,b=2$.

Preset observation: The lines coincide. The coefficient rank is one, with infinitely many solutions.

3. **Conflicting constraints** Keep $c=1$ and change $b$ to $3$.

Preset observation: Distinct parallel lines never meet. The augmented rank exceeds the coefficient rank.

### Worked examples

#### Example 1: A free variable

Classify the echelon form $\left[\begin{array}{ccc|c}1&2&0&3\\0&0&1&1\end{array}\right]$.

- Coefficient pivots lie in columns one and three; the second unknown is free.
- There is no contradiction row and one free variable.

**Answer: Infinitely many solutions.**

#### Example 2: More equations can still be consistent

Does $x=1,y=2,x+y=3$ have too many constraints to be consistent?

- The third equation is the sum of the first two.
- Elimination produces a zero row rather than a contradiction.

**Answer: The unique solution is $(1,2)$.**

### Common mistakes

- **A zero row means no solution.** $0=0$ is redundant; $0=d\ne0$ is contradictory.

- **The augmented column represents another unknown.** It records the right-hand side, rather than a variable coefficient.

### Exercises and solutions

**1. A consistent system has $3$ unknowns and coefficient rank $2$. How many free variables remain?**

Hint: Subtract pivots from unknowns.

Answer: 1

- $3-2=1$.

**2. What does $[0\ 0\mid 5]$ mean?**

Hint: Read the row as an equation.

Answer: No solution.

- $0=5$ is false.

**3. Can $4$ equations in $2$ unknowns have a unique solution?**

Hint: Extra equations may be redundant.

Answer: Yes.

- For example, $x=1,y=2,2x=2,2y=4$.

**4. Can the homogeneous system $A\mathbf x=0$ produce a contradiction row?**

Hint: The zero vector is always a solution.

Answer: No.

- A zero right-hand side remains zero after row operations.

Prerequisites: Gaussian elimination and row operations.

## 1.5 Parametric form and the full solution set

*A particular solution locates the set; homogeneous solutions give directions*

### The idea

A particular solution plus every homogeneous solution describes all solutions of a consistent linear system.

### Intuition

Two solutions share a right-hand side. Subtracting cancels it, so their difference belongs to the homogeneous solution set.

### Another explanation

A particular solution places the line or plane; homogeneous solutions give directions along which movement preserves the constraints.

### Quick check

What must you add to a particular solution to obtain every solution?

A. Every homogeneous solution
B. Any vector
C. Another right-hand side

Answer: A. Only homogeneous directions leave the right-hand side unchanged.

### Where do parameters come from?

Give each free variable a parameter and express pivot variables in those parameters. Do not add restrictions absent from the equations.

### Why split the solution into two parts?

Fix a particular solution $\mathbf x_p$ and add any homogeneous solution $\mathbf z$. The identity $A\mathbf z=0$ preserves the right-hand side.

### Must the set contain the origin?

Homogeneous solution sets contain the origin. A consistent nonhomogeneous set is generally a translate, called an affine set.

### Definition and conditions

Parametric form and the full solution set

$$
\{x:Ax=b\}=x_p+\ker A\qquad(Ax_p=b)
$$

- A particular solution must exist. Do not invent one for an inconsistent system. Parameters range over all real numbers.
- Here $\ker A=\{z:Az=0\}$ is the homogeneous solution set.

### Derivation

Subtract any two solutions.

$$
A(x-x_p)=b-b=0
$$

Conversely, add a homogeneous solution.

$$
A(x_p+z)=b+0=b
$$

This proves every solution is included.

$$
x=x_p+z,\quad z\in\ker A
$$

### Interactive diagram

Why does moving in a homogeneous direction preserve the right-hand side?

The solution set $(1,1,0)+t(-1,0,1)$ satisfies both $x+y+z=2$ and $x-y+z=0$.

Online diagram: #/lesson/la-parametric?view=visual

### Guided experiment

1. **Choose a particular solution** Set $t=0$.

Preset observation: This gives the particular solution $(1,1,0)$.

2. **Move in a homogeneous direction** Set $t=1$.

Preset observation: The result is $(0,1,1)$; the left-hand sides remain two and zero.

3. **Move backward** Set $t=-1$.

Preset observation: The result is $(2,1,-1)$; a direction can have a negative parameter.

### Worked examples

#### Example 1: An affine line

Solve $x+y+z=2,x-y+z=0$.

- Subtract to get $y=1$, then $x+z=1$.
- Set $z=t$; then $(x,y,z)=(1,1,0)+t(-1,0,1)$.

**Answer: The entire line $t\in\mathbb R$.**

#### Example 2: Two free variables

Solve $x+2y-z=3$.

- Set $y=s,z=t$.
- From $x=3-2s+t$, collect the constant and parameter terms.

**Answer: $(x,y,z)=(3,0,0)+s(-2,1,0)+t(1,0,1)$.**

### Common mistakes

- **Finding one solution finishes the problem.** Identify and describe every free variable.

- **A nonhomogeneous solution set is always a subspace.** A nonzero right-hand side generally excludes the origin.

### Exercises and solutions

**1. How do you write all solutions of $x+y=4$?**

Hint: Choose a free variable.

Answer: $(4-t,t)$, $t\in\mathbb R$.

- Set $y=t$; then $x=4-t$.

**2. Does the solution set of $x-y=0$ contain the origin?**

Hint: Substitute the zero vector.

Answer: Yes.

- $(t,t)=t(1,1)$.

**3. If $A x_1=A x_2=b$, what is $A(x_1-x_2)$?**

Hint: Use linearity.

Answer: The zero vector.

- $b-b=0$.

**4. Is the sum of two solutions of $x+y=1$ also a solution?**

Hint: The right-hand sides add too.

Answer: No.

- The sum satisfies $x+y=2$.

Prerequisites: Pivots, consistency, and free variables.

## Chapter review

Try independently before reading the solutions.

**1. Solve $x+2y=7,3x+5y=18$.**

Hint: Subtract three times equation one from equation two.

Answer: $(1,3)$.

- $-y=-3$, so $y=3$; substitution gives $x=1$.

**2. For which $k$ is $x-y+z=2,2x-2y+2z=k$ consistent?**

Hint: Compare the left-hand sides.

Answer: Only $k=4$, with two free parameters.

- The second left-hand side is twice the first, so $k=4$ is necessary.
- Then $(x,y,z)=(2+s-t,s,t)$.

**3. Given consistent $Ax=b$, kernel generated by $(1,-2,1)$, and particular solution $(0,1,2)$, write every solution.**

Hint: Add the kernel to the particular solution.

Answer: $(t,1-2t,2+t)$.

- $x=(0,1,2)+t(1,-2,1)$, $t\in\mathbb R$.

# Chapter 2 · Matrices and linear maps

Matrix columns record basis images; multiplication composes maps. Use inverses and factorizations to solve problems with their meaning intact.

Goals:
- Understand matrix multiplication
- Test linearity and invertibility
- Solve using LU

## 2.1 Matrices, transposes, and multiplication

*Combine columns; calculate by rows*

### The idea

A matrix-vector product combines the matrix columns using the input coefficients.

### Intuition

Count input and output components first. Multiplication is undefined when dimensions do not match.

### Another explanation

Each column tells you where one input basis direction goes. Multiplication adds these contributions.

### Quick check

If $A$ is $3\times2$, how many components does the input have?

A. 2
B. 3
C. 6

Answer: A. Input length equals the column count.

### What do matrix dimensions mean?

An $m\times n$ matrix takes $n$ numbers in and produces $m$ numbers. Matrix addition requires matching dimensions; transposition swaps rows and columns.

### How do matrices multiply?

Column $j$ of $AB$ is $A$ times column $j$ of $B$. Entrywise, take the sum of products of a left row and a right column.

### Does order matter?

Usually $AB\ne BA$; sometimes only one order is defined. Transposition reverses the order of a product.

### Definition and conditions

Matrices, transposes, and multiplication

$$
(AB)_{ij}=\sum_{k=1}^n A_{ik}B_{kj},\quad(AB)^T=B^TA^T
$$

- If $A$ is $m\times n$, $B$ must have $n$ rows. The output row count comes from $A$ and column count from $B$.

### Derivation

View the right matrix as columns.

$$
B=[b_1\ \cdots\ b_p]
$$

Apply the left matrix to each column.

$$
AB=[Ab_1\ \cdots\ Ab_p]
$$

Expand by components.

$$
(Ab_j)_i=\sum_k A_{ik}(b_j)_k
$$

### Interactive diagram

Which two columns give the images of the unit square's edges?

Blue shows the original grid and unit circle; green shows their image under $A$. Gold shows the image of $(1,1)$. The four inputs change the matrix entries.

Online diagram: #/lesson/la-matrix-product?view=visual

### Guided experiment

1. **Identity** Set $A=I$.

Preset observation: The grid, circle, and vector stay unchanged.

2. **Shear** Set $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

Preset observation: The unit square tilts while its area remains one.

3. **Collapse to a line** Set $A=\operatorname{diag}(1,0)$.

Preset observation: Vertical information is lost; rank drops to one.

### Worked examples

#### Example 1: Calculate by columns

Given $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$, find $A(3,1)^T$.

- By columns, this is $3(1,0)+(2,1)$.
- The result is $(5,1)$.

**Answer: $(5,1)^T$.**

#### Example 2: Noncommutativity

Given $S=\begin{pmatrix}1&1\\0&1\end{pmatrix},D=\operatorname{diag}(2,1)$, compare $DS$ and $SD$.

- $DS=\begin{pmatrix}2&2\\0&1\end{pmatrix}$.
- $SD=\begin{pmatrix}2&1\\0&1\end{pmatrix}$.

**Answer: They are unequal.**

### Common mistakes

- **Matrix multiplication multiplies matching entries.** That defines a different operation, not matrix multiplication here.

- **$(AB)^T=A^TB^T$.** Transposition must reverse the order.

### Exercises and solutions

**1. What size results from multiplying an $2\times3$ matrix by an $3\times4$ matrix?**

Hint: Match the inner dimensions and retain the outer ones.

Answer: $2\times4$.

- The inner $3$ matches; the result is $2\times4$.

**2. Given $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$, find $(A^T)_{12}$.**

Hint: Transposition swaps indices.

Answer: 3

- It equals $A_{21}=3$.

**3. Given $A=\operatorname{diag}(2,3)$, find $A^2$.**

Hint: Each direction is scaled twice.

Answer: $\operatorname{diag}(4,9)$.

- $A^2=\operatorname{diag}(4,9)$.

**4. Does $AB=0$ imply $A=0$ or $B=0$?**

Hint: Try projections onto complementary directions.

Answer: No.

- Both $A=\operatorname{diag}(1,0),B=\operatorname{diag}(0,1)$ are nonzero, but their product is zero.

Prerequisites: Vectors and linear combinations.

## 2.2 Linear maps and standard matrices

*Basis images determine the whole map*

### The idea

A linear map preserves addition and scalar multiplication, so its basis images determine it completely.

### Intuition

Knowing where the two basis directions go determines every vector's image in the plane.

### Another explanation

Linear maps can scale, rotate, shear, or collapse directions, but must treat every linear combination consistently.

### Quick check

Which condition alone rules out linearity?

A. $T(0)\ne0$
B. $T(0)=0$
C. $T(e_1)=e_1$

Answer: A. Linearity forces zero to map to zero.

### How do you test linearity?

Check $T(u+v)=T(u)+T(v)$ and $T(cu)=cT(u)$ for all vectors and scalars. Testing a few points does not prove a general map linear.

### How do you find the standard matrix?

Compute the images of standard basis vectors $e_j$ and put them in columns. A nonzero translation is not linear because it moves the origin.

### Does linear mean a straight line?

Coordinates, matrices, and polynomials can form vector spaces. Linearity describes operations; it does not require a graph to be a line in one variable.

### Definition and conditions

Linear maps and standard matrices

$$
T(au+bv)=aT(u)+bT(v),\quad A=[T(e_1)\ \cdots\ T(e_n)]
$$

- The domain and codomain must be vector spaces. We begin with real coordinate spaces.

### Derivation

Express any input in the basis.

$$
x=\sum_j x_je_j
$$

Separate terms using linearity.

$$
T(x)=\sum_jx_jT(e_j)
$$

These images become matrix columns.

$$
T(x)=Ax
$$

### Interactive diagram

Which basis image changes when you change one matrix column?

Blue shows the original grid and unit circle; green shows their image under $A$. Gold shows the image of $(1,1)$. The four inputs change the matrix entries.

Online diagram: #/lesson/la-linear-maps?view=visual

### Guided experiment

1. **Identity** Set $A=I$.

Preset observation: The grid, circle, and vector stay unchanged.

2. **Shear** Set $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

Preset observation: The unit square tilts while its area remains one.

3. **Collapse to a line** Set $A=\operatorname{diag}(1,0)$.

Preset observation: Vertical information is lost; rank drops to one.

### Worked examples

#### Example 1: From a rule to a matrix

What matrix represents $T(x,y)=(x+2y,3x)$?

- $T(1,0)=(1,3),T(0,1)=(2,0)$.
- Put the two images in columns, in order.

**Answer: $\begin{pmatrix}1&2\\3&0\end{pmatrix}$.**

#### Example 2: Rule out translation

Is $T(x,y)=(x+1,y)$ linear?

- $T(0,0)=(1,0)\ne0$.
- A linear map sends the zero vector to zero.

**Answer: Not linear.**

### Common mistakes

- **Preserving the origin guarantees linearity.** $T(x)=x^2$ preserves the origin but not addition.

- **Standard matrix rows are the basis images.** Put the images in columns.

### Exercises and solutions

**1. Given $T(x,y)=(2x-y,y)$, find $T(0,1)$.**

Hint: Substitute directly.

Answer: $(-1,1)$.

- The result is $(-1,1)$.

**2. Is $T(x)=|x|$ linear?**

Hint: Test multiplication by a negative scalar.

Answer: Not linear.

- $T(-1)=1$, whereas $-T(1)=-1$.

**3. Is the zero map linear?**

Hint: Check both operation rules.

Answer: Linear.

- Both sides of each rule are zero.

**4. Given linear $T(1,0)=(1,1),T(0,1)=(0,2)$, find $T(2,-1)$.**

Hint: Combine basis images with the input coefficients.

Answer: $(2,0)$.

- $2(1,1)-(0,2)=(2,0)$.

Prerequisites: Matrices, transposes, and multiplication.

## 2.3 Composition, rotations, and shears

*Apply transformations from right to left*

### The idea

Matrices for composed maps multiply in right-to-left order of action.

### Intuition

Shearing then stretching generally reaches a different point from stretching then shearing.

### Another explanation

Think of composition as two machines: the input enters the right one, whose output enters the left one.

### Quick check

Which matrix acts first in $(AB)x$?

A. $A$
B. $B$
C. They act simultaneously

Answer: B. First obtain the intermediate vector, then pass it to the left matrix.

### Why read a product backward?

In $(AB)x=A(Bx)$, the rightmost matrix reaches the input first. Write the intermediate vector to keep the order clear.

### How do you represent rotation?

Rotate both standard basis vectors through the same angle to obtain the matrix columns. Angles are in radians; positive rotation is counterclockwise.

### How do linear and affine maps differ?

An affine map $Ax+b$ can translate. If $b\ne0$, it is not linear in the original space. Homogeneous coordinates can encode it in a larger matrix without making the original map linear.

### Definition and conditions

Composition, rotations, and shears

$$
R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\quad (T_A\circ T_B)(x)=ABx
$$

- Input and output dimensions must match for composition. Multiplication is associative but generally not commutative.

### Derivation

Apply the right map first.

$$
y=Bx
$$

Then apply the left map.

$$
z=Ay=A(Bx)
$$

Combine them into one matrix.

$$
z=(AB)x
$$

### Interactive diagram

Does shearing first give the same result as stretching first?

Fix shear $S$ and horizontal stretch $D$ by two. Change the input direction and swap their order.

Online diagram: #/lesson/la-composition?view=visual

### Guided experiment

1. **Shear first** Set $\theta=\pi/2$; shear, then stretch.

Preset observation: Input $(0,1)$ goes first to $(1,1)$, then $(2,1)$.

2. **Swap the order** Keep the direction; stretch before shearing.

Preset observation: The input is initially unchanged, then reaches $(1,1)$.

3. **Test another direction** Set $\theta=0$.

Preset observation: Both orders send this input to $(2,0)$. Agreement for one input does not imply equal matrices.

### Worked examples

#### Example 1: Order changes the result

First shear $(0,1)$ by $S=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, then stretch by $D=\operatorname{diag}(2,1)$.

- $S(0,1)=(1,1)$.
- $D(1,1)=(2,1)$; reversing the order gives only $(1,1)$.

**Answer: The order is $DS$; the result is $(2,1)$.**

#### Example 2: Two rotations

Where does $(2,1)$ go after two counterclockwise rotations of $\pi/2$?

- The first gives $(-1,2)$.
- The second gives $(-2,-1)$, equivalent to rotation through $\pi$.

**Answer: $(-2,-1)$.**

### Common mistakes

- **$AB$ means apply $A$ first.** With column vectors, the right matrix acts first.

- **Every area-preserving map is a rotation.** A shear can preserve area while changing angles.

### Exercises and solutions

**1. What matrix rotates counterclockwise through $\pi/2$?**

Hint: Use the standard basis images.

Answer: $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

- $e_1\mapsto e_2,e_2\mapsto-e_1$.

**2. What matrix reflects across the horizontal axis?**

Hint: Keep the horizontal coordinate and negate the vertical one.

Answer: $\operatorname{diag}(1,-1)$.

- $(x,y)\mapsto(x,-y)$.

**3. What is $R_\theta R_{-\theta}$?**

Hint: Rotate backward, then back again.

Answer: $I$.

- Every vector returns to its starting point.

**4. Can a shear and a nonuniform stretch generally be exchanged?**

Hint: Test the vector from the example.

Answer: No.

- $DS(0,1)=(2,1)$, $SD(0,1)=(1,1)$.

Prerequisites: Linear maps and standard matrices.

## 2.4 Inverses and the invertible matrix theorem

*Can every output recover its unique input?*

### The idea

An invertible square matrix allows each output to recover exactly one input.

### Intuition

Collapsing a direction merges different inputs, so the output cannot identify the original input.

### Another explanation

Invertibility requires reaching every output without merging inputs. For square matrices, full pivots guarantee both.

### Quick check

Can a square matrix sending a nonzero vector to zero be invertible?

A. Yes
B. No
C. Yes, if its entries are large enough

Answer: B. An inverse cannot recover two different inputs from zero.

### What does an inverse satisfy?

$A^{-1}A=AA^{-1}=I$. This definition uses square matrices. Left and right inverses of rectangular matrices are separate notions.

### How do you calculate an inverse?

Eliminate in $[A\mid I]$. If the left side becomes $I$, the right side is the inverse. To solve a single system, elimination usually avoids computing an inverse first.

### Which conditions are equivalent?

For an $n\times n$ matrix, invertibility, a pivot in every column, only the zero homogeneous solution, and a unique solution for every right-hand side are equivalent. Equivalently, every vector has a unique representation using its columns; such a list is called a basis later.

### Definition and conditions

Inverses and the invertible matrix theorem

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}
$$

- The two-by-two formula requires $ad-bc\ne0$. The invertible matrix theorem here applies directly to square matrices.

### Derivation

An inverse forces the homogeneous solution to be zero.

$$
Ax=0\Rightarrow A^{-1}Ax=x=0
$$

Full-pivot elimination recovers an input for every right-hand side.

$$
[A\mid I]\sim[I\mid B]
$$

The same row operations produce the inverse.

$$
BA=I\quad\Rightarrow\quad B=A^{-1}\quad(A\text{ square})
$$

### Interactive diagram

Which compression makes the original input unrecoverable?

Matrix $A=\begin{pmatrix}1&c\\0&a\end{pmatrix}$ acts on $(1,1)$. Inversion fails when $a$ is zero.

Online diagram: #/lesson/la-inverse?view=visual

### Guided experiment

1. **Recoverable** Set $a=1,c=1$.

Preset observation: The output is $(2,1)$; an inverse recovers $(1,1)$.

2. **Reversal remains invertible** Set $a=-1,c=1$.

Preset observation: The determinant is minus one. Reversing orientation does not prevent inversion.

3. **A direction is lost** Set $a=0,c=1$.

Preset observation: The output collapses onto the horizontal axis. The nonzero kernel prevents an inverse.

### Worked examples

#### Example 1: A two-by-two inverse

Find the inverse of $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$.

- Undo the addition of $2y$ in $x$.
- Test $B=\begin{pmatrix}1&-2\\0&1\end{pmatrix}$: multiplying on either side gives $I$.

**Answer: $A^{-1}=B$.**

#### Example 2: Collapse prevents inversion

Is $A=\operatorname{diag}(1,0)$ invertible?

- $A(0,1)=0$: a nonzero input disappears.
- Multiple inputs share the same output.

**Answer: Not invertible.**

### Common mistakes

- **Take each entry's reciprocal to find the inverse.** Verify the inverse using a product equal to the identity.

- **An invertible matrix has no zero entries.** The identity contains zeros and is invertible.

### Exercises and solutions

**1. Find the inverse of $\operatorname{diag}(2,4)$.**

Hint: Undo the scale in each direction.

Answer: $\operatorname{diag}(1/2,1/4)$.

- Use diagonal entries $1/2,1/4$.

**2. Is $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ invertible?**

Hint: Is the second row independent?

Answer: Not invertible.

- Row two is twice row one, leaving one pivot missing.

**3. What is the inverse of the product of invertible $A,B$?**

Hint: Undo the last operation first.

Answer: $(AB)^{-1}=B^{-1}A^{-1}$.

- $(B^{-1}A^{-1})(AB)=I$.

**4. Can an $2\times3$ matrix have a two-sided inverse as defined here?**

Hint: The identity matrices on the two sides have different sizes.

Answer: No.

- It cannot be both one-to-one and onto between spaces of different dimensions.

Prerequisites: Pivots, consistency, and free variables, Matrices, transposes, and multiplication.

## 2.5 LU factorization and repeated solves

*Save elimination as a factorization*

### The idea

LU saves elimination steps so one coefficient matrix can handle multiple right-hand sides.

### Intuition

Solve a lower-triangular system to perform elimination, then an upper-triangular system by back substitution, instead of repeating all matrix operations.

### Another explanation

LU stores the elimination separately from the current right-hand side. Factor once, then use forward and back substitution.

### Quick check

If $PA=LU$, what right-hand side is used first to solve $Ax=b$?

A. $b$
B. $Pb$
C. $P^{-1}Ab$

Answer: B. Row swaps act on the whole augmented system.

### What does each factor contain?

$L$ is lower triangular with unit diagonal and stores elimination multipliers; $U$ is upper triangular.

### When are row swaps needed?

Unpivoted $A=LU$ needs usable pivots. An invertible matrix generally has $PA=LU$, where $P$ records swaps. Not every invertible matrix has an LU factorization without swaps.

### How do you solve the system?

Solve $Ly=Pb$, then $Ux=y$. Numerical work must also consider pivot sizes and floating-point errors.

### Definition and conditions

LU factorization and repeated solves

$$
PA=LU,\qquad Ly=Pb,\qquad Ux=y
$$

- We solve invertible square systems here. Whenever rows are swapped, permute the right-hand side too.

### Derivation

Elimination turns the original matrix into an upper-triangular one.

$$
EA=U
$$

Store the reverse elimination steps.

$$
A=E^{-1}U=LU
$$

Split one system into two triangular systems.

$$
Ax=b\iff L(Ux)=b
$$

### Interactive diagram

Which elimination steps can be reused when only the right-hand side changes?

Fix $x+y=3,2x+3y=8$. View the original system, eliminate the first entry of row two, then the second entry of row one.

Online diagram: #/lesson/la-lu?view=visual

### Guided experiment

1. **Original system** Select the original system.

Preset observation: The lines intersect at $(1,2)$.

2. **Eliminate below** Select the second step.

Preset observation: The second constraint becomes $y=2$; the intersection stays fixed.

3. **Finish elimination** Select the third step.

Preset observation: The constraints are $x=1,y=2$; the solution set is unchanged.

### Worked examples

#### Example 1: Save the elimination multiplier

Given $A=\begin{pmatrix}1&1\\2&3\end{pmatrix}$, find LU.

- Subtract twice row one from row two to obtain $U=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.
- $L=\begin{pmatrix}1&0\\2&1\end{pmatrix}$; multiplication recovers $A$.

**Answer: $A=LU$.**

#### Example 2: A new right-hand side

Use this factorization to solve $Ax=(4,11)^T$.

- $Ly=b$ gives $y_1=4,y_2=11-8=3$.
- $Ux=y$ gives $x_2=3,x_1=1$.

**Answer: $x=(1,3)^T$.**

### Common mistakes

- **$L$ stores the negated elimination multipliers.** The usual convention stores the multipliers being subtracted, without negating them. Multiply to verify the signs.

- **Every new right-hand side requires a new LU factorization.** Reuse the factorization while the coefficient matrix stays fixed.

### Exercises and solutions

**1. What is $\begin{pmatrix}1&0\\3&1\end{pmatrix}\begin{pmatrix}2&1\\0&4\end{pmatrix}$?**

Hint: Multiply rows by columns.

Answer: $\begin{pmatrix}2&1\\6&7\end{pmatrix}$.

- The second row is $(6,7)$.

**2. Given $Ly=(2,5)^T$ and $L=\begin{pmatrix}1&0\\2&1\end{pmatrix}$, find $y_2$.**

Hint: Forward substitute using the first row, then the second.

Answer: 1

- $y_1=2,y_2=5-4=1$.

**3. Can ordinary elimination without a row swap start on $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$?**

Hint: The first pivot is zero.

Answer: A row swap is needed.

- Swap rows; the matrix itself remains invertible.

**4. If $PA=LU$, why solve $Ly=Pb$ first?**

Hint: Multiply both sides of the original equation by the permutation matrix.

Answer: The right-hand side must undergo the same swaps.

- $PAx=Pb$, rather than $PAx=b$.

Prerequisites: Gaussian elimination and row operations, Matrices, transposes, and multiplication.

## Chapter review

Try independently before reading the solutions.

**1. Given $T(x,y)=(x-y,2x+y)$, find its standard matrix and $T(1,2)$.**

Hint: Calculate the two standard basis images first.

Answer: The matrix is above; the output is $(-1,4)$.

- The matrix is $\begin{pmatrix}1&-1\\2&1\end{pmatrix}$.
- Substitution gives $(-1,4)$.

**2. Find $\begin{pmatrix}2&1\\0&3\end{pmatrix}^{-1}$.**

Hint: Solve the second output first, then recover the first.

Answer: $\begin{pmatrix}1/2&-1/6\\0&1/3\end{pmatrix}$.

- $y=b_2/3$, $x=b_1/2-b_2/6$.

**3. Given $L=\begin{pmatrix}1&0\\3&1\end{pmatrix},U=\begin{pmatrix}2&1\\0&2\end{pmatrix}$, solve $LUx=(4,14)$.**

Hint: Forward substitute in the lower-triangular system first.

Answer: $(3/2,1)$.

- $y_1=4,y_2=14-12=2$.
- $x_2=1,x_1=3/2$.

# Chapter 3 · Vector spaces, bases, and coordinates

Extend coordinates to objects with the same operation rules. A basis has no redundancy and represents every vector in the space.

Goals:
- Test subspaces
- Distinguish span from independence
- Use bases and coordinates

## 3.1 Vector spaces and subspaces

*Closed under addition and scaling*

### The idea

A subspace is a subset that remains closed under the original addition and scalar multiplication.

### Intuition

Lines and planes through the origin support vector operations on their own. Translating them generally breaks closure because sums leave the set.

### Another explanation

A subspace is not an arbitrary region. You must be able to add, subtract, and scale its members freely without leaving it.

### Quick check

Which set cannot be a subspace?

A. The set containing only zero
B. A nonempty set that excludes zero
C. The solution set of a homogeneous linear system

Answer: B. Every vector space contains zero.

### Must vectors be arrows?

Matrices and polynomials can also be added and scaled. They are vectors when the vector space axioms hold. This book mainly uses finite-dimensional real spaces.

### How do you test a subspace?

Check that zero belongs, then that every linear combination of two members remains inside. This avoids checking every vector space axiom again.

### Does the zero set count?

The set containing only zero is a subspace. The empty set is not, since it lacks zero.

### Definition and conditions

Vector spaces and subspaces

$$
W\le V\iff 0\in W\text{ and }au+bv\in W\quad(u,v\in W;\ a,b\in\mathbb R)
$$

- Use the original space's operations. Do not change them during the test.

### Derivation

Check that zero belongs.

$$
0\in W
$$

Check every linear combination.

$$
u,v\in W\Rightarrow au+bv\in W
$$

The other axioms are inherited from the original space.

$$
W\text{ uses the same operations as }V
$$

### Interactive diagram

How does the span change when the two generating directions become parallel?

The generators are $u=(1,0,0),v=(1,c,0)$. The faint plane shows their full span; the outline shows only the part drawn with bounded coefficients.

Online diagram: #/lesson/la-subspaces?view=visual

### Guided experiment

1. **Two independent directions** Set $c=1$.

Preset observation: The vectors span the entire horizontal plane, of dimension two.

2. **Nearly parallel** Set $c=0.1$.

Preset observation: The bounded-coefficient region is narrow, but the span is still the whole plane.

3. **Exactly dependent** Set $c=0$.

Preset observation: The vectors coincide, so their span is just a line.

### Worked examples

#### Example 1: Homogeneous constraints define a subspace

Is $W=\{(x,y,z):x+y-z=0\}$ a subspace?

- The zero vector satisfies the constraint.
- If $u,v$ satisfy the homogeneous equality, so does $au+bv$.

**Answer: It is a plane through the origin.**

#### Example 2: Translation breaks closure

Is the point set $x+y=1$ a subspace?

- Zero does not satisfy the equation.
- Adding two members changes the coordinate sum to $2$.

**Answer: No.**

### Common mistakes

- **Every line is a subspace.** It must pass through the origin and use the original operations.

- **Checking a few sums is enough.** Closure must hold for every member and scalar.

### Exercises and solutions

**1. Is $\{(x,0):x\in\mathbb R\}$ a subspace?**

Hint: Check zero and linear combinations.

Answer: Yes.

- The vertical coordinate stays zero under every linear combination.

**2. Is the first quadrant including its boundary a subspace?**

Hint: Test negative scaling.

Answer: No.

- $(1,0)$ belongs, but $-(1,0)$ does not.

**3. Do real polynomials of degree at most $2$, including zero, form a space?**

Hint: Addition cannot create higher-degree terms.

Answer: They form a vector space.

- Addition and scaling preserve the degree bound, and zero is included.

**4. Is the intersection of two subspaces a subspace?**

Hint: Where do linear combinations of vectors in both spaces belong?

Answer: Yes.

- Zero belongs to the intersection; every linear combination stays in both spaces.

Prerequisites: Linear maps and standard matrices.

## 3.2 Span and spanning sets

*Where can these directions reach?*

### The idea

The span is the set of all linear combinations of the given vectors.

### Intuition

Two nonparallel directions in a plane reach the whole plane. Parallel directions cannot leave one line, regardless of the coefficients.

### Another explanation

Span asks which vectors can be represented, rather than how many generators are listed. Repeating a direction adds no reach.

### Quick check

What happens when you add a vector already in the span?

A. The dimension increases by one
B. The space stays unchanged
C. The origin disappears

Answer: B. It adds no new direction.

### What does a span include?

Allow all real coefficients, with any signs or sizes. A plotted parallelogram uses bounded coefficients and shows only part of the span.

### How do you test membership?

Put the vectors in columns and solve $Ac=b$. The target is in their span exactly when the system is consistent.

### Must a spanning set be minimal?

No. Adding a vector already expressible as a linear combination does not enlarge the space. Remove redundancy to obtain a basis. Dimension will count how many independent directions the space needs.

### Definition and conditions

Span and spanning sets

$$
\operatorname{span}(v_1,\ldots,v_k)=\left\{\sum_{j=1}^k c_jv_j:c_j\in\mathbb R\right\}
$$

- Vectors belong to the same space. By convention, the empty list spans the zero subspace.

### Derivation

Zero coefficients give the origin.

$$
0=\sum_j0v_j
$$

Adding two combinations gives another combination.

$$
\sum_j a_jv_j+\sum_j b_jv_j=\sum_j(a_j+b_j)v_j
$$

Any subspace containing the generators contains these combinations.

$$
v_j\in W\Rightarrow\operatorname{span}(v_j)\subseteq W
$$

### Interactive diagram

Do nearly parallel and exactly parallel arrows have the same span?

The generators are $u=(1,0,0),v=(1,c,0)$. The faint plane shows their full span; the outline shows only the part drawn with bounded coefficients.

Online diagram: #/lesson/la-span?view=visual

### Guided experiment

1. **Two independent directions** Set $c=1$.

Preset observation: The vectors span the entire horizontal plane, of dimension two.

2. **Nearly parallel** Set $c=0.1$.

Preset observation: The bounded-coefficient region is narrow, but the span is still the whole plane.

3. **Exactly dependent** Set $c=0$.

Preset observation: The vectors coincide, so their span is just a line.

### Worked examples

#### Example 1: Can the target be reached?

Is $(2,3)$ in the span of $(1,0),(1,1)$?

- Solve $a+b=2,b=3$.
- $a=-1,b=3$ works.

**Answer: Yes.**

#### Example 2: Redundancy adds no space

What does $(1,0),(0,1),(1,1)$ span? Does the third vector add a direction?

- The first two already generate the plane.
- The third is their sum.

**Answer: The span is all of $\mathbb R^2$; the third vector is redundant.**

### Common mistakes

- **Restricting coefficients to $[0,1]$ gives the span.** This draws only a bounded part.

- **More vectors always give a larger span.** A new vector may already lie in the old span.

### Exercises and solutions

**1. Is $(3,6)$ in the span of $(1,2)$?**

Hint: Check scalar multiples.

Answer: Yes.

- $(3,6)=3(1,2)$.

**2. Is $(1,0)$ in the span of $(1,1),(2,2)$?**

Hint: What relation do all combinations share?

Answer: No.

- Every combination has equal coordinates.

**3. What is $\operatorname{span}(0)$?**

Hint: Take any multiple of zero.

Answer: The zero subspace.

- It remains zero.

**4. Is the union of two subspaces always a subspace?**

Hint: Use the coordinate axes as a counterexample.

Answer: Not necessarily.

- Both $(1,0),(0,1)$ lie in the union, but $(1,1)$ does not.

Prerequisites: Vector spaces and subspaces, Vectors and linear combinations.

## 3.3 Linear independence and redundant directions

*Can any direction be removed?*

### The idea

Independence means that only all-zero coefficients combine the vectors to give zero.

### Intuition

A direction expressible using the others is redundant. Equivalently, some coefficients not all zero give a zero combination.

### Another explanation

Independence tests redundancy, not whether the target space is fully covered. Keep these questions separate.

### Quick check

What does linear dependence mean?

A. At least one vector is expressible using the others
B. Every pair is parallel
C. All vectors must be zero

Answer: A. A nontrivial homogeneous relation can be solved for at least one vector.

### How do you calculate the test?

Solve $Ac=0$. Only the zero solution means independent columns; a nonzero solution means dependent columns.

### Why is dependence equivalent to redundancy?

If $\sum c_jv_j=0$ and some $c_i\ne0$, move $v_i$ to the other side and divide by that coefficient.

### Can the number of vectors rule it out?

More than $n$ vectors in $\mathbb R^n$ are dependent: the homogeneous system has more unknowns than possible pivots.

### Definition and conditions

Linear independence and redundant directions

$$
\sum_{j=1}^k c_jv_j=0\Rightarrow c_1=\cdots=c_k=0
$$

- Apply the test to the whole list. The empty list is independent; a nonempty list containing zero is dependent.

### Derivation

A nonzero coefficient relation identifies a redundant vector.

$$
c_iv_i=-\sum_{j\ne i}c_jv_j
$$

Divide by a nonzero coefficient.

$$
v_i=-\sum_{j\ne i}\frac{c_j}{c_i}v_j
$$

Reversing the rearrangement constructs a nonzero homogeneous solution.

$$
v_i=\sum_{j\ne i}a_jv_j\Rightarrow v_i-\sum_{j\ne i}a_jv_j=0
$$

### Interactive diagram

As the second direction approaches the first, when is independence actually lost?

The generators are $u=(1,0,0),v=(1,c,0)$. The faint plane shows their full span; the outline shows only the part drawn with bounded coefficients.

Online diagram: #/lesson/la-independence?view=visual

### Guided experiment

1. **Two independent directions** Set $c=1$.

Preset observation: The vectors span the entire horizontal plane, of dimension two.

2. **Nearly parallel** Set $c=0.1$.

Preset observation: The bounded-coefficient region is narrow, but the span is still the whole plane.

3. **Exactly dependent** Set $c=0$.

Preset observation: The vectors coincide, so their span is just a line.

### Worked examples

#### Example 1: Two planar directions

Are $(1,1),(1,-1)$ independent?

- $a+b=0,a-b=0$.
- Adding and subtracting forces $a=b=0$.

**Answer: Independent.**

#### Example 2: Find a dependence relation

$u=(1,0),v=(0,1),w=(2,3)$.

- $w=2u+3v$.
- The coefficients in $2u+3v-w=0$ are not all zero.

**Answer: Dependent.**

### Common mistakes

- **No two parallel vectors means independence.** Three planar vectors can be pairwise nonparallel but dependent together.

- **Nonzero vectors are automatically independent.** Nonzero vectors can still satisfy a dependence relation.

### Exercises and solutions

**1. Are $(1,2),(2,4)$ independent?**

Hint: Compare scalar multiples.

Answer: Dependent.

- The second is twice the first.

**2. Why does a list containing zero depend linearly?**

Hint: Give the zero vector a nonzero coefficient.

Answer: This produces a nontrivial zero combination.

- $1\cdot0+0\cdot v_2+\cdots=0$.

**3. Can four vectors in $\mathbb R^3$ be independent?**

Hint: How many pivots are possible?

Answer: No.

- There are four unknowns but at most three pivots.

**4. Are $(1,0,0),(0,1,0)$ independent in $\mathbb R^3$?**

Hint: Check uniqueness of the zero combination.

Answer: Independent, but they do not span the whole space.

- The two nonzero coordinate positions force both coefficients to zero.

Prerequisites: Span and spanning sets, Pivots, consistency, and free variables.

## 3.4 Bases and unique representation

*Complete directions without redundancy*

### The idea

A basis spans the entire space without redundancy, giving unique coordinates.

### Intuition

Spanning guarantees reach; independence rules out two different recipes. Both are needed.

### Another explanation

A basis is a complete, nonredundant set of directions. It need not look regular, but it must locate every vector uniquely.

### Quick check

What are the two basis requirements?

A. Unit length and perpendicularity
B. Spanning and linear independence
C. As many vectors as possible

Answer: B. One guarantees existence of representations; the other guarantees uniqueness.

### How do you verify a basis?

First ensure the vectors belong to the space, then check spanning and independence. Two nonparallel vectors require specifying which space is the target.

### How do you select a basis from generators?

Put the vectors in columns and eliminate. Choose the pivot columns of the original matrix: they preserve the span and are independent.

### Must a basis be orthonormal?

No. Oblique vectors of different lengths can form a basis. Orthogonal bases are a particularly convenient later choice.

### Definition and conditions

Bases and unique representation

$$
B=(v_1,\ldots,v_k)\text{ is a basis}\iff \forall v\in V,\ \exists!c:\ v=\sum_jc_jv_j
$$

- We mainly use finite-dimensional spaces. For an ordered basis, its order determines coordinate order.

### Derivation

Spanning gives existence.

$$
v=\sum_jc_jv_j
$$

Subtract two possible representations.

$$
\sum_j(c_j-d_j)v_j=0
$$

Independence forces matching coefficients to agree.

$$
c_j=d_j\quad\forall j
$$

### Interactive diagram

Why can an oblique basis still give unique coordinates?

The generators are $u=(1,0,0),v=(1,c,0)$. The faint plane shows their full span; the outline shows only the part drawn with bounded coefficients.

Online diagram: #/lesson/la-basis?view=visual

### Guided experiment

1. **Two independent directions** Set $c=1$.

Preset observation: The vectors span the entire horizontal plane, of dimension two.

2. **Nearly parallel** Set $c=0.1$.

Preset observation: The bounded-coefficient region is narrow, but the span is still the whole plane.

3. **Exactly dependent** Set $c=0$.

Preset observation: The vectors coincide, so their span is just a line.

### Worked examples

#### Example 1: A nonstandard basis

Is $(1,1),(1,-1)$ a basis of the plane?

- The homogeneous combination forces zero coefficients.
- For any $(x,y)$, choose $a=(x+y)/2,b=(x-y)/2$.

**Answer: Yes.**

#### Example 2: A polynomial basis

Why is $1,t,t^2$ a basis for real polynomials of degree at most two?

- Every member has the form $a+bt+ct^2$.
- An identically zero polynomial has every coefficient zero.

**Answer: Spanning and independent.**

### Common mistakes

- **Any independent list is a basis of the entire space.** It must also span the target space.

- **Basis vectors must have length one.** Unit length is not required.

### Exercises and solutions

**1. Is $(1,0),(0,1),(1,1)$ a basis of the plane?**

Hint: Check redundancy.

Answer: No.

- The third is the sum of the first two.

**2. What basis does the zero subspace have?**

Hint: A basis cannot contain zero.

Answer: The empty list.

- The empty list spans the zero space and is independent.

**3. Can $(2,0),(0,3)$ be a basis of the plane?**

Hint: Can it represent arbitrary coordinates?

Answer: Yes.

- $(x,y)=(x/2)(2,0)+(y/3)(0,3)$, with a unique representation.

**4. For which plane is $(1,0,0),(0,1,0)$ a basis?**

Hint: Read the third component.

Answer: The plane $z=0$.

- The combinations are exactly $(x,y,0)$.

Prerequisites: Linear independence and redundant directions.

## 3.5 Dimension, extension, and basis size

*How many independent coefficients are needed?*

### The idea

Every basis of a finite-dimensional space has the same size, called its dimension.

### Intuition

Different bases can look very different, yet unique representation in the same space needs the same number of independent coefficients.

### Another explanation

Dimension counts independent directions, rather than written coordinates or listed arrows.

### Quick check

What is the dimension of a plane through the origin in $\mathbb R^3$?

A. 1
B. 2
C. 3

Answer: B. The ambient space has three coordinates, but the plane needs only two independent coefficients.

### How do you calculate dimension?

Find any basis and count it. For a column space, count pivots. For a subspace, parameterize it and find independent generators.

### Why do bases have equal size?

The exchange lemma says an independent list cannot exceed a spanning list in length. Apply it in both directions to two bases to get equality.

### How do you extend or reduce a list?

In finite dimensions, add vectors outside the current span until an independent list becomes a basis. Remove redundant generators until a spanning list becomes a basis.

### Definition and conditions

Dimension, extension, and basis size

$$
\dim V=n\Rightarrow\#\{\text{independent vectors}\}\le n\le\#\{\text{spanning vectors}\}
$$

- These statements require finite dimensions. The zero space has dimension zero. Ambient dimension need not equal subspace dimension.

### Derivation

An independent list cannot be longer than a spanning list.

$$
|I|\le|G|
$$

Exchange the roles of two bases.

$$
|B_1|\le|B_2|,\quad|B_2|\le|B_1|
$$

The two inequalities force equality.

$$
|B_1|=|B_2|=\dim V
$$

### Interactive diagram

How much dimension is lost when one independent direction collapses?

Matrix $\operatorname{diag}(1,c,0)$ maps three-dimensional input to the horizontal plane. When $c$ is zero, the image collapses further to the horizontal axis.

Online diagram: #/lesson/la-dimension?view=visual

### Guided experiment

1. **Retain two directions** Set $c=1$.

Preset observation: Rank two, nullity one.

2. **Reverse orientation** Set $c=-1$.

Preset observation: Orientation reverses without losing a direction; rank stays two.

3. **Lose another direction** Set $c=0$.

Preset observation: Rank one, nullity two; their sum remains three.

### Worked examples

#### Example 1: One constraint removes a dimension

Find the dimension of $W=\{(x,y,z):x+y+z=0\}$.

- Write it as $(-s-t,s,t)=s(-1,1,0)+t(-1,0,1)$.
- The two generators are independent.

**Answer: $\dim W=2$.**

#### Example 2: Polynomial degree

What is the dimension of real polynomials of degree at most $4$?

- A basis is $1,t,t^2,t^3,t^4$.
- The constant term also has an independent coefficient.

**Answer: 5.**

### Common mistakes

- **A subspace in three-dimensional coordinates must be three-dimensional.** A spatial line still has only one independent direction.

- **Polynomials of degree at most two form a two-dimensional space.** The constant term makes the dimension three.

### Exercises and solutions

**1. What dimension has a nondegenerate line through the origin in space?**

Hint: One nonzero vector generates it.

Answer: 1

- Every point is a multiple of that vector.

**2. What is the dimension of $\mathbb R^{2\times3}$?**

Hint: Each matrix entry has an independent coefficient.

Answer: 6

- Six matrices with one unit entry each form a basis.

**3. Can two independent vectors in a three-dimensional space always be extended to a basis?**

Hint: Use the finite-dimensional extension theorem.

Answer: Yes.

- Choose a vector outside their plane.

**4. Do exactly $n$ independent vectors in an $n$-dimensional space form a basis?**

Hint: If they did not span, one more could be added.

Answer: They form a basis.

- That would exceed $n$ independent vectors, a contradiction.

Prerequisites: Bases and unique representation.

## 3.6 Basis coordinates and change of basis

*The vector stays; its description changes*

### The idea

A change of basis changes a vector's coordinates, not the vector itself.

### Intuition

Different road networks can describe the same location. Coordinates are a description, not the location.

### Another explanation

For every change-of-basis formula, identify which coordinates enter and which leave. This is more reliable than memorizing multiplication order.

### Quick check

What stays unchanged during a change of basis?

A. The vector itself
B. Every coordinate component
C. The basis list

Answer: A. The vector is the object; basis coordinates describe it in a chosen basis.

### How do you find coordinates?

Put basis vectors in columns of $P_B$ and solve $P_B[v]_B=v$. A subspace basis matrix can be rectangular; the basis still guarantees uniqueness.

### How do you change between bases?

For bases of all of $\mathbb R^n$, use $[v]_C=P_C^{-1}P_B[v]_B$. Recover standard coordinates first, then convert to the new basis.

### How does an operator's matrix change?

Matrices of one operator in different bases are similar. If $P$ converts new coordinates to old ones, the new matrix is $P^{-1}AP$.

### Definition and conditions

Basis coordinates and change of basis

$$
v=P_B[v]_B,\quad[v]_C=P_C^{-1}P_B[v]_B,\quad[T]_{\rm new}=P^{-1}[T]_{\rm old}P
$$

- When writing inverses, both bases span coordinate spaces of the same full dimension. Identify the input and output coordinate systems of each map.

### Derivation

Convert new coordinates to old ones.

$$
x_{\rm old}=Px_{\rm new}
$$

Apply the operator in old coordinates.

$$
y_{\rm old}=APx_{\rm new}
$$

Convert the output back to new coordinates.

$$
y_{\rm new}=P^{-1}APx_{\rm new}
$$

### Interactive diagram

How do coordinates change when the basis becomes oblique?

Fix $v=(1,1)$ with basis $(1,0),(c,1)$. Changing the basis changes its coordinates and decomposition, while the vector stays fixed.

Online diagram: #/lesson/la-coordinates?view=visual

### Guided experiment

1. **Standard basis** Set $c=0$.

Preset observation: The coordinates are $(1,1)$.

2. **Oblique basis** Set $c=1$.

Preset observation: Coordinates become $(0,1)$, while the vector remains $(1,1)$.

3. **Tilt the other way** Set $c=-1$.

Preset observation: Coordinates become $(2,1)$.

### Worked examples

#### Example 1: Coordinates in an oblique basis

Given $B=((1,1),(1,-1))$, find the basis coordinates of $(4,2)$.

- $a+b=4,a-b=2$.
- $a=3,b=1$.

**Answer: $[(4,2)]_B=(3,1)^T$.**

#### Example 2: The matrix after changing basis

Given $A=\operatorname{diag}(2,1),P=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, find $P^{-1}AP$.

- $AP=\begin{pmatrix}2&2\\0&1\end{pmatrix}$.
- Multiply on the left by $P^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$.

**Answer: $\begin{pmatrix}2&1\\0&1\end{pmatrix}$.**

### Common mistakes

- **Changing coordinates moves the vector.** The vector stays fixed; the basis and coefficients change.

- **Multiply by the same matrix on both sides to change basis.** Usually one side uses the basis change and the other its inverse.

### Exercises and solutions

**1. Given $B=((2,0),(0,1))$, find the coordinates of $(6,4)$.**

Hint: Divide by each corresponding scale.

Answer: $(3,4)^T$.

- $3(2,0)+4(0,1)=(6,4)$.

**2. Given $[v]_B=(1,-2)$ and $B=((1,0),(1,1))$, find standard coordinates.**

Hint: Combine the basis vectors with those coefficients.

Answer: $(-1,-2)$.

- $(1,0)-2(1,1)=(-1,-2)$.

**3. What happens to coordinates when basis vectors swap order?**

Hint: Each coefficient follows its basis vector.

Answer: Swap their order.

- The two coordinate components swap too.

**4. Must $P^{-1}AP$ and $A$ represent different operators?**

Hint: Distinguish matrix entries from the coordinate choice.

Answer: Not necessarily.

- They can represent the same operator in different bases.

Prerequisites: Bases and unique representation, Inverses and the invertible matrix theorem.

## Chapter review

Try independently before reading the solutions.

**1. Find a basis and dimension of $W=\{(x,y,z):x=2y,z=-y\}$.**

Hint: Use $y$ as parameter.

Answer: Basis $((2,1,-1))$; dimension one.

- Every vector is $t(2,1,-1)$; its nonzero generator is independent.

**2. In basis $B=((1,2),(2,1))$, find the coordinates of $(5,4)$.**

Hint: Solve the system of basis columns.

Answer: $(1,2)^T$.

- $a+2b=5,2a+b=4$ gives $a=1,b=2$.

**3. Can $1,1+t,t^2$ be a basis for polynomials of degree at most two?**

Hint: Expand coefficients of a homogeneous combination.

Answer: Yes.

- $a+b(1+t)+ct^2=0$ forces $b=c=0$, then $a=0$.
- There are three independent vectors in dimension three.

# Chapter 4 · Null spaces, images, and rank

The four fundamental subspaces connect solutions, independence, and orthogonality. Identify their ambient spaces first.

Goals:
- Find null-space and column-space bases
- Apply rank-nullity
- Distinguish the four fundamental subspaces

## 4.1 Kernel and null space

*Input changes invisible to the output*

### The idea

The null space contains all input directions that the matrix sends to zero.

### Intuition

Inputs with the same output differ by a null-space vector. These indistinguishable directions locate the information loss.

### Another explanation

The null space describes invisible input changes. A larger null space allows more inputs to share one output.

### Quick check

If $A$ has $5$ columns, how many components does a kernel vector have?

A. The row count decides
B. 5
C. Only one is needed

Answer: B. The kernel lies in the input space, whose ambient dimension is the column count.

### How do you find a basis?

Eliminate to solve $Ax=0$. Set one free variable to one and the others to zero in turn. The resulting special solutions form a null-space basis.

### Where does the kernel live?

The kernel of an $m\times n$ matrix belongs to input space $\mathbb R^n$, not the output space.

### How is the kernel related to injectivity?

A map is one-to-one exactly when its kernel contains only zero. If $Ax=Ay$, then $A(x-y)=0$.

### Definition and conditions

Kernel and null space

$$
\ker A=\{x\in\mathbb R^n:Ax=0\},\qquad A\text{ is one-to-one}\iff\ker A=\{0\}
$$

- The matrix represents a linear map; its null space is automatically a subspace of the input space.

### Derivation

Subtract equal outputs.

$$
Ax=Ay\Rightarrow A(x-y)=0
$$

A zero kernel forces equal inputs.

$$
\ker A=\{0\}\Rightarrow x=y
$$

A nonzero kernel vector gives distinct inputs with the same output.

$$
Az=0,z\ne0\Rightarrow A(x+z)=Ax
$$

### Interactive diagram

Along which input direction does the output stay fixed?

The kernel direction of $A=\begin{pmatrix}1&c\\0&0\end{pmatrix}$ is $(-c,1)$. Move the gold input along it; the output remains zero.

Online diagram: #/lesson/la-nullspace?view=visual

### Guided experiment

1. **A nonzero kernel vector** Set $c=1,t=1$.

Preset observation: Input $(-1,1)$ maps to zero.

2. **Change its length** Keep $c=1$ and set $t=2$.

Preset observation: Input $(-2,2)$ still maps to zero.

3. **Change the lost direction** Set $c=0,t=1$.

Preset observation: The kernel becomes the vertical axis; input $(0,1)$ maps to zero.

### Worked examples

#### Example 1: Find the kernel from free variables

Find the kernel of $A=\begin{pmatrix}1&2&0\\0&0&1\end{pmatrix}$.

- $x+2y=0,z=0$.
- Set $y=t$ to get $(-2t,t,0)$.

**Answer: $\ker A=\operatorname{span}((-2,1,0))$.**

#### Example 2: A collapsing map

Is $T(x,y,z)=(x,y)$ one-to-one?

- $T(0,0,1)=0$.
- Different heights produce the same output.

**Answer: Not one-to-one; the kernel is the vertical axis.**

### Common mistakes

- **The null space contains only zero.** The name describes zero output; inputs may be nonzero.

- **Every kernel vector has zero length.** The output disappears, not the input length.

### Exercises and solutions

**1. Find the kernel of $A=(1\ 1)$.**

Hint: Set the sum of the coordinates to zero.

Answer: $\operatorname{span}((1,-1))$.

- $(x,y)=t(1,-1)$.

**2. What nullity does an invertible matrix have?**

Hint: An invertible map never merges inputs.

Answer: 0

- The kernel is just zero; its basis is empty.

**3. If $Ax=b$ has two distinct solutions, is the kernel nonzero?**

Hint: Subtract the two solutions.

Answer: Nonzero.

- Their nonzero difference belongs to the kernel.

**4. Do row operations change the null space?**

Hint: Multiply on the left by an invertible elimination matrix.

Answer: No change.

- $EAx=0\iff Ax=0$.

Prerequisites: Parametric form and the full solution set, Vector spaces and subspaces.

## 4.2 Column space and row space

*Reachable outputs and input measurement directions*

### The idea

The column space contains reachable outputs. The row space is spanned by the rows viewed as vectors in the input space.

### Intuition

The column space asks which right-hand sides can occur. The row space records the input directions used by the output's linear measurements.

### Another explanation

The column space is on the output side and the row space on the input side. Identifying their ambient spaces prevents misleading comparisons.

### Quick check

Where should you take a basis for the original column space?

A. All reduced columns
B. Original pivot columns
C. Original zero rows

Answer: B. Locate pivots after reduction, but take basis vectors from the original matrix.

### How do you find a column-space basis?

Eliminate to locate pivots, then select those columns from the original matrix. Row operations may move the column space, so reduced columns cannot replace the original ones.

### How do you find a row-space basis?

Nonzero echelon rows form a basis for the original row space. Reversible row operations preserve the row span.

### Why do their dimensions agree?

Each nonzero echelon row has one pivot column. Both row rank and column rank equal this pivot count.

### Definition and conditions

Column space and row space

$$
\operatorname{col}A=\{Ax:x\in\mathbb R^n\},\quad\dim\operatorname{row}A=\dim\operatorname{col}A=\operatorname{rank}A
$$

- For an $m\times n$ matrix, the column space lies in $\mathbb R^m$ and the row space in $\mathbb R^n$. Do not treat them as the same space.

### Derivation

Column combinations are matrix-vector products.

$$
Ax=\sum_jx_ja_j
$$

Elimination preserves dependence coefficients among columns.

$$
Ax=0\iff R x=0
$$

Choose original pivot columns; nonzero echelon rows are independent.

$$
\dim\operatorname{col}A=\dim\operatorname{row}A=r
$$

### Interactive diagram

Why separate row and column spaces when their dimensions agree?

Fix $A=\begin{pmatrix}1&1&0\\0&0&1\end{pmatrix}$ and inspect the four spaces on the input and output sides.

Online diagram: #/lesson/la-column-row?view=visual

### Guided experiment

1. **Input kernel** Select the null space.

Preset observation: The kernel is spanned by $(1,-1,0)$ and has dimension one.

2. **Input row space** Select the row space.

Preset observation: The row space is plane $x=y$, perpendicular to the kernel, of dimension two.

3. **Output column space** Select the column space.

Preset observation: It is the entire two-dimensional output space. The left kernel is zero; inspect it with the fourth option.

### Worked examples

#### Example 1: Original pivot columns

Find a column-space basis for $A=\begin{pmatrix}1&2&0\\0&0&1\end{pmatrix}$.

- Pivots are in columns one and three.
- Choose original columns $(1,0),(0,1)$.

**Answer: The column space is $\mathbb R^2$.**

#### Example 2: Where the row space lives

Find a row-space basis for the same matrix.

- Its two nonzero rows are already independent.
- They are $(1,2,0),(0,0,1)$ and belong to the three-dimensional input space.

**Answer: $\operatorname{span}((1,2,0),(0,0,1))$.**

### Common mistakes

- **Equal dimensions mean the row and column spaces are equal sets.** Even their ambient spaces may differ.

- **Row reduction preserves the column space.** Row operations preserve column dependencies but can move the columns themselves.

### Exercises and solutions

**1. If $b\notin\operatorname{col}A$, what happens to $Ax=b$?**

Hint: The column space contains exactly the reachable right-hand sides.

Answer: No solution.

- No input produces that right-hand side.

**2. What is the column-space dimension of $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$?**

Hint: The columns are dependent but not all zero.

Answer: 1

- It is generated by $(1,2)$.

**3. Where does the row space of an $3\times5$ matrix lie?**

Hint: A row has five components.

Answer: $\mathbb R^5$.

- $\mathbb R^5$.

**4. Why do nonzero echelon rows form a row-space basis?**

Hint: Row operations are reversible and pivots occupy distinct positions.

Answer: They span the original row space and are independent.

- The span stays unchanged, and distinct leading positions ensure independence.

Prerequisites: Bases and unique representation, Gaussian elimination and row operations.

## 4.3 Rank-nullity, injectivity, and surjectivity

*Preserved and lost degrees of freedom*

### The idea

Input dimension equals the dimension of independent outputs plus the dimension lost completely.

### Intuition

Input degrees of freedom either contribute to visible output or lie in the kernel. The theorem counts these parts precisely.

### Another explanation

Rank counts output directions; nullity counts lost input directions. Their sum is the input dimension.

### Quick check

An $2\times4$ matrix has rank $2$. What is its nullity?

A. 0
B. 2
C. 4

Answer: B. Two of its four input degrees of freedom lie in the kernel.

### How does the count work?

For an $m\times n$ matrix of rank $r$, the homogeneous system has $n-r$ free variables, so the kernel dimension is $n-r$.

### What do injectivity and surjectivity require?

Injectivity needs a pivot in each column: $r=n$. Surjectivity onto the specified $\mathbb R^m$ needs a pivot in each row: $r=m$.

### What restricts rectangular matrices?

If $n>m$, injectivity is impossible; if $m>n$, the whole output space cannot be reached. Being onto its own image is a different statement.

### Definition and conditions

Rank-nullity, injectivity, and surjectivity

$$
\dim\ker T+\dim\operatorname{im}T=\dim V,\quad\operatorname{rank}A+\operatorname{nullity}A=n
$$

- The input space is finite-dimensional. State the codomain for surjectivity rather than silently replacing it with the image.

### Derivation

Pivot and free variables account for every unknown.

$$
n=r+(n-r)
$$

Homogeneous special solutions are independent and span the kernel.

$$
\dim\ker A=n-r
$$

Original pivot columns generate the image.

$$
\dim\operatorname{im}A=r
$$

### Interactive diagram

When a direction's output scale becomes exactly zero, how do rank and nullity compensate?

Matrix $\operatorname{diag}(1,c,0)$ maps three-dimensional input to the horizontal plane. When $c$ is zero, the image collapses further to the horizontal axis.

Online diagram: #/lesson/la-rank-nullity?view=visual

### Guided experiment

1. **Retain two directions** Set $c=1$.

Preset observation: Rank two, nullity one.

2. **Reverse orientation** Set $c=-1$.

Preset observation: Orientation reverses without losing a direction; rank stays two.

3. **Lose another direction** Set $c=0$.

Preset observation: Rank one, nullity two; their sum remains three.

### Worked examples

#### Example 1: How large is the kernel?

If $A$ is $4\times6$ with rank $3$, find the kernel dimension.

- Input dimension is the column count $6$.
- Nullity is $6-3=3$.

**Answer: 3; neither injective nor onto the full four-dimensional output space.**

#### Example 2: Injective but not onto

$T(x,y)=(x,y,x+y)$.

- The two columns are independent, so the rank is $2$ and nullity is zero.
- Outputs satisfy $z=x+y$ and do not cover all of $\mathbb R^3$.

**Answer: Injective, but not onto three-dimensional space.**

### Common mistakes

- **Rank plus nullity equals the row count.** It equals input dimension, the column count.

- **Injectivity and surjectivity are equivalent for every matrix.** They are directly equivalent only when finite input and output dimensions agree.

### Exercises and solutions

**1. An $3\times5$ matrix has rank $3$. Find its nullity.**

Hint: Subtract rank from the column count.

Answer: 2

- $5-3=2$.

**2. Is a full-column-rank $5\times3$ matrix injective?**

Hint: Check whether its kernel is zero.

Answer: Injective.

- $3-3=0$.

**3. Can a linear map from dimension three to dimension two be injective?**

Hint: The image has dimension at most two.

Answer: No.

- The kernel has dimension at least one.

**4. Is a surjective linear map from dimension four to dimension four invertible?**

Hint: Surjectivity gives rank four.

Answer: Invertible.

- The kernel is zero and the square matrix has full rank, so it is invertible.

Prerequisites: Kernel and null space, Column space and row space, Dimension, extension, and basis size.

## 4.4 The four fundamental subspaces

*Separate decompositions of input and output*

### The idea

The rows, columns, and two kernels split input and output into complementary orthogonal parts.

### Intuition

On the input side, the row space is perpendicular to the kernel. On the output side, the column space is perpendicular to the left null space. These are two pairs, not four spaces on one coordinate plot.

### Another explanation

The four spaces distinguish invisible input changes from unreachable outputs. Do not directly dot input-kernel vectors with right-hand sides of a different dimension.

### Quick check

Which space must a reachable right-hand side be perpendicular to?

A. Right null space
B. Left null space
C. Any single column

Answer: B. Reachable right-hand sides form the column space, the orthogonal complement of the left null space.

### What is the left null space?

Real vectors are orthogonal when their dot product is $u^Tv=\sum_i u_iv_i=0$. The left null space $\ker A^T$ lies in the output space; its members are perpendicular to every column, so they test reachability.

### How do you test a right-hand side?

$Ax=b$ is consistent exactly when $b$ is perpendicular to every left-null-space vector. Testing one vector is generally insufficient unless it spans the left kernel.

### How do dimensions pair up?

At rank $r$, row and column spaces both have dimension $r$; right nullity is $n-r$ and left nullity is $m-r$.

### Definition and conditions

The four fundamental subspaces

$$
\ker A=(\operatorname{row}A)^\perp,\quad\ker A^T=(\operatorname{col}A)^\perp
$$

- Use the real Euclidean inner product and an $m\times n$ matrix. Existence and uniqueness of orthogonal decompositions will be proved in the orthogonality chapter.
- Here $W^\perp$ means all vectors with zero dot product against every member of $W$.

### Derivation

Zero output means zero dot product with each row.

$$
Ax=0\iff a_i^Tx=0\quad\forall i
$$

Transpose to obtain the other pair.

$$
A^Ty=0\iff y^Ta_j=0\quad\forall j
$$

Count dimensions using rank-nullity.

$$
r+(n-r)=n,\quad r+(m-r)=m
$$

### Interactive diagram

How do lost input directions relate to the matrix rows?

Fix $A=\begin{pmatrix}1&1&0\\0&0&1\end{pmatrix}$ and inspect the four spaces on the input and output sides.

Online diagram: #/lesson/la-four-spaces?view=visual

### Guided experiment

1. **Input kernel** Select the null space.

Preset observation: The kernel is spanned by $(1,-1,0)$ and has dimension one.

2. **Input row space** Select the row space.

Preset observation: The row space is plane $x=y$, perpendicular to the kernel, of dimension two.

3. **Output column space** Select the column space.

Preset observation: It is the entire two-dimensional output space. The left kernel is zero; inspect it with the fourth option.

### Worked examples

#### Example 1: Locate the four spaces

Find the four spaces of $A=\begin{pmatrix}1&1&0\\0&0&1\end{pmatrix}$.

- The row space is generated by $(1,1,0),(0,0,1)$, and the kernel by $(1,-1,0)$.
- The column space is $\mathbb R^2$; the left kernel is just zero.

**Answer: Input splits into a two-dimensional row space and one-dimensional kernel; every output is reachable.**

#### Example 2: Detect inconsistency with the left kernel

Given $A=\begin{pmatrix}1&2\\2&4\end{pmatrix},b=(1,3)^T$, is the system consistent?

- $y=(-2,1)^T$ satisfies $A^Ty=0$.
- $y^Tb=-2+3=1\ne0$.

**Answer: Inconsistent.**

### Common mistakes

- **All four spaces lie in $\mathbb R^n$.** The column space and left kernel belong to the output side.

- **A right-hand side perpendicular to one column makes the system inconsistent.** Test the left kernel, not a single column.

### Exercises and solutions

**1. An $m\times n$ matrix has rank $r$. Find its left nullity.**

Hint: Apply rank-nullity to the transpose.

Answer: $m-r$.

- $A^T$ has $m$ columns and nullity $m-r$.

**2. Given $b=Ax$ and $A^Ty=0$, what is $y^Tb$?**

Hint: Transfer the matrix to the other side of the dot product by transposing.

Answer: 0

- $y^TAx=(A^Ty)^Tx=0$.

**3. Can a nonzero row-space vector also belong to the kernel?**

Hint: What if a vector is perpendicular to itself?

Answer: No.

- Membership in both gives $x^Tx=0$, forcing zero.

**4. If $A$ is $3\times2$ of rank $2$, can every three-dimensional right-hand side be reached?**

Hint: The column space is only two-dimensional.

Answer: No.

- Left nullity is $1$, so the right-hand side must satisfy one independent orthogonality condition.

Prerequisites: Rank-nullity, injectivity, and surjectivity.

## Chapter review

Try independently before reading the solutions.

**1. Find a kernel basis for $A=\begin{pmatrix}1&0&2\\0&1&-1\end{pmatrix}$.**

Hint: The third variable is free.

Answer: Basis $((-2,1,1))$.

- $x=-2z,y=z$.

**2. If $A$ is $6\times4$ with rank $3$, find all four fundamental-subspace dimensions.**

Hint: Separate the four-dimensional input from the six-dimensional output.

Answer: Row three, column three, right kernel one, left kernel three.

- Row and column dimensions are three; kernel dimension is $4-3=1$ and left-kernel dimension $6-3=3$.

**3. Given $A=\begin{pmatrix}1&1\\2&2\\3&3\end{pmatrix}$, is $b=(1,2,4)$ reachable?**

Hint: The columns lie on one line.

Answer: Unreachable.

- The column space is generated by $(1,2,3)$. The first two target coordinates force coefficient one, but the third disagrees.

# Chapter 5 · Determinants

A determinant measures a square matrix's signed volume scaling. Operation rules are more useful than repeatedly expanding large formulas.

Goals:
- Interpret sign and volume
- Calculate using row operations
- Connect determinants with invertibility

## 5.1 Determinants and oriented volume

*The signed volume scale*

### The idea

The determinant's magnitude gives volume scaling; its sign records an orientation reversal.

### Intuition

A matrix sends a unit square or cube to a parallelogram or parallelepiped. Collapsing into a lower dimension makes the corresponding area or volume factor zero.

### Another explanation

A determinant reduces a spatial deformation to one volume reading. It detects collapse without specifying the stretch of every direction.

### Quick check

What does a negative determinant mean?

A. Negative length
B. Reversed orientation
C. Undefined

Answer: B. Geometric volume scaling uses the determinant's absolute value.

### How do you calculate in two dimensions?

Columns $(a,c),(b,d)$ span signed area $ad-bc$. Geometric area is its absolute value, not a signed quantity.

### How do you interpret three dimensions?

Three columns span a parallelepiped. Swapping columns reverses orientation without changing geometric volume. Coplanar columns give zero volume.

### Does the determinant describe everything?

No. Different stretches and shears can share a volume factor. Preserving area does not guarantee preserving lengths or angles.

### Definition and conditions

Determinants and oriented volume

$$
\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc,\quad \operatorname{vol}(A[0,1]^n)=|\det A|
$$

- Determinants are defined for square matrices. Use Euclidean volume of the same dimension; degenerate images have zero volume in that dimension.

### Derivation

Begin with diagonal stretches.

$$
\det\operatorname{diag}(s_1,\ldots,s_n)=\prod_i s_i
$$

Swapping two directions reverses orientation.

$$
\det[a_2,a_1,\ldots]=-\det[a_1,a_2,\ldots]
$$

Dependence destroys volume in the original dimension.

$$
\operatorname{rank}A<n\Rightarrow\det A=0
$$

### Interactive diagram

Which directions become dependent when volume reaches zero?

The columns are $(1,0,0),(0,1,0),(c,0,a)$. Shearing changes shape; $a$ changes signed volume.

Online diagram: #/lesson/la-det-geometry?view=visual

### Guided experiment

1. **Unit volume** Set $a=1,c=0$.

Preset observation: Determinant and volume are both one.

2. **Shear** Set $a=1,c=1$.

Preset observation: The shape tilts, but volume remains one.

3. **Reverse orientation** Set $a=-1,c=1$.

Preset observation: Signed volume becomes minus one; geometric volume remains one.

### Worked examples

#### Example 1: Area and orientation

What area does $A=\begin{pmatrix}1&2\\3&1\end{pmatrix}$ produce from the unit square?

- $\det A=1-6=-5$.
- The absolute value gives area scaling; the negative sign reverses orientation.

**Answer: Area 5, with reversed orientation.**

#### Example 2: Spatial volume

Find the volume scale factor of $A=\operatorname{diag}(2,3,-1)$.

- Its determinant is $-6$.
- Take the absolute value for geometric volume.

**Answer: 6, with reversed orientation.**

### Common mistakes

- **A negative determinant means negative area.** Area is nonnegative; the sign describes orientation.

- **Equal determinants imply equal transformations.** One number cannot determine an entire matrix.

### Exercises and solutions

**1. What is $\det\operatorname{diag}(2,5)$?**

Hint: Multiply the diagonal entries.

Answer: 10

- $2\cdot5=10$.

**2. What area factor does a two-by-two matrix with equal columns have?**

Hint: The two directions coincide.

Answer: 0

- The parallelogram degenerates into a segment.

**3. Does reflection preserve area?**

Hint: Separate magnitude from sign.

Answer: Yes, while reversing orientation.

- An orthogonal reflection has determinant $-1$ and absolute value one.

**4. Does a three-dimensional map with $\det A=2$ double every length?**

Hint: Consider a diagonal matrix.

Answer: No.

- $\operatorname{diag}(2,1,1)$ stretches only one direction.

Prerequisites: Matrices, transposes, and multiplication, Linear independence and redundant directions.

## 5.2 Determinant rules

*Track determinants through elimination*

### The idea

Row-operation and product rules let you calculate determinants during elimination.

### Intuition

Adding a row multiple is a shear and preserves volume. Swapping rows reverses the sign; scaling one row scales the determinant by the same factor.

### Another explanation

Record which row operation you use at each step and account for its determinant effect.

### Quick check

By what factor does scaling one row by three change the determinant?

A. 3
B. $3^n$
C. Unchanged

Answer: A. Only scaling the whole matrix changes all rows at once.

### What do the three row operations do?

A row swap multiplies by $-1$. Scaling one row by $c$ multiplies the determinant by $c$. Adding another row's multiple leaves it unchanged. Columns obey the same rules.

### What about triangular matrices?

Upper- and lower-triangular determinants equal the product of diagonal entries. Track swaps and scales during elimination.

### What about products and transposes?

$\det(AB)=\det A\det B$ and $\det A^T=\det A$; generally $\det(A+B)=\det A+\det B$ does not hold.

### Definition and conditions

Determinant rules

$$
\det(AB)=\det A\det B,\quad\det A^T=\det A,\quad\det(cA)=c^n\det A
$$

- The product formula uses two $n\times n$ matrices. Scaling the whole matrix scales every row.

### Derivation

Expand the linear combination in one row.

$$
\det(\ldots,r_i+cr_j,\ldots)=\det A+c\det(\ldots,r_j,\ldots)
$$

The additional term has repeated rows, so it is zero.

$$
R_i\leftarrow R_i+cR_j\Rightarrow\det\text{ unchanged}
$$

Reduce to upper-triangular form, accounting for row-swap signs.

$$
\det A=(-1)^s\prod_i u_{ii}\quad\text{using only row additions and swaps}
$$

### Interactive diagram

Why can a shear change shape without changing area?

Shear matrix $\begin{pmatrix}1&c\\0&1\end{pmatrix}$ changes shape while its determinant stays one.

Online diagram: #/lesson/la-det-properties?view=visual

### Guided experiment

1. **No shear** Set $c=0$.

Preset observation: The unit square has area one.

2. **Shear right** Set $c=1$.

Preset observation: The top edge shifts horizontally; the base and height stay fixed.

3. **Shear left** Set $c=-1$.

Preset observation: The direction reverses; area remains one.

### Worked examples

#### Example 1: Eliminate instead of expanding

Find $\det\begin{pmatrix}1&2&0\\2&5&1\\0&0&3\end{pmatrix}$.

- Subtract twice row one from row two to get $(0,1,1)$.
- The triangular diagonal product is $1\cdot1\cdot3$.

**Answer: 3.**

#### Example 2: Scale the whole matrix

If $A$ has size three and $\det A=2$, find $\det(3A)$.

- All three rows scale by three, giving factor $3^3$.
- $27\cdot2=54$.

**Answer: 54.**

### Common mistakes

- **$\det(cA)=c\det A$ always holds.** For a square matrix of size $n$, the factor is $c^n$.

- **A row swap does not affect the determinant.** Its magnitude stays fixed, but the sign reverses.

### Exercises and solutions

**1. What happens after adding five times another row to one row?**

Hint: This is a shear.

Answer: Unchanged.

- The operation preserves the determinant.

**2. If $\det A=4$, what follows after swapping two rows?**

Hint: A swap reverses the sign.

Answer: $-4$

- $-4$.

**3. If $A$ is invertible and $\det A=2$, find $\det A^{-1}$.**

Hint: Take determinants of the product equal to the identity.

Answer: $1/2$

- $\det A\det A^{-1}=1$.

**4. Given $A=B=I_2$, does the determinant distribute over addition?**

Hint: Compare both sides directly.

Answer: No.

- $\det(A+B)=\det(2I_2)=4$, whereas $\det A+\det B=2$.

Prerequisites: Determinants and oriented volume, Gaussian elimination and row operations.

## 5.3 Cofactor expansion and the determinant

*Reduce a larger determinant to smaller ones*

### The idea

Expanding along one row or column recursively reduces a determinant's size.

### Intuition

Each entry contributes a smaller determinant with alternating sign. Choosing a row or column with many zeros often shortens the calculation.

### Another explanation

Cofactor expansion is more general than a three-by-three diagonal mnemonic. It works in every size and lets you choose an efficient row or column.

### Quick check

What are the first-row signs in order?

A. All positive
B. Positive, negative, positive
C. Negative, positive, negative

Answer: B. The sign depends on the parity of the row-plus-column index.

### What is a cofactor?

Delete row $i$ and column $j$ to obtain $M_{ij}$. The cofactor is $C_{ij}=(-1)^{i+j}\det M_{ij}$.

### How does expansion work?

Fix one row, multiply each entry by its cofactor, then sum. Expansion down a column works too.

### Should you use this for large matrices?

It is useful for small or sparse matrices and proofs. Repeated recursive expansion is expensive for large matrices, where factorization is usually preferable.

### Definition and conditions

Cofactor expansion and the determinant

$$
\det A=\sum_j a_{ij}(-1)^{i+j}\det M_{ij}
$$

- Expand along one fixed row or column. A one-by-one determinant is its entry; the zero-by-zero determinant is one by convention.

### Derivation

Group the permutation sum by the chosen column in a fixed row.

$$
\det A=\sum_{\pi\in S_n}\operatorname{sgn}(\pi)\prod_i a_{i,\pi(i)}
$$

Each group leaves a smaller permutation sum.

$$
\text{Fix }\pi(i)=j\Rightarrow a_{ij}(-1)^{i+j}\det M_{ij}
$$

Add these groups, with no term omitted.

$$
\det A=\sum_j a_{ij}C_{ij}
$$

### Interactive diagram

How do contributions from different entries of one row add up?

Fix a three-by-three matrix and expand along its first row. Switch entries to compare each contribution with the full determinant.

Online diagram: #/lesson/la-cofactors?view=visual

### Guided experiment

1. **First contribution** Select the first-column term.

Preset observation: Its contribution is $1\cdot3=3$.

2. **Second contribution** Select the second-column term.

Preset observation: The signed cofactor gives contribution $-2(-2)=4$.

3. **Zero-entry contribution** Select the third-column term.

Preset observation: Its entry is zero, so its contribution is zero; the total remains seven.

### Worked examples

#### Example 1: Expand along the first row

Given $A=\begin{pmatrix}1&2&0\\0&3&1\\2&0&1\end{pmatrix}$, find its determinant.

- The first contribution is $1(3\cdot1-1\cdot0)=3$.
- The second is $-2(0\cdot1-1\cdot2)=4$; the third is zero.

**Answer: 7.**

#### Example 2: Choose a column with zeros

Find $\det\begin{pmatrix}2&0&1\\3&4&5\\1&0&2\end{pmatrix}$.

- Only the middle entry of column two is nonzero.
- The result is $4\det\begin{pmatrix}2&1\\1&2\end{pmatrix}=4(4-1)$.

**Answer: 12.**

### Common mistakes

- **Cofactor signs are always positive.** Include the checkerboard factor $(-1)^{i+j}$.

- **Delete just the entry to obtain the minor.** Delete its entire row and column.

### Exercises and solutions

**1. What sign factor belongs to $C_{12}$?**

Hint: Add the row and column indices.

Answer: $-1$

- $(-1)^3=-1$.

**2. For $A=\operatorname{diag}(2,3,4)$, which term remains in a first-row expansion?**

Hint: Only the first entry is nonzero.

Answer: 24

- $2\det\operatorname{diag}(3,4)=24$.

**3. What is the determinant if a whole row is zero?**

Hint: Expand along that row.

Answer: 0

- Every entry-times-cofactor contribution is zero.

**4. Should expansion along different rows give the same result?**

Hint: Each regroups the same permutation sum.

Answer: Equal.

- Regrouping does not change the total.

Prerequisites: Determinant rules.

## 5.4 Determinants, inverses, and Cramer's rule

*A nonzero determinant gives a unique solution*

### The idea

A square matrix is invertible exactly when its determinant is nonzero. Cramer's rule expresses the unique solution using determinants of replaced columns.

### Intuition

If all input directions stay independent, volume does not collapse and the input can be recovered uniquely.

### Another explanation

A determinant can immediately rule out uniqueness, but a singular case still needs the right-hand side checked for conflicts.

### Quick check

What can happen when the square coefficient determinant is zero?

A. Always no solution
B. Always a unique solution
C. No solution or infinitely many solutions

Answer: C. Consistency depends on the right-hand side; a nonzero kernel already rules out uniqueness.

### Why does nonzero imply invertible?

Missing a pivot leaves a zero triangular diagonal product. With full pivots, swaps and nonzero scales cannot turn a nonzero determinant into zero.

### How do you write Cramer's rule?

Replace column $j$ of $A$ with the right-hand side to obtain $A_j(b)$. Use the determinant ratio to find $x_j$.

### When is it inefficient?

It is useful for theory and small matrices. For large systems, factoring is usually faster than computing separate determinants. A zero determinant forbids division, and a ratio cannot classify all singular cases.

### Definition and conditions

Determinants, inverses, and Cramer's rule

$$
\det A\ne0\iff A\text{ invertible},\qquad x_j=\frac{\det A_j(b)}{\det A}
$$

- Cramer's rule requires a square matrix with nonzero determinant. Invertibility is also equivalent to zero not being an eigenvalue, as a later chapter explains.

### Derivation

Write the right-hand side as a column combination.

$$
b=\sum_i x_i a_i
$$

Expand the replaced column using linearity.

$$
\det A_j(b)=\sum_i x_i\det[a_1,\ldots,a_i,\ldots,a_n]
$$

Repeated-column terms vanish, leaving only its own term.

$$
\det A_j(b)=x_j\det A
$$

### Interactive diagram

Why do determinant ratios fail when the constraints become parallel?

The constraints are $x+y=2$ and $x+cy=b$. For a singular matrix, distinguish coincident lines from distinct parallel lines.

Online diagram: #/lesson/la-cramer?view=visual

### Guided experiment

1. **One intersection** Set $c=2,b=3$.

Preset observation: The solution is $(1,1)$; the determinant is one.

2. **Repeated constraints** Set $c=1,b=2$.

Preset observation: The lines coincide. The coefficient rank is one, with infinitely many solutions.

3. **Conflicting constraints** Keep $c=1$ and change $b$ to $3$.

Preset observation: Distinct parallel lines never meet. The augmented rank exceeds the coefficient rank.

### Worked examples

#### Example 1: Solve a two-by-two system

Use Cramer's rule for $x+y=3,2x+3y=8$.

- $\det A=3-2=1$.
- Replacing column one gives determinant $9-8=1$; replacing column two gives $8-6=2$.

**Answer: $x=1,y=2$.**

#### Example 2: A zero denominator requires elimination

Can Cramer ratios solve $x+y=1,2x+2y=2$?

- The coefficient determinant is zero.
- The system is consistent but has a free variable; division by zero is invalid.

**Answer: No; describe the full solution set instead.**

### Common mistakes

- **A zero determinant always means no solution.** Infinitely many solutions are also possible; check the right-hand side.

- **Small entries make a matrix noninvertible.** Invertibility depends on independence, not overall scale.

### Exercises and solutions

**1. Is $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ invertible?**

Hint: Calculate the two-by-two determinant.

Answer: Invertible.

- $2-1=1\ne0$.

**2. Given $\det A=3,\det A_2(b)=12$, find $x_2$.**

Hint: Apply the ratio with a nonzero denominator.

Answer: 4

- $x_2=12/3=4$.

**3. If $\det A=0$, is a unique solution possible?**

Hint: A singular square matrix has a nonzero kernel.

Answer: Impossible.

- Add a nonzero kernel vector to any solution to get another.

**4. Does $\det A=0.0001$ alone establish numerical ill-conditioning?**

Hint: Compare a uniform scale change.

Answer: Insufficient.

- $A=0.01I_2$ has a small determinant but scales both directions equally, giving condition number one.

Prerequisites: Cofactor expansion and the determinant, Inverses and the invertible matrix theorem.

## Chapter review

Try independently before reading the solutions.

**1. Find $\det\begin{pmatrix}2&1&0\\0&3&2\\0&0&-1\end{pmatrix}$.**

Hint: The matrix is triangular.

Answer: $-6$

- Its diagonal product is $2\cdot3\cdot(-1)=-6$.

**2. A size-four $A$ has determinant three. After swapping two rows and doubling one row, what is its determinant?**

Hint: Track each factor separately.

Answer: $-6$

- Reverse the sign, then double, giving $-6$.

**3. Use determinants to find $x$ in $2x+y=5,x+y=3$.**

Hint: Replace the first column.

Answer: $x=2$.

- The coefficient determinant is one; the replacement determinant is $5-3=2$.

# Chapter 6 · Eigenvalues and diagonalization

Eigenvectors only scale under the map. Enough independent eigenvectors separate repeated actions into scalar calculations along directions.

Goals:
- Find eigenspaces
- Test diagonalizability
- Handle repeated and complex eigenvalues

## 6.1 Eigenvectors and eigenspaces

*Directions that stay on the same line*

### The idea

An eigenvector is a nonzero vector whose image is a scalar multiple of itself.

### Intuition

A general vector changes direction. An eigendirection only stretches, shrinks, reverses, or disappears when the eigenvalue is zero.

### Another explanation

An eigendirection reduces a multi-coordinate map to scalar multiplication. This simplifies matrix powers and dynamical systems later.

### Quick check

May a matrix send an eigenvector to zero?

A. Yes, for eigenvalue zero
B. No
C. Only the zero vector is allowed

Answer: A. The input must be nonzero; the output need not be.

### What does an eigenvalue measure?

In $Av=\lambda v$, $\lambda$ gives signed scaling in that direction. $\lambda=0$ is allowed, but $v=0$ is not an eigenvector.

### What do vectors for one eigenvalue form?

Include zero and the associated vectors form $\ker(A-\lambda I)$, the eigenspace.

### Does every matrix have real eigenvectors?

No. A planar rotation generally has no real eigendirection. Allowing complex numbers changes the situation.

### Definition and conditions

Eigenvectors and eigenspaces

$$
Av=\lambda v,\quad v\ne0,\qquad E_\lambda=\ker(A-\lambda I)
$$

- Eigenvalues concern a square map from one finite-dimensional space to itself. Specify whether the scalar field is real or complex.

### Derivation

Move the scalar multiple to the left.

$$
(A-\lambda I)v=0
$$

Require a nonzero homogeneous solution.

$$
\ker(A-\lambda I)\ne\{0\}
$$

Find all directions in the eigenspace.

$$
v\in E_\lambda\setminus\{0\}
$$

### Interactive diagram

At which input angles does the matrix preserve the direction line?

$A=\begin{pmatrix}2&c\\c&2\end{pmatrix}$. Blue is the unit input; gold is its output. They are collinear on eigendirections.

Online diagram: #/lesson/la-eigenvectors?view=visual

### Guided experiment

1. **First eigendirection** Set $c=1,\theta=\pi/4$.

Preset observation: Output length is three in the same direction, giving eigenvalue three.

2. **Second eigendirection** Set $c=1,\theta=3\pi/4$.

Preset observation: Output length is one, giving eigenvalue one; the directions are perpendicular.

3. **Repeated eigenvalue without missing directions** Set $c=0$.

Preset observation: The matrix is $2I$; every nonzero direction is an eigendirection.

### Worked examples

#### Example 1: Verify directions directly

Given $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, check $(1,1)$ and $(1,-1)$.

- $A(1,1)=(3,3)=3(1,1)$.
- $A(1,-1)=(1,-1)$.

**Answer: Their eigenvalues are $3$ and $1$ respectively.**

#### Example 2: A zero eigenvalue

Find the zero eigenspace of $A=\operatorname{diag}(2,0)$.

- $Av=0$ forces the first component to zero.
- All $(0,t)$ form that space.

**Answer: $E_0=\operatorname{span}((0,1))$.**

### Common mistakes

- **Zero is also an eigenvector.** Zero satisfies every scaling relation and cannot identify an eigenvalue, so the definition excludes it.

- **Eigenvalues must be positive.** They can be negative, zero, or complex.

### Exercises and solutions

**1. When $\operatorname{diag}(2,5)$ acts on $(0,3)$, what is the eigenvalue?**

Hint: Read the scale in that direction.

Answer: 5

- The output is $(0,15)=5(0,3)$.

**2. Is every nonzero vector an eigenvector of $A=-I$?**

Hint: Apply the matrix to an arbitrary vector.

Answer: Yes, with eigenvalue minus one.

- $Av=-v$.

**3. Can an invertible $A$ have eigenvalue zero?**

Hint: A nonzero zero-eigenvector would belong to the kernel.

Answer: No.

- An invertible matrix has zero kernel.

**4. Does adding two vectors from one eigenspace stay in that eigenspace?**

Hint: Use linearity.

Answer: It remains in the eigenspace.

- $A(u+v)=\lambda(u+v)$. The result may be zero, which still belongs to the space.

Prerequisites: Kernel and null space, Linear maps and standard matrices.

## 6.2 Characteristic polynomials, trace, and determinant

*Find scaling values, then directions*

### The idea

The characteristic polynomial finds all scalar shifts that make a matrix singular.

### Intuition

Subtract the same scalar scaling from every direction. When a nonzero direction cancels completely, that scalar is an eigenvalue.

### Another explanation

The characteristic equation finds possible scalings; the homogeneous systems find directions realizing them. Keep these two steps separate.

### Quick check

What are the roots of the characteristic polynomial?

A. Every matrix entry
B. Eigenvalues
C. Eigenvector coordinates

Answer: B. Roots are scalars; vectors require a separate homogeneous solve.

### How do you find eigenvalues?

Solve $\det(\lambda I-A)=0$, then solve $(A-\lambda I)v=0$ for each root. Roots themselves are not eigenvectors.

### What is algebraic multiplicity?

It is the number of times a root repeats in the characteristic polynomial. It does not directly count independent eigenvectors.

### What does trace reveal?

Over the complex numbers, counting algebraic multiplicity, eigenvalues sum to the trace and multiply to the determinant. Trace sums only diagonal entries.

### Definition and conditions

Characteristic polynomials, trace, and determinant

$$
p_A(\lambda)=\det(\lambda I-A),\quad\sum_i\lambda_i=\operatorname{tr}A,\quad\prod_i\lambda_i=\det A
$$

- Count eigenvalues over the complex numbers with algebraic multiplicities. Nonreal roots of a real matrix occur in conjugate pairs.

### Derivation

A nonzero eigenvector exists exactly when the shifted matrix is singular.

$$
\lambda\text{ is an eigenvalue}\iff\det(\lambda I-A)=0
$$

The first two polynomial coefficients give the sum.

$$
p_A(\lambda)=\lambda^n-(\operatorname{tr}A)\lambda^{n-1}+\cdots
$$

The constant term gives the product.

$$
p_A(0)=(-1)^n\det A
$$

### Interactive diagram

How do eigenvalue sum and product compare with trace and determinant?

$A=\begin{pmatrix}2&c\\c&2\end{pmatrix}$. Blue is the unit input; gold is its output. They are collinear on eigendirections.

Online diagram: #/lesson/la-characteristic?view=visual

### Guided experiment

1. **First eigendirection** Set $c=1,\theta=\pi/4$.

Preset observation: Output length is three in the same direction, giving eigenvalue three.

2. **Second eigendirection** Set $c=1,\theta=3\pi/4$.

Preset observation: Output length is one, giving eigenvalue one; the directions are perpendicular.

3. **Repeated eigenvalue without missing directions** Set $c=0$.

Preset observation: The matrix is $2I$; every nonzero direction is an eigendirection.

### Worked examples

#### Example 1: A symmetric two-by-two matrix

Find the characteristic polynomial of $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.

- $p=(\lambda-2)^2-1$.
- $p=(\lambda-3)(\lambda-1)$.

**Answer: The roots are $3,1$, their sum $4$, and product $3$.**

#### Example 2: A triangular matrix

Find the eigenvalues of $A=\begin{pmatrix}2&7&0\\0&-1&4\\0&0&2\end{pmatrix}$.

- The characteristic matrix is triangular; multiply diagonal entries.
- $p=(\lambda-2)^2(\lambda+1)$.

**Answer: $2$ has algebraic multiplicity $2$, and $-1$ has multiplicity $1$.**

### Common mistakes

- **Equal traces imply identical eigenvalues.** Trace gives only one constraint on their sum.

- **A repeated root guarantees that many independent eigenvectors.** Compute the eigenspace dimension separately.

### Exercises and solutions

**1. What is $\operatorname{tr}\begin{pmatrix}1&4\\2&3\end{pmatrix}$?**

Hint: Sum only diagonal entries.

Answer: 4

- $1+3=4$.

**2. A two-by-two matrix has eigenvalues $2,5$. Find its determinant.**

Hint: Multiply with multiplicities.

Answer: 10

- $2\cdot5=10$.

**3. Find the characteristic polynomial of $\begin{pmatrix}1&9\\0&1\end{pmatrix}$.**

Hint: Multiply the triangular diagonal entries.

Answer: $(\lambda-1)^2$.

- $(\lambda-1)^2$.

**4. After finding a root, how do you find eigenvectors?**

Hint: Return to the homogeneous system.

Answer: Solve the corresponding homogeneous equation.

- Find nonzero vectors in $\ker(A-\lambda I)$.

Prerequisites: Eigenvectors and eigenspaces, Determinants, inverses, and Cramer's rule.

## 6.3 Repeated roots and eigenspace dimension

*Root count differs from direction count*

### The idea

A repeated eigenvalue need not provide enough independent eigenvectors.

### Intuition

A polynomial counts repeated roots. The eigenspace dimension counts the independent directions actually available.

### Another explanation

When geometric multiplicity is deficient, more calculation cannot find the missing direction: it does not exist.

### Quick check

Can a two-by-two matrix with a double root and a one-dimensional eigenspace be diagonalized?

A. Yes
B. No
C. It depends on vector length

Answer: B. One independent eigendirection is missing.

### What is geometric multiplicity?

Geometric multiplicity is $\dim\ker(A-\lambda I)$. It is at least one and at most the root's algebraic multiplicity.

### Why can directions be missing?

A shear-type matrix can have identical eigenvalues yet only one eigenline. Elimination reveals this deficit directly.

### What about distinct eigenvalues?

Eigenvectors for distinct eigenvalues are independent. For a repeated eigenvalue, choose a basis within its eigenspace.

### Definition and conditions

Repeated roots and eigenspace dimension

$$
1\le\dim E_\lambda\le\operatorname{mult}_{p_A}(\lambda)
$$

- Discuss multiplicities only for actual eigenvalues, and calculate eigenspaces over the specified field.

### Derivation

Assume a shortest nontrivial dependence relation.

$$
c_1v_1+\cdots+c_kv_k=0
$$

Apply the matrix, then subtract the first eigenvalue times the original relation.

$$
\sum_{j=2}^k c_j(\lambda_j-\lambda_1)v_j=0
$$

Distinct eigenvalues give a shorter relation, a contradiction.

$$
\lambda_j\ne\lambda_1\Rightarrow c_j=0
$$

### Interactive diagram

Why does the eigenspace expand from a line to the plane exactly when the shear is zero?

$A=\begin{pmatrix}1&c\\0&1\end{pmatrix}$ always has eigenvalue one. A nonzero shear leaves just one real eigenline.

Online diagram: #/lesson/la-multiplicity?view=visual

### Guided experiment

1. **Missing a direction** Set $c=1$.

Preset observation: Algebraic multiplicity two and geometric multiplicity one: not diagonalizable.

2. **Reduce the shear** Set $c=0.1$.

Preset observation: It is still nonzero, so geometric multiplicity remains one.

3. **Exactly the identity** Set $c=0$.

Preset observation: The eigenspace becomes the whole plane and diagonalization is possible.

### Worked examples

#### Example 1: Same roots, different geometry

Compare $I_2$ and $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

- Both characteristic polynomials are $(\lambda-1)^2$.
- The kernel of $I_2-I_2=0$ is the plane; $J-I_2$ forces the second component to zero.

**Answer: Their geometric multiplicities are 2 and 1 respectively.**

#### Example 2: A missing direction

Why does $J$ lack two independent eigenvectors?

- Every eigenvector is $(t,0)$ with $t\ne0$.
- Any two are collinear.

**Answer: Its eigenspace is only one-dimensional.**

### Common mistakes

- **A double root guarantees diagonalizability.** Check the geometric multiplicity too.

- **Eigenvectors for distinct eigenvalues may be collinear.** One nonzero vector cannot have two different scaling values.

### Exercises and solutions

**1. Find the geometric multiplicity of eigenvalue $3$ for $3I_3$.**

Hint: Every direction scales by three.

Answer: 3

- The eigenspace is the whole three-dimensional space.

**2. How many independent eigenvectors does a three-by-three matrix with three distinct real eigenvalues have?**

Hint: Distinct eigenvalues give independent directions.

Answer: 3

- Choose one eigenvector for each eigenvalue, giving three independent vectors.

**3. Find the eigenspace of $J=\begin{pmatrix}2&1\\0&2\end{pmatrix}$.**

Hint: Find the kernel.

Answer: $\operatorname{span}((1,0))$.

- $(J-2I)v=0$ requires $v_2=0$.

**4. Can geometric multiplicity exceed algebraic multiplicity?**

Hint: Extend an eigenspace basis and inspect the block-triangular matrix.

Answer: No.

- The eigenspace dimension contributes that many characteristic-polynomial factors.

Prerequisites: Characteristic polynomials, trace, and determinant, Dimension, extension, and basis size.

## 6.4 Diagonalization and similar matrices

*Coordinates that do not mix*

### The idea

In an eigenvector basis, the matrix is diagonal and scales each coordinate separately.

### Intuition

Choosing directions that do not mix separates the matrix action into independent coordinates.

### Another explanation

Diagonalization finds coordinates separating every direction's action, rather than merely cleaning up the matrix's appearance.

### Quick check

Which condition is necessary and sufficient for diagonalization?

A. Every entry is nonzero
B. Enough linearly independent eigenvectors
C. A nonzero eigenvalue sum

Answer: B. A diagonalizing basis consists entirely of eigenvectors.

### How is the factorization formed?

Put independent eigenvectors in $S$, and matching eigenvalues on the diagonal of $D$ in the same order. Then $AS=SD$.

### When does it exist?

A matrix of size $n$ is diagonalizable over a field exactly when it has $n$ independent eigenvectors there. Having $n$ distinct eigenvalues is sufficient but not necessary.

### What does similarity preserve?

Similar matrices describe the same operator in different coordinates. They share characteristic polynomial, trace, determinant, and rank, but generally not entries or Euclidean length effects.

### Definition and conditions

Diagonalization and similar matrices

$$
A=SDS^{-1},\quad A^k=SD^kS^{-1}\quad(k\ge0)
$$

- The eigenvector matrix $S$ must be invertible, with eigenvector columns matched to diagonal entries. Negative powers also require nonzero eigenvalues.

### Derivation

Apply the matrix column by column.

$$
AS=[Av_1\ \cdots\ Av_n]=[\lambda_1v_1\ \cdots\ \lambda_nv_n]=SD
$$

Multiply on the right by the inverse.

$$
A=SDS^{-1}
$$

Repeated multiplication cancels adjacent inverse factors.

$$
A^k=S D^kS^{-1}
$$

### Interactive diagram

In the eigenbasis, how do the previously mixed coordinates scale separately?

$S=\begin{pmatrix}1&c\\0&1\end{pmatrix}$, $D=\operatorname{diag}(2,1)$, $A=SDS^{-1}$. The columns of $S$ give the two eigendirections.

Online diagram: #/lesson/la-diagonalization?view=visual

### Guided experiment

1. **Standard eigenbasis** Set $c=0$.

Preset observation: The matrix is already diagonal; coordinates scale independently.

2. **Oblique eigenbasis** Set $c=1$.

Preset observation: The second eigendirection is $(1,1)$ and still scales by one.

3. **Tilt the other way** Set $c=-1$.

Preset observation: The directions change, but eigenvalues remain two and one.

### Worked examples

#### Example 1: Factor, then take powers

Given $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, find $A^2$.

- Choose $S=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and $D=\operatorname{diag}(3,1)$.
- $SD^2S^{-1}=\begin{pmatrix}5&4\\4&5\end{pmatrix}$; verify by direct multiplication.

**Answer: $A^2=\begin{pmatrix}5&4\\4&5\end{pmatrix}$.**

#### Example 2: A repeated root can still diagonalize

Is $A=2I_3$ diagonalizable?

- It is already diagonal.
- The standard basis gives three independent eigenvectors, all with eigenvalue $2$.

**Answer: Diagonalizable.**

### Common mistakes

- **Diagonalization just deletes off-diagonal entries.** That changes the operator; a basis change is required.

- **Repeated eigenvalues prevent diagonalization.** Repetition is harmless if enough independent directions remain.

### Exercises and solutions

**1. $D=\operatorname{diag}(2,-1)$, $D^3$?**

Hint: Cube each diagonal entry.

Answer: $\operatorname{diag}(8,-1)$.

- $D^3=\operatorname{diag}(8,-1)$.

**2. May an eigenvector matrix for diagonalization have dependent columns?**

Hint: The factorization requires its inverse.

Answer: No.

- Dependent columns make it singular.

**3. Given $A=SDS^{-1}$, what is $A^0$?**

Hint: Both zero and nonzero eigenvalues allow the zeroth matrix power.

Answer: $I$.

- $A^0=I$, using $D^0=I$.

**4. Must similar matrices have the same singular values?**

Hint: A basis change need not be orthogonal.

Answer: Not necessarily.

- $\begin{pmatrix}1&c\\0&2\end{pmatrix}$ and $\operatorname{diag}(1,2)$ are similar, but a nonorthogonal shear changes length scaling.

Prerequisites: Repeated roots and eigenspace dimension, Basis coordinates and change of basis.

## 6.5 Complex eigenvalues and planar rotation

*Describe rotation with complex numbers*

### The idea

A real matrix may lack real eigendirections. Complex numbers extend eigenvalue language to rotation.

### Intuition

A rotation moving every real line cannot be described by real scaling alone. Complex multiplication combines scaling and rotation.

### Another explanation

Complex eigenvalues express rotation as multiplication by a number requiring two real coordinates to describe.

### Quick check

How do nonreal eigenvalues of a real matrix pair up?

A. As reciprocals
B. As complex conjugates
C. As negatives

Answer: B. Conjugating the eigenvalue equation leaves the real matrix unchanged.

### How do complex operations work?

$i^2=-1$; conjugation changes $a+bi$ to $a-bi$. Complex vectors still add and scale componentwise, but their inner product uses conjugation.

### Why do eigenvalues of real matrices occur in conjugate pairs?

Conjugating $Av=\lambda v$ gives $A\bar v=\bar\lambda\bar v$. Thus nonreal eigenvalues pair up.

### Do complex eigenvalues permit real diagonalization?

No. A real diagonal matrix has real eigenvalues. Distinguish diagonalization over the reals from over the complex numbers; a general complex matrix may still lack enough eigenvectors.

### Definition and conditions

Complex eigenvalues and planar rotation

$$
R_\theta:\quad\lambda=\cos\theta\pm i\sin\theta,\qquad |\lambda|=1
$$

- Rotation angles are in radians. Eigenvalues are nonreal except at integer half-turns. The complex inner product convention is given in the appendix.

### Derivation

Write the two-by-two characteristic polynomial.

$$
p(\lambda)=\lambda^2-2\cos\theta\lambda+1
$$

Solve the quadratic.

$$
\lambda=\cos\theta\pm\sqrt{-\sin^2\theta}
$$

Its complex roots lie on the unit circle.

$$
|\lambda|^2=\cos^2\theta+\sin^2\theta=1
$$

### Interactive diagram

As the rotation angle changes, how do the eigenvalues move in the complex plane?

The two unit-circle points are the rotation matrix's complex eigenvalues. Horizontal is real part; vertical is imaginary part.

Online diagram: #/lesson/la-complex-eigen?view=visual

### Guided experiment

1. **Zero angle** Set $\theta=0$.

Preset observation: Both eigenvalues are one.

2. **Quarter-turn** Set $\theta=\pi/2$.

Preset observation: The eigenvalues are $i,-i$; there are no real eigendirections.

3. **Half-turn** Set $\theta=\pi$.

Preset observation: Both eigenvalues are minus one; every real line maps to itself.

### Worked examples

#### Example 1: A quarter-turn

Find the eigenvalues and one complex eigenvector of $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

- $p=\lambda^2+1$ has roots $i,-i$.
- For $i$, use $v=(1,-i)^T$ and verify $Rv=(i,1)^T=iv$.

**Answer: Eigenvalues $\pm i$; no real eigenvectors.**

#### Example 2: Rotate and enlarge

Find the eigenvalue magnitudes of $A=2R$.

- Doubling the original eigenvalues gives $\pm2i$.
- Their magnitudes mean lengths double at each application.

**Answer: Magnitude 2.**

### Common mistakes

- **A real matrix must have real eigenvalues.** Real symmetric matrices guarantee this; general real matrices do not.

- **Without real eigenvalues, a transformation is invalid.** A planar rotation is an ordinary real linear transformation.

### Exercises and solutions

**1. What is $i^2$?**

Hint: Use the definition of complex numbers.

Answer: $-1$

- $i^2=-1$.

**2. Find the magnitude of $3+4i$.**

Hint: Take the square root of the sum of squared real and imaginary parts.

Answer: 5

- $\sqrt{9+16}=5$.

**3. If a real matrix has eigenvalue $1+2i$, which other eigenvalue is required?**

Hint: Take the conjugate.

Answer: $1-2i$.

- $1-2i$.

**4. Does a planar half-turn have real eigenvectors?**

Hint: Its matrix is minus the identity.

Answer: Yes.

- $R_\pi=-I$; every nonzero real vector has eigenvalue $-1$.

Prerequisites: Characteristic polynomials, trace, and determinant.

## Chapter review

Try independently before reading the solutions.

**1. Find two eigendirections of $A=\begin{pmatrix}4&1\\0&2\end{pmatrix}$.**

Hint: Read the triangular diagonal, then solve each kernel.

Answer: $(1,0)$ and $(1,-2)$.

- Eigenvalue four has direction $(1,0)$.
- Eigenvalue two requires $2x+y=0$; choose $(1,-2)$.

**2. Is $A=\begin{pmatrix}3&1\\0&3\end{pmatrix}$ diagonalizable?**

Hint: Compare algebraic and geometric multiplicities.

Answer: Not diagonalizable.

- Eigenvalue three has algebraic multiplicity two but only the one-dimensional horizontal eigenspace.

**3. Find the eigenvalues and determinant of $A=\begin{pmatrix}0&-2\\2&0\end{pmatrix}$.**

Hint: The characteristic polynomial is a square plus a constant.

Answer: Eigenvalues $\pm2i$; determinant four.

- $p=\lambda^2+4$ has roots $\pm2i$, with product four.

# Chapter 7 · Orthogonality, projection, and least squares

Length and perpendicularity simplify coordinates. Orthogonal decomposition leads from projection to QR and least squares.

Goals:
- Calculate projections and distances
- Construct orthonormal bases
- Form and solve least-squares problems

## 7.1 Inner products, lengths, and angles

*Measure alignment, length, and angle*

### The idea

The inner product measures alignment and defines length and distance.

### Intuition

Aligned components contribute positively, opposed components negatively; perpendicular directions have zero total contribution.

### Another explanation

Inner products provide the length measurement behind nearest points, least error, and projection, not only angles.

### Quick check

What must you exclude before calculating an angle with inner products?

A. Negative coordinates
B. Zero vectors
C. Three-component vectors

Answer: B. A zero vector has zero length, so the angle formula is undefined.

### How do you calculate the standard inner product?

Multiply corresponding real components and sum. Length is $\|x\|=\sqrt{x^Tx}$; distance is the length of the difference vector.

### How do you obtain an angle?

Nonzero vectors satisfy $\cos\theta=x^Ty/(\|x\|\|y\|)$. This does not define an angle for zero vectors.

### Why do these definitions work?

A real inner product is linear in each variable, symmetric, and positive definite. An arbitrary bilinear expression need not define length.

### Definition and conditions

Inner products, lengths, and angles

$$
\langle x,y\rangle=x^Ty,\quad |x^Ty|\le\|x\|\|y\|,\quad \|x+y\|\le\|x\|+\|y\|
$$

- Use the real Euclidean inner product. Both vectors must be nonzero for the angle formula. Proofs of Cauchy-Schwarz and the triangle inequality appear in the appendix.

### Derivation

A nonnegative square provides a bound.

$$
0\le\|x-ty\|^2=\|x\|^2-2t x^Ty+t^2\|y\|^2
$$

Choose the minimizing scalar along a nonzero direction.

$$
t=\frac{x^Ty}{\|y\|^2}\Rightarrow (x^Ty)^2\le\|x\|^2\|y\|^2
$$

Expand the squared norm of a sum to obtain the triangle inequality.

$$
\|x+y\|^2\le(\|x\|+\|y\|)^2
$$

### Interactive diagram

How does the inner product pass through zero as alignment reverses?

Fix $u=(1,0)$. The other vector has length $b$ and the angle selected by the control. Zero length leaves the angle undefined.

Online diagram: #/lesson/la-inner-products?view=visual

### Guided experiment

1. **Same direction** Set $b=1,\theta=0$.

Preset observation: The dot product is one.

2. **Perpendicular** Set $b=1,\theta=\pi/2$.

Preset observation: The dot product is zero.

3. **Opposite direction** Set $b=1,\theta=\pi$.

Preset observation: The dot product is minus one.

### Worked examples

#### Example 1: Length and angle

Find the angle between $u=(1,0),v=(1,1)$.

- Their dot product is one and lengths are one and $\sqrt2$.
- The cosine is $1/\sqrt2$.

**Answer: $\pi/4$.**

#### Example 2: Distance

Find the distance between $(1,2,3)$ and $(3,1,1)$.

- Their difference is $(2,-1,-2)$.
- Its squared length is $4+1+4=9$.

**Answer: 3.**

### Common mistakes

- **A zero dot product defines a right angle for the zero vector.** Zero has zero dot product with every vector, but the angle formula divides by zero.

- **Length is additive.** Usually only an inequality holds; equality requires the same direction.

### Exercises and solutions

**1. $(1,-2,3)\cdot(2,1,0)$?**

Hint: Multiply corresponding components and sum.

Answer: 0

- $2-2+0=0$.

**2. $\|(2,3,6)\|$?**

Hint: Take the square root of the sum of squares.

Answer: 7

- $\sqrt{4+9+36}=7$.

**3. What does a negative $x^Ty$ say about the angle?**

Hint: For nonzero vectors, inspect the cosine's sign.

Answer: Obtuse.

- A negative cosine means an angle greater than $\pi/2$.

**4. Is $B(x,y)=x_1y_1-x_2y_2$ a real inner product?**

Hint: Check positive definiteness.

Answer: No.

- $B((0,1),(0,1))=-1$.

Prerequisites: Vectors and linear combinations.

## 7.2 Vector projection and nearest points

*Find the closest vector in a subspace*

### The idea

Orthogonal projection is the vector in a specified subspace nearest to the target.

### Intuition

Split the target into a subspace component and a perpendicular remainder. Movement within the subspace cannot remove that remainder.

### Another explanation

Only a perpendicular projection gives the nearest point; collapsing along an arbitrary direction does not.

### Quick check

How does the nearest-point residual relate to the subspace?

A. Parallel
B. Perpendicular
C. Equal length

Answer: B. Any subspace component of the error could still be removed, so none remains at the nearest point.

### How do you project onto a line?

Projection along nonzero $u$ is $u(u^Tb)/(u^Tu)$. Its coefficient can be negative; the point need not lie on the drawn positive ray.

### Why is the nearest point unique?

Any other candidate differs from the projection by a subspace vector, perpendicular to the residual. Pythagoras shows this can only increase distance.

### What if an orthonormal basis is available?

For orthonormal $q_j$, take dot-product coefficients and sum. This formula cannot be copied directly for an oblique basis.

### Definition and conditions

Vector projection and nearest points

$$
p=\frac{u^Tb}{u^Tu}u,\quad r=b-p,\quad u^Tr=0;\qquad P_Wb=QQ^Tb
$$

- The line formula requires $u\ne0$. The latter formula requires the columns of $Q$ to be an orthonormal basis of the target subspace.

### Derivation

Require the remainder to be perpendicular to the direction.

$$
u^T(b-cu)=0
$$

Solve for its coefficient.

$$
c=\frac{u^Tb}{u^Tu}
$$

Every other candidate adds a nonnegative square.

$$
\|b-w\|^2=\|b-p\|^2+\|p-w\|^2
$$

### Interactive diagram

Why does the residual remain perpendicular to the line as the projection moves?

Project target $(1,a)$ onto line $\operatorname{span}((1,1))$. The gold residual is perpendicular to the green projection direction.

Online diagram: #/lesson/la-projection?view=visual

### Guided experiment

1. **Target on the line** Set $a=1$.

Preset observation: The projection equals the target and the residual is zero.

2. **Cancellation** Set $a=-1$.

Preset observation: The target is perpendicular to the line, so its projection is zero.

3. **In the opposite direction** Set $a=-2$.

Preset observation: The coefficient is negative; the nearest point lies along the line's negative direction.

### Worked examples

#### Example 1: Project onto an oblique line

Project $b=(3,1)$ onto $u=(1,1)$.

- The coefficient is $(3+1)/(1+1)=2$.
- $p=(2,2),r=(1,-1)$; the two vectors are perpendicular.

**Answer: Projection $(2,2)$, distance $\sqrt2$.**

#### Example 2: A negative projection

Project $(-3,2)$ onto the horizontal axis.

- With $u=(1,0)$, the coefficient is $-3$.
- The projection is on the negative horizontal axis; the residual is $(0,2)$.

**Answer: $(-3,0)$.**

### Common mistakes

- **Multiply length by cosine and the vector projection is complete.** A scalar component differs from a vector projection, which includes direction.

- **Projection matrices are always invertible.** Projection onto a proper subspace loses perpendicular directions and is generally singular.

### Exercises and solutions

**1. Find the distance from $(2,5)$ to the horizontal axis.**

Hint: The residual is its vertical component.

Answer: 5

- The projection is $(2,0)$ and residual length is five.

**2. Project $(1,1)$ onto the span of $(1,-1)$.**

Hint: Calculate the dot product first.

Answer: The zero vector.

- A zero dot product gives zero projection.

**3. Does projecting an orthogonal projection again change it?**

Hint: It already lies in the subspace.

Answer: Unchanged.

- $P^2b=Pb$.

**4. If $Q$ has orthogonal but unnormalized columns, can $QQ^T$ project directly?**

Hint: Divide each directional contribution by its squared length too.

Answer: No.

- For example, with $Q=(2,0)^T$, $QQ^T$ multiplies the horizontal component by four.

Prerequisites: Inner products, lengths, and angles, Vector spaces and subspaces.

## 7.3 Orthogonal complements and decompositions

*Split uniquely into perpendicular parts*

### The idea

The orthogonal complement contains vectors perpendicular to every vector in a subspace.

### Intuition

A subspace and its orthogonal complement uniquely generate the whole Euclidean space, without duplicating any nonzero direction.

### Another explanation

The orthogonal complement retains directions with no component along the original subspace; it is not all remaining points.

### Quick check

An orthogonal complement must be perpendicular to which subspace vectors?

A. Any one nonzero vector
B. Every vector
C. Only the longest vector

Answer: B. A generating set suffices to test every direction, but an arbitrary smaller selection may not.

### Is perpendicularity to a few vectors enough?

Yes if those vectors span the subspace; otherwise constraints may be missing.

### How do dimensions pair up?

In $\mathbb R^n$, $\dim W+\dim W^\perp=n$ and $W\cap W^\perp=\{0\}$.

### How do you calculate it?

Write generators as rows and solve the homogeneous system. The decomposition components are the projection and residual.

### Definition and conditions

Orthogonal complements and decompositions

$$
W^\perp=\{z:z^Tw=0\ \forall w\in W\},\quad \mathbb R^n=W\oplus W^\perp
$$

- Use finite-dimensional real Euclidean spaces. A direct sum means unique representation, not just a union of sets.

### Derivation

Choose an orthonormal basis of the subspace.

$$
Q=[q_1,\ldots,q_r]
$$

Projection and residual give existence.

$$
b=QQ^Tb+(I-QQ^T)b
$$

Subtract two decompositions; the intersection contains only zero.

$$
w=z\in W\cap W^\perp\Rightarrow\|w\|^2=0
$$

### Interactive diagram

How can one vector split uniquely into parts along a line and perpendicular to it?

Use coefficients along perpendicular $(1,1)$ and $(1,-1)$ to construct an input. The parts are unique.

Online diagram: #/lesson/la-orthogonal-complements?view=visual

### Guided experiment

1. **Along the original line only** Set $a=1,b=0$.

Preset observation: The vector belongs entirely to the original line.

2. **Add a perpendicular residual** Set $a=1,b=1$.

Preset observation: The parts sum to $(2,0)$; each has squared length two.

3. **Only the orthogonal complement** Set $a=0,b=1$.

Preset observation: Its projection onto the original line is zero.

### Worked examples

#### Example 1: Complement of a planar line

Find the orthogonal complement of $W=\operatorname{span}((1,1))$.

- Require $x+y=0$.
- It is generated by $(1,-1)$.

**Answer: $W^\perp=\operatorname{span}((1,-1))$.**

#### Example 2: Complement of a spatial plane

Find the orthogonal complement of $W=\{(x,y,z):x+2y+3z=0\}$.

- Every vector in the plane is perpendicular to $(1,2,3)$.
- The plane has dimension two and its complement dimension one.

**Answer: $\operatorname{span}((1,2,3))$.**

### Common mistakes

- **The orthogonal complement is everything outside the subspace.** It is another subspace satisfying all perpendicularity constraints, not a set difference.

- **Any complementary subspaces are orthogonal.** A direct sum need not be orthogonal.

### Exercises and solutions

**1. What is $\{0\}^\perp$?**

Hint: Every vector has zero dot product with zero.

Answer: $\mathbb R^n$.

- All of $\mathbb R^n$.

**2. Find the orthogonal complement of $\mathbb R^n$.**

Hint: Such a vector must be perpendicular to itself too.

Answer: The zero subspace.

- Only zero qualifies.

**3. What complement dimension does a three-dimensional subspace of $\mathbb R^5$ have?**

Hint: Add dimensions to the ambient dimension.

Answer: 2

- $5-3=2$.

**4. What is $(W^\perp)^\perp$?**

Hint: Check inclusion, then compare dimensions.

Answer: $W$.

- It contains $W$, and their dimensions agree.

Prerequisites: Vector projection and nearest points, The four fundamental subspaces.

## 7.4 Gram-Schmidt orthogonalization

*Subtract projections, then normalize*

### The idea

Orthogonalization removes projections onto known directions, retaining each new independent part.

### Intuition

For each new vector, remove its old-direction components. The remainder is the direction it genuinely adds.

### Another explanation

Orthogonalization keeps new information and removes repeated directions. It cannot create missing directions.

### Quick check

What does a zero orthogonalization residual mean?

A. The new vector is already in the previous span
B. It is already a unit vector
C. Divide zero by zero

Answer: A. Without a new independent direction, there is no remainder to normalize.

### What happens at each step?

Calculate $r_j=a_j-\sum_{i<j}(q_i^Ta_j)q_i$, then divide by $\|r_j\|$. Use previously normalized directions each time.

### What if the remainder is zero?

This input adds no direction. The independent-column construction fails and cannot divide by zero; skip dependent columns and choose a basis instead.

### Does the span change?

Only old directions are subtracted, so every prefix span stays unchanged. Floating-point implementations often use modified Gram-Schmidt or Householder transformations for stability.

### Definition and conditions

Gram-Schmidt orthogonalization

$$
r_j=a_j-\sum_{i<j}(q_i^Ta_j)q_i,\qquad q_j=\frac{r_j}{\|r_j\|}
$$

- The version without skipping requires independent input vectors. A zero remainder cannot be normalized. The visual uses finite precision.

### Derivation

Take the dot product with any earlier direction.

$$
q_k^Tr_j=q_k^Ta_j-\sum_{i<j}(q_i^Ta_j)q_k^Tq_i
$$

Orthonormality leaves only the matching-index term.

$$
q_k^Tr_j=0\quad(k<j)
$$

Normalizing changes only length.

$$
\|q_j\|=1,\quad\operatorname{span}(a_1,\ldots,a_j)=\operatorname{span}(q_1,\ldots,q_j)
$$

### Interactive diagram

When does subtracting the second vector's projection leave zero?

The columns are $(1,0),(1,c)$. Switch between original columns, subtracting projections, and normalization to see dependent columns produce zero residuals.

Online diagram: #/lesson/la-gram-schmidt?view=visual

### Guided experiment

1. **Original columns** Set $c=1$ and select original columns.

Preset observation: Column two has a horizontal component.

2. **Subtract the projection** Select subtraction of the projection.

Preset observation: The remainder is $(0,1)$, perpendicular to the first direction.

3. **Dependent columns** Set $c=0$ and select normalization.

Preset observation: The residual is zero, so this column-by-column construction cannot normalize it. A general QR factorization may still exist.

### Worked examples

#### Example 1: Orthogonalize two oblique directions

$a_1=(1,1),a_2=(1,0)$.

- $q_1=(1,1)/\sqrt2$.
- $r_2=(1,0)-(1/2,1/2)=(1/2,-1/2)$, with length $1/\sqrt2$.

**Answer: $q_2=(1,-1)/\sqrt2$.**

#### Example 2: Detect a dependent column

$a_1=(1,0),a_2=(2,0)$.

- $q_1=(1,0)$.
- $r_2=a_2-2q_1=0$, which cannot be normalized.

**Answer: Column two is redundant and should be skipped.**

### Common mistakes

- **Normalizing all original vectors at the end makes them orthogonal.** Normalization preserves angles; subtracting projections creates perpendicularity first.

- **A zero residual means the whole space has no basis.** It only reveals redundancy in this list.

### Exercises and solutions

**1. Normalize $(3,4)$.**

Hint: Divide by its length.

Answer: $(3/5,4/5)$.

- Its length is five, giving $(3/5,4/5)$.

**2. Given $q_1=(1,0),a_2=(2,3)$, find the remainder.**

Hint: Subtract the horizontal projection.

Answer: $(0,3)$.

- $(2,3)-(2,0)=(0,3)$.

**3. Can reordering inputs change the orthonormal basis?**

Hint: The first direction is preserved first.

Answer: It may change.

- Generally yes, while the final span remains the same.

**4. Do three independent spatial vectors stay independent after orthogonalization?**

Hint: Use the relationship among nonzero orthogonal vectors.

Answer: Still independent.

- Dot a zero combination with each unit vector; every coefficient vanishes.

Prerequisites: Vector projection and nearest points, Bases and unique representation.

## 7.5 QR factorization

*Orthogonal directions and triangular coefficients*

### The idea

QR expresses matrix columns using orthonormal directions and their combination coefficients.

### Intuition

Orthogonalization chooses directions; the triangular matrix records which directions each column uses.

### Another explanation

QR uses orthogonal directions that preserve lengths and leaves an upper-triangular system ready for back substitution.

### Quick check

A rectangular $Q$ satisfies $Q^TQ=I$. What is $QQ^T$ generally?

A. The identity on the whole space
B. Orthogonal projection onto the column space
C. The zero matrix

Answer: B. It preserves the column space and removes its orthogonal complement.

### What is thin QR?

A full-column-rank $m\times n$ matrix with $m\ge n$ has $A=QR$, where $Q^TQ=I_n$ and $R$ is invertible upper triangular.

### How are coefficients obtained?

$R=Q^TA$. Original column $j$ uses no future directions before step $j$, making the lower triangle zero.

### Can a rectangular $Q$ have an inverse?

$Q^TQ=I$ does not imply $QQ^T=I$; the latter is projection onto the column space. Only square orthogonal matrices satisfy $Q^{-1}=Q^T$.

### Definition and conditions

QR factorization

$$
A=QR,\quad Q^TQ=I,\quad R=Q^TA
$$

- The invertible triangular factor in thin QR requires full column rank. A positive diagonal makes the factorization unique. Dependent columns can admit general QR, but this construction cannot normalize zero residuals.

### Derivation

The first original column uses only the first direction.

$$
a_1=r_{11}q_1
$$

Later columns use only current and earlier directions.

$$
a_j=\sum_{i\le j}r_{ij}q_i
$$

Place the column equalities side by side.

$$
[a_1\ \cdots\ a_n]=Q R
$$

### Interactive diagram

How do orthogonalization coefficients form an upper-triangular matrix?

The columns are $(1,0),(1,c)$. Switch between original columns, subtracting projections, and normalization to see dependent columns produce zero residuals.

Online diagram: #/lesson/la-qr?view=visual

### Guided experiment

1. **Original columns** Set $c=1$ and select original columns.

Preset observation: Column two has a horizontal component.

2. **Subtract the projection** Select subtraction of the projection.

Preset observation: The remainder is $(0,1)$, perpendicular to the first direction.

3. **Dependent columns** Set $c=0$ and select normalization.

Preset observation: The residual is zero, so this column-by-column construction cannot normalize it. A general QR factorization may still exist.

### Worked examples

#### Example 1: Write orthogonalization as a factorization

Find a thin QR of $A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$.

- $Q=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.
- $Q^TA=\begin{pmatrix}\sqrt2&1/\sqrt2\\0&1/\sqrt2\end{pmatrix}$; multiply to recover the original.

**Answer: $A=QR$.**

#### Example 2: Already orthogonal columns

Find a thin QR of $A=\begin{pmatrix}2&0\\0&3\\0&0\end{pmatrix}$.

- Normalizing columns gives $Q=(e_1,e_2)$.
- $R=\operatorname{diag}(2,3)$.

**Answer: $QQ^T=\operatorname{diag}(1,1,0)$, not the three-by-three identity.**

### Common mistakes

- **Orthogonal columns of $Q$ allow $Q^{-1}$ everywhere.** A rectangular $Q$ has no two-sided inverse as defined here.

- **QR changes only signs, not the directional basis.** It rewrites general column directions in an orthogonal basis.

### Exercises and solutions

**1. If thin $Q$ is $5\times3$, what size is $R$?**

Hint: The product must recover five rows and three columns.

Answer: $3\times3$.

- $R$ is $3\times3$.

**2. If $Q^TQ=I$, how are $\|Qx\|$ and $\|x\|$ related?**

Hint: Expand the squared norms.

Answer: Equal.

- $\|Qx\|^2=x^TQ^TQx=x^Tx$.

**3. Why is $R$ upper triangular in QR?**

Hint: The construction of column $j$ has not used future directions.

Answer: Coefficients for future directions are zero.

- $a_j$ lies only in the span of $q_1,\ldots,q_j$.

**4. Without full column rank, can thin QR's $R$ remain invertible?**

Hint: Invertible $R$ would make every column independent.

Answer: No.

- Rank deficiency forces the triangular factor to lose full rank.

Prerequisites: Gram-Schmidt orthogonalization, Matrices, transposes, and multiplication.

## 7.6 Least squares and normal equations

*Find the nearest reachable output*

### The idea

When an exact system has no solution, least squares minimizes squared residual length.

### Intuition

Project the unreachable right-hand side onto the column space, then find an input producing that nearest output.

### Another explanation

An inconsistent exact system can still have a meaningful best fit. Find the nearest reachable output, then ask whether its generating input is unique.

### Quick check

Is the optimal least-squares output unique?

A. Always unique
B. Unique only for square matrices
C. Never unique

Answer: A. Orthogonal projection is unique; input uniqueness additionally depends on the kernel.

### Where do normal equations come from?

The optimal residual $r=b-A\hat x$ is perpendicular to every column, giving $A^T(A\hat x-b)=0$.

### Is the solution unique?

Optimal output $A\hat x$ is always unique. The optimal input is unique exactly for full column rank. With dependent columns, adding kernel vectors leaves the error unchanged.

### How should it be calculated?

With full column rank, use QR and solve $R\hat x=Q^Tb$. Forming $A^TA$ directly can amplify conditioning problems and is not always the best numerical method.

### Definition and conditions

Least squares and normal equations

$$
\hat x\in\arg\min_x\|Ax-b\|^2\iff A^TA\hat x=A^Tb
$$

- Use the finite-dimensional real Euclidean norm. Writing $(A^TA)^{-1}$ additionally requires full column rank.

### Derivation

The optimal remainder is perpendicular to the column space.

$$
A^T(b-A\hat x)=0
$$

Every other input adds a nonnegative squared-error term.

$$
\|b-Ax\|^2=\|b-A\hat x\|^2+\|A(x-\hat x)\|^2
$$

Full column rank makes the input unique too.

$$
A(x-\hat x)=0\Rightarrow x=\hat x\quad\text{if }\ker A=0
$$

### Interactive diagram

Where is the residual sum of squares minimized as the line changes?

Fit the three points $(0,1),(1,2),(2,2)$ using $y=ax+b$. The vertical segments show individual residuals.

Online diagram: #/lesson/la-least-squares?view=visual

### Guided experiment

1. **Constant fit** Set $a=0,b=1$.

Preset observation: The residual sum of squares is two.

2. **An overly steep line** Set $a=1,b=1$.

Preset observation: The residual sum of squares is one.

3. **The best-fit line** Set $a=1/2,b=7/6$.

Preset observation: The residual sum of squares drops to $1/6$, but remains nonzero.

### Worked examples

#### Example 1: Fit a line

Fit $(0,1),(1,2),(2,2)$ using $y=\beta_0+\beta_1x$.

- $A=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$; the normal equations are $\begin{pmatrix}3&3\\3&5\end{pmatrix}\binom{\beta_0}{\beta_1}=\binom56$.
- Solving gives $\beta_1=1/2,\beta_0=7/6$.
- The residual is $(-1/6,1/3,-1/6)$ and its squared norm is $1/6$.

**Answer: $\hat y=7/6+x/2$.**

#### Example 2: Nonunique optimal inputs

Minimize $(x+y-1)^2$.

- Every input with $x+y=1$ gives zero error.
- For example, both $(1,0)$ and $(0,1)$ are optimal.

**Answer: The unique output is one; inputs are not unique.**

### Common mistakes

- **Least squares always makes every residual zero.** Zero residual is possible only when the right-hand side lies in the column space.

- **Normal equations can always be solved by an inverse.** Dependent columns make their coefficient matrix singular.

### Exercises and solutions

**1. What constant best fits 1, 2, and 3?**

Hint: Project onto the all-ones direction.

Answer: 2

- $c=(1+2+3)/3=2$.

**2. How does the optimal residual relate to the columns of $A$?**

Hint: Use the normal equations.

Answer: Perpendicular to every column.

- $A^Tr=0$.

**3. If $b\in\operatorname{col}A$, what is the minimum error?**

Hint: An exact solution exists.

Answer: 0

- Choose zero residual.

**4. Does adding a kernel vector to an optimal input change the error?**

Hint: Its matrix image stays unchanged.

Answer: Unchanged.

- $A(\hat x+z)=A\hat x$.

Prerequisites: QR factorization, Column space and row space.

## Chapter review

Try independently before reading the solutions.

**1. Project $(4,0)$ onto $(1,2)$.**

Hint: Divide the dot product by the direction's squared length.

Answer: $(4/5,8/5)$.

- The coefficient is $4/5$; the projection is $(4/5,8/5)$.

**2. Orthogonalize $(1,0,1),(1,1,0)$ and give the second residual before normalization.**

Hint: The first direction's squared length is two.

Answer: $(1/2,1,-1/2)$.

- Projection coefficient $1/2$ gives residual $(1/2,1,-1/2)$.

**3. Fit a horizontal line to 2, 2, and 5. Find the best constant and residual sum of squares.**

Hint: The best constant is the mean.

Answer: Best constant three; squared sum six.

- Mean three gives residual $(-1,-1,2)$ and squared sum six.

# Chapter 8 · Symmetric matrices and quadratic forms

Every real symmetric matrix has an orthonormal eigenbasis, separating a quadratic form into independent squared terms.

Goals:
- Apply the spectral theorem
- Test definiteness and degeneracy
- Complete squares and find constrained extrema

## 8.1 Real symmetric matrices and the spectral theorem

*Symmetry guarantees an orthonormal eigenbasis*

### The idea

Every real symmetric matrix is diagonalizable in an orthonormal eigenbasis.

### Intuition

Orthogonal coordinates separate its directional actions without oblique axes, and every eigenvalue is real.

### Another explanation

Symmetry gives independent, perpendicular eigendirections, separating calculations without distorting length.

### Quick check

What property must a real orthogonally diagonalizable matrix have?

A. Symmetry
B. Every entry positive
C. Invertibility

Answer: A. Orthogonal conjugation of a real diagonal matrix is symmetric.

### Why are eigenvalues real?

Temporarily allowing complex eigenvectors, $v^*Av$ is real for a real symmetric matrix and equals $\lambda v^*v$.

### Why are distinct eigenspaces perpendicular?

Symmetry gives $u^TAv=(Au)^Tv$. Extract the eigenvalues on both sides to show distinct eigenspaces are perpendicular.

### What about repeated roots?

Choose an orthonormal basis in each eigenspace. The spectral theorem guarantees these spaces cover all dimensions; the appendix outlines a proof.

### Definition and conditions

Real symmetric matrices and the spectral theorem

$$
A=A^T\Rightarrow A=Q\Lambda Q^T,\quad Q^TQ=I,\quad \Lambda\text{ real diagonal}
$$

- Require a real symmetric square matrix. General real matrices do not satisfy this theorem. Over the complex numbers, the analogous hypothesis is Hermitian symmetry.

### Derivation

Use symmetry to compare two inner products.

$$
\lambda_u u^Tv=(Au)^Tv=u^TAv=\lambda_v u^Tv
$$

Different eigenvalues force orthogonality.

$$
(\lambda_u-\lambda_v)u^Tv=0
$$

Choose a complete orthonormal eigenvector list.

$$
AQ=Q\Lambda\Rightarrow A=Q\Lambda Q^T
$$

### Interactive diagram

Why can the eigendirections of a symmetric matrix be chosen perpendicular?

$A=\begin{pmatrix}2&c\\c&2\end{pmatrix}$. Blue is the unit input; gold is its output. They are collinear on eigendirections.

Online diagram: #/lesson/la-spectral?view=visual

### Guided experiment

1. **First eigendirection** Set $c=1,\theta=\pi/4$.

Preset observation: Output length is three in the same direction, giving eigenvalue three.

2. **Second eigendirection** Set $c=1,\theta=3\pi/4$.

Preset observation: Output length is one, giving eigenvalue one; the directions are perpendicular.

3. **Repeated eigenvalue without missing directions** Set $c=0$.

Preset observation: The matrix is $2I$; every nonzero direction is an eigendirection.

### Worked examples

#### Example 1: An orthonormal spectral decomposition

$A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$.

- Unit eigenvectors are $(1,1)/\sqrt2,(1,-1)/\sqrt2$.
- Their eigenvalues are $3,1$. Put the vectors in $Q$ to obtain $Q^{-1}=Q^T$.

**Answer: $A=Q\operatorname{diag}(3,1)Q^T$.**

#### Example 2: Diagonalizable need not mean orthogonally diagonalizable

Can $J=\begin{pmatrix}1&1\\0&2\end{pmatrix}$ be diagonalized by a real orthogonal matrix?

- A representation $QDQ^T$ would equal its own transpose.
- $J\ne J^T$.

**Answer: No. Ordinary diagonalization exists, but real orthogonal diagonalization does not.**

### Common mistakes

- **Every real matrix has a real orthonormal eigenbasis.** Symmetry is needed for this guarantee.

- **Any eigenvectors for the same repeated eigenvalue are perpendicular.** They can be orthogonalized within that space; arbitrary choices need not be perpendicular.

### Exercises and solutions

**1. Is $\operatorname{diag}(2,-1)$ symmetric?**

Hint: Check its transpose.

Answer: Yes.

- A diagonal matrix equals its transpose.

**2. Can a real symmetric matrix have nonreal eigenvalues?**

Hint: Apply the spectral theorem.

Answer: No.

- All eigenvalues are real.

**3. Why does changing to an orthonormal basis preserve length?**

Hint: The transpose of $Q$ is its inverse.

Answer: Inner products and lengths are preserved.

- $\|Qx\|^2=x^TQ^TQx=\|x\|^2$.

**4. Given $A=QDQ^T$, find $A^T$.**

Hint: Transposition reverses products, and $D$ is symmetric.

Answer: $A$.

- $A^T=QD^TQ^T=QDQ^T=A$.

Prerequisites: Diagonalization and similar matrices, Inner products, lengths, and angles.

## 8.2 Quadratic forms and principal axes

*Rotate to remove cross terms*

### The idea

A real symmetric quadratic form becomes a signed sum of squares in an orthonormal basis.

### Intuition

Cross terms indicate that coordinates are not aligned with principal axes. Eigenvector coordinates separate each direction's curvature.

### Another explanation

Eigenvalue signs describe directional square variation more reliably than individual entry signs.

### Quick check

For cross term $6xy$, what are the two symmetric off-diagonal entries?

A. 6
B. 3
C. 12

Answer: B. Both symmetric positions contribute the same cross product.

### How do cross terms enter the matrix?

$ax^2+2bxy+cy^2$ corresponds to $\begin{pmatrix}a&b\\b&c\end{pmatrix}$. The antisymmetric part does not affect $x^TAx$, so take the symmetric part first.

### How do you find principal axes?

Use the symmetric spectral decomposition and set old coordinates equal to the orthogonal matrix times new coordinates. Each eigenvalue multiplies one squared coordinate.

### How do you read the shape?

Positive coefficients give a bowl; mixed signs give a saddle; zero gives a flat direction. Level sets also depend on the right-hand side's sign.

### Definition and conditions

Quadratic forms and principal axes

$$
q(x)=x^TAx=y^T\Lambda y=\sum_i\lambda_i y_i^2,\qquad x=Qy
$$

- Principal axes require real symmetric matrices and orthogonal coordinate changes. General similarity cannot replace the congruence transformation of a quadratic form.

### Derivation

Substitute the spectral decomposition.

$$
x^TAx=x^TQ\Lambda Q^Tx
$$

Introduce orthogonal coordinates.

$$
y=Q^Tx
$$

A diagonal matrix creates no cross terms.

$$
y^T\Lambda y=\sum_i\lambda_i y_i^2
$$

### Interactive diagram

How does the surface change from a bowl to a saddle when one coefficient becomes negative?

Quadratic form $q=x^2+cy^2$: the gold point lies on the unit circle, and its vertical height gives the form's directional value.

Online diagram: #/lesson/la-quadratic-forms?view=visual

### Guided experiment

1. **Positive definite** Set $c=1,\theta=\pi/2$.

Preset observation: The value is one everywhere on the unit circle.

2. **Positive semidefinite** Set $c=0,\theta=\pi/2$.

Preset observation: Nonzero vertical inputs give zero, so strict positive definiteness fails.

3. **A negative direction** Set $c=-1,\theta=\pi/2$.

Preset observation: Vertical inputs give minus one and horizontal inputs plus one: the form is indefinite.

### Worked examples

#### Example 1: A bowl with cross terms

Put $q=2x^2+2xy+2y^2$ into principal-axis form.

- Its matrix is $\begin{pmatrix}2&1\\1&2\end{pmatrix}$.
- Set $u=(x+y)/\sqrt2,v=(x-y)/\sqrt2$.

**Answer: $q=3u^2+v^2$.**

#### Example 2: A saddle

What signs does $q=x^2-y^2$ take near the origin?

- On the horizontal axis, $q=x^2>0$.
- On the vertical axis, $q=-y^2<0$.

**Answer: Both signs occur, so the form is indefinite.**

### Common mistakes

- **Both off-diagonal entries for $2bxy$ are $2b$.** Both symmetric positions contribute, so each entry must be $b$.

- **Every quadratic-form basis change uses similarity.** The general transformation is $S^TAS$; it matches similarity only for orthogonal changes.

### Exercises and solutions

**1. Find the symmetric matrix for $3x^2+4xy+5y^2$.**

Hint: Split the cross coefficient equally.

Answer: $\begin{pmatrix}3&2\\2&5\end{pmatrix}$.

- Each off-diagonal entry is $2$.

**2. Which direction is flat for $x^2+0y^2$?**

Hint: Look for the missing square.

Answer: The vertical axis.

- The function is zero along the vertical axis.

**3. Are $x^TAx$ and $x^T(A+A^T)x/2$ equal?**

Hint: Transposing a scalar leaves it unchanged.

Answer: Equal.

- $x^TA^Tx=(x^TAx)^T=x^TAx$.

**4. Find the minimum of $q=4u^2+v^2$ on the unit circle.**

Hint: The two squared coordinates sum to one.

Answer: 1

- $q=1+3u^2\ge1$, attained at $u=0$.

Prerequisites: Real symmetric matrices and the spectral theorem.

## 8.3 Positive definite and semidefinite matrices

*Positive in every nonzero direction*

### The idea

Positive definiteness requires a strictly positive quadratic form for every nonzero input.

### Intuition

Even a matrix with all positive entries may have a negative direction. Test vectors, rather than individual entries.

### Another explanation

Positive definiteness controls every direction. Individual entries or the determinant alone can miss negative directions.

### Quick check

On which inputs does positive definiteness require positive values?

A. All inputs, including zero
B. All nonzero inputs
C. Only standard basis vectors

Answer: B. Zero always gives zero. Testing only coordinate axes can miss oblique directions.

### What is the eigenvalue test?

A real symmetric matrix is positive definite exactly when every eigenvalue is positive. Semidefiniteness allows zero; a negative eigenvalue gives a negative direction.

### Is the determinant alone enough?

No. It only gives the product of eigenvalues. Sylvester's criterion says a symmetric matrix is positive definite exactly when all leading principal minors are positive.

### Can you test semidefiniteness with nonnegative leading minors?

Not generally. Nonnegativity of all principal minors works, but checking only the upper-left leading minors is insufficient.

### Definition and conditions

Positive definite and semidefinite matrices

$$
A=A^T:\quad A\succ0\iff x^TAx>0\ (x\ne0)\iff\lambda_i>0\ \forall i
$$

- These tests assume symmetry; positive definite here means real symmetric positive definite. Leading principal minors are determinants of successive upper-left submatrices.

### Derivation

Change to orthonormal eigenvector coordinates.

$$
x^TAx=\sum_i\lambda_i y_i^2
$$

Positive eigenvalues make every nonzero directional value positive.

$$
\lambda_i>0\Rightarrow x^TAx\ge\lambda_{\min}\|x\|^2>0
$$

Conversely, test each eigendirection.

$$
q(v_i)=\lambda_i\|v_i\|^2>0\Rightarrow\lambda_i>0
$$

### Interactive diagram

Where does strict positivity fail when the smallest eigenvalue reaches zero?

Quadratic form $q=x^2+cy^2$: the gold point lies on the unit circle, and its vertical height gives the form's directional value.

Online diagram: #/lesson/la-positive-definite?view=visual

### Guided experiment

1. **Positive definite** Set $c=1,\theta=\pi/2$.

Preset observation: The value is one everywhere on the unit circle.

2. **Positive semidefinite** Set $c=0,\theta=\pi/2$.

Preset observation: Nonzero vertical inputs give zero, so strict positive definiteness fails.

3. **A negative direction** Set $c=-1,\theta=\pi/2$.

Preset observation: Vertical inputs give minus one and horizontal inputs plus one: the form is indefinite.

### Worked examples

#### Example 1: Leading minors in two dimensions

Is $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ positive definite?

- Its first leading minor is $2>0$.
- Its determinant is $3>0$.

**Answer: Positive definite.**

#### Example 2: A positive determinant is insufficient

Is $A=-I_2$ positive definite?

- Its determinant is one.
- Every nonzero input instead gives $x^TAx=-\|x\|^2<0$.

**Answer: Negative definite, not positive definite.**

### Common mistakes

- **Positive determinant implies positive definite.** Two negative eigenvalues can have positive product.

- **Positive semidefinite matrices are invertible like positive definite matrices.** Semidefinite matrices may have zero eigenvalues and be singular.

### Exercises and solutions

**1. Classify $\operatorname{diag}(1,0)$.**

Hint: Inspect the sum of squares.

Answer: Positive semidefinite, but not positive definite.

- $q=x^2\ge0$, but nonzero vertical inputs give zero.

**2. Is $\begin{pmatrix}1&2\\2&1\end{pmatrix}$ positive definite?**

Hint: Test opposite coordinate signs.

Answer: No; indefinite.

- At $(1,-1)$, the value is $1-4+1=-2$.

**3. Is a positive definite matrix invertible?**

Hint: Every eigenvalue is strictly positive.

Answer: Invertible.

- Zero is not an eigenvalue.

**4. All leading minors of $A=\operatorname{diag}(0,-1)$ are zero. Is it positive semidefinite?**

Hint: Test the vertical axis.

Answer: No; nonnegative leading minors are insufficient.

- $q(0,1)=-1$.

Prerequisites: Quadratic forms and principal axes.

## 8.4 Cholesky factorization and completing squares

*Write a positive form as a sum of squares*

### The idea

A real symmetric positive definite matrix uniquely factors into a lower-triangular matrix with positive diagonal times its transpose.

### Intuition

Completing squares absorbs cross terms into new linear expressions while the remaining squared coefficients stay positive.

### Another explanation

Cholesky turns positivity in every direction into an explicit sum of squares and supplies two easy triangular solves.

### Quick check

Given $A=LL^T$, which squared length equals the quadratic form?

A. $\|Lx\|^2$
B. $\|L^Tx\|^2$
C. $\|x\|^2$

Answer: B. Expanding the squared length multiplies the transpose of $x$ by $L$, then by the transpose of $L$ and $x$.

### How does the calculation proceed?

Take the positive square root of the first diagonal entry, determine entries below it, subtract their contributions, and repeat on the remaining block.

### Why is positive definiteness essential?

It keeps each remaining pivot strictly positive, allowing a positive real square root. Semidefinite and indefinite cases cannot directly use this unpivoted version.

### How does the factorization solve systems?

Solve $Ly=b$, then $L^Tx=y$. The quadratic form becomes $\|L^Tx\|^2$, making positivity explicit.

### Definition and conditions

Cholesky factorization and completing squares

$$
A=LL^T,\quad L\text{ lower triangular with }l_{ii}>0,\qquad x^TAx=\|L^Tx\|^2
$$

- Require a real symmetric positive definite square matrix. Positive diagonal ensures uniqueness. Floating-point tests need care near degeneracy.

### Derivation

For a symmetric two-by-two matrix, take the first root.

$$
l_{11}=\sqrt{a_{11}},\quad l_{21}=a_{21}/l_{11}
$$

Subtract its contribution from the second diagonal entry.

$$
l_{22}=\sqrt{a_{22}-l_{21}^2}
$$

Positive definiteness keeps the radicand positive.

$$
a_{22}-\frac{a_{21}^2}{a_{11}}>0
$$

### Interactive diagram

Why does the completed-square matrix remain positive definite as the cross term changes?

$L=\begin{pmatrix}1&0\\c&1\end{pmatrix}$, $A=LL^T$. The unit circle deforms under $L^T$; squared lengths give the quadratic form of $A$.

Online diagram: #/lesson/la-cholesky?view=visual

### Guided experiment

1. **No cross term** Set $c=0$.

Preset observation: $A$ is the identity.

2. **Positive cross term** Set $c=1$.

Preset observation: $q=(x+y)^2+y^2$; every nonzero input gives a positive value.

3. **Negative cross term** Set $c=-1$.

Preset observation: $q=(x-y)^2+y^2$; positive definiteness remains.

### Worked examples

#### Example 1: A concrete factorization

$A=\begin{pmatrix}4&2\\2&3\end{pmatrix}$.

- $l_{11}=2,l_{21}=1$.
- $l_{22}=\sqrt{3-1}=\sqrt2$.

**Answer: $L=\begin{pmatrix}2&0\\1&\sqrt2\end{pmatrix}$.**

#### Example 2: Read it as a sum of squares

Complete squares in $4x^2+4xy+3y^2$.

- From the example, $L^T(x,y)=(2x+y,\sqrt2y)$.
- Its squared length gives $(2x+y)^2+2y^2$.

**Answer: $(2x+y)^2+2y^2$.**

### Common mistakes

- **$A=LL$ is Cholesky factorization.** The second factor is the transpose, not the same lower-triangular factor again.

- **Symmetry alone allows positive square roots throughout.** An indefinite matrix can produce a nonpositive pivot.

### Exercises and solutions

**1. Find the positive-diagonal Cholesky factor of $A=\operatorname{diag}(4,9)$.**

Hint: Take each positive square root.

Answer: $\operatorname{diag}(2,3)$.

- $L=\operatorname{diag}(2,3)$.

**2. $L=\begin{pmatrix}1&0\\2&1\end{pmatrix}$, $LL^T$?**

Hint: Multiply directly.

Answer: $\begin{pmatrix}1&2\\2&5\end{pmatrix}$.

- The result is $\begin{pmatrix}1&2\\2&5\end{pmatrix}$.

**3. Can $A=\operatorname{diag}(1,-1)$ have a real positive-diagonal Cholesky factor?**

Hint: Such a factor would make the form a squared length.

Answer: No.

- The vertical direction is negative, impossible for a real squared length.

**4. Why require positive diagonal rather than arbitrary square-root signs?**

Hint: Each positive square has two square roots.

Answer: A convention ensuring uniqueness.

- Positive roots remove sign ambiguity and make the factor unique.

Prerequisites: Positive definite and semidefinite matrices, LU factorization and repeated solves.

## 8.5 Rayleigh quotients and extrema on the unit sphere

*Compare directions at fixed length*

### The idea

A symmetric matrix's quadratic-form extrema on the unit sphere are its smallest and largest eigenvalues.

### Intuition

In eigenvector coordinates, squared components of a unit vector are nonnegative weights summing to one. The form is a weighted eigenvalue average.

### Another explanation

At fixed length, the form compares directions. Symmetric eigendirections give its exact extreme values.

### Quick check

Why does vector length not affect a Rayleigh quotient?

A. The denominator is ignored
B. Numerator and denominator scale by the same square factor
C. The matrix must be the identity

Answer: B. Numerator and denominator are both homogeneous quadratic expressions.

### Why divide by squared length?

The Rayleigh quotient $x^TAx/(x^Tx)$ is unaffected by nonzero overall scaling, so it compares directions alone.

### Where are extrema attained?

In the smallest or largest eigenspace. A repeated extreme eigenvalue permits more than one optimal direction.

### Does the same rule hold for nonsymmetric matrices?

A quadratic form uses only the symmetric part. General nonsymmetric eigenvalues are not these real extrema.

### Definition and conditions

Rayleigh quotients and extrema on the unit sphere

$$
\lambda_{\min}\le\frac{x^TAx}{x^Tx}\le\lambda_{\max}\quad(x\ne0)
$$

- $A$ must be real symmetric; the unit-sphere constraint uses Euclidean length.

### Derivation

Expand in orthogonal coordinates.

$$
x^TAx=\sum_i\lambda_i y_i^2,\quad x^Tx=\sum_i y_i^2
$$

Express the quotient as a weighted average.

$$
R(x)=\sum_i\lambda_i\frac{y_i^2}{\sum_jy_j^2}
$$

Every weight is nonnegative and they sum to one.

$$
\lambda_{\min}\le R(x)\le\lambda_{\max}
$$

### Interactive diagram

As input rotates on the unit circle, where does the form attain its bounds?

Quadratic form $q=x^2+cy^2$: the gold point lies on the unit circle, and its vertical height gives the form's directional value.

Online diagram: #/lesson/la-rayleigh?view=visual

### Guided experiment

1. **Positive definite** Set $c=1,\theta=\pi/2$.

Preset observation: The value is one everywhere on the unit circle.

2. **Positive semidefinite** Set $c=0,\theta=\pi/2$.

Preset observation: Nonzero vertical inputs give zero, so strict positive definiteness fails.

3. **A negative direction** Set $c=-1,\theta=\pi/2$.

Preset observation: Vertical inputs give minus one and horizontal inputs plus one: the form is indefinite.

### Worked examples

#### Example 1: A simple constrained quadratic form

Given $q=2x^2+5y^2$ and $x^2+y^2=1$, find the extrema.

- $q=2+3y^2$.
- Minimum two occurs at $y=0$; maximum five at $x=0$.

**Answer: Minimum 2, maximum 5.**

#### Example 2: An extremum with a cross term

Find the maximum of $q=2x^2+2xy+2y^2$ on the unit circle.

- Its eigenvalues are three and one.
- The maximizing direction is $(1,1)/\sqrt2$ or its negative.

**Answer: Maximum 3.**

### Common mistakes

- **Fixed eigenvalue bounds constrain the quadratic form for every input length.** For unnormalized inputs, multiply the bounds by squared length.

- **The maximizing direction is the coordinate axis with the largest entry.** Cross terms can tilt the optimal direction.

### Exercises and solutions

**1. Find the minimum Rayleigh quotient for $A=\operatorname{diag}(-2,4)$.**

Hint: Take the smallest eigenvalue.

Answer: $-2$

- It attains $-2$ along the horizontal axis.

**2. Compare $R(3x)$ with $R(x)$.**

Hint: Numerator and denominator both scale by nine.

Answer: Equal.

- Nonzero overall scaling cancels.

**3. If the smallest eigenvalue is zero and the rest positive, classify the form.**

Hint: All weighted terms are nonnegative, with zero in one direction.

Answer: Positive semidefinite.

- Positive semidefinite but not positive definite.

**4. Is the optimal direction of $A=2I$ unique?**

Hint: Every unit vector gives the same value.

Answer: Not unique.

- $R(x)=2$ for every nonzero input.

Prerequisites: Quadratic forms and principal axes.

## Chapter review

Try independently before reading the solutions.

**1. Find the eigenvalues of $A=\begin{pmatrix}3&1\\1&3\end{pmatrix}$ and test positive definiteness.**

Hint: Use diagonal and antidiagonal directions.

Answer: Positive definite.

- Eigenvalues four and two are both positive.

**2. Find a positive-diagonal Cholesky factor for $A=\begin{pmatrix}9&3\\3&2\end{pmatrix}$.**

Hint: Start with the first diagonal square root.

Answer: $L=\begin{pmatrix}3&0\\1&1\end{pmatrix}$.

- $l_{11}=3,l_{21}=1,l_{22}=1$.

**3. Find the extrema of $q=3x^2+2xy+3y^2$ on the unit circle.**

Hint: Matrix eigenvalues give the bounds.

Answer: Minimum two, maximum four.

- The matrix is $\begin{pmatrix}3&1\\1&3\end{pmatrix}$, with eigenvalues four and two.

# Chapter 9 · Singular value decomposition and numerical stability

SVD uses two orthogonal coordinate systems to describe general matrices, unifying rank, pseudoinverses, optimal low-rank approximation, and conditioning.

Goals:
- Distinguish eigenvalues from singular values
- Use SVD and pseudoinverses
- Understand low-rank errors and ill-conditioning

## 9.1 Singular values and length scaling

*Independent length scales of a general matrix*

### The idea

Singular values measure length scaling along special orthogonal input directions and are always nonnegative.

### Intuition

A general planar matrix maps a unit circle to an ellipse. Its semiaxis lengths are singular values; a collapsed semiaxis has length zero.

### Another explanation

Eigenvalues ask whether direction is preserved; singular values ask how much length changes. General matrices require separate answers.

### Quick check

What signs can singular values have?

A. Any real sign
B. Strictly positive only
C. Nonnegative, including zero

Answer: C. Collapse gives zero; reversing direction does not give negative length.

### How do you calculate an inverse?

$A^TA$ is symmetric positive semidefinite. Its nonnegative eigenvalue square roots are singular values, usually listed in decreasing order.

### Why do they describe length?

$\|Av\|^2=v^TA^TAv$. If $v$ is a unit eigenvector of $A^TA$, its output length is the square root of the eigenvalue.

### How do they differ from eigenvalues?

Eigenvalues require a square matrix and preserve a direction line. Singular values allow rectangular matrices and measure length scaling only. A negative eigenvalue reverses direction without producing a negative singular value.

### Definition and conditions

Singular values and length scaling

$$
\sigma_i=\sqrt{\lambda_i(A^TA)}\ge0,\quad\|A\|_2=\sigma_1
$$

- For real matrices, the number of nonzero singular values equals rank. A rectangular full diagonal factor has $\min(m,n)$ positions; extra input-kernel directions correspond to zero eigenvalues.

### Derivation

Write squared length as a quadratic form.

$$
\|Ax\|^2=x^TA^TAx
$$

The symmetric spectral theorem supplies orthogonal input directions.

$$
A^TAv_i=\sigma_i^2v_i
$$

Calculate output length for a unit input.

$$
\|Av_i\|^2=\sigma_i^2
$$

### Interactive diagram

How do the ellipse's semiaxes reflect length scaling?

$A=R_\theta\operatorname{diag}(2,s)$: scale the unit circle along two directions, then rotate. Semiaxis lengths are singular values.

Online diagram: #/lesson/la-singular-values?view=visual

### Guided experiment

1. **Two nonzero directions** Set $\theta=0,s=1$.

Preset observation: Semiaxes have lengths two and one; rank two.

2. **Change only output direction** Set $\theta=\pi/4,s=1$.

Preset observation: The semiaxes rotate without changing length.

3. **A zero singular value** Set $\theta=\pi/4,s=0$.

Preset observation: The ellipse collapses to a segment; rank one.

### Worked examples

#### Example 1: Signs do not carry into singular values

Find the singular values of $A=\operatorname{diag}(-3,2)$.

- $A^TA=\operatorname{diag}(9,4)$.
- Take nonnegative square roots and sort.

**Answer: 3, 2.**

#### Example 2: A rectangular matrix

Find the nonzero singular values and kernel of $A=\begin{pmatrix}2&0&0\\0&1&0\end{pmatrix}$.

- $A^TA=\operatorname{diag}(4,1,0)$.
- Nonzero singular values are $2,1$; the kernel is the third coordinate axis.

**Answer: Two nonzero singular values; one input direction is lost.**

### Common mistakes

- **Singular values are eigenvalues.** Generally not. Rectangular matrices do not even have ordinary eigenvalues.

- **Singular values can be negative.** They measure length scaling and are nonnegative by definition.

### Exercises and solutions

**1. Find the largest singular value of $A=\operatorname{diag}(4,-1)$.**

Hint: Square, then take the nonnegative root.

Answer: 4

- The result is $4,1$.

**2. What singular values does an orthogonal matrix have?**

Hint: Examine transpose times itself.

Answer: All one.

- $Q^TQ=I$, whose eigenvalues are all one.

**3. What does a zero singular value mean?**

Hint: Some input direction has zero output length.

Answer: A degenerate direction exists.

- A direction is collapsed, so the matrix lacks the corresponding full rank.

**4. Which maximum does $\|A\|_2$ represent?**

Hint: Restrict the input to unit length.

Answer: The largest output length for a unit input.

- $\max_{\|x\|=1}\|Ax\|=\sigma_1$.

Prerequisites: Real symmetric matrices and the spectral theorem, Rank-nullity, injectivity, and surjectivity.

## 9.2 Singular value decomposition

*Two orthogonal direction sets with scaling between them*

### The idea

Every real matrix factors into an orthogonal input transformation, nonnegative directional scaling, and an orthogonal output transformation.

### Intuition

Rotate into suitable input directions, stretch separately, then place them in output directions. Rectangular and singular matrices are included.

### Another explanation

SVD is more general than eigendecomposition because input and output directions need not agree. The middle factor contains only nonnegative scaling.

### Quick check

Which matrices admit an SVD?

A. Symmetric matrices only
B. Square invertible matrices only
C. Every finite-dimensional real matrix

Answer: C. Different orthonormal bases on each side allow different input and output dimensions.

### What are the full factor sizes?

If $A$ is $m\times n$, orthogonal $U$ has size $m\times m$ and $V$ size $n\times n$; $\Sigma$ is a nonnegative rectangular diagonal factor of size $m\times n$.

### How do nonzero directions correspond?

$Av_i=\sigma_i u_i$. Distinct right singular directions have orthogonal outputs. For zero singular values, do not divide by zero to construct $u_i$; complete an orthonormal output basis instead.

### What is compact SVD?

Retain just $r$ nonzero singular values to obtain $A=U_r\Sigma_rV_r^T$. Singular vectors can vary by signs or repeated-value choices, but singular values are unique.

### Definition and conditions

Singular value decomposition

$$
A=U\Sigma V^T=\sum_{i=1}^r\sigma_i u_i v_i^T
$$

- Every real matrix has an SVD. For complex matrices, replace transposes by conjugate transposes. Squareness and invertibility are unnecessary.

### Derivation

Choose an eigenbasis for the input-side symmetric product.

$$
A^TAv_i=\sigma_i^2v_i
$$

Positive singular values define unit output directions.

$$
u_i=Av_i/\sigma_i,\quad u_i^Tu_j=\delta_{ij}
$$

Zero directions map to zero; complete the bases to obtain matrix form.

$$
AV=U\Sigma\Rightarrow A=U\Sigma V^T
$$

### Interactive diagram

How do two orthogonal direction sets reduce a general matrix to independent scalings?

$A=R_\theta\operatorname{diag}(2,s)$: scale the unit circle along two directions, then rotate. Semiaxis lengths are singular values.

Online diagram: #/lesson/la-svd?view=visual

### Guided experiment

1. **Two nonzero directions** Set $\theta=0,s=1$.

Preset observation: Semiaxes have lengths two and one; rank two.

2. **Change only output direction** Set $\theta=\pi/4,s=1$.

Preset observation: The semiaxes rotate without changing length.

3. **A zero singular value** Set $\theta=\pi/4,s=0$.

Preset observation: The ellipse collapses to a segment; rank one.

### Worked examples

#### Example 1: A diagonal matrix with reversal

Find one SVD of $A=\operatorname{diag}(-3,1)$.

- Choose $V=I,\Sigma=\operatorname{diag}(3,1)$.
- Record reversal in $U=\operatorname{diag}(-1,1)$ and multiply the factors to recover the matrix.

**Answer: $A=U\Sigma V^T$.**

#### Example 2: A rank-one matrix

Find a compact SVD of $A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$.

- $v_1=(1,1)/\sqrt2,u_1=(1,0)$.
- $Av_1=(\sqrt2,0)$, so $\sigma_1=\sqrt2$.

**Answer: $A=\sqrt2(1,0)^T(1,1)/\sqrt2$.**

### Common mistakes

- **SVD and diagonalization both require enough eigenvectors.** Every matrix has SVD, which uses two direction sets.

- **A zero singular value requires dividing zero by zero to get a left vector.** Handle zero directions separately and complete an orthonormal basis.

### Exercises and solutions

**1. If $A$ is $4\times2$, what size is full $U$?**

Hint: It is a full orthonormal basis of the output space.

Answer: $4\times4$.

- $4\times4$.

**2. For rank $2$ and matrix size $5\times3$, what size is compact $\Sigma_r$?**

Hint: Retain only nonzero directions.

Answer: $2\times2$.

- $2\times2$.

**3. Does changing both corresponding singular-vector signs change $A$?**

Hint: The two negative signs cancel in the outer product.

Answer: No change.

- $(-u)(-v)^T=uv^T$.

**4. Which matrix acts first on the input in $A=U\Sigma V^T$?**

Hint: Read right to left.

Answer: $V^T$.

- $V^T$.

Prerequisites: Singular values and length scaling, Orthogonal complements and decompositions.

## 9.3 Pseudoinverses and minimum-norm solutions

*Add no undetermined kernel component*

### The idea

The pseudoinverse selects the shortest input among all least-squares solutions.

### Intuition

Lost directions cannot be recovered. The pseudoinverse restores the visible part and sets undetermined kernel components to zero.

### Another explanation

The pseudoinverse adopts a clear convention: among equally good fits, add no component invisible in the output.

### Quick check

What does the pseudoinverse do with a zero singular value?

A. Replace it by infinity
B. Keep it zero
C. Set it arbitrarily to one

Answer: B. Zero signals a direction that cannot be inverted, not a division by zero.

### How is it obtained from SVD?

Invert positive singular values, keep zeros zero, and swap the outer factors: $A^+=V_r\Sigma_r^{-1}U_r^T$.

### What does it solve?

$A^+b$ is the unique minimum-Euclidean-norm least-squares input. Even for unreachable right-hand sides, minimize residual first, then input length among equally good fits.

### Does it recover the original input?

$AA^+$ projects onto the output column space; $A^+A$ projects onto the input row space. Outputs cannot recover the original kernel component.

### Definition and conditions

Pseudoinverses and minimum-norm solutions

$$
A^+=V_r\Sigma_r^{-1}U_r^T,\quad x_{\min}=A^+b
$$

- Use the standard Euclidean norm and never invert zero singular values. Numerical pseudoinverses need small-value thresholds; the exact formula here treats only true zeros as zero.

### Derivation

Split error in orthogonal input and output coordinates.

$$
\|Ax-b\|^2=\|\Sigma V^Tx-U^Tb\|^2
$$

Solve each visible scaling equation.

$$
(V^Tx)_i=(u_i^Tb)/\sigma_i\quad(\sigma_i>0)
$$

Zero free kernel coordinates minimize input length.

$$
(V^Tx)_i=0\quad(i>r)
$$

### Interactive diagram

When a direction disappears completely, what does the pseudoinverse do with the undetermined input?

Compare $A=\operatorname{diag}(2,1)$ and $A=\operatorname{diag}(2,0)$, computing minimum-norm least-squares inputs for right-hand side $(1,b)$.

Online diagram: #/lesson/la-pseudoinverse?view=visual

### Guided experiment

1. **Invertible recovery** Choose the invertible matrix and set $b=1$.

Preset observation: The input is $(1/2,1)$, with zero residual.

2. **An unreachable singular right-hand side** Choose the singular matrix and keep $b=1$.

Preset observation: The minimum-norm input is $(1/2,0)$; residual length is one.

3. **Change the unreachable output component** Keep the singular matrix and set $b=2$.

Preset observation: The shortest input stays fixed; residual length becomes two.

### Worked examples

#### Example 1: A singular diagonal matrix

$A=\operatorname{diag}(2,0),b=(1,3)^T$.

- $A^+=\operatorname{diag}(1/2,0)$.
- The optimal input is $(1/2,0)$ with output $(1,0)$; it cannot fit the vertical component three.

**Answer: Residual length 3; minimum-norm input $(1/2,0)$.**

#### Example 2: Solvable but nonunique

Given $A=(1\ 1),b=2$, find the minimum-norm solution.

- All solutions are $(1+t,1-t)$.
- Squared length $2+2t^2$ is minimized at $t=0$.

**Answer: $(1,1)^T$.**

### Common mistakes

- **The pseudoinverse recovers all lost information.** Kernel components never enter the output and cannot be recovered.

- **The pseudoinverse takes each entry's reciprocal.** It operates on singular values while preserving the two direction sets.

### Exercises and solutions

**1. Find the pseudoinverse of $\operatorname{diag}(4,0)$.**

Hint: Invert nonzero singular scalings.

Answer: $\operatorname{diag}(1/4,0)$.

- $\operatorname{diag}(1/4,0)$.

**2. How does a square invertible matrix's pseudoinverse compare with its inverse?**

Hint: There are no zero singular values.

Answer: Equal.

- The SVD formula reduces to the ordinary inverse.

**3. Find the pseudoinverse of $A=0$.**

Hint: There are no visible directions.

Answer: The appropriately sized zero matrix.

- All singular values are zero; use a zero matrix with transposed dimensions.

**4. Do all least-squares solutions have equal length?**

Hint: Consider adding a kernel vector.

Answer: No; the pseudoinverse selects the shortest one.

- A nonzero kernel component can increase length without changing output.

Prerequisites: Singular value decomposition, Least squares and normal equations.

## 9.4 Truncated SVD and optimal low-rank approximation

*Preserve main variation with fewer directions*

### The idea

Keeping the largest singular values approximates a matrix with fewer directions and gives exact truncation errors.

### Intuition

Removing the weakest independent changes has a firmer global basis than arbitrarily deleting rows, columns, or small entries.

### Another explanation

Low-rank approximation gives a calculable tradeoff between storage or model complexity and error.

### Quick check

Which quantity gives the spectral error of a best rank-$k$ truncation?

A. The largest entry
B. Singular value number $k$+1
C. The trace

Answer: B. After retaining $k$ directions, the strongest omitted direction controls maximum residual amplification.

### How do you truncate?

$A_k=\sum_{i=1}^k\sigma_i u_i v_i^T$; if $k<r$, its rank is $k$.

### What determines the error?

Spectral-norm error is the next singular value; squared Frobenius error is the sum of discarded singular-value squares. This is Eckart-Young optimality. The Frobenius norm is the square root of the sum of all squared entries.

### Does optimal mean unique?

Not always. Repeated singular values at the truncation boundary allow equally good directional choices. Optimality concerns the stated norm and rank constraint, not every application objective.

### Definition and conditions

Truncated SVD and optimal low-rank approximation

$$
\min_{\operatorname{rank}B\le k}\|A-B\|_2=\sigma_{k+1},\quad\|A-A_k\|_F^2=\sum_{i>k}\sigma_i^2
$$

- Order singular values decreasingly. Assume $0\le k<r$; retaining at least the rank gives zero error. The derivation proves spectral optimality by dimension counting; the appendix covers Frobenius optimality.

### Derivation

The residual stays diagonal in singular coordinates.

$$
A-A_k=\sum_{i>k}\sigma_i u_i v_i^T
$$

A matrix $B$ of rank at most $k$ has a nonzero kernel vector among the first $k+1$ input directions.

$$
\exists x\in\operatorname{span}(v_1,\ldots,v_{k+1}),\quad\|x\|=1,\quad Bx=0
$$

Along that input, any approximation leaves at least the next singular value.

$$
\|(A-B)x\|=\|Ax\|\ge\sigma_{k+1}
$$

### Interactive diagram

How do ellipse shape and error change after discarding the smaller singular direction?

Original singular values are $2,s$. Switch the number retained and compare the original ellipse, approximate image, and spectral error.

Online diagram: #/lesson/la-low-rank?view=visual

### Guided experiment

1. **Discard one direction** Set $s=1$ and retain one direction.

Preset observation: The approximate image becomes a segment; spectral error is one.

2. **Retain everything** Set $s=1$ and retain two directions.

Preset observation: The original matrix is recovered exactly; error is zero.

3. **A weaker discarded direction** Set $s=0.2$ and retain one direction.

Preset observation: Spectral error is $0.2$.

### Worked examples

#### Example 1: Diagonal truncation

Find the best rank-one truncation of $A=\operatorname{diag}(5,2,1)$ and its errors.

- Retaining the largest singular direction gives $A_1=\operatorname{diag}(5,0,0)$.
- Spectral error is $2$; Frobenius error is $\sqrt{2^2+1^2}$.

**Answer: Errors are $2$ and $\sqrt5$ respectively.**

#### Example 2: How many directions should remain?

Singular values are $10,1,0.1$. To make spectral error at most $0.2$, how many directions are required?

- Retaining one leaves next value one, which is too large.
- Retaining two leaves next value $0.1$.

**Answer: At least two.**

### Common mistakes

- **Low-rank approximation deletes the smallest matrix entries.** Assess whole singular-direction contributions instead.

- **Retaining $k$ terms always gives a unique approximation.** Repeated singular values can make optimal directions nonunique.

### Exercises and solutions

**1. For singular values $4,3,2$, find rank-two spectral truncation error.**

Hint: Read the next value.

Answer: 2

- $\sigma_3=2$.

**2. For singular values $4,3,2$, find rank-one Frobenius truncation error.**

Hint: Take the square root of the discarded sum of squares.

Answer: $\sqrt{13}$.

- $\sqrt{3^2+2^2}=\sqrt{13}$.

**3. If a matrix already has rank one, does keeping two directions reduce its exact error further?**

Hint: Zero singular directions contribute nothing.

Answer: No.

- Keeping every nonzero direction already gives zero error.

**4. If the two largest singular values agree, is the best rank-one direction unique?**

Hint: Rotate inside their equal-scaling subspace.

Answer: Not necessarily.

- Different unit directions can attain equal error.

Prerequisites: Singular value decomposition.

## 9.5 Condition numbers and error amplification

*Invertibility does not guarantee numerical reliability*

### The idea

A condition number bounds how small data errors can amplify into relative solution errors in sensitive directions.

### Intuition

Recovering a severely compressed direction needs large reverse amplification. Exact invertibility does not guarantee reliable floating-point solves.

### Another explanation

Solution accuracy depends on both the computation and the problem itself. Conditioning indicates whether the data precision supports the requested answer precision.

### Quick check

Which matrix can have a tiny determinant but condition number one?

A. $\varepsilon I$
B. $\operatorname{diag}(1,\varepsilon)$
C. Every singular matrix

Answer: A. Uniform scaling preserves the ratio of directional scales.

### How is the two-norm condition number defined?

For an invertible square matrix, $\kappa_2(A)=\|A\|_2\|A^{-1}\|_2=\sigma_{\max}/\sigma_{\min}$. Singular matrices are usually assigned infinity.

### Does a small determinant mean ill-conditioning?

No. Uniform scaling can make a determinant tiny without changing conditioning. The relative scaling between directions matters.

### Is ill-conditioning the same as an unstable algorithm?

Ill-conditioning is sensitivity of the problem to data. Instability adds excessive computational error. A stable algorithm cannot recover precision absent from the input.

### Definition and conditions

Condition numbers and error amplification

$$
\frac{\|\delta x\|}{\|x\|}\le\kappa_2(A)\frac{\|\delta b\|}{\|b\|},\qquad A\delta x=\delta b
$$

- This bound perturbs only the right-hand side. Hold invertible $A$ fixed and assume $b$ nonzero. Perturbing matrix coefficients needs additional conditions and bounds.

### Derivation

Bound the solution perturbation.

$$
\|\delta x\|\le\|A^{-1}\|\|\delta b\|
$$

Bound the original right-hand side too.

$$
\|b\|\le\|A\|\|x\|
$$

Divide and combine the bounds.

$$
\frac{\|\delta x\|}{\|x\|}\le\|A\|\|A^{-1}\|\frac{\|\delta b\|}{\|b\|}
$$

### Interactive diagram

How much does a fixed right-hand-side perturbation amplify along a compressed direction?

$A=\operatorname{diag}(1,c)$ with original right-hand side $(1,c)$. Perturb only its vertical component. The plot uses equal units; large solutions may require a wider view.

Online diagram: #/lesson/la-conditioning?view=visual

### Guided experiment

1. **Uniform scale** Set $c=1,\delta=0.01$.

Preset observation: The vertical solution changes by $0.01$; condition number one.

2. **Compress by ten** Set $c=0.1,\delta=0.01$.

Preset observation: The vertical solution changes by $0.1$; condition number ten.

3. **Compress by one hundred** Set $c=0.01,\delta=0.01$.

Preset observation: The vertical solution changes by one; condition number one hundred.

### Worked examples

#### Example 1: A compressed direction

Given $A=\operatorname{diag}(1,0.01),b=(1,0.01)$, increase the right-hand side's vertical component by $0.001$.

- The original solution is $(1,1)$.
- The new solution is $(1,1.1)$. A data change of one thousandth changes the vertical solution by one tenth.
- The condition number is $100$, consistent with the relative-error bound.

**Answer: $\delta x=(0,0.1)$.**

#### Example 2: Uniformly small need not mean ill-conditioned

Find the condition number of $A=10^{-6}I_2$.

- Both singular values equal $10^{-6}$.
- Their ratio is one.

**Answer: 1.**

### Common mistakes

- **A determinant near zero alone establishes ill-conditioning.** Use a relative scale such as the singular-value ratio.

- **A small residual guarantees a small solution error.** An ill-conditioned system can amplify a small residual into a substantial solution error.

### Exercises and solutions

**1. Find the condition number of $\operatorname{diag}(10,0.1)$.**

Hint: Divide the largest singular value by the smallest.

Answer: 100

- $10/0.1=100$.

**2. Find the two-norm condition number of an orthogonal matrix.**

Hint: Every singular value is one.

Answer: 1

- Their ratio is one.

**3. How does multiplying invertible $A$ by a nonzero scalar affect its condition number?**

Hint: Numerator and denominator scale together.

Answer: Unchanged.

- The ratio is unchanged.

**4. Can a singular square matrix use the finite inverse-based condition-number bound?**

Hint: Its inverse does not exist.

Answer: No.

- No. Discuss pseudoinverses, rank, or regularization instead.

Prerequisites: Singular value decomposition, Inverses and the invertible matrix theorem.

## Chapter review

Try independently before reading the solutions.

**1. Given $A=\operatorname{diag}(6,-2,0)$, find rank and pseudoinverse.**

Hint: Singular values are nonnegative; the pseudoinverse must restore the original direction signs.

Answer: Rank two; pseudoinverse above.

- Two nonzero singular values give rank two.
- The pseudoinverse is $\operatorname{diag}(1/6,-1/2,0)$.

**2. With singular values $8,4,1$, find both best rank-two approximation errors.**

Hint: Only one direction is discarded.

Answer: Both one.

- Spectral and Frobenius errors both equal one.

**3. Find the condition number of $A=\operatorname{diag}(100,0.5)$. What if the whole matrix is divided by ten?**

Hint: Calculate the singular-value ratio.

Answer: Both are 200.

- $100/0.5=200$; uniform scaling preserves the ratio.

# Chapter 10 · Iteration, networks, and data analysis

Use matrix language for state changes, network conservation, and data reduction. Every model identifies inputs, constraints, and meaning first.

Goals:
- Build Markov and recurrence models
- Analyze graph incidence matrices
- Perform PCA and choose appropriate tools

## 10.1 Markov matrices and steady states

*Transition probabilities and invariant distributions*

### The idea

A Markov matrix updates a distribution with nonnegative transition probabilities. A steady state is a probability vector with eigenvalue one.

### Intuition

Each column distributes one old state's probability among new states. Column sums of one preserve total probability.

### Another explanation

A steady state is a distribution that stays fixed. Convergence asks whether other distributions approach it. These are different questions.

### Quick check

Does existence of a steady state guarantee that every initial state converges to it?

A. Yes
B. No
C. Yes, whenever total probability is one

Answer: B. A periodic update can repeatedly exchange two states.

### Which convention does this book use?

Probability distributions are columns and update by $p_{k+1}=Pp_k$, so $P$ has column sums one. A row-vector convention transposes this; do not mix them.

### How do you find a steady state?

Solve $(P-I)p_*=0$, then require nonnegative components summing to one. An arbitrary eigenvector is not automatically a probability distribution.

### Must iteration converge?

No; periodic chains can oscillate. If every matrix entry is strictly positive, a unique steady state attracts every initial distribution. More general cases need irreducibility, aperiodicity, and related hypotheses.

### Definition and conditions

Markov matrices and steady states

$$
P_{ij}\ge0,\quad\mathbf1^TP=\mathbf1^T,\quad Pp_*=p_*,\quad\mathbf1^Tp_*=1
$$

- $P$ is a finite-state column-stochastic matrix and steady states must be nonnegative. The strictly positive convergence result is a cited Perron-Frobenius special case, not proved by finite iteration plots.

### Derivation

Total probability is preserved by updating.

$$
\mathbf1^Tp_{k+1}=\mathbf1^TPp_k=\mathbf1^Tp_k
$$

A steady state is unchanged by updating.

$$
(P-I)p_*=0
$$

In the two-state example, the other eigenvalue controls decay away from the steady direction.

$$
p_k=p_*+0.5^k(p_0-p_*)
$$

### Interactive diagram

Do different initial distributions approach the same limit for a strictly positive transition matrix?

Fix strictly positive transition matrix $P=\begin{pmatrix}0.8&0.3\\0.2&0.7\end{pmatrix}$ with initial distribution $(a,1-a)$.

Online diagram: #/lesson/la-markov?view=visual

### Guided experiment

1. **Initial state** Set $a=1,n=0$.

Preset observation: All probability is in the first state.

2. **One update** Set $a=1,n=1$.

Preset observation: The distribution is $(0.8,0.2)$.

3. **Near the steady state** Set $a=1,n=8$.

Preset observation: The first component is $0.6015625$, near but not yet equal to $0.6$.

### Worked examples

#### Example 1: Find and verify a steady state

Find the steady state of $P=\begin{pmatrix}0.8&0.3\\0.2&0.7\end{pmatrix}$.

- Use $0.2p_1=0.3p_2$ together with $p_1+p_2=1$.
- Obtain $(0.6,0.4)$ and verify by matrix multiplication.

**Answer: The steady state is $(0.6,0.4)^T$.**

#### Example 2: A stochastic matrix without convergence

Start $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ at $(1,0)$.

- Each update switches states, then switches back.
- A steady state $(1/2,1/2)$ exists, but this initial state oscillates periodically.

**Answer: No convergence.**

### Common mistakes

- **Every initial state of a stochastic matrix converges.** Periodicity or multiple closed classes can prevent this conclusion.

- **Solving the eigenvalue equation gives a steady state without normalization.** Probability constraints are also required.

### Exercises and solutions

**1. Does $P=\begin{pmatrix}0.9&0.4\\0.1&0.6\end{pmatrix}$ satisfy the column-stochastic convention?**

Hint: Check nonnegativity and each column sum.

Answer: Yes.

- Both columns are nonnegative and sum to one.

**2. Find the first component of the probability steady state for column-stochastic $P=\begin{pmatrix}0.9&0.4\\0.1&0.6\end{pmatrix}$.**

Hint: Balance transitions between states.

Answer: 0.8

- $0.1p_1=0.4p_2$; normalization gives $p_1=0.8$.

**3. Which eigenvalue must a column-stochastic matrix have?**

Hint: The all-ones row is a left eigenvector.

Answer: 1

- $P^T\mathbf1=\mathbf1$; $P$ and its transpose share a characteristic polynomial.

**4. Is the identity transition matrix's steady state unique?**

Hint: Every initial distribution stays fixed.

Answer: Not unique.

- Every probability vector is a steady state.

Prerequisites: Diagonalization and similar matrices.

## 10.2 Matrix powers and linear recurrences

*Initial conditions select the modes present*

### The idea

A linear recurrence repeatedly applies one matrix. Eigendirections determine how components grow, decay, or oscillate.

### Intuition

Decompose the initial state into eigendirections, multiply each coefficient by an eigenvalue power, then recombine.

### Another explanation

The matrix specifies possible behaviors; the initial state determines which actually occur.

### Quick check

Does a growing eigendirection affect every initial state?

A. Always
B. Only when the initial state has a component in that direction
C. It depends only on matrix size

Answer: B. A coefficient in the decomposition may be zero.

### How do you form the matrix state?

Stack the quantities that must be remembered. A second-order scalar recurrence becomes a first-order two-dimensional system.

### How do you read long-term behavior?

For diagonalizable systems, components with $|\lambda|<1$ decay and those with $|\lambda|>1$ grow. Negative eigenvalues alternate signs. A direction absent from the initial state contributes nothing.

### Does unit magnitude guarantee stability?

No. A defective Jordan block can produce polynomial growth; for example, the off-diagonal entry of $\begin{pmatrix}1&1\\0&1\end{pmatrix}^k$ is $k$.

### Definition and conditions

Matrix powers and linear recurrences

$$
x_{k+1}=Ax_k\Rightarrow x_k=A^kx_0,\qquad A=SDS^{-1}\Rightarrow x_k=SD^kS^{-1}x_0
$$

- $k$ is a nonnegative integer. The separated eigendirection formula requires diagonalizability. Finite diagrams do not prove long-term limits.

### Derivation

Substitute the recurrence repeatedly.

$$
x_k=AA\cdots Ax_0=A^kx_0
$$

Convert initial data to eigenvector coordinates.

$$
c=S^{-1}x_0
$$

Raise each directional scale to the power.

$$
x_k=\sum_i c_i\lambda_i^k v_i
$$

### Interactive diagram

How does the trajectory change when a scaling crosses one or becomes negative?

Fix initial state $(1,1)$ and matrix $\operatorname{diag}(a,1/2)$. Inspect successive iteration states.

Online diagram: #/lesson/la-recurrences?view=visual

### Guided experiment

1. **Both directions decay** Set $a=0.8,n=6$.

Preset observation: Both components are smaller than their initial values.

2. **A growing direction** Set $a=1.2,n=6$.

Preset observation: The first component exceeds its initial value while the second keeps decaying.

3. **Alternating decay** Set $a=-0.8,n=5$.

Preset observation: The first component is negative and its magnitude decreases with iteration.

### Worked examples

#### Example 1: Initial data can avoid a growing direction

Given $A=\operatorname{diag}(1/2,2)$ with initial state $(1,0)$.

- $x_k=(2^{-k},0)$.
- The initial state has no component in the second eigendirection. Despite a growing direction, this trajectory decays.

**Answer: It tends to zero.**

#### Example 2: Fibonacci in matrix form

$F_0=0,F_1=1,F_{k+2}=F_{k+1}+F_k$.

- State $(F_{k+1},F_k)^T$ updates by $A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$.
- Eigenvalues are $\phi=(1+\sqrt5)/2$ and $\psi=(1-\sqrt5)/2$.
- Matching initial conditions gives $F_k=(\phi^k-\psi^k)/\sqrt5$.

**Answer: Matrix eigendecomposition produces the recurrence's closed form.**

### Common mistakes

- **An eigenvalue larger than one makes every initial state grow.** The corresponding initial component may be zero.

- **Eigenvalues of unit magnitude always give bounded trajectories.** A nondiagonalizable repeated block can cause polynomial growth.

### Exercises and solutions

**1. $x_{k+1}=-x_k/2,x_0=1$, $x_3$?**

Hint: Multiply by the same scale three times.

Answer: $-1/8$

- $(-1/2)^3=-1/8$.

**2. $A=\operatorname{diag}(2,3)$, $x_0=(1,1)$, $x_2$?**

Hint: Square each component independently.

Answer: $(4,9)$.

- $(4,9)$.

**3. $J=I+N,N^2=0$, $J^k$?**

Hint: Higher binomial terms vanish.

Answer: $I+kN$.

- $J^k=I+kN$.

**4. In a diagonalizable system with all eigenvalue magnitudes less than one, what happens to every trajectory?**

Hint: Sum finitely many decaying terms.

Answer: It tends to zero.

- Each $\lambda_i^k\to0$, so every fixed initial state's trajectory tends to zero.

Prerequisites: Diagonalization and similar matrices, Repeated roots and eigenspace dimension.

## 10.3 Graphs, incidence matrices, and flow conservation

*From edge flows to net node inflows*

### The idea

An incidence matrix converts directed edge flows into net inflows at nodes.

### Intuition

Each edge subtracts flow at its source and adds the same flow at its destination. Total net inflow is therefore zero.

### Another explanation

A particular supply-demand flow plus any circulation preserves supply and demand. Separate node space from edge space before applying the kernel description.

### Quick check

What does an incidence matrix's kernel describe?

A. Circulating edge flows conserving every node
B. All node potentials
C. Any right-hand side

Answer: A. Kernel inputs lie in edge space and produce zero net node inflow.

### How is the matrix built?

Assign each edge an orientation. Its column has $-1$ at the source, $1$ at the destination, and zeros elsewhere. A negative flow means the actual direction is reversed.

### What do the kernels mean?

$Bf=0$ describes circulating flows conserving every node. $B^Tp=0$ means equal potentials at both ends of each edge, so $p$ is constant on each connected component.

### What is the Laplacian?

$L=BB^T$ is symmetric positive semidefinite. Its quadratic form sums squared differences across adjacent nodes; a connected graph's kernel is spanned by the all-ones vector.

### Definition and conditions

Graphs, incidence matrices, and flow conservation

$$
b=Bf,\quad\mathbf1^TB=0,\quad L=BB^T,\quad p^TLp=\|B^Tp\|^2
$$

- Start with a finite undirected graph and choose edge orientations, using the usual convention without self-loops. Each connected component must separately have zero total net inflow.

### Derivation

Each edge column sums to zero.

$$
\mathbf1^TB=0
$$

Thus total net inflow is zero.

$$
\mathbf1^Tb=\mathbf1^TBf=0
$$

Equal neighboring potentials make the square sum zero.

$$
\ker L=\ker B^T=\{\text{constants on each connected component}\}
$$

### Interactive diagram

Does adding the same circulation to every edge change any node's net inflow?

Orient triangle edges cyclically. Flows may be negative; node readings are $c-a,a-b,b-c$.

Online diagram: #/lesson/la-networks?view=visual

### Guided experiment

1. **Conserved circulation** Set $a=b=c=1$.

Preset observation: Every node has zero net inflow.

2. **One edge only** Set $a=1,b=c=0$.

Preset observation: Net inflows are $(-1,1,0)$ and sum to zero.

3. **Reverse an edge** Set $a=-1,b=c=0$.

Preset observation: Net inflows are $(1,-1,0)$; negative flow means reversal.

### Worked examples

#### Example 1: Circulation on a triangle

Orient three-node edges by $1\to2,2\to3,3\to1$, with flows $(1,1,1)$.

- $B=\begin{pmatrix}-1&0&1\\1&-1&0\\0&1&-1\end{pmatrix}$.
- Each node has one inflow and one outflow: $Bf=0$.

**Answer: This is a nonzero circulation.**

#### Example 2: Every flow with prescribed net inflow

On the same graph, require $b=(1,-1,0)$.

- The equations give $f_3-f_1=1,f_1-f_2=-1,f_2-f_3=0$.
- Set $f_2=f_3=t$; then $f_1=t-1$.

**Answer: $f=(-1,0,0)+t(1,1,1)$.**

### Common mistakes

- **A negative flow makes a solution invalid.** The edge orientation is a convention; negative means actual flow is opposite.

- **Zero total net inflow suffices on every graph.** Each connected component must conserve separately.

### Exercises and solutions

**1. What rank has the incidence matrix of a connected four-node graph?**

Hint: The transpose kernel contains only constant potentials.

Answer: 3

- Its rank is $4-1=3$.

**2. What is the circulation-space dimension of a three-node tree?**

Hint: A tree has two edges and rank two.

Answer: 0

- Nullity is $2-2=0$.

**3. Does reversing one edge's chosen orientation change the Laplacian?**

Hint: The corresponding column of $B$ changes sign.

Answer: Unchanged.

- Its outer product is unchanged, so $BB^T$ is unchanged.

**4. In the triangle example, find squared flow norm at $t=1/3$.**

Hint: Substitute all three edge flows.

Answer: $2/3$

- $(-2/3)^2+(1/3)^2+(1/3)^2=2/3$.

Prerequisites: The four fundamental subspaces, Positive definite and semidefinite matrices.

## 10.4 Principal component analysis and centering

*Preserve the most variance by projection*

### The idea

PCA finds orthogonal directions retaining the most variance in centered data.

### Intuition

Project data onto a line that retains maximal variation and minimizes squared reconstruction error.

### Another explanation

PCA combines the spectral theorem, projection, and low-rank approximation in one data problem. Its objective is precise, as are its limitations.

### Quick check

What does subtracting the mean separate?

A. Overall position from data variation
B. Positive from negative values
C. Rows from columns

Answer: A. Principal directions describe variation around the mean, rather than distance of the whole dataset from the origin.

### Why subtract the mean first?

Without centering, a global offset from the origin can appear as dominant variation. PCA axes usually pass through the sample mean; add it back during reconstruction.

### How is the data matrix arranged?

Samples are rows of $X\in\mathbb R^{N\times d}$, with zero column means. Use population-style covariance $C=X^TX/N$.

### How does SVD enter?

If $X=U\Sigma V^T$, principal directions are columns of $V$, with variances $\sigma_i^2/N$. Scores are $XV_k$ and reconstruction is $XV_kV_k^T$.

### Definition and conditions

Principal component analysis and centering

$$
\max_{\|v\|=1}\frac1N\|Xv\|^2=\lambda_{\max}(C),\quad C=\frac1N X^TX
$$

- Center each column first. We divide covariance by $N$; using $N-1$ rescales variances without changing principal directions. Whether differently scaled features should be standardized depends on the modeling objective.

### Derivation

Mean squared projection score is directional variance.

$$
\operatorname{var}(Xv)=v^TCv
$$

Maximize using the Rayleigh quotient.

$$
Cv_1=\lambda_1v_1
$$

Total squared variation minus retained variation gives reconstruction error.

$$
\|X-XV_kV_k^T\|_F^2=\sum_{i>k}\sigma_i^2
$$

### Interactive diagram

How do retained variance and reconstruction error trade off as the direction rotates?

The four points are $(\pm2,0),(0,\pm1)$ with zero mean. Project onto a rotating line and compare retained variance with total squared reconstruction error.

Online diagram: #/lesson/la-pca?view=visual

### Guided experiment

1. **Principal direction** Set $\theta=0$.

Preset observation: Retained variance two, squared reconstruction error two.

2. **Oblique direction** Set $\theta=\pi/4$.

Preset observation: Retained variance $1.25$, squared reconstruction error five.

3. **Secondary direction** Set $\theta=\pi/2$.

Preset observation: Retained variance $0.5$, squared reconstruction error eight.

### Worked examples

#### Example 1: Principal axes differ from mean position

For centered points $(2,0),(-2,0),(0,1),(0,-1)$, find the first principal direction.

- $C=\operatorname{diag}(2,1/2)$.
- The horizontal direction retains variance two; dropping vertical coordinates leaves total squared reconstruction error two.

**Answer: Horizontal; explained variance ratio $2/(2+1/2)=0.8$.**

#### Example 2: An oblique principal direction

Find the principal direction of the four points $(2,2),(-2,-2),(1,-1),(-1,1)$.

- Their mean is zero and $C=\begin{pmatrix}2.5&1.5\\1.5&2.5\end{pmatrix}$.
- The largest eigenvalue is four, with direction $(1,1)/\sqrt2$.

**Answer: Along the diagonal, retaining variance four.**

### Common mistakes

- **The principal component is the variable with the largest mean.** It combines centered directions, rather than selecting a large mean.

- **Preserving variance always preserves the most task-relevant information.** PCA optimizes unsupervised squared reconstruction and can discard information important for classification or causation.

### Exercises and solutions

**1. What should each column mean be after centering?**

Hint: Subtract its original mean.

Answer: 0

- Each column sums to zero.

**2. Given eigenvalues $9,1$, find the first component's explained variance ratio.**

Hint: Divide the largest by the sum.

Answer: 0.9

- $9/10=0.9$.

**3. Does rotating into all principal coordinates without discarding dimensions lose information?**

Hint: Keeping all coordinates makes the orthogonal change reversible.

Answer: No.

- Recover centered data with the transpose, then add the mean.

**4. Does replacing covariance divisor $N$ by $N$-1 change principal directions?**

Hint: All entries scale by one positive constant.

Answer: No.

- Eigenvectors stay fixed and eigenvalues scale together.

Prerequisites: Truncated SVD and optimal low-rank approximation, Rayleigh quotients and extrema on the unit sphere.

## 10.5 Choosing a linear algebra tool

*Choose a factorization for the objective*

### The idea

Decide whether you need an exact solve, an approximate fit, repeated iteration, or compression before choosing a factorization.

### Intuition

Writing a matrix equation is only the start. Reachability, uniqueness, and error sensitivity determine the next tool.

### Another explanation

The ideas connect: kernels and images explain solutions, orthogonality explains nearest points, eigenvalues explain iteration, and singular values explain general scaling and approximation.

### Quick check

What is the best first step for a new problem?

A. Calculate an inverse
B. Specify inputs, outputs, constraints, and objective
C. Delete small entries

Answer: B. A tool's hypotheses come from the problem structure.

### What comes first in an exact solve?

Check size and rank, then consistency. Describe solutions as a particular solution plus kernel. Reuse LU for repeated invertible solves and Cholesky for positive definite systems.

### How do you handle errors?

Least squares finds the nearest output; QR handles full-column-rank fits; SVD and pseudoinverses handle rank deficiency and minimum norm. Inspect singular values and conditioning for sensitivity.

### How do eigendecomposition and SVD differ?

Repeated updates of one state favor eigenstructure. Length scaling, rectangular matrices, and compression favor SVD. Familiarity with a formula does not establish its hypotheses.

### Definition and conditions

Choosing a linear algebra tool

$$
\text{Exact solve: }Ax=b;\quad\text{fit: }\min\|Ax-b\|;\quad\text{iterate: }A^k;\quad\text{compress: }A_k
$$

- Every tool has size, rank, symmetry, and numerical hypotheses. This summary adds no unconditional guarantee.

### Derivation

Check structure and reachability.

$$
b\in\operatorname{col}A\ ?
$$

Separate output uniqueness from input uniqueness.

$$
\ker A=\{0\}\ ?
$$

Choose a factorization matching the objective.

$$
PA=LU,\quad A=QR,\quad A=Q\Lambda Q^T,\quad A=U\Sigma V^T
$$

### Interactive diagram

How do preserved, compressed, and lost directions affect the choice of solving tool?

Blue shows the original grid and unit circle; green shows their image under $A$. Gold shows the image of $(1,1)$. The four inputs change the matrix entries.

Online diagram: #/lesson/la-choosing-tools?view=visual

### Guided experiment

1. **Identity** Set $A=I$.

Preset observation: The grid, circle, and vector stay unchanged.

2. **Shear** Set $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$.

Preset observation: The unit square tilts while its area remains one.

3. **Collapse to a line** Set $A=\operatorname{diag}(1,0)$.

Preset observation: Vertical information is lost; rank drops to one.

### Worked examples

#### Example 1: Exact solutions can still need a shortest-input choice

For $x+y=2$, distinguish all exact solutions from the minimum-norm one.

- Every exact solution is $(1+t,1-t)$.
- Squared input length is $2+2t^2$, minimized at $(1,1)$.

**Answer: The kernel explains nonuniqueness; the pseudoinverse chooses the shortest input.**

#### Example 2: Factor a positive definite system

Which factorization should repeated solves of $\begin{pmatrix}4&2\\2&3\end{pmatrix}x=b$ reuse?

- The matrix is real symmetric with positive leading principal minors.
- Save $L=\begin{pmatrix}2&0\\1&\sqrt2\end{pmatrix}$ and use two triangular solves for each right-hand side.

**Answer: Reuse Cholesky; no repeated inverses are needed.**

### Common mistakes

- **Always calculate an inverse first.** Rectangular and singular matrices lack an ordinary inverse, and direct factorization is often preferable.

- **A diagram agreeing with a few numbers proves the general result.** Diagrams test specific models; theorems still need their hypotheses and arguments.

### Exercises and solutions

**1. With noisy observations and generally inconsistent equations, which problem should come first?**

Hint: State the objective first.

Answer: Least squares.

- Minimize $\|Ax-b\|^2$ and check the modeling assumptions.

**2. Can a matrix with no real eigendirections still use SVD?**

Hint: SVD does not require a real eigenbasis of $A$.

Answer: Yes.

- Every real matrix has an SVD.

**3. Which space contains the difference of two solutions?**

Hint: Subtract solutions with the same right-hand side.

Answer: The null space.

- $A(x_1-x_2)=0$.

**4. Which tool retains the $k$ most important length-variation directions?**

Hint: The matrix may be rectangular.

Answer: Truncated SVD.

- Truncate in decreasing singular-value order.

Prerequisites: Pseudoinverses and minimum-norm solutions, Condition numbers and error amplification, Principal component analysis and centering, Graphs, incidence matrices, and flow conservation.

## Chapter review

Try independently before reading the solutions.

**1. Find the steady state of $P=\begin{pmatrix}0.6&0.2\\0.4&0.8\end{pmatrix}$.**

Hint: Balance the two-state transitions.

Answer: $(1/3,2/3)^T$.

- $0.4p_1=0.2p_2$; normalization gives $(1/3,2/3)$.

**2. A connected graph has five nodes and six edges. Find its circulation-space dimension.**

Hint: Incidence rank equals nodes minus one.

Answer: 2

- Rank four and six edge variables give nullity two.

**3. Centered data have covariance $\operatorname{diag}(5,2,1)$. What variance ratio does one-dimensional PCA retain?**

Hint: Divide the first eigenvalue by their sum.

Answer: $5/8$

- $5/(5+2+1)=5/8$.

# Final assessment

Try independently before revealing the solutions. Use them for self-assessment, not certification.

**1. Solve $x+y+z=3,x-y+z=1$ and give its kernel direction.**

Hint: Subtract first, then choose a free parameter.

Answer: All solutions are above, with kernel direction $(-1,0,1)$.

- $y=1,x+z=2$, hence $(x,y,z)=(2,1,0)+t(-1,0,1)$.

**2. Given $A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$, find an input recovering output $(3,4)$.**

Hint: Back substitute directly.

Answer: $(1,2)$.

- $2y=4$ gives $y=2$; then $x+y=3$ gives $x=1$.

**3. Is $T(x,y)=(x+y,0,x-y)$ injective and onto three-dimensional space?**

Hint: Compare column independence with output constraints.

Answer: Injective, but not onto three-dimensional space.

- The kernel is zero, so it is injective. Every output has second component zero, so it is not onto three-dimensional space.

**4. Give a basis for the solution space of $x+2y-z=0$.**

Hint: Choose $y$ and $z$ freely.

Answer: $((-2,1,0),(1,0,1))$.

- $(x,y,z)=s(-2,1,0)+t(1,0,1)$; the two columns are independent.

**5. Given $B=((1,1),(2,-1))$, find the basis coordinates of $(4,1)$.**

Hint: Solve for the coefficients.

Answer: $(2,1)^T$.

- $a+2b=4,a-b=1$ gives $b=1,a=2$.

**6. If $A$ is $7\times5$ with nullity two, find rank and left nullity.**

Hint: Apply rank-nullity on the input side first.

Answer: Rank three, left nullity four.

- Rank is $5-2=3$ and left nullity $7-3=4$.

**7. Find $\det\begin{pmatrix}1&0&2\\2&3&0\\0&1&1\end{pmatrix}$.**

Hint: Expand along the first row.

Answer: 7

- The first contribution is three and the third is $2\cdot2=4$.

**8. Find both eigenspaces of $A=\begin{pmatrix}5&2\\0&1\end{pmatrix}$.**

Hint: Solve the two homogeneous systems separately.

Answer: $E_1=\operatorname{span}((1,-2))$.

- $E_5=\operatorname{span}((1,0))$; $E_1$ requires $4x+2y=0$.

**9. For $J=\begin{pmatrix}1&2\\0&1\end{pmatrix}$, find $J^k$.**

Hint: Write it as identity plus a square-zero matrix.

Answer: $\begin{pmatrix}1&2k\\0&1\end{pmatrix}$.

- $N=J-I$ satisfies $N^2=0$, so $J^k=I+kN$.

**10. Project $(2,1,2)$ onto the plane with normal $(1,1,1)$.**

Hint: Subtract the normal projection.

Answer: $(1/3,-2/3,1/3)$.

- The normal projection is $(5/3,5/3,5/3)$.
- The planar projection is $(1/3,-2/3,1/3)$, whose components sum to zero.

**11. Find the orthogonal complement of $W=\operatorname{span}((1,0,1),(0,1,1))$.**

Hint: Set the dot product with each generator to zero.

Answer: $\operatorname{span}((-1,-1,1))$.

- $x+z=0,y+z=0$.

**12. Fit a constant to 1, 3, 5, and 7. Find the minimum squared error.**

Hint: The mean is four.

Answer: 20

- Residual $(-3,-1,1,3)$ has squared sum twenty.

**13. Find the smallest unit-sphere quadratic value of $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ and its directions.**

Hint: Test aligned and opposing directions.

Answer: Minimum one, attained at $\pm(1,1)/\sqrt2$.

- Eigenvalue one has direction $(1,1)$; three has direction $(1,-1)$.

**14. Find the Cholesky factor of $A=\begin{pmatrix}1&2\\2&5\end{pmatrix}$.**

Hint: The first root is one; subtract the square four.

Answer: $\begin{pmatrix}1&0\\2&1\end{pmatrix}$.

- $L=\begin{pmatrix}1&0\\2&1\end{pmatrix}$; verify by multiplication.

**15. Given $A=\operatorname{diag}(-4,2)$, find singular values and condition number.**

Hint: Length scaling ignores reversal signs.

Answer: Singular values four and two; condition number two.

- Singular values four and two give condition number two.

**16. Given $A=(2\ 0),b=6$, find the minimum-norm solution.**

Hint: Match the first coordinate and set kernel coordinates to zero.

Answer: $(3,0)^T$.

- $x_1=3,x_2$ is arbitrary; length is minimized at $x_2=0$.

**17. With singular values $7,3,2,1$, find the Frobenius error of the best rank-one truncation.**

Hint: Sum the squares of discarded values.

Answer: $\sqrt{14}$.

- $\sqrt{9+4+1}=\sqrt{14}$.

**18. Given $P=\begin{pmatrix}0.75&0.5\\0.25&0.5\end{pmatrix}$, find the first steady-state component.**

Hint: Combine probability normalization with transition balance.

Answer: $2/3$

- $0.25p_1=0.5p_2$, so $p_1=2/3$.

**19. A loop-free graph has two connected components, six nodes, and seven edges. Find incidence rank and nullity.**

Hint: Each component has one constant-potential degree of freedom.

Answer: Rank four, nullity three.

- Rank is $6-2=4$ and circulation dimension $7-4=3$.

**20. Centered data have singular values $6,3,1$. What variance ratio do two principal components retain?**

Hint: The covariance sample-count factor cancels in the ratio.

Answer: $45/46$

- Retained squared sum is forty-five; total squared sum forty-six.

# Glossary

- **Vectors and linear combinations**: A linear combination scales and adds fixed vectors to form a new vector.

- **Row and column views of a system**: A system describes both an intersection of geometric constraints and a linear combination.

- **Gaussian elimination and row operations**: Elimination removes unknowns step by step while preserving the entire solution set.

- **Pivots, consistency, and free variables**: Pivots identify independent constraints on variables. A contradiction row signals no solution.

- **Parametric form and the full solution set**: A particular solution plus every homogeneous solution describes all solutions of a consistent linear system.

- **Matrices, transposes, and multiplication**: A matrix-vector product combines the matrix columns using the input coefficients.

- **Linear maps and standard matrices**: A linear map preserves addition and scalar multiplication, so its basis images determine it completely.

- **Composition, rotations, and shears**: Matrices for composed maps multiply in right-to-left order of action.

- **Inverses and the invertible matrix theorem**: An invertible square matrix allows each output to recover exactly one input.

- **LU factorization and repeated solves**: LU saves elimination steps so one coefficient matrix can handle multiple right-hand sides.

- **Vector spaces and subspaces**: A subspace is a subset that remains closed under the original addition and scalar multiplication.

- **Span and spanning sets**: The span is the set of all linear combinations of the given vectors.

- **Linear independence and redundant directions**: Independence means that only all-zero coefficients combine the vectors to give zero.

- **Bases and unique representation**: A basis spans the entire space without redundancy, giving unique coordinates.

- **Dimension, extension, and basis size**: Every basis of a finite-dimensional space has the same size, called its dimension.

- **Basis coordinates and change of basis**: A change of basis changes a vector's coordinates, not the vector itself.

- **Kernel and null space**: The null space contains all input directions that the matrix sends to zero.

- **Column space and row space**: The column space contains reachable outputs. The row space is spanned by the rows viewed as vectors in the input space.

- **Rank-nullity, injectivity, and surjectivity**: Input dimension equals the dimension of independent outputs plus the dimension lost completely.

- **The four fundamental subspaces**: The rows, columns, and two kernels split input and output into complementary orthogonal parts.

- **Determinants and oriented volume**: The determinant's magnitude gives volume scaling; its sign records an orientation reversal.

- **Determinant rules**: Row-operation and product rules let you calculate determinants during elimination.

- **Cofactor expansion and the determinant**: Expanding along one row or column recursively reduces a determinant's size.

- **Determinants, inverses, and Cramer's rule**: A square matrix is invertible exactly when its determinant is nonzero. Cramer's rule expresses the unique solution using determinants of replaced columns.

- **Eigenvectors and eigenspaces**: An eigenvector is a nonzero vector whose image is a scalar multiple of itself.

- **Characteristic polynomials, trace, and determinant**: The characteristic polynomial finds all scalar shifts that make a matrix singular.

- **Repeated roots and eigenspace dimension**: A repeated eigenvalue need not provide enough independent eigenvectors.

- **Diagonalization and similar matrices**: In an eigenvector basis, the matrix is diagonal and scales each coordinate separately.

- **Complex eigenvalues and planar rotation**: A real matrix may lack real eigendirections. Complex numbers extend eigenvalue language to rotation.

- **Inner products, lengths, and angles**: The inner product measures alignment and defines length and distance.

- **Vector projection and nearest points**: Orthogonal projection is the vector in a specified subspace nearest to the target.

- **Orthogonal complements and decompositions**: The orthogonal complement contains vectors perpendicular to every vector in a subspace.

- **Gram-Schmidt orthogonalization**: Orthogonalization removes projections onto known directions, retaining each new independent part.

- **QR factorization**: QR expresses matrix columns using orthonormal directions and their combination coefficients.

- **Least squares and normal equations**: When an exact system has no solution, least squares minimizes squared residual length.

- **Real symmetric matrices and the spectral theorem**: Every real symmetric matrix is diagonalizable in an orthonormal eigenbasis.

- **Quadratic forms and principal axes**: A real symmetric quadratic form becomes a signed sum of squares in an orthonormal basis.

- **Positive definite and semidefinite matrices**: Positive definiteness requires a strictly positive quadratic form for every nonzero input.

- **Cholesky factorization and completing squares**: A real symmetric positive definite matrix uniquely factors into a lower-triangular matrix with positive diagonal times its transpose.

- **Rayleigh quotients and extrema on the unit sphere**: A symmetric matrix's quadratic-form extrema on the unit sphere are its smallest and largest eigenvalues.

- **Singular values and length scaling**: Singular values measure length scaling along special orthogonal input directions and are always nonnegative.

- **Singular value decomposition**: Every real matrix factors into an orthogonal input transformation, nonnegative directional scaling, and an orthogonal output transformation.

- **Pseudoinverses and minimum-norm solutions**: The pseudoinverse selects the shortest input among all least-squares solutions.

- **Truncated SVD and optimal low-rank approximation**: Keeping the largest singular values approximates a matrix with fewer directions and gives exact truncation errors.

- **Condition numbers and error amplification**: A condition number bounds how small data errors can amplify into relative solution errors in sensitive directions.

- **Markov matrices and steady states**: A Markov matrix updates a distribution with nonnegative transition probabilities. A steady state is a probability vector with eigenvalue one.

- **Matrix powers and linear recurrences**: A linear recurrence repeatedly applies one matrix. Eigendirections determine how components grow, decay, or oscillate.

- **Graphs, incidence matrices, and flow conservation**: An incidence matrix converts directed edge flows into net inflows at nodes.

- **Principal component analysis and centering**: PCA finds orthogonal directions retaining the most variance in centered data.

- **Choosing a linear algebra tool**: Decide whether you need an exact solve, an approximate fit, repeated iteration, or compression before choosing a factorization.

# Proof supplements and scope

## Vector space axioms

Over the real numbers, a vector set has addition and scalar multiplication. Addition is closed, commutative, and associative, with zero and additive inverses. Scaling is closed and satisfies $a(u+v)=au+av$, $(a+b)v=av+bv$, $a(bv)=(ab)v$, and $1v=v$. Together these define a real vector space. Matrices and bounded-degree polynomials use ordinary operations, satisfying the rules componentwise or coefficientwise. Different operations must be checked anew; an object's name does not settle the axioms.

## Notation, matrix norms, and complex conventions

Vectors are columns; $A^T$ denotes transpose and $A^*=\bar A^T$ conjugate transpose. The standard real inner product is $x^Ty$. Our complex convention is $x^*y$, conjugate-linear in the first argument. Matrix two-norm is $\max_{\|x\|=1}\|Ax\|$ and Frobenius norm $\|A\|_F=(\sum_{i,j}|a_{ij}|^2)^{1/2}$. A maximum over unit vectors exists because a continuous function on a finite-dimensional compact set attains its extrema. This basic analytical fact does not require completing a computational calculus course first.

## Why the exchange lemma makes dimension unique

Suppose $u_1,\ldots,u_k$ is independent and $v_1,\ldots,v_m$ spans the space. Express $u_1$ in that spanning list; some coefficient is nonzero, allowing replacement of the corresponding $v_j$ by $u_1$ without losing the span. At $u_2$, representation using only the already inserted $u_1$ would violate independence, so another original vector can be replaced. Repeating for the independent list requires $k\le m$. Applying this in both directions to two bases gives equal sizes and also yields finite-dimensional extension and reduction results.

## Why row rank, column rank, and nullity count pivots

Reversible row operations preserve the row space, homogeneous solutions, and column-dependence coefficients. Distinct leading positions make nonzero echelon rows independent. Pivot columns are independent and generate all other columns; invertible row operations transfer these relations back to the original matrix. Thus row and column ranks both count pivots. Setting one free variable to one and the others to zero gives independent homogeneous special solutions, whose parameter form spans the kernel. Rank plus nullity therefore equals the column count.

## Determinants and volume: definition and scope

A determinant is uniquely determined by multilinearity in columns, sign reversal under column swaps, and value one on the identity. Expanding columns in the standard basis leaves only terms selecting each row and column once, producing the signed permutation sum. Repeated columns give zero; shear invariance, scale factors, and swap signs follow. An invertible map factors into elementary transformations, whose volume factors multiply to the absolute determinant. A singular map has a lower-dimensional image and zero volume in the original dimension.

## Outline of the real symmetric spectral theorem

Maximize $x^TAx$ on the unit sphere at $v$. For any unit $w$ perpendicular to $v$, examine $q(v\cos t+w\sin t)$. If $v^TAw\ne0$, a sufficiently small $t$ of the same sign makes the linear change dominate quadratic terms, contradicting maximality. Thus $Av$ is parallel to $v$. Symmetry makes $v^\perp$ invariant under $A$: $v^TAw=(Av)^Tw=0$. Restrict to this lower-dimensional orthogonal complement and induct to obtain a complete orthonormal eigenbasis.

## Multiplicity bounds and minimum-norm solutions

Extend a basis of an eigenspace to the whole space. In this basis the matrix has upper-left block $\lambda I_g$ and zero lower-left block, so its characteristic polynomial contains at least factor $(t-\lambda)^g$. Geometric multiplicity cannot exceed algebraic multiplicity. For minimum norm, all least-squares inputs differ by kernel vectors. The pseudoinverse solution lies in the row space, perpendicular to the kernel, so adding kernel components only increases squared length.

## Frobenius optimality of low-rank approximation

For any rank-at-most-$k$ approximation $B$, place its column space inside a space $W$ of dimension at most $k$, with orthogonal projection $P$. Columnwise nearest-point optimality gives $\|A-B\|_F^2\ge\|(I-P)A\|_F^2=\|A\|_F^2-\|PA\|_F^2$. In the left singular basis, the retained part is $\sum_i\sigma_i^2\|Pu_i\|^2$. These weights lie between zero and one and sum to at most $k$, so this is bounded by the sum of the largest $k$ squared singular values. Taking the first $k$ left singular directions attains the bound.

## Markov convergence and the limits of this volume

Perron-Frobenius theory gives a unique steady state for a finite strictly positive column-stochastic matrix, with all other eigenvalues of magnitude below one. We cite rather than fully prove it. Nonnegative matrices not strictly positive need separate irreducibility and aperiodicity checks; finite animation does not establish convergence. Full Jordan form, abstract duality, tensors, general fields, infinite-dimensional operators, FFT, and systematic linear-programming algorithms belong to later volumes. This volume completes an introductory course in finite-dimensional real matrices and vector spaces.

## Finite diagrams and numerical precision

Geometry uses finite grids and floating-point numbers. Nearly dependent and exactly dependent vectors have different ranks. Intersections or inverse images can lie far outside the viewport; when omitted, their status must still be explained. Numerical tests check specific examples and models, not general theorems. Treating a small singular value as zero is a numerical modeling decision; these exact examples and diagrams do not silently replace arbitrary small nonzero values by zero.

# Sources and provenance

Explanations, derivations, worked examples, solutions, and diagrams were independently authored by AI. Sources informed scope, hypotheses, and teaching design. Original prose and images were not copied. Checks do not constitute formal proofs.

- [MIT OCW · 18.06 Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/syllabus/): Used to check introductory scope, the four fundamental subspaces, factorizations, and applications. This book's text, problems, figures, and solutions are independently authored; source notes, videos, and problem banks are not copied.

- [Georgia Tech · Interactive Linear Algebra](https://textbooks.math.gatech.edu/ila/overview.html): Used to check algebraic and geometric ordering and the hypotheses for solution sets, eigenspaces, and orthogonality. Source text, examples, and images are not copied.
